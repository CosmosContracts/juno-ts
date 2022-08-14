export * from './codegen';

import { contracts } from './codegen';

// contracts.JunoSwap.JunoSwapClient

const { JunoSwap: {
    JunoSwapClient,
    JunoSwapQueryClient
} } = contracts;