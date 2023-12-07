import { Link } from "react-router-dom"

const Settings = () => {
  return (
    <div className=" flex flex-1">
      <div className=" common-container">
        <div className=" max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
          src="/assets/icons/gear.svg" 
          width={36}
          height={36}
          alt="help" 
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Ustawienia</h2>
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

export default Settings