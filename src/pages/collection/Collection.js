import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <div style={{ height: 'calc(100vh - 30px)' }} className="prose prose-blue lg:prose-xl">
        <h1>Collection</h1>

        <p>
          A bare minimum, and as much as un-opinionated as can be, boilerplate
          so you can start develope and deploy React apps with Tailwind CSS and
          Webpack 5.
        </p>

        <p>
          Checkout <Link to="/">home</Link> page.
        </p>
      </div>
      {/* <TabBar /> */}
    </>
  );
};

export default Collection;
