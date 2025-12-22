"use client";

import { useRegisterForm } from "@/app/example/input-form/hooks/use-register";



export default function RegisterForm() {
  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsername,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  } = useRegisterForm();

  return (
    <div>
      <h2>Register</h2>

      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsername} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePassword} />
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </div>

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}