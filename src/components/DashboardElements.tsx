import { Link } from "react-router-dom"


const DashboardElements = () => {
  return (
    <><div className="max-w-5xl grid grid-cols-2 gap-4">

          <Link to={"/saved"}>
              <div className="p-4 border rounded-md">
                  <img
                      src="/assets/icons/gear.svg"
                      width={26}
                      height={26}
                      alt="settings" />
                  <p className=" mt-3 text-sm text-gray-400">Poziom</p>
                  <div className=" flex justify-between items-center gap-10">
                      <p className="font-medium">Angielski B2</p>
                      <p className="text-xs lg:text-sm text-primary-500">Ustawienia →</p>
                  </div>
              </div>
          </Link>



          <Link to={"/explore"}>
              <div className=" p-4 border rounded-md">
                  <img
                      src="/assets/icons/mix.svg"
                      width={26}
                      height={26}
                      alt="settings" />
                  <p className=" mt-3 text-sm text-gray-400">Ready?</p>
                  <div className=" flex justify-between items-center gap-10">
                      <p className="font-medium">Let's Talk</p>
                      <p className="text-xs lg:text-sm text-primary-500">Zacznij rozmowę →</p>
                  </div>
              </div>
          </Link>

      
      
      
      <Link to={"/all-users"} className="col-span-2">
              <div className=" p-4 border rounded-md">
                  <img
                      src="/assets/icons/rocket.svg"
                      width={26}
                      height={26}
                      alt="settings" />
                  <p className=" mt-3 text-sm text-gray-400">Zdobywaj punkty</p>
                  <div className=" flex justify-between items-center gap-10">
                      <p className="font-medium">Gotów na wyzwanie?</p>
                      <p className="text-xs lg:text-sm text-primary-500">Zadania →</p>
                  </div>
              </div>
          </Link>
          


          <Link to={"/all-users"} className="col-span-2">
              <div className="w-full  p-4 border rounded-md">
                  <img
                      src="/assets/icons/question-mark-circled.svg"
                      width={26}
                      height={26}
                      alt="settings" />
                  <p className=" mt-3 text-sm text-gray-400">Zabłądziłeś</p>
                  <div className=" flex justify-between items-center gap-10">
                      <p className="font-medium">Napotkałeś na problem?</p>
                      <p className="text-xs lg:text-sm text-primary-500">Pomoc →</p>
                  </div>
              </div>
          </Link>
          

          <div className="w-full p-4 border rounded-md col-span-2">
              <img
                  src="/assets/icons/lightning-bolt.svg"
                  width={26}
                  height={26}
                  alt="settings" />
              <p className=" mt-3 text-sm text-gray-400">Zadania, odbyte rozmowy, poziom języka</p>
              <div className=" flex items-center gap-10">
                  <p className="font-medium">Twój progres jest wazny, sprawdzisz go tutaj ↓</p>
              </div>
          </div>
          </div>
          </>

    
  )
}

export default DashboardElements