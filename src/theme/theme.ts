import { extendTheme } from '@chakra-ui/react'
import components from './components/index'

const colors = {
  primary: {
    lighter: '#e6f7ff',
    100: '#bae7ff',
    200: '#91d5ff',
    light: '#69c0ff',
    400: '#40a9ff',
    main: '#1890ff',
    dark: '#096dd9',
    700: '#0050b3',
    darker: '#003a8c',
    900: '#002766',
  },
  secondary: {
    lighter: '#fafafa',
    100: '#f5f5f5',
    200: '#f0f0f0',
    light: '#d9d9d9',
    400: '#bfbfbf',
    main: '#8c8c8c',
    dark: '#595959',
    700: '#262626',
    800: '#141414',
    darker: '#000000',
    A100: '#ffffff',
    A200: '#434343',
    A300: '#1f1f1f',
  },
  success: {
    lighter: '#f6ffed',
    light: '#95de64',
    main: '#52c41a',
    dark: '#237804',
    darker: '#092b00',
  },
  error: {
    lighter: '#fff1f0',
    light: '#ff7875',
    main: '#f5222d',
    dark: '#a8071a',
    darker: '#5c0011',
  },
  warning: {
    lighter: '#fffbe6',
    light: '#ffd666',
    main: '#faad14',
    dark: '#ad6800',
    darker: '#613400',
  },
}

export const theme = extendTheme({ colors, components })
