import React, { useEffect, useState } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';
import Pagination from './Pagination';
import Post  from './Post';

function List (props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() =>{
        const fetchData = async () => {
            let tokens = storage.get('tokens');
            const accessToken = tokens.accessToken;
            setLoading(true);
            const data_list = await axios(`/posts/${props.type}/get`, {
                method : 'GET',
                headers: { 'Access_Token': accessToken },
            });
            console.log(data_list.data.data);
            setPosts(data_list.data.data);
            setLoading(false);
          };
          fetchData();
    }, []);


    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    return (
      <div className='List'>

        <div className='list_grid list_tit'>
          <div> 제목 </div>
          <div> 조회수 </div>
          <div className='acenter'> 날짜 </div>
        </div>
        <Post posts={currentPosts(posts)} loading={loading}></Post>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
      ></Pagination>
            
      </div>
    );
}

export default List;