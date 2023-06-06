const express = require("express");
const admin = require("firebase-admin");
const router = express.Router();

router.post("/register-seller", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create a new user account in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    // Store the seller's details in a Firestore database
    const db = admin.firestore();
    const sellerRef = db.collection("sellers").doc(userRecord.uid);
    await sellerRef.set({
      name,
      email,
    });

    res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
