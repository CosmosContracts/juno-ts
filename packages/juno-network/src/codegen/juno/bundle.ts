import * as _82 from "./feeshare/v1/feeshare";
import * as _83 from "./feeshare/v1/genesis";
import * as _84 from "./feeshare/v1/query";
import * as _85 from "./feeshare/v1/tx";
import * as _86 from "./mint/genesis";
import * as _87 from "./mint/mint";
import * as _88 from "./mint/query";
import * as _169 from "./feeshare/v1/tx.amino";
import * as _170 from "./feeshare/v1/tx.registry";
import * as _171 from "./feeshare/v1/query.lcd";
import * as _172 from "./mint/query.lcd";
import * as _173 from "./feeshare/v1/query.rpc.Query";
import * as _174 from "./mint/query.rpc.Query";
import * as _175 from "./feeshare/v1/tx.rpc.msg";
import * as _194 from "./lcd";
import * as _195 from "./rpc.query";
import * as _196 from "./rpc.tx";
export namespace juno {
  export namespace feeshare {
    export const v1 = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._169,
      ..._170,
      ..._171,
      ..._173,
      ..._175
    };
  }
  export const mint = { ..._86,
    ..._87,
    ..._88,
    ..._172,
    ..._174
  };
  export const ClientFactory = { ..._194,
    ..._195,
    ..._196
  };
}