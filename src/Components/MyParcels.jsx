import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

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
  return (
    <div>
      <h2>This is My Parcels {parcels.length}</h2>
    </div>
  );
};

export default MyParcels;
