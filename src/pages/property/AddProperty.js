import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";

function AddProperty() {
  const addProp = async () => {
    const docRef = await addDoc(collection(db, "Properties"), { Name: "NEN" });
    console.log(docRef.id);
  };

  return (
    <div>
      <button onClick={addProp}>Add</button>
    </div>
  );
}

export default AddProperty;
