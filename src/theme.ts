class Token {
  readonly light: string;
  readonly dark: string;

  // Derived properties.
  readonly text: string;
  readonly background: string;

  constructor(light: string, dark: string) {
    this.light = light;
    this.dark = dark;

    this.text = ` text-${light} dark:text-${dark} `;
    this.background = ` bg-${light} dark:bg-${dark} `;
  }
}

// Sticks to the "neutral" pallete mostly.
// Color roles are based on material 3: https://m3.material.io/styles/color/roles
export default {
  // Primary
  primary: new Token("sky-800", "sky-300"),
  on_primary: new Token("neutral-50", "neutral-500"),
  primary_container: new Token("sky-200", "neutral-700"),
  on_primary_container: new Token("sky-950", "neutral-200"),

  // Surface
  surface: new Token("neutral-50", "neutral-900"),
  on_surface: new Token("neutral-900", "neutral-300"),
  surface_container: new Token("neutral-100", "neutral-800"),
  on_surface_container: new Token("neutral-800", "neutral-100"),
};
