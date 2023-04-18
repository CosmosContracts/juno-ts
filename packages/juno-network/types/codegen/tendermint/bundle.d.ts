import * as _96 from "./abci/types";
import * as _97 from "./crypto/keys";
import * as _98 from "./crypto/proof";
import * as _99 from "./libs/bits/types";
import * as _100 from "./p2p/types";
import * as _101 from "./types/block";
import * as _102 from "./types/evidence";
import * as _103 from "./types/params";
import * as _104 from "./types/types";
import * as _105 from "./types/validator";
import * as _106 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _96.CheckTxType;
        checkTxTypeToJSON(object: _96.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _96.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _96.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _96.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _96.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _96.EvidenceType;
        evidenceTypeToJSON(object: _96.EvidenceType): string;
        CheckTxType: typeof _96.CheckTxType;
        CheckTxTypeSDKType: typeof _96.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _96.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _96.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _96.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _96.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _96.EvidenceType;
        EvidenceTypeSDKType: typeof _96.EvidenceTypeSDKType;
        Request: {
            encode(message: _96.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Request;
            fromPartial(object: any): _96.Request;
        };
        RequestEcho: {
            encode(message: _96.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestEcho;
            fromPartial(object: any): _96.RequestEcho;
        };
        RequestFlush: {
            encode(_: _96.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestFlush;
            fromPartial(_: any): _96.RequestFlush;
        };
        RequestInfo: {
            encode(message: _96.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestInfo;
            fromPartial(object: any): _96.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _96.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestSetOption;
            fromPartial(object: any): _96.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _96.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestInitChain;
            fromPartial(object: any): _96.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _96.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestQuery;
            fromPartial(object: any): _96.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _96.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestBeginBlock;
            fromPartial(object: any): _96.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _96.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestCheckTx;
            fromPartial(object: any): _96.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _96.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestDeliverTx;
            fromPartial(object: any): _96.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _96.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestEndBlock;
            fromPartial(object: any): _96.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _96.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestCommit;
            fromPartial(_: any): _96.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _96.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestListSnapshots;
            fromPartial(_: any): _96.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _96.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestOfferSnapshot;
            fromPartial(object: any): _96.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _96.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestLoadSnapshotChunk;
            fromPartial(object: any): _96.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _96.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.RequestApplySnapshotChunk;
            fromPartial(object: any): _96.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _96.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Response;
            fromPartial(object: any): _96.Response;
        };
        ResponseException: {
            encode(message: _96.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseException;
            fromPartial(object: any): _96.ResponseException;
        };
        ResponseEcho: {
            encode(message: _96.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseEcho;
            fromPartial(object: any): _96.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _96.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseFlush;
            fromPartial(_: any): _96.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _96.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseInfo;
            fromPartial(object: any): _96.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _96.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseSetOption;
            fromPartial(object: any): _96.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _96.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseInitChain;
            fromPartial(object: any): _96.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _96.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseQuery;
            fromPartial(object: any): _96.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _96.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseBeginBlock;
            fromPartial(object: any): _96.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _96.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseCheckTx;
            fromPartial(object: any): _96.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _96.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseDeliverTx;
            fromPartial(object: any): _96.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _96.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseEndBlock;
            fromPartial(object: any): _96.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _96.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseCommit;
            fromPartial(object: any): _96.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _96.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseListSnapshots;
            fromPartial(object: any): _96.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _96.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseOfferSnapshot;
            fromPartial(object: any): _96.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _96.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _96.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _96.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ResponseApplySnapshotChunk;
            fromPartial(object: any): _96.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _96.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ConsensusParams;
            fromPartial(object: any): _96.ConsensusParams;
        };
        BlockParams: {
            encode(message: _96.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BlockParams;
            fromPartial(object: any): _96.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _96.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.LastCommitInfo;
            fromPartial(object: any): _96.LastCommitInfo;
        };
        Event: {
            encode(message: _96.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Event;
            fromPartial(object: any): _96.Event;
        };
        EventAttribute: {
            encode(message: _96.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.EventAttribute;
            fromPartial(object: any): _96.EventAttribute;
        };
        TxResult: {
            encode(message: _96.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.TxResult;
            fromPartial(object: any): _96.TxResult;
        };
        Validator: {
            encode(message: _96.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Validator;
            fromPartial(object: any): _96.Validator;
        };
        ValidatorUpdate: {
            encode(message: _96.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorUpdate;
            fromPartial(object: any): _96.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _96.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.VoteInfo;
            fromPartial(object: any): _96.VoteInfo;
        };
        Evidence: {
            encode(message: _96.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Evidence;
            fromPartial(object: any): _96.Evidence;
        };
        Snapshot: {
            encode(message: _96.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Snapshot;
            fromPartial(object: any): _96.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _98.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Proof;
            fromPartial(object: any): _98.Proof;
        };
        ValueOp: {
            encode(message: _98.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ValueOp;
            fromPartial(object: any): _98.ValueOp;
        };
        DominoOp: {
            encode(message: _98.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DominoOp;
            fromPartial(object: any): _98.DominoOp;
        };
        ProofOp: {
            encode(message: _98.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ProofOp;
            fromPartial(object: any): _98.ProofOp;
        };
        ProofOps: {
            encode(message: _98.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ProofOps;
            fromPartial(object: any): _98.ProofOps;
        };
        PublicKey: {
            encode(message: _97.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PublicKey;
            fromPartial(object: any): _97.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _99.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.BitArray;
                fromPartial(object: any): _99.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _100.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ProtocolVersion;
            fromPartial(object: any): _100.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _100.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.NodeInfo;
            fromPartial(object: any): _100.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _100.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.NodeInfoOther;
            fromPartial(object: any): _100.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _100.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.PeerInfo;
            fromPartial(object: any): _100.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _100.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.PeerAddressInfo;
            fromPartial(object: any): _100.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _105.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorSet;
            fromPartial(object: any): _105.ValidatorSet;
        };
        Validator: {
            encode(message: _105.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Validator;
            fromPartial(object: any): _105.Validator;
        };
        SimpleValidator: {
            encode(message: _105.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SimpleValidator;
            fromPartial(object: any): _105.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _104.BlockIDFlag;
        blockIDFlagToJSON(object: _104.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _104.SignedMsgType;
        signedMsgTypeToJSON(object: _104.SignedMsgType): string;
        BlockIDFlag: typeof _104.BlockIDFlag;
        BlockIDFlagSDKType: typeof _104.BlockIDFlagSDKType;
        SignedMsgType: typeof _104.SignedMsgType;
        SignedMsgTypeSDKType: typeof _104.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _104.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PartSetHeader;
            fromPartial(object: any): _104.PartSetHeader;
        };
        Part: {
            encode(message: _104.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Part;
            fromPartial(object: any): _104.Part;
        };
        BlockID: {
            encode(message: _104.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BlockID;
            fromPartial(object: any): _104.BlockID;
        };
        Header: {
            encode(message: _104.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Header;
            fromPartial(object: any): _104.Header;
        };
        Data: {
            encode(message: _104.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Data;
            fromPartial(object: any): _104.Data;
        };
        Vote: {
            encode(message: _104.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Vote;
            fromPartial(object: any): _104.Vote;
        };
        Commit: {
            encode(message: _104.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Commit;
            fromPartial(object: any): _104.Commit;
        };
        CommitSig: {
            encode(message: _104.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.CommitSig;
            fromPartial(object: any): _104.CommitSig;
        };
        Proposal: {
            encode(message: _104.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Proposal;
            fromPartial(object: any): _104.Proposal;
        };
        SignedHeader: {
            encode(message: _104.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SignedHeader;
            fromPartial(object: any): _104.SignedHeader;
        };
        LightBlock: {
            encode(message: _104.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.LightBlock;
            fromPartial(object: any): _104.LightBlock;
        };
        BlockMeta: {
            encode(message: _104.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BlockMeta;
            fromPartial(object: any): _104.BlockMeta;
        };
        TxProof: {
            encode(message: _104.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TxProof;
            fromPartial(object: any): _104.TxProof;
        };
        ConsensusParams: {
            encode(message: _103.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ConsensusParams;
            fromPartial(object: any): _103.ConsensusParams;
        };
        BlockParams: {
            encode(message: _103.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BlockParams;
            fromPartial(object: any): _103.BlockParams;
        };
        EvidenceParams: {
            encode(message: _103.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EvidenceParams;
            fromPartial(object: any): _103.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _103.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ValidatorParams;
            fromPartial(object: any): _103.ValidatorParams;
        };
        VersionParams: {
            encode(message: _103.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.VersionParams;
            fromPartial(object: any): _103.VersionParams;
        };
        HashedParams: {
            encode(message: _103.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.HashedParams;
            fromPartial(object: any): _103.HashedParams;
        };
        Evidence: {
            encode(message: _102.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Evidence;
            fromPartial(object: any): _102.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _102.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DuplicateVoteEvidence;
            fromPartial(object: any): _102.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _102.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LightClientAttackEvidence;
            fromPartial(object: any): _102.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _102.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EvidenceList;
            fromPartial(object: any): _102.EvidenceList;
        };
        Block: {
            encode(message: _101.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Block;
            fromPartial(object: any): _101.Block;
        };
    };
    const version: {
        App: {
            encode(message: _106.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.App;
            fromPartial(object: any): _106.App;
        };
        Consensus: {
            encode(message: _106.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Consensus;
            fromPartial(object: any): _106.Consensus;
        };
    };
}
