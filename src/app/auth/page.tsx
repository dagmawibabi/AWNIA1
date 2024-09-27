/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import afriwork from "../../assets/afriwork.png";
import Link from "next/link";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Image
                src={afriwork}
                alt="Afriwork Image"
                className="w-72 mb-8"
                width={400}
                height={300}
            />
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-4 text-black">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Login to browse and explore movies
                </p>
                <form>
                    {isLogin ? (
                        <>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </>
                    )}

                    {/* TODO Implement Proper Auth */}
                    <Link href="/home">
                        <button
                            type="submit"
                            className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
                        >
                            {isLogin ? "Log in" : "Sign Up"}
                        </button>
                    </Link>
                </form>
                {/* Social login buttons */}
                <div className="mt-4 flex justify-between">
                    <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-black transition duration-200 flex items-center justify-center">
                        Google
                    </button>
                    <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-black transition duration-200 flex items-center justify-center ml-2">
                        Apple
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <a href="#" className="text-gray-600 hover:underline">
                        Forgot password?
                    </a>
                </div>
                <div className="mt-2 text-center">
                    <span className="text-gray-600">
                        {isLogin
                            ? "Don't have an account? "
                            : "Already have an account? "}
                    </span>
                    <button
                        onClick={toggleForm}
                        className="text-black hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Log in"}
                    </button>
                </div>
            </div>
        </div>
    );
}
