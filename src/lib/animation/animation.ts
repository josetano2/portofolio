import gsap from "gsap";

export const animatePageIn = () => {
  const bgTransition = document.getElementById("bg-transition");

  if (bgTransition) {
    gsap.fromTo(
      bgTransition,
      {
        y: "0%",
        borderRadius: "0",
      },
      {
        duration: 0.8,
        y: "-100%",
        ease: "power3.in",
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
      },
      {
        duration: 0.8,
        y: "-20%",
        ease: "power3.out",
        borderRadius: "100% 100% 0% 0%",
        onComplete: () => {
          window.location.href = href;
        },
      }
    );
  }
};
