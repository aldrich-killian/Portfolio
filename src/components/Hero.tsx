import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { useFastFloat } from "@/hooks/useFastFloat";

import { RESUME_URL } from "../utils/constants";

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const blobA = useRef<HTMLDivElement | null>(null);
  const blobB = useRef<HTMLDivElement | null>(null);
  const blobC = useRef<HTMLDivElement | null>(null);
  const blobD = useRef<HTMLDivElement | null>(null);
  const { animate } = useFastFloat();

  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(max-width: 767px)') : null;
    const update = () => {
      const inner = typeof window !== 'undefined' ? window.innerWidth <= 767 : false;
      setIsMobile((mq && mq.matches) || inner);
    };
    update();
    mq?.addEventListener?.('change', update);
    return () => mq?.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(max-width: 360px)') : null;
    const update = () => {
      const inner = typeof window !== 'undefined' ? window.innerWidth <= 360 : false;
      setIsNarrow((mq && mq.matches) || inner);
    };
    update();
    mq?.addEventListener?.('change', update);
    return () => mq?.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    // If mobile, attach RAF-based animation to blobs and return cleanup
    if (isMobile) {
      const stopA = animate(blobA.current);
      const stopB = animate(blobB.current);
      const stopC = animate(blobC.current);
      const stopD = animate(blobD.current);
      return () => {
        stopA(); stopB(); stopC(); stopD();
      };
    }
    // when not mobile, ensure blobs have no inline transform
    [blobA, blobB, blobC, blobD].forEach((r) => { if (r.current) r.current.style.transform = ''; });
    return;
  }, [isMobile]);
  
  return (
    <section
      ref={heroRef}
      className="min-h-[85vh] bg-background relative overflow-hidden pt-24 pb-16"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blobA}
          className={`absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-200/30 blur-xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
        />
        <div
          ref={blobB}
          className={`absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-200/20 blur-2xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={isMobile ? { animationDelay: "1s" } : { animationDelay: "1s" }}
        />
        <div
          ref={blobC}
          className={`absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-pink-200/20 blur-xl ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={isMobile ? { animationDelay: "2s" } : { animationDelay: "2s" }}
        />
        <div
          ref={blobD}
          className={`absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-cyan-200/30 blur-lg ${isMobile ? "" : "animate-float-sm md:animate-float"}`}
          style={
            isMobile ? { animationDelay: "0.5s" } : { animationDelay: "0.5s" }
          }
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 lg:gap-4 items-center relative z-10">
        {/* Left Content */}
        <div className={`space-y-7 ${heroVisible ? "scroll-animate" : ""}`}>
          <div className="inline-block">
            {isNarrow ? (
              <div className="marquee" aria-hidden>
                <div className="marquee__inner bg-black text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                  <span>Software engineer</span>
                </div>
              </div>
            ) : (
              <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                Software engineer
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Designing and building web applications
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg text-justify">
            Hi, I'm{" "}
            <span className="text-foreground font-medium">Vaibhav Madan</span>.{" "}
            <br></br>I’m a third-year Computer Science undergraduate and
            full-stack developer. I’m interested in creating reliable software
            and improving my skills through hands-on projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full gap-2 px-8 py-6 text-base font-medium"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View my work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 py-6 text-base font-medium border-2 border-black dark:border-white hover:bg-black hover:text-white hover:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black"
              onClick={() => window.open(RESUME_URL, "_blank")}
            >
              View Resume
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`relative mt-12 lg:mt-0 ${heroVisible ? "scroll-animate scroll-animate-delay-2" : ""}`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* subtle framed border */}
            <div className="rounded-3xl p-1 bg-white/60 dark:bg-black/30 relative">
              <img
                src="/Vaibhav-PFP.jpeg"
                alt="Vaibhav Madan"
                className="w-full h-[420px] sm:h-[500px] md:h-[550px] object-cover rounded-2xl transition-transform duration-500 scale-150 sm:scale-100 sm:group-hover:scale-105"
              />
              {/* Vignette effect overlay - dark mode only */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none hidden dark:block"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)",
                }}
              ></div>

              {/* Subtle eye highlight vignette - light mode only */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none block dark:hidden"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at 62% 34%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 8%, rgba(255,255,255,0.05) 18%, transparent 28%)",
                  mixBlendMode: "screen",
                  opacity: 0.22,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
