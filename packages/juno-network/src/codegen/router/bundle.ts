import * as _94 from "./v1/genesis";
import * as _95 from "./v1/query";
import * as _181 from "./v1/query.lcd";
import * as _182 from "./v1/query.rpc.Query";
import * as _200 from "./lcd";
import * as _201 from "./rpc.query";
export namespace router {
  export const v1 = { ..._94,
    ..._95,
    ..._181,
    ..._182
  };
  export const ClientFactory = { ..._200,
    ..._201
  };
}