import React from 'react'
import { useState } from 'react';
import Picker from 'emoji-picker-react';
import './SearchEmoji.css'

const SearchEmoji = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);
  
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  
    return (
    <div className='emoji'>
      <div className='one'>
      <h1>Emoji Picker</h1>
      {chosenEmoji ? (
        <span>Your Emoji: {chosenEmoji.emoji}</span>
      ) : (
        <span>No Emoji</span>
      )}
      </div>
      <br /><br />
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default SearchEmoji