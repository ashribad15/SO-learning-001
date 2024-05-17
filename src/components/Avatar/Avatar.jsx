import React from 'react';

const Avatar = ({ children, backgroundColor, size, color, cursor }) => {
  const style = {
    backgroundColor,
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color || 'black',
    borderRadius: '50%', // Set border radius to 50% for a circle
    fontSize: '16px',
    textAlign: 'center',
    cursor: cursor || 'pointer',
    textDecoration: 'none'
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Avatar;



