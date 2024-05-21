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
  </ContentLoader>
);

export default Skeleton;
