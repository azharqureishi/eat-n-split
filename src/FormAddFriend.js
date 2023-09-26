import React from "react";

function FormAddFriend() {
  return (
    <div>
      <form className=" flex items-end justify-center flex-col mt-6 mx-10 px-10 py-4 bg-yellow-50 rounded-xl ">
        <div className="  flex items-center justify-center mb-5 gap-x-4">
          <label className=" font-bold text-gray-600 text-base">
            👭 Friend name
          </label>
          <input
            type="text"
            className=" rounded-lg px-4 text-sm font-semibold text-gray-700"
          />
        </div>

        <div className=" flex items-center justify-center mb-5 gap-x-4">
          <label className=" font-bold text-base bold text-gray-600">
            📷 Image url
          </label>
          <input
            type="text"
            className=" rounded-lg px-4 text-sm font-semibold text-gray-700"
          />
        </div>
        <div>
          <button className=" bg-yellow-500 hover:bg-yellow-600 py-2 px-16 rounded-lg mb-5 font-semibold text-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAddFriend;
