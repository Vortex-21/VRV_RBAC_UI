# React Workspace Management

This project is a workspace management application built with React and Vite. It allows workspace admins to manage settings, users, and roles, providing a seamless interface for handling members and their permissions.

## Features

1. **Workspace Settings**: Configure settings for your workspace such as notifications, branding, etc.
2. **Member Management**: Invite new members, assign them roles, and manage member details.
3. **Roles Management**: Define and manage roles with specific permissions for users within the workspace.

## Project Setup

To set up the project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Vortex-21/VRV_RBAC_UI.git
cd VRV_RBAC_UI
```
### 2. Install dependencies

Run the following command to install the project dependencies:

```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```

### Screens

1. **Workspace Settings**  
   This screen allows admins to configure workspace-wide settings. It may include options like customizing workspace branding, setting up notification preferences, and managing other configurations.

2. **Member Management**  
   This screen helps manage workspace members. Admins can invite new members by email, assign roles (like guest, member, or admin), and update member details. It supports dynamic updates as members are added or roles are modified.

3. **Roles Management**  
   This screen is used to manage user roles within the workspace. Admins can create custom roles with specific permissions or use predefined inbuilt roles like Admin or Editor. Permissions are toggleable and are associated with each role.

