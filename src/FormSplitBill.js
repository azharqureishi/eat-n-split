import React from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className=" bg-yellow-50 rounded-xl w-4/6 flex flex-col justify-center px-6 py-7 ml-7">
      <h2 className=" uppercase font-semibold text-2xl text-gray-600">
        Split a bill with x
      </h2>
      <div className=" flex justify-between items-center  mt-7">
        <label className=" text-base font-bold text-gray-600">
          💰 Bill value
        </label>
        <input
          type="number"
          className=" rounded-lg px-3 py-3 w-40 text-base font-semibold"
        />
      </div>

      <div className=" flex justify-between items-center mt-7">
        <label className=" text-base font-bold text-gray-600">
          👤 Your expense
        </label>
        <input
          type="number"
          className=" rounded-lg px-3 py-3 w-40 text-base font-semibold"
        />
      </div>

      <div className=" flex justify-between items-center mt-7">
        <label className=" text-base font-bold text-gray-600">
          👭 X's expense
        </label>
        <input
          type="number"
          className=" rounded-lg px-3 py-3 w-40 text-base font-semibold"
          disabled
        />
      </div>

      <div className=" flex justify-between items-center mt-7">
        <label className=" text-base font-bold text-gray-600">
          Whos is paying the bill
        </label>
        <select className=" rounded-lg w-25 text-base text-gray-700 font-semibold">
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
      </div>
      <div className=" flex justify-end items-center mt-10">
        <button className=" bg-yellow-500 hover:bg-yellow-600 py-2 px-14 rounded-lg font-semibold text-sm transition-all">
          Split bill
        </button>
      </div>
    </form>
  );
}

export default FormSplitBill;
