import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LazyLenis = dynamic(() =>
  import("lenis/react").then((mod) => mod.ReactLenis)
);

const Index = ({ children }) => {
  return (
    <LazyLenis root>
      <Navbar />
      {children}
      <Footer />
    </LazyLenis>
  );
};

export default React.memo(Index);
