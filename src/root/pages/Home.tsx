import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LiaBrainSolid } from "react-icons/lia";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SiStackblitz } from "react-icons/si";

const Home = () => {
  return (
    <div className=" ml-32 mt-20">
    <h1 className='font-semibold text-2xl p-4'>Witaj</h1>



  <div className='flex gap-8'>

      <div>
    <div className=' flex justify-normal items-center gap-4'>


    <div className="settings-display ml-4 p-4 h-28 border rounded-md w-64 mt-4">
      <IoSettingsOutline className='mb-4' />
      <p><span className="font-medium"></span></p>
      <div className='flex justify-between items-center'>
        <p><span className="font-medium"></span></p>
        {/* Przycisk do zmiany komponentu */}
        <button className="text-[12px] text-gray-400">
          Ustawienia →
        </button>
      </div>
    </div>

    <div className="settings-display ml-4 p-4 border rounded-md w-64 mt-4">
      <HiOutlineSpeakerWave className='mb-4' />
      <p className=' font-medium'>Ready?</p>
      <div className='flex justify-between items-center'>
        <p className=' font-medium'>Let's Talk</p>
        {/* Przycisk do zmiany komponentu */}
        <button className="text-[12px] text-gray-400">
          Let's Talk →
        </button>
      </div>
    </div>


    </div>

    <div className="settings-display ml-4 p-4 border rounded-md w-[544px] h-72 mt-8">
      <LiaBrainSolid className='mb-4' />
      <p className=' font-medium'>Gotowy na wyzwanie?</p>
      <div className='flex justify-between items-center'>
        <p className=' font-medium'>Sprawdź się w zadaniach</p>
        {/* Przycisk do zmiany komponentu */}
        <button className="text-[12px] text-gray-400">
          Zadania →
        </button>
      </div>
    </div>

    <div className="settings-display ml-4 p-4 border rounded-md w-[544px] mt-8">
      <IoHelpCircleOutline className='mb-4' />
      <div className='flex justify-between items-center'>
        <p className=' font-medium'>Potrzebna pomoc?</p>
        {/* Przycisk do zmiany komponentu */}
        <button className="text-[12px] text-gray-400">
          Zadania →
        </button>
      </div>
    </div>
    </div>


<div className="settings-display mr-4 p-4 border rounded-md w-[400px] h-[556px] mt-4">
      <SiStackblitz className='mb-4' />
      <p className=' font-medium'>Świetnie Ci idzie!</p>
      <div className='flex justify-between items-center'>
        <p className=' font-medium'>Tutaj możesz sprawdzić swój progres ↓</p>
      </div>
    </div>


    </div>

  </div>
);
};


export default Home