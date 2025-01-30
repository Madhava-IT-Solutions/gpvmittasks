import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import ClientDashboard from "./ClientDashboard";
import ContractorDashboard from "./ContractorDashboard";
import VendorDashboard from "./VendorDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // Initialize state for role

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect if no token is found
      return;
    }

    try {
      const { role } = jwtDecode(token);
      setRole(role); // Update state after decoding token
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token"); // Remove corrupt token
      navigate("/login");
    }
  }, [navigate]); // Run only when navigating

  // Show loading indicator while role is not set
  if (!role) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="dashboard">
      {role === "client" && <ClientDashboard />}
      {role === "contractor" && <ContractorDashboard />}
      {role === "vendor" && <VendorDashboard />}
    </div>
  );
};

export default Dashboard;