import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-form":
          "url('https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/pnbrawwuijrotir7e1ab')",
        "skyblue-pattern":
          "url(https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/f0hjhe7qaqbzi8sdt7fb)",
        "blue-pattern":
          "url(https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/waf6frk10hrkb8q1hsdw)",
        "green-pattern":
          "url(https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/auyg1zs3aqbcxssktjxq)",
        "yellow-pattern":
          "url(https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/nt9zhgxb9rvvlmwfpgxy)",
        "purple-pattern":
          "url(https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/q4aqg3nzqpwdy0herdli)",
      },
      colors: {
        primary: '#00abe1',
        secondary: '#127398',
      }
    },
  },
  plugins: [],
};
export default config;
