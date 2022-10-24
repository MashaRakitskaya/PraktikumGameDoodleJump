import * as React from 'react';
import { SVGProps } from 'react';

const CloseImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 28.8 19.2 16 32 3.2 28.8 0 16 12.8 3.2 0 0 3.2 12.8 16 0 28.8 3.2 32 16 19.2 28.8 32l3.2-3.2Z"
      fill="#7D3CFF"
    />
  </svg>
);

export default CloseImg;
