import "./styles.css";
import ContentContainer from "./ContentContainer";
import { ContentContainerProvider } from "./Contexts";
import React, { memo } from "react";

function App() {
  console.log("App Rendering");
  return (
    <div className="App">
      <ContentContainerProvider>
        <ContentContainer />
      </ContentContainerProvider>
    </div>
  );
}

export default App;
