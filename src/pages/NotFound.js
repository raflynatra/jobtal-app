import React from "react";
import notFoundIMG from "../img/notfound_img.svg";

function NotFound() {
  return (
    <div className="container w-2/3 md:w-1/2 mx-auto text-center mt-40 md:mt-32">
      <img
        src={notFoundIMG}
        alt="notFound-illustration"
        className="w-2/3 mx-auto"
      />
      <h1 className="my-8 md:my-10 text-xl md:text-4xl font-bold">
        We're sorry, we couldn't find your page destination{" "}
      </h1>
      <a href="/" className="text-sm font-normal text-emerald-600">
        Click here to go to the main page
      </a>
    </div>
  );
}

export default NotFound;
