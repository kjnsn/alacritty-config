export type Scrolling = {
  history?: number;
  multiplier?: number;
}
export type Cursor = {}
export type Selection = {}
export type Font = {}
export type Window = {}
export type Mouse = {}
export type Debug = {}
export type Colors = {}
export type Terminal = {}
export type Shell = {}
export type Bell = {}

/** Defines a data structure that holds a configuration for alacritty. */
export type AlacrittyConfig = {
  scrolling?: Scrolling;
  cursor?: Cursor;
  selection?: Selection;
  font?: Font;
  window?: Window;
  mouse?: Mouse;
  debug?: Debug;
  bell?: Bell;
  colors?: Colors;
  terminal?: Terminal;
  shell?: string | Shell;
  live_config_reload?: boolean;
  working_directory?: string;
}

