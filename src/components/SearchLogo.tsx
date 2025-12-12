import { motion } from "framer-motion";

const SearchLogo = () => {
  const letters = [
    { char: "G", color: "from-blue-600 to-blue-400" },
    { char: "o", color: "from-red-500 to-rose-400" },
    { char: "o", color: "from-yellow-500 to-amber-400" },
    { char: "g", color: "from-blue-500 to-cyan-400" },
    { char: "l", color: "from-green-500 to-emerald-400" },
    { char: "e", color: "from-red-500 to-pink-400" },
  ];

  return (
    <div className="mb-10 text-center">
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight select-none mb-3 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
      {/* Google - colorful floating letters */}
        {letters.map((letter, index) => (
          <motion.span
            key={`google-${index}`}
            className={`bg-gradient-to-br ${letter.color} bg-clip-text text-transparent drop-shadow-lg`}
            initial={{ y: -50, opacity: 0, rotateZ: -10, scale: 0.5 }}
            animate={{ 
              y: [0, -12, 0], 
              opacity: 1,
              rotateZ: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut"
              },
              opacity: { duration: 0.5, delay: index * 0.1 },
            }}
            style={{
              textShadow: "0 0 40px rgba(255,255,255,0.5)",
              filter: `drop-shadow(0 0 25px rgba(${index % 2 === 0 ? '66,133,244' : '234,67,53'},0.6))`
            }}
          >
            {letter.char}
          </motion.span>
        ))}
      </motion.h1>
      
      {/* Animated tagline */}
      <motion.p 
        className="text-sm text-muted-foreground tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 via-green-500 to-blue-500 bg-[length:300%_auto] bg-clip-text text-transparent font-medium"
        >
          Search the world's information
        </motion.span>
      </motion.p>

      {/* Floating glow orbs behind logo */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default SearchLogo;
