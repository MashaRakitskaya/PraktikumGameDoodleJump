import * as React from 'react';
import { SVGProps } from 'react';

const ArrowImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.984 9 .984.34v17.32l15-8.66ZM2.47 10.5h.014v-3H2.47v3Z"
      fill="#7D3CFF"
    />
  </svg>
);

export default ArrowImg;
