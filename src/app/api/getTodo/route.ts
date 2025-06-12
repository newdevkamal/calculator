import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
    try {
        // Helper function to get date ranges based on filter type
        function getDateRange(type: string) {
            const now = new Date();
            const today = new Date(now);
            const tomorrow = new Date(now);
            tomorrow.setDate(today.getDate() + 1);
            const dayAfter = new Date(tomorrow);
            dayAfter.setDate(tomorrow.getDate() + 1);

            const formattedToday = today.toISOString().split('T')[0];
            const formattedTomorrow = tomorrow.toISOString().split('T')[0];
            const formattedDayAfter = dayAfter.toISOString().split('T')[0];

            switch (type) {
                case "today":
                    return { userId: "user1", date: formattedToday };
                case "tomorrow":
                    return { userId: "user1", date: formattedTomorrow };
                case "future":
                    return { userId: "user1", date: { $gte: formattedDayAfter } };
                case "past":
                    return { userId: "user1", date: { $lt: formattedToday } };
                default:
                    return {}; // No filter
            }
        }

        // Parse query parameters
        const { searchParams } = new URL(request.url);
        const filterType = searchParams.get("filterType") || "";

        // Validate filterType
        const allowedFilters = ["today", "tomorrow", "future", "past", ""];
        if (!allowedFilters.includes(filterType)) {
            return NextResponse.json(
                { success: false, error: "Invalid search parameter" },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("TodoData");
        const collection = db.collection("myTodoData");

        // Query the database
        const queryValues = getDateRange(filterType);
        const data = await collection.find(queryValues).toArray();

        // Return the response
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error in GET /api/getTodo:", error);
        return NextResponse.json(
            { success: false, error: "Could not fetch the data" },
            { status: 500 }
        );
    }
}