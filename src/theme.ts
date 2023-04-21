import {extendTheme} from 'native-base';

const Button = {
  baseStyle: {
    borderRadius: 16,
    height: '60px',
    textAlign: 'center',
    _text: {
      fontSize: 16,
    },
  },
  variants: {
    solid: {
      backgroundColor: 'primary.500',
      shadowColor: '#EB3F1D',
      _pressed: {
        backgroundColor: 'primary.600',
      },
      _ios: {
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5,
        shadowRadius: 40,
      },
      _android: {
        elevation: 10,
      },
    },
    outline: {
      borderColor: 'primary.500',
      _pressed: {
        borderWidth: 3,
        bgColor: 'transparent',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};

const Input = {
  baseStyle: {
    borderRadius: 10,
    borderWidth: 1,
    height: '60px',
    fontWeight: 500,
    borderColor: 'gray.500',
    _focus: {
      bgColor: 'transparent',
      borderWidth: 2,
      borderColor: 'primary.500',
    },
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      50: '#FCE9E8',
      100: '#FAD3D0',
      200: '#F5A7A0',
      300: '#F17B6F',
      400: '#EB3F1D',
      500: '#FC3F1D',
      600: '#C53317',
      700: '#9F2A13',
      800: '#781F0F',
      900: '#5E1A0C',
    },
  },
  components: {
    Button,
    Input,
  },
});

export default theme;
