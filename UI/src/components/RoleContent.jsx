import React, { useContext, useMemo, useState } from "react";
import { useTable } from "react-table";
import { Overlay } from "./Overlay";
import CreateRoleModal from "./CreateRoleModal";
import { GlobalContext } from "./GlobalContextProvider";
import RolesTable from "./RolesTable";
const RoleContent = () => {
  const [overlay, setOverlay] = useState(false);
  const {inbuiltRolesData, customRolesData} = useContext(GlobalContext);
  const inbuiltData = useMemo(()=>inbuiltRolesData, [inbuiltRolesData])
  const customData = useMemo(()=>customRolesData, [customRolesData])
  function toggleOverlay() {
    console.log("overlay pressed!");
    setOverlay((prev) => !prev);
  }
  return (
    <div className="p-6">
      <RolesTable
        title="Custom Roles"
        data = {customData}
        hasCreateButton={true}
        toggleOverlay={toggleOverlay}
      />
     
      <RolesTable title="Inbuilt Roles" data = {inbuiltData}/>
      {overlay && 
      <div>
        <Overlay toggleOverlay={toggleOverlay} />
        <CreateRoleModal toggleOverlay={toggleOverlay}/>
      </div>
      }
      
    </div>
  );
};


export default RoleContent;
