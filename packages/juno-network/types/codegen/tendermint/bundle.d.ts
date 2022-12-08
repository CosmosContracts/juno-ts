import * as _82 from "./abci/types";
import * as _83 from "./crypto/keys";
import * as _84 from "./crypto/proof";
import * as _85 from "./libs/bits/types";
import * as _86 from "./p2p/types";
import * as _87 from "./types/block";
import * as _88 from "./types/evidence";
import * as _89 from "./types/params";
import * as _90 from "./types/types";
import * as _91 from "./types/validator";
import * as _92 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _82.CheckTxType;
        checkTxTypeToJSON(object: _82.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _82.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _82.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _82.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _82.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _82.EvidenceType;
        evidenceTypeToJSON(object: _82.EvidenceType): string;
        CheckTxType: typeof _82.CheckTxType;
        CheckTxTypeSDKType: typeof _82.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _82.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _82.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _82.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _82.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _82.EvidenceType;
        EvidenceTypeSDKType: typeof _82.EvidenceTypeSDKType;
        Request: {
            encode(message: _82.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Request;
            fromPartial(object: any): _82.Request;
        };
        RequestEcho: {
            encode(message: _82.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestEcho;
            fromPartial(object: any): _82.RequestEcho;
        };
        RequestFlush: {
            encode(_: _82.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestFlush;
            fromPartial(_: any): _82.RequestFlush;
        };
        RequestInfo: {
            encode(message: _82.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestInfo;
            fromPartial(object: any): _82.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _82.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestSetOption;
            fromPartial(object: any): _82.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _82.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestInitChain;
            fromPartial(object: any): _82.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _82.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestQuery;
            fromPartial(object: any): _82.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _82.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestBeginBlock;
            fromPartial(object: any): _82.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _82.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestCheckTx;
            fromPartial(object: any): _82.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _82.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestDeliverTx;
            fromPartial(object: any): _82.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _82.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestEndBlock;
            fromPartial(object: any): _82.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _82.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestCommit;
            fromPartial(_: any): _82.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _82.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestListSnapshots;
            fromPartial(_: any): _82.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _82.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestOfferSnapshot;
            fromPartial(object: any): _82.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _82.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestLoadSnapshotChunk;
            fromPartial(object: any): _82.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _82.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestApplySnapshotChunk;
            fromPartial(object: any): _82.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _82.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Response;
            fromPartial(object: any): _82.Response;
        };
        ResponseException: {
            encode(message: _82.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseException;
            fromPartial(object: any): _82.ResponseException;
        };
        ResponseEcho: {
            encode(message: _82.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseEcho;
            fromPartial(object: any): _82.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _82.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseFlush;
            fromPartial(_: any): _82.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _82.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseInfo;
            fromPartial(object: any): _82.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _82.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseSetOption;
            fromPartial(object: any): _82.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _82.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseInitChain;
            fromPartial(object: any): _82.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _82.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseQuery;
            fromPartial(object: any): _82.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _82.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseBeginBlock;
            fromPartial(object: any): _82.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _82.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseCheckTx;
            fromPartial(object: any): _82.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _82.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseDeliverTx;
            fromPartial(object: any): _82.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _82.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseEndBlock;
            fromPartial(object: any): _82.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _82.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseCommit;
            fromPartial(object: any): _82.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _82.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseListSnapshots;
            fromPartial(object: any): _82.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _82.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseOfferSnapshot;
            fromPartial(object: any): _82.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _82.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _82.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _82.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseApplySnapshotChunk;
            fromPartial(object: any): _82.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _82.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusParams;
            fromPartial(object: any): _82.ConsensusParams;
        };
        BlockParams: {
            encode(message: _82.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BlockParams;
            fromPartial(object: any): _82.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _82.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LastCommitInfo;
            fromPartial(object: any): _82.LastCommitInfo;
        };
        Event: {
            encode(message: _82.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Event;
            fromPartial(object: any): _82.Event;
        };
        EventAttribute: {
            encode(message: _82.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.EventAttribute;
            fromPartial(object: any): _82.EventAttribute;
        };
        TxResult: {
            encode(message: _82.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TxResult;
            fromPartial(object: any): _82.TxResult;
        };
        Validator: {
            encode(message: _82.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Validator;
            fromPartial(object: any): _82.Validator;
        };
        ValidatorUpdate: {
            encode(message: _82.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ValidatorUpdate;
            fromPartial(object: any): _82.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _82.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.VoteInfo;
            fromPartial(object: any): _82.VoteInfo;
        };
        Evidence: {
            encode(message: _82.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Evidence;
            fromPartial(object: any): _82.Evidence;
        };
        Snapshot: {
            encode(message: _82.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Snapshot;
            fromPartial(object: any): _82.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _84.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Proof;
            fromPartial(object: any): _84.Proof;
        };
        ValueOp: {
            encode(message: _84.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValueOp;
            fromPartial(object: any): _84.ValueOp;
        };
        DominoOp: {
            encode(message: _84.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DominoOp;
            fromPartial(object: any): _84.DominoOp;
        };
        ProofOp: {
            encode(message: _84.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ProofOp;
            fromPartial(object: any): _84.ProofOp;
        };
        ProofOps: {
            encode(message: _84.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ProofOps;
            fromPartial(object: any): _84.ProofOps;
        };
        PublicKey: {
            encode(message: _83.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PublicKey;
            fromPartial(object: any): _83.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _85.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.BitArray;
                fromPartial(object: any): _85.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _86.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ProtocolVersion;
            fromPartial(object: any): _86.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _86.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NodeInfo;
            fromPartial(object: any): _86.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _86.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NodeInfoOther;
            fromPartial(object: any): _86.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _86.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PeerInfo;
            fromPartial(object: any): _86.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _86.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PeerAddressInfo;
            fromPartial(object: any): _86.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _91.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorSet;
            fromPartial(object: any): _91.ValidatorSet;
        };
        Validator: {
            encode(message: _91.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Validator;
            fromPartial(object: any): _91.Validator;
        };
        SimpleValidator: {
            encode(message: _91.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SimpleValidator;
            fromPartial(object: any): _91.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _90.BlockIDFlag;
        blockIDFlagToJSON(object: _90.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _90.SignedMsgType;
        signedMsgTypeToJSON(object: _90.SignedMsgType): string;
        BlockIDFlag: typeof _90.BlockIDFlag;
        BlockIDFlagSDKType: typeof _90.BlockIDFlagSDKType;
        SignedMsgType: typeof _90.SignedMsgType;
        SignedMsgTypeSDKType: typeof _90.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _90.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PartSetHeader;
            fromPartial(object: any): _90.PartSetHeader;
        };
        Part: {
            encode(message: _90.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Part;
            fromPartial(object: any): _90.Part;
        };
        BlockID: {
            encode(message: _90.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockID;
            fromPartial(object: any): _90.BlockID;
        };
        Header: {
            encode(message: _90.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Header;
            fromPartial(object: any): _90.Header;
        };
        Data: {
            encode(message: _90.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Data;
            fromPartial(object: any): _90.Data;
        };
        Vote: {
            encode(message: _90.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Vote;
            fromPartial(object: any): _90.Vote;
        };
        Commit: {
            encode(message: _90.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Commit;
            fromPartial(object: any): _90.Commit;
        };
        CommitSig: {
            encode(message: _90.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CommitSig;
            fromPartial(object: any): _90.CommitSig;
        };
        Proposal: {
            encode(message: _90.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Proposal;
            fromPartial(object: any): _90.Proposal;
        };
        SignedHeader: {
            encode(message: _90.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignedHeader;
            fromPartial(object: any): _90.SignedHeader;
        };
        LightBlock: {
            encode(message: _90.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.LightBlock;
            fromPartial(object: any): _90.LightBlock;
        };
        BlockMeta: {
            encode(message: _90.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockMeta;
            fromPartial(object: any): _90.BlockMeta;
        };
        TxProof: {
            encode(message: _90.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TxProof;
            fromPartial(object: any): _90.TxProof;
        };
        ConsensusParams: {
            encode(message: _89.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusParams;
            fromPartial(object: any): _89.ConsensusParams;
        };
        BlockParams: {
            encode(message: _89.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BlockParams;
            fromPartial(object: any): _89.BlockParams;
        };
        EvidenceParams: {
            encode(message: _89.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EvidenceParams;
            fromPartial(object: any): _89.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _89.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ValidatorParams;
            fromPartial(object: any): _89.ValidatorParams;
        };
        VersionParams: {
            encode(message: _89.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.VersionParams;
            fromPartial(object: any): _89.VersionParams;
        };
        HashedParams: {
            encode(message: _89.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.HashedParams;
            fromPartial(object: any): _89.HashedParams;
        };
        Evidence: {
            encode(message: _88.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Evidence;
            fromPartial(object: any): _88.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _88.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DuplicateVoteEvidence;
            fromPartial(object: any): _88.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _88.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LightClientAttackEvidence;
            fromPartial(object: any): _88.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _88.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.EvidenceList;
            fromPartial(object: any): _88.EvidenceList;
        };
        Block: {
            encode(message: _87.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Block;
            fromPartial(object: any): _87.Block;
        };
    };
    const version: {
        App: {
            encode(message: _92.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.App;
            fromPartial(object: any): _92.App;
        };
        Consensus: {
            encode(message: _92.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Consensus;
            fromPartial(object: any): _92.Consensus;
        };
    };
}
