import React from 'react';
import FeatureInfoModal from './FeatureInfoModal';

const FeatureInfo = () => {
    return (
        <div className='p-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <div 
                className='w-96 h-80 min-w-fit bg-no-repeat bg-cover m-16 py-32' 
                style={{backgroundImage: "url('https://i.ibb.co/93Hrvxq/photo-1606327054536-e37e655d4f4a.jpg')"}}>
                <FeatureInfoModal></FeatureInfoModal>
                </div>
                
                </figure>
              <div className="card-body m-16 my-auto">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spot why app.</p>
              </div>
            </div>
        </div>
    );
};

export default FeatureInfo;