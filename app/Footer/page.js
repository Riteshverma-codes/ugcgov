const Footer = () => {
  return (
    <footer className="bg-[#232c3b] text-gray-300">

      {/* Top thin color strip */}
      <div className="flex h-1">
        <div className="flex-1 bg-purple-400"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-purple-400"></div>
        <div className="flex-1 bg-orange-400"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* For UGC Officials */}
        <div>
          <h4 className="text-white font-semibold mb-4">For UGC Officials</h4>

          <div className="grid grid-cols-2 gap-x-8">
            {/* Left Column */}
            <ul className="space-y-2 text-base">
              {[
                "e-Office",
                "NIC mail",
                "RTI online",
                "PG portal",
                "Professional Councils",
              ].map(item => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer"
                >
                  › {item}
                </li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-2 text-base">
              {[
                "State Higher Education Councils",
                "MoE",
                "AICTE",
                "National Testing Agency (NTA)",
              ].map(item => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick links</h4>
          <ul className="space-y-2 text-base">
            {[
              "Web portal for Fellowship/Scholarship Legacy Cases",
              "Rashtriya Uchchatar Shiksha Abhiyan",
              "University Activity Monitoring Portal",
              "Deemed to be University Portal",
              "DEB",
              "UGC NET Online",
              "UGC Regulations",
              "UGC Circulars"
            ].map(item => (
              <li key={item} className="hover:text-white cursor-pointer">› {item}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-base leading-6">
            University Grants Commission (UGC)<br />
            Bahadur Shah Zafar Marg,<br />
            New Delhi - 110002
          </p>

          <p className="text-base mt-4">
            Phone: 011-23604446, 011-23604200
          </p>

          <p className="text-base mt-2">
            Email: <span className="text-blue-300">contact.ugc@nic.in</span>
          </p>

          {/* Visitor Counter */}
          <div className="mt-6 inline-flex items-center rounded-full overflow-hidden border border-white">
            <span className="bg-white text-black px-4 py-3 text-base font-medium">
              Total Visitors
            </span>
            <span className="bg-orange-500 text-white px-4 py-3 text-base font-semibold">
              232401220
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600"></div>

      {/* Government Logos */}
      <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-1 ">
        {[
          "datagov_logo.png",
          "dialgov-logo.png",
          "digital_india.png",
          "fhei_logo.png",
          "GOI.png",
          "india_gov_logo.png",
          "my_visit.png",
          "onlineservice_logo.png",
          "logo-3.jpg",
          "E-samadhan_Logo_New.png"
        ].map((logo, i) => (
          <div key={i} className="flex items-center bg-white justify-center border p-2  transition-transform duration-300 ease-in-out hover:scale-110 hover:border-orange-500">
            <img src={`/logos/${logo}`} alt="" className="h-13 object-contain" />
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between gap-2">
          <p>Copyright © 2023 University Grants Commission New Delhi, India</p>
          <p>
            Website last updated on: 29-01-2026 &nbsp;|&nbsp;
            Disclaimer | Privacy Policy | Contact Us
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
