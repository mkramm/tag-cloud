import React, { useEffect, useState } from 'react';
import Tag from '../component/Tag';
import dataArray from '../data';

const TagCloud: React.FC = () => {
  const [tagCounts, setTagCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Simulate loading data from data.ts
    const counts: { [key: string]: number } = {};
    dataArray.flat().forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    setTagCounts(counts);
  }, []);

  const getMaxCount = (): number => {
    return Math.max(...Object.values(tagCounts));
  };

  // Shuffle and filter unique tags across all levels
  const uniqueTagsSet = new Set<string>(dataArray.flat());
  const uniqueTags = Array.from(uniqueTagsSet).sort(() => Math.random() - 0.5);

  return (
    <div className="tag-cloud">
      {uniqueTags.map(tag => {
        const count = tagCounts[tag] || 0;
        const fontSize = 10 + (count / getMaxCount()) * 20;
        return <Tag key={tag} tag={tag} fontSize={fontSize} />;
      })}
    </div>
  );
};

export default TagCloud;
