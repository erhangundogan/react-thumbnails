import React, { useState } from 'react';

const Shape = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  changeShape,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 90, height: 32 } : { width: 130, height: 48 };

  return (
    <div
      title="Change images shape"
      className="thumbnail-option"
      onClick={changeShape}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 116 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.806915"
          y="0.536179"
          width="114.13"
          height="39"
          rx="5"
          fill={bgFill}
          stroke={hovered ? selectedFill : bgStroke}
        />
        <g>
          <rect
            x="11.0448"
            y="12.5362"
            width="17"
            height="9"
            stroke={selected === 'default' ? selectedFill : fill}
            strokeDasharray="2 2"
          />
          <rect
            x="10.5448"
            y="12.0362"
            width="10"
            height="16"
            fill={selected === 'default' ? selectedFill : fill}
          />
        </g>
        <rect
          x="38.3569"
          y="12.0362"
          width="16"
          height="16"
          rx="1"
          fill={selected === 'square' ? selectedFill : fill}
        />
        <circle cx="74.1689" cy="20.0365" r="8" fill={selected === 'circle' ? selectedFill : fill} />
        <path
          d="M100.128 12.0362L102.6 17.303L108.128 18.1476L104.128 22.2473L105.073 28.0362L100.128 25.3031L95.184 28.0362L96.1283 22.2473L92.1283 18.1476L97.6561 17.303L100.128 12.0362Z"
          fill={selected === 'star' ? selectedFill : fill}
        />
      </svg>
    </div>
  );
};

export default Shape;
