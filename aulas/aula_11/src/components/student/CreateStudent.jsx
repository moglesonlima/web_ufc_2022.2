import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProfessor = () => {
  const baseUrl = process.env.REACT_APP_URL_STUD;
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0.0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentNew = { name, course, ira };

    axios
      .post(baseUrl, studentNew)
      .then((response) => {
        alert("Estudante cadastrado com sucesso!");
        navigate("/liststudent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1>Create Student...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Curso: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite Curso"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>IRA: </label>
          <input
            type="numeric"
            min={0}
            max={10}
            className="form-control"
            placeholder="Digite IRA"
            onChange={(event) => {
              setIra(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Create Student"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessor;
