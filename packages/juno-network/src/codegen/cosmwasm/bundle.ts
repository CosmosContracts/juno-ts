import * as _95 from "./wasm/v1/authz";
import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _252 from "./wasm/v1/tx.amino";
import * as _253 from "./wasm/v1/tx.registry";
import * as _254 from "./wasm/v1/query.lcd";
import * as _255 from "./wasm/v1/query.rpc.Query";
import * as _256 from "./wasm/v1/tx.rpc.msg";
import * as _320 from "./lcd";
import * as _321 from "./rpc.query";
import * as _322 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256
    };
  }
  export const ClientFactory = {
    ..._320,
    ..._321,
    ..._322
  };
}