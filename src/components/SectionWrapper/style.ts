import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapperContainer = styled(motion.section)`
  padding: 10px 6px;
  margin: auto;
  position: relative;
  z-index: 0;

  @media (min-width: 640px) {
    padding: 16px 16px;
  }
`;
