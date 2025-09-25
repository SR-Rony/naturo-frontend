import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        shakePulse: {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "25%": { transform: "translateX(-4px) scale(1.05)" },
          "50%": { transform: "translateX(4px) scale(1)" },
          "75%": { transform: "translateX(-2px) scale(1.05)" },
        },
      },
      animation: {
        shakePulse: "shakePulse 2s infinite",
      },
    },
  },
};

export default config;
