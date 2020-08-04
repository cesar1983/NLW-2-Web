import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--zCIfqja8--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/394197/ba33cd85-47b5-4a87-b768-cc5e6e44f4d2.jpeg" />
        <div>
          <strong>Cesar</strong>
          <span>Dev</span>
        </div>
      </header>
      <p>Dev top</p>
      <footer>
        <p>
          Preço/hr
          <strong>xx.x</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
