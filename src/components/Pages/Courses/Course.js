import React from "react";
import { useNavigate } from "react-router-dom";


const Course = (props) => {
    const {_id, img, price, heading} = props.course;

    const navigate = useNavigate();
    const coursesDetails = () => {
        navigate(`/courseDetails/${_id}`)
      }
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={coursesDetails} className="btn btn-primary">view more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
