import React from "react";
import circularImage from "../assets/mission.png"; // Adjust the path accordingly

const VisionMissionValues = () => {
  return (
    <div className="py-12 px-6 text-xl bg-white">
      {/* Paragraph Section */}
      <div className="mb-12">
        <p className="text-gray-800 mb-4">
          With a huge demand from the student community for classroom program for KPSC KAS Classes (Karnataka Public Service Commission), the team under the guidance of Vinay sir is launching its wing – <strong className="text-red-600">INSTA KAS</strong>.
        </p>
        <p className="text-gray-800 mb-4">
          INSIGHTSIAS has been successfully guiding students for UPSC Civil Services examination for the past 8 years in the offline mode and for the past 11 years in the online mode. The strategy followed in different courses coupled with our results reflect our diversified nature of teaching especially the qualitative pedagogy coupled with student centric mentorship that focusses on holistic development.
        </p>
        <p className="text-gray-800 mb-4">
          Our website and our offline initiatives have given India thousands of IAS, IPS, IRS and other central services officers. Today INSIGHTSIAS is synonymous with UPSC civil services exam preparation. This has been possible because of amazing quality faculty, content developers, mentors and other support staff at INSIGHTSIAS.
        </p>
        <p className="text-gray-800 mb-4">
          Now, with the same efforts we have a similar separate passionate and enthusiastic team for <strong className="text-red-600">INSTA KAS</strong> – which will work round the clock to deliver the best and help the students prepare for Karnataka Administrative Services Exam.
        </p>
        <p className="text-gray-800 mb-4">
          The team of highly qualified and experienced faculties, content developers, mentors and student centre management under the guidance of very much dedicated Vinay sir will be assuring students the best guidance and materials for KAS as well. We would want to realize our collective dream of having the best bureaucrats for the country and in the state services as well, through our another effort – <strong>INSTA KAS</strong>.
        </p>
        <p className="text-gray-800 mb-4">
          In this regard, we are launching KPSC KAS PRELIMS CUM MAINS Program: full-fledged integrated course in both <strong>Bengaluru & Dharwad</strong>, in which classes will be in both <strong>English & Kannada</strong>.
        </p>
      </div>

      {/* Vision, Mission, Values Section */}
      <div className="flex flex-col md:flex-row items-center justify-center ">
        {/* Circular Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={circularImage}
            alt="Vision, Mission, Values"
            className="w-full sm:w-3/4 lg:w-full h-auto object-cover md:w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
