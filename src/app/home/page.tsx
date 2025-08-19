"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");

  const handleCreateRoom = () => {
    // TODO: Implement create room logic
    alert("Create Room clicked!");
  };

  const handleJoin = () => {
    if (!roomCode.trim()) {
      setError("Please enter a room code.");
      return;
    }
    setError("");
    // TODO: Implement join room logic
    alert(`Joining room: ${roomCode}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-0 flex w-full items-center justify-between px-4 py-5">
        <h1
          className="logo text-primary text-2xl tracking-tighter"
          aria-label="Blendout - Find the blended one amoung you"
        >
          Blendout
        </h1>
        <Link
          aria-label="Click to go to login or signup page"
          href={"/"}
          className="text-text-bg hover:text-primary text-base font-medium hover:underline"
        >
          Login/Sign Up
        </Link>
      </div>
      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-6 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:gap-2">
          <Input
            type="text"
            placeholder="Enter room code"
            // className="input border-foreground/20 focus:ring-primary-500 bg-foreground text-text-fg placeholder:text-game-light/60 flex-1 rounded-xl border px-4 py-3 text-base font-medium transition focus:ring-2 focus:outline-none"
            value={roomCode}
            onChange={handleInputChange}
            autoCorrect="off"
            spellCheck={false}
            aria-label="Enter room code to join"
          />
          <Button
            variant="filled"
            onClick={handleJoin}
            className="md:max-w-32"
            aria-label="Click to Join Room"
          >
            Join Room
          </Button>
        </div>
        {error && (
          <div className="mt-1 text-sm font-semibold text-red-500">{error}</div>
        )}

        <div
          className="my-2 flex items-center justify-center gap-2 p-2 md:p-4 select-none"
          aria-hidden
        >
          <span
            className="text-text-bg/60 ml-4 w-full border-[0.5px] select-none"
            aria-hidden
          />
          <span
            className="text-text-bg/60 font-sm md:px-3 select-none"
            aria-hidden
          >
            OR
          </span>
          <span
            className="text-text-bg/60 mr-4 w-full border-[0.5px] select-none"
            aria-hidden
          />
        </div>

        <Button
          className="flex max-w-md items-center justify-center gap-2"
          variant="outline"
          onClick={handleCreateRoom}
          aria-label="Create a new game room"
        >
          <Plus className="size-6" />
          Create Room
        </Button>
      </div>
    </div>
  );
}
