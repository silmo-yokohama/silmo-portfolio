import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

const AnimatedDivider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { wave1, wave2, wave3 } = useSpring({
    from: { wave1: 0, wave2: 0, wave3: 0 },
    to: async (next) => {
      while (true) {
        await next({
          wave1: 2 * Math.PI,
          wave2: 2 * Math.PI,
          wave3: 2 * Math.PI,
        });
        await next({ wave1: 0, wave2: 0, wave3: 0 });
      }
    },
    config: config.molasses,
    reset: true,
  });

  const { rotation, scale, translateZ } = useSpring({
    rotation: scrollY / 5,
    scale: 1 + scrollY / 500,
    translateZ: scrollY,
    config: { mass: 5, tension: 350, friction: 40 },
  });

  return (
    <div className="relative h-40 overflow-visible bg-neutral">
      <animated.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          transform: rotation.to(
            (r) =>
              `perspective(1000px) rotateX(${r % 360}deg) scale(${scale}) translateZ(${translateZ}px)`,
          ),
        }}
      >
        <animated.path
          d={wave1.to(
            (w) =>
              `M0,40 Q25,${40 + Math.sin(w) * 20} 50,40 Q75,${40 - Math.sin(w) * 20} 100,40 V100 Q50,80 0,100 Z`,
          )}
          fill="#00A197"
          opacity="0.7"
        />
        <animated.path
          d={wave2.to(
            (w) =>
              `M0,50 Q25,${50 + Math.cos(w) * 15} 50,50 Q75,${50 - Math.cos(w) * 15} 100,50 V100 Q50,90 0,100 Z`,
          )}
          fill="#F8B62B"
          opacity="0.5"
        />
        <animated.path
          d={wave3.to(
            (w) =>
              `M0,60 Q25,${60 + Math.sin(w) * 10} 50,60 Q75,${60 - Math.sin(w) * 10} 100,60 V100 Q50,100 0,100 Z`,
          )}
          fill="#ED6D36"
          opacity="0.3"
        />
      </animated.svg>
    </div>
  );
};

export default AnimatedDivider;
