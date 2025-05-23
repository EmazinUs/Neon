"use client";
import React from "react";
import styles from "./card.module.css";

const card = () => {
  return (
    <div className={styles.card}>
      <h1 className="p-2 m-2 bg-red-400 text-amber-300 hover:bg-amber-500">
        card
      </h1>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("hiii");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default card;
