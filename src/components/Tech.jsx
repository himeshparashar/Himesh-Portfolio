import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div>
        <motion.div
          variants={fadeIn("right", "spring", 0.75, 0.75)}
          className="mt-16 flex flex-wrap gap-12"
        >
          {technologies.map((technology) => (
            <div className="block-container w-20 h-20" key={technology.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
