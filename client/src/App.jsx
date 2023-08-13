import Message from "./components/message";
import useSocket from "./hooks/useSocket";

export default function App() {
  const { phrases } = useSocket();

  return (
    <>
      <h3>Messages:</h3>
      <div className="container">
        {phrases.map((phrase, idx) => (
          <Message key={`${idx}`} phrase={phrase} />
        ))}
      </div>
    </>
  );
}
