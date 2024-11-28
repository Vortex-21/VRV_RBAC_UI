import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContextProvider';
function InviteeInputModal({ toggleOverlay }) {
    const { setMemberList } = useContext(GlobalContext);
    const [inviteeEmail, setInviteeEmail] = useState("");
    const [inviteeRole, setInviteeRole] = useState("guest"); // by default guest role
  
    function handleInviteeEmailChange(e) {
      setInviteeEmail(e.target.value);
    }
  
    function handleInviteeRoleChange(e) {
      setInviteeRole(e.target.value);
    }
  
    function handleInvite(e) {
      e.preventDefault();
      // Call API to send an email 
      toggleOverlay();
      // Considering invitation is accepted 
      setMemberList((prev) => {
        return [...prev, { id: prev.length + 1, email: inviteeEmail, role: inviteeRole }];
      });
    }
  
    return (
      <div className="z-40 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#21272C] border border-gray-700 shadow-lg rounded-lg p-8 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white text-center">
            Invite a New Member
          </h2>
          {/* Close Button */}
          <button
            onClick={toggleOverlay}
            className="text-gray-300 hover:text-white bg-transparent rounded-md focus:outline-none"
            aria-label="Close Modal"
          >
            ✕
          </button>
        </div>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">
              Invitee Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter invitee's email"
              className="rounded-md p-2 bg-[#2B2F3A] text-gray-100 border border-gray-600 focus:ring-2 focus:ring-[#005399] focus:outline-none"
              value={inviteeEmail}
              onChange={handleInviteeEmailChange}
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="role" className="text-gray-300 mb-2">
              Role
            </label>
            <input
              id="role"
              type="text"
              placeholder="Enter invitee's role"
              className="rounded-md p-2 bg-[#2B2F3A] text-gray-100 border border-gray-600 focus:ring-2 focus:ring-[#005399] focus:outline-none"
              onChange={handleInviteeRoleChange}
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-[#005399] hover:bg-[#0066cc] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#005399]"
            onClick={handleInvite}
          >
            Send Invite
          </button>
        </form>
      </div>
    );
  }

export default InviteeInputModal