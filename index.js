'use strict'
import noUselessArrowBlock from './rules/no-useless-arrow-block.js'

export default {
  rules: {
    'no-useless-arrow-block': noUselessArrowBlock,
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
