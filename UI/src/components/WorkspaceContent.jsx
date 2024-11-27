import React from "react";

const WorkspaceContent = () => {
  return (
    <div className="ml-4">
      
      <Input legendName="Workspace" placeholder="Workspace Name"/>
      <Input legendName="Membership Role" value="Admin"/>
      <Input legendName="Account Type" value="Free Tier"/>

      
    </div>
  );
};

function Input({legendName, placeholder, value}){
  return (
    <fieldset className="border-[1px] w-12 px-4 rounded-[5px] mb-10">
        <legend className="px-1 -mx-1">
          {legendName}
        </legend>
        <div>
        <input className="bg-transparent focus:outline-none focus:border-none pb-1" placeholder={placeholder ? `${placeholder}`:""} value={value?value:""}/>

        </div>
      </fieldset>
  )
}

export default WorkspaceContent;
