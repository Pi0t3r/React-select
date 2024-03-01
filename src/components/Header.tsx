import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface iHeader {
  openList: boolean;
  setAllChecked: (value: boolean) => void;
  allChecked: boolean;
  setOpenList: (value: boolean) => void;
}

export const Header = ({
  openList,
  setAllChecked,
  allChecked,
  setOpenList,
}: iHeader) => {
  return (
    <div className='flex items-center justify-between'>
      <input
        type='checkbox'
        onChange={() => setAllChecked(!allChecked)}
        className={`appearance-none w-7 h-7 border-[1.5px] border-gray-300 rounded-md flex items-center justify-center ${
          allChecked ? 'bg-gray-950 checked' : ''
        }`}
      />
      <span>Owoce</span>
      <button
        onClick={() => setOpenList(!openList)}
        className={`transition duration-300 ease-in ${
          openList ? 'rotate-180' : ''
        }`}
      >
        <ExpandMoreIcon />
      </button>
    </div>
  );
};
