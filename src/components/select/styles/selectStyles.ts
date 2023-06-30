import { GroupBase, StylesConfig } from 'react-select'

/**
 * Custom styles for react-select component
 */
const selectStyles: StylesConfig<ClassProps, true, GroupBase<ClassProps>> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? '#E8E8E8'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: '#E8E8E8',
      },
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#E8E8E8',
      },
    }
  },
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    ':hover': {
      backgroundColor: data.color,
      color: '#555555',
    },
  }),
}

export default selectStyles
