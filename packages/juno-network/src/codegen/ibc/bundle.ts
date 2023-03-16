import * as _58 from "./applications/transfer/v1/genesis";
import * as _59 from "./applications/transfer/v1/query";
import * as _60 from "./applications/transfer/v1/transfer";
import * as _61 from "./applications/transfer/v1/tx";
import * as _62 from "./applications/transfer/v2/packet";
import * as _63 from "./core/channel/v1/channel";
import * as _64 from "./core/channel/v1/genesis";
import * as _65 from "./core/channel/v1/query";
import * as _66 from "./core/channel/v1/tx";
import * as _67 from "./core/client/v1/client";
import * as _68 from "./core/client/v1/genesis";
import * as _69 from "./core/client/v1/query";
import * as _70 from "./core/client/v1/tx";
import * as _71 from "./core/commitment/v1/commitment";
import * as _72 from "./core/connection/v1/connection";
import * as _73 from "./core/connection/v1/genesis";
import * as _74 from "./core/connection/v1/query";
import * as _75 from "./core/connection/v1/tx";
import * as _76 from "./lightclients/localhost/v1/localhost";
import * as _77 from "./lightclients/solomachine/v1/solomachine";
import * as _78 from "./lightclients/solomachine/v2/solomachine";
import * as _79 from "./lightclients/tendermint/v1/tendermint";
import * as _145 from "./applications/transfer/v1/tx.amino";
import * as _146 from "./core/channel/v1/tx.amino";
import * as _147 from "./core/client/v1/tx.amino";
import * as _148 from "./core/connection/v1/tx.amino";
import * as _149 from "./applications/transfer/v1/tx.registry";
import * as _150 from "./core/channel/v1/tx.registry";
import * as _151 from "./core/client/v1/tx.registry";
import * as _152 from "./core/connection/v1/tx.registry";
import * as _153 from "./applications/transfer/v1/query.lcd";
import * as _154 from "./core/channel/v1/query.lcd";
import * as _155 from "./core/client/v1/query.lcd";
import * as _156 from "./core/connection/v1/query.lcd";
import * as _157 from "./applications/transfer/v1/query.rpc.Query";
import * as _158 from "./core/channel/v1/query.rpc.Query";
import * as _159 from "./core/client/v1/query.rpc.Query";
import * as _160 from "./core/connection/v1/query.rpc.Query";
import * as _161 from "./applications/transfer/v1/tx.rpc.msg";
import * as _162 from "./core/channel/v1/tx.rpc.msg";
import * as _163 from "./core/client/v1/tx.rpc.msg";
import * as _164 from "./core/connection/v1/tx.rpc.msg";
import * as _185 from "./lcd";
import * as _186 from "./rpc.query";
import * as _187 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._145,
        ..._149,
        ..._153,
        ..._157,
        ..._161
      };
      export const v2 = { ..._62
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._146,
        ..._150,
        ..._154,
        ..._158,
        ..._162
      };
    }
    export namespace client {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._147,
        ..._151,
        ..._155,
        ..._159,
        ..._163
      };
    }
    export namespace commitment {
      export const v1 = { ..._71
      };
    }
    export namespace connection {
      export const v1 = { ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._148,
        ..._152,
        ..._156,
        ..._160,
        ..._164
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._76
      };
    }
    export namespace solomachine {
      export const v1 = { ..._77
      };
      export const v2 = { ..._78
      };
    }
    export namespace tendermint {
      export const v1 = { ..._79
      };
    }
  }
  export const ClientFactory = { ..._185,
    ..._186,
    ..._187
  };
}