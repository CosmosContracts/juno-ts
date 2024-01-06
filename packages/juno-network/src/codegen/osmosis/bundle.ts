import * as _157 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _158 from "./tokenfactory/v1beta1/genesis";
import * as _159 from "./tokenfactory/v1beta1/params";
import * as _160 from "./tokenfactory/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/tx";
import * as _310 from "./tokenfactory/v1beta1/tx.amino";
import * as _311 from "./tokenfactory/v1beta1/tx.registry";
import * as _312 from "./tokenfactory/v1beta1/query.lcd";
import * as _313 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _314 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./lcd";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314
    };
  }
  export const ClientFactory = {
    ..._331,
    ..._332,
    ..._333
  };
}