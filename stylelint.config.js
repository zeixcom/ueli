module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['**/_normalize.scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-empty-line-before': null,
    'length-zero-no-unit': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
  },
};
