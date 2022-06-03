import { server } from "./http";
import "../src/websocket/ChatService";

server.listen(3333, () => console.log("Server is running on port 3333"));
