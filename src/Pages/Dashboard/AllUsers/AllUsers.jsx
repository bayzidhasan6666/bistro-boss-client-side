import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an admin now!`);
        }
      });
  };

  const handleDelete = () => {
    '';
  };
  return (
    <>
      {' '}
      <Helmet>
        <title>All Users | Bistro Boss</title>
      </Helmet>
      <SectionTitle
        subHeading={'---Hurry Up!---'}
        heading={'MANAGE ALL USERS'}
      ></SectionTitle>
      <label
        htmlFor="my-drawer-2"
        className="btn border-none hover:bg-teal-600 bg-teal-500 text-black rounded-none mb-5  w-fit mx-auto flex drawer-button lg:hidden"
      >
        Open Menu
      </label>
      <div>
        <h1 className="font-serif text-xl">Total Users : {users.length}</h1>
      </div>
      {/* Table -------------- */}
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users.map(
                (user, index) => (
                  console.log(user),
                  (
                    <tr key={user._id}>
                      <th>
                        <label>{index + 1}</label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={
                                  user.photoUrl
                                    ? user.photoUrl
                                    : 'https://e0.pxfuel.com/wallpapers/355/72/desktop-wallpaper-cartoon-boy-full-iphone-2020-cute-cartoon-boy-thumbnail.jpg'
                                }
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <th>
                        {user.role === 'admin' ? (
                          'admin'
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="p-2 rounded bg-teal-500 text-white hover:bg-teal-600"
                          >
                            <FaUserShield></FaUserShield>
                          </button>
                        )}
                      </th>
                      <th>
                        <button
                          onClick={() => handleDelete(user)}
                          className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                        >
                          <FaTrash />
                        </button>
                      </th>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default AllUsers;
