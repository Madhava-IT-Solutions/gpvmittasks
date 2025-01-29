import React, { useState } from 'react';
import './ContractorDashboard1.css';

const ContractorDashboard1 = () => {
    const [activeSection, setActiveSection] = useState('profile');
    
    // Sample Data
    const profile = {
        name: "ABC Constructions",
        contact: "abc@contractors.com",
        industry: "Construction",
        services: "Building, Renovation",
        location: "New York, USA",
        certifications: ["ISO 9001", "Safety Certified"],
        experience: "10+ Years",
        portfolio: [
            { id: 1, name: "Project A", image: "https://via.placeholder.com/100", description: "Luxury Apartment" },
            { id: 2, name: "Project B", image: "https://via.placeholder.com/100", description: "Commercial Complex" }
        ],
        ratings: 4.8
    };

    const tenders = [
        { id: 1, title: "Road Construction", deadline: "Feb 15, 2025", requirements: "Experience: 5+ years" },
        { id: 2, title: "Bridge Renovation", deadline: "Mar 10, 2025", requirements: "ISO Certification Required" }
    ];

    const bids = [
        { id: 1, tender: "Road Construction", status: "Pending" },
        { id: 2, tender: "Bridge Renovation", status: "Shortlisted" }
    ];

    const notifications = ["New tender posted: Hospital Renovation", "Your bid for Bridge Renovation is shortlisted"];
    const payments = [{ id: 1, project: "Bridge Renovation", amount: "$20,000", status: "Pending" }];
    
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2 className="sidebar-title">Contractor Dashboard</h2>
                <ul>
                    <li className="sidebar-item" onClick={() => setActiveSection('profile')}>Profile</li>
                    <li className="sidebar-item" onClick={() => setActiveSection('tenders')}>Available Tenders</li>
                    <li className="sidebar-item" onClick={() => setActiveSection('bids')}>My Bids</li>
                    <li className="sidebar-item" onClick={() => setActiveSection('notifications')}>Notifications</li>
                    <li className="sidebar-item" onClick={() => setActiveSection('payments')}>Financial Overview</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {activeSection === 'profile' && (
                    <div>
                        <h2 className="section-title">Profile Information</h2>
                        <p><strong>Company:</strong> {profile.name}</p>
                        <p><strong>Contact:</strong> {profile.contact}</p>
                        <p><strong>Industry:</strong> {profile.industry}</p>
                        <p><strong>Services:</strong> {profile.services}</p>
                        <p><strong>Location:</strong> {profile.location}</p>
                        <p><strong>Certifications:</strong> {profile.certifications.join(", ")}</p>
                        <p><strong>Experience:</strong> {profile.experience}</p>
                        <h3 className="sub-section-title">Portfolio</h3>
                        <div className="portfolio-grid">
                            {profile.portfolio.map((item) => (
                                <div key={item.id} className="portfolio-item">
                                    <img src={item.image} alt={item.name} className="portfolio-image" />
                                    <p>{item.name}</p>
                                    <p className="portfolio-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeSection === 'tenders' && (
                    <div>
                        <h2 className="section-title">Available Tenders</h2>
                        {tenders.map((tender) => (
                            <div key={tender.id} className="tender-item">
                                <h3 className="tender-title">{tender.title}</h3>
                                <p><strong>Deadline:</strong> {tender.deadline}</p>
                                <p><strong>Requirements:</strong> {tender.requirements}</p>
                                <button className="bid-button">Bid Now</button>
                            </div>
                        ))}
                    </div>
                )}
                {activeSection === 'bids' && (
                    <div>
                        <h2 className="section-title">My Bids</h2>
                        {bids.map((bid) => (
                            <div key={bid.id} className="bid-item">
                                <p><strong>Tender:</strong> {bid.tender}</p>
                                <p><strong>Status:</strong> {bid.status}</p>
                            </div>
                        ))}
                    </div>
                )}
                {activeSection === 'notifications' && (
                    <div>
                        <h2 className="section-title">Notifications</h2>
                        <ul>
                            {notifications.map((note, index) => (
                                <li key={index} className="notification-item">{note}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {activeSection === 'payments' && (
                    <div>
                        <h2 className="section-title">Financial Overview</h2>
                        {payments.map((payment) => (
                            <div key={payment.id} className="payment-item">
                                <p><strong>Project:</strong> {payment.project}</p>
                                <p><strong>Amount:</strong> {payment.amount}</p>
                                <p><strong>Status:</strong> {payment.status}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContractorDashboard1;
