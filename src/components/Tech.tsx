import { TECHNOLOGIES } from "@/constants/technologies";
import { BallCanvas } from "./canvas";

export const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {TECHNOLOGIES.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))}
    </div>
  );
};
