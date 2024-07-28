import { useState } from "react";
import Configuration from "./Configuration";
import { AlacrittyConfig } from "./model";
import { stringify } from "smol-toml";
import theme from "./theme";

function App() {
  const [config, setConfig] = useState<AlacrittyConfig>({});

  return (
    <div
      className={
        theme.surface.background +
        theme.on_surface.text +
        " pt-6 px-3 min-h-screen"
      }
    >
      <Configuration config={config} setConfig={(c) => setConfig(c)} />

      <div className={theme.surface_container.background + " mt-5 p-3"}>
        <code className={theme.on_surface_container.text}>
          <pre>{stringify(config)}</pre>
        </code>
      </div>
    </div>
  );
}

export default App;
