import * as _112 from "./applications/transfer/v1/genesis";
import * as _113 from "./applications/transfer/v1/query";
import * as _114 from "./applications/transfer/v1/transfer";
import * as _115 from "./applications/transfer/v1/tx";
import * as _116 from "./applications/transfer/v2/packet";
import * as _117 from "./core/channel/v1/channel";
import * as _118 from "./core/channel/v1/genesis";
import * as _119 from "./core/channel/v1/query";
import * as _120 from "./core/channel/v1/tx";
import * as _121 from "./core/client/v1/client";
import * as _122 from "./core/client/v1/genesis";
import * as _123 from "./core/client/v1/query";
import * as _124 from "./core/client/v1/tx";
import * as _125 from "./core/commitment/v1/commitment";
import * as _126 from "./core/connection/v1/connection";
import * as _127 from "./core/connection/v1/genesis";
import * as _128 from "./core/connection/v1/query";
import * as _129 from "./core/connection/v1/tx";
import * as _130 from "./core/port/v1/query";
import * as _131 from "./core/types/v1/genesis";
import * as _132 from "./lightclients/localhost/v1/localhost";
import * as _133 from "./lightclients/solomachine/v1/solomachine";
import * as _134 from "./lightclients/solomachine/v2/solomachine";
import * as _135 from "./lightclients/tendermint/v1/tendermint";
import * as _259 from "./applications/transfer/v1/tx.amino";
import * as _260 from "./core/channel/v1/tx.amino";
import * as _261 from "./core/client/v1/tx.amino";
import * as _262 from "./core/connection/v1/tx.amino";
import * as _263 from "./applications/transfer/v1/tx.registry";
import * as _264 from "./core/channel/v1/tx.registry";
import * as _265 from "./core/client/v1/tx.registry";
import * as _266 from "./core/connection/v1/tx.registry";
import * as _267 from "./applications/transfer/v1/query.lcd";
import * as _268 from "./core/channel/v1/query.lcd";
import * as _269 from "./core/client/v1/query.lcd";
import * as _270 from "./core/connection/v1/query.lcd";
import * as _271 from "./applications/transfer/v1/query.rpc.Query";
import * as _272 from "./core/channel/v1/query.rpc.Query";
import * as _273 from "./core/client/v1/query.rpc.Query";
import * as _274 from "./core/connection/v1/query.rpc.Query";
import * as _275 from "./core/port/v1/query.rpc.Query";
import * as _276 from "./applications/transfer/v1/tx.rpc.msg";
import * as _277 from "./core/channel/v1/tx.rpc.msg";
import * as _278 from "./core/client/v1/tx.rpc.msg";
import * as _279 from "./core/connection/v1/tx.rpc.msg";
import * as _325 from "./lcd";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._112,
        ..._113,
        ..._114,
        ..._115,
        ..._259,
        ..._263,
        ..._267,
        ..._271,
        ..._276
      };
      export const v2 = {
        ..._116
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._260,
        ..._264,
        ..._268,
        ..._272,
        ..._277
      };
    }
    export namespace client {
      export const v1 = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._261,
        ..._265,
        ..._269,
        ..._273,
        ..._278
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._125
      };
    }
    export namespace connection {
      export const v1 = {
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._262,
        ..._266,
        ..._270,
        ..._274,
        ..._279
      };
    }
    export namespace port {
      export const v1 = {
        ..._130,
        ..._275
      };
    }
    export namespace types {
      export const v1 = {
        ..._131
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._132
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._133
      };
      export const v2 = {
        ..._134
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._135
      };
    }
  }
  export const ClientFactory = {
    ..._325,
    ..._326,
    ..._327
  };
}