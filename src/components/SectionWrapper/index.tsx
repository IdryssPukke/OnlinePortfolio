import { motion } from "framer-motion";
import { styles } from "@/styles";
import { staggerContainer } from "@/utils/staggerContainer";

const SectionWrapper = (Component, idName: string | undefined) => {
  return function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Pass props to support nested components */}
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
