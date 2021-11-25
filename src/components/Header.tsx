import { useLocation } from "react-router";
import Button from "./Button";

interface IHeaderProps {
  title: string;
  onAdd: () => void;
  showAddTask: boolean;
}

export default function Header({ title, onAdd, showAddTask }: IHeaderProps) {

  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        color={showAddTask ? "black" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
}
