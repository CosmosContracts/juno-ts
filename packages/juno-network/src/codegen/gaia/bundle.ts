import * as _52 from "./globalfee/v1beta1/genesis";
import * as _53 from "./globalfee/v1beta1/query";
import * as _147 from "./globalfee/v1beta1/query.lcd";
import * as _148 from "./globalfee/v1beta1/query.rpc.Query";
import * as _189 from "./lcd";
import * as _190 from "./rpc.query";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = { ..._52,
      ..._53,
      ..._147,
      ..._148
    };
  }
  export const ClientFactory = { ..._189,
    ..._190
  };
}