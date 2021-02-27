import React from 'react';

const InfoText = ({ text }) => {
  return (
    <div className='info-p-container'>
      <span className='info-p-box' /> 
      <p className='info-p'>{text}</p>
    </div>
  );
}

export default InfoText;
