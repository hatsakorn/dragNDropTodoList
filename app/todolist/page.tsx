import Card from "@/app/components/Card";
import Create from "@/app/components/Modal/Create";

export default function Todolist() {
  return (
    <div
      className="flex flex-col justify-center items-center "
      style={{ height: "100vh" }}
    >
      <div className="bg-blue-200 rounded-md p-2">
        <header>Project Name</header>
        <div className="w-64">
          <div className="flex justify-between">
            <div>Title</div>
            <div>...</div>
          </div>
          <Card>Card Name</Card>
        </div>
        <Create />
      </div>
    </div>
  );
}
