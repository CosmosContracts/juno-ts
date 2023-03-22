import * as _60 from "./applications/transfer/v1/genesis";
import * as _61 from "./applications/transfer/v1/query";
import * as _62 from "./applications/transfer/v1/transfer";
import * as _63 from "./applications/transfer/v1/tx";
import * as _64 from "./applications/transfer/v2/packet";
import * as _65 from "./core/channel/v1/channel";
import * as _66 from "./core/channel/v1/genesis";
import * as _67 from "./core/channel/v1/query";
import * as _68 from "./core/channel/v1/tx";
import * as _69 from "./core/client/v1/client";
import * as _70 from "./core/client/v1/genesis";
import * as _71 from "./core/client/v1/query";
import * as _72 from "./core/client/v1/tx";
import * as _73 from "./core/commitment/v1/commitment";
import * as _74 from "./core/connection/v1/connection";
import * as _75 from "./core/connection/v1/genesis";
import * as _76 from "./core/connection/v1/query";
import * as _77 from "./core/connection/v1/tx";
import * as _78 from "./lightclients/localhost/v1/localhost";
import * as _79 from "./lightclients/solomachine/v1/solomachine";
import * as _80 from "./lightclients/solomachine/v2/solomachine";
import * as _81 from "./lightclients/tendermint/v1/tendermint";
import * as _157 from "./applications/transfer/v1/query.lcd";
import * as _158 from "./core/channel/v1/query.lcd";
import * as _159 from "./core/client/v1/query.lcd";
import * as _160 from "./core/connection/v1/query.lcd";
import * as _161 from "./applications/transfer/v1/query.rpc.Query";
import * as _162 from "./core/channel/v1/query.rpc.Query";
import * as _163 from "./core/client/v1/query.rpc.Query";
import * as _164 from "./core/connection/v1/query.rpc.Query";
import * as _165 from "./applications/transfer/v1/tx.rpc.msg";
import * as _166 from "./core/channel/v1/tx.rpc.msg";
import * as _167 from "./core/client/v1/tx.rpc.msg";
import * as _168 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _165.MsgClientImpl;
                QueryClientImpl: typeof _161.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                    denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                    params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _157.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _63.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _63.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _63.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgTransfer;
                    fromPartial(object: any): _63.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _63.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgTransferResponse;
                    fromPartial(_: any): _63.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _62.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DenomTrace;
                    fromPartial(object: any): _62.DenomTrace;
                };
                Params: {
                    encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                    fromPartial(object: any): _62.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _61.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDenomTraceRequest;
                    fromPartial(object: any): _61.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _61.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDenomTraceResponse;
                    fromPartial(object: any): _61.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _61.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDenomTracesRequest;
                    fromPartial(object: any): _61.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _61.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDenomTracesResponse;
                    fromPartial(object: any): _61.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                    fromPartial(_: any): _61.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                    fromPartial(object: any): _61.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                    fromPartial(object: any): _60.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _64.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.FungibleTokenPacketData;
                    fromPartial(object: any): _64.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _166.MsgClientImpl;
                QueryClientImpl: typeof _162.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                    channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                    connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                    channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _158.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _68.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _68.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _68.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _68.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _68.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _68.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _68.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _68.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _68.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _68.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _68.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _68.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _68.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _68.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _68.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _68.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenInit;
                    fromPartial(object: any): _68.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _68.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenInitResponse;
                    fromPartial(_: any): _68.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _68.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenTry;
                    fromPartial(object: any): _68.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _68.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenTryResponse;
                    fromPartial(_: any): _68.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _68.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenAck;
                    fromPartial(object: any): _68.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _68.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _68.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _68.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenConfirm;
                    fromPartial(object: any): _68.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _68.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _68.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _68.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelCloseInit;
                    fromPartial(object: any): _68.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _68.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _68.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _68.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelCloseConfirm;
                    fromPartial(object: any): _68.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _68.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _68.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _68.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgRecvPacket;
                    fromPartial(object: any): _68.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _68.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgRecvPacketResponse;
                    fromPartial(_: any): _68.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _68.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTimeout;
                    fromPartial(object: any): _68.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _68.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTimeoutResponse;
                    fromPartial(_: any): _68.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _68.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTimeoutOnClose;
                    fromPartial(object: any): _68.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _68.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTimeoutOnCloseResponse;
                    fromPartial(_: any): _68.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _68.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgAcknowledgement;
                    fromPartial(object: any): _68.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _68.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgAcknowledgementResponse;
                    fromPartial(_: any): _68.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _67.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelRequest;
                    fromPartial(object: any): _67.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _67.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelResponse;
                    fromPartial(object: any): _67.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _67.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelsRequest;
                    fromPartial(object: any): _67.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _67.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelsResponse;
                    fromPartial(object: any): _67.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _67.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _67.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _67.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _67.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _67.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelClientStateRequest;
                    fromPartial(object: any): _67.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _67.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelClientStateResponse;
                    fromPartial(object: any): _67.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _67.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _67.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _67.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _67.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _67.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _67.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _67.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _67.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _67.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _67.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _67.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _67.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _67.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketReceiptRequest;
                    fromPartial(object: any): _67.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _67.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketReceiptResponse;
                    fromPartial(object: any): _67.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _67.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _67.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _67.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _67.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _67.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _67.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _67.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _67.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _67.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _67.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _67.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _67.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _67.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _67.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _67.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _67.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _67.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _67.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _67.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _67.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                    fromPartial(object: any): _66.GenesisState;
                };
                PacketSequence: {
                    encode(message: _66.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.PacketSequence;
                    fromPartial(object: any): _66.PacketSequence;
                };
                stateFromJSON(object: any): _65.State;
                stateToJSON(object: _65.State): string;
                orderFromJSON(object: any): _65.Order;
                orderToJSON(object: _65.Order): string;
                State: typeof _65.State;
                StateSDKType: typeof _65.StateSDKType;
                Order: typeof _65.Order;
                OrderSDKType: typeof _65.OrderSDKType;
                Channel: {
                    encode(message: _65.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Channel;
                    fromPartial(object: any): _65.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _65.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.IdentifiedChannel;
                    fromPartial(object: any): _65.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _65.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Counterparty;
                    fromPartial(object: any): _65.Counterparty;
                };
                Packet: {
                    encode(message: _65.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Packet;
                    fromPartial(object: any): _65.Packet;
                };
                PacketState: {
                    encode(message: _65.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PacketState;
                    fromPartial(object: any): _65.PacketState;
                };
                Acknowledgement: {
                    encode(message: _65.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Acknowledgement;
                    fromPartial(object: any): _65.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _167.MsgClientImpl;
                QueryClientImpl: typeof _163.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                    clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                    consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                    consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                    clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                    clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                    upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _159.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _72.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _72.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _72.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _72.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _72.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _72.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _72.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _72.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _72.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgCreateClient;
                    fromPartial(object: any): _72.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _72.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgCreateClientResponse;
                    fromPartial(_: any): _72.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _72.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgUpdateClient;
                    fromPartial(object: any): _72.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _72.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgUpdateClientResponse;
                    fromPartial(_: any): _72.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _72.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgUpgradeClient;
                    fromPartial(object: any): _72.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _72.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgUpgradeClientResponse;
                    fromPartial(_: any): _72.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _72.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _72.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _72.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _72.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _71.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStateRequest;
                    fromPartial(object: any): _71.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _71.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStateResponse;
                    fromPartial(object: any): _71.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _71.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStatesRequest;
                    fromPartial(object: any): _71.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _71.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStatesResponse;
                    fromPartial(object: any): _71.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _71.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryConsensusStateRequest;
                    fromPartial(object: any): _71.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _71.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryConsensusStateResponse;
                    fromPartial(object: any): _71.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _71.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryConsensusStatesRequest;
                    fromPartial(object: any): _71.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _71.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryConsensusStatesResponse;
                    fromPartial(object: any): _71.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _71.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStatusRequest;
                    fromPartial(object: any): _71.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _71.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientStatusResponse;
                    fromPartial(object: any): _71.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _71.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientParamsRequest;
                    fromPartial(_: any): _71.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _71.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClientParamsResponse;
                    fromPartial(object: any): _71.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _71.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _71.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _71.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _71.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _71.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _71.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _71.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _71.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                    fromPartial(object: any): _70.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _70.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisMetadata;
                    fromPartial(object: any): _70.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _70.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _70.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _69.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.IdentifiedClientState;
                    fromPartial(object: any): _69.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _69.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ConsensusStateWithHeight;
                    fromPartial(object: any): _69.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _69.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ClientConsensusStates;
                    fromPartial(object: any): _69.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _69.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ClientUpdateProposal;
                    fromPartial(object: any): _69.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _69.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.UpgradeProposal;
                    fromPartial(object: any): _69.UpgradeProposal;
                };
                Height: {
                    encode(message: _69.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Height;
                    fromPartial(object: any): _69.Height;
                };
                Params: {
                    encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                    fromPartial(object: any): _69.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _73.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MerkleRoot;
                    fromPartial(object: any): _73.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _73.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MerklePrefix;
                    fromPartial(object: any): _73.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _73.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MerklePath;
                    fromPartial(object: any): _73.MerklePath;
                };
                MerkleProof: {
                    encode(message: _73.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MerkleProof;
                    fromPartial(object: any): _73.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _168.MsgClientImpl;
                QueryClientImpl: typeof _164.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                    connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                    clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                    connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _160.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _77.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _77.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _77.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _77.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _77.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _77.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _77.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _77.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _77.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenInit;
                    fromPartial(object: any): _77.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _77.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _77.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _77.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenTry;
                    fromPartial(object: any): _77.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _77.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _77.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _77.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenAck;
                    fromPartial(object: any): _77.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _77.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _77.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _77.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _77.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _77.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _77.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _76.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionRequest;
                    fromPartial(object: any): _76.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _76.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionResponse;
                    fromPartial(object: any): _76.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _76.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionsRequest;
                    fromPartial(object: any): _76.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _76.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionsResponse;
                    fromPartial(object: any): _76.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _76.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientConnectionsRequest;
                    fromPartial(object: any): _76.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _76.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientConnectionsResponse;
                    fromPartial(object: any): _76.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _76.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _76.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _76.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _76.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _76.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _76.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _76.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _76.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                    fromPartial(object: any): _75.GenesisState;
                };
                stateFromJSON(object: any): _74.State;
                stateToJSON(object: _74.State): string;
                State: typeof _74.State;
                StateSDKType: typeof _74.StateSDKType;
                ConnectionEnd: {
                    encode(message: _74.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ConnectionEnd;
                    fromPartial(object: any): _74.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _74.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.IdentifiedConnection;
                    fromPartial(object: any): _74.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _74.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Counterparty;
                    fromPartial(object: any): _74.Counterparty;
                };
                ClientPaths: {
                    encode(message: _74.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientPaths;
                    fromPartial(object: any): _74.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _74.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ConnectionPaths;
                    fromPartial(object: any): _74.ConnectionPaths;
                };
                Version: {
                    encode(message: _74.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Version;
                    fromPartial(object: any): _74.Version;
                };
                Params: {
                    encode(message: _74.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Params;
                    fromPartial(object: any): _74.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _78.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientState;
                    fromPartial(object: any): _78.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _79.DataType;
                dataTypeToJSON(object: _79.DataType): string;
                DataType: typeof _79.DataType;
                DataTypeSDKType: typeof _79.DataTypeSDKType;
                ClientState: {
                    encode(message: _79.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientState;
                    fromPartial(object: any): _79.ClientState;
                };
                ConsensusState: {
                    encode(message: _79.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConsensusState;
                    fromPartial(object: any): _79.ConsensusState;
                };
                Header: {
                    encode(message: _79.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Header;
                    fromPartial(object: any): _79.Header;
                };
                Misbehaviour: {
                    encode(message: _79.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Misbehaviour;
                    fromPartial(object: any): _79.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _79.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SignatureAndData;
                    fromPartial(object: any): _79.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _79.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TimestampedSignatureData;
                    fromPartial(object: any): _79.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _79.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SignBytes;
                    fromPartial(object: any): _79.SignBytes;
                };
                HeaderData: {
                    encode(message: _79.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.HeaderData;
                    fromPartial(object: any): _79.HeaderData;
                };
                ClientStateData: {
                    encode(message: _79.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientStateData;
                    fromPartial(object: any): _79.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _79.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConsensusStateData;
                    fromPartial(object: any): _79.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _79.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConnectionStateData;
                    fromPartial(object: any): _79.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _79.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChannelStateData;
                    fromPartial(object: any): _79.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _79.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketCommitmentData;
                    fromPartial(object: any): _79.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _79.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketAcknowledgementData;
                    fromPartial(object: any): _79.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _79.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketReceiptAbsenceData;
                    fromPartial(object: any): _79.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _79.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.NextSequenceRecvData;
                    fromPartial(object: any): _79.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _80.DataType;
                dataTypeToJSON(object: _80.DataType): string;
                DataType: typeof _80.DataType;
                DataTypeSDKType: typeof _80.DataTypeSDKType;
                ClientState: {
                    encode(message: _80.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ClientState;
                    fromPartial(object: any): _80.ClientState;
                };
                ConsensusState: {
                    encode(message: _80.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ConsensusState;
                    fromPartial(object: any): _80.ConsensusState;
                };
                Header: {
                    encode(message: _80.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Header;
                    fromPartial(object: any): _80.Header;
                };
                Misbehaviour: {
                    encode(message: _80.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Misbehaviour;
                    fromPartial(object: any): _80.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _80.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SignatureAndData;
                    fromPartial(object: any): _80.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _80.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.TimestampedSignatureData;
                    fromPartial(object: any): _80.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _80.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SignBytes;
                    fromPartial(object: any): _80.SignBytes;
                };
                HeaderData: {
                    encode(message: _80.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.HeaderData;
                    fromPartial(object: any): _80.HeaderData;
                };
                ClientStateData: {
                    encode(message: _80.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ClientStateData;
                    fromPartial(object: any): _80.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _80.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ConsensusStateData;
                    fromPartial(object: any): _80.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _80.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ConnectionStateData;
                    fromPartial(object: any): _80.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _80.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ChannelStateData;
                    fromPartial(object: any): _80.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _80.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketCommitmentData;
                    fromPartial(object: any): _80.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _80.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketAcknowledgementData;
                    fromPartial(object: any): _80.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _80.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketReceiptAbsenceData;
                    fromPartial(object: any): _80.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _80.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.NextSequenceRecvData;
                    fromPartial(object: any): _80.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _81.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientState;
                    fromPartial(object: any): _81.ClientState;
                };
                ConsensusState: {
                    encode(message: _81.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConsensusState;
                    fromPartial(object: any): _81.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _81.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Misbehaviour;
                    fromPartial(object: any): _81.Misbehaviour;
                };
                Header: {
                    encode(message: _81.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Header;
                    fromPartial(object: any): _81.Header;
                };
                Fraction: {
                    encode(message: _81.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Fraction;
                    fromPartial(object: any): _81.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _165.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _166.MsgClientImpl;
                    };
                    client: {
                        v1: _167.MsgClientImpl;
                    };
                    connection: {
                        v1: _168.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                            denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                            params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                            channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                            connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                            channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                            clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                            consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                            consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                            clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                            clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                            upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                            connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                            clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                            connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _157.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _158.LCDQueryClient;
                    };
                    client: {
                        v1: _159.LCDQueryClient;
                    };
                    connection: {
                        v1: _160.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
