import {useEffect, useState} from 'react';
import {Header} from '../Header';
import {Content} from '../Content';

interface Fruit {
  title: string;
  price: number;
}

export const Fruits = () => {
  const [openList, setOpenList] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [chosenFruit, setChosenFruit] = useState('');
  const [price, setPrice] = useState(0);
  const [labelPrice, setLabelPrice] = useState(false);
  const [list, setList] = useState<Fruit[]>([]);

  useEffect(() => {
    fetch('https://localhost:5173/fruits.json')
      .then((res) => res.json())
      .then((data) => {
        setList(data.fruits);
        console.log(`Data: ${data}`);
      })
      .catch((error) => console.error('Error fetching fruits:', error));
  }, []);

  const handleCheckboxClick = (title: string) => {
    if (chosenFruit === title) {
      setChosenFruit('');
      setLabelPrice(false);
    } else {
      setChosenFruit(title);
      setLabelPrice(true);
    }
  };

  const handleSetPrice = () => {
    if (chosenFruit && price !== 0) {
      const newList = list.map((item) => {
        if (item.title === chosenFruit) {
          return {...item, price: price};
        }
        return item;
      });
      setList(newList);
      setPrice(0);
    }
  };

  return (
    <div className='mt-10 w-80'>
      <Header
        openList={openList}
        setAllChecked={setAllChecked}
        allChecked={allChecked}
        setOpenList={setOpenList}
      />

      <Content
        allChecked={allChecked}
        chosenFruit={chosenFruit}
        handleCheckboxClick={handleCheckboxClick}
        handleSetPrice={handleSetPrice}
        labelPrice={labelPrice}
        list={list}
        openList={openList}
        setPrice={setPrice}
        setAllChecked={setAllChecked}
        setOpenList={setOpenList}
      />
    </div>
  );
};
