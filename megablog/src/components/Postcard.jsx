import React from "react";
import {service} from "../appwrite/configuration"
import {Link, useNavigate} from "react-router-dom";

const Postcard = ({$id, featuredImage, title}) => {
  const navigate = useNavigate();
  return (
    <Link to={`/post/${$id}`}>
      <div className=" border w-full ">
        <div className="w-full justify-center">
          <img src={service.getFilePreview(featuredImage)} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Postcard;
