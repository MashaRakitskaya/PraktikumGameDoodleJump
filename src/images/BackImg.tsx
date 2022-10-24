import * as React from 'react';
import { SVGProps } from 'react';

const BackImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#000" />
    <path fill="#fff" d="M20 14.8H9v-1.6h11z" />
    <path d="m13 19-4-5 4-5" stroke="#fff" strokeWidth={1.6} />
  </svg>
);

export default BackImg;
