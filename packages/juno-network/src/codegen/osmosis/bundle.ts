import * as _89 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _90 from "./tokenfactory/v1beta1/genesis";
import * as _91 from "./tokenfactory/v1beta1/params";
import * as _92 from "./tokenfactory/v1beta1/query";
import * as _93 from "./tokenfactory/v1beta1/tx";
import * as _176 from "./tokenfactory/v1beta1/tx.amino";
import * as _177 from "./tokenfactory/v1beta1/tx.registry";
import * as _178 from "./tokenfactory/v1beta1/query.lcd";
import * as _179 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _180 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _197 from "./lcd";
import * as _198 from "./rpc.query";
import * as _199 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = { ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180
    };
  }
  export const ClientFactory = { ..._197,
    ..._198,
    ..._199
  };
}