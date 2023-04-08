import * as _63 from "./applications/transfer/v1/genesis";
import * as _64 from "./applications/transfer/v1/query";
import * as _65 from "./applications/transfer/v1/transfer";
import * as _66 from "./applications/transfer/v1/tx";
import * as _67 from "./applications/transfer/v2/packet";
import * as _68 from "./core/channel/v1/channel";
import * as _69 from "./core/channel/v1/genesis";
import * as _70 from "./core/channel/v1/query";
import * as _71 from "./core/channel/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _76 from "./core/commitment/v1/commitment";
import * as _77 from "./core/connection/v1/connection";
import * as _78 from "./core/connection/v1/genesis";
import * as _79 from "./core/connection/v1/query";
import * as _80 from "./core/connection/v1/tx";
import * as _81 from "./lightclients/localhost/v1/localhost";
import * as _82 from "./lightclients/solomachine/v1/solomachine";
import * as _83 from "./lightclients/solomachine/v2/solomachine";
import * as _84 from "./lightclients/tendermint/v1/tendermint";
import * as _150 from "./applications/transfer/v1/tx.amino";
import * as _151 from "./core/channel/v1/tx.amino";
import * as _152 from "./core/client/v1/tx.amino";
import * as _153 from "./core/connection/v1/tx.amino";
import * as _154 from "./applications/transfer/v1/tx.registry";
import * as _155 from "./core/channel/v1/tx.registry";
import * as _156 from "./core/client/v1/tx.registry";
import * as _157 from "./core/connection/v1/tx.registry";
import * as _158 from "./applications/transfer/v1/query.lcd";
import * as _159 from "./core/channel/v1/query.lcd";
import * as _160 from "./core/client/v1/query.lcd";
import * as _161 from "./core/connection/v1/query.lcd";
import * as _162 from "./applications/transfer/v1/query.rpc.Query";
import * as _163 from "./core/channel/v1/query.rpc.Query";
import * as _164 from "./core/client/v1/query.rpc.Query";
import * as _165 from "./core/connection/v1/query.rpc.Query";
import * as _166 from "./applications/transfer/v1/tx.rpc.msg";
import * as _167 from "./core/channel/v1/tx.rpc.msg";
import * as _168 from "./core/client/v1/tx.rpc.msg";
import * as _169 from "./core/connection/v1/tx.rpc.msg";
import * as _185 from "./lcd";
import * as _186 from "./rpc.query";
import * as _187 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._150,
        ..._154,
        ..._158,
        ..._162,
        ..._166
      };
      export const v2 = { ..._67
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._151,
        ..._155,
        ..._159,
        ..._163,
        ..._167
      };
    }
    export namespace client {
      export const v1 = { ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._152,
        ..._156,
        ..._160,
        ..._164,
        ..._168
      };
    }
    export namespace commitment {
      export const v1 = { ..._76
      };
    }
    export namespace connection {
      export const v1 = { ..._77,
        ..._78,
        ..._79,
        ..._80,
        ..._153,
        ..._157,
        ..._161,
        ..._165,
        ..._169
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._81
      };
    }
    export namespace solomachine {
      export const v1 = { ..._82
      };
      export const v2 = { ..._83
      };
    }
    export namespace tendermint {
      export const v1 = { ..._84
      };
    }
  }
  export const ClientFactory = { ..._185,
    ..._186,
    ..._187
  };
}