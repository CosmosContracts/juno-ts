import { typeFromJSON } from "../../v1/packet";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../../../helpers";
import { MsgRegisterInterchainAccount, MsgSendTx } from "./tx";
export interface AminoMsgRegisterInterchainAccount extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterInterchainAccount";
  value: {
    owner: string;
    connection_id: string;
    version: string;
  };
}
export interface AminoMsgSendTx extends AminoMsg {
  type: "cosmos-sdk/MsgSendTx";
  value: {
    owner: string;
    connection_id: string;
    packet_data: {
      type: number;
      data: Uint8Array;
      memo: string;
    };
    relative_timeout: string;
  };
}
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterInterchainAccount): AminoMsgRegisterInterchainAccount["value"] => {
      return {
        owner,
        connection_id: connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      version
    }: AminoMsgRegisterInterchainAccount["value"]): MsgRegisterInterchainAccount => {
      return {
        owner,
        connectionId: connection_id,
        version
      };
    }
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
    aminoType: "cosmos-sdk/MsgSendTx",
    toAmino: ({
      owner,
      connectionId,
      packetData,
      relativeTimeout
    }: MsgSendTx): AminoMsgSendTx["value"] => {
      return {
        owner,
        connection_id: connectionId,
        packet_data: {
          type: packetData.type,
          data: packetData.data,
          memo: packetData.memo
        },
        relative_timeout: relativeTimeout.toString()
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      packet_data,
      relative_timeout
    }: AminoMsgSendTx["value"]): MsgSendTx => {
      return {
        owner,
        connectionId: connection_id,
        packetData: {
          type: typeFromJSON(packet_data.type),
          data: packet_data.data,
          memo: packet_data.memo
        },
        relativeTimeout: Long.fromString(relative_timeout)
      };
    }
  }
};