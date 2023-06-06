import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db, auth } from "../Firebase/firebase";

const Biddingsystem = () => {
  const { productId } = useParams();
  const [bidAmount, setBidAmount] = useState("");
  const [bids, setBids] = useState([]);
  const [isBiddingOpen, setIsBiddingOpen] = useState(false);

  // Collection reference in Firebase

  const [userId, setUserId] = useState(null);

  const userDocRef = collection(db, "users", userId); // Replace 'userId' with the actual user ID
  const sellerDocRef = collection(userDocRef, "seller");
  const paintingDocRef = collection(sellerDocRef, "painting");
  const bidsCollectionRef = collection(paintingDocRef, "bids");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const productBidsCollectionRef = collection(
    db,
    "products",
    productId,
    "bids"
  );

  useEffect(() => {
    // Subscribe to changes in the product bids collection
    const unsubscribe = onSnapshot(productBidsCollectionRef, (snapshot) => {
      const bidsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBids(bidsData);
    });

    return () => unsubscribe();
  }, [productId]);

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleBidToggle = () => {
    setIsBiddingOpen(!isBiddingOpen);
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();

    // Validate bid amount
    if (isNaN(bidAmount) || bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      // Save bid to product bids collection
      await addDoc(productBidsCollectionRef, { amount: bidAmount });

      // Reset bid amount input
      setBidAmount("");
    } catch (error) {
      console.error("Error adding bid: ", error);
    }
  };

  return (
    <div>
      <h1>Bidding System</h1>

      <h2>Product Details:</h2>
      {/* Render product details here */}
      <p>Product ID: {productId}</p>

      <h2>Bidding:</h2>
      <button onClick={handleBidToggle}>
        {isBiddingOpen ? "Close Bidding" : "Open Bidding"}
      </button>

      {isBiddingOpen && (
        <form onSubmit={handleBidSubmit}>
          <input
            type="number"
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={handleBidAmountChange}
          />
          <button type="submit">Place Bid</button>
        </form>
      )}

      <h2>Bids:</h2>
      <ul>
        {bids.map((bid) => (
          <li key={bid.id}>{bid.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Biddingsystem;
