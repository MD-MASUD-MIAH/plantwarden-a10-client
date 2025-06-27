import { useState } from 'react';
import { FiSearch, FiMail, FiMessageSquare, FiHelpCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const HelpComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  

  const faqs = [
    {
      question: "How do I add a new plant to my collection?",
      answer: "Click the '+' button in the bottom right corner, fill in your plant's details, and submit. You can add photos, watering schedules, and special care instructions."
    },
    {
      question: "Why isn't my plant's watering schedule updating?",
      answer: "Make sure you've marked the last watering date. The system calculates the next watering based on your plant's specific needs and your last recorded watering."
    },
    {
      question: "Can I share my plant collection with others?",
      answer: "Yes! Go to Settings > Sharing to generate a shareable link or connect with other PlantWarden users."
    },
    {
      question: "How accurate are the plant care recommendations?",
      answer: "Our recommendations are based on horticultural research and crowd-sourced data from thousands of successful plant owners. We adjust suggestions based on your location and environment."
    },
    {
      question: "What should I do if my plant looks sick?",
      answer: "Use our Plant Diagnosis tool (camera icon) to scan your plant. We'll analyze visible symptoms and provide treatment recommendations."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
          <FiHelpCircle className="text-green-600 text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">PlantWarden Help Center</h1>
        <p className="text-gray-600">Find answers to common questions or contact our support team</p>
      </div>

    

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <FiHelpCircle className="mr-2 text-green-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.length > 0 && (
            faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 bg-white text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )  }
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <FiMail className="text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Email Support</h3>
          </div>
          <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
          <a
            href="mailto:support@plantwarden.com"
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            Contact via Email
          </a>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FiMessageSquare className="text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Live Chat</h3>
          </div>
          <p className="text-gray-600 mb-4">Chat with our plant experts in real-time (available 9AM-5PM EST).</p>
          <button
            className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100"
            onClick={() => alert('Live chat would open here')}
          >
            Start Live Chat
          </button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="#" className="text-green-600 hover:text-green-800 hover:underline">Plant Care Guides</a>
          <a href="#" className="text-green-600 hover:text-green-800 hover:underline">Video Tutorials</a>
          <a href="#" className="text-green-600 hover:text-green-800 hover:underline">Community Forum</a>
        </div>
      </div>
    </div>
  );
};

export default HelpComponent;