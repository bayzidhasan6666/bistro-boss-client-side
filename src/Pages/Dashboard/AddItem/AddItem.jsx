import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token);

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post('/menu', newItem).then((data) => {
            console.log('after posting new menu item', data.data);
            if(data.data.insertedId){
              reset()
              Swal.fire('Good job!', 'Item Added Successfully!', 'success');
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-2 md:px-10">
      <div>
        <Helmet>
          <title>Add Item| Bistro Boss</title>
        </Helmet>
        <SectionTitle
          subHeading={`---What's new?---`}
          heading={'ADD An ITEM'}
        ></SectionTitle>
        <label
          htmlFor="my-drawer-2"
          className="btn border-none hover:bg-teal-600 bg-teal-500 text-white rounded-none mb-5  w-fit mx-auto flex drawer-button lg:hidden"
        >
          Open Menu
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-serif font-semibold">
              Recipe Name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input rounded-lg border-teal-400 input-bordered w-full"
            {...register('name', { required: true, maxLength: 80 })}
          />
        </div>
        <div className="flex items-center gap-5 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-serif font-semibold">
                Category*
              </span>
            </label>
            <select
              defaultValue={`Pick One`}
              className="select rounded-lg border-teal-400 select-bordered"
              {...register('category', { required: true })}
            >
              <option disabled>Pick One</option>
              <option>Dessert</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Drink</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-serif font-semibold">
                Price*
              </span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input rounded-lg border-teal-400 input-bordered w-full"
              {...register('price', { required: true })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-serif font-semibold">
              Recipe Details*
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered rounded-lg border-teal-400 h-24"
            placeholder="Type here"
            {...register('recipe', { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-fit">
          <label className="label">
            <span className="label-text font-serif font-semibold">
              Upload Item Image*
            </span>
          </label>
          <input
            type="file"
            className="file-input rounded-lg border-teal-400 file-input-bordered w-full"
            {...register('image', { required: true })}
          />
        </div>
        <div className="btn btn-sm rounded mt-4 w-fit gap-1 bg-teal-500 hover:bg-teal-600 border-none text-white flex items-center">
          <input className="" type="submit" value={`Add Item`} name="" id="" />
          <FaUtensils></FaUtensils>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
