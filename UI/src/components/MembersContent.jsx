import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";

import { Overlay } from "./Overlay";
import InviteeInputModal from "./InviteeInputModal";
import PendingInvitesList from "./PendingInvitesList";
import MembersList from "./MembersList";
const MembersContent = () => {
  const [overlay, setOverlay] = useState(false);
  function toggleOverlay() {
    console.log("overlay pressed!");
    setOverlay((prev) => !prev);
  }
  return (
    <div className="p-6">
      <PendingInvitesList toggleOverlay={toggleOverlay} />
      <hr className="mb-12 bg-[#21272C]"/>
      <MembersList toggleOverlay={toggleOverlay} />
      {overlay && (
        <div>
          <Overlay toggleOverlay={toggleOverlay} />
          <InviteeInputModal toggleOverlay={toggleOverlay}/>
        </div>
      )}
    </div>
  );
};




 
  








export default MembersContent;
