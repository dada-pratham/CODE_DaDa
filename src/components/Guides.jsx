import React from 'react';

const guides = [
  {
    name: "Prathamesh Aher",
    profession: "Senior Software Engineer",
    qualification: "BE (Mechanical)",
    experience: "4+ Years",
    image: "/pratham.jpg",
  },
  {
    name: "Kunal Aglave",
    profession: "Software Engineer Specialist ",
    qualification: "BE (Mechanical)",
    experience: "4+ Years",
    image: "/kunal.jpg",
  },
  {
    name: "Aishwarya Gadekar",
    profession: "Senior Bilingual Developer",
    qualification: "BE (Mechanical)(JLPT N3 Certified)",
    experience: "4+ Years",
    image: "/aishwarya.jpg",
  },
  {
    name: "Rushikesh Galhe",
    profession: "Software Engineer",
    qualification: "BE (CS/IT)",
    experience: "4+ Years",
    image: "/Rushi.jpg",
  },
];

function Guides() {
  return (
    <section id="guides" className="py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">Meet Our Guides</h2>
        <div className="row">
          {guides.map((guide, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 guide-card">
                <img src={guide.image} className="card-img-top" alt={guide.name} />
                <div className="card-body guide-card-body">
                  <h5 className="guide-title">{guide.name}</h5>
                  <p className="guide-detail"><strong>Profession:</strong> {guide.profession}</p>
                  <p className="guide-detail"><strong>Qualification:</strong> {guide.qualification}</p>
                  <p className="guide-detail"><strong>Experience:</strong> {guide.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guides;
