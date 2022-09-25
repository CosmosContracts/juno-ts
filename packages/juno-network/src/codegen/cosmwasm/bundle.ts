import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _131 from "./wasm/v1/tx.amino";
import * as _132 from "./wasm/v1/tx.registry";
import * as _133 from "./wasm/v1/query.lcd";
import * as _134 from "./wasm/v1/query.rpc.query";
import * as _135 from "./wasm/v1/tx.rpc.msg";
import * as _161 from "./lcd";
import * as _162 from "./rpc.query";
import * as _163 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135
    };
  }
  export const ClientFactory = { ..._161,
    ..._162,
    ..._163
  };
}