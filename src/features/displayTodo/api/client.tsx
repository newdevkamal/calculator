import categorizeByDate from "@/utils/categorizeByDate"

export const getTodo=async()=>{
    
     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getTodo`, { cache: "no-store" }); 

    const {data}=await res.json()

    const categorizedData=categorizeByDate(data)
    return categorizedData
}