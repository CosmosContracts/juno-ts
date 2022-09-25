import * as _85 from "./abci/types";
import * as _86 from "./crypto/keys";
import * as _87 from "./crypto/proof";
import * as _88 from "./libs/bits/types";
import * as _89 from "./p2p/types";
import * as _90 from "./types/block";
import * as _91 from "./types/evidence";
import * as _92 from "./types/params";
import * as _93 from "./types/types";
import * as _94 from "./types/validator";
import * as _95 from "./version/types";
export namespace tendermint {
  export const abci = { ..._85
  };
  export const crypto = { ..._86,
    ..._87
  };
  export namespace libs {
    export const bits = { ..._88
    };
  }
  export const p2p = { ..._89
  };
  export const types = { ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94
  };
  export const version = { ..._95
  };
}