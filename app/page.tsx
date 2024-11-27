"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      username === "suman" && 
      email === "sumanbhattarai200@gmail.com" && 
      password === "suman"
    ) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4">
      <div className="glass-container max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - Logo and Title */}
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Budget Buddy</h1>
          <p className="text-white/80 mb-8">Effortlessly Track Expenses & Organize Notes</p>
          <div className="relative w-48 h-48">
            <Image
              src="/piggy-bank-logo.png"
              alt="Budget Buddy Logo"
              width={200}
              height={200}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold text-white mb-8">LOG IN</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="YOUR USERNAME"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right">
                <a href="#" className="text-white/80 text-sm hover:text-white">
                  Forgot Password?
                </a>
              </div>
            </div>

            {error && (
              <p className="text-red-200 text-sm text-center">{error}</p>
            )}

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="text-center text-white mt-4">
              <p className="mb-4">Or</p>
              <p>Sign Up with Other Account</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button type="button" className="p-2 bg-white/90 rounded-full">
                  <Image src="/google-icon.png" alt="Google" width={24} height={24} />
                </button>
                <button type="button" className="p-2 bg-white/90 rounded-full">
                  <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
                </button>
                <button type="button" className="p-2 bg-white/90 rounded-full">
                  <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
