import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowLeft, User, Calendar, Sparkles, Globe, Zap, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const isFounderQuery = query.toLowerCase().includes("founder") || 
                         query.toLowerCase().includes("who made") ||
                         query.toLowerCase().includes("who created") ||
                         query.toLowerCase().includes("subash");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-xl">
        <div className="container py-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-black">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Max
              </span>
              <span className="text-foreground">search</span>
            </Link>
            
            <div className="flex-1 max-w-xl">
              <div className="flex items-center px-4 py-2.5 bg-secondary/50 rounded-full border border-border/50 hover:border-primary/30 transition-colors">
                <Search className="w-4 h-4 text-muted-foreground mr-3" />
                <input
                  type="text"
                  defaultValue={query}
                  className="flex-1 bg-transparent outline-none text-foreground"
                  placeholder="Search with Maxsearch..."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="container py-8">
        {isFounderQuery ? (
          <div className="max-w-4xl">
            {/* Featured Founder Card */}
            <Card className="mb-8 overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                    <User className="w-12 h-12 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Founder of Maxsearch</span>
                    </div>
                    
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
              </div>
            </Card>

            {/* Achievements Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Key Achievements
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {founderInfo.achievements.map((achievement, index) => (
                  <Card key={index} className="p-4 bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground/90">{achievement}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Maxsearch Section */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-none">
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
            </Card>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                About {(Math.random() * 10000000).toLocaleString(undefined, { maximumFractionDigits: 0 })} results ({(Math.random() * 0.3).toFixed(2)} seconds)
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Powered by AI
              </span>
            </div>

            {/* AI Summary Card */}
            <Card className="mb-8 p-6 bg-gradient-to-br from-primary/5 via-card to-accent/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on your search for "<strong className="text-foreground">{query}</strong>", Maxsearch's AI has analyzed millions of sources to bring you the most relevant and accurate results. Our advanced algorithms ensure you get exactly what you're looking for.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-6 max-w-3xl">
              {mockResults.map((result, index) => (
                <article key={index} className="group p-4 -mx-4 rounded-xl hover:bg-card/50 transition-colors">
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
                </article>
              ))}
            </div>
          </>
        )}

        <div className="mt-12">
          <Link to="/">
            <Button variant="outline" className="gap-2 hover:bg-primary/10 hover:border-primary/30">
              <ArrowLeft className="w-4 h-4" />
              Back to Maxsearch
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Maxsearch by N. Subash Chandrabose • The Future of Search</p>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
