type Token = {
  text: string;
  background: string;
};

// Sticks to the "neutral" pallete mostly.
// Color roles are based on material 3: https://m3.material.io/styles/color/roles
interface Theme {
  [tokenName: string]: Token;
}
const theme: Theme = {
  // Primary
  primary: {
    // lavender
    text: " text-[#4c4f69] dark:text-[#b7bdf8] ",
    background: " bg-[#7287fd] dark:bg-[#b7bdf8] ",
  },
  on_primary: {
    // base
    text: " text-[#eff1f5] dark:text-[#24273a] ",
    background: " bg-neutral-50 dark:bg-[#24273a] ",
  },
  primary_container: {
    // mantle
    text: " text-[#e6e9ef] dark:text-[#1e2030] ",
    background: " bg-[#e6e9ef] dark:bg-[#1e2030] ",
  },
  on_primary_container: {
    // subtext1
    text: " text-[#5c5f77] dark:text-[#b8c0e0] ",
    background: " ",
  },

  // Surface
  surface: {
    text: " text-[#eff1f5] dark:text-[#24273a] ",
    background: " bg-[#eff1f5] dark:bg-[#24273a] ",
  },
  on_surface: {
    // text
    text: " text-[#4c4f69] dark:text-[#cad3f5] ",
    background: " ",
  },
  surface_container: {
    // crust
    text: " text-[#dce0e8] dark:text-[#181926] ",
    background: " bg-[#dce0e8] dark:bg-[#181926] ",
  },
  on_surface_container: {
    // subtext1
    text: " text-[#5c5f77] dark:text-[#b8c0e0] ",
    background: " ",
  },
};

export default theme;
