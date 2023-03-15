import * as _86 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _87 from "./tokenfactory/v1beta1/genesis";
import * as _88 from "./tokenfactory/v1beta1/params";
import * as _89 from "./tokenfactory/v1beta1/query";
import * as _90 from "./tokenfactory/v1beta1/tx";
import * as _171 from "./tokenfactory/v1beta1/tx.amino";
import * as _172 from "./tokenfactory/v1beta1/tx.registry";
import * as _173 from "./tokenfactory/v1beta1/query.lcd";
import * as _174 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _175 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _190 from "./lcd";
import * as _191 from "./rpc.query";
import * as _192 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = { ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175
    };
  }
  export const ClientFactory = { ..._190,
    ..._191,
    ..._192
  };
}