import { background, extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import { start } from 'repl'

const inter = Inter({ subsets: ['latin'] })

export const colors = {
  green: '#28FAC6',
  gray: '#F2F2F2',
  black: '#000000',
  white: '#FFFFFF',

  // Chakra UI colors
  brand: {
    50: '#f7fafc',
    100: '#edf2f7',
    200: '#e2e8f0',

    300: '#cbd5e0',
    400: '#a0aec0',
    500: '#718096',
    600: '#4a5568',
    700: '#2d3748',
    800: '#1a202c',
    900: '#171923',
  },

  // Chakra UI colors
  blue: {
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1a365d',
  },

  // Chakra UI colors

  red: {
    50: '#fff5f5',
    100: '#fed7d7',
    200: '#feb2b2',
    300: '#fc8181',
    400: '#f56565',
    500: '#e53e3e',
    600: '#c53030',

    700: '#9b2c2c',
    800: '#822727',
    900: '#63171b',
  },

  // Chakra UI colors
  orange: {
    50: '#fffaf0',
    100: '#feebc8',
    200: '#fbd38d',
    300: '#f6ad55',
    400: '#ed8936',
    500: '#dd6b20',
    600: '#c05621',
    700: '#9c4221',
    800: '#7b341e',
    900: '#652b19',
  },

  // Chakra UI colors
  yellow: {
    50: '#fffff0',
    100: '#fefcbf',
    200: '#faf089',
    300: '#f6e05e',
    400: '#ecc94b',
    500: '#d69e2e',
    600: '#b7791f',
    700: '#975a16',
    800: '#744210',
    900: '#5f370e',
  },

  // Chakra UI colors
  teal: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c5',
    400: '#38b2ac',

    500: '#319795',
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1d4044',
  },

  // Chakra UI colors
  cyan: {
    50: '#edfafa',
    100: '#d5f5f6',
    200: '#afecef',
    300: '#7edce2',
    400: '#16bdca',
    500: '#0694a2',
    600: '#047481',
    700: '#036672',
    800: '#05505c',
    900: '#014451',
  },

  // Chakra UI colors
  purple: {
    50: '#faf5ff',
    100: '#e9d8fd',
    200: '#d6bcfa',
    300: '#b794f4',
    400: '#9f7aea',
    500: '#805ad5',

    600: '#6b46c1',
    700: '#553c9a',
    800: '#44337a',
    900: '#322659',
  },
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}`
    : null
}

const foregroundRgb = '255,255,255'
const backgroundStartRgb = hexToRgb(colors.cyan[100])
const backgroundEndRgb = '255,255,255'
const backgroundGradient = `linear-gradient(180deg, rgba(${backgroundStartRgb}, 1) 0%, rgba(${backgroundEndRgb}, 1) 100%)`

const button = {
  Button: {
    baseStyle: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'regular',
      pt: 1,
    },
    variants: {
      solid: {
        bg: 'green',
        color: 'white',
        fontSize: 'lg',
        borderRadius: 10,
        minWidth: 'auto',
        px: '20px',
        _hover: {
          bg: 'gray.800',
          _disabled: {
            bg: 'gray.300',
          },
        },
        _active: {
          bg: 'gray.600',
        },
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'black',
        borderRadius: 0,
        fontSize: 'lg',
        color: 'black',
        textDecoration: 'none',
        px: '20px', //added to align to the design
        minWidth: 'auto',
      },
      ghost: {
        borderWidth: '0px',
        borderRadius: 0,
        fontSize: 'lg',
        color: 'gray',
        textDecoration: 'none',
        px: '20px', //added to align to the design
        minWidth: 'auto',
      },
      link: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: 'inherit',
        textDecoration: 'underline',
        whiteSpace: 'wrap',
        lineHeight: 'inherit',
        minWidth: 'auto',
      },
    },
  },
}

const heading = {
  Heading: {
    baseStyle: {
      fontFamily: inter.style.fontFamily,
      color: 'black',
    },
  },
}

const input = {
  Input: {
    variants: {
      custom: {
        field: {
          fontSize: '16px',
          border: '1px solid black',
          borderRadius: 0,
          _hover: {
            borderColor: 'green.400',
          },
          _focus: {
            borderColor: 'green.400',
            boxShadow: '0px 0px 0px 2px rgba(40, 250, 198, 0.5)',
          },
          _disabled: {
            opacity: 0.3,
          },
        },
      },
    },
  },
}

const textarea = {
  Textarea: {
    variants: {
      custom: {
        fontSize: '16px',
        border: '1px solid black',
        borderRadius: 0,
        _hover: {
          borderColor: 'green.400',
        },
        _focus: {
          borderColor: 'green.400',
          boxShadow: '0px 0px 0px 2px rgba(40, 250, 198, 0.5)',
        },
        _disabled: {
          opacity: 0.3,
        },
      },
    },
  },
}

const checkbox = {
  Checkbox: {
    variants: {
      custom: {
        control: {
          fontSize: '16px',
          border: '1px solid black',
          borderColor: 'black',
          borderRadius: 0,
          _hover: {
            borderColor: 'blue.500',
          },
          _focus: {
            borderColor: 'blue.500',
            boxShadow: '0px 0px 0px 2px #2819C630',
          },
          _disabled: {
            opacity: 0.3,
          },
        },
      },
    },
  },
}

const select = {
  Select: {
    variants: {
      custom: {
        field: {
          border: '1px solid black',
          borderRadius: 0,
          _hover: {
            borderColor: 'blue.500',
          },
          _focus: {
            borderColor: 'blue.500',
            boxShadow: '0px 0px 0px 2px #2819C630',
          },
          _disabled: {
            opacity: 0.3,
          },
        },
      },
    },
  },
}

const link = {
  Link: {
    baseStyle: {
      color: 'blue.500',
      textDecoration: 'underline',
    },
    variants: {
      unstyled: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'none',
        },
      },
    },
    defaultProps: {
      variant: '',
    },
  },
}

// TODO custom styling for disabled buttons/components, less opacity.
export const theme = extendTheme(
  {
    colors,
    fonts: {
      heading: inter.style.fontFamily,
      body: inter.style.fontFamily,
      note: inter.style.fontFamily,
    },
    fontSizes: {
      xs: '13px',
      sm: '14px',
      md: '15px',
      lg: '18px',
      xl: '22px',
      '2xl': '40px',
      '3xl': '60px',
      '4xl': '120px',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
    },
    components: {
      ...button,
      ...heading,
      ...input,
      ...select,
      ...textarea,
      ...checkbox,
      ...link,
      Text: {
        baseStyle: {
          fontFamily: inter.style.fontFamily,
          fontWeight: 'regular',
          color: 'gray.900',
        },
      },
    },
    breakpoints: {
      desktop: '820px',
      '2xl': '1536px',
    },
    sizes: {
      container: {
        xs: '420px',
        md: '592px',
        lg: '796px',
        xl: '1200px',
        xxl: '1440px',
      },
    },
    styles: {
      global: {
        body: {
          color: foregroundRgb,
          bg: backgroundGradient,
        },
      },
    },
  },
  baseTheme,
)
