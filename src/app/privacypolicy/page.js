import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Gradient */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">Last Updated: July 10, 2026</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100">
          
          <section className="space-y-10">
            {/* Each Section with hover effect */}
            {[
              { title: "1. Introduction", text: "At DevOrbit, we are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you interact with our services." },
              { title: "2. Information We Collect", text: "We collect information you provide directly to us, such as your name, email address, and phone number, specifically when you fill out forms on our website or social media ads to request a consultation." },
              { title: "3. How We Use Your Data", text: "Your information is used to contact you regarding project inquiries, provide support, and improve our website performance." },
              { title: "4. Data Security", text: "We implement industry-standard security measures to protect your personal data. We do not sell or share your data with third parties for marketing purposes." }
            ].map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-slate-50 transition-all duration-300">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}

            {/* Contact Section Highlight */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-3">5. Need Help?</h2>
              <p className="opacity-90 mb-4">
                If you have any questions about this Privacy Policy, feel free to reach out. We are always happy to help.
              </p>
              <a 
                href="mailto:sharmashravit@gmail.com" 
                className="inline-block bg-white text-blue-700 font-bold px-6 py-2 rounded-full hover:bg-slate-100 transition-transform hover:scale-105"
              >
                sharmashravit@gmail.com
              </a>
            </div>
          </section>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-10">
          © {new Date().getFullYear()} DevOrbit Tech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;