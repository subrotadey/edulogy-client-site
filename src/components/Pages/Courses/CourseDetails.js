import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>Course details</h2>
            <h2>{id}</h2>
        </div>
    );
};

export default CourseDetails;