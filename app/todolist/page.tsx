import Card from "@/app/components/Card";

export default function Todolist() {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "800px" }}
    >
      <header>Project Name</header>
      <div className="w-32">
        <div className="flex justify-between">
          <div>Title</div>
          <div>...</div>
        </div>
        <Card>Card Name</Card>
      </div>
    </div>
  );
}
