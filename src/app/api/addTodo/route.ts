import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try{
        const body=await req.json()
        const {name,date}=body
        
        // Validate input
        if (!name || typeof name !== "string" || !date || isNaN(Date.parse(date))) {
            return NextResponse.json({ success: false, message: "Invalid input" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("TodoData");
        const collection = db.collection("myTodoData");

        const result = await collection.insertOne({ userId:"user1",name, date });
        return NextResponse.json({ message: 'Todo added'
                                , newData:{_id: result.insertedId.toString(),
                                           name,
                                           date}});



    }catch(error){
        console.error("this error occured in post api",error)
        return NextResponse.json({success:false,massage:"couldn't save the Todo"},{status:500})
    }
}