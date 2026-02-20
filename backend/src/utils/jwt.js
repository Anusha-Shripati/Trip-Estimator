import jwt from "jsonwebtoken";
const secret = "Admin@111$7";
const dummy_user = {
  email: "abc@gmail.com",
  password: 11111,
};

const token = jwt.sign(dummy_user, secret, { expiresIn: "5m" });

console.log(" GENERATED TOKEN:", token);
try {
  const decoded = jwt.verify(token, secret);

  console.log("\n2. VERIFICATION SUCCESSFUL!");
  console.log("Decoded Data:", decoded);
} catch (err) {
  console.log("\n2. VERIFICATION FAILED:", err.message);
}

try {
  jwt.verify(token, "wrong_secret_key");
} catch (err) {
  console.log("\n3. CAUGHT EXPECTED ERROR (Wrong Secret):", err.message);
}
