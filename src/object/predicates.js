import isArray from 'lodash/isArray'

export default {
  'filled?': {
    check: (validatable) => !!validatable,
  },
  'int?': {
    check: (validatable) => /^\d+$/.test(validatable),
  },
  'date?': {
    check: (validatable) => /^\d{4}-\d{2}-\d{2}$/.test(validatable),
  },
  'max_size?': {
    check: (validatable, option) => validatable.length < option,
    translationOptions: option => ({ num: option }),
  },
  'gt?': {
    check: (validatable, option) => validatable > option,
    translationOptions: option => ({ num: option }),
  },
  'matches?': {
    check: (validatable, option) => validatable == option,
    translationOptions: option => ({ num: option }),
  },
  'size?': {
    check: (validatable, range) =>
      validatable.length > range[0] && validatable.length < range[1],
    argType: (arg) => isArray(arg) ? 'range' : 'default',
    translationOptions: (option) => ({
      size_left: option[0], size_right: option[1]
    }),
  },
}
