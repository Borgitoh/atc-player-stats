import React from 'react';
import Link from 'next/link';
import LeagueHeader from '@/components/LeagueHeader';
import StandingsTable from '@/components/StandingsTable';
import { UpcomingMatches } from '@/components/UpcomingMatches';
import playersData from '@/data/players.json';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'FC26 - Classificação Oficial',
  description: 'Classificação oficial da FC26 com estatísticas de todos os jogadores',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <LeagueHeader />

        {/* Upcoming Matches */}
        <UpcomingMatches />

        {/* Standings Tables */}
        <div className="max-w-6xl mx-auto">
          {playersData.divisions.map((division) => (
            <StandingsTable
              key={division.id}
              division={division.name}
              players={division.players}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center pt-12 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FC26 Official. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </main>
  );
}
