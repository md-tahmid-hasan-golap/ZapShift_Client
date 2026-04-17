import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="shadow-2xl rounded-lg max-w-6xl mx-auto p-5 my-10">
      {/* text layout */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold  mb-8   pb-2">
          Send A Parcel
        </h2>
        <h5 className="text-base sm:text-lg md:text-xl font-medium  mb-6">
          Enter your parcel details
        </h5>
        <p className="border border-gray-300"></p>
      </div>

      {/* form layout */}

      <form onSubmit={handleSubmit(handelSendParcel)}>
        {/* parcel type */}
        <div className="mt-5">
          <label className="label mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name, wight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>

        {/* two coloum */}
        <div>
          {/* sender info */}
          <div></div>
          {/* recever info */}
          <div></div>
        </div>
        <button type="submit" className="btn bg-[#D4EF82] mt-7">
          Send A Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
