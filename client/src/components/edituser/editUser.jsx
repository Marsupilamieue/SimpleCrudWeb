import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Edituser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("mahasiswa");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/api/users/${id}`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setStatus(response.data.status);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/users/${id}`, {
        username,
        email,
        status,
      });
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="mt-[40px] text-white w-[50%]">
      <div className="p-5">
        <h1 className="text-7xl my-4 font-bold w-auto">Update User</h1>
        <form onSubmit={updateUser}>
          <div className="rounded-[20px] border border-blue-700 col-start-2 col-span-2 row-start-2 p-4 mt-9">
            <div className="flex flex-col p-2 mt-4 mb-9">
              <label className="font-bold text-2xl">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-4 my-4 text-white bg-black border border-blue-500 rounded-[10px]"
              />
              <label className="font-bold text-2xl">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 my-4 text-white bg-black border border-blue-500 rounded-[10px]"
              />
              <label className="font-bold text-2xl">Status</label>
              <div className="mt-4 w-full">
                <select
                  className="bg-black h-[70px] w-full border p-2 border-blue-500 rounded-[10px]"
                  name=""
                  id=""
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option className="" value="dosen">
                    Dosen
                  </option>
                  <option className="" value="mahasiwa">
                    Mahasiswa
                  </option>
                </select>
              </div>
            </div>
            <div>
              <div className="p-4">
                <button
                  className="bg-blue-500 text-white w-auto h-auto rounded-[20px] px-5 py-4 font-bold border-b-4 border-blue-700"
                  type="submit"
                >
                  Update User
                </button>
                <Link to="/">
                  <button
                    className="bg-red-500 mx-4 text-white w-auto h-auto rounded-[20px] px-5 py-4 font-bold border-b-4 border-red-700"
                    type="submit"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edituser;
