import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={440}
    viewBox="0 0 280 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="380" />
    <rect x="0" y="390" rx="0" ry="0" width="280" height="18" />
    {/* <circle cx="135" cy="118" r="109" />
    <rect x="6" y="278" rx="15" ry="15" width="280" height="62" />
    <rect x="180" y="273" rx="0" ry="0" width="25" height="0" />
    <rect x="12" y="358" rx="19" ry="19" width="116" height="33" />
    <rect x="137" y="357" rx="31" ry="31" width="141" height="56" />
    <rect x="244" y="396" rx="0" ry="0" width="7" height="5" />
    <rect x="34" y="237" rx="15" ry="15" width="206" height="27" /> */}
  </ContentLoader>
);

export default Skeleton;
