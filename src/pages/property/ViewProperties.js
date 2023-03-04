import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, getProperties } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ViewProperties() {
  const [props, setProps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties(setProps);
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
