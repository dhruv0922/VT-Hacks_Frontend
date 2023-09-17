import React, { useState, useRef} from 'react';
import Select from 'react-select'; // Import react-select
import './App.css'; // Import the CSS file
import axios from 'axios';






function App() {
  const [name, setName] = useState('');
  const [clubResult, setClubResult] = useState('');
  const [courseResult, setCourseResult] = useState('');
  const [jobsResult, setJobsResult] = useState('');
  const [internshipsForYou, setinternshipsForYou] = useState('');


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
  });


  const clubsAndOrganizationsOptions = [
    { value: 'Google Developers Club', label: 'Google Developers Club' },
    { value: 'VT Hacks', label: 'VT Hacks' },
    { value: 'Cyber VT', label: 'Cyber VT' },
    { value: 'Bolt', label: 'Bolt' },
    { value: 'Robo Grinder', label: 'Robo Grinder' },
    { value: 'Astrobotics', label: 'Astrobotics' },
    { value: 'Amazon Web Service Club', label: 'Amazon Web Service Club' },
    { value: 'AI and Machine Learning', label: 'AI and Machine Learning' },
    { value: 'Woman in Cybersecurity', label: 'Woman in Cybersecurity' },
  ];


  const Skills = [
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaSript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'C', label: 'C' },
    { value: 'R', label: 'R' },
    { value: 'Python', label: 'Phython' },
    { value: 'Data Analysis', label: 'Data Analysis' },
    { value: 'Cirvuts & Devices', label: 'Circuts & Devices' },
    { value: 'Physics', label: 'Physics' },
   ];
   


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSelectChange = (selectedOptions) => {
    const clubsAndOrganizations = selectedOptions.map((option) => option.value);
    setFormData({ ...formData, clubsAndOrganizations });
  };

  const handleGenerateRoadmap = (e) => {
    e.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
 
 
  const containerRef = useRef(null);
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:4000/submit', formData);
      console.log('We up, heres the data:', response.data);
      setClubResult(response.data.message.clubMessage)
      setCourseResult(response.data.message.courseMessage)
      setJobsResult(response.data.message.jobsMessage)
      setinternshipsForYou("Internships For You!")


    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (



    <div className="career-roadmap-container">
      <header className="career-roadmap-header">
        <img src="vt.png" alt="" className="logo" />
        <h1 className="title">Start Your Roadmap Below!</h1>
      </header>
 
 
      <main className="career-roadmap-main">
        <section className="input-form">
          <h2 className="form-title"></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <label htmlFor="name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
 
 
            <div className="form-element">
              <label htmlFor="grade" className="form-label">
                Year of Graduation:
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value=""> </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
 
 
            <div className="form-element">
  <label htmlFor="fieldOfStudy" className="form-label">
    Field Of Study:
  </label>
  <select
    id="fieldOfStudy"
    name="fieldOfStudy"
    value={formData.fieldOfStudy}
    onChange={handleChange}
    className="form-input"
    required
  >
    <option value=""> </option>
    <option value="Aerospace and Ocean Engineering (BSAOE)">Aerospace and Ocean Engineering (BSAOE)</option>
    <option value="Biological Systems Engineering (BSBSE)">Biological Systems Engineering (BSBSE) (BSE)</option>
    <option value="Biomedical Engineering (BSBME)">Biomedical Engineering (BSBME)</option>
    <option value="Building Construction (BS)">Building Construction (BS)</option>
    <option value="Chemical Engineering (BSCHE)">Chemical Engineering (BSCHE)</option>
    <option value="Civil Engineering (BSCE)">Civil Engineering (BSCE)</option>
    <option value="Computer Engineering (BSCPE)">Computer Engineering (BSCPE)</option>
    <option value="Computer Science (BSCS)">Computer Science (BSCS)</option>
    <option value="Construction Engineering and Management (BSCEM)">Construction Engineering and Management (BSCEM)</option>
    <option value="Electrical Engineering (BSEE)">Electrical Engineering (BSEE)</option>
    <option value="Industrial and Systems Engineering (BSISE)">Industrial and Systems Engineering (BSISE)</option>
    <option value="Materials Science Engineering (BSMSE)">Materials Science Engineering (BSMSE)</option>
    <option value="Mechanical Engineering (BSME)">Mechanical Engineering (BSME)</option>
    <option value="Mining Engineering (BSMNE)">Mining Engineering (BSMNE)</option>
  </select>
 </div>
 
 
 
 
            <div className="form-element">
              <label className="form-label">Clubs and Organizations:</label>
              <Select
                options={clubsAndOrganizationsOptions}
                isMulti
                onChange={handleSelectChange}
              />
            </div>
 
 
            <button type="submit" className="submit-button">
              Generate Roadmap
            </button>
          </form>
        </section>
        <div>
          Your Personal Roadmap with Resources:
        </div>
        <div>
        {clubResult}
      </div>
      <div>
        {courseResult}
      </div>
      <a href={jobsResult}>{internshipsForYou}</a>
      </main>
     
    </div>
  );
 }


export default App;

