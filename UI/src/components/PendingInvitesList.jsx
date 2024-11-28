import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContextProvider';
import { useMemo } from "react";
import { useTable } from "react-table";
function PendingInvitesList({ toggleOverlay }) {
    // function toggleOverlay(){
    //   //pop up to collect email and role for the invitee
    //   setOverlay(prev => !prev);
    // }
    const { pendingInvitesList } = useContext(GlobalContext);
  
    const data = useMemo(() => pendingInvitesList || [], [pendingInvitesList]);
    const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Role",
          accessor: "role",
        },
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
  
    return (
      <div className="overflow-x-auto mb-24">
        <div className="flex">
          <h1 className="text-white text-2xl font-semibold mb-4">
            Pending Invites
          </h1>
          <button
            className="border-2 rounded-md ml-auto mb-4 p-4 hover:bg-[#005399]"
            onClick={toggleOverlay}
          >
            Invite Member
          </button>
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
                  className="hover:bg-gray-700 even:bg-gray-900"
                  key={row.id}
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

export default PendingInvitesList