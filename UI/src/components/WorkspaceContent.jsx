import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";

const WorkspaceContent = () => {

  // const [workspaceName, setWorkspaceName] = useState("");
  const {workspaceName, setWorkspaceName} = useContext(GlobalContext)
  function handleSubmit(e){
    e.preventDefault();
    console.log("API CALL for saving workspace name : ", workspaceName) // for the time being just storing it another state variable.

  }
  return (
    <>
    <form className="ml-4 mt-4" action="" onSubmit={handleSubmit}>
      <div className="">
        <Input legendName="Workspace" placeholder="Workspace Name" workspaceName={workspaceName} setWorkspaceName={setWorkspaceName}/>
        <Input legendName="Membership Role" value="Admin" />
        <Input legendName="Account Type" value="Free Tier" />
      </div>
      <button
        className="border-2 rounded-md px-4 py-2 hover:bg-[#005399]"
        type="Submit"
      >
        Save
      </button>
    </form>

    <hr className="mt-16 ml-4"/>

    <div className="ml-4">
      Space for Some more options
    </div>
    </>
  );
};

function Input({ legendName, placeholder, value, workspaceName, setWorkspaceName}) {
  // const [field, setField] = useState("");
  function handleChange(e){
    setWorkspaceName(e.target.value)
  }

  
  return (
    <fieldset className="border-[1px] w-12 px-4 rounded-[5px] mb-10">
      <legend className="px-1 -mx-1">{legendName}</legend>
      <div>
        <input
          className="bg-transparent focus:outline-none focus:border-none pb-1"
          placeholder={placeholder ? `${placeholder}` : ""}
          onChange={handleChange}
          value={value ? value : workspaceName}
        />
      </div>
    </fieldset>
  );
}

export default WorkspaceContent;
