import { useState, useRef, useEffect } from "react";
import { Search, Mic, X } from "lucide-react";

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
      <div
        className={`
          relative flex items-center w-full px-5 py-4 
          glass-hover rounded-full
          transition-all duration-300 ease-out
          ${isFocused ? "ring-2 ring-primary/30 animate-search-glow" : ""}
        `}
      >
        <Search 
          className={`
            w-5 h-5 mr-4 flex-shrink-0 transition-colors duration-200
            ${isFocused ? "text-primary" : "text-muted-foreground"}
          `} 
        />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search the web..."
          className="
            flex-1 bg-transparent outline-none text-lg
            placeholder:text-muted-foreground/60
            text-foreground
          "
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 mr-2 rounded-full hover:bg-muted/50 transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}

        <div className="h-6 w-px bg-border mx-2" />

        <button
          type="button"
          className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
          title="Voice search"
        >
          <Mic className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="mt-3 text-center">
        <span className="text-xs text-muted-foreground">
          Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">/</kbd> to focus
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
