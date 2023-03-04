import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ViewProperties() {
  const [props, setProps] = useState([]);
  const navigate = useNavigate();

  const getProps = async () => {
    const docRef = await getDocs(collection(db, "Properties"));
    docRef.forEach((doc) => {
      console.log(doc.id);
      setProps((prev) => {
        return [...prev, doc.id];
      });
    });
  };

  useEffect(() => {
    getProps();
  }, []);

  return (
    <>
      {props.map((p) => {
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

export default ViewProperties;
