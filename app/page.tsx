import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      Welcome to Drag and Drop Todolist
      <Button
        style={{
          width: "200px",
          height: "50px",
          border: "1px solid white",
          borderRadius: "10px",
        }}
        pathName="/todolist"
      >
        Enter to Todolist
      </Button>
    </main>
  );
}
