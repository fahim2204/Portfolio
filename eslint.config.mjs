import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      ".next/**",
      "assets/**",
      "node_modules/**",
      "public/**",
      "index.php",
      "mail.php",
    ],
  },
  ...nextVitals,
];

export default config;
