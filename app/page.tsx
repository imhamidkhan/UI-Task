import { url } from "inspector";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Componentsone from "./Components/Componentsone";
import Componentstwo from "./Components/Componentstwo";
import Componentsthree from "./Components/Componentsthree";
import Componentfour from "./Components/Componentfour";
import Componentfive from "./Components/Componentfive";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar/>
      <section className="">
       <Herosection/>
       <Componentsone/>
       <Componentstwo/>
       <Componentsthree/>
       <Componentfour/>
       <Componentfive/>
        
       

       
        
       
      </section>
    </main>
  );
}
