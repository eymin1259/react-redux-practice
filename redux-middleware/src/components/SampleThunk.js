import React from 'react';

const Sample = ({ loadingPost, post }) => {
  return (
    <>
      <section>
        <h1>post</h1>
        {loadingPost && 'loading...'}
        {!loadingPost && !post && 'no post'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
    </>
  );
};

export default Sample;
