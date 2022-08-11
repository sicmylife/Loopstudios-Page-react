import React from "react";
import { useState } from "react";
import data from "../data-desktop";

const CreationsDesktop = () => {
  const [cards, setcards] = useState(data);
  return (
    <section className="creations-desktop">
      <div className="title">
        <h2>Our Creation</h2>
        <div className="btn-container">
          <button className="btn">See all</button>
        </div>
      </div>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <img src={image} alt="creation card" />
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CreationsDesktop;
