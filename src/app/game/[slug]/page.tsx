"use client";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { MessageCircleMore, Mic, UserStar, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

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

// Dummy chat messages
const dummyMessages = [
  { id: 1, user: "Player 1", text: "Let's go!", self: false },
  { id: 2, user: "Player 2", text: "Ready!", self: false },
  { id: 3, user: "You", text: "Good luck!", self: true },
];

export default function Page() {
  // Countdown timer (e.g., 30 seconds)
  const [countdown, setCountdown] = useState(30);
  const params = useParams();
  const gameId = params?.slug;

  // Chat state
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Scroll chat to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, user: "You", text: input, self: true },
    ]);
    setInput("");
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="bg-background h-screen w-full overflow-hidden py-6">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-1 gap-0 md:grid-cols-[1.2fr_1fr] md:gap-4">
        {/* Left: Video/Game Area */}
        <div className="flex h-full flex-col">
          {/* Top: Room Info and Timer */}
          <div className="flex items-center justify-between px-4 py-2 md:py-4">
            <div className="flex items-center gap-2">
              <span className="text-text-fg text-sm font-semibold md:text-base">
                Room:
              </span>
              <span className="text-primary text-base font-bold md:text-lg">
                {gameId}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-sm font-bold md:text-base">
                Time left
              </span>
              <span className="bg-primary text-text-bg min-w-[2.5rem] rounded px-2 py-1 text-center font-mono text-base md:text-lg">
                {countdown}
              </span>
              <span className="text-primary text-sm md:text-base">s</span>
            </div>
          </div>
          {/* Center: Video/Image */}
          <div className="flex flex-1 flex-col items-center justify-center px-2 md:px-4">
            <div className="bg-foreground flex h-40 w-40 items-center justify-center rounded-xl shadow-lg transition-all sm:h-56 sm:w-56 md:h-72 md:w-72">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Game"
                className="h-full w-full rounded-xl object-cover"
                draggable={false}
              />
            </div>
          </div>
          {/* Bottom: Player List */}
          <div className="bg-background/80 w-full px-2 py-2 md:px-4 md:py-3">
            <div className="flex flex-row gap-2 overflow-x-auto md:gap-4 md:overflow-x-auto">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="bg-foreground relative flex min-h-20 flex-col items-center rounded-lg p-2 text-center sm:min-h-24 md:min-h-32 md:p-4 min-w-40"
                >
                  <div className="bg-input-bg border-primary/30 mb-1 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 sm:h-12 sm:w-12 md:mb-2 md:h-14 md:w-14">
                    <img
                      src={player.avatarUrl}
                      alt={player.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <p className="text-text-fg text-xs font-medium sm:text-sm md:text-base">
                    {player.name}
                  </p>
                  {player.isHost && (
                    <span className="bg-primary/90 text-text-bg absolute top-1 left-2 mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-sm sm:text-xs">
                      <UserStar className="size-3 sm:size-4" />
                      Host
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Chat Section */}
        <div className="bg-foreground flex h-full flex-col overflow-hidden rounded-none shadow-inner md:rounded-xl">
          {/* Chat Header */}
          <div className="border-background/20 flex items-center justify-between border-b px-4 py-3">
            <span className="text-primary text-lg font-bold">Chat</span>
          </div>
          {/* Chat Messages */}
          <div className="scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent flex-1 space-y-2 overflow-y-auto px-3 py-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-1 break-words shadow-sm ${
                    msg.self
                      ? "bg-primary text-text-bg"
                      : "bg-input-bg text-text-fg"
                  } text-sm sm:text-base`}
                >
                  {!msg.self && (
                    <span className="text-primary mr-1 font-bold">
                      {msg.user}:
                    </span>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          {/* Chat Input & Controls at Bottom */}
          <div className="bg-background/80 border-background/20 flex flex-col gap-2 border-t px-2 py-2 sm:px-3 sm:py-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                aria-label="Type your message"
              />
              <Button
                className="flex size-12 items-center justify-center"
                aria-label="Send message"
                onClick={handleSend}
                type="button"
              >
                <Send className="size-4 sm:size-5" />
              </Button>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                className="text-text-fg bg-background hover:bg-primary/50 focus:ring-primary rounded-full p-2 transition focus:ring-2 focus:outline-none active:ring-0"
                aria-label="Toggle microphone"
                type="button"
              >
                <Mic className="size-4 sm:size-5" aria-hidden="true" />
              </button>
              <button
                className="text-text-fg bg-background hover:bg-primary/50 focus:ring-primary rounded-full p-2 transition focus:ring-2 focus:outline-none active:ring-0"
                aria-label="Open chat"
                type="button"
              >
                <MessageCircleMore
                  className="size-4 sm:size-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
