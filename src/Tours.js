import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTours}) => {


  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour)=>{
            return(
              <h3><Tour key={tour.id}  {...tour} removeTours={removeTours}/></h3>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
