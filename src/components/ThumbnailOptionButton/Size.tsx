import React, { useState } from 'react';

const Size = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  changeSize,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 64, height: 32 } : { width: 90, height: 48 };

  return (
    <div
      title="Change images size"
      className="thumbnail-option"
      onClick={changeSize}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 81 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.02716"
          y="0.536179"
          width="79"
          height="39"
          rx="5"
          stroke={hovered ? selectedFill : bgStroke}
          fill={bgFill}
        />
        <rect
          x="7.92166"
          y="24.0362"
          width="8"
          height="8"
          rx="2"
          fill={selected === 'small' ? selectedFill : fill}
        />
        <rect
          x="24.5272"
          y="16.0362"
          width="16"
          height="16"
          rx="2"
          fill={selected === 'medium' ? selectedFill : fill}
        />
        <rect
          x="49.1322"
          y="8.03647"
          width="24"
          height="24"
          rx="2"
          fill={selected === 'large' ? selectedFill : fill}
        />
      </svg>
    </div>
  );
};

export default Size;
