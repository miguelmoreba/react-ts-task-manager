import Button from "./Button";

interface IHeaderProps {
  title: string;
  onAdd: () => void;
  showAddTask: boolean;
}

export default function Header({ title, onAdd, showAddTask }: IHeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "black" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
}
