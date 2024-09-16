import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/female.png'

const SuccessStories = () => {
    const navigate = useNavigate();
    const stories = [
        {
            id: 1,
            name: "Shilpa H R",
            role: "Selected as Assistant Director of Co-operative Audit",
            rank: "RANK 8",
            exam: "KPSC GAZETTED PROBATIONERS EXAM 2017-2018",
            imgSrc: Image, // Replace with the actual path to the profile image
        },
        // Add more story objects as needed
    ];

    const handleStoryClick = () => {
        navigate('/topers-corner/success-story');
    };

    return (
        <div className="container mt-8 mx-auto p-4">
            {Array.from({ length: 10 }).map((_, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4"
                        >
                            <div className="flex items-center">
                                <img
                                    src={story.imgSrc}
                                    alt={story.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{story.name}</h3>
                                    <p className="text-gray-600">{story.role}</p>
                                    <p className="text-red-600 font-bold">{story.rank}</p>
                                    <p className="text-gray-500">{story.exam}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleStoryClick}
                                className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                            >
                                My Success Story
                            </button>
                        </div>
                    ))}
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
                <button className="mx-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    1
                </button>
                <button className="mx-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    2
                </button>
                <button className="mx-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    3
                </button>
                <span className="mx-1">....................</span>
                <button className="mx-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    10
                </button>
            </div>
        </div>
    );
};

export default SuccessStories;
