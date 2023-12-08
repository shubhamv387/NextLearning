import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const TodoForm = () => {
  const router = useRouter();
  const { edit, todoId } = router.query;
  const [todoInput, setTodoInput] = useState('');
  const todoInputRef = useRef();
  // console.log(edit, todoId);

  useEffect(() => {
    if (edit) {
      setTodoInput('google is my best friend!');
    }
    todoInputRef.current.focus();
  }, []);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const enteredTodo = todoInput.trim();
    if (enteredTodo.length < 1) alert('todo required!');
    if (edit) {
      console.log('editing todo');
    } else {
      try {
        const { data } = await axios.post('/api/new-todo', {
          todo: enteredTodo,
        });
        setTodoInput('');
        alert(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='mx-auto mt-8 w-full'>
      <form className='sm:flex sm:gap-4'>
        <div className='sm:flex-1'>
          <input
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
            ref={todoInputRef}
            required
            type='text'
            placeholder='Add todo here...'
            className='w-full rounded-md ring-1 ring-gray-300 bg-transparent p-3 py-2 shadow-sm transition focus:border-none focus:outline-none focus:ring focus:ring-white'
          />
        </div>

        <button
          onClick={submitFormHandler}
          type='submit'
          className='group mt-4 w-full rounded-md bg-blue-700 px-5 py-2 ring-1 ring-blue-700 text-white transition hover:bg-blue-600 focus:outline-none sm:mt-0 sm:w-auto'
        >
          <span className='text-sm font-medium'>
            {!edit ? 'Add Todo' : 'Update Todo'}
          </span>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;