import React from 'react';
import CharacteristicsCard from './CharacteristicsCard';
import unlock from '../../../assets/icons/unlock.svg'
import video from '../../../assets/icons/video.svg'
import microphone from '../../../assets/icons/microphone.svg'
import file from '../../../assets/icons/file.svg'
import mobile from '../../../assets/icons/mobile.svg'
import support from '../../../assets/icons/support.svg'

const Characteristics = () => {
    return (
        <div className='lg:px-12'>
            <div className='border-8 border-indigo-200 border-l-indigo-900 p-6 m-6 border-white  text-gray-600'>
                <h1 className='text-6xl font-bold italic'>
                    <span  className='text-2xl font-bold text-indigo-500'>MEMBERSHIPS <br /></span>
                     INCLUDE</h1>
                <h5 className='text-lg font-sans'>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</h5>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-6'>
                <CharacteristicsCard bgClass="bg-accent" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Unlimited access" img={unlock}></CharacteristicsCard>
                <CharacteristicsCard bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="4500 video courses" img={video}></CharacteristicsCard>
                <CharacteristicsCard bgClass="bg-accent" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Expert teachers" img={microphone}></CharacteristicsCard>
                <CharacteristicsCard bgClass="bg-accent" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="Valid Certification" img={file}></CharacteristicsCard>
                <CharacteristicsCard bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="On-the-go learning" img={mobile}></CharacteristicsCard>
                <CharacteristicsCard bgClass="bg-accent" cardDetails="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." cardTitle="24x7 Super Support" img={support}></CharacteristicsCard>
            </div>
        </div>
    );
};

export default Characteristics;