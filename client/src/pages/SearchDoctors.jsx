import { Button, TextField, IconButton } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState, useEffect } from "react";
import './docCard.css';

export default function SearchDoctors() {
    const [doctorList, setDoctorList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/docRoute/searchDoctors');
            setDoctorList(res.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        // Implement search functionality based on `searchTerm`
    };

    return (
        <div className="main-container">
            <div className="search-bar">
                <TextField
                    label="Search Doctors"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <IconButton onClick={handleSearch} className="search-button">
                    {/* <SearchIcon /> */}
                </IconButton>
            </div>
            <div className="container">
                {loading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    doctorList.map((obj, index) => (
                        <div key={index} className="doc-card">
                            <img src={obj.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-T18cwnASMNvreYJ3OOJpVHQGzWUMrMxtQ&s"} alt="Doctor" className="doc-image" />
                            <div className="doc-info">
                                <h1>{obj.name}</h1>
                                <p>Specialization: {obj.specialization}</p>
                                <p>Experience: {obj.experience} years</p>
                                <p>Contact: {obj.contact}</p>
                            </div>
                            <Button variant="contained" color="primary" className="appointment-button">Book an Appointment</Button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
