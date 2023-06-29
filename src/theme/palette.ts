/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export const colors= {
  paper: '#ffffff',
  primary: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1"
  },
  secondary: {
    50: "#ede7f6",
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92"
  },
  error: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
  },
  warning: {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107",
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00"
  },
  success: {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  grey: {
    50: '#F8FAFC',
    100: '#EEF2F6',
    200: '#E3E8EF',
    300: '#CDD5DF',
    400: '#bdbdbd',
    500: '#697586',
    600: '#4B5565',
    700: '#364152',
    900: '#121926',
  },
  primaryLight: '#eef2f6',
  primary200: '#90caf9',
  primaryMain: '#2196f3',
  primaryDark: '#1e88e5',
  primary800: '#1565c0',
  secondaryLight: '#ede7f6',
  secondary200: '#b39ddb',
  secondaryMain: '#673ab7',
  secondaryDark: '#5e35b1',
  secondary800: '#4527a0',
  successLight: '#b9f6ca',
  success200: '#69f0ae',
  successMain: '#00e676',
  successDark: '#00c853',
  errorLight: '#ffebee',
  errorMain: '#f44336',
  errorDark: '#c62828',
  orangeLight: '#fbe9e7',
  orangeMain: '#ffab91',
  orangeDark: '#d84315',
  warningLight: '#fff8e1',
  warningMain: '#ffe57f',
  warningDark: '#ffc107',

  darkPaper: '#111936',
  darkBackground: '#1a223f',
  darkLevel1: '#29314f',
  darkLevel2: '#212946',
  darkTextTitle: '#d7dcec',
  darkTextPrimary: '#bdc8f0',
  darkTextSecondary: '#8492c4',
  darkPrimaryLight: '#eef2f6',
  darkPrimaryMain: '#2196f3',
  darkPrimaryDark: '#1e88e5',
  darkPrimary200: '#90caf9',
  darkPrimary800: '#1565c0',
  darkSecondaryLight: '#d1c4e9',
  darkSecondaryMain: '#7c4dff',
  darkSecondaryDark: '#651fff',
  darkSecondary200: '#b39ddb',
  darkSecondary800: '#6200ea',
  // textLegibility: {
  //   darkText: {
  //     highEmphasis: '#000000DF',
  //     mediumEmphasis: '#0000009A', 
  //     lowEmphasis: '#00000061', 
  //   },
  //   lightText: {
  //     highEmphasis: '#FFFFFFFF',
  //     mediumEmphasis: '#FFFFFFBC',
  //     lowEmphasis: '#FFFFFF61'
  //   },
  // },
};


export  const paletteOptions = {
    // mode:  'light',
    common: {
      black: colors.darkPaper
    },
    primary: {
      light: colors.primary[50],
      main: colors.primary[500],
      dark: colors.primary[600],
      ...colors.primary
    },
    secondary: {
      light: colors.secondary[50],
      main: colors.secondary[500],
      dark: colors.secondary[600],
      ...colors.secondary
    },
    error: {
      light: colors.error[50],
      main: colors.error[500],
      dark: colors.error[600],
      ...colors.error
    },
    orange: {
      light: colors.orangeLight,
      main: colors.orangeMain,
      dark: colors.orangeDark,
    },
    warning: {
      light: colors.warning[50],
      main: colors.warning[500],
      dark: colors.warning[600],
      ...colors.warning
    },
    success: {
      light: colors.success[50],
      main: colors.success[500],
      dark: colors.success[600],
      ...colors.success
    },
    grey: {
      light: colors.grey[50], 
      main: colors.grey[500],
      dark: colors.grey[600],
      ...colors.grey
    },
    dark: {
      light: colors.darkTextPrimary,
      main: colors.darkLevel1,
      dark: colors.darkLevel2,
      800: colors.darkBackground,
      900: colors.darkPaper
    },
    text: {
      primary: colors.darkTextPrimary,
      secondary: colors.darkTextSecondary,
      hint: colors.grey[100]
    },
    background: {
      paper: colors.paper,
    }
  };
