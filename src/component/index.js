import React from 'react'
import "./index.css"
import Logo from "../assest/logo.png"
import Trophy from "../assest/1.png"
import Award from "../assest/2.png"
import MoterImg from "../assest/3.png"


const HomePage = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="mainlogo">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
            </header>
            <main>
                <div className="mainpage">
                    <div className="trophy-img">
                        <img src={Trophy} alt="trophy" />
                    </div>
                    <div className="right">
                        <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </ul>
                        <div className="award">
                            <img src={Award} alt="award" />

                        </div>
                        <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
                <div className="motersection">
                    <div className="heading">
                        <h4>
                            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                        </h4>
                    </div>
                    <div className="moter-image">
                        <img src={MoterImg} alt="" />
                    </div>
                    <h5>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h5>
                </div>
            </main>
            <section>
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
            </section>
            <footer>
                <ul>
                    <li><i className="fa-solid fa-phone"></i><a href="#https://www.crigroups.com/contact-us/">Toll Free 1800 200 1234</a></li>
                    <li><i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></li>
                    <li><i className="fa-solid fa-globe"></i><a href="https://www.crigroups.com/contact-us/">www.crigroups.com</a></li>
                </ul>
                {/* complete project */}
            </footer>
        </>
    )
}

export default HomePage
