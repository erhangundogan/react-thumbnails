import React, { useState } from 'react';

const Border = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  toggleBorder,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 32, height: 32 } : { width: 45, height: 48 };

  return (
    <div
      title="Show border"
      className="thumbnail-option"
      onClick={toggleBorder}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.56543"
          y="0.896484"
          width="39"
          height="39"
          rx="5"
          fill={bgFill}
          stroke={hovered ? selectedFill : bgStroke}
        />
        <rect
          x="8.56543"
          y="8.89648"
          width="23"
          height="23"
          rx="1.5"
          stroke={selected ? selectedFill : fill}
          strokeDasharray="2 2"
        />
        <rect x="11.0654" y="11.3965" width="18" height="18" rx="1.5" fill={selected ? selectedFill : fill} />
      </svg>
    </div>
  );
};

export default Border;
