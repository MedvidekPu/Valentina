import React, { useState } from "react";
import "./styles.css";
import NoButton from "./components/NoButton";
import Character_doga from "./components/Character_Doga";
import Button from "react-bootstrap/Button";
import Character_martin from "./components/Character_Martin";

function App() {
  const [phaseCount, setPhaseCount] = useState(0);

  let content;
  if (phaseCount === 0) {
    content = (
      <div>
        <audio
          autoPlay
          src="assets/romantic-noises-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <h1>Hey baby,</h1>
        <h2>will you be my Valentine? 💘</h2>
        <img
          src="https://media1.tenor.com/m/uDCZuQvYVagAAAAC/beef-beefbear.gif"
          alt="will-ya"
        />
        <div className="mb-2">
          <Button
            variant="primary"
            size="lg"
            className="btn1"
            onClick={() => setPhaseCount(1)}
          >
            Yes!
          </Button>
          <NoButton />
        </div>
      </div>
    );
  } else if (phaseCount === 1) {
    content = (
      <div>
        <audio
          autoPlay
          src="assets/last-friday-night-6-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <img
          src="https://media.tenor.com/KM1VySAHeToAAAAi/cheriuzzina.gif"
          alt="chill"
        />
        <h2>Yay! Then it is time to choose your Valentine characters! 🥳</h2>
        <h3>Are you ready?</h3>
        <div className="mb-2">
          <Button
            variant="primary"
            size="lg"
            className="btn1"
            onClick={() => setPhaseCount(2)}
          >
            Yes!
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 2) {
    content = (
      <div>
        <h1>🤔</h1>
        <h2>Choose your Valentine character!</h2>
        <Character_doga />
        <div className="next-phase">
          <Button variant="primary" size="lg" onClick={() => setPhaseCount(3)}>
            Next
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 3) {
    content = (
      <div>
        <h1>😍</h1>
        <h2>Choose your Valentine!</h2>
        <Character_martin />
        <div className="next-phase">
          <Button variant="primary" size="lg" onClick={() => setPhaseCount(4)}>
            End
          </Button>
        </div>
      </div>
    );
  } else if (phaseCount === 4) {
    content = (
      <div>
        <audio
          autoPlay
          src="assets/kiss-sound-effect-made-with-Voicemod.mp3"
          style={{ display: "none" }}
        />
        <h2>
          Please let me know if you would like to watch Tom and Jerry or
          something on 14 Feb :-)
        </h2>
        <img src="https://media1.tenor.com/m/o7gSaU0fRzwAAAAC/kiss-cat.gif" />
      </div>
    );
  }

  return (
    <>
      <div className="valentine-container">{content}</div>
    </>
  );
}

export default App;
