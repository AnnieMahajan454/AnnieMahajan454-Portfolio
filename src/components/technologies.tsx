import { SiPython, SiPostgresql, SiAmazonaws, SiPowerbi, SiGit } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { motion, TargetAndTransition } from "framer-motion";
import { useMediaQuery } from "react-responsive";

/* ---------- Animation Helpers ---------- */

const levitateUp = (delay = 0): TargetAndTransition => ({
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay,
  },
});

const levitateDown = (delay = 0): TargetAndTransition => ({
  y: [0, 10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay,
  },
});

/* ---------- Component ---------- */

const Technologies = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const anim = (
    fn: () => TargetAndTransition
  ): TargetAndTransition | undefined => {
    return isMobile ? undefined : fn();
  };

  return (
    <div id="skills" className="border-b border-neutral-900 pb-24">
      
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateUp(0))}
        >
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateDown(0.5))}
        >
          <FaDatabase className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateUp(1))}
        >
          <SiPostgresql className="text-7xl text-sky-600" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateDown(1.5))}
        >
          <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateUp(2))}
        >
          <SiAmazonaws className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={anim(() => levitateDown(2.5))}
        >
          <SiGit className="text-7xl text-red-500" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
