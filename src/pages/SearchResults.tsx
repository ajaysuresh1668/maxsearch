import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockResults = [
  {
    title: "Welcome to Goggli - The Future of Search",
    url: "https://goggli.com",
    description: "Goggli is a modern search engine designed for speed, privacy, and beautiful results. Experience the web like never before.",
  },
  {
    title: "Search Engine Optimization Guide 2024",
    url: "https://example.com/seo-guide",
    description: "Learn the latest SEO techniques and best practices to rank higher in search results. Comprehensive guide for beginners and experts.",
  },
  {
    title: "How Search Engines Work - Complete Guide",
    url: "https://example.com/how-search-works",
    description: "Understand the technology behind modern search engines. From crawling to indexing to ranking algorithms explained simply.",
  },
  {
    title: "Privacy-Focused Search Alternatives",
    url: "https://example.com/private-search",
    description: "Discover search engines that respect your privacy and don't track your searches. Compare features and capabilities.",
  },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container py-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-logo-blue">G</span>
              <span className="text-logo-red">o</span>
              <span className="text-logo-yellow">g</span>
              <span className="text-logo-blue">g</span>
              <span className="text-logo-green">l</span>
              <span className="text-logo-red">i</span>
            </Link>
            
            <div className="flex-1 max-w-xl">
              <div className="flex items-center px-4 py-2.5 bg-secondary rounded-full">
                <Search className="w-4 h-4 text-muted-foreground mr-3" />
                <input
                  type="text"
                  defaultValue={query}
                  className="flex-1 bg-transparent outline-none text-foreground"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="container py-8">
        <div className="mb-4 text-sm text-muted-foreground">
          About {Math.floor(Math.random() * 1000000).toLocaleString()} results ({(Math.random() * 0.5).toFixed(2)} seconds)
        </div>

        <div className="space-y-8 max-w-2xl">
          {mockResults.map((result, index) => (
            <article key={index} className="group">
              <div className="text-sm text-muted-foreground mb-1">
                {result.url}
              </div>
              <h2 className="text-xl text-primary hover:underline cursor-pointer mb-1 font-medium">
                {result.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Goggli
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
