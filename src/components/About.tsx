import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import {SKILLS} from "../utils/constants.js"

const Skill = ({skillName, skills}) => {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
        {skillName}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium border border-border hover:border-black dark:hover:border-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`space-y-8 ${aboutVisible ? "scroll-animate" : ""}`}>
            <div>
              <h2 className="text-5xl font-bold mb-8">About me</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a Computer Science Engineering student at Chitkara
                University, currently maintaining a{" "}
                <span className="font-bold text-black dark:text-white">
                  CGPA of 9.33
                </span>
                .
              </p>

              <p>
                I focus on full-stack development using the MERN stack, along
                with Python for scripting, and I’m continuously
                working on improving my problem-solving skills.
              </p>
            </div>
          </div>

          {/* Right Content - Skills Card */}
          <div
            className={`glass-card rounded-3xl p-8 shadow-xl ${aboutVisible ? "scroll-animate scroll-animate-delay-2" : ""}`}
          >
            <h3 className="text-2xl font-bold mb-8">Skills</h3>

            <div className="space-y-8">
              <Skill
                skillName="Programming languages"
                skills={SKILLS["Programming languages"]}
              />
              <Skill skillName="Frontend" skills={SKILLS["Frontend"]} />
              <Skill skillName="Backend" skills={SKILLS["Backend"]} />
              <Skill skillName="Databases" skills={SKILLS["Databases"]} />
              <Skill skillName="Libraries" skills={SKILLS["Libraries"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
