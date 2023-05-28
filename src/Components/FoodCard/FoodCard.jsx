import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch(`http://localhost:5000/carts`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire('Successful!', 'Food Added Successfully!', 'success');
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login To add to cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <div className="relative text-center h-96 space-y-3 mx-auto bg-[#F3F3F3]">
      <img
        className="w-full h-52 object-cover"
        src={
          'https://images.squarespace-cdn.com/content/v1/56905b11df40f361d6e8f5ee/760cdf39-d92c-4c99-baa5-2153f7e4e03e/Janet-Kwan_Maru-Bistro-2022-9.jpg'
        }
        alt=""
      />
      <div className="p-5 flex flex-col justify-between h-2/5">
        <div>
          <h2 className="text-xl font-serif">{name}</h2>
          <p className="text-sm">{recipe}</p>
          <p className="bg-slate-900 w-fit px-3 text-yellow-400 absolute top-0 right-0">
            ${price}
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(item)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase text-sm font-serif text-[#BB8506] shadow-xl border-b-4 hover:bg-[#111827] rounded-lg border-[#BB8506] px-3 py-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
