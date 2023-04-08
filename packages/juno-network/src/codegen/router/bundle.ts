import * as _92 from "./v1/genesis";
import * as _93 from "./v1/query";
import * as _177 from "./v1/query.lcd";
import * as _178 from "./v1/query.rpc.Query";
import * as _191 from "./lcd";
import * as _192 from "./rpc.query";
export namespace router {
  export const v1 = { ..._92,
    ..._93,
    ..._177,
    ..._178
  };
  export const ClientFactory = { ..._191,
    ..._192
  };
}