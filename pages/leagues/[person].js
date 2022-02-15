const Person = ({ user }) => {
  return (
    <>
      <p>
        {user.name} of username <i>{user.username}</i> works with{' '}
        {user.company.name}{' '}
      </p>
    </>
  );
};
export default Person;
export const getStaticPaths = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await request.json();

  let paths = res.map((path) => {
    return { params: { person: `${path.id}` } };                                                                                                                                                                                                                                                                                                                                                                                                     
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.person}`
  );
  const res = await request.json();

  return {
    props: {
      user: res,
    },
  };
};
