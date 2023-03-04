import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";

function ViewFloors() {
  const { propertyId } = useParams();
  const [floors, setFloors] = useState([]);

  const navigate = useNavigate();

  const getFloor = async () => {
    const docRef = await getDocs(
      collection(db, `Properties/${propertyId}/floors`)
    );
    docRef.forEach((doc) => {
      console.log(doc.id);
      setFloors((prev) => {
        return [...prev, doc.id];
      });
    });
  };

  useEffect(() => {
    getFloor();
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
