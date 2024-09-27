"use client";
import Typewriter, { Options } from "typewriter-effect";
type Props = {
  options?: Partial<Options>;
  onInitText?: String;
};

const TypeWriterEffect = ({ options, onInitText }: Props) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(`${onInitText ?? ""}`).start();
      }}
      options={options}
    />
  );
};

export default TypeWriterEffect;
