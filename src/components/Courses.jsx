import React from 'react';
import Csharp from '../assets/C sharp.jpg';
import japanese from '../assets/japanese.jpg';
import BasicElectronics from '../assets/Basic Electronics.jpeg';
import data_analysis from '../assets/data-analysis.jpeg';
import cpp from '../assets/Cpp.jpg';
import react from '../assets/React.jpg';
import HTML from '../assets/HTML.jpg';
import GPU from '../assets/GPU.png';
import SolidWorks from '../assets/SolidWorks.png';
import SAPMM from '../assets/SAPMM.jpg';
import GIT from '../assets/GIT.png';

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
  },
  {
  title: "Hands-on GPU Programming",
  desc: "Unlock the power of parallel computing with CUDA. Learn basics of parallelism, GPU programming concepts, CUDA development environment, memory and execution models, error handling, atomics, streams, and debugging. Solve real-world problems, explore design patterns, tackle puzzles, and build projects to gain hands-on expertise in high-performance computing.",
  image: GPU,  // replace with actual image import
  level: "Intermediate to Advanced",
  courseCode: "GPU201"
},
{
  title: "SAP MM (Materials Management)",
  desc: "Master SAP MM to streamline procurement and inventory processes. Learn organizational structure, master data management, procurement cycles, purchase requisitions, purchase orders, goods receipts, invoice verification, pricing, valuation, and integration with other SAP modules. Gain hands-on skills for configuration, real-time reporting, and optimizing supply chain operations.",
  image: SAPMM,  // replace with actual image import
  level: "Beginner to Intermediate",
  courseCode: "SAPMM301"
},
{
  title: "Git & GitHub",
  desc: "Learn version control with Git and collaborate using GitHub. Understand repositories, commits, branches, merges, pull requests, and conflict resolution. Gain hands-on skills in distributed version control, managing workflows, open-source collaboration, and integrating GitHub with modern development pipelines.",
  image: GIT,  // replace with actual image import
  level: "Beginner",
  courseCode: "GIT201"
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
