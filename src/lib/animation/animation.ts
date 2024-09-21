import gsap from "gsap";

export const animatePageIn = () => {
  const bgTransition = document.getElementById("bg-transition");

  if (bgTransition) {
    gsap.fromTo(
      bgTransition,
      {
        y: "0%",
        borderRadius: "0",
        // scale: 0.95,
      },
      {
        duration: 0.4,
        y: "-100%",
        // ease: "Back.out(1.7)",
        ease: "power2.in",
        scale: 1,
        borderRadius: "0% 0% 100% 100%",
      }
    );
  }
};

export const animatePageOut = (href: string) => {
  const bgTransition = document.getElementById("bg-transition");

  if (bgTransition) {
    gsap.fromTo(
      bgTransition,
      {
        y: "100%",
        borderRadius: "0",
        // scale: 1.05,
      },
      {
        duration: 0.4,
        y: "-10%",
        // ease: "Back.inOut(1.7)",
        ease: "power2.out",
        scale: 1,
        borderRadius: "100% 100% 0% 0%",
        onComplete: () => {
          window.location.href = href;
        },
      }
    );
  }
};
