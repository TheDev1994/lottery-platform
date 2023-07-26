import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Line from "./Features";
import About from "./About";
import Join from "./Join";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Team from "./Team";
import classes from "./Hero.css";

function Home() {

  return (
        <div>
            <Hero />
        </div>
    );
};

export default Home;
