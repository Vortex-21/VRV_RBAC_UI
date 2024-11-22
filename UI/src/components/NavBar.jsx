import { useState } from "react";

export function NavBar() {
  return <div className="bg-[#181E23] h-fit text-white pl-2 pt-2">NavBar <Options/></div>;
}

function Options(){
    const [selected, setSelected] = useState("Workspace") // recoil optimisation would need a selector to avoid the render of all options whenever one option is selected . 
    function onClickHandler(optionName){
        setSelected(optionName)
    }
    return (
        <div className="flex mt-5  text-sm  border-b-white" id="options">
            <div className={`cursor-pointer  pb-5 mr-10 ${selected == 'Workspace' ? 'text-white border-b-blue-600 border-b-4':'text-gray-400'}`}  onClick={()=>{onClickHandler("Workspace")}}>Workspace</div>
            <div className={`cursor-pointer  pb-5 mr-10 ${selected == 'Members' ? 'text-white border-b-blue-600 border-b-4':'text-gray-400'}`} onClick={()=>{onClickHandler("Members")}}>Members</div>
            <div className={`cursor-pointer  pb-5 mr-10 ${selected == 'Roles' ? 'text-white border-b-blue-600 border-b-4':'text-gray-400'}`} onClick={()=>{onClickHandler("Roles")}}>Roles</div>
        </div>
    )
}