import React from "react";
import Button from "./Button";

function Friend({ image, name, balance }) {
  return (
    <li className=" flex justify-between my-6 mx-4">
      <div className=" flex items-center">
        <img src={image} alt="" className=" rounded-full" />
        <div className=" flex items-start ml-10 flex-col">
          <h2 className=" text-lg text-gray-700 font-bold">{name} </h2>

          {balance < 0 && (
            <p className=" text-red-500 text-sm font-semibold">
              You owe {name} {Math.abs(balance)}€
            </p>
          )}

          {balance > 0 && (
            <p className=" text-green-500 text-sm font-semibold">
              {name} owes you {Math.abs(balance)}€
            </p>
          )}

          {balance === 0 && (
            <p className="text-sm font-semibold">You and {name} are even</p>
          )}
        </div>
      </div>
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
