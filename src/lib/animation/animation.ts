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
        duration: 0.4,
        y: "-100%",
        // ease: "Back.out(1.7)",
        ease: "power1.in",
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
      },
      {
        duration: 0.4,
        y: "-10%",
        ease: "power1.out",
        scale: 1,
        borderRadius: "100% 100% 0% 0%",
        onComplete: () => {
          window.location.href = href;
        },
      }
    );
  }
};

export const hoverEffect = (topChar: string, bottomChar: string) => {
  gsap.to(topChar, {
    y: -30,
    duration: 0.3,
    stagger: 0.02,
    opacity: 0,
    ease: "power1.out",
  });
  gsap.to(bottomChar, {
    y: -30,
    duration: 0.3,
    stagger: 0.02,
    opacity: 1,
    ease: "power1.out",
  });
};

export const exitHoverEffect = (topChar: string, bottomChar: string) => {
  gsap.to(topChar, {
    y: 0,
    duration: 0.3,
    stagger: 0.02,
    opacity: 1,
    ease: "power1.out",
  });
  gsap.to(bottomChar, {
    y: 0,
    duration: 0.3,
    stagger: 0.02,
    opacity: 0,
    ease: "power1.out",
  });
};

export const buttonHoverEffect = (id: string) => {
  const buttonRef = document.getElementById(id);

  if (buttonRef) {
    gsap.to(buttonRef, {
      duration: 0.3,
      scale: 1.1,
      backgroundColor: "#b2e7f9",
      ease: "power1.out",
      color: "white",
      borderRight: 2,
      borderBottom: 5,
    });
  }
};

export const buttonExitHoverEffect = (id: string) => {
  const buttonRef = document.getElementById(id);

  if (buttonRef) {
    gsap.to(buttonRef, {
      duration: 0.3,
      scale: 1,
      backgroundColor: "transparent",
      ease: "power1.out",
      color: "black",
      borderRight: 1,
      borderBottom: 1,
    });
  }
};
