import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  // handleDelete
  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Failed to delete item');
            }
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your Item has been deleted.', 'success');
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              'Error',
              'Failed to delete the item. Please try again.',
              'error'
            );
          });
      }
    });
  };

  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <>
      <Helmet>
        <title>My Cart | Bistro Boss</title>
      </Helmet>
      <SectionTitle
        subHeading={'---My Cart---'}
        heading={'Wanna Add More?'}
      ></SectionTitle>
      <label
        htmlFor="my-drawer-2"
        className="btn border-none hover:bg-teal-600 bg-teal-500 text-black rounded-none mb-5  w-fit mx-auto flex drawer-button lg:hidden"
      >
        Open Menu
      </label>
      <div className="max-w-2xl lg:max-w-5xl lg:ml-10 mx-auto bg-white p-5">
        <div className="flex justify-between font-semibold gap-10 text-2xl mb-5 items-center">
          <h1>Total Items: {cart.length}</h1>
          <h1>Total Price: ${total}</h1>
          <button className="bg-teal-500 w-fit px-3 py-2 rounded">Pay</button>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <p>{index + 1}</p>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
