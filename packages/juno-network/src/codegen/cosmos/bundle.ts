import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/event";
import * as _4 from "./authz/v1beta1/genesis";
import * as _5 from "./authz/v1beta1/query";
import * as _6 from "./authz/v1beta1/tx";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/bank";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./base/abci/v1beta1/abci";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/hd/v1/hd";
import * as _18 from "./crypto/keyring/v1/record";
import * as _19 from "./crypto/multisig/keys";
import * as _20 from "./crypto/secp256k1/keys";
import * as _21 from "./crypto/secp256r1/keys";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1/genesis";
import * as _27 from "./gov/v1/gov";
import * as _28 from "./gov/v1/query";
import * as _29 from "./gov/v1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/upgrade";
import * as _97 from "./bank/v1beta1/tx.amino";
import * as _98 from "./distribution/v1beta1/tx.amino";
import * as _99 from "./gov/v1/tx.amino";
import * as _100 from "./gov/v1beta1/tx.amino";
import * as _101 from "./staking/v1beta1/tx.amino";
import * as _102 from "./upgrade/v1beta1/tx.amino";
import * as _103 from "./bank/v1beta1/tx.registry";
import * as _104 from "./distribution/v1beta1/tx.registry";
import * as _105 from "./gov/v1/tx.registry";
import * as _106 from "./gov/v1beta1/tx.registry";
import * as _107 from "./staking/v1beta1/tx.registry";
import * as _108 from "./upgrade/v1beta1/tx.registry";
import * as _109 from "./authz/v1beta1/query.lcd";
import * as _110 from "./bank/v1beta1/query.lcd";
import * as _111 from "./distribution/v1beta1/query.lcd";
import * as _112 from "./gov/v1/query.lcd";
import * as _113 from "./gov/v1beta1/query.lcd";
import * as _114 from "./staking/v1beta1/query.lcd";
import * as _115 from "./tx/v1beta1/service.lcd";
import * as _116 from "./upgrade/v1beta1/query.lcd";
import * as _117 from "./authz/v1beta1/query.rpc.Query";
import * as _118 from "./bank/v1beta1/query.rpc.Query";
import * as _119 from "./distribution/v1beta1/query.rpc.Query";
import * as _120 from "./gov/v1/query.rpc.Query";
import * as _121 from "./gov/v1beta1/query.rpc.Query";
import * as _122 from "./staking/v1beta1/query.rpc.Query";
import * as _123 from "./tx/v1beta1/service.rpc.Service";
import * as _124 from "./upgrade/v1beta1/query.rpc.Query";
import * as _125 from "./authz/v1beta1/tx.rpc.msg";
import * as _126 from "./bank/v1beta1/tx.rpc.msg";
import * as _127 from "./distribution/v1beta1/tx.rpc.msg";
import * as _128 from "./gov/v1/tx.rpc.msg";
import * as _129 from "./gov/v1beta1/tx.rpc.msg";
import * as _130 from "./staking/v1beta1/tx.rpc.msg";
import * as _131 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _164 from "./lcd";
import * as _165 from "./rpc.query";
import * as _166 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = { ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._109,
      ..._117,
      ..._125
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._97,
      ..._103,
      ..._110,
      ..._118,
      ..._126
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._12
      };
    }
    export namespace query {
      export const v1beta1 = { ..._13
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._14
      };
    }
    export const v1beta1 = { ..._15
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._16
    };
    export namespace hd {
      export const v1 = { ..._17
      };
    }
    export namespace keyring {
      export const v1 = { ..._18
      };
    }
    export const multisig = { ..._19
    };
    export const secp256k1 = { ..._20
    };
    export const secp256r1 = { ..._21
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._98,
      ..._104,
      ..._111,
      ..._119,
      ..._127
    };
  }
  export namespace gov {
    export const v1 = { ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._99,
      ..._105,
      ..._112,
      ..._120,
      ..._128
    };
    export const v1beta1 = { ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._100,
      ..._106,
      ..._113,
      ..._121,
      ..._129
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._101,
      ..._107,
      ..._114,
      ..._122,
      ..._130
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._39
      };
    }
    export const v1beta1 = { ..._40,
      ..._41,
      ..._115,
      ..._123
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._102,
      ..._108,
      ..._116,
      ..._124,
      ..._131
    };
  }
  export const ClientFactory = { ..._164,
    ..._165,
    ..._166
  };
}