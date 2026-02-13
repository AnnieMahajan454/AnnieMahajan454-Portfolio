import { PROJECTS, Project } from "../constants";
import { motion } from "framer-motion";
<div id="projects"></div>
const imageVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const contentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 p-4">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* PROJECT LIST */}
      <div>
        {PROJECTS.map((project: Project, index: number) => (
          <div
            key={index}
            className="mb-16 flex flex-col lg:flex-row lg:items-start lg:gap-10"
          >
            {/* IMAGE */}
            <motion.div
              className="flex justify-center lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              variants={imageVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded w-full max-w-[320px] h-auto object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              className="lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              variants={contentVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h6 className="mb-2 text-lg font-semibold">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map(
                  (tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;