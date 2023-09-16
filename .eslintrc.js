module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugin: ["tailwindcss"],
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
    next: {
      rootDir: true,
    },
  },
}
