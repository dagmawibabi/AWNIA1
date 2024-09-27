"use client";

import Image from "next/image";
import afriwork from "../../assets/afriwork.png";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="w-fit mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-5 mt-72 flex flex-col items-start">
                <Image
                    src={afriwork}
                    alt="poster"
                    width={200}
                    height={350}
                    className="py-5 rounded-t-lg"
                />
                <h2 className="text-xl font-bold text-center">John Doe </h2>
                <p className="text-gray-600 text-center">Software Engineer</p>
                <p className="text-gray-500 text-center pb-5">
                    NextJS is meh and people should use Svelte.
                </p>
                <Link href="/" className="w-full">
                    <button
                        type="submit"
                        className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
                    >
                        Log Out
                    </button>
                </Link>
                <Link
                    href="/home"
                    className="text-center w-full pt-2 hover:text-blue-700"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
