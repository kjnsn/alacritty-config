import { AlacrittyConfig } from './model';
import { stringify } from 'smol-toml';

export function printConfig(config: AlacrittyConfig) {
  console.log(stringify(config));
}
