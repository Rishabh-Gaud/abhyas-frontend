// components/AboutUsPage.tsx

import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-blue-50 p-8 m-8 mb-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold my-8 mt-8">The Uccchal Core</h1>
        <p className="text-xl text-gray-700 flex items-center justify-center p-4 ">
        Welcome to Ucchal Core, where we ignite the path to career success. Our passion drives us to elevate students and companies alike, guiding them toward excellence on their unique journeys. Our mission is to provide students with a comprehensive platform that enhances their skills and knowledge. We offer coding practice, diverse subject quizzes, and realistic exam simulations to prepare students meticulously for their future careers. At The Uccchal Core, our dedication extends to empowering both students and companies with cutting-edge functionalities, addressing the ever-evolving needs of the modern educational and professional landscape. Join us on this transformative voyage where education meets innovation and potential embraces new opportunities.
        </p>
        
      </div>

      <hr className="border-t border-gray-300 my-8" />

      <div className="flex flex-col md:flex-row items-center justify-center my-8">
        <div className="w-full md:w-1/2 pr-8">
          <img src="dummy-student-image-link" alt="Students" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold p-4 pl-0">For Students</h2>
          <p className="text-xl text-gray-800 mb-4">
            At Ucchal Core, we offer a variety of features tailored to student needs:
          </p>
          <ul className="list-disc ml-6 text-xl text-gray-700 mb-4">
            <li>Access a coding practice platform for sharpening programming skills.</li>
            <li>Test your aptitude, English, mathematics, and reasoning abilities with a wide array of quizzes.</li>
            <li>Practice subject-specific quizzes to enhance your knowledge in various academic disciplines.</li>
            <li>Take simulated exams to evaluate your readiness for upcoming tests.</li>
          </ul>
        </div>
      </div>


      <hr className="border-t border-gray-300 my-8" />

      <div className="flex flex-col md:flex-row items-center justify-center my-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold p-4 pl-0">For Companies</h2>
          <p className="text-xl text-gray-800 mb-4">
            Companies can rely on us for their hiring and assessment needs:
          </p>
          <ul className="list-disc ml-6 text-xl text-gray-700 mb-4">
            <li>Post job listings to reach talented candidates from diverse backgrounds.</li>
            <li>Conduct exams to evaluate candidates' skills and knowledge efficiently.</li>
            <li>Streamline your hiring process and find the perfect fit for your organization.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 pl-8">
          <img src="dummy-company-image-link" alt="Companies" className="max-w-full h-auto" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-8" />

      <div className="text-center my-8">
        <h2 className="text-3xl font-bold pb-4">Join Us on This Exciting Journey</h2>
        <p className="text-xl text-gray-800 mb-6">
            We invite you to join us on this exciting journey of learning, growth, and success. At Ucchal Core, we're committed to providing valuable resources and opportunities for students and companies alike. Whether you're a student seeking to enhance your skills or a company looking for top talent, we're here to support your goals.
          </p>
          <p className="text-xl text-gray-800">
            Thank you for choosing Ucchal Core as your partner in achieving excellence. We look forward to helping you reach your full potential and achieve your aspirations.
          </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
