"use client";
import {
  motion
} from "framer-motion";

const Animate = ({
  children,
  variants,
  element = "div",
  className,
  viewOnce = false,
  style,
  animate,
  exit,
  transition
}) => {
  const MotionTag = motion[element];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      exit={exit}
      viewport={{ once: viewOnce }}
      variants={variants}
      className={className}
      style={style}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
