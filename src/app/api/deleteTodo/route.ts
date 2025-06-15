import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req:Request){
    try{
    const {searchParams}=new URL (req.url)
    const todoId=searchParams.get("id")
    console.log(todoId)

    if(!todoId || todoId==undefined){
        console.log("missing id")
        return NextResponse.json({error:"Missing id"},{status:400})

    }

    const client=await clientPromise
    const db=client.db("TodoData")
    const collection=db.collection("myTodoData")

    const result =await collection.deleteOne(
        { _id: new ObjectId(todoId) }    )
    if(result.acknowledged==true){
        console.log("deleted")
        return NextResponse.json({success:true,massage:"todo is Deleted"})
    }
    }catch(error){
        console.error("this Error ocuured while Deleting todo",error)
        return NextResponse.json({succuss:false,massage:"error occured"},{status:400})
    }

}