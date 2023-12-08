// import { MongoClient } from 'mongodb';

import Link from 'next/link';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';
import { GoCheckCircleFill, GoCheckCircle } from 'react-icons/go';

const TodoList = (props) => {
  // const removeTodo = async (id) => {
  //   try {
  //     const client = await MongoClient.connect(process.env.MONGO_URL);
  //     const db = client.db('todos');
  //     const todoCollections = db.collection('todos');

  //     await todoCollections.findOneAndDelete({ _id: id });
  //     client.close();
  //     alert('Todo deleted successfully!');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const markComplete = (id) => {
    console.log(id);
  };

  return (
    <>
      {props.todos.map((todo) => (
        <div
          key={todo.id}
          className='w-full p-4 border border-slate-300 my-3 flex justify-between gap-5 items-center'
        >
          <div className='flex items-center justify-center gap-2'>
            <button onClick={markComplete}>
              <GoCheckCircle className='text-white' size={24} />
            </button>
            <h2 className='font-bold text-2xl'>{todo.todo}</h2>
          </div>
          <div className='flex gap-2'>
            <button
            // onClick={removeTodo}
            >
              <HiOutlineTrash className='text-red-400' size={24} />
            </button>
            <Link href={`/edit-todo/${todo.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
