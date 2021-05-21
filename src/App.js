import React from "react"
import { Container } from "./layout/Container"
import { Content } from "./layout/Content";
import { Widgets } from "./layout/Widgets"
import { Sidebar } from "./layout/Sidebar"

function App() {
  return (
    <div className="App">
      <Container >
        <Sidebar />
        <Content />
        <Widgets />
      </Container>
    </div>
  );
}

export default App;