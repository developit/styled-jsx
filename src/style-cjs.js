// This file is used to ensure the CommonJS build of styled-jsx/style has the same export shape as the module build.

import JSXStyle, { flush } from './style';

JSXStyle.flush = flush;
export default JSXStyle;
