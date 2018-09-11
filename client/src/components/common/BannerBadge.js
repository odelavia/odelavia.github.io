import React from 'react';

const BannerBadge = ({ children }) => {
  return (
    <div id="foreground-banner" className="banner">
      <div className="line first">
        <span>{children[0]}</span>
      </div>
      <div className="line second">
        <span>{children[1]}</span>
      </div>
    </div>
  );
}

export default BannerBadge;