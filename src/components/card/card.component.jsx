import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container" /*key={props.item.id}*/>
      <img
        alt="item"
        src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
      />
      <h2>{props.item.name}</h2>
      <p>{props.item.email}</p>
    </div>
  );
};
