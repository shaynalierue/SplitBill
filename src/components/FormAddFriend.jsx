import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48"); // URL default untuk gambar

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // Menambahkan query string untuk menghindari caching
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48"); // Reset image ke URL default
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">👤 Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">📸 Foto</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="button">Add</button>
    </form>
  );
}
