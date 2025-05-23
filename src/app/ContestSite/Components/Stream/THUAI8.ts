import { RpcError } from "grpc-web";
import { AvailableServiceClient } from "@/generated/grpc-web/THUAI8/ServicesServiceClientPb";
import * as MessageType from "@/generated/grpc-web/THUAI8/MessageType_pb";
import * as Message2Clients from "@/generated/grpc-web/THUAI8/Message2Clients_pb";
import * as Message2Server from "@/generated/grpc-web/THUAI8/Message2Server_pb";
import { StreamProps } from "../../StreamPage";
import { message } from "antd";

/* ---------------- 不随渲染刷新的常量和组件 ---------------- */
const playerID = Math.floor(Math.random() * 9999) + 2024;
/* ---------------- 主⻚⾯ ---------------- */
const streamTHUAI8: (props: StreamProps) => void = ({
  streamUrl,
  port,
  update,
}) => {
  const envoyPort = (Number(port) - 1000).toString();
  const client = new AvailableServiceClient(streamUrl + ":" + envoyPort);
  const request = new Message2Server.IDMsg();
  request.setCharacterId(playerID);
  client.tryConnection(
    request,
    {},
    (error: RpcError, response: Message2Clients.BoolRes) => {
      if (!error) {
        console.log("Success making gRPC call:", response.toObject());
        const spectator = new Message2Server.CharacterMsg();
        spectator.setCharacterId(playerID);
        const stream = client.addCharacter(spectator, {});
        stream.on("data", (response) => {
          if (response.getGameState() === MessageType.GameState.GAME_END) {
            stream.cancel();
            message.info("对战结束");
            console.log("Game Ended.");
          }
          update(response);
        });
        stream.on("status", (status) => {
          console.log("Received status from server:", status);
        });
        stream.on("error", (error) => {
          console.error("Error making gRPC call:", error);
        });
        stream.on("end", () => {
          console.log("Server ended streaming connection.");
        });
      } else {
        message.warning({ content: "直播连接失败", key: "failMessage" });
        console.error("Error making gRPC call:", error);
      }
    },
  );
};

export default streamTHUAI8;
