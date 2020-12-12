module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./public/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      overflow: ['hover'],
      width: ['hover'],
    },
  },
  plugins: [],
}
