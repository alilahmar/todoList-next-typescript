import { resolveCaa } from "dns/promises";
import type { NextPage } from "next";
import Link from "next/link";
// import { TextField } from "../components/TextField";

const Home: NextPage = () => {
  return (
    <div style={{background:"#C33764", width:"100%", height:"657px"}} className="flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="mb-5 text-lg text-yellow-100">Add to your List</h1>
        <Link href="/Home" >     
<div className="mt-4 ml-1 cursor-pointer">
<a className="border-2 border-white-500 rounded-full font-bold text--500 px-4 py-3 transition duration-300 ease-in-out hover:bg-white-500 !important hover:text-white mr-6"> Click here</a>

</div>
</Link>
</div>
</div>
)
};


export default Home;
