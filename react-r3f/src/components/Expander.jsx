import React from 'react'

export default function Expander({classStyle, shapeBg, circleBg}) {
  return (
    <svg
    width="100px"
    viewBox="0 0 139.65 154.94"
    xmlns="http://www.w3.org/2000/svg"
    className={classStyle}
  >
    <g transform="translate(-70.425 -25.584)" strokeLinecap="square">
      <path
        id="shape"
        d="m209.67 25.584c-0.10621 3.2855 0.3931 0.26643 0 0zm0.11989 1.3792c-4.6893 24.742-35.978 29.972-56.701 34.085-16.404 2.9756-33.062 1.2884-49.574 2.2129-18.045 1.8919-32.911 18.419-32.978 36.538-0.64045 10.15 1.4427 20.782 8.0343 28.805 7.8572 10.355 21.152 15.412 33.938 14.443 28.428-0.30335 67.797 6.8668 83.198 15.998s14.791 17.625 14.083 18.332zm0 152.08c-0.2369 2.8998 0.083 0.77283 0 0z"
        fill={shapeBg}
        stopColor="#000000"
        strokeWidth={1.0583}
        style={{
          paintOrder: "markers stroke fill",
        }}
      />
      <circle
        id="circle"
        cx={109.52}
        cy={103.05}
        r={25.563}
        fill={circleBg}
        stopColor="#000000"
        strokeWidth={1.0583}
        style={{
          paintOrder: "markers stroke fill",
        }}
      />
      <g
        id="arrow"
        transform="translate(-1.2622 -.15714)"
        fill="#475569"
        strokeWidth={0.32224}
      >
        <path
          d="m111.29 120.72 2.153-2.153-15.357-15.357 15.357-15.357-2.153-2.153-17.51 17.51z"
          stopColor="#000000"
          style={{
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m121.12 120.72 2.153-2.153-15.357-15.357 15.357-15.357-2.153-2.153-17.51 17.51z"
          stopColor="#000000"
          style={{
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
    </g>
  </svg>
  )
}
