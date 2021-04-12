import React, { useState } from 'react';

const AutoSize = ({
  selected,
  bgFill = '#F9F9F9',
  bgStroke = '#EEE',
  fill = '#CCC',
  selectedFill = '#153EFB',
  toggleAutoSize,
  iconSize
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { width, height } = iconSize === 'small' ? { width: 32, height: 32 } : { width: 45, height: 48 };

  return (
    <div
      title="Auto size"
      className="thumbnail-option"
      onClick={toggleAutoSize}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.00491"
          y="1.36406"
          width="39"
          height="39"
          rx="5"
          fill={bgFill}
          stroke={hovered ? selectedFill : bgStroke}
        />
        <path
          d="M34.0466 8.18054C34.0466 7.62825 33.5989 7.18054 33.0466 7.18054H24.0466C23.4943 7.18054 23.0466 7.62825 23.0466 8.18054C23.0466 8.73282 23.4943 9.18054 24.0466 9.18054H32.0466V17.1805C32.0466 17.7328 32.4943 18.1805 33.0466 18.1805C33.5989 18.1805 34.0466 17.7328 34.0466 17.1805V8.18054ZM23.1471 19.4942L33.7537 8.88764L32.3395 7.47343L21.7329 18.08L23.1471 19.4942Z"
          fill={selected ? selectedFill : fill}
        />
        <path
          d="M6.6634 33.4666C6.6634 34.0189 7.11112 34.4666 7.6634 34.4666H16.6634C17.2157 34.4666 17.6634 34.0189 17.6634 33.4666C17.6634 32.9143 17.2157 32.4666 16.6634 32.4666H8.6634V24.4666C8.6634 23.9143 8.21569 23.4666 7.6634 23.4666C7.11112 23.4666 6.6634 23.9143 6.6634 24.4666V33.4666ZM17.5629 22.1529L6.9563 32.7595L8.37051 34.1737L18.9771 23.5671L17.5629 22.1529Z"
          fill={selected ? selectedFill : fill}
        />
      </svg>
    </div>
  );
};

export default AutoSize;
