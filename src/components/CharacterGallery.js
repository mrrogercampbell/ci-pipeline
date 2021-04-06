import React from 'react';
import data from '../data/data.json'
import Character from './Character'

const CharacterGallery = () => {
    const listOfChars = data.map((char, i) => <Character {...char} key={i} />)
    return (
        <div>
            {listOfChars}
        </div>
    );
};

export default CharacterGallery;