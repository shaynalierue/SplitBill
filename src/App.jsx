import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Elsa",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Rapunzel",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Snow White",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleAddFriend() {
    setShowAddFriend((ShowAddFriend) => !ShowAddFriend); // Mengubah nilai showAddFriend
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    // Pastikan selectedFriend tidak null sebelum melanjutkan
    if (selectedFriend) {
      setFriends((prevFriends) =>
        prevFriends.map((friend) => {
          if (friend.id === selectedFriend.id) {
            return {
              ...friend,
              balance: friend.balance + value,
            };
          }
          return friend;
        })
      );
    }

    // Reset selectedFriend setelah perubahan balance
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>💲--- Split Bill with Friends ---💲</h1>
        <FriendList
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className="button" onClick={toggleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
