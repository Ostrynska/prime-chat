import axios from 'axios';

const postsInstance = axios.create({
 baseURL: 'https://blog-posts-2bq2.onrender.com/api/posts',
});

export const getPosts = () => {
 return postsInstance.get('/');
};

export const getPostById = id => {
 return postsInstance.get(`/${id}`);
};
