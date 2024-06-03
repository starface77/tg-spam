import React, { useState } from 'react';
import EmojiData from './EmojiData';

const EmojiBox = ({ onSelect }) => {
    const [selectedEmoji, setSelectedEmoji] = useState('');

    const handleEmojiSelect = (emoji) => {
        setSelectedEmoji(emoji);
        onSelect(emoji);
    };

    return (
        <div className="emoji-box">
            {EmojiData.map((emoji, index) => (
                <span
                    key={index}
                    className="emoji"
                    role="button"
                    aria-label={`emoji-${emoji}`}
                    onClick={() => handleEmojiSelect(emoji)}
                >
                    {emoji}
                </span>
            ))}
            <span className="selected-emoji">{selectedEmoji}</span>
        </div>
    );
};

export default EmojiBox;
