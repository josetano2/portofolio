import gsap from "gsap";
import MouseFollower from "mouse-follower";

MouseFollower.registerGSAP(gsap);

export var cursor: MouseFollower;

if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: "mf-cursor",
    innerClassName: "mf-cursor-inner",
    textClassName: "mf-cursor-text",
    mediaClassName: "mf-cursor-media",
    mediaBoxClassName: "mf-cursor-media-box",
    iconSvgClassName: "mf-svgsprite",
    iconSvgNamePrefix: "-",
    iconSvgSrc: "",
    dataAttr: "cursor",
    hiddenState: "-hidden",
    textState: "-text",
    iconState: "-icon",
    activeState: "-active",
    mediaState: "-media",
    stateDetection: {
      "-pointer": "a,button",
      "-hidden": "iframe",
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: "expo.out",
    overwrite: true,
    skewing: 2,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.04,
    stickDelta: 0.04,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
  });
}
