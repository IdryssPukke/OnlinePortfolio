import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapperContainer = styled(motion.section)`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 0;
  padding: 40px 24px 40px 24px;

  @media (min-width: 640px) {
    padding: 20px;
  }
`;
