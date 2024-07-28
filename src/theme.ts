class Token {
  readonly name: string;
  readonly light: string;
  readonly dark: string;

  // Derived properties.
  readonly text: string;
  readonly background: string;

  constructor(name: string, light: string, dark: string) {
    this.name = name;
    this.light = light;
    this.dark = dark;

    this.text = ` text-${light} dark:text-${dark} `;
    this.background = ` bg-${light} dark:bg-${dark} `;
  }
}

// Sticks to the "neutral" pallete mostly.
// Color roles are based on material 3: https://m3.material.io/styles/color/roles
export default {
  primary: new Token("primary", "sky-800", "sky-300"), // " bg-sky-800 dark:bg-sky-300 ",
  on_primary: new Token("on_primary", "neutral-50", "neutral-500"),
  text_on_primary: " text-neutral-50 dark:text-neutral-900 ",
  primary_container: new Token("primary_container", "sky-200", "neutral-700"), // " bg-sky-200 dark:bg-neutral-700 ",
  text_on_primary_container: " text-sky-950 dark:text-neutral-200 ",

  // Surface
  surface: new Token("surface", "neutral-50", "neutral-900"), //  " bg-neutral-50 dark:bg-neutral-900 ",
  surface_container: " bg-neutral-100 dark:bg-neutral-800 ",
  text_on_surface: " text-neutral-900 dark:text-neutral-300 ",
  text_on_surface_container: " text-neutral-800 dark:text-neutral-100 ",
};
