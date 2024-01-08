import * as _164 from "./abci/types";
import * as _165 from "./crypto/keys";
import * as _166 from "./crypto/proof";
import * as _167 from "./libs/bits/types";
import * as _168 from "./p2p/types";
import * as _169 from "./types/block";
import * as _170 from "./types/evidence";
import * as _171 from "./types/params";
import * as _172 from "./types/types";
import * as _173 from "./types/validator";
import * as _174 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._164
  };
  export const crypto = {
    ..._165,
    ..._166
  };
  export namespace libs {
    export const bits = {
      ..._167
    };
  }
  export const p2p = {
    ..._168
  };
  export const types = {
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173
  };
  export const version = {
    ..._174
  };
}