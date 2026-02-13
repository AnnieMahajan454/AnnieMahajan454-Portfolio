import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariant}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariant}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-neutral-400"
      >
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>

        <div className="flex gap-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com/in/annie-mahajan-1v7i0v4u/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/AnnieMahajan454"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
