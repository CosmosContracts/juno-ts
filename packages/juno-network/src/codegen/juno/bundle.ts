import * as _79 from "./feeshare/v1/feeshare";
import * as _80 from "./feeshare/v1/genesis";
import * as _81 from "./feeshare/v1/query";
import * as _82 from "./feeshare/v1/tx";
import * as _83 from "./mint/genesis";
import * as _84 from "./mint/mint";
import * as _85 from "./mint/query";
import * as _157 from "./feeshare/v1/tx.amino";
import * as _158 from "./feeshare/v1/tx.registry";
import * as _159 from "./feeshare/v1/query.lcd";
import * as _160 from "./mint/query.lcd";
import * as _161 from "./feeshare/v1/query.rpc.Query";
import * as _162 from "./mint/query.rpc.Query";
import * as _163 from "./feeshare/v1/tx.rpc.msg";
import * as _173 from "./lcd";
import * as _174 from "./rpc.query";
import * as _175 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = { ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._157,
      ..._158,
      ..._159,
      ..._161,
      ..._163
    };
  }
  export const mint = { ..._83,
    ..._84,
    ..._85,
    ..._160,
    ..._162
  };
  export const ClientFactory = { ..._173,
    ..._174,
    ..._175
  };
}