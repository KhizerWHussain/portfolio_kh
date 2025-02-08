"use client";
import { ParallaxProvider } from "react-scroll-parallax";

export function Parallax_Provider({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider scrollAxis="vertical" isDisabled={false}>
      {children}
    </ParallaxProvider>
  );
}
