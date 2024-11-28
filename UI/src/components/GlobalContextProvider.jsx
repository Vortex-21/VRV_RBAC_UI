import React,{useState, createContext} from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
  const [selected, setSelected] = useState(null)
  const [workspaceName, setWorkspaceName] = useState("")
  const [pendingInvitesList, setPendingInvitesList] = useState([{ id: 1, email: "example@example.com", role: "Admin" },
    { id: 2, email: "user@example.com", role: "User" },])

  const [memberList, setMemberList] = useState([{ id: 1, email: "admin@example.com", role: "Admin" },
    { id: 2, email: "user@example.com", role: "User" },])

    
// const inbuiltRolesData = [
//   { id: 1, roleName: "Admin", permissions: "Full Access" },
//   { id: 2, roleName: "Editor", permissions: "Edit Content" },
//   { id: 3, roleName: "Viewer", permissions: "View Content Only" },
// ];

// const customRolesData = [
//   { id: 1, roleName: "Custom Admin", permissions: "Limited Admin Access" },
//   { id: 2, roleName: "Support", permissions: "Manage Support Tickets" },
// ];

  const [inbuiltRolesData, setInbuiltRolesData] = useState([{ id: 1, roleName: "Admin", permissions: ["permit1", "permit2", "permit3", "permit4", "permit5"] },
    { id: 2, roleName: "Editor", permissions: ["permit2"] },
    { id: 3, roleName: "Viewer", permissions: ["permit1"] }])

  const [customRolesData, setCustomRolesData] = useState([{ id: 1, roleName: "Custom Admin", permissions: ["permit1", "permit3"] },
    { id: 2, roleName: "Support", permissions: ["permit3"] }])

  return (

    
    <GlobalContext.Provider value={{customRolesData, setCustomRolesData, inbuiltRolesData, setInbuiltRolesData, selected, setSelected, workspaceName, setWorkspaceName, pendingInvitesList, setPendingInvitesList, memberList, setMemberList}}>
        {children}
    </GlobalContext.Provider>
  );
}
