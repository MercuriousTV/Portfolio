"use client";
import Image from "next/image";
import Slider from "@/components/gallery/slider";
import Link from "next/link";
import { BoxReveal } from "@/components/magic/box-reveal";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/magic/sparkles-text";
import { ParallaxScroll } from "@/components/aceternity/parallax-scroll";
import { ImagesSlider } from "@/components/aceternity/images-slider";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { root } from "postcss";

const images = [
  "/gallery/photography/1.jpg",
  "/gallery/photography/2.jpg",
  "/gallery/photography/3.JPG",
  "/gallery/photography/4.JPG",
  "/gallery/photography/5.JPG",
  "/gallery/photography/7.JPG",
  "/gallery/photography/8.JPG",
  "/gallery/photography/9.JPG",
  "/gallery/photography/10.JPG",
];

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
})



export default function Home() {
  return (
    <main>
      <ImagesSlider className="h-screen" images={images}>
        <div className="bg-black flex justify-center items-center w-2/3">
          <div className="h-full w-full flex flex-col p-8 items-start justify-center overflow-hidden py-8 z-50">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className={`text-[3.5rem] font-semibold ${roboto.className}`}>
                <SparklesText text={`Welcome To My Portfolio.`} />
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className={`mt-[.5rem] text-[1.2rem] ${roboto.className}`}>
                Hi there! I'm Aagash Nadarajah, a passionate Photographer. With
                a keen eye for detail and a drive for excellence.
                <span className="text-[#ffffff]">
                  {" "}
                  Explore my work, learn about my journey, and feel free to
                  reach out for collaborations or inquiries.{" "}
                </span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <>
                <Button className="mt-[1.6rem] bg-[#5046e6]">Contact Me</Button>
                <Button className="mt-[1.6rem] bg-[#5046e6] ml-2">
                  Read More
                </Button>
              </>
            </BoxReveal>
          </div>{" "}
        </div>
      </ImagesSlider>
    </main>
  );
}

{
  //   /* <div className="h-full w-full items-center justify-center overflow-hidden pt-8">
  // <BoxReveal boxColor={"#5046e6"} duration={0.5}>
  //   <p className="text-[3.5rem] font-semibold">
  //     Mo is stom <span className="text-[#5046e6]">.</span>
  //   </p>
  // </BoxReveal>
  // <BoxReveal boxColor={"#5046e6"} duration={0.5}>
  //   <h2 className="mt-[.5rem] text-[1rem]">
  //     Lorem ipsum dolor sit{" "}
  //     <span className="text-[#5046e6]">Lorem ipsum dolor sit</span>
  //   </h2>
  // </BoxReveal>
  // <BoxReveal boxColor={"#5046e6"} duration={0.5}>
  //   <Button className="mt-[1.6rem] bg-[#5046e6]">Contact Me</Button>
  // </BoxReveal>
  // </div> */
}
