import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/UserService";
import { useTranslation } from "../hooks/useTranslation";

export function UserFormView() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const t = useTranslation();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addUser(name);
      navigate("/");
    },
    [name, navigate]
  );

  return(
  <div>
    <h1>{t.titleForm}</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t.inputPlaceholder}
      />


      <button type="submit">{t.newUser}</button>
    </form>
  </div>);
}
