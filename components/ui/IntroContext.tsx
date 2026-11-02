"use client";

import { createContext, useContext } from "react";

export const IntroContext = createContext<{ ready: boolean }>({ ready: true });

export function useIntro() {
  return useContext(IntroContext);
}
