import { url } from "inspector";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Componentone from "./Components/Componentsone";
import Componenttwo from "./Components/Componentstwo";
import Componentthree from "./Components/Componentsthree";
import Componentfour from "./Components/Componentfour";
import Componentfive from "./Components/Componentfive";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar/>
      <section className="">
       <Herosection/>
       <Componentone/>
       <Componenttwo/>
       <Componentthree/>
       <Componentfour/>
       <Componentfive/>
        
       

       
        
       
      </section>
    </main>
  );
}
