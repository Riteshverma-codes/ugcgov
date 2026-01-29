import Image from "next/image";
import TopHeader from "./TopHeader/page";
import Header from "./Header/page";
import Slider from "./Slider/page";
import Section1 from "./Section1/page";
import TabSection from "./TabsSection/page";
import PartnerSection from "./PartnerSection/page";
import CreativeTables from "./CreativeTables/page";

export default function Home() {
  return (
   <>
    <TopHeader/>
    <Header/>
    <Slider/>
    <Section1/>
    <TabSection/>
    <PartnerSection/>
    <CreativeTables/>
   </>
  );
}
