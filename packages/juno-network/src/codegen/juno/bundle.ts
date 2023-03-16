import * as _79 from "./feeshare/v1/feeshare";
import * as _80 from "./feeshare/v1/genesis";
import * as _81 from "./feeshare/v1/query";
import * as _82 from "./feeshare/v1/tx";
import * as _83 from "./mint/genesis";
import * as _84 from "./mint/mint";
import * as _85 from "./mint/query";
import * as _164 from "./feeshare/v1/tx.amino";
import * as _165 from "./feeshare/v1/tx.registry";
import * as _166 from "./feeshare/v1/query.lcd";
import * as _167 from "./mint/query.lcd";
import * as _168 from "./feeshare/v1/query.rpc.Query";
import * as _169 from "./mint/query.rpc.Query";
import * as _170 from "./feeshare/v1/tx.rpc.msg";
import * as _187 from "./lcd";
import * as _188 from "./rpc.query";
import * as _189 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = { ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._164,
      ..._165,
      ..._166,
      ..._168,
      ..._170
    };
  }
  export const mint = { ..._83,
    ..._84,
    ..._85,
    ..._167,
    ..._169
  };
  export const ClientFactory = { ..._187,
    ..._188,
    ..._189
  };
}