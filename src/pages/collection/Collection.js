import { useEffect, useState } from 'react';

import { getCollection } from './service.js';

const Post = ({ title, body }, key) => (
  <div className="prose lg:prose-xl" key={key}>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

const Collection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getCollection().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>Collection</h1>

      {/* <div className="space-y-4">{posts.map(Post)}</div> */}
    </div>
  );
};

export default Collection;
