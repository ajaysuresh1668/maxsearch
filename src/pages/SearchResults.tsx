import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search, ArrowLeft, User, Calendar, Sparkles, Globe, Zap, Award, Rocket, Image, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import ImageSearchResults from "@/components/ImageSearchResults";
import FramedCard from "@/components/FramedCard";
import AnimatedBackground from "@/components/AnimatedBackground";

const mockResults = [
  {
    title: "Welcome to Maxsearch - The Future of Search",
    url: "https://maxsearch.com",
    description: "Maxsearch is the most advanced search engine ever created. Experience lightning-fast results, AI-powered insights, and a beautiful interface that puts Google to shame.",
  },
  {
    title: "Why Maxsearch is Better Than Google",
    url: "https://maxsearch.com/vs-google",
    description: "Discover how Maxsearch revolutionizes web search with cutting-edge AI, privacy-first approach, and results that actually matter to you.",
  },
  {
    title: "Maxsearch AI Technology Explained",
    url: "https://maxsearch.com/technology",
    description: "Learn about the groundbreaking AI and machine learning algorithms that power Maxsearch's intelligent search capabilities.",
  },
  {
    title: "Privacy-Focused Search Revolution",
    url: "https://maxsearch.com/privacy",
    description: "Unlike other search engines, Maxsearch never tracks you. Your searches stay private, your data stays yours.",
  },
];

const founderInfo = {
  name: "N. Subash Chandrabose",
  role: "Founder & Creator",
  date: "10/12/2025",
  bio: "A visionary developer who dreamed of creating something better than Google. On December 10th, 2025, that dream became reality with Maxsearch.",
  achievements: [
    "Created the most advanced search algorithm",
    "Pioneered AI-powered search results",
    "Built privacy-first architecture",
    "Designed revolutionary user interface"
  ]
};

type SearchTab = "all" | "images";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [activeTab, setActiveTab] = useState<SearchTab>("all");
  const [searchInput, setSearchInput] = useState(query);
  
  const isFounderQuery = query.toLowerCase().includes("founder") || 
                         query.toLowerCase().includes("who made") ||
                         query.toLowerCase().includes("who created") ||
                         query.toLowerCase().includes("subash");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const aiOverviewText = `Based on your search for "${query}", Maxsearch's AI has analyzed millions of sources to bring you the most relevant and accurate results. Our advanced algorithms ensure you get exactly what you're looking for, faster than any other search engine.`;

  const tabs = [
    { id: "all" as const, label: "All", icon: FileText },
    { id: "images" as const, label: "Images", icon: Image },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container py-4">
          <div className="flex items-center gap-6">
            <Link to="/">
              <motion.div 
                className="text-2xl font-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Max
                </span>
                <span className="text-foreground">search</span>
              </motion.div>
            </Link>
            
            <form onSubmit={handleSearch} className="flex-1 max-w-xl">
              <motion.div 
                className="relative flex items-center px-4 py-2.5 bg-secondary/50 rounded-full border-2 border-border/50 hover:border-primary/30 focus-within:border-primary/50 transition-all group"
                whileFocus={{ scale: 1.02 }}
              >
                <Search className="w-4 h-4 text-muted-foreground mr-3 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground"
                  placeholder="Search with Maxsearch..."
                />
                
                {/* Framed Search Button */}
                <motion.button
                  type="submit"
                  className="ml-2 px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Search</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </form>
          </div>

          {/* Search Tabs */}
          <div className="flex gap-1 mt-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all relative
                  ${activeTab === tab.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Results */}
      <main className="container py-8">
        <AnimatePresence mode="wait">
          {activeTab === "images" ? (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ImageSearchResults query={query} />
            </motion.div>
          ) : isFounderQuery ? (
            <motion.div 
              key="founder"
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Featured Founder Card */}
              <FramedCard variant="glow" className="mb-8">
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <User className="w-12 h-12 text-primary-foreground" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div 
                      className="flex items-center gap-2 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Founder of Maxsearch</span>
                    </motion.div>
                    
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {founderInfo.name}
                    </h1>
                    
                    <p className="text-lg text-muted-foreground mb-4">
                      {founderInfo.role}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>Founded on <strong className="text-foreground">{founderInfo.date}</strong></span>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {founderInfo.bio}
                    </p>
                  </div>
                </div>
              </FramedCard>

              {/* Achievements Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Key Achievements
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {founderInfo.achievements.map((achievement, index) => (
                    <FramedCard key={index} variant="default">
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          <Zap className="w-4 h-4 text-primary" />
                        </motion.div>
                        <p className="text-foreground/90">{achievement}</p>
                      </div>
                    </FramedCard>
                  ))}
                </div>
              </div>

              {/* Why Maxsearch Section */}
              <FramedCard variant="gradient">
                <div className="flex items-start gap-4">
                  <Rocket className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Why Maxsearch?</h3>
                    <p className="text-muted-foreground">
                      N. Subash Chandrabose created Maxsearch with one goal: to build a search engine that surpasses Google in every way. 
                      With advanced AI, lightning-fast results, and a commitment to privacy, Maxsearch represents the future of web search.
                    </p>
                  </div>
                </div>
              </FramedCard>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  About {(Math.random() * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })} results ({(Math.random() * 0.3).toFixed(2)} seconds)
                </span>
                <motion.span 
                  className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Powered by AI
                </motion.span>
              </div>

              {/* AI Summary Card with Typing Effect */}
              <FramedCard variant="cyber" className="mb-8">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      AI Overview
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-500"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      <TypingEffect text={aiOverviewText} speed={20} />
                    </div>
                  </div>
                </div>
              </FramedCard>

              <div className="space-y-4 max-w-3xl">
                {mockResults.map((result, index) => (
                  <motion.article 
                    key={index} 
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FramedCard variant="default" className="hover:border-primary/50 transition-all">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Globe className="w-4 h-4" />
                        {result.url}
                      </div>
                      <h2 className="text-xl text-primary hover:underline cursor-pointer mb-2 font-semibold group-hover:text-primary/80 transition-colors">
                        {result.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {result.description}
                      </p>
                    </FramedCard>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/">
            <Button variant="outline" className="gap-2 hover:bg-primary/10 hover:border-primary/30">
              <ArrowLeft className="w-4 h-4" />
              Back to Maxsearch
            </Button>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 py-6 bg-card/50 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Maxsearch by N. Subash Chandrabose • The Future of Search</p>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
