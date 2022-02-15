import Link from 'next/link';
const Leagues = ({ users }) => {
  return (
    <div>
      {typeof users !== 'undefined'
        ? users.map((user) => {
            return (
              <div>
                <Link href={`/leagues/${user.id}`} passHref>
                  <a>{user.name}</a>
                </Link>
              </div>
            );
          })
        : 'Loading'}
    </div>
  );
};
export default Leagues;

export const getStaticProps = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await request.json();
  console.log(response);
  return {
    props: {
      users: response,
    },
  };
};
