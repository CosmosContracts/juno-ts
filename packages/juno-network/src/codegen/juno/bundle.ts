import * as _136 from "./clock/v1/genesis";
import * as _137 from "./clock/v1/query";
import * as _138 from "./clock/v1/tx";
import * as _139 from "./cwhooks/v1/genesis";
import * as _140 from "./cwhooks/v1/query";
import * as _141 from "./cwhooks/v1/tx";
import * as _142 from "./drip/v1/genesis";
import * as _143 from "./drip/v1/query";
import * as _144 from "./drip/v1/tx";
import * as _145 from "./feepay/v1/feepay";
import * as _146 from "./feepay/v1/genesis";
import * as _147 from "./feepay/v1/query";
import * as _148 from "./feepay/v1/tx";
import * as _149 from "./feeshare/v1/feeshare";
import * as _150 from "./feeshare/v1/genesis";
import * as _151 from "./feeshare/v1/query";
import * as _152 from "./feeshare/v1/tx";
import * as _153 from "./mint/genesis";
import * as _154 from "./mint/mint";
import * as _155 from "./mint/query";
import * as _156 from "./mint/tx";
import * as _280 from "./clock/v1/tx.amino";
import * as _281 from "./cwhooks/v1/tx.amino";
import * as _282 from "./drip/v1/tx.amino";
import * as _283 from "./feepay/v1/tx.amino";
import * as _284 from "./feeshare/v1/tx.amino";
import * as _285 from "./mint/tx.amino";
import * as _286 from "./clock/v1/tx.registry";
import * as _287 from "./cwhooks/v1/tx.registry";
import * as _288 from "./drip/v1/tx.registry";
import * as _289 from "./feepay/v1/tx.registry";
import * as _290 from "./feeshare/v1/tx.registry";
import * as _291 from "./mint/tx.registry";
import * as _292 from "./clock/v1/query.lcd";
import * as _293 from "./cwhooks/v1/query.lcd";
import * as _294 from "./drip/v1/query.lcd";
import * as _295 from "./feepay/v1/query.lcd";
import * as _296 from "./feeshare/v1/query.lcd";
import * as _297 from "./mint/query.lcd";
import * as _298 from "./clock/v1/query.rpc.Query";
import * as _299 from "./cwhooks/v1/query.rpc.Query";
import * as _300 from "./drip/v1/query.rpc.Query";
import * as _301 from "./feepay/v1/query.rpc.Query";
import * as _302 from "./feeshare/v1/query.rpc.Query";
import * as _303 from "./mint/query.rpc.Query";
import * as _304 from "./clock/v1/tx.rpc.msg";
import * as _305 from "./cwhooks/v1/tx.rpc.msg";
import * as _306 from "./drip/v1/tx.rpc.msg";
import * as _307 from "./feepay/v1/tx.rpc.msg";
import * as _308 from "./feeshare/v1/tx.rpc.msg";
import * as _309 from "./mint/tx.rpc.msg";
import * as _328 from "./lcd";
import * as _329 from "./rpc.query";
import * as _330 from "./rpc.tx";
export namespace juno {
  export namespace clock {
    export const v1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._280,
      ..._286,
      ..._292,
      ..._298,
      ..._304
    };
  }
  export namespace cwhooks {
    export const v1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._281,
      ..._287,
      ..._293,
      ..._299,
      ..._305
    };
  }
  export namespace drip {
    export const v1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._282,
      ..._288,
      ..._294,
      ..._300,
      ..._306
    };
  }
  export namespace feepay {
    export const v1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._283,
      ..._289,
      ..._295,
      ..._301,
      ..._307
    };
  }
  export namespace feeshare {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._284,
      ..._290,
      ..._296,
      ..._302,
      ..._308
    };
  }
  export const mint = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._285,
    ..._291,
    ..._297,
    ..._303,
    ..._309
  };
  export const ClientFactory = {
    ..._328,
    ..._329,
    ..._330
  };
}