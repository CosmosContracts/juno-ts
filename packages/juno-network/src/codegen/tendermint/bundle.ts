import * as _138 from "./abci/types";
import * as _139 from "./crypto/keys";
import * as _140 from "./crypto/proof";
import * as _141 from "./libs/bits/types";
import * as _142 from "./p2p/types";
import * as _143 from "./types/block";
import * as _144 from "./types/evidence";
import * as _145 from "./types/params";
import * as _146 from "./types/types";
import * as _147 from "./types/validator";
import * as _148 from "./version/types";
export namespace tendermint {
  export const abci = { ..._138
  };
  export const crypto = { ..._139,
    ..._140
  };
  export namespace libs {
    export const bits = { ..._141
    };
  }
  export const p2p = { ..._142
  };
  export const types = { ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147
  };
  export const version = { ..._148
  };
}