import { createContext, useContext } from "react";

export const MediaPlayerContext = createContext();
export const MediaPlayerContextProvider = MediaPlayerContext.Provider;

export const PreloaderContext = createContext();
export const PreloaderContextProvider = PreloaderContext.Provider;
export const useContextPreloader = () => useContext(PreloaderContext);
