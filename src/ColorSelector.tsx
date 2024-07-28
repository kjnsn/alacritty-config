import appTheme from "./theme";
import { ColorScheme, THEMES } from "./color_schemes";

function ThemeChip({
  theme,
  themeName,
  selected,
  onSelect,
}: {
  theme: ColorScheme;
  themeName: string;
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

  console.log(themeName);
  return (
    <>
      <button className={classes().join(" ")} onClick={onSelect}>
        {themeName}
      </button>
    </>
  );
}

export default function ColorSelector({
  currentScheme,
  setColorScheme,
}: {
  currentScheme?: ColorScheme;
  setColorScheme: (arg0: ColorScheme) => void;
}) {
  var chips: JSX.Element[] = [];
  THEMES.forEach((scheme, name) => {
    chips.push(
      <ThemeChip
        key={name}
        themeName={name}
        theme={scheme}
        selected={scheme == currentScheme}
        onSelect={() => setColorScheme(scheme)}
      />,
    );
  });
  return <>{chips}</>;
}
