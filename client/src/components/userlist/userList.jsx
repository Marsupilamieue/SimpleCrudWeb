import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

const Userlist = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showHome, setShowHome] = useState("");
  const [deleteuser, setDeleteUser] = useState(false);
  const [users, setUser] = useState([]);
  const idProductRef = useRef();

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/api/users/");
    setUser(response.data);
  };

  const deleteEvent = async (id) => {
    await setOpenModal(true);
    idProductRef.current = id;
  };

  const deleting = (async) => {
    setDeleteUser(true);
    deleteUser(idProductRef.current);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      getUsers();
      setDeleteUser(false);
      setOpenModal(false);
    } catch (e) {
      console.error(e.response.data);
    }
  };
  return (
    <div>
      <div className="flex flex-col m-4 font-bold">
        <h1 className="text-6xl m-4">Simple CRUD App</h1>
        <table className="table-auto rounded-md">
          <thead className="p-4 border border-blue-900">
            <tr className="m-4 font-bold">
              <th className="p-4 border border-blue-900">No</th>
              <th className="p-4 border border-blue-900">Username</th>
              <th className="p-4 border border-blue-900">Email</th>
              <th className="p-4 border border-blue-900">Status</th>
              <th className="p-4 border border-blue-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="p-4" key={user._id}>
                <td className="p-4 border border-blue-900">{index + 1}</td>
                <td className="p-4 border border-blue-900">{user.username}</td>
                <td className="p-4 border border-blue-900">{user.email}</td>
                <td className="p-4 border border-blue-900">{user.status}</td>
                <td className="p-4 border border-blue-900">
                  <Link to={`edit/${user._id}`}>
                    <button className=" text-white font-bold py-2 px-4 m-2  bg-blue-500  rounded-[10px] border-b-4 border-blue-700">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteEvent(user._id)}
                    className="text-white font-bold py-2 px-4 m-2  bg-red-500  rounded-[10px] border-b-4 border-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="add">
          <div className="grid grid-cols-1">
            <button className=" text-white justify-self-end w-[20%] p-3 m-4 font-bold bg-blue-500 rounded-[10px] border-b-4 border-blue-700">
              Add User
            </button>
          </div>
        </Link>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onDelete={deleting}
      />
    </div>
  );
};

export default Userlist;
