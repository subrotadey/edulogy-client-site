import React from "react";

const CharacteristicsCard = ({ img, cardTitle, cardDetails, bgClass }) => {
  return (
      <div className={`shadow-lg shadow-cyan-500/50 card lg:card-side hover:bg-violet-300 hover:text-white bg-base-100 shadow-xl transition ease-in-out delay-150 ${bgClass}`}>
        <figure className="pt-5">
          <img className="w-1/5 lg:w-2/5" src={img} alt="Album" />
        </figure>
        <div className="card-body font-sans">
          <h2 className="card-title font-bold text-white">{cardTitle}!</h2>
          <p>{cardDetails}</p>
        </div>
      </div>
  );
};

export default CharacteristicsCard;
