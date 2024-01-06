import * as _102 from "./globalfee/v1beta1/genesis";
import * as _103 from "./globalfee/v1beta1/query";
import * as _257 from "./globalfee/v1beta1/query.lcd";
import * as _258 from "./globalfee/v1beta1/query.rpc.Query";
import * as _323 from "./lcd";
import * as _324 from "./rpc.query";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._257,
      ..._258
    };
  }
  export const ClientFactory = {
    ..._323,
    ..._324
  };
}