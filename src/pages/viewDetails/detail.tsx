import React, { useEffect, useState } from "react";
import { getApiUrI } from "../../config";
import axios from "axios";
const Details = (props: any) => {
  console.log();
  const [data, setData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    axios.get(getApiUrI).then((response) => {
      setData(
        response.data.find((sin: any) => {
          return sin;
        })
      );
    });
  }, [props.match.params.id]);
  return (
    <div className="">
      <div className="py-5">user Detail</div>
      <p>userId: {data.userId}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  );
};

export default Details;
