import * as _85 from "./feeshare/v1/feeshare";
import * as _86 from "./feeshare/v1/genesis";
import * as _87 from "./feeshare/v1/query";
import * as _88 from "./feeshare/v1/tx";
import * as _89 from "./mint/genesis";
import * as _90 from "./mint/mint";
import * as _91 from "./mint/query";
import * as _170 from "./feeshare/v1/tx.amino";
import * as _171 from "./feeshare/v1/tx.registry";
import * as _172 from "./feeshare/v1/query.lcd";
import * as _173 from "./mint/query.lcd";
import * as _174 from "./feeshare/v1/query.rpc.Query";
import * as _175 from "./mint/query.rpc.Query";
import * as _176 from "./feeshare/v1/tx.rpc.msg";
import * as _188 from "./lcd";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._170,
      ..._171,
      ..._172,
      ..._174,
      ..._176
    };
  }
  export const mint = { ..._89,
    ..._90,
    ..._91,
    ..._173,
    ..._175
  };
  export const ClientFactory = { ..._188,
    ..._189,
    ..._190
  };
}