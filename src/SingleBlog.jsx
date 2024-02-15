import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `https://65cd9528c715428e8b3e9af4.mockapi.io/blog/${id}`
      );
      if (res.status === 200) {
        setLoading(false);
        setData(res.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <img style={{ width: "200px", height: "200px" }} src={data.avatar} />
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
          <p>{data.createdAt}</p>
        </div>
      )}
    </>
  );
};

export default SingleBlog;