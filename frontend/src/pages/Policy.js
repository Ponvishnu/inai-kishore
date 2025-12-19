import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Policy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1B0729] pb-8 overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white"
          data-testid="back-btn"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-semibold font-poppins ml-4">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="px-6 space-y-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-lg font-semibold font-poppins mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed mb-4">
            At Inai, we understand that your relationship is precious and private. We are committed to protecting your personal information and being transparent about how we collect, use, and share your data.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-base font-semibold font-poppins mb-3">
            Information We Collect
          </h2>
          <ul className="space-y-2 text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed">
            <li>• Account information (name, email, phone number)</li>
            <li>• Profile photos and shared memories</li>
            <li>• Messages and chat history</li>
            <li>• Events, todos, and reminders</li>
            <li>• Special dates and milestones</li>
          </ul>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-base font-semibold font-poppins mb-3">
            How We Use Your Information
          </h2>
          <p className="text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed">
            We use your information to provide and improve the Inai experience, including:
          </p>
          <ul className="space-y-2 text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed mt-3">
            <li>• Enabling communication between partners</li>
            <li>• Storing and displaying shared memories</li>
            <li>• Sending notifications for events and reminders</li>
            <li>• Personalizing your experience</li>
          </ul>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-base font-semibold font-poppins mb-3">
            Data Security
          </h2>
          <p className="text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed">
            We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest. We never share your personal information with third parties without your explicit consent.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-base font-semibold font-poppins mb-3">
            Your Rights
          </h2>
          <ul className="space-y-2 text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed">
            <li>• Access your personal data at any time</li>
            <li>• Request correction of inaccurate data</li>
            <li>• Delete your account and all associated data</li>
            <li>• Export your data in a portable format</li>
          </ul>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/30 rounded-2xl p-6">
          <h2 className="text-white text-base font-semibold font-poppins mb-3">
            Contact Us
          </h2>
          <p className="text-[#AEAEAE] text-sm font-light font-poppins leading-relaxed">
            If you have questions about this Privacy Policy, please contact us through the Contact Support page.
          </p>
          <p className="text-[#AEAEAE] text-xs font-light font-poppins mt-4">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
