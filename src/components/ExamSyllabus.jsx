import React from 'react';

const ExamSyllabus = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 lg:px-20">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-md p-5 mb-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          KPSC (KAS) Gazetted Probationers Exam Syllabus
        </h1>
        <p className="text-center text-gray-600">KAS Exam Pattern 2022</p>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-md p-6">
          {/* KAS Exam Pattern */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">KAS Exam Pattern 2022</h2>
            <p className="text-gray-600 mb-4">
              As per the latest Karnataka Recruitment of Gazetted Probationers (Appointment by Competitive Examinations) (Amendment) Rules, the KAS aspirants have to clear the 3-stage exam.
              The first stage is the Preliminary examination which comprises 2 papers with objective type questions. The candidates who clear the Preliminary Exam become eligible for the Second stage, MAINS exam.
              The MAINS stage of the KAS exam consists of a written examination followed by a personality test (Interview). Hence, in effect, the KPSC KAS exam pattern is modeled quite closely on the lines of the UPSC IAS exam.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Prelims – 2 Papers - Objective Type Questions.</li>
              <li>Mains – 7 Papers – Essay/Descriptive type.</li>
              <li>Personality (Interview) test.</li>
            </ul>
          </section>

          {/* KAS Prelims Syllabus */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">KAS Prelims Syllabus</h3>
            <p className="text-gray-600 mb-4">
              The Prelims stage consists of two papers which are conducted in offline mode (pen-paper) on the same day. This stage has only objective type (MCQs) questions and it acts as a filtering stage for the Main examination.
            </p>
            <p className="text-gray-600 mb-4">
              The marks in KAS Prelims are not counted for the final merit list, however, aspirants should prepare diligently as the cutoffs vary each year.
            </p>

            {/* Prelims Paper Table */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Paper 1</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>100 objective type questions – 2 marks each</li>
                  <li>0.25 marks Negative Marking</li>
                  <li>2-hour exam duration</li>
                  <li>Syllabus</li>
                  <li>General Studies (National and International Importance) – 40 questions</li>
                  <li>Humanities – 60 questions</li>
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Paper 2</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>100 objective type questions – 2 marks each</li>
                  <li>0.25 marks Negative Marking</li>
                  <li>2-hour exam duration</li>
                  <li>Syllabus</li>
                  <li>General Studies (State Importance) – 40 questions</li>
                  <li>General Science and Tech. Environment and Ecology – 30 questions</li>
                  <li>General Mental Ability – 30 questions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* KAS Mains Syllabus */}
          <section className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">KAS Mains Syllabus</h3>
            <p className="text-gray-600 mb-4">
              As per the KPSC KAS Exam Pattern, the candidates who successfully clear the KAS Prelims are eligible for the Main exam. The Main exam consists of 9 theory papers out of which 2 (Kannada and English Language) papers are qualifying in nature.
            </p>

            {/* Mains Papers Table */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Kannada</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>150 marks</li>
                  <li>Duration – 2hrs</li>
                  <li>35% qualifying criteria</li>
                  <li>Syllabus</li>
                  <li>Comprehension – 25 marks</li>
                  <li>Précis – 25 marks</li>
                  <li>Usage – 25 marks</li>
                  <li>Vocabulary – 25 marks</li>
                  <li>Short Essay – 25 marks</li>
                  <li>Communication Skills – 25 marks</li>
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">English</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>150 marks</li>
                  <li>Duration – 2hrs</li>
                  <li>35% qualifying criteria</li>
                  <li>Syllabus</li>
                  <li>Comprehension – 25 marks</li>
                  <li>Précis – 25 marks</li>
                  <li>Usage – 25 marks</li>
                  <li>Vocabulary – 25 marks</li>
                  <li>Short Essay – 25 marks</li>
                  <li>Communication Skills – 25 marks</li>
                </ul>
              </div>
            </div>
          </section>


          <section className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Merit-Ranking Papers:</h3>
            <p className="text-gray-600 mb-4">
            For the Essay paper, the exam duration is of 3 hrs and maximum marks are 250.
            There will be two essays (Kannada or English) of 125 marks each
            The first topic will be on national or international issues
            The second topic will on state or local issues
            </p>

            {/* Mains Papers Table */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">General Studies I</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Maximum Marks – 250</li>
                  <li>2. Exam Duration – 3 hours</li>
                  <li>3. Sections:</li>
                  <li>4. Cultural Heritage and History of Karnataka and India</li>
                  <li>5. Political and Social Perspective</li>
                  <li>6. Planning, Indian Economy, Rural Development- Data Collection, Analysis and Interpretation</li>
                 
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Syllabus</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Cultural Heritage of India (select areas and topics)</li>
                  <li>2. Modern History of India (beginning of the 19th century onwards)</li>
                  <li>3. Kadambas – Hoysalas</li>
                  <li>4. The Vijaynagar Empire (1336-1799)</li>
                  <li>5. Modern Mysore (1799-1947)</li>
                  <li>6. Karnataka Freedom movement and Unification (1885-1956)</li>
                  <li>7. Post-Independence Karnataka</li>
                  <li>8. Social Change & Movements</li>
                  <li>9. Social Change & Modernisation</li>
                  <li>10. Political System and Government</li>
                  <li>11. Decentralization of Power</li>
                  <li>12. Socio-economic system</li>
                  <li>13. Rural social system and Rural dev</li>
                  <li>14. Indian Economy</li>
                  <li>15. India and International Economic Relations</li>
                  <li>16. Development Patterns</li>
                  <li>17. Planning and Planning Goals</li>
                  <li>18. Rural DeDecentralisationv</li>
                  <li>19. Rural Development Initiatives</li>
                  <li>20. Data Collection Analysis & Interpretation</li>
                </ul>
              </div>
            </div>
          </section>


          <section className="mt-10">

            {/* Mains Papers Table */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">General Studies II</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Maximum Marks – 250</li>
                  <li>2. Exam Duration – 3 hours</li>
                  <li>3. Sections:</li>
                  <li>4. Natural Resources and Physical Features</li>
                  <li>5. Indian Constitution – Overview</li>
                  <li>6. International Relations, Public Administration and Management</li>
                 
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Syllabus</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Lithosphere, Atmosphere, Hydrosphere</li>
                  <li>2. Continental physiography and demographic distribution</li>
                  <li>3. Indian Physiography</li>
                  <li>4. Industrial Planning & Development</li>
                  <li>5. Physiographic divisions (Karnataka)</li>
                  <li>6. Urban land use policy and Urbanisation (Karnataka)</li>
                  <li>7. Nature of the Indian Constitution</li>
                  <li>8. Fundamental Rights</li>
                  <li>9. Distribution of Powers (Legislative)</li>
                  <li>10. Unicameral and Bicameral legislatures</li>
                  <li>11. Important Amendments</li>
                  <li>12. Welfare machinery in India</li>
                  <li>13. Union and State services</li>
                  <li>14. Public and Private Administration</li>
                  <li>15. Organisation structure</li>
                  <li>16. Organisational behaviour and concepts of management</li>
                  <li>17. Informal and formal organisation</li>
                  <li>18. Management techniques and tools</li>
                  <li>19. Administrative Reforms</li>
                  <li>20. UN and Specialised agencies</li>
                </ul>
              </div>
            </div>
          </section>


           <section className="mt-10">

            {/* Mains Papers Table */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">General Studies II</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Maximum Marks – 250</li>
                  <li>2. Exam Duration – 3 hours</li>
                  <li>3. Sections:</li>
                  <li>4. Natural Resources and Physical Features</li>
                  <li>5. Indian Constitution – Overview</li>
                  <li>6. International Relations, Public Administration and Management</li>
                 
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Syllabus</h4>
                <ul className=" list-inside text-gray-600">
                  <li>1. Lithosphere, Atmosphere, Hydrosphere</li>
                  <li>2. Continental physiography and demographic distribution</li>
                  <li>3. Indian Physiography</li>
                  <li>4. Industrial Planning & Development</li>
                  <li>5. Physiographic divisions (Karnataka)</li>
                  <li>6. Urban land use policy and Urbanisation (Karnataka)</li>
                  <li>7. Nature of the Indian Constitution</li>
                  <li>8. Fundamental Rights</li>
                  <li>9. Distribution of Powers (Legislative)</li>
                  <li>10. Unicameral and Bicameral legislatures</li>
                  <li>11. Important Amendments</li>
                  <li>12. Welfare machinery in India</li>
                  <li>13. Union and State services</li>
                  <li>14. Public and Private Administration</li>
                  <li>15. Organisation structure</li>
                  <li>16. Organisational behaviour and concepts of management</li>
                  <li>17. Informal and formal organisation</li>
                  <li>18. Management techniques and tools</li>
                  <li>19. Administrative Reforms</li>
                  <li>20. UN and Specialised agencies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-10">

        {/* Mains Papers Table */}
        <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-gray-700 mb-2">General Studies III</h4>
            <ul className=" list-inside text-gray-600">
            <li>1. Maximum Marks – 250</li>
            <li>2. Exam Duration – 3 hours</li>
            <li>3. Sections:</li>
            <li>4. Natural Resources and Physical Features</li>
            <li>5. Indian Constitution – Overview</li>
            <li>6. International Relations, Public Administration and Management</li>
            
            </ul>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-gray-700 mb-2">Syllabus</h4>
            <ul className=" list-inside text-gray-600">
            <li>1. Lithosphere, Atmosphere, Hydrosphere</li>
            <li>2. Continental physiography and demographic distribution</li>
            <li>3. Indian Physiography</li>
            <li>4. Industrial Planning & Development</li>
            <li>5. Physiographic divisions (Karnataka)</li>
            <li>6. Urban land use policy and Urbanisation (Karnataka)</li>
            <li>7. Nature of the Indian Constitution</li>
            <li>8. Fundamental Rights</li>
            <li>9. Distribution of Powers (Legislative)</li>
            <li>10. Unicameral and Bicameral legislatures</li>
            <li>11. Important Amendments</li>
            <li>12. Welfare machinery in India</li>
            <li>13. Union and State services</li>
            <li>14. Public and Private Administration</li>
            <li>15. Organisation structure</li>
            <li>16. Organisational behaviour and concepts of management</li>
            <li>17. Informal and formal organisation</li>
            <li>18. Management techniques and tools</li>
            <li>19. Administrative Reforms</li>
            <li>20. UN and Specialised agencies</li>
            </ul>
        </div>
        </div>
        </section>

        <section className="mt-10">

        {/* Mains Papers Table */}
        <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-gray-700 mb-2">General Studies IV</h4>
            <ul className=" list-inside text-gray-600">
            <li>1. Maximum Marks – 250</li>
            <li>2. Exam Duration – 3 hours</li>
            <li>3. Sections:</li>
            <li>4. Natural Resources and Physical Features</li>
            <li>5. Indian Constitution – Overview</li>
            <li>6. International Relations, Public Administration and Management</li>
            
            </ul>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-gray-700 mb-2">Syllabus</h4>
            <ul className=" list-inside text-gray-600">
            <li>1. Lithosphere, Atmosphere, Hydrosphere</li>
            <li>2. Continental physiography and demographic distribution</li>
            <li>3. Indian Physiography</li>
            <li>4. Industrial Planning & Development</li>
            <li>5. Physiographic divisions (Karnataka)</li>
            <li>6. Urban land use policy and Urbanisation (Karnataka)</li>
            <li>7. Nature of the Indian Constitution</li>
            <li>8. Fundamental Rights</li>
            <li>9. Distribution of Powers (Legislative)</li>
            <li>10. Unicameral and Bicameral legislatures</li>
            <li>11. Important Amendments</li>
            <li>12. Welfare machinery in India</li>
            <li>13. Union and State services</li>
            <li>14. Public and Private Administration</li>
            <li>15. Organisation structure</li>
            <li>16. Organisational behaviour and concepts of management</li>
            <li>17. Informal and formal organisation</li>
            <li>18. Management techniques and tools</li>
            <li>19. Administrative Reforms</li>
            <li>20. UN and Specialised agencies</li>
            </ul>
        </div>
        </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">KAS Personality Test</h2>
            <p className="text-gray-600 mb-4">
            The candidates who score above the cutoff in the KAS Mains will be shortlisted for the interview with the KPSC board.
            Update – Earlier, KAS Interview score was 200 which now has been slashed to 50.
            Here are a few points to note:
            Usually, the ratio of the total number of vacancies in that year and candidates called for an interview is 1:3. Reportedly, it has been increased to 1:5
            The Personality test board is constituted by the KPSC Chairman
            The board consists of 4 persons out of which there shall be 2 KPSC members
            The other 2 members will be from among:
            Retired All India Services officers
            Eminent Professors (Retired) from IITs, IIMs, Central/State Universities
            The panel will be chaired by the senior-most KPSC member present.
            The maximum marks for the interview are 50
            The panel members will not be told the candidate’s marks in the Mains stage.
            The KAS interview is to test the mental calibre, societal awareness, balance of judgement and leadership abilities.
            The 4 members panel will give marks individually and then the average of those marks will constitute the candidate’s marks in the interview.
            The KPSC KAS result or the merit list is the sum of marks in the Mains and the Interview.
            </p>
          </section>
          
        </div>

        {/* Side Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">KAS Exam Pattern</button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">KAS Prelims Syllabus</button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">KAS Mains Syllabus</button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">KAS Personality Test</button>
        </div>
      </div>
    </div>
  );
};

export default ExamSyllabus;
