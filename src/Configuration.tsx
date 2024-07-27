import { Toggle } from "./Components"
import { AlacrittyConfig } from "./model"


type ConfigurationProps = { config: AlacrittyConfig, setConfig: (c: AlacrittyConfig) => void }


export default function Configuration({ config, setConfig }: ConfigurationProps) {
  return (
    <>
      <Toggle
        label="Live Reload"
        enabled={config.live_config_reload ?? false}
        setEnabled={e => setConfig({ live_config_reload: e })} />
    </>
  )
}
