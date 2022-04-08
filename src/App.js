import React from "react";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";

import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
