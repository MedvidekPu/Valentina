import React, { useState } from "react";

function Character_doga() {
  const [character, setCharacter] = useState("none");

  let characterDescription;
  if (character === "cute") {
    characterDescription = (
      <div>
        <h3>You chose: Cute Doğa 🥺👉👈</h3>
        <p>
          Aww, the adorable side of Doğa! When she is feeling cute, her
          infectious smile and charm can brighten even the gloomiest of days.
          Get ready for cuddles and giggles as she melts hearts with her
          cuteness.
        </p>
      </div>
    );
  } else if (character === "aggressive") {
    characterDescription = (
      <div>
        <h3>You chose: Aggressive Doğa 😡</h3>
        <p>
          When Doğa is feeling aggressive, watch out! She is ready to conquer
          anything in her path. Everybody is afraid of aggressive Doğa, as she
          just does not fuck around. Hard to tame, burning like a flame.
        </p>
      </div>
    );
  } else if (character === "focused") {
    characterDescription = (
      <div>
        <h3>You chose: Focused Doğa 🤓</h3>
        <p>
          When Doğa is focused, nothing can distract her from her goals. With
          laser-like precision, she dives deep into her tasks, emerging with
          remarkable achievements that leave everyone in awe of her brilliance
          and dedication.
        </p>
      </div>
    );
  } else if (character === "crazy") {
    characterDescription = (
      <div>
        <h3>You chose: Crazy Doğa 🤪</h3>
        <p>
          Brace yourself for an adventure when Doğa is feeling a bit crazy! With
          endless energy and an adventurous spirit, she is always up to do
          something crazy crazy. She will keep you on your toes and leave you
          laughing all along the way.
        </p>
      </div>
    );
  }

  return (
    <div>
      <audio
        autoPlay
        src="assets/choose-character-made-with-Voicemod.mp3"
        style={{ display: "none" }}
      />
      <div className="moodButtonGrid">
        <div className="moodButton" onClick={() => setCharacter("cute")}>
          <img src="assets/doga_cute.png" alt="cute_doga" />
          <p className="image-text">Feeling Cute Doğa</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("focused")}>
          <img src="assets/doga_focused.png" alt="focused_doga" />
          <p className="image-text">Focused Doğa</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("aggressive")}>
          <img src="assets/doga_aggressive.png" alt="aggressive_doga" />
          <p className="image-text">Aggressive Doğa</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("crazy")}>
          <img src="assets/doga_crazy.png" alt="crazy_doga" />
          <p className="image-text">Crazy Doğa</p>
        </div>
      </div>
      <div className="characterDescription">{characterDescription}</div>
    </div>
  );
}

export default Character_doga;
