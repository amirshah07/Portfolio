import { useEffect, useRef, useState } from 'react';

interface DinoGameProps {
  isDarkMode: boolean;
}

export default function DinoGame({ isDarkMode }: DinoGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<number>();
  const gamePausedRef = useRef(false);

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('dinoHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load dino image based on theme
    const dinoImage = new Image();
    dinoImage.src = isDarkMode ? '/images/dino/dino_white.png' : '/images/dino/dino_black.png';
    let imageLoaded = false;
    dinoImage.onload = () => {
      imageLoaded = true;
    };

    // Game constants
    const GRAVITY = 0.6;
    const JUMP_STRENGTH = -12;
    const GROUND_HEIGHT = 200;
    const DINO_WIDTH = 44;
    const DINO_HEIGHT = 44;
    const OBSTACLE_WIDTH = 20;
    const OBSTACLE_HEIGHT = 50;
    const GAME_SPEED = 5;

    // Game state
    let dino = {
      x: 50,
      y: GROUND_HEIGHT,
      width: DINO_WIDTH,
      height: DINO_HEIGHT,
      velocityY: 0,
      jumping: false,
    };

    let obstacles: Array<{ x: number; y: number; width: number; height: number }> = [];
    let frameCount = 0;
    let currentScore = 0;
    let nextObstacleFrame = 90; // Random initial spawn

    // Jump function
    const jump = () => {
      if (!dino.jumping && gameStarted && !gameOver && !gamePausedRef.current) {
        dino.velocityY = JUMP_STRENGTH;
        dino.jumping = true;
      }
    };

    // Event listeners
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (!gameStarted) {
          setGameStarted(true);
        } else if (gameOver) {
          restartGame();
        } else if (!gamePausedRef.current) {
          jump();
        }
      } else if (e.code === 'Escape') {
        e.preventDefault();
        if (gameStarted && !gameOver) {
          gamePausedRef.current = !gamePausedRef.current;
          setGamePaused(gamePausedRef.current);
        }
      }
    };

    const handleClick = () => {
      if (!gameStarted) {
        setGameStarted(true);
      } else if (gameOver) {
        restartGame();
      } else if (!gamePausedRef.current) {
        jump();
      }
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyPress);

    // Restart game
    const restartGame = () => {
      dino = {
        x: 50,
        y: GROUND_HEIGHT,
        width: DINO_WIDTH,
        height: DINO_HEIGHT,
        velocityY: 0,
        jumping: false,
      };
      obstacles = [];
      frameCount = 0;
      currentScore = 0;
      nextObstacleFrame = Math.floor(Math.random() * 30) + 60; // Random 60-90 frames
      setScore(0);
      setGameOver(false);
      gamePausedRef.current = false;
      setGamePaused(false);
      setGameStarted(true);
    };

    // Check collision
    const checkCollision = (dinoScreenY: number) => {
      for (const obstacle of obstacles) {
        const obstacleScreenY = canvas.height - obstacle.height - 10;
        if (
          dino.x < obstacle.x + obstacle.width &&
          dino.x + dino.width > obstacle.x &&
          dinoScreenY < obstacleScreenY + obstacle.height &&
          dinoScreenY + dino.height > obstacleScreenY
        ) {
          return true;
        }
      }
      return false;
    };

    // Game loop
    const gameLoop = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Colors based on theme
      const bgColor = isDarkMode ? '#000000' : '#ffffff';
      const fgColor = isDarkMode ? '#ffffff' : '#000000';
      const groundColor = isDarkMode ? '#404040' : '#d0d0d0';

      // Draw background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = groundColor;
      ctx.fillRect(0, canvas.height - 10, canvas.width, 2);

      if (!gameStarted) {
        // Draw start message
        ctx.fillStyle = fgColor;
        ctx.font = '20px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Press SPACE or CLICK to start', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '14px monospace';
        ctx.fillText('Jump over the obstacles!', canvas.width / 2, canvas.height / 2 + 10);
      } else if (gamePausedRef.current) {
        // Draw paused screen
        ctx.fillStyle = fgColor;
        ctx.font = '24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '14px monospace';
        ctx.fillText('Press ESC to resume', canvas.width / 2, canvas.height / 2 + 10);

        // Still draw the game state frozen
        ctx.fillStyle = fgColor;
        if (imageLoaded) {
          const dinoGroundY = canvas.height - 10 - dino.height;
          const dinoY = dinoGroundY - (GROUND_HEIGHT - dino.y);
          ctx.drawImage(dinoImage, dino.x, dinoY, dino.width, dino.height);
        }

        for (const obstacle of obstacles) {
          ctx.fillRect(
            obstacle.x,
            canvas.height - obstacle.height - 10,
            obstacle.width,
            obstacle.height
          );
        }

        // Draw score
        ctx.font = '16px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`Score: ${currentScore}`, canvas.width - 20, 30);
      } else if (!gameOver) {
        // Update dino
        dino.velocityY += GRAVITY;
        dino.y += dino.velocityY;

        // Ground collision
        if (dino.y >= GROUND_HEIGHT) {
          dino.y = GROUND_HEIGHT;
          dino.velocityY = 0;
          dino.jumping = false;
        }

        // Calculate dino screen position
        const dinoGroundY = canvas.height - 10 - dino.height;
        const dinoY = dinoGroundY - (GROUND_HEIGHT - dino.y);

        // Draw dino image
        if (imageLoaded) {
          ctx.drawImage(dinoImage, dino.x, dinoY, dino.width, dino.height);
        } else {
          // Fallback rectangle while image loads
          ctx.fillStyle = fgColor;
          ctx.fillRect(dino.x, dinoY, dino.width, dino.height);
        }

        // Spawn obstacles with variable timing
        frameCount++;
        if (frameCount >= nextObstacleFrame) {
          obstacles.push({
            x: canvas.width,
            y: 0,
            width: OBSTACLE_WIDTH,
            height: OBSTACLE_HEIGHT,
          });
          // Set next obstacle spawn with random variation (60-120 frames = 1-2 seconds at 60fps)
          nextObstacleFrame = frameCount + Math.floor(Math.random() * 60) + 60;
        }

        // Update and draw obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obstacle = obstacles[i];
          obstacle.x -= GAME_SPEED;

          // Draw obstacle (cactus)
          ctx.fillStyle = fgColor;
          ctx.fillRect(
            obstacle.x,
            canvas.height - obstacle.height - 10,
            obstacle.width,
            obstacle.height
          );

          // Remove off-screen obstacles
          if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(i, 1);
            currentScore += 10;
            setScore(currentScore);
          }
        }

        // Check collision
        if (checkCollision(dinoY)) {
          setGameOver(true);
          if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem('dinoHighScore', currentScore.toString());
          }
        }

        // Draw score
        ctx.fillStyle = fgColor;
        ctx.font = '16px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`Score: ${currentScore}`, canvas.width - 20, 30);
      } else {
        // Game over screen - draw frozen game state first
        ctx.fillStyle = fgColor;

        // Draw dino at last position
        const dinoGroundY = canvas.height - 10 - dino.height;
        const dinoY = dinoGroundY - (GROUND_HEIGHT - dino.y);
        if (imageLoaded) {
          ctx.drawImage(dinoImage, dino.x, dinoY, dino.width, dino.height);
        } else {
          ctx.fillRect(dino.x, dinoY, dino.width, dino.height);
        }

        // Draw obstacles at last position
        for (const obstacle of obstacles) {
          ctx.fillStyle = fgColor;
          ctx.fillRect(
            obstacle.x,
            canvas.height - obstacle.height - 10,
            obstacle.width,
            obstacle.height
          );
        }

        // Draw semi-transparent overlay for game over text
        ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw game over text
        ctx.fillStyle = fgColor;
        ctx.font = '24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 40);
        ctx.font = '18px monospace';
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 - 10);
        ctx.fillText(`High Score: ${highScore}`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.font = '14px monospace';
        ctx.fillText('Press SPACE or CLICK to restart', canvas.width / 2, canvas.height / 2 + 50);
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameStarted, gameOver, isDarkMode, highScore]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className={`border-2 rounded-lg cursor-pointer transition-all duration-300 ${
          isDarkMode
            ? 'border-neutral-700 bg-black'
            : 'border-gray-300 bg-white'
        }`}
      />
      <div
        className={`text-sm font-mono transition-colors duration-300 ${
          isDarkMode ? 'text-neutral-400' : 'text-gray-500'
        }`}
      >
        {highScore > 0 && `High Score: ${highScore} · `}
        Press SPACE or CLICK to {gameStarted ? 'jump' : 'start'}
        {gameStarted && !gameOver && ' · ESC to pause'}
      </div>
    </div>
  );
}
