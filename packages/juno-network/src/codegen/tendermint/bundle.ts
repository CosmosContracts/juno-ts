import * as _82 from "./abci/types";
import * as _83 from "./crypto/keys";
import * as _84 from "./crypto/proof";
import * as _85 from "./libs/bits/types";
import * as _86 from "./p2p/types";
import * as _87 from "./types/block";
import * as _88 from "./types/evidence";
import * as _89 from "./types/params";
import * as _90 from "./types/types";
import * as _91 from "./types/validator";
import * as _92 from "./version/types";
export namespace tendermint {
  export const abci = { ..._82
  };
  export const crypto = { ..._83,
    ..._84
  };
  export namespace libs {
    export const bits = { ..._85
    };
  }
  export const p2p = { ..._86
  };
  export const types = { ..._87,
    ..._88,
    ..._89,
    ..._90,
    ..._91
  };
  export const version = { ..._92
  };
}