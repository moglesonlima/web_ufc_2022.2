import axios from "axios";
import React, { useState } from "react";

const CreateProfessor = () => {
  const baseUrl = process.env.REACT_APP_URL_PROF;

  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    //criando obj professor
    const professor = { name, university, degree };

    //cadastro professor
    axios
      .post(baseUrl, professor)
      .then((response) => {
        alert("Professor cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Create Professor...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>University: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite Universidade"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Degree: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite Degree"
            onChange={(event) => {
              setDegree(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Create Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessor;
