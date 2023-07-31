import Board from "@/components/Board";
import Bot from "@/components/Bot";

export default function Home() {
  return (
    <>
      <Bot />

      <main className="mb-20">
        <Board />
      </main>
    </>
  );
}
