import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Rainbow colors for particles
  const particleColors = [
    "bg-red-500/40",
    "bg-orange-500/40",
    "bg-yellow-500/40",
    "bg-green-500/40",
    "bg-blue-500/40",
    "bg-indigo-500/40",
    "bg-purple-500/40",
    "bg-pink-500/40",
    "bg-cyan-500/40",
    "bg-rose-500/40",
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Rainbow Gradient Base */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 25%, rgba(236,72,153,0.05) 50%, rgba(34,197,94,0.05) 75%, rgba(59,130,246,0.05) 100%)",
            "linear-gradient(135deg, rgba(147,51,234,0.05) 0%, rgba(236,72,153,0.05) 25%, rgba(34,197,94,0.05) 50%, rgba(59,130,246,0.05) 75%, rgba(147,51,234,0.05) 100%)",
            "linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(34,197,94,0.05) 25%, rgba(59,130,246,0.05) 50%, rgba(147,51,234,0.05) 75%, rgba(236,72,153,0.05) 100%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Animated Colorful Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236,72,153,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Colorful Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${particleColors[i % particleColors.length]}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Colorful Glowing Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-blue-500/20 blur-3xl"
        style={{ top: "5%", right: "5%" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 80, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/20 via-green-500/15 to-yellow-500/20 blur-3xl"
        style={{ bottom: "5%", left: "5%" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -60, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-orange-500/15 via-red-500/15 to-pink-500/15 blur-3xl"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rainbow Pulsing Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[
          { size: 1, color: "border-pink-500/20" },
          { size: 2, color: "border-purple-500/15" },
          { size: 3, color: "border-blue-500/10" },
          { size: 4, color: "border-cyan-500/10" },
        ].map((ring, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full border-2 ${ring.color}`}
            style={{
              width: `${ring.size * 200}px`,
              height: `${ring.size * 200}px`,
              top: `${-ring.size * 100}px`,
              left: `${-ring.size * 100}px`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Multiple Colorful Scanning Lines */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        animate={{ top: ["110%", "-10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Sparkle Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
