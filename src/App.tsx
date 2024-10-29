import React, { useState } from "react";
import Container from "./Components/Container";
import Controls from "./Components/Controls";

const App: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [gap, setGap] = useState(5);
  const [items, setItems] = useState(["A", "B", "C", "D"]); // Initial items

  const resetContainer = () => {
    setFlexDirection("row");
    setFlexWrap("nowrap");
    setJustifyContent("flex-start");
    setAlignItems("stretch");
    setAlignContent("stretch");
    setGap(5);
    setItems(["A", "B", "C", "D"]); // Reset items to initial state
  };

  const addItems = () => {
    const newItem = String.fromCharCode(65 + items.length); // Generates letters (E, F, G, etc.)
    setItems([...items, newItem]); // Add new item to the list
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Interactive Guide to Flexbox</h1>
      <Container
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        gap={gap}
        items={items} // Pass items to Container
      />
      <Controls
        flexDirection={flexDirection}
        setFlexDirection={setFlexDirection}
        flexWrap={flexWrap}
        setFlexWrap={setFlexWrap}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
        alignContent={alignContent}
        setAlignContent={setAlignContent}
        gap={gap}
        setGap={setGap}
        resetContainer={resetContainer}
        addItems={addItems}
      />
    </div>
  );
};

export default App;
