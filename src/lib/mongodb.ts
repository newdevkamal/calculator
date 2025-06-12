import {MongoClient} from "mongodb"

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI ENV IS NOT DEFINED")
}


declare global{
    // eslint-disable-next-line no-var
    var _mongoClientPromise:Promise<MongoClient>|undefined
}

const uri=process.env.MONGO_URI;
const options={}

let client:MongoClient;
let clientPromise:Promise<MongoClient>;

if (process.env.NODE_ENV==="development"){
    if(!globalThis._mongoClientPromise){
        client= new MongoClient(uri,options);
        globalThis._mongoClientPromise=client.connect()
        console.log("Created a new MongoDB connection (development)...");
    }
    clientPromise=globalThis._mongoClientPromise


}else{
    client= new MongoClient(uri,options);
    clientPromise=client.connect()
    console.log("Creating a new MongoDB connection (production)...");
}
export default clientPromise;
