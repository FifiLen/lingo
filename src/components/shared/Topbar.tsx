import { Link, useNavigate } from 'react-router-dom'
//import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext'


{/*mutate: signOut, to powinno być w isSucces*/}
const Topbar = () => {
    const { isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();


    useEffect(() => {
        if (isSuccess) navigate(0);
               
    }, [isSuccess])

  return (
    <section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to='/' className='flex gap-3 items-center'>
                <img src="/assets/images/Loggo.svg" alt="logo" width={130} height={325} />
            </Link>

            <div className='flex gap-4'>
                <Link to={`/profile/${user.id}`} className='flex-center gap-3'>
                    <img src={user.imageUrl || '/assets/images/profile-placeholder.svg'} alt="profile" className='h-8 w-8 rounded-full' />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Topbar