import * as _94 from "./abci/types";
import * as _95 from "./crypto/keys";
import * as _96 from "./crypto/proof";
import * as _97 from "./libs/bits/types";
import * as _98 from "./p2p/types";
import * as _99 from "./types/block";
import * as _100 from "./types/evidence";
import * as _101 from "./types/params";
import * as _102 from "./types/types";
import * as _103 from "./types/validator";
import * as _104 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _94.CheckTxType;
        checkTxTypeToJSON(object: _94.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _94.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _94.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _94.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _94.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _94.EvidenceType;
        evidenceTypeToJSON(object: _94.EvidenceType): string;
        CheckTxType: typeof _94.CheckTxType;
        CheckTxTypeSDKType: typeof _94.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _94.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _94.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _94.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _94.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _94.EvidenceType;
        EvidenceTypeSDKType: typeof _94.EvidenceTypeSDKType;
        Request: {
            encode(message: _94.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Request;
            fromPartial(object: any): _94.Request;
        };
        RequestEcho: {
            encode(message: _94.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestEcho;
            fromPartial(object: any): _94.RequestEcho;
        };
        RequestFlush: {
            encode(_: _94.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestFlush;
            fromPartial(_: any): _94.RequestFlush;
        };
        RequestInfo: {
            encode(message: _94.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestInfo;
            fromPartial(object: any): _94.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _94.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestSetOption;
            fromPartial(object: any): _94.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _94.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestInitChain;
            fromPartial(object: any): _94.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _94.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestQuery;
            fromPartial(object: any): _94.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _94.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestBeginBlock;
            fromPartial(object: any): _94.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _94.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestCheckTx;
            fromPartial(object: any): _94.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _94.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestDeliverTx;
            fromPartial(object: any): _94.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _94.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestEndBlock;
            fromPartial(object: any): _94.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _94.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestCommit;
            fromPartial(_: any): _94.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _94.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestListSnapshots;
            fromPartial(_: any): _94.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _94.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestOfferSnapshot;
            fromPartial(object: any): _94.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _94.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestLoadSnapshotChunk;
            fromPartial(object: any): _94.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _94.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RequestApplySnapshotChunk;
            fromPartial(object: any): _94.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _94.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Response;
            fromPartial(object: any): _94.Response;
        };
        ResponseException: {
            encode(message: _94.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseException;
            fromPartial(object: any): _94.ResponseException;
        };
        ResponseEcho: {
            encode(message: _94.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseEcho;
            fromPartial(object: any): _94.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _94.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseFlush;
            fromPartial(_: any): _94.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _94.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseInfo;
            fromPartial(object: any): _94.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _94.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseSetOption;
            fromPartial(object: any): _94.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _94.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseInitChain;
            fromPartial(object: any): _94.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _94.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseQuery;
            fromPartial(object: any): _94.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _94.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseBeginBlock;
            fromPartial(object: any): _94.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _94.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseCheckTx;
            fromPartial(object: any): _94.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _94.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseDeliverTx;
            fromPartial(object: any): _94.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _94.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseEndBlock;
            fromPartial(object: any): _94.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _94.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseCommit;
            fromPartial(object: any): _94.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _94.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseListSnapshots;
            fromPartial(object: any): _94.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _94.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseOfferSnapshot;
            fromPartial(object: any): _94.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _94.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _94.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _94.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ResponseApplySnapshotChunk;
            fromPartial(object: any): _94.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _94.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusParams;
            fromPartial(object: any): _94.ConsensusParams;
        };
        BlockParams: {
            encode(message: _94.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BlockParams;
            fromPartial(object: any): _94.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _94.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.LastCommitInfo;
            fromPartial(object: any): _94.LastCommitInfo;
        };
        Event: {
            encode(message: _94.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Event;
            fromPartial(object: any): _94.Event;
        };
        EventAttribute: {
            encode(message: _94.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.EventAttribute;
            fromPartial(object: any): _94.EventAttribute;
        };
        TxResult: {
            encode(message: _94.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TxResult;
            fromPartial(object: any): _94.TxResult;
        };
        Validator: {
            encode(message: _94.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Validator;
            fromPartial(object: any): _94.Validator;
        };
        ValidatorUpdate: {
            encode(message: _94.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorUpdate;
            fromPartial(object: any): _94.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _94.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.VoteInfo;
            fromPartial(object: any): _94.VoteInfo;
        };
        Evidence: {
            encode(message: _94.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Evidence;
            fromPartial(object: any): _94.Evidence;
        };
        Snapshot: {
            encode(message: _94.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Snapshot;
            fromPartial(object: any): _94.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _96.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Proof;
            fromPartial(object: any): _96.Proof;
        };
        ValueOp: {
            encode(message: _96.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValueOp;
            fromPartial(object: any): _96.ValueOp;
        };
        DominoOp: {
            encode(message: _96.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DominoOp;
            fromPartial(object: any): _96.DominoOp;
        };
        ProofOp: {
            encode(message: _96.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ProofOp;
            fromPartial(object: any): _96.ProofOp;
        };
        ProofOps: {
            encode(message: _96.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ProofOps;
            fromPartial(object: any): _96.ProofOps;
        };
        PublicKey: {
            encode(message: _95.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PublicKey;
            fromPartial(object: any): _95.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _97.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.BitArray;
                fromPartial(object: any): _97.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _98.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ProtocolVersion;
            fromPartial(object: any): _98.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _98.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.NodeInfo;
            fromPartial(object: any): _98.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _98.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.NodeInfoOther;
            fromPartial(object: any): _98.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _98.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PeerInfo;
            fromPartial(object: any): _98.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _98.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PeerAddressInfo;
            fromPartial(object: any): _98.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _103.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ValidatorSet;
            fromPartial(object: any): _103.ValidatorSet;
        };
        Validator: {
            encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Validator;
            fromPartial(object: any): _103.Validator;
        };
        SimpleValidator: {
            encode(message: _103.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SimpleValidator;
            fromPartial(object: any): _103.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _102.BlockIDFlag;
        blockIDFlagToJSON(object: _102.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _102.SignedMsgType;
        signedMsgTypeToJSON(object: _102.SignedMsgType): string;
        BlockIDFlag: typeof _102.BlockIDFlag;
        BlockIDFlagSDKType: typeof _102.BlockIDFlagSDKType;
        SignedMsgType: typeof _102.SignedMsgType;
        SignedMsgTypeSDKType: typeof _102.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _102.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PartSetHeader;
            fromPartial(object: any): _102.PartSetHeader;
        };
        Part: {
            encode(message: _102.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Part;
            fromPartial(object: any): _102.Part;
        };
        BlockID: {
            encode(message: _102.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BlockID;
            fromPartial(object: any): _102.BlockID;
        };
        Header: {
            encode(message: _102.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Header;
            fromPartial(object: any): _102.Header;
        };
        Data: {
            encode(message: _102.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Data;
            fromPartial(object: any): _102.Data;
        };
        Vote: {
            encode(message: _102.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Vote;
            fromPartial(object: any): _102.Vote;
        };
        Commit: {
            encode(message: _102.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Commit;
            fromPartial(object: any): _102.Commit;
        };
        CommitSig: {
            encode(message: _102.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.CommitSig;
            fromPartial(object: any): _102.CommitSig;
        };
        Proposal: {
            encode(message: _102.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Proposal;
            fromPartial(object: any): _102.Proposal;
        };
        SignedHeader: {
            encode(message: _102.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SignedHeader;
            fromPartial(object: any): _102.SignedHeader;
        };
        LightBlock: {
            encode(message: _102.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LightBlock;
            fromPartial(object: any): _102.LightBlock;
        };
        BlockMeta: {
            encode(message: _102.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BlockMeta;
            fromPartial(object: any): _102.BlockMeta;
        };
        TxProof: {
            encode(message: _102.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.TxProof;
            fromPartial(object: any): _102.TxProof;
        };
        ConsensusParams: {
            encode(message: _101.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ConsensusParams;
            fromPartial(object: any): _101.ConsensusParams;
        };
        BlockParams: {
            encode(message: _101.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BlockParams;
            fromPartial(object: any): _101.BlockParams;
        };
        EvidenceParams: {
            encode(message: _101.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.EvidenceParams;
            fromPartial(object: any): _101.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _101.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ValidatorParams;
            fromPartial(object: any): _101.ValidatorParams;
        };
        VersionParams: {
            encode(message: _101.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.VersionParams;
            fromPartial(object: any): _101.VersionParams;
        };
        HashedParams: {
            encode(message: _101.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.HashedParams;
            fromPartial(object: any): _101.HashedParams;
        };
        Evidence: {
            encode(message: _100.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Evidence;
            fromPartial(object: any): _100.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _100.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DuplicateVoteEvidence;
            fromPartial(object: any): _100.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _100.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.LightClientAttackEvidence;
            fromPartial(object: any): _100.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _100.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.EvidenceList;
            fromPartial(object: any): _100.EvidenceList;
        };
        Block: {
            encode(message: _99.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Block;
            fromPartial(object: any): _99.Block;
        };
    };
    const version: {
        App: {
            encode(message: _104.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.App;
            fromPartial(object: any): _104.App;
        };
        Consensus: {
            encode(message: _104.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Consensus;
            fromPartial(object: any): _104.Consensus;
        };
    };
}
