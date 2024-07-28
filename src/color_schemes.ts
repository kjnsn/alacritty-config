export type Pallete = {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
};

export type ColorScheme = {
  name: string;
  colors: {
    primary: {
      foreground: string;
      background: string;
      dim_foreground?: string;
      bright_foreground?: string;
    };
    cursor?: {
      text: string;
      cursor: string;
    };
    vi_mode_cursor?: {
      text: string;
      cursor: string;
    };
    hints?: {
      start?: {
        foreground: string;
        background: string;
      };
      end?: {
        foreground: string;
        background: string;
      };
    };
    footer_bar?: {
      foreground: string;
      background: string;
    };
    selection?: {
      text: string;
      background: string;
    };
    search?: {
      matches?: {
        foreground: string;
        background: string;
      };
      focused_match?: {
        foreground: string;
        background: string;
      };
    };
    normal: Pallete;
    bright?: Pallete;
    dim?: Pallete;
  };
};

export const DEFAULT_THEME: ColorScheme = {
  name: "Default",
  colors: {
    primary: {
      foreground: "#d8d8d8",
      background: "#181818",
    },
    normal: {
      black: "#181818",
      red: "#ac4242",
      green: "#90a959",
      yellow: "#f4bf75",
      blue: "#6a9fb5",
      magenta: "#aa759f",
      cyan: "#75b5aa",
      white: "#d8d8d8",
    },
    bright: {
      black: "#6b6b6b",
      red: "#c55555",
      green: "#aac474",
      yellow: "#feca88",
      blue: "#82b8c8",
      magenta: "#c28cb8",
      cyan: "#93d3c3",
      white: "#f8f8f8",
    },
    dim: {
      black: "#0f0f0f",
      red: "#712b2b",
      green: "#5f6f3a",
      yellow: "#a17e4d",
      blue: "#456877",
      magenta: "#704d68",
      cyan: "#4d7770",
      white: "#8e8e8e",
    },
  },
};

// Dracula is copyright 2018 Dracula Theme, licensed under MIT. Sourced from https://github.com/dracula/alacritty.
export const DRACULA_THEME: ColorScheme = {
  name: "Dracula",
  colors: {
    primary: {
      background: "#282a36",
      foreground: "#f8f8f2",
      bright_foreground: "#ffffff",
    },
    cursor: {
      text: "#282a36",
      cursor: "#f8f8f2",
    },
    vi_mode_cursor: {
      cursor: "CellForeground",
      text: "CellBackground",
    },
    normal: {
      black: "#21222c",
      blue: "#bd93f9",
      cyan: "#8be9fd",
      green: "#50fa7b",
      magenta: "#ff79c6",
      red: "#ff5555",
      white: "#f8f8f2",
      yellow: "#f1fa8c",
    },
    bright: {
      black: "#6272a4",
      blue: "#d6acff",
      cyan: "#a4ffff",
      green: "#69ff94",
      magenta: "#ff92df",
      red: "#ff6e6e",
      white: "#ffffff",
      yellow: "#ffffa5",
    },
    hints: {
      end: {
        background: "#282a36",
        foreground: "#f1fa8c",
      },
      start: {
        background: "#f1fa8c",
        foreground: "#282a36",
      },
    },
    search: {
      focused_match: {
        background: "#ffb86c",
        foreground: "#44475a",
      },
      matches: {
        background: "#50fa7b",
        foreground: "#44475a",
      },
    },
    footer_bar: {
      background: "#282a36",
      foreground: "#f8f8f2",
    },
  },
};

export const THEMES = [DEFAULT_THEME, DRACULA_THEME];
