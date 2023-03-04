import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

function AddFloor() {
  const { propertyId } = useParams();

  const addFl = async () => {
    const docRef = await addDoc(
      collection(db, `Properties/${propertyId}/floors`),
      { Name: "Floor1" }
    );
    console.log(docRef.id);
  };

  return (
    <div>
      <button onClick={addFl}>Add</button>
    </div>
  );
}

export default AddFloor;
