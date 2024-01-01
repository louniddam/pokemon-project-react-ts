import React from 'react';

const renderAllSprites = (sprites: any) => {
  const renderSpriteImages = (spriteObject: any, prefix: string = '') => {
    return Object.entries(spriteObject).map(([key, value]) => {
      const spriteKey = prefix ? `${prefix}.${key}` : key;

      if (value && typeof value === 'object') {
        return renderSpriteImages(value, spriteKey);
      } else if (typeof value === 'string') {
        return (
          <div key={spriteKey} className="sprite-card">
            <img src={value} alt={`${spriteKey} sprite`} />
            <p>{spriteKey}</p>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="sprites-container">
      {renderSpriteImages(sprites)}
    </div>
  );
};

export default renderAllSprites;