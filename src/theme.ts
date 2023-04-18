import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#FCE9E8',
      100: '#FAD3D0',
      200: '#F5A7A0',
      300: '#F17B6F',
      400: '#ED554B',
      500: '#EB3F1D',
      600: '#C53317',
      700: '#9F2A13',
      800: '#781F0F',
      900: '#5E1A0C',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 16,
        height: '60px',
        textAlign: 'center',
      },
      variants: {
        solid: {
          backgroundColor: 'primary.500',
          _pressed: {
            backgroundColor: 'primary.600',
          },
          _ios: {
            shadowColor: 'primary.500',
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.5,
            shadowRadius: 40,
          },
          _android: {
            elevation: 10,
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
  },
});

export default theme;
