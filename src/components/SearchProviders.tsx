import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface SearchProvidersProps {
  query: string;
}

const SearchProviders = ({ query }: SearchProvidersProps) => {
  const providers = [
    { 
      name: "Yahoo", 
      icon: "🟣",
      color: "from-purple-600 to-violet-500",
      bgColor: "bg-purple-500/15 hover:bg-purple-500/25",
      url: `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`
    },
    { 
      name: "Bing", 
      icon: "🔷",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/15 hover:bg-cyan-500/25",
      url: `https://www.bing.com/search?q=${encodeURIComponent(query)}`
    },
    { 
      name: "ChatGPT", 
      icon: "🤖",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/15 hover:bg-emerald-500/25",
      url: `https://chat.openai.com/?q=${encodeURIComponent(query)}`
    },
    { 
      name: "DuckDuckGo", 
      icon: "🦆",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/15 hover:bg-orange-500/25",
      url: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
    },
    { 
      name: "YouTube", 
      icon: "▶️",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/15 hover:bg-red-500/25",
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    },
    { 
      name: "Wikipedia", 
      icon: "📖",
      color: "from-slate-600 to-gray-500",
      bgColor: "bg-slate-500/15 hover:bg-slate-500/25",
      url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`
    },
    { 
      name: "Ecosia", 
      icon: "🌳",
      color: "from-green-500 to-lime-500",
      bgColor: "bg-green-500/15 hover:bg-green-500/25",
      url: `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`
    },
    { 
      name: "Brave", 
      icon: "🦁",
      color: "from-orange-600 to-red-500",
      bgColor: "bg-orange-600/15 hover:bg-orange-600/25",
      url: `https://search.brave.com/search?q=${encodeURIComponent(query)}`
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
