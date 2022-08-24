import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/port/v1/query";
import * as _130 from "./core/types/v1/genesis";
import * as _131 from "./lightclients/localhost/v1/localhost";
import * as _132 from "./lightclients/solomachine/v1/solomachine";
import * as _133 from "./lightclients/solomachine/v2/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _229 from "./applications/transfer/v1/tx.amino";
import * as _230 from "./core/channel/v1/tx.amino";
import * as _231 from "./core/client/v1/tx.amino";
import * as _232 from "./core/connection/v1/tx.amino";
import * as _233 from "./applications/transfer/v1/tx.registry";
import * as _234 from "./core/channel/v1/tx.registry";
import * as _235 from "./core/client/v1/tx.registry";
import * as _236 from "./core/connection/v1/tx.registry";
import * as _237 from "./applications/transfer/v1/query.lcd";
import * as _238 from "./core/channel/v1/query.lcd";
import * as _239 from "./core/client/v1/query.lcd";
import * as _240 from "./core/connection/v1/query.lcd";
import * as _241 from "./applications/transfer/v1/query.rpc.query";
import * as _242 from "./core/channel/v1/query.rpc.query";
import * as _243 from "./core/client/v1/query.rpc.query";
import * as _244 from "./core/connection/v1/query.rpc.query";
import * as _245 from "./core/port/v1/query.rpc.query";
import * as _246 from "./applications/transfer/v1/tx.rpc.msg";
import * as _247 from "./core/channel/v1/tx.rpc.msg";
import * as _248 from "./core/client/v1/tx.rpc.msg";
import * as _249 from "./core/connection/v1/tx.rpc.msg";
import * as _258 from "./lcd";
import * as _259 from "./rpc.query";
import * as _260 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._229,
        ..._233,
        ..._237,
        ..._241,
        ..._246
      };
      export const v2 = { ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._230,
        ..._234,
        ..._238,
        ..._242,
        ..._247
      };
    }
    export namespace client {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._231,
        ..._235,
        ..._239,
        ..._243,
        ..._248
      };
    }
    export namespace commitment {
      export const v1 = { ..._124
      };
    }
    export namespace connection {
      export const v1 = { ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._232,
        ..._236,
        ..._240,
        ..._244,
        ..._249
      };
    }
    export namespace port {
      export const v1 = { ..._129,
        ..._245
      };
    }
    export namespace types {
      export const v1 = { ..._130
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._131
      };
    }
    export namespace solomachine {
      export const v1 = { ..._132
      };
      export const v2 = { ..._133
      };
    }
    export namespace tendermint {
      export const v1 = { ..._134
      };
    }
  }
  export const ClientFactory = { ..._258,
    ..._259,
    ..._260
  };
}