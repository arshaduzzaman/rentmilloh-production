import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, getFloors } from "../../firebase";

function ViewFloors() {
  const { propertyId } = useParams();
  const [floors, setFloors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFloors(propertyId, setFloors);
  }, []);

  return (
    <>
      {floors.map((p) => {
        return (
          <p
            onClick={() => {
              navigate(`/properties/${p}/floors`);
            }}
            key={p}
          >
            {p}
          </p>
        );
      })}
    </>
  );
}

export default ViewFloors;
