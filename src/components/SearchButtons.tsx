import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface SearchButtonsProps {
  onSearch: () => void;
  onFeelingLucky: () => void;
}

const SearchButtons = ({ onSearch, onFeelingLucky }: SearchButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {/* Main Search Button with Frame */}
      <motion.button
        onClick={onSearch}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated Border Frame */}
        <motion.div
          className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-sm group-hover:opacity-100 transition-opacity"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="relative px-6 py-3 bg-card rounded-xl border border-primary/20 flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          <Search className="w-4 h-4" />
          Maxsearch
        </div>

        {/* Corner Frames */}
        <motion.div
          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.button>

      {/* Feeling Lucky Button with Frame */}
      <motion.button
        onClick={onFeelingLucky}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Subtle glow on hover */}
        <motion.div
          className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 opacity-0 blur-sm group-hover:opacity-70 transition-opacity"
        />
        
        <div className="relative px-6 py-3 bg-secondary/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-accent/30 flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-all">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          I'm Feeling Lucky
        </div>

        {/* Corner Frames */}
        <motion.div
          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent/50 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent/50 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <motion.div
          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent/50 rounded-br opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.button>
    </div>
  );
};

export default SearchButtons;
