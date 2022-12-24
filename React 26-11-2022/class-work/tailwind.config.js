/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "*/*"],
  theme: {
    extend: {
      backgroundImage: {
        // abc: "url('/images/abc.jpg')",
        "hero-pattern": "url('/images/abc.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
