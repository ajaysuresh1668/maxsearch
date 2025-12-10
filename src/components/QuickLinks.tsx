import { Globe, Image, Newspaper, Video, MapPin } from "lucide-react";

const links = [
  { icon: Globe, label: "Web", href: "#" },
  { icon: Image, label: "Images", href: "#" },
  { icon: Video, label: "Videos", href: "#" },
  { icon: Newspaper, label: "News", href: "#" },
  { icon: MapPin, label: "Maps", href: "#" },
];

const QuickLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-12">
      {links.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full
            text-sm text-muted-foreground
            hover:bg-secondary hover:text-foreground
            transition-all duration-200
          "
        >
          <Icon className="w-4 h-4" />
          {label}
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
