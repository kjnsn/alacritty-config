type Token = {
  text: string;
  background: string;
};
/*
class Token {
  readonly light: string;
  readonly dark: string;

  // Derived properties.
  readonly text: string;
  readonly background: string;

  constructor(text: string, dark: string) {
    this.light = light;
    this.dark = dark;

    this.text = ` text-${light} dark:text-${dark} `;
    this.background = ` bg-${light} dark:bg-${dark} `;
  }
}*/

// Sticks to the "neutral" pallete mostly.
// Color roles are based on material 3: https://m3.material.io/styles/color/roles
interface Theme {
  [tokenName: string]: Token;
}
const theme: Theme = {
  // Primary
  primary: {
    text: " text-sky-800 dark:text-sky-300 ",
    background: " bg-sky-800 dark:bg-sky-300 ",
  },
  on_primary: {
    text: " text-neutral-50 dark:text-sky-900 ",
    background: " bg-neutral-50 dark:bg-sky-900 ",
  },
  primary_container: {
    text: " text-sky-200 dark:text-neutral-700 ",
    background: " ",
  },
  on_primary_container: {
    text: " text-sky-950 dark:text-neutral-200 ",
    background: " ",
  },

  // Surface
  surface: {
    text: " text-neutral-50 dark:text-neutral-900 ",
    background: " bg-neutral-50 dark:bg-neutral-900 ",
  },
  on_surface: {
    text: " text-neutral-900 dark:text-neutral-300 ",
    background: " ",
  },
  surface_container: {
    text: " text-neutral-100 dark:text-neutral-800 ",
    background: " bg-neutral-100 dark:bg-neutral-800 ",
  },
  on_surface_container: {
    text: " text-neutral-800 dark:text-neutral-100 ",
    background: " ",
  },
};

export default theme;
