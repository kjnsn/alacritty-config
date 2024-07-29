import { useState, useCallback } from "react";
import Configuration from "./Configuration";
import { AlacrittyConfig } from "./model";
import { stringify } from "smol-toml";
import theme from "./theme";

const STORAGE_KEY = "alacritty_config";

function storageAvailable(): boolean {
  let storage: Storage | undefined;
  try {
    storage = window.localStorage;
    const x = "__storage_test__";
    storage?.setItem(x, x);
    storage?.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage != null &&
      storage?.length !== 0
    );
  }
}

function App() {
  const isLocalStorageAvailable = useCallback(storageAvailable, []);

  const [config, setConfig] = useState<AlacrittyConfig>(() => {
    if (isLocalStorageAvailable()) {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);
      if (storedValue == null) {
        return;
      }
      // Just parse and hope for the best. Ideally there would be some error handling here.
      return JSON.parse(storedValue);
    }
    return {};
  });

  function updateConfiguration(newConfig: AlacrittyConfig) {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    }
    setConfig(newConfig);
  }

  return (
    <div
      className={
        theme.surface.background +
        theme.on_surface.text +
        " pt-6 px-3 min-h-screen"
      }
    >
      <Configuration config={config} setConfig={updateConfiguration} />

      <div className={theme.surface_container.background + " mt-5 p-3"}>
        <code className={theme.on_surface_container.text}>
          <pre>{stringify(config)}</pre>
        </code>
      </div>
    </div>
  );
}

export default App;
