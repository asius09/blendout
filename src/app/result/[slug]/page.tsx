"use client";
import Button from "@/components/Button";
import { UserStar } from "lucide-react";
import { useRouter } from "next/navigation";

// Dummy data for players in the game result
const players = [
  {
    id: 1,
    name: "Player 1",
    isHost: true,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Host",
    isTraitor: false,
  },
  {
    id: 2,
    name: "Player 2",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Alice",
    isTraitor: false,
  },
  {
    id: 3,
    name: "Player 3",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Bob",
    isTraitor: true,
  },
  {
    id: 4,
    name: "Player 4",
    isHost: false,
    avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Carol",
    isTraitor: false,
  },
];

export default function Page() {
  const router = useRouter();

  // Find the traitor
  const traitor = players.find((p) => p.isTraitor);

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-foreground rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        {/* Traitor Found Icon */}
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-primary"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M32 18v16"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="32" cy="44" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2">Traitor Found!</h2>
        <p className="text-text-fg mb-6">
          {traitor ? (
            <>
              <span className="font-semibold">{traitor.name}</span> was the traitor!
            </>
          ) : (
            "The traitor was not found."
          )}
        </p>

        {/* Player List */}
        <div className="mb-8 w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {players.map((player) => (
            <div
              key={player.id}
              className={`relative flex flex-col items-center rounded-lg p-4 bg-background border ${
                player.isTraitor
                  ? "border-red-500 shadow-lg"
                  : "border-foreground/20"
              }`}
            >
              <div className="bg-input-bg border-primary/30 mb-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2">
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
              {player.isTraitor && (
                <span className="bg-red-500 text-text-bg absolute top-1 right-2 mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold shadow-sm">
                  Traitor
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Button
            className="w-full"
            variant="filled"
            aria-label="Play Again"
            onClick={() => router.push("/home")}
          >
            Play Again
          </Button>
          <Button
            className="w-full"
            variant="outline"
            aria-label="Exit to Lobby"
            onClick={() => router.push("/lobby")}
          >
            Exit to Lobby
          </Button>
        </div>
      </div>
    </div>
  );
}
