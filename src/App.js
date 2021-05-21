import React from "react"
import { Container } from "./layout/Container"
import { Content } from "./layout/Content";
import { Feedlist } from "./layout/Feedlist"
import { Sidebar } from "./layout/Sidebar"

function App() {
  return (
    <div className="App">
      <Container >
        <Sidebar />
        <Content />
        <Feedlist />
      </Container>
    </div>
  );
}

export default App;