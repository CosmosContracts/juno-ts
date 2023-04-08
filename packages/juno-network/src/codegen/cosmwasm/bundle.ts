import * as _50 from "./wasm/v1/authz";
import * as _51 from "./wasm/v1/genesis";
import * as _52 from "./wasm/v1/ibc";
import * as _53 from "./wasm/v1/proposal";
import * as _54 from "./wasm/v1/query";
import * as _55 from "./wasm/v1/tx";
import * as _56 from "./wasm/v1/types";
import * as _145 from "./wasm/v1/tx.amino";
import * as _146 from "./wasm/v1/tx.registry";
import * as _147 from "./wasm/v1/query.lcd";
import * as _148 from "./wasm/v1/query.rpc.Query";
import * as _149 from "./wasm/v1/tx.rpc.msg";
import * as _182 from "./lcd";
import * as _183 from "./rpc.query";
import * as _184 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149
    };
  }
  export const ClientFactory = { ..._182,
    ..._183,
    ..._184
  };
}