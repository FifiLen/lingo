
import { useUserContext } from '@/context/AuthContext'
import DashboardElements from "@/components/DashboardElements";


const Home = () => {
  const { user } = useUserContext();


  

  return (
    <div className=" flex flex-1">
      <div className="common-container">
        <div className=" max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
          src="/assets/icons/dashboard.svg" 
          width={36}
          height={36}
          alt="add" 
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Witaj, {user.username}</h2>
          
       </div>
       <DashboardElements />
     </div>
     
    </div>

  
    
    
  )
};


export default Home




{/* <div className=" flex-row gap-4">  


<div className="settings-display border rounded-md p-4">
  <img 
    src="/assets/icons/gear.svg" 
    width={26}
    height={26}
    alt="help" 
    className="mb-4"
  />
  
  <div className='flex justify-between items-center'>
    <p><span className="font-medium pr-12">Angielski A2</span></p>
    
    
    <Link to={'/saved'}>
      <button className="text-[12px] text-gray-400">
        Ustawienia →
      </button>
    </Link>
  </div>
</div>









</div>



</div>










<div className="p-4 border rounded-md mt-4">
<img 
src="/assets/icons/mix.svg" 
width={26}
height={26}
alt="help" 
className="mb-4"
/>

<div className='flex justify-between items-center'>
<p className='font-medium pr-12'>Let's Talk</p>


<button className="text-[12px] text-gray-400">
Let's Talk →
</button>
</div>
</div>

<div className="border rounded-md p-4">
<img 
src="/assets/icons/rocket.svg" 
width={26}
height={26}
alt="rocket"
className="mb-4" 
/>

<p className='font-medium'>Gotowy na wyzwanie?</p>

<div className='flex justify-between items-center'>
<p className='font-medium'>Sprawdź się w zadaniach</p>

<button className="text-[12px] text-gray-400">
Zadania →
</button>
</div>
</div>

<div className="border rounded-md p-4">
<img 
src="/assets/icons/question-mark-circled.svg" 
width={26}
height={26}
alt="help" 
className="mb-4"
/>

<div className='flex justify-between items-center'>
<p className='font-medium'>Potrzebna pomoc?</p>


<button className="text-[12px] text-gray-400">
Pomoc →
</button>
</div>
</div>
</div>
</div>
 */}
