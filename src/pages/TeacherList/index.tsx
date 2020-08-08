import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

const TeacherList = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [searchClassesResult, setSearchClassesResult] = useState([]);
  const searchTeachers = (e: FormEvent) => {
    e.preventDefault();

    api
      .get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then((response) => {
        setSearchClassesResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {searchClassesResult.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
