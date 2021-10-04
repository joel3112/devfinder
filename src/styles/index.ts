import { Theme } from '@emotion/react';

export const bps = {
  mobile: '@media screen and (max-width: 576px)',
  tablet: '@media screen and (min-width: 768px)',
};

export const theme: Theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    heading: 'var(--color-title)',
    description: 'var(--color-description)',
    white: 'var(--color-white)',
  },
  bgColors: {
    primary: 'var(--background-primary)',
    secondary: 'var(--background-secondary)',
    light: 'var(--color-white)',
  },
  fontSizes: {
    xxsmall: '13px',
    xsmall: '14px',
    small: '16px',
    medium: '18px',
    large: '26px',
  },
  lineHeight: {
    xxsmall: '14.06px',
    xsmall: '17.07px',
    small: '23.7px',
    medium: '25px',
    large: '38.51px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    semibold: '500',
    bold: '700',
  },
  borderRadius: {
    small: '4px',
    medium: '10px',
    large: '15px',
  },
  boxShadows: {
    primary: '0px 16px 30px -10px #4660BB33',
  },
};
