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
        <rect
          x="8.75491"
          y="9.11406"
          width="23.5"
          height="23.5"
          rx="1.75"
          stroke={selected ? selectedFill : fill}
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <rect x="8.50491" y="16.8641" width="16" height="16" rx="2" fill={selected ? selectedFill : fill} />
        <path
          d="M24.6564 15.8222C24.4606 16.017 24.4599 16.3336 24.6547 16.5293C24.8494 16.7251 25.166 16.7258 25.3618 16.531L24.6564 15.8222ZM30.3125 11.3977C30.3132 11.1215 30.0898 10.8971 29.8137 10.8965L25.3137 10.8856C25.0376 10.8849 24.8132 11.1082 24.8125 11.3843C24.8118 11.6605 25.0351 11.8849 25.3113 11.8855L29.3113 11.8953L29.3016 15.8952C29.3009 16.1714 29.5242 16.3958 29.8004 16.3965C30.0765 16.3971 30.3009 16.1738 30.3016 15.8977L30.3125 11.3977ZM25.3618 16.531L30.1652 11.7509L29.4598 11.0421L24.6564 15.8222L25.3618 16.531Z"
          fill={selected ? selectedFill : fill}
        />
      </svg>
    </div>
  );
};

export default AutoSize;
