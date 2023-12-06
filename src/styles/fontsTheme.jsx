import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    /* monofett-latin-400-normal */
    @font-face {
      font-family: 'Monofett';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url(https://cdn.jsdelivr.net/fontsource/fonts/monofett@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/monofett@latest/latin-400-normal.woff) format('woff');
      unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }
      /* livvic-latin-400-normal */
      @font-face {
        font-family: 'Livvic';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/livvic@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/livvic@latest/latin-400-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      `}
  />
)

export default Fonts;
