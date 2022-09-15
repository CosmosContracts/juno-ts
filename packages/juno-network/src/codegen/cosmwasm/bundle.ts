import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _226 from "./wasm/v1/tx.amino";
import * as _227 from "./wasm/v1/tx.registry";
import * as _228 from "./wasm/v1/query.lcd";
import * as _229 from "./wasm/v1/query.rpc.query";
import * as _230 from "./wasm/v1/tx.rpc.msg";
import * as _257 from "./lcd";
import * as _258 from "./rpc.query";
import * as _259 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230
    };
  }
  export const ClientFactory = { ..._257,
    ..._258,
    ..._259
  };
}