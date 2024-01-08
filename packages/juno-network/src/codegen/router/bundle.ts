import * as _162 from "./v1/genesis";
import * as _163 from "./v1/query";
import * as _315 from "./v1/query.lcd";
import * as _316 from "./v1/query.rpc.Query";
import * as _334 from "./lcd";
import * as _335 from "./rpc.query";
export namespace router {
  export const v1 = {
    ..._162,
    ..._163,
    ..._315,
    ..._316
  };
  export const ClientFactory = {
    ..._334,
    ..._335
  };
}