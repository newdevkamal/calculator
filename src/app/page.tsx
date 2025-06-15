import Home from "./Home";

export default async function Page() {
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getTodo`, { cache: "no-store" }); 
    const {data}=await res.json()

  return (
    <>
      <Home data={data}/>
    </>
  );
}
