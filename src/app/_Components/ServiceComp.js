import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ServiceComp() {
    return (
        <div style={{
            backgroundImage: `url('https://www.extrapolate.com/sliderimg/syndicate-research.webp')`
        }}>

            <div className='container grid grid-cols-1 md:grid-cols-2 w-full  bg-cover bg-center bg-no-repeat text-white'>
                <div className='p-8 hover:bg-red-600'>
                    <h2 className='mt-3 mb-3 font-bold'>SYNDICATED RESEARCH SERVICES</h2>
                    <p style={{ textAlign: "justify" }} className='mt-3 mb-3'>Provides overall market insights, assisting
                        clients with market strategy and brand positioning. At its core, market
                        research gathers information and analyses external influences on an industry
                        such as economic data, trends, customer behaviour, geopolitical influence,
                        and brand positioning which helps in making a progressive decision making.
                        With customization to the core Extrapolate’s dedicated Research experts are
                        there to custom fix a report as per the problem statement.</p>
                    <div className='mt-9'>
                        <button className='border-2 border-white p-2'>Explore Services</button>
                    </div>
                </div>

                <div className='p-8 hover:bg-red-600'>
                    <h3 className='mt-3 mb-3 font-bold'>MICRO MARKET REPORTS</h3>
                    <p style={{ textAlign: "justify" }} className='mt-3 mb-3'>Are in depth analysis of particular segment
                        which captures the company trends, shifts, supplier side, innovation,
                        disruption and other aspect which will play a major role in defining early
                        paradigm shifts. Include analysis of overall Industry in a specific
                        geography. These reports possess utmost accuracy and the data and
                        information provided are sourced from authentic government and industrial
                        bodies.</p>
                    <div className='mt-9'>
                        <button className='border-2 border-white p-2'>Explore Services</button>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ServiceComp