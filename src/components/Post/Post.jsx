import { useState, useEffect } from 'react';

import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import { getPostById } from '../../shared/api/posts';

import { Container } from '../Container/Conteiner';
import { PreTitle } from '../PreTitle/PreTitle';
import {
 Section,
 Image,
 PostContent,
 PostTitle,
 PostText,
 PostData,
 PostList,
 PostQuote,
 PostQuoteText,
 PostQuoteWrapp,
 Quote,
} from './Post.styled';

const Post = () => {
 const [post, setPost] = useState(null);

 const { id } = useParams();
 const navigate = useNavigate();
 const location = useLocation();

 const from = location.state?.from || '/';

 useEffect(() => {
  const fetchPost = async () => {
   try {
    const { data } = await getPostById(id);
    setPost(data);
   } catch ({ response }) {
    console.log(response.data.message);
   }
  };

  fetchPost();
 }, [id]);

 const goBack = () => navigate(from);

 const listItems =
  post && post.list
   ? post.list.split('\n').map((item, index) => <li key={index}>{item}</li>)
   : null;

 const contentItems =
  post && post.content
   ? post.content.split('\n').map((item, index) => <p key={index}>{item}</p>)
   : null;

 if (!post) {
  return null; // Можна показати спінер або індікатор завантаження
 }
 return (
  <Section>
   <Container>
    <PreTitle variant="primary" text={'Blog'} style={{ width: 119 }} />
    <h1>{post.title}</h1>
    <div>
     <button onClick={goBack}>Go back</button>
     <Image alt="Post" src={post.photoFull} />
     <PostContent>
      <PostData>{post.data}</PostData>
      <PostTitle>{post.title}</PostTitle>
      <PostText>{contentItems}</PostText>
      {post.list && <PostList>{listItems}</PostList>}
      {post.quote && (
       <PostQuote>
        <PostQuoteWrapp>
         <Quote />
        </PostQuoteWrapp>
        <PostQuoteText>{post.quote}</PostQuoteText>
       </PostQuote>
      )}
     </PostContent>
    </div>
    <Outlet />
   </Container>
  </Section>
 );
};

export default Post;
