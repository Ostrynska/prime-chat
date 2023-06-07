import axios from 'axios';

const postsInstance = axios.create({
 baseURL: 'https://blog-m1zi.onrender.com/api/posts',
});

export const getPosts = () => {
 return postsInstance.get('/');
};

export const getPostById = id => {
 return postsInstance.get(`/${id}`);
};
