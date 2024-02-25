import Card from "@/app/components/Card";
import Create from "@/app/components/Modal/Create";
import CardContainer from "../Interfaces/components/CardContainer";

export default function Todolist() {
  return (
    <div
      className="flex flex-col justify-center items-center "
      style={{ height: "100vh" }}
    >
      <CardContainer />
    </div>
  );
}
