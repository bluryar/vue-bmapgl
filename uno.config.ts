import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import Icons from '@unocss/preset-icons';

export default defineConfig({
  presets: [presetUno(), Icons(), presetAttributify()],
  transformers: [
    transformerAttributifyJsx(),
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
