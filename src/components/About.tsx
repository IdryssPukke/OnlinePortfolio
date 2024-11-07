import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "@/utils/fadeIn";
import { textVariant } from "@/utils/textVariant";
import { SERVICES } from "@/constants/services";

export const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p style={{ textIndent: "20px" }}>
          I am a skilled programmer with experience in Typescript and Python and
          knowledge of frameworks such as Vue, React and Three.js. I have also
          been working with VR technologies in conjunction with the Unity and
          Unreal environments.
        </p>
        <br />
        <p style={{ textIndent: "20px" }}>
          Over four years I acquired extensive experience in software
          development. During this time, I contributed to a diverse range of
          projects. I am familiar with Vue and React frameworks, which enable me
          to build cutting-edge user interfaces. I'm a fast learner and keen to
          develop my skills as a developer in the aforementioned areas. It would
          be great to hear from you so we can start collaborating on efficient
          and user-friendly solutions.
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {SERVICES.map((service, index) => (
          <Tilt key={index} className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                ></img>
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};
