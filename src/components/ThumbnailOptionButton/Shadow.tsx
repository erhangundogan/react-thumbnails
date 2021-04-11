import React, { useState } from 'react';

const Shadow = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  toggleShadow,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 32, height: 32 } : { width: 45, height: 48 };

  return (
    <div
      title="Drop shadow"
      className="thumbnail-option"
      onClick={toggleShadow}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.05582"
          y="1.08872"
          width="39"
          height="39"
          rx="5"
          fill={bgFill}
          stroke={hovered ? selectedFill : bgStroke}
        />
        <g filter="url(#filter0_d)">
          <rect
            x="11.5558"
            y="11.5887"
            width="18"
            height="18"
            rx="1.5"
            fill={selected ? selectedFill : fill}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="6.55582"
            y="6.58872"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Shadow;
