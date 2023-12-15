import ChatAi from "@/components/ChatAi"
import { Link } from "react-router-dom"

const LetsTalk = () => {
  return (
    <div className=" flex flex-1">
      <div className=" common-container">
        <div className=" max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
          src="/assets/icons/mix.svg" 
          width={36}
          height={36}
          alt="help" 
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Let's Talk</h2>
          <Link to={"/"}>
            <div className=" p-2 lg:px-4 lg:py-2 border rounded-md">
              <p className="text-sm whitespace-nowrap">Powrót do kokpitu →</p>
            </div>
          </Link>
        </div>


       <ChatAi />
      {/*   <PostForm />*/}
      </div>
    </div>
  )
}

export default LetsTalk