import TodoForm from '@/components/TodoForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const EditTodoForm = () => {
  const router = useRouter();
  const { edit, todoId } = router.query;

  return (
    <>
      <Head>
        <title>Edit Todo</title>
        <meta name='description' content='Edit todo here' />
      </Head>

      <section className='w-full flex flex-col items-center justify-center mt-3'>
        {edit ? (
          <>
            <h1 className='text-3xl font-bold'>Update todo</h1>
            <TodoForm />
          </>
        ) : (
          <h1>Todo ID: {todoId}</h1>
        )}
      </section>
    </>
  );
};

export default EditTodoForm;
