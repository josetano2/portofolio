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
      },
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
      },
    );
  }
};

export const hoverEffect = (topChar: string, bottomChar: string) => {
  gsap.to(topChar, {
    y: -35,
    duration: 0.5,
    stagger: 0.025,
    opacity: 0,
    ease: "power2.out",
    rotation: -5,
  });
  gsap.to(bottomChar, {
    y: -35,
    duration: 0.5,
    stagger: 0.025,
    opacity: 1,
    ease: "power2.out",
    rotation: 0,
  });
};

export const exitHoverEffect = (topChar: string, bottomChar: string) => {
  gsap.to(topChar, {
    y: 0,
    duration: 0.4,
    stagger: 0.02,
    opacity: 1,
    ease: "power2.inOut",
    rotation: 0,
  });
  gsap.to(bottomChar, {
    y: 0,
    duration: 0.4,
    stagger: 0.02,
    opacity: 0,
    ease: "power2.inOut",
    rotation: 5,
  });
};

const getCurrentTheme = (): "light" | "dark" => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export const buttonHoverEffect = (id: string) => {
  const buttonRef = document.getElementById(id);
  const currentTheme = getCurrentTheme();

  if (buttonRef) {
    buttonRef.classList.add("button-hover-active");
    
    gsap.to(buttonRef, {
      duration: 0.3,
      scale: 1.1,
      backgroundColor: "#475569",
      ease: "power1.out",
      boxShadow: currentTheme === "dark" ? "0px 6px 0px 0px #1e293b" : "0px 6px 0px 0px black",
    });
  }
};

export const buttonExitHoverEffect = (id: string) => {
  const buttonRef = document.getElementById(id);
  const currentTheme = getCurrentTheme();

  if (buttonRef) {
    buttonRef.classList.remove("button-hover-active");
    
    gsap.to(buttonRef, {
      duration: 0.3,
      scale: 1,
      backgroundColor: "transparent",
      ease: "power1.out",
      boxShadow: currentTheme === "dark" ? "0px 0px 0px 0px #1e293b" : "0px 0px 0px 0px black",
    });
  }
};
