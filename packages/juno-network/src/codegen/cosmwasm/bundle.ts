import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _180 from "./wasm/v1/tx.amino";
import * as _181 from "./wasm/v1/tx.registry";
import * as _182 from "./wasm/v1/query.lcd";
import * as _183 from "./wasm/v1/query.rpc.query";
import * as _184 from "./wasm/v1/tx.rpc.msg";
import * as _200 from "./lcd";
import * as _201 from "./rpc.query";
import * as _202 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184
    };
  }
  export const ClientFactory = { ..._200,
    ..._201,
    ..._202
  };
}