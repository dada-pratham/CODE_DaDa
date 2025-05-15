import React from 'react';
import Csharp from '../assets/C sharp.jpg';
import japanese from '../assets/japanese.jpg';
import BasicElectronics from '../assets/Basic Electronics.jpeg';
import data_analysis from '../assets/data-analysis.jpeg';
import cpp from '../assets/Cpp.jpg';
import react from '../assets/React.jpg';
import HTML from '../assets/HTML.jpg';
import SolidWorks from '../assets/SolidWorks.png';

const courses = [
  {
    title: "Software Development (C#)",
    desc: "Learn C# programming fundamentals and build applications using .NET framework.",
    image: Csharp,
    level: "Beginner",
    courseCode: "CS101"
  },
  {
    title: "Japanese Language & Culture",
    desc: "Comprehensive course covering Japanese language (N5-N4 level) and cultural traditions.",
    image: japanese,
    level: "Intermediate",
    courseCode: "JA102"
  },
  {
    title: "Basic Electronics & PCB Design",
    desc: "Introduction to electronic components, circuit design, and PCB layout fundamentals.",
    image: BasicElectronics,
    level: "Beginner",
    courseCode: "EE103"
  },
  {
    title: "Data Analysis (Power BI, SQL, Excel)",
    desc: "Master data visualization with Power BI, database querying with SQL, and analysis with Excel.",
    image: data_analysis,
    level: "Intermediate",
    courseCode: "DA201"
  },
  {
    title: "Software Development (C++)",
    desc: "Learn object-oriented programming and system development using C++.",
    image: cpp,
    level: "Beginner",
    courseCode: "CS104"
  },
  {
    title: "Web Development (React JS)",
    desc: "Build modern web applications using React.js framework and related technologies.",
    image: react,
    level: "Beginner",
    courseCode: "WD105"
  },
  {
    title: "Web Development (HTML/CSS/Javascript)",
    desc: "Fundamentals of front-end web development using core web technologies.",
    image: HTML,
    level: "Beginner",
    courseCode: "WD106"
  },
  {
    title: "Mechanical CAD (Solidworks)",
    desc: "Learn 3D modeling, assembly design, and technical drawing using Solidworks software.",
    image: SolidWorks,
    level: "Intermediate",
    courseCode: "ME107"
  }
];

function Courses() {
  return (
    <section id="courses" className="py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">Courses We Offer</h2>
        <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <a href="#contact" className="card-link-wrapper">
              <div className="card h-100 course-card">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body course-card-body">
                  <h5 className="course-title">{course.title}</h5>
                  <p className="course-desc">{course.desc}</p>
                   {/* Display Course Code */}
                  <p className="course-code"><strong>Course Code:</strong> {course.courseCode}</p>

                  <p className="course-detail"><strong>Level:</strong> {course.level}</p>
                </div>
              </div>
            </a>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
}

export default Courses;
