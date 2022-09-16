import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Translate from "./Translate";
import Route from "./route";
import Header from "./Header";

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "A shade of Blue", value: "blue" },
];
const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS framwork",
  },
  {
    title: "Why use React?",
    content: "React is favorite libary among engineers",
  },
  {
    title: "How do use React?",
    content: "You user React by creating components",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <br />
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>

      <Route path={"/list"}>
        <Search />
      </Route>

      <Route path={"/translate"}>
        <Translate />
      </Route>

      <Route path={"/dropdown"}>
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;
