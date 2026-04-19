import React from "react";
import { set, useForm, Watch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const ServiceCenters = useLoaderData();
  // console.log(ServiceCenters);
  const regisonsDuplicate = ServiceCenters.map((c) => c.region);
  // console.log(regisonsDuplicate);
  const regions = [...new Set(regisonsDuplicate)];
  const senderRegion = watch("senderRegion");
  const receverRegion = watch("receiverRegion");
  console.log(receverRegion);
  // console.log(regions);
  const districkByRigion = (region) => {
    const rigionDistric = ServiceCenters.filter((c) => c.region === region);
    const Driests = rigionDistric.map((d) => d.district);
    return Driests;
  };
  const handelSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistric = data.senderDistrict === data.receiverDistrict;
    const parselWigth = parseFloat(data.parcelWeight);
    console.log(isSameDistric);
    console.log(data);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistric ? 60 : 80;
    } else {
      if (parselWigth < 3) {
        cost = isSameDistric ? 110 : 150;
      } else {
        const minCharge = isSameDistric ? 110 : 150;
        const extraWight = parselWigth - 3;
        const extraCharge = isSameDistric
          ? extraWight * 40
          : extraWight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    Swal.fire({
      title: "Please Confirm The Price?",
      text: ` You will be Chargedis1 ${cost} Taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree !",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
    });
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
        <p className="border border-gray-300 mt-7"></p>
        {/* two coloum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
          {/* sender info */}
          <div>
            <h2 className="text-xl font-bold">Sender Details</h2>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender Email"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a regions"
                className="select w-full"
              >
                <option disabled={true}>Pick a Regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districkByRigion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Contact No</label>
              <input
                type="number"
                {...register("senderContactNo")}
                className="input w-full"
                placeholder="Sender Contact No"
              />
            </fieldset>
          </div>
          {/* recever info */}
          <div>
            <h2 className="text-xl font-bold">Receiver Details</h2>
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a regions"
                className="select w-full"
              >
                <option disabled={true}>Pick a Regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver Distric */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districkByRigion(receverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver Contact No</label>
              <input
                type="number"
                {...register("receiverContactNo")}
                className="input w-full"
                placeholder="Receiver Contact No"
              />
            </fieldset>
          </div>
        </div>
        <button type="submit" className="btn bg-[#D4EF82] mt-7">
          Send A Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
