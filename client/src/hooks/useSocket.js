import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("127.0.0.1:5000");

function useSocket() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    socket.on("phrases", (value) => {
      setPhrases((phrases) => [value, ...phrases]);
    });

    return () => {
      socket.off("phrases");
    };
  }, []);

  return { phrases };
}

export default useSocket;
