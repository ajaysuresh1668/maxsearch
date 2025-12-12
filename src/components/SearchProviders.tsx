import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface SearchProvidersProps {
  query: string;
}

const SearchProviders = ({ query }: SearchProvidersProps) => {
  const providers = [
    { 
      name: "Google", 
      icon: "🔍",
      color: "from-blue-500 to-green-500",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
      url: `https://www.google.com/search?q=${encodeURIComponent(query)}`
    },
    { 
      name: "ChatGPT", 
      icon: "🤖",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10 hover:bg-green-500/20",
      url: `https://chat.openai.com/?q=${encodeURIComponent(query)}`
    },
    { 
      name: "Bing", 
      icon: "🌐",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20",
      url: `https://www.bing.com/search?q=${encodeURIComponent(query)}`
    },
    { 
      name: "YouTube", 
      icon: "▶️",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10 hover:bg-red-500/20",
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    },
    { 
      name: "Wikipedia", 
      icon: "📚",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-500/10 hover:bg-gray-500/20",
      url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`
    },
    { 
      name: "DuckDuckGo", 
      icon: "🦆",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
      url: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
    },
  ];

  return (
    <motion.div 
      className="mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Search with other providers
        </span>
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {providers.map((provider, index) => (
          <motion.a
            key={provider.name}
            href={provider.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 ${provider.bgColor} backdrop-blur-sm transition-all duration-300 group`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {provider.icon}
            </motion.span>
            <span className={`text-sm font-medium bg-gradient-to-r ${provider.color} bg-clip-text text-transparent`}>
              {provider.name}
            </span>
            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SearchProviders;
