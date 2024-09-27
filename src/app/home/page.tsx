"use client";

import Image from "next/image";
import { Search, Sparkle, User } from "lucide-react";
import placeholder from "../../assets/placeholder.png";
import afriwork from "../../assets/afriwork.png";
import Link from "next/link";

export default function Home() {
    const mockMovies = [
        {
            id: 1,
            title: "Inception",
            lang: "en",
        },
        {
            id: 2,
            title: "Interstellar",
            lang: "fr",
        },
        {
            id: 3,
            title: "The Dark Knight",
            lang: "de",
        },
        {
            id: 4,
            title: "Titanic",
            lang: "es",
        },
        {
            id: 5,
            title: "Avatar",
            lang: "it",
        },
        {
            id: 6,
            title: "The Matrix",
            lang: "pt",
        },
        {
            id: 7,
            title: "Joker",
            lang: "nl",
        },
        {
            id: 8,
            title: "Gladiator",
            lang: "ru",
        },
        {
            id: 9,
            title: "Pulp Fiction",
            lang: "ja",
        },
        {
            id: 10,
            title: "Fight Club",
            lang: "ko",
        },
        {
            id: 11,
            title: "Forrest Gump",
            lang: "zh",
        },
        {
            id: 12,
            title: "The Lion King",
            lang: "ar",
        },
    ];

    return (
        <div>
            <div className="w-fit mx-auto">
                <div className="flex justify-between">
                    {/* Logo */}
                    <Image
                        src={afriwork}
                        alt="poster"
                        width={200}
                        height={350}
                        className="py-5"
                    />
                    {/* AI */}
                    <div className="flex justify-between items-center gap-2">
                        <Link href="/ai">
                            <div className="flex items-center bg-zinc-900 hover:bg-black text-white rounded-xl px-4 py-1">
                                <Sparkle className="w-4 h-4 mr-1" /> AI
                            </div>
                        </Link>
                        <Link href="/profile">
                            <div className="flex items-center bg-zinc-900 hover:bg-black text-white rounded-xl px-4 py-1">
                                <User className="w-4 h-4 mr-1" /> Profile
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Search Box */}
                <div className="flex items-center mb-6 w-full">
                    {/* Set width to full */}
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="border border-gray-300 rounded-l-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white rounded-r-md p-2 flex items-center">
                        <Search className="w-4 h-4 mr-1" />{" "}
                        {/* Lucide Search Icon */}
                        Search
                    </button>
                </div>
                {/* Movies */}
                <div className="grid grid-cols-3 pb-56 gap-5">
                    {mockMovies.map((eachMovie) => (
                        <div
                            key={eachMovie.id}
                            className="flex flex-col justify-center items-center w-fit p-2 border border-neutral-200 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-xl"
                        >
                            <Image
                                src={placeholder}
                                alt="poster"
                                width={300}
                                height={350}
                                className="rounded-tl-lg rounded-tr-lg"
                            />
                            <div className="w-full flex justify-between">
                                <span>{eachMovie.title}</span>
                                <span>{eachMovie.lang}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
