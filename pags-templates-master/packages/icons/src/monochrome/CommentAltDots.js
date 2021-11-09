import React from 'react';

export default function CommentAltDots(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-tertiary" d="M19,2H5A3.00328,3.00328,0,0,0,2,5V15a3.00328,3.00328,0,0,0,3,3H16.58594l3.707,3.707A.99991.99991,0,0,0,22,21V5A3.00328,3.00328,0,0,0,19,2ZM8,11a1,1,0,1,1,1-1A1,1,0,0,1,8,11Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,11Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z" />
      <circle cx={8} cy={10} r={1} className="uim-primary" />
      <circle cx={12} cy={10} r={1} className="uim-primary" />
      <circle cx={16} cy={10} r={1} className="uim-primary" />
    </svg>
  );
}
