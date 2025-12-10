import { Button } from "@/components/ui/button";

interface SearchButtonsProps {
  onSearch: () => void;
  onFeelingLucky: () => void;
}

const SearchButtons = ({ onSearch, onFeelingLucky }: SearchButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      <Button
        variant="secondary"
        onClick={onSearch}
        className="px-6 py-2.5 text-sm font-medium hover:ring-1 hover:ring-border transition-all"
      >
        Maxsearch
      </Button>
      <Button
        variant="secondary"
        onClick={onFeelingLucky}
        className="px-6 py-2.5 text-sm font-medium hover:ring-1 hover:ring-border transition-all"
      >
        I'm Feeling Lucky
      </Button>
    </div>
  );
};

export default SearchButtons;
