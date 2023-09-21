import React from "react";
import { useSearchParams } from "react-router-dom";

function CardDetail() {
  const [params, setParams] = useSearchParams(); // Using the useSearchParams hook to grab the query parameters which contains data like title, description and the image.
  return (
    <div className="mx-auto w-[80%] flex flex-col items-center justify-center mt-5 border-2 border-black rounded-lg p-5">
      <img src={params.get("image")} alt="" className="w-[40rem] rounded-md" />
      <p className="font-raleway text-3xl font-semibold my-5 text-center">
        {params.get("title")}
      </p>
      <p className="font-lexend text-center">{params.get("description")}</p>
    </div>
  );
}

export default CardDetail;
