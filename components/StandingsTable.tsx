'use client';

import React from 'react';
import Link from 'next/link';

interface Player {
  id: string;
  position: number;
  name: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface StandingsTableProps {
  division: string;
  players: Player[];
}

export default function StandingsTable({ division, players }: StandingsTableProps) {
  return (
    <div className="w-full mb-12">
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs font-bold text-accent tracking-wider mb-2">AUTHENTIC LEAGUE</div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-balance">{division}</h2>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-full bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-2xl overflow-hidden border border-accent/30">
          {/* Table Header */}
          <div className="grid grid-cols-8 gap-4 bg-accent text-primary-foreground px-4 py-4 font-bold text-sm md:text-base">
            <div>POS</div>
            <div className="col-span-2">JOGADOR</div>
            <div className="text-center">P</div>
            <div className="text-center">V</div>
            <div className="text-center">E</div>
            <div className="text-center">D</div>
            <div className="text-right">PTS</div>
          </div>

          {/* Table Rows */}
          <div>
            {players.map((player, index) => (
              <Link
                key={player.position}
                href={`/player/${player.id}`}
                className={`grid grid-cols-8 gap-4 px-4 py-4 border-t border-accent/20 items-center transition-all cursor-pointer ${
                  index % 2 === 0 ? 'bg-primary/60' : 'bg-primary/40'
                } hover:bg-primary/80 hover:shadow-lg hover:shadow-accent/20`}
              >
                {/* Position */}
                <div className="font-bold text-accent text-lg md:text-xl">{player.position}</div>

                {/* Player Name */}
                <div className="col-span-2">
                  <div className="text-white font-semibold text-sm md:text-base text-balance hover:text-accent transition-colors">
                    {player.name}
                  </div>
                </div>

                {/* Played */}
                <div className="text-center text-white font-semibold">
                  {player.played}
                </div>

                {/* Wins */}
                <div className="text-center text-white font-semibold">
                  {player.wins}
                </div>

                {/* Draws */}
                <div className="text-center text-white font-semibold">
                  {player.draws}
                </div>

                {/* Losses */}
                <div className="text-center text-white font-semibold">
                  {player.losses}
                </div>

                {/* Points */}
                <div className="text-right font-bold text-accent text-lg">
                  {player.points}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Legend */}
      <div className="grid grid-cols-5 gap-4 mt-6 text-xs md:text-sm">
        <div className="text-muted-foreground">
          <span className="font-semibold text-accent">P</span> - Partidas
        </div>
        <div className="text-muted-foreground">
          <span className="font-semibold text-accent">V</span> - Vitórias
        </div>
        <div className="text-muted-foreground">
          <span className="font-semibold text-accent">E</span> - Empates
        </div>
        <div className="text-muted-foreground">
          <span className="font-semibold text-accent">D</span> - Derrotas
        </div>
        <div className="text-muted-foreground">
          <span className="font-semibold text-accent">PTS</span> - Pontos
        </div>
      </div>
    </div>
  );
}
