const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const app = express();

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors()); // Use the cors middleware


// Handle the form submission
app.post('/submit', (req, res) => {
  const { name, age, grade, gender, fieldOfStudy, clubsAndOrganizations} = req.body;

    let clubs = "";
    let response = "";
    let courses = "";

    let jobsLink = "https://www.linkedin.com/jobs/search/?f_E=1&geoId=103644278&keywords=" + fieldOfStudy + "&location=United%20States&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true"

    switch (fieldOfStudy) {

       case 'Computer Science (BSCS)':

        clubs = "Some organizations we recommend joining: VT Hacks, Cyber VT, Artificial Intelligence and Machine Learning Club, Association for Women in Computing (AWC), and CS Squared"
        if(grade == 2027)
        {
            courses = "Important courses to take over your next four years: CS 1114, CS 2114, CS 2104, CS 2505,  CS 2506, CS 3214, CS 3304, CS 4104."
        }
        else if(grade == 2026)
        {
            courses = "Important courses to take over your next three years: CS 2114, CS 2104, CS 2505,  CS 2506, CS 3214, CS 3304, CS 4104."
        }
        else if(grade ==2025)
        {
            courses = "Important courses to take over your next two years:  CS 2505,  CS 2506, CS 3214, CS 3304, CS 4104."
        }
        else if(grade == 2024)
        {
            courses  = "Important courses to take in your final year: CS 3304 and CS 4104."
        }
        else
        {
            courses = "For you we recommend looking into a Masters Program, they have some great classes for students like you to take."
        }
        break;

       case 'Computer Engineering (BSCPE)':

        clubs = "Organizations we recommend joining: Eta Kappa Nu and Institute of Electrical, Electronics Engineers, BOLT, RoboGrinder, and the American Society of Mechanical Engineers"
        if(grade == 2027)
        {
            courses = "Important courses to take over your next four years: ECE 1004, ECE 2024, ECE 2514,  ECE 2544, ECE 2214, ECE 2564, ECE 2714, ECE 2804, ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade == 2026)
        {
            courses = "Important courses to take over your next three years: ECE 2024, ECE 2514,  ECE 2544, ECE 2214, ECE 2564, ECE 2714, ECE 2804, ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade ==2025)
        {
            courses = "Important courses to take over your next two years: ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade == 2024)
        {
            courses  = "Since you finished the core mateiral, some electives we recommend are: ECE 3564, ECE 4414, ECE 4424, ECE 4514, ECE 4524"
        }
        else
        {
            courses = "For you we recommend looking into a Masters Program, they have some great classes for students like you to take."
        }
        break;

        case 'Mechanical Engineering (BSME)':
        
        clubs = "Organizations we recommend joining: Teaching Robotics and Engineering, SailBOT, Formula SAE, RoboGrinder, Design Build Fly and the American Society of Mechanical Engineers"
        if(grade == 2027)
        {
            courses = "Important courses to take over your next four years: ECE 1004, ECE 2024, ECE 2514,  ECE 2544, ECE 2214, ECE 2564, ECE 2714, ECE 2804, ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade == 2026)
        {
            courses = "Important courses to take over your next three years: ECE 2024, ECE 2514,  ECE 2544, ECE 2214, ECE 2564, ECE 2714, ECE 2804, ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade ==2025)
        {
            courses = "Important courses to take over your next two years: ECE 3504, ECE 3514, ECE 3544, ECE 3574."
        }
        else if(grade == 2024)
        {
            courses  = "Since you finished the core mateiral, some electives we recommend are: ECE 3564, ECE 4414, ECE 4424, ECE 4514, ECE 4524"
        }
        else
        {
            courses = "For you we recommend looking into a Masters Program, they have some great classes for students like you to take."
        }
        break;

        default: 
        response = "aint a major"
        
    }
  // Process the form data as needed (e.g., store it in a database)
  
  // Send a response back to the React app
  res.json({ message: {
    clubMessage:clubs,
    courseMessage:courses,
    jobsMessage: jobsLink
  } },);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

