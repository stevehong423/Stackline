//Import React (No Hooks Needed)
import React from 'react'

//Define Interface For Bio Props
interface IBio {
    title: string;
    subtitle: string;
    image: string;
    tags: string[];
}

//Destructure Title, Subtitle, Image, Tags To Be Displayed in Bio Component
const Bio: React.FC<IBio> = ({ title, subtitle, image, tags }) => {
    return (
        <div className='bio-card'>
            <br></br>
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
};

export default Bio;
