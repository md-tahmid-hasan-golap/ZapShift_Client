import React from "react";

const FaqQuestion = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I track my parcel?",
      answer:
        "You can track your parcel by entering your tracking ID on our 'Live Tracking' page. We provide real-time updates from pick-up to delivery.",
    },
    {
      id: 2,
      question: "What is the delivery charge?",
      answer:
        "Our delivery charges start from 60 BDT within Dhaka. For nationwide delivery, the cost depends on the weight and location of the parcel.",
    },
    {
      id: 3,
      question: "How do I become a merchant?",
      answer:
        "To become a merchant, click on the 'Become a Merchant' button, fill out the form with your business details, and our team will contact you shortly.",
    },
    {
      id: 4,
      question: "Do you provide cash on delivery (COD)?",
      answer:
        "Yes, we provide 100% secure cash on delivery services all over Bangladesh with the fastest payment settlement for merchants.",
    },
    {
      id: 5,
      question: "What should I do if my parcel is delayed?",
      answer:
        "If your parcel is delayed beyond the estimated time, please contact our 24/7 support center or message us with your tracking ID.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500">
            Have questions? We're here to help you understand how ZapShift
            works.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="collapse collapse-plus bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={faq.id === 1}
              />
              <div className="collapse-title text-xl font-semibold text-gray-700">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p className="pt-2 border-t border-gray-100">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqQuestion;
