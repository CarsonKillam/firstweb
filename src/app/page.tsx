import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Header/>

      <div>
        <Hero/>
        <CTA/>
      </div>

    </div>
    
    
  );
}
