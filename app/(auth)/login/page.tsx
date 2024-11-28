// ... in the handleLogin function
if (
  username === "suman" && 
  email === "sumanbhattarai200@gmail.com" && 
  password === "suman"
) {
  router.push("/dashboard");  // Changed from /home to /dashboard
} else {
  setError("Invalid credentials. Please try again.");
}