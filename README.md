# Blendout - README

![Blendout Logo](https://via.placeholder.com/150x150?text=Blendout)

A real-time multiplayer game where 3+ players can play together with integrated audio calling. Players must identify the "blendout" (traitor) among them through clue-sharing and voting mechanics.

## 🎮 Game Overview

Blendout is a social deduction game where players receive words/images with one player (the blendout/traitor) getting a different item. Players share clues about their items without revealing them directly, then vote to identify the blendout.

### Key Features

- **Real-time multiplayer** for 3+ players
- **Integrated audio calling** for communication
- **Dynamic lobby system** with auto-start functionality
- **Role-based gameplay** with blendout/traitor mechanics
- **Voting system** with multiple outcomes
- **Punishment system** based on game results
- **Dark/Light theme** support with vibrant color palette

## 🎯 Game Flow

### 1. Lobby System

- **Enter Lobby**: Create a new room or join via code/link
- **Waiting Room**:
  - 3-minute max wait time (auto-starts when expired)
  - Instant start when 3 players are present (no late joins)
  - Game start controlled only by Admin (room creator)

### 2. Gameplay Mechanics

- **Role Assignment**: Each player receives a word/image (hidden from others)
  - One player (blendout/traitor) gets a different word/image
- **Clue Phase** (15-30 seconds): Explain word without saying it directly
- **Voting Phase** (5 seconds): Vote for suspected blendout
  - **Voting Outcomes**:
    - No votes: Game ends
    - One player not voted: Becomes blendout
    - Vote for non-blendout: Blendout wins
    - Vote for blendout: Blendout loses

### 3. Result System

- **Blendout Loss**: Blendout receives punishment
- **Blendout Win**: All incorrect voters receive punishment
- **New Game**: Option to restart after results

## 🖥️ Screens & UI Components

### 1. Home Screen

- Game logo/title
- "Create Room" button (orange)
- "Join Room" input + button (turquoise)

### 2. Game Lobby

- Connected players list (avatars + names)
- "Start Game" button (admin only)
- Mic toggle + chat icon

### 3. Game Round Screen

- Top bar: Round number + timer
- Player cards grid (avatar + name)
- Center: Your role card (image/word)
- Clue input box (1 line max)
- Submit button

### 4. Voting Screen

- Clickable player cards (highlight on selection)
- "Vote" button
- Vote count animations

### 5. Results Screen

- "Blendout Found" or "Blendout Wins" with icons
- Summary text
- "Play Again" button

## 🎨 Design System

### Color Palette

- **Primary**: `#F97316` (orange-500)
- **Secondary**: `#06B6D4` (cyan-500)
- **Accent**: `#8B5CF6` (purple-500)
- **Dark Theme**:
  - Background: `#0F172A` (slate-900)
  - Foreground: `#1E293B` (slate-800)
- **Light Theme**:
  - Background: `#F8FAFC` (slate-50)
  - Foreground: `#E2E8F0` (slate-200)

### Typography

- **Title Font**: Bungee
- **Body Font**: Roboto

### CSS Architecture

The project uses a sophisticated color system with OKLCH color space for accuracy and accessibility:

```css
/* Key Features */
- OKLCH color space for perceptual uniformity
- Automatic theme switching via `prefers-color-scheme`
- Semantic color variables for consistent theming
- Tailwind CSS integration with custom theme mapping
- Component-specific styling for cards, inputs, and surfaces
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom theme system
- **Real-time Communication**: WebRTC (audio), WebSocket (game state)
- **Backend**: (Specify your backend technology)
- **Deployment**: (Specify your deployment method)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with WebRTC support

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/traitor-game.git
   cd traitor-game
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser to `http://localhost:3000`

## 🎮 How to Play

1. **Starting a Game**:
   - Open the app and create a new room or join with a code
   - Wait for other players to join (minimum 3 required)
   - The admin can start the game manually, or it will auto-start after 3 minutes

2. **During Gameplay**:
   - Look at your assigned word/image
   - In the clue phase, type a short description without using the actual word
   - After all clues are submitted, vote for who you think is the traitor

3. **After Voting**:
   - View the results to see if the traitor was identified
   - Punishments are applied based on the outcome
   - Choose to play again or exit

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the established CSS architecture and color system
- Use semantic HTML5 elements
- Implement responsive design for all screen sizes
- Test across modern browsers
- Add appropriate comments to your code

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Tailwind CSS for utility-first styling
- All contributors and playtesters

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team at support@traitorgame.com.

---

**Blendout Game** - Can you find the traitor before they fool you all?
