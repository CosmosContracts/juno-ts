import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStakingContractsRequest, QueryStakingContractsResponseSDKType, QueryGovernanceContractsRequest, QueryGovernanceContractsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakingContracts = this.stakingContracts.bind(this);
    this.governanceContracts = this.governanceContracts.bind(this);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `juno/cwhooks/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* StakingContracts */
  async stakingContracts(_params: QueryStakingContractsRequest = {}): Promise<QueryStakingContractsResponseSDKType> {
    const endpoint = `juno/cwhooks/v1/staking_contracts`;
    return await this.req.get<QueryStakingContractsResponseSDKType>(endpoint);
  }
  /* GovernanceContracts */
  async governanceContracts(_params: QueryGovernanceContractsRequest = {}): Promise<QueryGovernanceContractsResponseSDKType> {
    const endpoint = `juno/cwhooks/v1/governance_contracts`;
    return await this.req.get<QueryGovernanceContractsResponseSDKType>(endpoint);
  }
}