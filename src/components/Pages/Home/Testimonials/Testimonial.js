import React from 'react';

const Testimonial = ({review}) => {
    return (
        <div className='drop-shadow-2xl'>
            <div className="card w-96 glass mx-5">
          <figure><img src={review.img} alt="user" className='rounded-full'/></figure>
          <div className="card-body text-center">
            <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vita & {review.description}</p>
            <div className="divider"></div>
            <h2 className="card-title mx-auto">{review.name}</h2>
          </div>
        </div>
        </div>
    );
};

export default Testimonial;