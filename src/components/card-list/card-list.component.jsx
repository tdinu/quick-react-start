import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.data.map((el) => {
        return <Card item={el} key={el.id} />;
      })}
    </div>
  );
};
