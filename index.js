'use strict'

module.exports = {
  rules: {
    'no-useless-arrow-block': require('./rules/no-useless-arrow-block'),
  },
  configs: {
    recommended: {
      plugins: ['arrowsmith'],
      rules: {
        'arrowsmith/no-useless-arrow-block': 'error',
      },
    },
  },
}
