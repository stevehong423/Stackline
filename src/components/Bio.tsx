import React from 'react'

interface IBio {
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
}

const Bio: React.FC<IBio> = ({ title, subtitle, image, tags }) => {
    return (
        <div className='bio-card'>
            <img src={image} alt='blender' />
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <hr></hr>
            <div className='bio-div'>
                {tags.map(tag => (
                <div className='bio-tags'>{tag}</div>
                ))}
            </div>
            <hr></hr>
        </div>
    )
}

export default Bio
