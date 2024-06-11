import React, { useEffect } from 'react';
import { ImSad, ImWink, ImConfused } from "react-icons/im";

const Prompt = ({ title, message, visible, onClose, showButton, icon }) => {
    const buttonStat = showButton == undefined ? true : false;
    let ico = ''
    if(icon == 'success'){
        ico = <ImWink />
    }else if(icon == 'error'){
        ico = <ImSad />
    }else if(icon == 'question'){
        ico = <ImConfused />
    }

    useEffect(() => {
        if(buttonStat == false){
            if (visible) {
              const timer = setTimeout(onClose, 3000);
              return () => clearTimeout(timer)
            }
        }
      }, [visible, onClose]);
    
    if (!visible) return null;


    return(
        <div className="fixed bg-black z-50 bg-opacity-50 inset-0 left-0 flex justify-center items-center">
            <div class="px-8 text-black py-4 rounded-xl bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center w-max">
                <div>
                    <div className='text-center text-6xl font-bold flex justify-center my-8 animate-bounce'>
                        {ico}
                    </div>
                    <h1 className='text-center font-bold text-2xl capitalize'>{title}</h1>
                    <h1 class="text-lg mb-4" dangerouslySetInnerHTML={{__html: message}}></h1>
                    {buttonStat == true ? 
                        <div class="flex justify-end w-full">
                            <button
                                class="h-12 border-black font-bold border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-lg"
                                onClick={onClose}
                            >
                            OK
                            </button>
                        </div>
                    : ''}
                </div>
            </div>
        </div>
    )
}

export default Prompt