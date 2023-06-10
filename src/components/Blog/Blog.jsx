import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';

import PostList from '../PostsList/PostsList';

import { getPosts } from '../../shared/api/posts';
import { Container } from '../Container/Conteiner';
import { PreTitle } from '../PreTitle/PreTitle';

import { Section } from './Blog.styled';

const Blog = () => {
 const [items, setItems] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchPosts = async () => {
   try {
    setLoading(true);
    const { data } = await getPosts();
    setItems(data);
   } catch ({ response }) {
    const errorMessage = response.data.message || 'Cannot fetch posts';
    setError(errorMessage);
   } finally {
    setLoading(false);
   }
  };
  fetchPosts();
 }, []);

 return (
  <Section>
   <Container>
    <PreTitle variant="primary" text={'Blog'} style={{ width: 119 }} />
    <h2>Articles & Resources</h2>
    {loading && <Loader />}
    {error && <p>{error}</p>}
    <PostList items={items} />
   </Container>
  </Section>
 );
};

export default Blog;
