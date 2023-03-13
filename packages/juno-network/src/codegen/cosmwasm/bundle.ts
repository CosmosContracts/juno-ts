import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _132 from "./wasm/v1/tx.amino";
import * as _133 from "./wasm/v1/tx.registry";
import * as _134 from "./wasm/v1/query.lcd";
import * as _135 from "./wasm/v1/query.rpc.Query";
import * as _136 from "./wasm/v1/tx.rpc.msg";
import * as _167 from "./lcd";
import * as _168 from "./rpc.query";
import * as _169 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136
    };
  }
  export const ClientFactory = { ..._167,
    ..._168,
    ..._169
  };
}