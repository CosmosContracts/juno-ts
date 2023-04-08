import * as _63 from "./applications/transfer/v1/genesis";
import * as _64 from "./applications/transfer/v1/query";
import * as _65 from "./applications/transfer/v1/transfer";
import * as _66 from "./applications/transfer/v1/tx";
import * as _67 from "./applications/transfer/v2/packet";
import * as _68 from "./core/channel/v1/channel";
import * as _69 from "./core/channel/v1/genesis";
import * as _70 from "./core/channel/v1/query";
import * as _71 from "./core/channel/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _76 from "./core/commitment/v1/commitment";
import * as _77 from "./core/connection/v1/connection";
import * as _78 from "./core/connection/v1/genesis";
import * as _79 from "./core/connection/v1/query";
import * as _80 from "./core/connection/v1/tx";
import * as _81 from "./lightclients/localhost/v1/localhost";
import * as _82 from "./lightclients/solomachine/v1/solomachine";
import * as _83 from "./lightclients/solomachine/v2/solomachine";
import * as _84 from "./lightclients/tendermint/v1/tendermint";
import * as _158 from "./applications/transfer/v1/query.lcd";
import * as _159 from "./core/channel/v1/query.lcd";
import * as _160 from "./core/client/v1/query.lcd";
import * as _161 from "./core/connection/v1/query.lcd";
import * as _162 from "./applications/transfer/v1/query.rpc.Query";
import * as _163 from "./core/channel/v1/query.rpc.Query";
import * as _164 from "./core/client/v1/query.rpc.Query";
import * as _165 from "./core/connection/v1/query.rpc.Query";
import * as _166 from "./applications/transfer/v1/tx.rpc.msg";
import * as _167 from "./core/channel/v1/tx.rpc.msg";
import * as _168 from "./core/client/v1/tx.rpc.msg";
import * as _169 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _166.MsgClientImpl;
                QueryClientImpl: typeof _162.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _64.QueryDenomTraceRequest): Promise<_64.QueryDenomTraceResponse>;
                    denomTraces(request?: _64.QueryDenomTracesRequest): Promise<_64.QueryDenomTracesResponse>;
                    params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _158.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: _66.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: _66.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _66.MsgTransfer) => {
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
                        }) => _66.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _66.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTransfer;
                    fromPartial(object: any): _66.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _66.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTransferResponse;
                    fromPartial(_: any): _66.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _65.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DenomTrace;
                    fromPartial(object: any): _65.DenomTrace;
                };
                Params: {
                    encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                    fromPartial(object: any): _65.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _64.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTraceRequest;
                    fromPartial(object: any): _64.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _64.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTraceResponse;
                    fromPartial(object: any): _64.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _64.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTracesRequest;
                    fromPartial(object: any): _64.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _64.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTracesResponse;
                    fromPartial(object: any): _64.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                    fromPartial(_: any): _64.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                    fromPartial(object: any): _64.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                    fromPartial(object: any): _63.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _67.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.FungibleTokenPacketData;
                    fromPartial(object: any): _67.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _167.MsgClientImpl;
                QueryClientImpl: typeof _163.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _70.QueryChannelRequest): Promise<_70.QueryChannelResponse>;
                    channels(request?: _70.QueryChannelsRequest): Promise<_70.QueryChannelsResponse>;
                    connectionChannels(request: _70.QueryConnectionChannelsRequest): Promise<_70.QueryConnectionChannelsResponse>;
                    channelClientState(request: _70.QueryChannelClientStateRequest): Promise<_70.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _70.QueryChannelConsensusStateRequest): Promise<_70.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _70.QueryPacketCommitmentRequest): Promise<_70.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _70.QueryPacketCommitmentsRequest): Promise<_70.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _70.QueryPacketReceiptRequest): Promise<_70.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _70.QueryPacketAcknowledgementRequest): Promise<_70.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _70.QueryPacketAcknowledgementsRequest): Promise<_70.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _70.QueryUnreceivedPacketsRequest): Promise<_70.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _70.QueryUnreceivedAcksRequest): Promise<_70.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _70.QueryNextSequenceReceiveRequest): Promise<_70.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _159.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: _71.MsgRecvPacket;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: _71.MsgTimeout;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _71.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _71.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: _71.MsgRecvPacket;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: _71.MsgTimeout;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _71.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _71.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _71.MsgChannelOpenInit) => {
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
                        }) => _71.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _71.MsgChannelOpenTry) => {
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
                        }) => _71.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _71.MsgChannelOpenAck) => {
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
                        }) => _71.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _71.MsgChannelOpenConfirm) => {
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
                        }) => _71.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _71.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _71.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _71.MsgChannelCloseConfirm) => {
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
                        }) => _71.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _71.MsgRecvPacket) => {
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
                        }) => _71.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _71.MsgTimeout) => {
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
                        }) => _71.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _71.MsgTimeoutOnClose) => {
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
                        }) => _71.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _71.MsgAcknowledgement) => {
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
                        }) => _71.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _71.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenInit;
                    fromPartial(object: any): _71.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _71.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenInitResponse;
                    fromPartial(_: any): _71.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _71.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenTry;
                    fromPartial(object: any): _71.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _71.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenTryResponse;
                    fromPartial(_: any): _71.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _71.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenAck;
                    fromPartial(object: any): _71.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _71.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _71.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _71.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenConfirm;
                    fromPartial(object: any): _71.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _71.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _71.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _71.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseInit;
                    fromPartial(object: any): _71.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _71.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _71.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _71.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseConfirm;
                    fromPartial(object: any): _71.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _71.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _71.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _71.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgRecvPacket;
                    fromPartial(object: any): _71.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _71.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgRecvPacketResponse;
                    fromPartial(_: any): _71.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _71.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeout;
                    fromPartial(object: any): _71.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _71.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutResponse;
                    fromPartial(_: any): _71.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _71.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutOnClose;
                    fromPartial(object: any): _71.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _71.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutOnCloseResponse;
                    fromPartial(_: any): _71.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _71.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAcknowledgement;
                    fromPartial(object: any): _71.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _71.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAcknowledgementResponse;
                    fromPartial(_: any): _71.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _70.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelRequest;
                    fromPartial(object: any): _70.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _70.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelResponse;
                    fromPartial(object: any): _70.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _70.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelsRequest;
                    fromPartial(object: any): _70.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _70.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelsResponse;
                    fromPartial(object: any): _70.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _70.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _70.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _70.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _70.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _70.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelClientStateRequest;
                    fromPartial(object: any): _70.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _70.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelClientStateResponse;
                    fromPartial(object: any): _70.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _70.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _70.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _70.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _70.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _70.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _70.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _70.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _70.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _70.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _70.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _70.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _70.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _70.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketReceiptRequest;
                    fromPartial(object: any): _70.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _70.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketReceiptResponse;
                    fromPartial(object: any): _70.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _70.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _70.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _70.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _70.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _70.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _70.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _70.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _70.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _70.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _70.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _70.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _70.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _70.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _70.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _70.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _70.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _70.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _70.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _70.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _70.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                    fromPartial(object: any): _69.GenesisState;
                };
                PacketSequence: {
                    encode(message: _69.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.PacketSequence;
                    fromPartial(object: any): _69.PacketSequence;
                };
                stateFromJSON(object: any): _68.State;
                stateToJSON(object: _68.State): string;
                orderFromJSON(object: any): _68.Order;
                orderToJSON(object: _68.Order): string;
                State: typeof _68.State;
                StateSDKType: typeof _68.StateSDKType;
                Order: typeof _68.Order;
                OrderSDKType: typeof _68.OrderSDKType;
                Channel: {
                    encode(message: _68.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Channel;
                    fromPartial(object: any): _68.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _68.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.IdentifiedChannel;
                    fromPartial(object: any): _68.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _68.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Counterparty;
                    fromPartial(object: any): _68.Counterparty;
                };
                Packet: {
                    encode(message: _68.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Packet;
                    fromPartial(object: any): _68.Packet;
                };
                PacketState: {
                    encode(message: _68.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PacketState;
                    fromPartial(object: any): _68.PacketState;
                };
                Acknowledgement: {
                    encode(message: _68.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Acknowledgement;
                    fromPartial(object: any): _68.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _168.MsgClientImpl;
                QueryClientImpl: typeof _164.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _74.QueryClientStateRequest): Promise<_74.QueryClientStateResponse>;
                    clientStates(request?: _74.QueryClientStatesRequest): Promise<_74.QueryClientStatesResponse>;
                    consensusState(request: _74.QueryConsensusStateRequest): Promise<_74.QueryConsensusStateResponse>;
                    consensusStates(request: _74.QueryConsensusStatesRequest): Promise<_74.QueryConsensusStatesResponse>;
                    clientStatus(request: _74.QueryClientStatusRequest): Promise<_74.QueryClientStatusResponse>;
                    clientParams(request?: _74.QueryClientParamsRequest): Promise<_74.QueryClientParamsResponse>;
                    upgradedClientState(request?: _74.QueryUpgradedClientStateRequest): Promise<_74.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _160.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _75.MsgCreateClient) => {
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
                        }) => _75.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _75.MsgUpdateClient) => {
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
                        }) => _75.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _75.MsgUpgradeClient) => {
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
                        }) => _75.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _75.MsgSubmitMisbehaviour) => {
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
                        }) => _75.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _75.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCreateClient;
                    fromPartial(object: any): _75.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _75.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCreateClientResponse;
                    fromPartial(_: any): _75.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _75.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpdateClient;
                    fromPartial(object: any): _75.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _75.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpdateClientResponse;
                    fromPartial(_: any): _75.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _75.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpgradeClient;
                    fromPartial(object: any): _75.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _75.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpgradeClientResponse;
                    fromPartial(_: any): _75.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _75.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _75.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _75.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _75.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _74.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStateRequest;
                    fromPartial(object: any): _74.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _74.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStateResponse;
                    fromPartial(object: any): _74.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _74.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatesRequest;
                    fromPartial(object: any): _74.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _74.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatesResponse;
                    fromPartial(object: any): _74.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _74.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStateRequest;
                    fromPartial(object: any): _74.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _74.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStateResponse;
                    fromPartial(object: any): _74.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _74.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStatesRequest;
                    fromPartial(object: any): _74.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _74.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStatesResponse;
                    fromPartial(object: any): _74.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _74.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatusRequest;
                    fromPartial(object: any): _74.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _74.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatusResponse;
                    fromPartial(object: any): _74.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _74.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientParamsRequest;
                    fromPartial(_: any): _74.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _74.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientParamsResponse;
                    fromPartial(object: any): _74.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _74.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _74.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _74.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _74.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _74.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _74.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _74.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _74.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                    fromPartial(object: any): _73.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _73.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisMetadata;
                    fromPartial(object: any): _73.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _73.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _73.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _72.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedClientState;
                    fromPartial(object: any): _72.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _72.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConsensusStateWithHeight;
                    fromPartial(object: any): _72.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _72.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientConsensusStates;
                    fromPartial(object: any): _72.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _72.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientUpdateProposal;
                    fromPartial(object: any): _72.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _72.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UpgradeProposal;
                    fromPartial(object: any): _72.UpgradeProposal;
                };
                Height: {
                    encode(message: _72.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Height;
                    fromPartial(object: any): _72.Height;
                };
                Params: {
                    encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                    fromPartial(object: any): _72.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _76.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerkleRoot;
                    fromPartial(object: any): _76.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _76.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerklePrefix;
                    fromPartial(object: any): _76.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _76.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerklePath;
                    fromPartial(object: any): _76.MerklePath;
                };
                MerkleProof: {
                    encode(message: _76.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerkleProof;
                    fromPartial(object: any): _76.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _169.MsgClientImpl;
                QueryClientImpl: typeof _165.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _79.QueryConnectionRequest): Promise<_79.QueryConnectionResponse>;
                    connections(request?: _79.QueryConnectionsRequest): Promise<_79.QueryConnectionsResponse>;
                    clientConnections(request: _79.QueryClientConnectionsRequest): Promise<_79.QueryClientConnectionsResponse>;
                    connectionClientState(request: _79.QueryConnectionClientStateRequest): Promise<_79.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _79.QueryConnectionConsensusStateRequest): Promise<_79.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _161.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _80.MsgConnectionOpenInit) => {
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
                        }) => _80.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _80.MsgConnectionOpenTry) => {
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
                        }) => _80.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _80.MsgConnectionOpenAck) => {
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
                        }) => _80.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _80.MsgConnectionOpenConfirm) => {
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
                        }) => _80.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _80.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenInit;
                    fromPartial(object: any): _80.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _80.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _80.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _80.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenTry;
                    fromPartial(object: any): _80.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _80.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _80.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _80.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenAck;
                    fromPartial(object: any): _80.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _80.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _80.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _80.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _80.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _80.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _80.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _79.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionRequest;
                    fromPartial(object: any): _79.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _79.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionResponse;
                    fromPartial(object: any): _79.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _79.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionsRequest;
                    fromPartial(object: any): _79.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _79.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionsResponse;
                    fromPartial(object: any): _79.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _79.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientConnectionsRequest;
                    fromPartial(object: any): _79.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _79.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientConnectionsResponse;
                    fromPartial(object: any): _79.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _79.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _79.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _79.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _79.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _79.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _79.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _79.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _79.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                    fromPartial(object: any): _78.GenesisState;
                };
                stateFromJSON(object: any): _77.State;
                stateToJSON(object: _77.State): string;
                State: typeof _77.State;
                StateSDKType: typeof _77.StateSDKType;
                ConnectionEnd: {
                    encode(message: _77.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConnectionEnd;
                    fromPartial(object: any): _77.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _77.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.IdentifiedConnection;
                    fromPartial(object: any): _77.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _77.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Counterparty;
                    fromPartial(object: any): _77.Counterparty;
                };
                ClientPaths: {
                    encode(message: _77.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientPaths;
                    fromPartial(object: any): _77.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _77.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConnectionPaths;
                    fromPartial(object: any): _77.ConnectionPaths;
                };
                Version: {
                    encode(message: _77.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Version;
                    fromPartial(object: any): _77.Version;
                };
                Params: {
                    encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                    fromPartial(object: any): _77.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _81.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientState;
                    fromPartial(object: any): _81.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _82.DataType;
                dataTypeToJSON(object: _82.DataType): string;
                DataType: typeof _82.DataType;
                DataTypeSDKType: typeof _82.DataTypeSDKType;
                ClientState: {
                    encode(message: _82.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientState;
                    fromPartial(object: any): _82.ClientState;
                };
                ConsensusState: {
                    encode(message: _82.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusState;
                    fromPartial(object: any): _82.ConsensusState;
                };
                Header: {
                    encode(message: _82.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Header;
                    fromPartial(object: any): _82.Header;
                };
                Misbehaviour: {
                    encode(message: _82.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Misbehaviour;
                    fromPartial(object: any): _82.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _82.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignatureAndData;
                    fromPartial(object: any): _82.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _82.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TimestampedSignatureData;
                    fromPartial(object: any): _82.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _82.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignBytes;
                    fromPartial(object: any): _82.SignBytes;
                };
                HeaderData: {
                    encode(message: _82.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.HeaderData;
                    fromPartial(object: any): _82.HeaderData;
                };
                ClientStateData: {
                    encode(message: _82.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientStateData;
                    fromPartial(object: any): _82.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _82.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusStateData;
                    fromPartial(object: any): _82.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _82.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConnectionStateData;
                    fromPartial(object: any): _82.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _82.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ChannelStateData;
                    fromPartial(object: any): _82.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _82.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketCommitmentData;
                    fromPartial(object: any): _82.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _82.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketAcknowledgementData;
                    fromPartial(object: any): _82.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _82.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketReceiptAbsenceData;
                    fromPartial(object: any): _82.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _82.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.NextSequenceRecvData;
                    fromPartial(object: any): _82.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _83.DataType;
                dataTypeToJSON(object: _83.DataType): string;
                DataType: typeof _83.DataType;
                DataTypeSDKType: typeof _83.DataTypeSDKType;
                ClientState: {
                    encode(message: _83.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientState;
                    fromPartial(object: any): _83.ClientState;
                };
                ConsensusState: {
                    encode(message: _83.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusState;
                    fromPartial(object: any): _83.ConsensusState;
                };
                Header: {
                    encode(message: _83.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Header;
                    fromPartial(object: any): _83.Header;
                };
                Misbehaviour: {
                    encode(message: _83.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Misbehaviour;
                    fromPartial(object: any): _83.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _83.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignatureAndData;
                    fromPartial(object: any): _83.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _83.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TimestampedSignatureData;
                    fromPartial(object: any): _83.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _83.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignBytes;
                    fromPartial(object: any): _83.SignBytes;
                };
                HeaderData: {
                    encode(message: _83.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.HeaderData;
                    fromPartial(object: any): _83.HeaderData;
                };
                ClientStateData: {
                    encode(message: _83.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientStateData;
                    fromPartial(object: any): _83.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _83.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusStateData;
                    fromPartial(object: any): _83.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _83.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConnectionStateData;
                    fromPartial(object: any): _83.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _83.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ChannelStateData;
                    fromPartial(object: any): _83.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _83.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketCommitmentData;
                    fromPartial(object: any): _83.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _83.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketAcknowledgementData;
                    fromPartial(object: any): _83.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _83.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketReceiptAbsenceData;
                    fromPartial(object: any): _83.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _83.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.NextSequenceRecvData;
                    fromPartial(object: any): _83.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _84.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientState;
                    fromPartial(object: any): _84.ClientState;
                };
                ConsensusState: {
                    encode(message: _84.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusState;
                    fromPartial(object: any): _84.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _84.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Misbehaviour;
                    fromPartial(object: any): _84.Misbehaviour;
                };
                Header: {
                    encode(message: _84.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Header;
                    fromPartial(object: any): _84.Header;
                };
                Fraction: {
                    encode(message: _84.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Fraction;
                    fromPartial(object: any): _84.Fraction;
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
                tokenfactory: {
                    v1beta1: import("../cosmos/tokenfactory/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _166.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _167.MsgClientImpl;
                    };
                    client: {
                        v1: _168.MsgClientImpl;
                    };
                    connection: {
                        v1: _169.MsgClientImpl;
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
                tokenfactory: {
                    v1beta1: {
                        params(request?: import("../cosmos/tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryParamsResponse>;
                        denomAuthorityMetadata(request: import("../cosmos/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: import("../cosmos/tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("../cosmos/tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
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
                            denomTrace(request: _64.QueryDenomTraceRequest): Promise<_64.QueryDenomTraceResponse>;
                            denomTraces(request?: _64.QueryDenomTracesRequest): Promise<_64.QueryDenomTracesResponse>;
                            params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _70.QueryChannelRequest): Promise<_70.QueryChannelResponse>;
                            channels(request?: _70.QueryChannelsRequest): Promise<_70.QueryChannelsResponse>;
                            connectionChannels(request: _70.QueryConnectionChannelsRequest): Promise<_70.QueryConnectionChannelsResponse>;
                            channelClientState(request: _70.QueryChannelClientStateRequest): Promise<_70.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _70.QueryChannelConsensusStateRequest): Promise<_70.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _70.QueryPacketCommitmentRequest): Promise<_70.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _70.QueryPacketCommitmentsRequest): Promise<_70.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _70.QueryPacketReceiptRequest): Promise<_70.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _70.QueryPacketAcknowledgementRequest): Promise<_70.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _70.QueryPacketAcknowledgementsRequest): Promise<_70.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _70.QueryUnreceivedPacketsRequest): Promise<_70.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _70.QueryUnreceivedAcksRequest): Promise<_70.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _70.QueryNextSequenceReceiveRequest): Promise<_70.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _74.QueryClientStateRequest): Promise<_74.QueryClientStateResponse>;
                            clientStates(request?: _74.QueryClientStatesRequest): Promise<_74.QueryClientStatesResponse>;
                            consensusState(request: _74.QueryConsensusStateRequest): Promise<_74.QueryConsensusStateResponse>;
                            consensusStates(request: _74.QueryConsensusStatesRequest): Promise<_74.QueryConsensusStatesResponse>;
                            clientStatus(request: _74.QueryClientStatusRequest): Promise<_74.QueryClientStatusResponse>;
                            clientParams(request?: _74.QueryClientParamsRequest): Promise<_74.QueryClientParamsResponse>;
                            upgradedClientState(request?: _74.QueryUpgradedClientStateRequest): Promise<_74.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _79.QueryConnectionRequest): Promise<_79.QueryConnectionResponse>;
                            connections(request?: _79.QueryConnectionsRequest): Promise<_79.QueryConnectionsResponse>;
                            clientConnections(request: _79.QueryClientConnectionsRequest): Promise<_79.QueryClientConnectionsResponse>;
                            connectionClientState(request: _79.QueryConnectionClientStateRequest): Promise<_79.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _79.QueryConnectionConsensusStateRequest): Promise<_79.QueryConnectionConsensusStateResponse>;
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
                tokenfactory: {
                    v1beta1: import("../cosmos/tokenfactory/v1beta1/query.lcd").LCDQueryClient;
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
                        v1: _158.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _159.LCDQueryClient;
                    };
                    client: {
                        v1: _160.LCDQueryClient;
                    };
                    connection: {
                        v1: _161.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
