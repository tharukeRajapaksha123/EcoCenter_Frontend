
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cushome from "./Component/CHome/home";
import Schedule from "./Component/Schedule/Schedule";
import VehicleAdmin from "./Component/Vehicle/vehicleAdmin";

import CusPackages from './Component/CHome/packages';
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";

import Transreport from "./Component/Schedule/GenTranRepo";
import React from 'react';
import AllShedulles from "./Component/Schedule/Allshedulle";
import AddShedullesinfo from "./Component/Schedule/Addshedulle";
import EditShedulles from "./Component/Schedule/Edit";
import Issues from "./Component/Schedule/issues";
import BlogContainer from "./Component/Blog/BlogContainer";
import AddBlog from "./Component/Blog/AddBlog";
import { initializeApp } from 'firebase/app';
import BlogCard from "./Component/Blog/BlogCard";
import BlogPostsTable from "./Component/Blog/BlogPostTable";
import MyDonationContent from "./Component/Donations/MyDonationContent";
import DonationContent from "./Component/Donations/DonationContent";

const firebaseConfig = {
  apiKey: "AIzaSyCb7Yo6jbsA30D0P8eQEtWLkrNAMeuQw4U",
  authDomain: "marioblog-ad8e5.firebaseapp.com",
  projectId: "marioblog-ad8e5",
  storageBucket: "marioblog-ad8e5.appspot.com",
  messagingSenderId: "134259039673",
  appId: "1:134259039673:web:d7b32a238ef0492bbeea68"
};

// Initialize Firebase
initializeApp(firebaseConfig);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cushome />} />
        <Route path="/add" element={<AddShedullesinfo />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/vehicleAdmin" element={<VehicleAdmin />} />
        <Route path="/all" element={<AllShedulles />} />
        <Route path="/vehicles" element={<CusPackages />} />
        <Route path="/TransRepo" element={<Transreport />} />
        <Route path="/Log" element={<Login />} />
        <Route path="/Reg" element={<Register />} />
        <Route path="/Update/:id" element={<EditShedulles />} />
        {/* Blog */}
        <Route path="/blog" element={<BlogContainer />} />
        <Route path="/blog-list" element={<BlogPostsTable />} />
        <Route path="/blog/:id" element={<BlogCard />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit-blog/:id" element={<AddBlog />} />
        {/* Donations */}
        <Route path="/my-donation-list" element={<DonationContent />} />
        <Route path="/donations" element={<MyDonationContent />} />
      </Routes>
    </Router>
  );
}

export default App;
