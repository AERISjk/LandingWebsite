import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "user@example.com" && password === "password123") {
            navigate('/blog');
        } else {
            setMessage("Login error. Please try again.");
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg")' }}>
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://cadt.edu.kh/wp-content/uploads/2023/09/cadt.png" width={150} alt="CADT Logo" />
                        <h1 className="mb-2 text-2xl">Welcome to Cambodia</h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="email" name="email" placeholder="id@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="password" name="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                        </div>
                    </form>
                    {message && <p className="mt-4 text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;