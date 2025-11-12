import Image from "next/image";
import Hero from "./components/Hero";
import RecentWork from "./components/Recentwork";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Hero/>
      <RecentWork/>
      <Services/>
      <Footer/>

    </div>
  );
}
