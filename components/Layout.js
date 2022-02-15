import Head from 'next/dist/shared/lib/head';

const Layout = ({ children }) => {
  <Head>
    <title>The next trial</title>
  </Head>;
  return (
    <div>
      <h1>This is the Layout page</h1>
      {children}
    </div>
  );
};
export default Layout;
