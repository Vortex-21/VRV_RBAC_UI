import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContextProvider';
import { useMemo } from "react";
import { useTable } from "react-table";
function RolesTable({ title, data, hasCreateButton, toggleOverlay }) {
  
    const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Role Name",
          accessor: "roleName",
        },
        {
          Header: "Permissions",
          accessor: "permissions",
          Cell: ({ value }) => Array.isArray(value) ? value.join(", ") : "No Permissions",
        },
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
  
    function handleCreateRole() {
      console.log("Create New Role button clicked!");
      // Logic for creating a new role (popup/modal or redirect)
      toggleOverlay();
    }
  
    return (
      <div className="overflow-x-auto mb-8">
        <div className="flex">
          <h1 className="text-white text-2xl font-semibold mb-4">{title}</h1>
          {hasCreateButton && (
            <button
              className="border-2 rounded-md ml-auto mb-4 p-4 hover:bg-[#005399]"
              onClick={handleCreateRole}
            >
              Create New Role
            </button>
          )}
        </div>
        <table
          {...getTableProps()}
          className="min-w-full table-auto border-collapse border border-gray-700"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
                className="bg-gray-800"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="text-left text-gray-300 px-6 py-3 border-b border-gray-700"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="hover:bg-gray-700 even:bg-gray-900"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="text-gray-300 px-6 py-4 border-b border-gray-700"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default RolesTable