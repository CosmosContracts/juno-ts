import * as _80 from "./feeshare/v1/feeshare";
import * as _81 from "./feeshare/v1/genesis";
import * as _82 from "./feeshare/v1/query";
import * as _83 from "./feeshare/v1/tx";
import * as _84 from "./mint/genesis";
import * as _85 from "./mint/mint";
import * as _86 from "./mint/query";
import * as _165 from "./feeshare/v1/tx.amino";
import * as _166 from "./feeshare/v1/tx.registry";
import * as _167 from "./feeshare/v1/query.lcd";
import * as _168 from "./mint/query.lcd";
import * as _169 from "./feeshare/v1/query.rpc.Query";
import * as _170 from "./mint/query.rpc.Query";
import * as _171 from "./feeshare/v1/tx.rpc.msg";
import * as _188 from "./lcd";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = { ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._165,
      ..._166,
      ..._167,
      ..._169,
      ..._171
    };
  }
  export const mint = { ..._84,
    ..._85,
    ..._86,
    ..._168,
    ..._170
  };
  export const ClientFactory = { ..._188,
    ..._189,
    ..._190
  };
}