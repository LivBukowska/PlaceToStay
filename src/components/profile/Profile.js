import "./Profile.css";
import hello from "../../images/hello.svg";
import ProfileCard from "../profilecard/ProfileCard";
import { FaEye, FaLightbulb, FaCalendarAlt, FaThumbsUp,FaCheckCircle,FaWpforms } from "react-icons/fa";
import { applicant } from "../../data/applicant.js";
import { host } from "../../data/host.js";

const Profile = () => {
    return (
        <profile>
            <div className="profile__container">
                <div className="profile__title">
                    <img src={hello} alt="hello"/>
                    <div className="profile__greeting">
                        <h2>Hello, {applicant[0].name}!</h2>
                        <p>We're here to help.</p>
                    </div>
                </div>

                <div className="profile__cards">
                    <div className="card">
                        <div className="card_inner">
                        <FaCalendarAlt  size={30}/>
                            <p className="text-primary-p">Days Searching:</p>
                            <span className="font-bold text-title">1</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <FaWpforms size={30}/>
                            <p className="text-primary-p">Applications:</p>
                            <span className="font-bold text-title">3</span>
                        </div>
                    </div>

                    <div className="card">
                    <div className="card_inner">
                            <FaEye size={30}/>
                            <p className="text-primary-p">Profile Views:</p>
                            <span className="font-bold text-title">23</span>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card_inner">
                        <FaCheckCircle size={30}/>
                            <p className="text-primary-p">Profile Status:</p>
                            <span className="font-bold text-title">Up-to-date</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>New Host</h1>
                                <p>{host[0].city}</p>
                            </div>
                            <i><FaLightbulb /></i>
                        </div>

                        <ProfileCard />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right_title">
                            <div>
                                <h1>Profile</h1>
                                <p>Current matches & information.</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>
                            
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Hosts</h1>
                                <p>3 Units Available</p>
                            </div>

                            <div className="card2">
                                <h1>Budget</h1>
                                <p>{applicant[0].budget}</p>
                            </div>

                            <div className="card3">
                                <h1>Size</h1>
                                <p>{applicant[0].lookingfor}</p>
                            </div>

                            <div className="card4">
                                <h1>Applications</h1>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </profile>
    )
}

export default Profile;