import React from 'react';

const Header = ({ headerTitle, headerSubtitle }) => {
  return (
    <div className="custom-header">
      <h1>{headerTitle}</h1>
      <p>{headerSubtitle}</p>
      <div className="line-header"></div>
    </div>
  );
};

export default Header;
