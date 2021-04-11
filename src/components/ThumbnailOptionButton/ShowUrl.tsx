import React, { useState } from 'react';

const ShowUrl = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  toggleShowUrl,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 32, height: 32 } : { width: 45, height: 48 };

  return (
    <div
      title="Show URL"
      className="thumbnail-option"
      onClick={toggleShowUrl}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.15036"
          y="1.35129"
          width="39"
          height="39"
          rx="5"
          fill={bgFill}
          stroke={hovered ? selectedFill : bgStroke}
        />
        <rect x="10.6504" y="9.24976" width="20" height="20" rx="2" fill={selected ? selectedFill : fill} />
        <path
          d="M12.6504 32.4564L28.6504 32.4564"
          stroke={selected ? selectedFill : fill}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ShowUrl;
