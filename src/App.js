/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';
import { background } from './assets/images/images';

function App() {
  const [hover, setHover] = useState(false);

  return (
    <main
      css={css`
        width: 100%;
        height: 100vh;
        min-height: 1080px;
        background-image: url(${background});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <svg
        fill={'transparent'}
        width={'100%'}
        height={'100%'}
        viewBox={'0 0 1920 1080'}
        css={css`
          position: relative;
          top: 0;
          left: 0;
          background-color: #000;
          opacity: 0.8;
        `}
      >
        <polygon
          onMouseEnter={() => console.log('onMouseEnter')}
          onMouseLeave={() => console.log('onMouseLeave')}
          points="400,400 600,500 800,450 500,400 1000,300 100,100 400,400"
          stroke="green"
          strokeWidth={'10px'}
          fill={hover ? 'none' : 'transparent'}
          css={css`
            position: absolute;
            top: 0;
            left: 0;
          `}
        />
      </svg>
    </main>
  );
}

export default App;
