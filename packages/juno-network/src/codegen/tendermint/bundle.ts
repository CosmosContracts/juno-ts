import * as _86 from "./abci/types";
import * as _87 from "./crypto/keys";
import * as _88 from "./crypto/proof";
import * as _89 from "./libs/bits/types";
import * as _90 from "./p2p/types";
import * as _91 from "./types/block";
import * as _92 from "./types/evidence";
import * as _93 from "./types/params";
import * as _94 from "./types/types";
import * as _95 from "./types/validator";
import * as _96 from "./version/types";
export namespace tendermint {
  export const abci = { ..._86
  };
  export const crypto = { ..._87,
    ..._88
  };
  export namespace libs {
    export const bits = { ..._89
    };
  }
  export const p2p = { ..._90
  };
  export const types = { ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95
  };
  export const version = { ..._96
  };
}