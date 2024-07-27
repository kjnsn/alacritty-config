export type Scrolling = {
  // default: 10_000
  history?: number;
  // default: 3
  multiplier?: number;
}
export type Cursor = {
  unfocused_hollow?: boolean;
}
export type Selection = {
  save_to_clipboard?: boolean;
}

export type FontSelector = {
  family: string;
  style: string;
}
export type Font = {
  builtin_box_drawing?: boolean;
  normal?: FontSelector;
  bold?: FontSelector;
  italic?: FontSelector;
  bold_italic?: FontSelector;
  // default: 11.25
  size?: number;
}
export type Window = {
  dynamic_padding?: boolean;
  blur?: boolean;
  dynamic_title?: boolean;
  resize_increments?: boolean;
}
export type Mouse = {
  // default: false
  hide_when_typing?: boolean;
}
export type Debug = {
  // default: false
  render_timer?: boolean;
  // default: false
  persistent_logging?: boolean;
  // default: false
  print_events?: boolean;
  // default: false
  highlight_damage?: boolean;
  // default: false
  prefer_egl?: boolean;
}
export type Colors = {
  transparent_background_colors?: boolean;
  draw_bold_text_with_bright_colors?: boolean;
}
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

