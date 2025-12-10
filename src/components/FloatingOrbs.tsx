const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top left orb */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-logo-blue/10 blur-3xl animate-float"
      />
      
      {/* Top right orb */}
      <div 
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-logo-green/10 blur-3xl animate-float-delayed"
      />
      
      {/* Bottom center orb */}
      <div 
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow"
      />
      
      {/* Small accent orbs */}
      <div 
        className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-logo-yellow/20 blur-2xl animate-float"
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-logo-red/15 blur-2xl animate-float-delayed"
      />
    </div>
  );
};

export default FloatingOrbs;
