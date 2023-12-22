import { Swords } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='h-full flex items-center'>
      <div className='h-[90%] bg-[#151414] w-60 rounded-lg ml-12 border border-neutral-500'>
        <div className='flex flex-col justify-between items-center'>
          <div className='flex text-white pt-4 gap-x-4'>
            <Swords />
            Name
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
