import { Link, useLocation } from 'react-router-dom';

import {
 List,
 Item,
 Image,
 ItemContent,
 ItemDate,
 ItemTitle,
 ItemText,
 LinkContent,
 LinkText,
 Arrow,
} from './PostsList.styled';

const PostList = ({ items = [] }) => {
 const location = useLocation();

 const posts = items.map(({ _id, title, preview, photoPreview, data }) => (
  <Item key={_id}>
   <Image alt="Post preview" src={photoPreview} />
   <ItemContent>
    <ItemDate>{data}</ItemDate>
    <ItemTitle>{title}</ItemTitle>
    <ItemText>{preview}</ItemText>
    <Link to={`/blog/${_id}`} state={{ from: location }}>
     <LinkContent>
      <LinkText>Read More</LinkText>
      <Arrow size={25} />
     </LinkContent>
    </Link>
   </ItemContent>
  </Item>
 ));

 return <List>{posts}</List>;
};

export default PostList;
