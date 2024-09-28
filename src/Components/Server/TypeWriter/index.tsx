import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface Prop {
  words: string[];
  runInLoop: boolean;
  useCursor: boolean;
  deleteSpeed?: number;
  delaySpeed?: number;
}

const Writing = ({
  words,
  runInLoop,
  useCursor,
  deleteSpeed,
  delaySpeed,
}: Prop) => {
  return (
    <Typewriter
      words={words}
      loop={runInLoop}
      cursor={useCursor}
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={deleteSpeed || 50}
      delaySpeed={delaySpeed || 1000}
    />
  );
};

export default Writing;
