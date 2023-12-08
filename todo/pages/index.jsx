import { MongoClient } from 'mongodb';

import Head from 'next/head';
import TodoList from '@/components/TodoList';
import { useEffect, useState } from 'react';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Simple Todo App</title>
        <meta name='description' content='Best Simple Todo App on the Earth' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='w-full flex flex-col items-center justify-center'>
        <TodoList todos={props.todos} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const todoCollections = db.collection('todos');
  const todos = await todoCollections.find().toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        id: todo._id.toString(),
        todo: todo.todo,
        completed: todo.completed,
      })),
    },
    revalidate: 1,
  };
}
