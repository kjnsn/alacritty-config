import { useState } from "react";
import Configuration from "./Configuration";
import { AlacrittyConfig } from "./model";
import { stringify } from "smol-toml";
import theme from "./colors";

function App() {
  const [config, setConfig] = useState<AlacrittyConfig>({});

  return (
    <div
      className={
        theme.surface + theme.text_on_surface + " pt-6 px-3 min-h-screen"
      }
    >
      <Configuration config={config} setConfig={(c) => setConfig(c)} />

      <div className={theme.surface_container + " mt-5 p-3"}>
        <code className={theme.text_on_surface_container}>
          <pre>{stringify(config)}</pre>
        </code>
      </div>
    </div>
  );
}

export default App;
