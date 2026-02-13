import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    ".flowbite-react\\class-list.json",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'patcolor': '#27aae1', // Add a single custom color
      
      },
    },
   
      fontFamily: {
        'akshar': ['Akshar', 'sans-serif'],
    
      }
    
  },
  plugins: [
     require("flowbite/plugin"),
        plugin(function ({addVariant}) {
        addVariant('progress-unfilled', ['&::-webkit-progress-bar', '&']);
        addVariant('progress-filled', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&']);
       
    }),
     flowbiteReact
  ],
};
export default config;