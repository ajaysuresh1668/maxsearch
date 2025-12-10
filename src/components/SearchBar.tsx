import { useState, useRef, useEffect } from "react";
import { Search, Mic, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Animated Frame Border */}
        <motion.div
          className={`
            absolute -inset-1 rounded-full opacity-0 
            bg-gradient-to-r from-primary via-accent to-primary
            transition-opacity duration-300
            ${isFocused ? "opacity-100" : "opacity-0"}
          `}
          animate={isFocused ? {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div
          className={`
            relative flex items-center w-full px-5 py-4 
            bg-card/80 backdrop-blur-xl rounded-full
            border-2 transition-all duration-300 ease-out
            ${isFocused ? "border-transparent shadow-xl shadow-primary/20" : "border-border/50 hover:border-primary/30"}
          `}
        >
          {/* Search Icon with Animation */}
          <motion.div
            animate={isFocused ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Search 
              className={`
                w-5 h-5 mr-4 flex-shrink-0 transition-colors duration-200
                ${isFocused ? "text-primary" : "text-muted-foreground"}
              `} 
            />
          </motion.div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search anything with Maxsearch..."
            className="
              flex-1 bg-transparent outline-none text-lg
              placeholder:text-muted-foreground/60
              text-foreground
            "
          />

          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                onClick={handleClear}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 mr-2 rounded-full hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="h-6 w-px bg-border mx-2" />

          {/* Voice Button with Pulse Animation */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-full hover:bg-primary/10 transition-colors group"
            title="Voice search"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Mic className="w-5 h-5 text-primary relative z-10" />
          </motion.button>
        </div>

        {/* Corner Frame Accents */}
        {isFocused && (
          <>
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            />
          </>
        )}
      </motion.div>

      <motion.div 
        className="mt-4 text-center flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Sparkles className="w-3 h-3 text-primary" />
        <span className="text-xs text-muted-foreground">
          Press <kbd className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary">/</kbd> to focus • AI-Powered Search
        </span>
      </motion.div>
    </form>
  );
};

export default SearchBar;
