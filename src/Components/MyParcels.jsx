import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline, MdPageview } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const MyParcels = () => {
  const { user } = useContext(AuthContext);
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/Parcels/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setParcels(data);
      });
  }, [user?.email]);

  const handelParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/parcelDelete/${id}`).then((res) => {
          if (res.data.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).catch((error) => {
              console.log(error);
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2>This is My Parcels {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>Blue</td>
                <td className="flex  items-center gap-2">
                  <button className="btn btn-square">
                    <MdPageview size={20} />
                  </button>
                  <button className="btn btn-square">
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handelParcelDelete(parcel._id)}
                    className="btn btn-square"
                  >
                    <MdOutlineDeleteOutline size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
