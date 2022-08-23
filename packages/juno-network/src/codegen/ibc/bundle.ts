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
import * as _185 from "./applications/transfer/v1/tx.amino";
import * as _186 from "./core/channel/v1/tx.amino";
import * as _187 from "./core/client/v1/tx.amino";
import * as _188 from "./applications/transfer/v1/tx.registry";
import * as _189 from "./core/channel/v1/tx.registry";
import * as _190 from "./core/client/v1/tx.registry";
import * as _191 from "./applications/transfer/v1/query.lcd";
import * as _192 from "./core/channel/v1/query.lcd";
import * as _193 from "./core/client/v1/query.lcd";
import * as _194 from "./applications/transfer/v1/query.rpc.query";
import * as _195 from "./core/channel/v1/query.rpc.query";
import * as _196 from "./core/client/v1/query.rpc.query";
import * as _197 from "./applications/transfer/v1/tx.rpc.msg";
import * as _198 from "./core/channel/v1/tx.rpc.msg";
import * as _199 from "./core/client/v1/tx.rpc.msg";
import * as _208 from "./lcd";
import * as _209 from "./rpc.query";
import * as _210 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._185,
        ..._188,
        ..._191,
        ..._194,
        ..._197
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
        ..._186,
        ..._189,
        ..._192,
        ..._195,
        ..._198
      };
    }
    export namespace client {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._187,
        ..._190,
        ..._193,
        ..._196,
        ..._199
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
        ..._128
      };
    }
    export namespace port {
      export const v1 = { ..._129
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
  export const ClientFactory = { ..._208,
    ..._209,
    ..._210
  };
}