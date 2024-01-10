import React from 'react';

interface TagProps {
  tag: string;
  fontSize: number;
}

const Tag: React.FC<TagProps> = ({ tag, fontSize }) => {
  return (
    <div className="tag" style={{ fontSize: `${fontSize}px` }}>
      {tag}
    </div>
  );
};

export default Tag;
