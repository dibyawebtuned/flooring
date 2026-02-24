import Image from "next/image";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Service from "@/sections/Service";
import Project from "@/sections/Project";
import Testimonials from "@/sections/Testimonial";
import Banner from "@/sections/Banner"
import FaqComponent from "@/sections/Faq";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Testimonials />
      <Banner />
      <FaqComponent />
    </div>
  );
}