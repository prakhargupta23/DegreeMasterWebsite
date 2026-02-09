import { useMemo } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }) => {
    const theme = useMemo(
        () => ({
            name: "Blue Wind",
            primary: "#2563EB",
            secondary: "#60A5FA",
            bgGlow: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.20) 0%, #0B1220 80%)",
            iconColor: "#2563EB",
            white: "#fff",
            black: "#000",
            navDrawerBg: "#0A0A1F",
            whiteHover: "#f2f2f2",
            surfaceLight: "#f9fafb",
            textDark: "#111",
            textDarkMuted: "#4b5563",
            textMuted: "#aaa",
            textMutedSoft: "#ccc",
            textMutedMid: "#b5b5b5",
            textDim: "#888",
            textSubtle: "#777",
            textReadable: "#ddd",
            textBody: "#e0e0e0",
            textSoft: "#cbd5f5",
            textDetail: "#d7dbea",
            textFooter: "#d1d5db",
            textMeta: "#9aa4c7",
            textLight: "#e5e7eb",
            borderLight: "#e5e7eb",
            overlayWhite02: "rgba(255,255,255,0.02)",
            overlayWhite03: "rgba(255,255,255,0.03)",
            overlayWhite04: "rgba(255,255,255,0.04)",
            overlayWhite05: "rgba(255,255,255,0.05)",
            overlayWhite06: "rgba(255,255,255,0.06)",
            overlayWhite08: "rgba(255,255,255,0.08)",
            overlayWhite10: "rgba(255,255,255,0.1)",
            overlayWhite12: "rgba(255,255,255,0.12)",
            overlayWhite15: "rgba(255,255,255,0.15)",
            overlayWhite20: "rgba(255,255,255,0.2)",
            overlayWhite30: "rgba(255,255,255,0.3)",
            overlayBlack10: "rgba(0,0,0,0.1)",
            overlayBlack80: "rgba(0,0,0,0.8)",
            blackSolid: "rgba(0,0,0,1)",
            navBarSolid: "rgba(10, 10, 31, 0.9)",
            flowStreamBackgroundImage: `
              linear-gradient(120deg, rgba(96,165,250,0.28) 0%, rgba(96,165,250,0) 40%),
              linear-gradient(20deg, rgba(37,99,235,0.26) 0%, rgba(37,99,235,0) 45%),
              linear-gradient(135deg, rgba(139,92,246,0.22) 0%, rgba(139,92,246,0) 42%),
              linear-gradient(110deg, rgba(14,165,233,0.2) 0%, rgba(14,165,233,0) 40%),
              linear-gradient(125deg, rgba(167,139,250,0.2) 0%, rgba(167,139,250,0) 38%),
              linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%)
            `
        }),
        []
    );

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
