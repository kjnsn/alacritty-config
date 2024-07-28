import { useState } from "react";
import appTheme from "./theme";
import { ColorScheme, DEFAULT_THEME, THEMES } from "./color_schemes";

function ThemeChip({
  theme,
  selected,
  onSelect,
}: {
  theme: ColorScheme;
  selected: boolean;
  onSelect: () => void;
}) {
  function classes(): string[] {
    const selectedClasses = selected
      ? [appTheme.primary.background, appTheme.on_primary.text]
      : [
          appTheme.surface_container.background,
          appTheme.on_surface_container.text,
        ];

    return ["rounded p-2"].concat(selectedClasses);
  }

  console.log(theme.name);
  return (
    <>
      <button className={classes().join(" ")} onClick={onSelect}>
        {theme.name}
      </button>
    </>
  );
}

export default function ColorSelector() {
  const [currentTheme, setTheme] = useState(DEFAULT_THEME);

  return (
    <>
      {THEMES.map((theme) => (
        <ThemeChip
          key={theme.name}
          theme={theme}
          selected={theme.name == currentTheme.name}
          onSelect={() => setTheme(theme)}
        />
      ))}
    </>
  );
}
