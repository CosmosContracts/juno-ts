import * as _60 from "./applications/transfer/v1/genesis";
import * as _61 from "./applications/transfer/v1/query";
import * as _62 from "./applications/transfer/v1/transfer";
import * as _63 from "./applications/transfer/v1/tx";
import * as _64 from "./applications/transfer/v2/packet";
import * as _65 from "./core/channel/v1/channel";
import * as _66 from "./core/channel/v1/genesis";
import * as _67 from "./core/channel/v1/query";
import * as _68 from "./core/channel/v1/tx";
import * as _69 from "./core/client/v1/client";
import * as _70 from "./core/client/v1/genesis";
import * as _71 from "./core/client/v1/query";
import * as _72 from "./core/client/v1/tx";
import * as _73 from "./core/commitment/v1/commitment";
import * as _74 from "./core/connection/v1/connection";
import * as _75 from "./core/connection/v1/genesis";
import * as _76 from "./core/connection/v1/query";
import * as _77 from "./core/connection/v1/tx";
import * as _78 from "./lightclients/localhost/v1/localhost";
import * as _79 from "./lightclients/solomachine/v1/solomachine";
import * as _80 from "./lightclients/solomachine/v2/solomachine";
import * as _81 from "./lightclients/tendermint/v1/tendermint";
import * as _136 from "./applications/transfer/v1/tx.amino";
import * as _137 from "./core/channel/v1/tx.amino";
import * as _138 from "./core/client/v1/tx.amino";
import * as _139 from "./core/connection/v1/tx.amino";
import * as _140 from "./applications/transfer/v1/tx.registry";
import * as _141 from "./core/channel/v1/tx.registry";
import * as _142 from "./core/client/v1/tx.registry";
import * as _143 from "./core/connection/v1/tx.registry";
import * as _144 from "./applications/transfer/v1/query.lcd";
import * as _145 from "./core/channel/v1/query.lcd";
import * as _146 from "./core/client/v1/query.lcd";
import * as _147 from "./core/connection/v1/query.lcd";
import * as _148 from "./applications/transfer/v1/query.rpc.query";
import * as _149 from "./core/channel/v1/query.rpc.query";
import * as _150 from "./core/client/v1/query.rpc.query";
import * as _151 from "./core/connection/v1/query.rpc.query";
import * as _152 from "./applications/transfer/v1/tx.rpc.msg";
import * as _153 from "./core/channel/v1/tx.rpc.msg";
import * as _154 from "./core/client/v1/tx.rpc.msg";
import * as _155 from "./core/connection/v1/tx.rpc.msg";
import * as _164 from "./lcd";
import * as _165 from "./rpc.query";
import * as _166 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._136,
        ..._140,
        ..._144,
        ..._148,
        ..._152
      };
      export const v2 = { ..._64
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._65,
        ..._66,
        ..._67,
        ..._68,
        ..._137,
        ..._141,
        ..._145,
        ..._149,
        ..._153
      };
    }
    export namespace client {
      export const v1 = { ..._69,
        ..._70,
        ..._71,
        ..._72,
        ..._138,
        ..._142,
        ..._146,
        ..._150,
        ..._154
      };
    }
    export namespace commitment {
      export const v1 = { ..._73
      };
    }
    export namespace connection {
      export const v1 = { ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._139,
        ..._143,
        ..._147,
        ..._151,
        ..._155
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._78
      };
    }
    export namespace solomachine {
      export const v1 = { ..._79
      };
      export const v2 = { ..._80
      };
    }
    export namespace tendermint {
      export const v1 = { ..._81
      };
    }
  }
  export const ClientFactory = { ..._164,
    ..._165,
    ..._166
  };
}