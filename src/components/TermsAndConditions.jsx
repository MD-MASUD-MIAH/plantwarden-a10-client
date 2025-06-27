import React from "react";
import { FaLeaf, FaRegCopyright, FaShieldAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center text-green-600 mb-4">
            <FaLeaf className="text-4xl mr-2" />
            <h1 className="text-3xl font-bold">PlantWarden Terms and Conditions</h1>
          </div>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg">
          <p className="text-gray-700">
            Welcome to PlantWarden! These terms and conditions outline the rules and regulations for the use of our
            plant care application and services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Section
            icon={<IoMdInformationCircleOutline className="text-2xl" />}
            title="1. Acceptance of Terms"
          >
            <p>
              By accessing or using PlantWarden, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the service.
            </p>
          </Section>

          {/* User Accounts */}
          <Section
            icon={<FaShieldAlt className="text-2xl" />}
            title="2. User Accounts"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>You must provide accurate information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </Section>

          {/* Plant Care Information */}
          <Section
            icon={<FaLeaf className="text-2xl" />}
            title="3. Plant Care Information"
          >
            <p>
              The plant care information provided by PlantWarden is for general informational purposes only. While we strive
              to provide accurate information, we make no guarantees about the completeness or accuracy of this information.
            </p>
            <p className="mt-2">
              Always consult with a professional botanist or horticulturist before making significant changes to your plant
              care routine.
            </p>
          </Section>

          {/* Privacy Policy */}
      

          {/* Contact Information */}
          <div className="mt-12 p-4 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <IoMdInformationCircleOutline className="mr-2" />
              Contact Us
            </h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 font-medium">
              support@plantwarden.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ icon, title, children }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="text-xl font-semibold mb-3 flex items-center">
        <span className="text-green-600 mr-2">{icon}</span>
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default TermsAndConditions;