module.exports = {
  theme: {
    fontFamily: {
      display: ["Caveat", "cursive"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#111111",
        light: "#242424",
        disabled: "#757575",
        danger: "#CC3040",
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  purge: {
    layers: ["utilities"],
    content: ["index.html"],
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
