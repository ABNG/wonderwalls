import Image from "next/image";
import Khyber from "@/public/images/khyber.jpg";
import TypeWriterEffect from "./TypeWriterEffect";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative">
      <div className="after:absolute after:inset-x-0 after:top-0 after:size-full after:bg-[#33333399]">
        <Image
          src={Khyber}
          alt="khyber"
          priority
          className="w-full object-cover"
        />
      </div>
      <div className="absolute inset-x-0 top-0 z-10 flex size-full flex-col items-center justify-center text-white">
        <h3 className="flex items-center gap-2 text-lg font-extralight sm:md:text-2xl md:text-3xl">
          What we can do?{" "}
          <span className="font-bold text-borderColor">
            <TypeWriterEffect
              options={{
                strings: [
                  "Plastering",
                  "Stone Walls",
                  "Construction",
                  "Crush Stone",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <div className="h-5" />
        <h1 className="flex gap-2 text-2xl italic min-[550px]:text-4xl md:text-6xl">
          Welcome to{" "}
          <span className="animate__animated animate__pulse animate__delay-3s not-italic text-borderColor">
            <TypeWriterEffect
              onInitText={"WonderWalls"}
              options={{
                cursor: "",
              }}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
