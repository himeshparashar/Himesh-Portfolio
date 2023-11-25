import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { Suspense } from "react";
// import { Image } from "@react-three/drei";
import { scene } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="">
        <div className="">
          <div
            className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white `}>
                Hi, I'm <span className="text-[#915eff]">Himesh</span>{" "}
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I'm a full-stack developer. <br className="sm:block hidden" /> I
                love to build web apps and websites.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center pt-72 sm:pt-64 pr-10">
          <img
            className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
            src={scene}
            width={400}
            height={400}
            alt="Hero Image"
          />
        </div>
      </div>

      {/* <Suspense fallback={<div>Loading 3D content...</div>}> */}
      {/* <ComputersCanvas /> */}

      {/* </Suspense> */}
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:botton-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
