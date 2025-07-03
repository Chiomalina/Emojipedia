import React from "react";
import Entry from "./Entry"
import Emojipedia from "../emojipedia"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

        <dl className="dictionary">
        {Emojipedia.map((emojiTerm, index) => 
        <Entry 
          key = {emojiTerm.id}
          emoji = {emojiTerm.emoji}
          name = {emojiTerm.name}
          meaning = {emojiTerm.meaning}
        />
        )}
           
      </dl>
      
    </div>
  );
}

export default App;
