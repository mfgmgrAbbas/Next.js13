"use client";

import { useEffect, useRef, useState } from "react";
import CheckWordsLength from "./check-words-length";
import CounterApp from "./counter-app";
import CounterAppAdvance from "./counter-app-advance";
import Todo from "./todo";

export default function Home() {
  return (
    <div>
      <Todo />
    </div>
  );
}
