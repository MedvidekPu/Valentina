import React, { useState } from "react";

function Character_martin() {
  const [character, setCharacter] = useState("none");

  let characterDescription;
  if (character === "fabulous") {
    characterDescription = (
      <div>
        <h3>You chose: Fabulous Martin 😎</h3>
        <p>
          Too sexy! Fabulous Martin will always be elegant, gentle and will take
          you to fancy places. The best matching mood for fabulous Martin is
          cute Doğa. Everybody is jealous and fancies them.
        </p>
      </div>
    );
  } else if (character === "fights") {
    characterDescription = (
      <div>
        <h3>You chose: Warrior Martin 😠⚔</h3>
        <p>
          Warrior Martin is always here to protect you. He is strong, prepared
          and ready to fight anyone who looks at you in a bad way. With
          aggressive Doğa, the combination could be dangerous to their
          environment.
        </p>
      </div>
    );
  } else if (character === "hungry") {
    characterDescription = (
      <div>
        <h3>You chose: Hungry Martin 🥶</h3>
        <p>
          Hungry Martin just wants to eat and chill, maybe watch a movie. He
          will provide you with snacks, drinks and comfy couch. Best match for
          hungry Martin is obviously focused Doğa.
        </p>
      </div>
    );
  } else if (character === "tour") {
    characterDescription = (
      <div>
        <h3>You chose: Tour Guide Martin 🌏</h3>
        <p>
          Tour Guide Martin has seen most of the world, he knows stuff just
          about anything! His weak side is history, politics and geography,
          though. The best match for tour guide Martin is crazy Doğa, boredom is
          not for them.
        </p>
      </div>
    );
  }

  return (
    <div>
      <audio
        autoPlay
        src="assets/eye-of-the-tiger-intro-made-with-Voicemod.mp3"
        style={{ display: "none" }}
      />
      <div className="moodButtonGrid">
        <div className="moodButton" onClick={() => setCharacter("fabulous")}>
          <img src="assets/martin_fabulous.png" alt="fabulous_martin" />
          <p className="image-text">Fabulous Martin</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("fights")}>
          <img src="assets/martin_fights.png" alt="warrior_martin" />
          <p className="image-text">Warrior Martin</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("hungry")}>
          <img src="assets/martin_hungry.png" alt="hungry_martin" />
          <p className="image-text">Hungry Martin</p>
        </div>
        <div className="moodButton" onClick={() => setCharacter("tour")}>
          <img src="assets/martin_tour.png" alt="tour_guide_martin" />
          <p className="image-text">Tour Guide Martin</p>
        </div>
      </div>
      <div className="characterDescription">{characterDescription}</div>
    </div>
  );
}

export default Character_martin;
