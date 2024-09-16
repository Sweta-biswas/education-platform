import React from 'react';
import SuccessStory from '../assets/coursebg.png';
import FaPlay from '../assets/play.png';
import RankImage from '../assets/female.png'; // Example image for rank, replace with actual images

const BriefStoryPage = () => {
    return (
        <div className="bg-white p-8">
            {/* Flex Container to Center Image */}
            <div className="flex justify-center items-center mb-8">
                <div className="md:w-1/2 relative">
                    <img
                        src={SuccessStory}
                        alt="Classroom"
                        className="w-full h-auto rounded-md shadow-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <button className="bg-transparent text-red-500 p-0 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                            <img src={FaPlay} alt="Play Button" className="w-full" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Main Story Content */}
                    <div className="bg-white p-8 shadow-md lg:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Hello Friends,</h2>
                        <p className="text-lg mb-4">I Hope You All Are Doing Great!</p>
                        <p className="text-lg mb-4">
                            This is Shilpa H R. I Have Been Selected As Assistant Director Of Co-Operative Audit (RANK 8) In The KPSC GAZETTED PROBATIONERS EXAM 2017-2018.
                        </p>
                        <p className="text-lg mb-4">
                            I Graduated in 2007 From Dayanand Sagar College Of Engineering, Civil Engineering, Worked In Accenture Services Private Ltd. INDIA, And Have Also Worked As A Junior Consultant For Telstra, AUSTRALIA.
                        </p>
                        <p className="text-lg mb-4">
                            10 Years Into Married Life, A Home Maker And A Mother Of Two Children.
                        </p>
                        <p className="text-lg mb-4">
                            I Wish To Share Few Glimpses Of My Journey In The Civil Service Exams. I Am Sure Atleast Few Amongst You Will Be Able To Connect With This.
                        </p>
                        <p className="text-lg mb-4">
                            Well, This Is My Third Attempt. In My Previous Two Attempts I Made It Up Till The Interview But Couldn’t Make It Up To The Final List.
                        </p>
                        <p className="text-lg mb-4">
                            <strong>What went wrong in my previous two attempts?</strong>
                        </p>
                        <p className="text-lg mb-4">
                            In the first attempt, 2012 though my mains score was considerably good, I couldn't score well in interview. Next, in the second attempt 2017 my mains score dipped, interview score was pretty decent.
                        </p>
                        <p className="text-lg mb-4">
                            <strong>A missed attempt!!</strong>
                        </p>
                        <p className="text-lg mb-4">
                            I started preparing since 2012, so far KPSC has called 4 notifications, as on 2022 (the latest being the 4th one) I couldn’t appear for 2014 exam due to maternity.
                        </p>
                        <p className="text-lg mb-4">
                            <strong>THE GREAT VOID, COMEBACK AS WELL!!</strong>
                        </p>
                        <p className="text-lg mb-4">
                            - Gave up studying for 3 years as I was depressed, dejected due the sudden demise of my parents–my whole world went upside down.
                        </p>
                        <p className="text-lg mb-4">
                            But the unaccomplished dream I had since childhood of being a civil servant didn’t let me sleep but still I didn’t wanted to pick up the books again. Luckily, my betterhalf understood what I was going through and he stood by me. Consoled, convinced and streamlined me again into this journey.
                        </p>
                        <p className="text-lg mb-4">
                            If you are sure of what you want and work honestly towards accomplishing it the entire universe will come to your support.
                        </p>
                        <p className="text-lg mb-4">
                            Do good deeds, good things are back to you.SS
                        </p>
                        <p className="text-lg mb-4">
                            The only shortcut to hardwork is hardwork itself.
                        </p>
                        <p className="text-lg mb-4">
                            I wish you all the best for your future career aspirations,God Bless!!
                        </p>
                                                
                        <p className="text-lg mb-4">
                        With Regards!
                        </p>
                        <p className="text-lg mb-4">
                        Shilpa H.R
                        </p>
                    </div>

                    {/* Right Side - Topper's Corner */}
                    <div className="bg-gray-100 p-8 shadow-md lg:w-1/3">
                        <h2 className="text-xl font-bold mb-8">Topper's Corner</h2>
                        <div className="space-y-8">
                            {/* Repeat this block for each topper */}
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <img src={RankImage} alt="Rank" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">Shilpa H R</h3>
                                    <p className="text-sm">Selected as Assistant Director of Co-Operative Audit</p>
                                    <span className="text-red-500 font-semibold">RANK 8</span>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BriefStoryPage;














