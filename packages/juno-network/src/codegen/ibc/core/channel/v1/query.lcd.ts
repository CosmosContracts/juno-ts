import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Channel queries an IBC Channel. */
  async channel(params: QueryChannelRequest): Promise<QueryChannelResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}ports/${params.port_id}`;
    return await this.get<QueryChannelResponse>(endpoint);
  }

  /* Channels queries all the IBC channels of a chain. */
  async channels(params: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels`;
    return await this.get<QueryChannelsResponse>(endpoint, options);
  }

  /* ConnectionChannels queries all the channels associated with a connection
  end. */
  async connectionChannels(params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return await this.get<QueryConnectionChannelsResponse>(endpoint, options);
  }

  /* ChannelClientState queries for the client state for the channel associated
  with the provided channel identifiers. */
  async channelClientState(params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/client_state`;
    return await this.get<QueryChannelClientStateResponse>(endpoint);
  }

  /* ChannelConsensusState queries for the consensus state for the channel
  associated with the provided channel identifiers. */
  async channelConsensusState(params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/consensus_state/revision/${params.revision_number}height/${params.revision_height}`;
    return await this.get<QueryChannelConsensusStateResponse>(endpoint);
  }

  /* PacketCommitment queries a stored packet commitment hash. */
  async packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}packet_commitments/${params.sequence}`;
    return await this.get<QueryPacketCommitmentResponse>(endpoint);
  }

  /* PacketCommitments returns all the packet commitments hashes associated
  with a channel. */
  async packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments`;
    return await this.get<QueryPacketCommitmentsResponse>(endpoint, options);
  }

  /* PacketReceipt queries if a given packet sequence has been received on the
  queried chain */
  async packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}packet_receipts/${params.sequence}`;
    return await this.get<QueryPacketReceiptResponse>(endpoint);
  }

  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  async packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}packet_acks/${params.sequence}`;
    return await this.get<QueryPacketAcknowledgementResponse>(endpoint);
  }

  /* PacketAcknowledgements returns all the packet acknowledgements associated
  with a channel. */
  async packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.packet_commitment_sequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packet_commitment_sequences;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acknowledgements`;
    return await this.get<QueryPacketAcknowledgementsResponse>(endpoint, options);
  }

  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
  channel and sequences. */
  async unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_commitment_sequences}/unreceived_packets`;
    return await this.get<QueryUnreceivedPacketsResponse>(endpoint);
  }

  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
  with a channel and sequences. */
  async unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_ack_sequences}/unreceived_acks`;
    return await this.get<QueryUnreceivedAcksResponse>(endpoint);
  }

  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  async nextSequenceReceive(params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence`;
    return await this.get<QueryNextSequenceReceiveResponse>(endpoint);
  }

}