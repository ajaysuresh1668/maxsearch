const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-4">
      <div className="container flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Advertising</a>
          <a href="#" className="hover:text-foreground transition-colors">Business</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
