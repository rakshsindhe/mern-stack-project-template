import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Dummy = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetchDummyData();
  }, []);

  const fetchDummyData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/dummy");
    const response = await data.data;
    setPhones(response);
    console.log(response);
  };

  return (
    <Fragment>
      <h2>Dummy Route Data:</h2>
      {phones.length > 0 &&
        phones.map((phone, index) => {
          return (
            <ul>
              <li key={index}>{phone.title}</li>
            </ul>
          );
        })}
    </Fragment>
  );
};

export default Dummy;
