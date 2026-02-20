'use client';

export default function LeagueHeader() {
  return (
    <div className="relative mb-12 md:mb-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Header */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-2 text-balance">
          ATC - AUTHENTIC ESPORTS
        </h1>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-2 text-balance">

          FC<span className="text-accent">26</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-semibold tracking-wider">
          OFFICIAL LEAGUE STANDINGS
        </p>
      </div>
    </div>
  );
}
