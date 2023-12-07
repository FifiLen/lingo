import { Link } from "react-router-dom"

const AllUsers = () => {
  return (
    <div className=" flex flex-1">
      <div className=" common-container">
        <div className=" max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
          src="/assets/icons/rocket.svg" 
          width={36}
          height={36}
          alt="add" 
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Zadania</h2>
          <Link to={"/"}>
            <div className="w-64 p-4 border rounded-md">
              <p className="">Powrót do kokpitu →</p>
            </div>
          </Link>
        </div>



      {/*   <PostForm />*/}
      </div>
    </div>
  )
}

export default AllUsers