import extractorSvelte from "@unocss/extractor-svelte";
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  extractors: [extractorSvelte],
  theme: {},
  rules: [],
  shortcuts: [],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      body {
        overflow-x: hidden;
      }
      `,
    },
  ],

  presets: [myPreset, presetUno(), presetIcons({ scale: 1.2 })],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
