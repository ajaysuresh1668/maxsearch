import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchLogo from "@/components/SearchLogo";
import SearchBar from "@/components/SearchBar";
import SearchButtons from "@/components/SearchButtons";
import QuickLinks from "@/components/QuickLinks";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast.success(`Searching for: ${query}`);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleButtonSearch = () => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
    } else {
      toast.info("Please enter a search query");
    }
  };

  const handleFeelingLucky = () => {
    toast("✨ Feeling lucky!", {
      description: "Taking you somewhere amazing...",
    });
    navigate(`/search?q=${encodeURIComponent("who is the founder of maxsearch")}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <motion.header 
        className="flex justify-end p-4 gap-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Gmail
        </motion.a>
        <motion.a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Images
        </motion.a>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <SearchLogo />
        </motion.div>
        
        <SearchBar onSearch={handleSearch} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SearchButtons 
            onSearch={handleButtonSearch}
            onFeelingLucky={handleFeelingLucky}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <QuickLinks />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
