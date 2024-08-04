import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const OpeningAnimation = ({ onCompleteAnimation }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            delay: 1,
            pointerEvents: "none",
            ease: "power2.inOut",
            onComplete: onCompleteAnimation,
          });
        },
      });

      // 3D変形する背景のアニメーション
      tl.from(".bg-shape", {
        rotationY: 90,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // ロゴアニメーション（変更あり）
      tl.from(
        ".logo-image",
        {
          scaleY: 0,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=1.5",
      )
        .to(".logo-image", {
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.4,
          ease: "power1.inOut",
        })
        .to(".logo-image", {
          scaleX: 1,
          scaleY: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)",
        });

      // テキストアニメーション
      tl.from(
        ".text-container",
        {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1",
      );

      tl.from(
        ".text span",
        {
          opacity: 0,
          scale: 0,
          rotation: 90,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1",
      );

      // 装飾的な線のアニメーション
      tl.from(
        ".deco-line",
        {
          scaleX: 0,
          duration: 1.5,
          ease: "power3.inOut",
          stagger: 0.3,
        },
        "-=1.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black perspective-1000 z-50"
    >
      {/* 3D変形する背景 */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`bg-shape absolute inset-0 bg-gradient-to-br opacity-20 transform-style-3d`}
          style={{
            background: `linear-gradient(${45 * i}deg, #ff6b6b, #4ecdc4)`,
            transform: `rotateY(${i * 10}deg) translateZ(${i * -50}px)`,
          }}
        ></div>
      ))}

      {/* ロゴ */}
      <div className="logo-image relative w-48 h-48 mb-8">
        <img
          src="/images/logo/silmo.png"
          alt="SitMo Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* テキスト */}
      <div className="text-container relative z-10 text-center text-6xl font-bold">
        <h1 className="text  text-white mb-4">
          <span className="inline-block">Welcome</span>
          <span className="inline-block">To</span>
        </h1>
        <p className="">SilMo</p>
      </div>

      {/* 装飾的な線 */}
      <div className="deco-line absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="deco-line absolute bottom-1/4 right-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </div>
  );
};

export default OpeningAnimation;
