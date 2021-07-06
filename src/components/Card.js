import React from 'react';

const Card = (props) => {
  const {name, email, phone, id} = props;
  return(
    <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="A Robot Factory" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Contact: {phone}</p>
      </div>
    </div>
  );
}

export default Card