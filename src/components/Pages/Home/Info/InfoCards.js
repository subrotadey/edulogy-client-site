import React from "react";

const InfoCards = ({ img, cardTitle, cardDetails, bgClass }) => {
  return (
    <div>
      <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure>
          <img className="w-2/5" src={img} alt="Album" />
        </figure>
        <div className="card-body  text-white">
          <h2 className="card-title font-bold">{cardTitle}!</h2>
          <p>{cardDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
