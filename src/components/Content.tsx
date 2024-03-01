import {iHeader} from './Header';
interface iContent extends iHeader {
  chosenFruit: string;
  labelPrice: boolean;
  setPrice: (value: number) => void;
  handleSetPrice: () => void;
  handleCheckboxClick: (value: string) => void;
  list: {
    title: string;
    price: number;
  }[];
}
export const Content = ({
  openList,
  list,
  chosenFruit,
  handleCheckboxClick,
  allChecked,
  labelPrice,
  setPrice,
  handleSetPrice,
}: iContent) => {
  return (
    <>
      {openList && (
        <div className='mt-5 w-3/4 mx-auto'>
          <ul className='leading-10'>
            {list.map((item, index) => (
              <li
                key={index}
                className='border-b-[1px] border-b-gray-500 flex items-center justify-between'
              >
                <div className='flex items-center'>
                  <input
                    checked={chosenFruit === item.title}
                    type='checkbox'
                    onClick={() => handleCheckboxClick(item.title)}
                    className={`appearance-none flex items-center justify-center w-7 h-7 rounded-md border-[1.5px] border-gray-300 ${
                      chosenFruit === item.title
                        ? 'bg-gray-950 checked'
                        : allChecked
                        ? 'bg-gray-950 checked'
                        : ''
                    }`}
                  />
                  <span className='ml-5'>{item.title}</span>
                </div>
                <span className='mr-10'>
                  {item.price === 0 ? '' : item.price}
                </span>
              </li>
            ))}
          </ul>
          {labelPrice && (
            <div className='mt-10'>
              <span>{chosenFruit}</span>
              <input
                type='text'
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder='Cena'
                className='border-[1px] border-gray-300 mb-5 p-2 rounded-lg'
              />
              <input
                type='submit'
                value='Dodaj cenę'
                onClick={handleSetPrice}
                className='bg-gray-950 text-slate-50 py-1.5 px-3 rounded-md'
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
