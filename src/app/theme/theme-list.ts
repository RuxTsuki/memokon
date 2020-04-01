export interface ITheme {
  name: string;
  propertys?: {};
}

export const lightTheme: ITheme = {
  name: 'light',
  propertys: {
    "--spec-wrapper-primary": '#fff',
    "--spec-wrapper-secondary": '#e9eaec',
    "--spec-wrapper-tertiary": '#e9eaec',

    "--spec-text-primary": '#030303',
    "--spec-text-secondary": '#030303',
    "--spec-text-footer": '#e9eaec',
    "--spec-text-tertiary": '#606060',

    "--spec-icon-primary": '#606060'

  }
}

export const darkTheme: ITheme = {
  name: 'dark',
  propertys: {
    "--spec-wrapper-primary": '#303237',
    "--spec-wrapper-secondary": '#1c1e21',
    "--spec-wrapper-tertiary": '#e9eaec',

    "--spec-text-primary": '#fff',
    "--spec-text-secondary": '#a9abb3',
    "--spec-text-footer": '#a9abb3',
    "--spec-text-tertiary": '#a7a9b1',

    "--spec-icon-primary": '#a9abb3'
  }
}
