import * as _91 from "./v1/genesis";
import * as _92 from "./v1/query";
import * as _176 from "./v1/query.lcd";
import * as _177 from "./v1/query.rpc.Query";
import * as _193 from "./lcd";
import * as _194 from "./rpc.query";
export namespace router {
  export const v1 = { ..._91,
    ..._92,
    ..._176,
    ..._177
  };
  export const ClientFactory = { ..._193,
    ..._194
  };
}