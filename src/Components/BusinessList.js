/* eslint-disable indent */
import React from 'react';

export default function BusinessList({ list }) {
  console.log(list);
  return (
    <div>
      {list
        ? list.businesses.map((business, i) => {
            return (
              <div key={business.name + i}>
                <h3>{business.name}</h3>
                <img src={business.image_url} width="100px"></img>
                <p>{`Address: ${business.location.address1}`}</p>
                <p>{`Phone: ${business.phone}`}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
