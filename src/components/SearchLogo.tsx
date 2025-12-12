import { motion } from "framer-motion";

const SearchLogo = () => {
  const letters = [
    { char: "M", color: "from-red-500 to-pink-500" },
    { char: "a", color: "from-orange-500 to-yellow-500" },
    { char: "x", color: "from-green-500 to-emerald-500" },
  ];

  const searchLetters = [
    { char: "s", color: "from-blue-500 to-cyan-500" },
    { char: "e", color: "from-purple-500 to-violet-500" },
    { char: "a", color: "from-pink-500 to-rose-500" },
    { char: "r", color: "from-indigo-500 to-blue-500" },
    { char: "c", color: "from-teal-500 to-green-500" },
    { char: "h", color: "from-amber-500 to-orange-500" },
  ];

  return (
    <div className="mb-10 text-center">
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight select-none mb-3 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Max - colorful floating letters */}
        {letters.map((letter, index) => (
          <motion.span
            key={`max-${index}`}
            className={`bg-gradient-to-br ${letter.color} bg-clip-text text-transparent drop-shadow-lg`}
            initial={{ y: -50, opacity: 0, rotateZ: -10 }}
            animate={{ 
              y: [0, -8, 0], 
              opacity: 1,
              rotateZ: 0,
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut"
              },
              opacity: { duration: 0.5, delay: index * 0.1 },
              rotateZ: { duration: 0.5, delay: index * 0.1 }
            }}
            style={{
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
              filter: "drop-shadow(0 0 20px rgba(255,100,100,0.4))"
            }}
          >
            {letter.char}
          </motion.span>
        ))}
        
        {/* search - colorful floating letters */}
        {searchLetters.map((letter, index) => (
          <motion.span
            key={`search-${index}`}
            className={`bg-gradient-to-br ${letter.color} bg-clip-text text-transparent drop-shadow-lg`}
            initial={{ y: 50, opacity: 0, rotateZ: 10 }}
            animate={{ 
              y: [0, -6, 0], 
              opacity: 1,
              rotateZ: 0,
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                delay: (index + 3) * 0.12,
                ease: "easeInOut"
              },
              opacity: { duration: 0.5, delay: (index + 3) * 0.1 },
              rotateZ: { duration: 0.5, delay: (index + 3) * 0.1 }
            }}
            style={{
              filter: "drop-shadow(0 0 15px rgba(100,150,255,0.4))"
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
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="bg-gradient-to-r from-primary via-purple-500 via-pink-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          Beyond Search • Beyond Limits
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
