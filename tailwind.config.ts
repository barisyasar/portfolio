import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "766px",
      lg: "966px",
      xl: "966px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "716px",
        lg: "916px",
        xl: "916px",
      },
      padding: "0.5rem",
      center: true,
    },
    extend: {
      size: {
        "128": "30rem",
      },
    },
  },
};
export default config;
