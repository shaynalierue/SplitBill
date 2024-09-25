import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, SetAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill dengan {selectedFriend.name} 👤 </h2>
      <label htmlFor="">💵Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => SetAmount(e.target.value)}
      />

      <label htmlFor="">🫵Tagihan Anda</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">💲Tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">🤑Dibayar oleh</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Submit</button>
    </form>
  );
}
