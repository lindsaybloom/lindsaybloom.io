import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import theme from "./theme"

export const breakpoints = deepMerge(theme, {
    global: {
      breakpoints: {
        xsmall: {
          value: 500,
        },
        small: {
          value: 900,
        },
        medium: undefined,
        middle: {
          value: 2000,
        },
      },
    },
  });