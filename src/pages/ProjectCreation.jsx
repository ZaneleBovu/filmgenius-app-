import React, { useState } from "react";
import { db } from "../firebase/firebase"; // 🔁 adjust if your path differs
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ProjectCreation = () => {
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = async () => {
    if (!projectName) {
      alert("Please enter a project name.");
      return;
    }

    try {
      await addDoc(collection(db, "projects"), {
        name: projectName,
        createdAt: serverTimestamp(),
      });

      alert("Project created successfully!");
      setProjectName("");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project.");
    }
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">🎬 Create a New Project</h2>
      <input
        className="border p-2 w-96"
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
      />
      <br />
      <button
        onClick={handleCreateProject}
        className="mt-4 px-4 py-2 border bg-purple-600 text-white"
      >
        Create Project
      </button>
    </div>
  );
};

export default ProjectCreation.jsx;
