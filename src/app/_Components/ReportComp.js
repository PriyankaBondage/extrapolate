"use client"
import report from "../Styles/report.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

function ReportComp() {
    return (
        <div className="mb-9">
            <h2 className="mt-7 mb-5 font-extrabold text-center text-3xl text-gray-700">Extrapolate Differentiator</h2>

            <Swiper

                spaceBetween={30} 
                slidesPerView={1} 
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3, 
                    },
                    1024: {
                        slidesPerView: 4, 
                    },
                }}
                pagination={{
                    clickable: true, 
                }}
                navigation 
            >
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Operational Excellence</h3>
                        <p className="p-4">
                            Our time-tested Research Methodologies and Data Modelling tools provide unmatched operational results.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/Operational%20exce.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Global Network</h3>
                        <p className="p-4">
                            Global Network of top publishers across 80+ Countries covering various Markets and Micro Markets.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/Global%20Newtwok.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Data Decisions</h3>
                        <p className="p-4">
                            Our Skilled researchers and Program Managers give decision makers different perspectives based on various data points being analysed and market research.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/Data%20Decision.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Insights</h3>
                        <p className="p-4">
                            Covering & Mapping major industries and trends based on granular Data.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/insights.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Result Orientation</h3>
                        <p className="p-4">
                            Efficiency and Efficacy delivered with our process-driven approach to meet and exceed expectations.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/We%20Care.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">We Care</h3>
                        <p className="p-4">
                            Our 24/7 Analyst support gives our customers the edge by solving their queries in real-time.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/We%20Care.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Result Orientation</h3>
                        <p className="p-4">
                            Efficiency and Efficacy delivered with our process-driven approach to meet and exceed expectations.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/We%20Care.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${report.card} min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden`}>
                        <h3 className="p-3 text-xl font-semibold">Insights</h3>
                        <p className="p-4">
                            Covering & Mapping major industries and trends based on granular Data.
                        </p>
                        <img className="p-4 mb-2" src="https://extrapolate.b-cdn.net/Asset/diffrentiator/insights.png" alt="operaton1" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ReportComp;
