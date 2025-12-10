import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FramedCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "glow" | "gradient" | "cyber";
  className?: string;
}

const FramedCard = ({ children, variant = "default", className = "", ...props }: FramedCardProps) => {
  const variants = {
    default: {
      frame: "border-primary/30",
      bg: "bg-card/80 backdrop-blur-xl",
      shadow: "shadow-lg shadow-primary/5",
    },
    glow: {
      frame: "border-primary/50",
      bg: "bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-xl",
      shadow: "shadow-xl shadow-primary/20",
    },
    gradient: {
      frame: "border-transparent",
      bg: "bg-gradient-to-br from-primary/10 via-card to-accent/10 backdrop-blur-xl",
      shadow: "shadow-lg",
    },
    cyber: {
      frame: "border-primary",
      bg: "bg-card/90 backdrop-blur-xl",
      shadow: "shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]",
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${style.bg} ${style.shadow} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.01 }}
      {...props}
    >
      {/* Animated Border Frame */}
      <div className={`absolute inset-0 rounded-2xl border-2 ${style.frame} pointer-events-none`}>
        {/* Corner Accents */}
        <motion.div
          className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full pointer-events-none"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default FramedCard;
