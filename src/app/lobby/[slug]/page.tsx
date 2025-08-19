"use client";
import Button from "@/components/Button";
import { MessageCircleMore, Mic, UserStar } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Dummy data for players in the lobby
const players = [
  {
    id: 1,
    name: "Player 1",
    isHost: true,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Host",
  },
  {
    id: 2,
    name: "Player 2",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Alice",
  },
  {
    id: 3,
    name: "Player 3",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Bob",
  },
  {
    id: 4,
    name: "Player 4",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Carol",
  },
];

export default function Page() {
  // Countdown timer (e.g., 30 seconds)
  const [countdown, setCountdown] = useState(30);
  const params = useParams();
  const roundCode = params?.slug;

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="bg-background min-h-screen p-6">
      <div className="relative mx-auto max-w-4xl" id="blendout-lobby-slug ">
        {/* <div className="mb-6 flex items-center justify-between">
          <h1
            className="logo text-primary text-2xl tracking-tighter"
            aria-label="Blendout - Find the blended one amoung you"
          >
            Blendout
          </h1>
        </div> */}
        <div
          className="mb-6 flex w-full flex-col items-start justify-start"
          id="game-lobby-info"
        >
          <h2 className="text-text-fg flex gap-2 text-lg font-semibold">
            Room: <span className="text-primary">{roundCode}</span>
          </h2>
          <div className="flex w-full items-center justify-between">
            <span className="text-text-fg/70 text-sm">
              Players: {players.length}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-primary text-xs font-bold">
                Game starts in
              </span>
              <span className="bg-primary text-text-bg min-w-[2.5rem] rounded px-2 py-1 text-center font-mono text-sm">
                {countdown}
              </span>
              <span className="text-primary text-xs">s</span>
            </div>
          </div>
        </div>

        {/* Player List */}
        <div className="mb-8 grid grid-cols-2 gap-4 overflow-y-scroll sm:grid-cols-3 md:grid-cols-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-foreground relative min-h-40 rounded-lg p-4 text-center"
            >
              {/* Avatar */}
              <div className="bg-input-bg border-primary/30 mx-auto mb-2 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2">
                <img
                  src={player.avatarUrl}
                  alt={player.name}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-text-fg text-base font-medium">
                {player.name}
              </p>
              {player.isHost && (
                <span className="bg-primary/90 text-text-bg absolute top-1 left-2 mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold shadow-sm">
                  <UserStar className="size-4" />
                  Host
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Host Controls */}
        <div
          className="bg-background/80 fixed bottom-10 left-1/2 z-20 flex w-full max-w-xs -translate-x-1/2 items-center justify-between gap-3 px-4 py-3 backdrop-blur-sm"
          role="region"
          aria-label="Host Controls"
        >
          <div className="flex space-x-3">
            <button
              className="text-text-fg bg-foreground hover:bg-primary/10 focus:ring-primary rounded-full p-3 transition focus:ring-2 focus:outline-none"
              aria-label="Toggle microphone"
              type="button"
            >
              <Mic className="size-5" aria-hidden="true" />
            </button>
            <button
              className="text-text-fg bg-foreground hover:bg-primary/10 focus:ring-primary rounded-full p-3 transition focus:ring-2 focus:outline-none"
              aria-label="Open chat"
              type="button"
            >
              <MessageCircleMore className="size-5" aria-hidden="true" />
            </button>
          </div>
          <Button className="" aria-label="Start the game">
            Start Game
          </Button>
        </div>
      </div>
    </div>
  );
}
