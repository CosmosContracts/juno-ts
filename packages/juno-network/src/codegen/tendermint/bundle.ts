import * as _94 from "./abci/types";
import * as _95 from "./crypto/keys";
import * as _96 from "./crypto/proof";
import * as _97 from "./libs/bits/types";
import * as _98 from "./p2p/types";
import * as _99 from "./types/block";
import * as _100 from "./types/evidence";
import * as _101 from "./types/params";
import * as _102 from "./types/types";
import * as _103 from "./types/validator";
import * as _104 from "./version/types";
export namespace tendermint {
  export const abci = { ..._94
  };
  export const crypto = { ..._95,
    ..._96
  };
  export namespace libs {
    export const bits = { ..._97
    };
  }
  export const p2p = { ..._98
  };
  export const types = { ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103
  };
  export const version = { ..._104
  };
}