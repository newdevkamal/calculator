import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(req:Request){
    try{
        const {searchParams} = new URL(req.url)
        const todoId=searchParams.get("id")

        // Get new data from request body
        const { name, date } = await req.json();

        //validate data
        if(!todoId){
            return NextResponse.json({success:false,message:"todo Id is missing"},{status:400})
        }

        const client=await clientPromise
        const db=client.db("TodoData")
        const collection=db.collection("myTodoData")

    // Update the document
    const result = await collection.updateOne(
        { _id: new ObjectId(todoId) },
        { $set: {name, date } }
    );

    if (result.matchedCount === 0) {
        return NextResponse.json({success:false, message:"Todo not found"});
    } 

    return NextResponse.json({success:true, message:"Todo updated",
                        updatedTodo:{_id:todoId,name,date

    }});


    }catch(error){
        console.error("this error occured while editing todo",error)
        return NextResponse.json({success:false,message:"couln't edit the todo"},{status:500})
    }
}