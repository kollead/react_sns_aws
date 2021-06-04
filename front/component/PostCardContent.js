import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function PostCardContent({postData}) {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v) => {
        if (v.match(/(#[^\s#]+)/)) {
          return <Link key={v} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>;
        }
        return v;
      })}
    </div>
  );
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
