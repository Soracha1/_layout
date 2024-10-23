import React, { useState, useEffect, useRef } from 'react';
import './Animation.css';

const Animation = () => {
  // Constants
  const fieldWidth = 700;
  const fieldHeight = 400;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;
  const buttons = ["Nobg", "basketball", "football", "voleyball", "human", "cartoon", "logo"];

  // State variables
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(300);
  const [y, setY] = useState(150);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [ballType, setBallType] = useState("Nobg");

  // Refs for DOM elements
  const ballRef = useRef(null);
  const fieldRef = useRef(null);

  // Handle the movement and animation of the ball
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 25);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [running, x, y, goRight, goDown]);

  // Ball movement logic
  const calculate = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;

    if (newGoRight) {
      newX += vx;
      if (newX >= maxLeft) newGoRight = false;
    } else {
      newX -= vx;
      if (newX <= 0) newGoRight = true;
    }

    if (newGoDown) {
      newY += vy;
      if (newY >= maxTop) newGoDown = false;
    } else {
      newY -= vy;
      if (newY <= 0) newGoDown = true;
    }

    setX(newX);
    setY(newY);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
  };

  // Toggle running state for the ball animation
  const handleRunClick = () => {
    setRunning(!running);
  };

  // Change ball background and appearance
  const changeBall = (type, color, image, size) => {
    if (ballRef.current) {
      ballRef.current.style.backgroundColor = color;
      ballRef.current.style.backgroundImage = `url(${image})`;
      ballRef.current.style.backgroundSize = size;
      ballRef.current.style.backgroundPosition = "center";
      setBallType(type);
    }
  };

  // Update button appearance when selected
  const updateButton = (selected) => {
    buttons.forEach((button) => {
      const btnElement = document.getElementById(button);
      if (btnElement) {
        if (button === selected) {
          btnElement.classList.remove("btn-outline-primary");
          btnElement.classList.add("btn-primary");
        } else {
          btnElement.classList.remove("btn-primary");
          btnElement.classList.add("btn-outline-primary");
        }
      }
    });
  };

  // Re-render ball position when x or y changes
  useEffect(() => {
    if (ballRef.current) {
      ballRef.current.style.left = `${x}px`;
      ballRef.current.style.top = `${y}px`;
    }
  }, [x, y]);

  // Initialize the field and ball dimensions
  const initial = () => {
    if (fieldRef.current && ballRef.current) {
      fieldRef.current.style.height = `${fieldHeight}px`;
      fieldRef.current.style.width = `${fieldWidth}px`;
      ballRef.current.style.height = `${diameter}px`;
      ballRef.current.style.width = `${diameter}px`;
    }
  };

  // Call initial setup on component mount
  useEffect(() => {
    initial();
  }, []);

  return (
    <div id="container">
      {/* Playing field and ball */}
      <div ref={fieldRef} id="field" className="field">
        <div ref={ballRef} id="ball" className="ball"></div>
      </div>

      {/* Control panel */}
      <div id="control">
        <button
          id="run"
          className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
          onClick={handleRunClick}
          style={{ marginRight: '10px' }}
        >
          {running ? (
            <span className="bi bi-pause">&nbsp;Pause</span>
          ) : (
            <span className="bi bi-play">&nbsp;Run</span>
          )}
        </button>

        {/* Ball background change buttons */}
        {buttons.map((button) => (
          <button
            key={button}
            id={button}
            className="btn btn-outline-primary btn-animation"
            onClick={() => {
              const ballConfigs = {
                Nobg: ["white", "", "100%"],
                basketball: ["white", "./public/basketball.png", "115%"],
                football: ["white", "./public/football.png", "105%"],
                voleyball: ["white", "./public/voleyball.png", "108%"],
                human: ["white", "./public/human.jpg", "105%"],
                cartoon: ["white", "./public/cartoon.jfif", "105%"],
                logo: ["white", "./public/logo.png", "100%"]
              };
              changeBall(button, ...ballConfigs[button]);
              updateButton(button);
            }}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Animation;
