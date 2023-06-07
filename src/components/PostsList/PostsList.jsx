import { Link, useLocation } from 'react-router-dom';

const PostList = ({ items = [] }) => {
 const location = useLocation();

 const posts = items.map(({ id, title, preview, photoPreview, data }) => (
  <li key={id}>
   <img alt="Post preview" src={photoPreview} />
   <p>{data}</p>
   <h2>{title}</h2>
   <p>{preview}</p>
   <Link to={`/posts/${id}`} state={{ from: location }}>
    <p>Read More</p>
   </Link>
  </li>
 ));

 return <ul>{posts}</ul>;
};

export default PostList;
