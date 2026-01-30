import React from 'react'

export default function CreativeTables() {
    return (
        <div className="bg-gray-200 py-20">
            <div className="max-w-7xl mx-auto flex justify-center gap-10">
                <div className="relative bg-white w-[400] rounded-3xl shadow-lg overflow-hidden border-orange-500 border-b-7 border-r-7">


                    {/* Header */}
                    <div className="px-6 pt-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            Anti-ragging / e-Samadhaan
                        </h3>
                        <div className="h-1.5 w-full bg-orange-500 mt-2"></div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6 space-y-6">

                        {/* Anti Ragging Section */}
                        <div className="flex items-center gap-4 border-b pb-4 ">
                            <img
                                src="/anti-raging.png"
                                alt="Anti Ragging"
                                className="h-14 w-14 object-contain"
                            />

                            <div className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                                24x7 Helpline Number <br />
                                <span className="font-bold">1800-180-5522</span> (Toll Free)
                            </div>
                        </div>

                        {/* Samadhaan Section */}
                        <div className="flex items-center justify-between">
                            <img
                                src="/logos/E-samadhan_Logo_New.png"
                                alt="Samadhaan"
                                className="w-50 mx-auto"
                            />
                        </div>

                        {/* Footer Text */}
                        <p className="text-sm text-gray-600 text-center">
                            A Step Forward: <span className="text-orange-600">Service to Stakeholders</span>
                        </p>

                    </div>
                </div>
                <div className="relative bg-white w-[400] rounded-3xl shadow-lg overflow-hidden border-orange-500 border-b-7 border-r-7">


                    {/* Header */}
                    <div className="px-6 pt-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            Anti-ragging / e-Samadhaan
                        </h3>
                        <div className="h-1.5 w-full bg-orange-500 mt-2"></div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6 space-y-6">
                        <div className="relative h-[150] overflow-hidden px-4">
                            <div className="vertical-marquee text-sm text-gray-700 space-y-4">

                                <ul className="text-base font-medium pb-3 roman">
                                    <li>UGC Office Helpline:011-23604446,011-23604200</li>
                                    <li>Covid -19 Helpline:1800-111-657</li>
                                    <li>Email: covid19help.ugc@gov.in</li>
                                    <li>Scholarship/Fellowship Helpline:011-23604505</li>
                                    <li>Email: netjrf-ugc@gov.in</li>
                                    <li>National Scholarship Portal Helpline:0120-6619540</li>
                                    <li>Email: helpdesk@nsp.gov.in</li>
                                    <li>UGC e-Samadhan Portal:1800-111-656 (General Inquiry), +91 79-2326-8279 (For Technical Queries)</li>
                                    <li>Anti-ragging Helpline:1800-180-5522</li>
                                    <li>Email: helpline@antiragging.in</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative bg-white w-[400] rounded-3xl shadow-lg overflow-hidden border-orange-500 border-b-7 border-r-7">
                    {/* Header */}
                    <div className="px-6 pt-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            RTIs
                        </h3>
                        <div className="h-1.5 w-full bg-orange-500 mt-2"></div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6 space-y-6">

                        <div className="relative h-[150] overflow-hidden px-4">
                            <div className="vertical-marquee text-sm text-gray-700 space-y-4">

                                <ul className="text-base font-medium pb-3">
                                    <li> Right to Information Act </li>
                                    <li> Consolidated Quarterly Return from CPIOs of University Grants Commission, New Delhi</li>
                                    <li> Information to be published in pursuance of section 4(1)(b) of Right to Information Act, 2005 (BEING UPDATED)</li>
                                    <li> Central Public Information Officer & Appellate Authority as on 22.11.2022</li>
                                </ul>

                            </div>
                        </div>


                        {/* Footer Text */}
                        <p className="text-sm text-gray-600 text-center">
                            A Step Forward: <span className="text-orange-600">Service to Stakeholders</span>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}
