import React, { useContext } from "react"
import WorkspaceContent from "./WorkspaceContent"
import MembersContent from "./MembersContent";
import RoleContent from "./RoleContent";
import { GlobalContext } from "./GlobalContextProvider";
export function ContentScreen(){
  const {selected} = useContext(GlobalContext);
    return (
      <div className="bg-[#21272C] text-white flex-1">
         {((!selected) || (selected.current.id == "workspace")) && <WorkspaceContent/>}
         {selected?.current.id == "members" && <MembersContent/>}
         {selected?.current.id == "roles" && <RoleContent/>}
      </div>
    )
}

