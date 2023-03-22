import * as _96 from "./abci/types";
import * as _97 from "./crypto/keys";
import * as _98 from "./crypto/proof";
import * as _99 from "./libs/bits/types";
import * as _100 from "./p2p/types";
import * as _101 from "./types/block";
import * as _102 from "./types/evidence";
import * as _103 from "./types/params";
import * as _104 from "./types/types";
import * as _105 from "./types/validator";
import * as _106 from "./version/types";
export namespace tendermint {
  export const abci = { ..._96
  };
  export const crypto = { ..._97,
    ..._98
  };
  export namespace libs {
    export const bits = { ..._99
    };
  }
  export const p2p = { ..._100
  };
  export const types = { ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105
  };
  export const version = { ..._106
  };
}