import { animate } from "../animation/animate";

const duration = 0.8;
const delay = 0.4;

// Fade
export const fade = animate({ type: "fade" });
export const fadeD1 = animate({ type: "fade", delay });
export const fadeD2 = animate({ type: "fade", delay: delay + 2 * 0.1 });
export const fadeD3 = animate({ type: "fade", delay: delay + 3 * 0.1 });
export const fadeD4 = animate({ type: "fade", delay: delay + 4 * 0.1 });
export const fadeD5 = animate({ type: "fade", delay: delay + 5 * 0.1 });

export const fadeD1NoTransition = animate({
  type: "fade",
  yTo: -5,
  yFrom: 0,
  useVariantsOnly: true,
});

export const fadeDu1 = animate({
  type: "fade",
  duration: duration + 1 * duration,
});
export const fadeDu2 = animate({
  type: "fade",
  duration: duration + 2 * duration,
});
export const fadeDu3 = animate({
  type: "fade",
  duration: duration + 3 * duration,
});
export const fadeDu4 = animate({
  type: "fade",
  duration: duration + 4 * duration,
});
export const fadeDu5 = animate({
  type: "fade",
  duration: duration + 5 * duration,
});

export const fadeDu1D1 = animate({
  type: "fade",
  delay,
  duration: duration + 1 * duration,
});
export const fadeDu1D2 = animate({
  type: "fade",
  delay,
  duration: duration + 2 * duration,
});
export const fadeDu1D3 = animate({
  type: "fade",
  delay,
  duration: duration + 3 * duration,
});
export const fadeDu1D4 = animate({
  type: "fade",
  delay,
  duration: duration + 4 * duration,
});
export const fadeDu2D2 = animate({
  type: "fade",
  delay: delay + 1 * delay,
  duration: duration + 2 * duration,
});
export const fadeDu2D3 = animate({
  type: "fade",
  delay: delay + 2 * delay,
  duration: duration + 2 * duration,
});
export const fadeDu2D4 = animate({
  type: "fade",
  delay: delay + 3 * delay,
  duration: duration + 2 * duration,
});
export const fadeDu3D2 = animate({
  type: "fade",
  delay: delay + 2 * delay,
  duration: duration + 3 * duration,
});
export const fadeDu3D3 = animate({
  type: "fade",
  delay: delay + 3 * delay,
  duration: duration + 3 * duration,
});
export const fadeDu3D5 = animate({
  type: "fade",
  delay: delay + 5 * delay,
  duration: duration + 3 * duration,
});

// Fade Scale
export const fadeScale = animate({ type: "fadeScale" });
export const fadeScaleD1 = animate({
  type: "fadeScale",
  delay: delay + 1 * 0.1,
});
export const fadeScaleD2 = animate({
  type: "fadeScale",
  delay: delay + 2 * 0.1,
});
export const fadeScaleD3 = animate({
  type: "fadeScale",
  delay: delay + 3 * 0.1,
});
export const fadeScaleD4 = animate({
  type: "fadeScale",
  delay: delay + 4 * 0.1,
});
export const fadeScaleD5 = animate({
  type: "fadeScale",
  delay: delay + 5 * 0.1,
});

export const fadeScaleDu1 = animate({
  type: "fadeScale",
  duration
});
export const fadeScaleDu2 = animate({
  type: "fadeScale",
   duration: duration + 1 * duration,
});

// Fade Slide
export const fadeSlideDown = animate({ type: "fadeSlideDown", yFrom: 10 });
export const fadeSlideDownDu2D3 = animate({
  type: "fadeSlideDown",
  yFrom: 20,
  delay: delay + 2 * delay,
  duration: duration + 1 * duration,
});

export const fadeSlideUpNoTransition = animate({
  type: "fadeSlideUp",
  yTo: -5,
  yFrom: 0,
  useVariantsOnly: true,
});

export const fadeSlideUp1 = animate({
  type: "fadeSlideUp",
  yTo: -5,
  yFrom: 0,
  duration: 0.5,
  delay: 0.1,
});

// Infinite Vertical
export const infiniteVertical1 = animate({
  type: "slideTop",
  duration: 8,
  repeat: Infinity,
  repeatType: "reverse",
  yTo: "-77%",
  yFrom: "0%",
});
export const infiniteVertical2 = animate({
  type: "slideTop",
  duration: 8,
  repeat: Infinity,
  repeatType: "reverse",
  yTo: "-59%",
  yFrom: "0%",
});

// Fill
export const fillVerticalFade = animate({
  type: "fillVerticalFade",
  duration: 2.5,
  yFrom: 0,
  yTo: "100%",
});
