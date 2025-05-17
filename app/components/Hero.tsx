import { AnimatedText } from "./AnimatedText";
import ExperienceTag from "./ui/ExperienceTag";

export default function Hero() {
  const data = {
    experience: "Junior",
    title: "Full Stack Developer",
    infoOne: `I'm Anish Landage, a B.Tech student in Artificial Intelligence and Machine Learning with a passion for coding and continuous learning. I strive to blend academic knowledge with real-world experiences and enjoy taking on new challenges that foster growth and creativity.`,
    infoTwo: `I believe in holistic development, balancing studies with extracurriculars, and contributing to a collaborative learning environment. Open to new connections and opportunities, I’m driven by curiosity and a desire to make a positive impact through education.`,
  };

  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
      }}
      className="cursor-auto md:cursor-none flex justify-center items-center py-20 p-2 font-sans mix-blend-difference text-white"
    >
      <div className="flex flex-col justify-center items-center">
        <ExperienceTag value={data.experience} />

        <h1 className="uppercase font-bold tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 break-words">
          <AnimatedText text={data.title} />
        </h1>

        <div className="mt-6 text-sm sm:flex sm:gap-4 justify-between items-center">
          <p className="w-80 h-32 mb-3 sm:mb-0">
            <AnimatedText text={data.infoOne} />
          </p>
          <p className="w-80 h-32">
            <AnimatedText text={data.infoTwo} />
          </p>
        </div>
      </div>
    </div>
  );
}
