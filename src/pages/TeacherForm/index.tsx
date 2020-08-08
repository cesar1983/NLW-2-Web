import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import warningIcon from "../../assets/images/icons/warning.svg";

import api from "../../services/api";

import "./styles.css";

const Teach = () => {
  const history = useHistory();

  const initialScheduleState = [
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ];

  const [scheduleItems, setScheduleItems] = useState(initialScheduleState);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  };

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then((response) => {
        alert("Cadastro realizado com sucesso");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Dar aulas" description="Preencher o form" />

      <main>
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
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

            <Input
              name="cost"
              label="Custo da aula/hr"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis{" "}
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div className="schedule-item" key={index}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    value={scheduleItem.week_day}
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
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button>Salvar</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Teach;
