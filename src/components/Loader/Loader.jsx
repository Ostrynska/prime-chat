import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
 return (
  <ThreeDots
   height="80"
   width="80"
   radius="9"
   color="#625ffb"
   ariaLabel="three-dots-loading"
   wrapperStyle={{
    marginTop: 135,
    marginBottom: 135,
    display: 'flex',
    justifyContent: 'center',
   }}
   wrapperClassName=""
   visible={true}
  />
 );
};
