import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home = ({ testMessage, todo, query }) => {
  const { id, title } = todo;

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const sub = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await pupupu(2);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>{testMessage}</h1>
        <p>query {JSON.stringify(query)}</p>
        <p>
          {id} - {title}
        </p>

        <p>counter</p>
        <p>{counter}</p>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </div>
  );
};

const pupupu = async (id = 1) => {
  const todoDataResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todoData = await todoDataResponse.json();
  return todoData;
};

// This gets called on every request
export async function getServerSideProps(context) {
  const todo = await pupupu();

  console.log('olocooo', todo);
  console.log('context', context.query);

  // Pass data to the page via props
  return {
    props: {
      testMessage: 'Testando a coisa',
      todo,
      query: context.query,
    },
  };
}

export default Home;
