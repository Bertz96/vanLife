import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vansHome: "url('src/assets/images/homeBg.png')",
      },
      backgroundColor: {
        simple: "#E17654",
        rugged: "#115E59",
        luxury: "#161616",
        orangeButton:'#FF8C38'
      },
      textColor: {
        labels: "#FFEAD0",
      },
    },
  },
  plugins: [],
} satisfies Config

