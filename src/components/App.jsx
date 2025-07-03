import React from "react";
import Entry from "./Entry"
import Emojipedia from "../emojipedia"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl>
        {Emojipedia.map((emoji, index) => 
        <Entry />
        )}
        
    
      </dl>
      
    </div>
  );
}

export default App;
