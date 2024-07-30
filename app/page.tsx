import { headers } from 'next/headers';
import Landing from './(pages)/landing/page';

const Home = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return (
    <>
      <Landing isMobile={isMobile} />
      
    </>
  );
};

export default Home;