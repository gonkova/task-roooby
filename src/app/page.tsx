
import Image from "next/image";
import Hero from "../components/Hero";
import BusinessInfo from "../components/BusinessInfo";
import Sales from "../components/Sales";
import Marketing from "../components/Marketing";
import Service from "../components/Service";
import Integrations from "../components/Integrations";
import News from  "../components/News";
import Results from  "../components/Results";
import Testimonials from "../components/Testimonials";
import Supercharge  from "../components/Supercharge";


export default function Home() {
  return (
    <main>
    <Hero/>
    <BusinessInfo />
    <Sales />
    <Marketing />
    <Service />
    <Integrations />
    <News />
    <Results />
    <Testimonials />
    <Supercharge  />
    </main>
  );
}
