import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoMdClose } from "react-icons/io";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen  ">
      <div className="h-full border rounded-xl shadow">
        {/* <div className="flex justify-between p-4 items-center h-24 bg-gray-400 max-w-full w-full">
          <div className="flex justify-center max-w-[7xl] w-full font- ">Help Bot</div>
          <IoMdClose className="text-lg" />
        </div> */}
        <div className="h-[40rem] bg-gray-100">
          <div className=" flex flex-row p-8 gap-4 max-w-[700px] max-h-screen "> 
             <div className="rounded-2xl bg-white w-full max-w-8 h-8  "></div>
             <div className=" border rounded-b-lg rounded-tr-lg h-full min-h-[100px] w-auto  bg-white p-2 mx-2">Hsey, I'm chat bot what do you want me to do? Hey, I'm chat bot what do you want me to do? Hey, I'm chat bot what do you want me to do? Hey, I'm chat bot what do you want me to do? Hey, I'm chat bot what do you want me to do? Hey, I'm chat bot what do you want me to do?dsdsdadadsadsadsadsadsadadsadadadsdadadsadadsadadadsadad dsdsdsdsdddddsadasdsadsadsdsadasdsadsadsaddsadsdsadsaddddddsddddd</div>
          </div>
          <div className="w-full flex justify-end p-4 ">
             <div className=" border rounded-b-lg rounded-tl-lg h-full max-h-auto w-full max-w-[15rem] p-2 bg-blue-500 text-white ">dsasssssssssssssssddsads</div>
          </div>
        </div>
        <form>
          <div class="flex items-center px-3 py-2    ">
            <textarea
              id="chat"
              rows="3"
              class="mx-4  w-full text-sm text-gray-900 bg-white outline-none  h-auto  "
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
              class="inline-flex justify-center p-2  cursor-pointer "
            >
              <svg
                class="w-5 h-5 rotate-90 rtl:-rotate-90 mb-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span class="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
{
  /* <IoMdClose /> */
}
