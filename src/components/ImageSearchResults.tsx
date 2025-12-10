import { motion } from "framer-motion";
import { Download, ExternalLink, ZoomIn } from "lucide-react";
import { useState } from "react";

interface ImageResult {
  id: number;
  url: string;
  title: string;
  source: string;
}

const generateMockImages = (query: string): ImageResult[] => {
  const colors = ["4F46E5", "06B6D4", "8B5CF6", "EC4899", "F59E0B", "10B981", "EF4444", "3B82F6"];
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    url: `https://placehold.co/${300 + (i % 3) * 100}x${200 + (i % 4) * 50}/${colors[i % colors.length]}/white?text=${encodeURIComponent(query.slice(0, 8))}`,
    title: `${query} - Image ${i + 1}`,
    source: `maxsearch.com/images/${i + 1}`,
  }));
};

interface ImageSearchResultsProps {
  query: string;
}

const ImageSearchResults = ({ query }: ImageSearchResultsProps) => {
  const images = generateMockImages(query);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
          className="break-inside-avoid"
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <motion.div
            className="relative group rounded-2xl overflow-hidden bg-secondary/50 border-2 border-transparent hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            style={{
              boxShadow: hoveredId === image.id 
                ? "0 20px 40px -15px hsl(var(--primary) / 0.3)" 
                : "0 4px 12px -4px hsl(var(--foreground) / 0.1)",
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-medium text-foreground truncate mb-1">
                  {image.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {image.source}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Corner Frame Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageSearchResults;
