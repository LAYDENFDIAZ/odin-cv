// src/App.tsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-3xl font-bold mb-8">My CV</header>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <p>
          <strong>Name:</strong> Your Name
        </p>
        <p>
          <strong>Email:</strong> your@email.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <p>
          <strong>University:</strong> Your University
        </p>
        <p>
          <strong>Degree:</strong> Bachelor's in Computer Science
        </p>
        <p>
          <strong>Graduation Year:</strong> 2022
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-4">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML/CSS</li>
          <li>Git</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">
            Software Developer at XYZ Company
          </h3>
          <p className="text-sm">June 2022 - Present</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida orci a odio. Nullam varius turpis et commodo pharetra.
          </p>
        </div>
        {/* Add more experiences as needed */}
      </section>
    </div>
  );
}

export default App;
