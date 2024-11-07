import { staggerContainer } from "@/utils/staggerContainer";
import { SectionWrapperContainer } from "./style";
import { FC } from "react";

export function SectionWrapper<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  idName: string
): FC<P> {
  const WrappedComponent: FC<P> = (props: P) => (
    <SectionWrapperContainer
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </SectionWrapperContainer>
  );

  return WrappedComponent;
}
