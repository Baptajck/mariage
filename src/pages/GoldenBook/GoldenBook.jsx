import s from "./GoldenBook.module.scss";
import { useState, useEffect } from "react";
import CustomLink from "../../components/CustomLink/CustomLink";

export default function GoldenBook() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://axurynn-mariage-ff.herokuapp.com/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center fs-4 mt-3">Livre d'or</h1>
      <div className="d-flex justify-content-center my-4">
        <CustomLink to="/golden_book/add" className={s.link}>
          Ajouter un message
        </CustomLink>
      </div>
      <div className="">
        {messages.map((message) => (
          <div key={message.id} className="card m-3">
            <div
              className="card-body"
              style={{
                borderColor: "#bbb7ce",
                backgroundColor: "rgba(187, 183, 206, .3)",
              }}
            >
              <p className="card-text fs-5">{message.message}</p>
              <h5
                className="card-title text-end fs-6"
                // style={{ color: "#bbb7ce" }}
              >
                {message.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
