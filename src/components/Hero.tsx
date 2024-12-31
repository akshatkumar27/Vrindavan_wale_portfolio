interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <div 
      className="h-[60vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 to-dark-950/90 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center text-white p-6 rounded-2xl bg-dark-900/30 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-3d">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">{title}</h1>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}