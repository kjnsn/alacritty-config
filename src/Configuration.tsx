import { ColorScheme } from "./color_schemes";
import ColorSelector from "./ColorSelector";
import { NumberField, StringField, Toggle } from "./Components";
import { AlacrittyConfig } from "./model";

type ConfigurationProps = {
  config: AlacrittyConfig;
  setConfig: (c: AlacrittyConfig) => void;
};

export default function Configuration({
  config,
  setConfig,
}: ConfigurationProps) {
  const sectionHeading = "text-2xl mb-2";

  return (
    <>
      <h2 className={sectionHeading}>General</h2>
      <Toggle
        label="Live Reload"
        enabled={config.live_config_reload ?? false}
        setEnabled={(e) => setConfig({ ...config, live_config_reload: e })}
      />

      <StringField
        label="Shell"
        defaultValue=""
        value={config.shell?.toString()}
        setValue={(e) => setConfig({ ...config, shell: e })}
      />

      <h2 className={sectionHeading}>Colors</h2>

      <ColorSelector
        currentScheme={config.colors}
        setColorScheme={(s: ColorScheme) => setConfig({ ...config, colors: s })}
      />

      <h2 className={sectionHeading + " mt-3"}>Scrolling</h2>

      <NumberField
        label="Scroll History Buffer"
        defaultValue={10_000}
        value={config.scrolling?.history}
        setValue={(e) => setConfig({ ...config, scrolling: { history: e } })}
      />
    </>
  );
}
