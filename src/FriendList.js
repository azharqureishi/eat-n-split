import React from "react";
import Friend from "./Friend";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function FriendList() {
  return (
    <div>
      <ul>
        {initialFriends.map((friend) => (
          <Friend
            image={friend.image}
            balance={friend.balance}
            name={friend.name}
            key={friend.id}
          />
        ))}
      </ul>
      <div className=" flex justify-end items-end mr-3">
        <button className=" block text-end bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded-lg mb-5 font-semibold text-sm">
          Add friend
        </button>
      </div>
    </div>
  );
}

export default FriendList;
