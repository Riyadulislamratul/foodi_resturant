// FloatingImage.jsx
import { motion } from "framer-motion";

const FloatingImage = ({
  src,
  alt = "",
  className = "",
  delay = 0,
  duration = 4,
  rotate = 0,
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      draggable="false"
      className={`absolute pointer-events-none select-none ${className}`}
      initial={{ y: 0, rotate }}
      animate={{
        y: [0, -12, 0],
        rotate: [rotate, rotate + 2, rotate],
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingImage;