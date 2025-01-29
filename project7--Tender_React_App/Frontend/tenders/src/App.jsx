import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Dynamically import your components for lazy loading
const HomePage = React.lazy(() => import("./components/HomePage"));
const ApplyPage = React.lazy(() => import("./components/ApplyPage"));
const ArchivePage = React.lazy(() => import("./components/ArchivePage"));
const Login = React.lazy(() => import('./components/Login'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const ProtectedRoute = React.lazy(() => import('./components/ProtectedRoute'));
const ClientRegistration = React.lazy(() => import("./components/ClientRegistration"));
const ContractorRegistration = React.lazy(() => import("./components/ContractorRegistration"));
const VendorRegistration = React.lazy(() => import("./components/VendorRegistration"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={['client', 'contractor', 'vendor']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apply/:tenderid"
            element={
              <ProtectedRoute allowedRoles={['client', 'contractor', 'vendor']}>
                <ApplyPage />
              </ProtectedRoute>
            }
          />
          
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/client-registration" element={<ClientRegistration />} />
          <Route path="/contractor-registration" element={<ContractorRegistration />} />
          <Route path="/vendor-registration" element={<VendorRegistration />} />

          {/* Catch-all Route to redirect to login page */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


