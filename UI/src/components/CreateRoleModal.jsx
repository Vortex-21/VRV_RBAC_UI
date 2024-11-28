import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";

const CreateRoleModal = ({ toggleOverlay }) => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const {setCustomRolesData} = useContext(GlobalContext)
  const [permissions, setPermissions] = useState({
    permit1: false,
    permit2: false,
    permit3: false,
    permit4: false,
    permit5: false,
  });

  const handleTogglePermission = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    // e.preventDefault();
    // console.log("Role Name:", roleName);
    // console.log("Role Description:", roleDescription);
    // console.log("Selected Permissions:", permissions);
    
    // toggleOverlay(); 
    //API to save the new role. for now just adding it to a state variable . Otherwise would have fetched it from the DB . 
    // API to save the new role. for now just adding it to a state variable. Otherwise would have fetched it from the DB. 
    toggleOverlay(); 
    setCustomRolesData((prev)=>{
        let newArr =  [...prev, {id: prev.length, roleName: roleName, permissions: Object.keys(permissions).filter(key => permissions[key])}]
        console.log("newArr : ", newArr)
        return newArr;
    })

  };
//   const { setCustomRolesData} = useContext(GlobalContext)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#21272C] rounded-lg shadow-lg w-[90%] max-w-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Create Custom Role</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Name */}
            <div>
              <label htmlFor="roleName" className="block text-gray-300 mb-2">
                Role Name
              </label>
              <input
                type="text"
                id="roleName"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="Enter role name"
                className="w-full p-2 rounded-md bg-[#2C3338] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Role Description */}
            <div>
              <label htmlFor="roleDescription" className="block text-gray-300 mb-2">
                Role Description
              </label>
              <textarea
                id="roleDescription"
                value={roleDescription}
                onChange={(e) => setRoleDescription(e.target.value)}
                placeholder="Enter role description"
                className="w-full p-2 rounded-md bg-[#2C3338] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

            {/* Permissions */}
            <div>
              <h3 className="text-gray-300 mb-2">Permissions</h3>
              <div className="max-h-40 overflow-y-auto bg-[#2C3338] p-4 rounded-md">
                {Object.keys(permissions).map((permission) => (
                  <div key={permission} className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">{permission}</span>
                    <button
                      type="button"
                      onClick={() => handleTogglePermission(permission)}
                      className={`w-10 h-5 rounded-full flex items-center ${
                        permissions[permission] ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                          permissions[permission] ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleOverlay}
                className="mr-4 px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                
              >
                Create Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRoleModal;
