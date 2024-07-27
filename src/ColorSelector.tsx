import { useState } from "react";

type Pallete = {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
};

type ColorTheme = {
  name: string;
  colors: {
    primary: {
      foreground: string;
      background: string;
    };
    normal: Pallete;
    bright: Pallete;
    dim: Pallete;
  };
};

const DEFAULT_THEME: ColorTheme = {
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

const THEMES = [DEFAULT_THEME];

function ThemeChip({
  theme,
  onSelect,
}: {
  theme: ColorTheme;
  onSelect: () => void;
}) {
  return <></>;
}

export default function ColorSelector() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return (
    <>
      {THEMES.map((theme) => (
        <ThemeChip theme={theme} onSelect={() => setTheme(theme)} />
      ))}
    </>
  );
}