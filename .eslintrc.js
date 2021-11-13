module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  "prettier/prettier": ["error", {

    "endOfLine":"auto"

  }],
};
