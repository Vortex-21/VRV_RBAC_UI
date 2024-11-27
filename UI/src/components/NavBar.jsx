import { useEffect, useRef, useState } from "react";

export function NavBar() {
  return (
    <div className="bg-[#181E23] h-fit text-white pl-2 pt-2">
      NavBar <Options />
    </div>
  );
}

function Options() {
  const workspaceRef = useRef("workspaceRef");
  const membersRef = useRef("membersRef");
  const rolesRef = useRef("rolesRef");
  const [selected, setSelected] = useState(workspaceRef); // recoil optimisation would need a selector to avoid the render of all options whenever one option is selected .

  const [width,setWidth] = useState(0)
  function onClickHandler(optionName) {
    if (optionName == "Workspace") {
      setSelected(workspaceRef);
      setWidth(()=>{return workspaceRef.current.getBoundingClientRect().x})
    } else if (optionName == "Members") {
      setSelected(membersRef);
      setWidth(()=>{return membersRef.current.getBoundingClientRect().x})

    } else if (optionName == "Roles") {
      setSelected(rolesRef);
      setWidth(()=>{return rolesRef.current.getBoundingClientRect().x})
    }
  }
  useEffect (() => {
    console.log("workspaceRef = ", workspaceRef);
    console.log("width : ", width);
    let rect = selected.current.getBoundingClientRect();
    console.log("rect : ", rect.x)
  }, [selected,width]);


  return (
    <div className="fixed">
      <div className="flex mt-5  text-sm  border-b-white" id="options">
        <div
          ref={workspaceRef}
          className={`cursor-pointer  pb-5 mr-10 ${selected == workspaceRef ? 'text-white':'text-gray-400'}`}
          onClick={() => {
            onClickHandler("Workspace");
          }}
        >
          Workspace
        </div>

        <div
          ref={membersRef}
          className={`cursor-pointer  pb-5 mr-10 ${selected == membersRef ? 'text-white':'text-gray-400'}`}
          onClick={() => {
            onClickHandler("Members");
          }}
        >
          Members
        </div>

        <div
          ref={rolesRef}
          className={`cursor-pointer  pb-5 mr-10 ${selected == rolesRef ? 'text-white':'text-gray-400'}`}
          onClick={() => {
            onClickHandler("Roles");
          }}
        >
          Roles
        </div>
      </div>
      <span
        className={`bg-[#38BDF8] absolute top-12  h-1 transition-all duration-300`}
        style={{width:`${selected.current.offsetWidth}px`, left:`${width-8}px`}}
        id=""
      ></span>
    </div>
  );
}
