import React from "react";
import './Community.css';

const Posts = ({ posts, loading ,search}) => {
  return (
    <>
      {loading && <div className = 'loading'> loading... </div>}
        {posts && posts.length > 0 ? posts.map((post) => (
          <div className="list_gird list_data" key={post.title}>
            <div>
                {post.title}
            </div>
          </div>
        ))
        :
        <div className='not_data acenter'>
        {search !== "" ? <div> 검색된 결과가 없습니다. </div> // 검색 사용
                      : <div> 데이터가 없습니다. </div> // 검색 사용 X
        }
        </div>
        

        
        
        }
    </>
  );
};
export default Posts;