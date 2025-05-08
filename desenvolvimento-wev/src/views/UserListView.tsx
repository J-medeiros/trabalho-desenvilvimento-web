import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/UserService";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

export function UserListView() {
  const [users, setUsers] = useState<string[]>([]);
  const t = useTranslation();

  useEffect(() => {
    const data = getUsers();
    setUsers(data);
  }, []);

  const userList = useMemo(() => {
    return users.map((user, index) => <li key={index}>{user}</li>);
  }, [users]);

  return (
    <div>
      <h1>{t.titleList}</h1>
      <ul>{userList}</ul>
      <Link to="/novo">{t.submitButton}</Link>
    </div>
  );
}
