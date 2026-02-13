import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const yearVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const contentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap items-start lg:justify-center"
          >
            {/* Year Column */}
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={yearVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="mb-2 text-sm text-neutral-500 font-medium">
                {experience.year}
              </p>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="w-full lg:w-3/4 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              variants={contentVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h6 className="mb-2 font-semibold text-lg">
                {experience.role}
                <span className="text-sm text-purple-300">
                  {" "}— {experience.company}
                </span>
              </h6>

              <p className="mb-3 text-neutral-400 leading-relaxed">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;
