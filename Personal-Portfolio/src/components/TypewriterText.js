import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewriter = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setExampleIndex((prevIndex) => (prevIndex + 1) % examples.length),
      SWAP_DELAY_IN_MS
    );
    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((letter, index) => (
          <motion.span
            key={`${exampleIndex}-${index}`}
            className="relative"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: index * LETTER_DELAY,
                times: [0, 0.5, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute top-[3px] bottom-[3px] left-[1px] right-0 bg-neutral-950"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * LETTER_DELAY,
                duration: 0,
              }}
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </span>
    </p>
  );
};

const TypewriterBlock = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed"> {text}</p>

      <div>
        <Typewriter examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <button
        className="w-full rounded-full border border-neutral-950 py-2 
      text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100"
      >
        Contact Us
      </button>
    </div>
  );
};

function TypewriterText() {
  return (
    // ml-10 mt-5
    <div className="flex items-center justify-center absolute w-full bottom-0 bg-neutral-300 py-8 text-neutral-900">
      <TypewriterBlock
        tag={"/ SUPPORT"}
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
}

export default TypewriterText;
