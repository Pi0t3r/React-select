import {useState} from 'react';
import {Fruits} from './Fruits/Fruits';
import {Vegetables} from './Vegetables/Vegetables';
import {Error} from './Error';

export const ListContainer = () => {
  const [food, setFood] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedFood = (e.currentTarget as HTMLFormElement).food.value;
    setFood(selectedFood);
    if (selectedFood === 'null') {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <label
          htmlFor='food'
          className='block text-sm font-medium text-gray-950'
        >
          Jedzenie
        </label>
        <select
          name='food'
          id='food'
          autoComplete='select-food'
          className='block rounded-md border-0 my-3 py-1.5 text-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
        >
          <option value='null'>Wybierz</option>
          <option value='fruits'>Owoce</option>
          <option value='vegetables'>Warzywa</option>
        </select>
        <input
          type='submit'
          value='Wyślij'
          className='bg-gray-950 text-slate-50 py-1.5 px-3 rounded-md'
        />
      </form>
      {error && <Error />}
      {food === 'fruits' && <Fruits />}
      {food === 'vegetables' && <Vegetables />}
    </>
  );
};
