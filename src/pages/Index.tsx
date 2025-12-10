import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchLogo from "@/components/SearchLogo";
import SearchBar from "@/components/SearchBar";
import SearchButtons from "@/components/SearchButtons";
import QuickLinks from "@/components/QuickLinks";
import FloatingOrbs from "@/components/FloatingOrbs";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast.success(`Searching for: ${query}`);
    // In a real app, this would navigate to search results
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
    <div className="relative min-h-screen flex flex-col">
      <FloatingOrbs />
      
      {/* Header */}
      <header className="flex justify-end p-4 gap-4">
        <a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Gmail
        </a>
        <a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Images
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        <SearchLogo />
        
        <SearchBar onSearch={handleSearch} />
        
        <SearchButtons 
          onSearch={handleButtonSearch}
          onFeelingLucky={handleFeelingLucky}
        />
        
        <QuickLinks />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
