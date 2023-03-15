import * as _93 from "./abci/types";
import * as _94 from "./crypto/keys";
import * as _95 from "./crypto/proof";
import * as _96 from "./libs/bits/types";
import * as _97 from "./p2p/types";
import * as _98 from "./types/block";
import * as _99 from "./types/evidence";
import * as _100 from "./types/params";
import * as _101 from "./types/types";
import * as _102 from "./types/validator";
import * as _103 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _93.CheckTxType;
        checkTxTypeToJSON(object: _93.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _93.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _93.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _93.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _93.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _93.EvidenceType;
        evidenceTypeToJSON(object: _93.EvidenceType): string;
        CheckTxType: typeof _93.CheckTxType;
        CheckTxTypeSDKType: typeof _93.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _93.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _93.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _93.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _93.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _93.EvidenceType;
        EvidenceTypeSDKType: typeof _93.EvidenceTypeSDKType;
        Request: {
            encode(message: _93.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Request;
            fromPartial(object: any): _93.Request;
        };
        RequestEcho: {
            encode(message: _93.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestEcho;
            fromPartial(object: any): _93.RequestEcho;
        };
        RequestFlush: {
            encode(_: _93.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestFlush;
            fromPartial(_: any): _93.RequestFlush;
        };
        RequestInfo: {
            encode(message: _93.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestInfo;
            fromPartial(object: any): _93.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _93.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestSetOption;
            fromPartial(object: any): _93.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _93.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestInitChain;
            fromPartial(object: any): _93.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _93.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestQuery;
            fromPartial(object: any): _93.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _93.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestBeginBlock;
            fromPartial(object: any): _93.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _93.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestCheckTx;
            fromPartial(object: any): _93.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _93.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestDeliverTx;
            fromPartial(object: any): _93.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _93.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestEndBlock;
            fromPartial(object: any): _93.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _93.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestCommit;
            fromPartial(_: any): _93.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _93.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestListSnapshots;
            fromPartial(_: any): _93.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _93.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestOfferSnapshot;
            fromPartial(object: any): _93.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _93.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestLoadSnapshotChunk;
            fromPartial(object: any): _93.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _93.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RequestApplySnapshotChunk;
            fromPartial(object: any): _93.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _93.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Response;
            fromPartial(object: any): _93.Response;
        };
        ResponseException: {
            encode(message: _93.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseException;
            fromPartial(object: any): _93.ResponseException;
        };
        ResponseEcho: {
            encode(message: _93.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseEcho;
            fromPartial(object: any): _93.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _93.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseFlush;
            fromPartial(_: any): _93.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _93.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseInfo;
            fromPartial(object: any): _93.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _93.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseSetOption;
            fromPartial(object: any): _93.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _93.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseInitChain;
            fromPartial(object: any): _93.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _93.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseQuery;
            fromPartial(object: any): _93.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _93.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseBeginBlock;
            fromPartial(object: any): _93.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _93.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseCheckTx;
            fromPartial(object: any): _93.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _93.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseDeliverTx;
            fromPartial(object: any): _93.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _93.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseEndBlock;
            fromPartial(object: any): _93.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _93.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseCommit;
            fromPartial(object: any): _93.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _93.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseListSnapshots;
            fromPartial(object: any): _93.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _93.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseOfferSnapshot;
            fromPartial(object: any): _93.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _93.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _93.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _93.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ResponseApplySnapshotChunk;
            fromPartial(object: any): _93.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _93.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConsensusParams;
            fromPartial(object: any): _93.ConsensusParams;
        };
        BlockParams: {
            encode(message: _93.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BlockParams;
            fromPartial(object: any): _93.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _93.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.LastCommitInfo;
            fromPartial(object: any): _93.LastCommitInfo;
        };
        Event: {
            encode(message: _93.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Event;
            fromPartial(object: any): _93.Event;
        };
        EventAttribute: {
            encode(message: _93.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.EventAttribute;
            fromPartial(object: any): _93.EventAttribute;
        };
        TxResult: {
            encode(message: _93.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.TxResult;
            fromPartial(object: any): _93.TxResult;
        };
        Validator: {
            encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Validator;
            fromPartial(object: any): _93.Validator;
        };
        ValidatorUpdate: {
            encode(message: _93.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ValidatorUpdate;
            fromPartial(object: any): _93.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _93.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.VoteInfo;
            fromPartial(object: any): _93.VoteInfo;
        };
        Evidence: {
            encode(message: _93.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Evidence;
            fromPartial(object: any): _93.Evidence;
        };
        Snapshot: {
            encode(message: _93.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Snapshot;
            fromPartial(object: any): _93.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _95.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Proof;
            fromPartial(object: any): _95.Proof;
        };
        ValueOp: {
            encode(message: _95.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValueOp;
            fromPartial(object: any): _95.ValueOp;
        };
        DominoOp: {
            encode(message: _95.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DominoOp;
            fromPartial(object: any): _95.DominoOp;
        };
        ProofOp: {
            encode(message: _95.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ProofOp;
            fromPartial(object: any): _95.ProofOp;
        };
        ProofOps: {
            encode(message: _95.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ProofOps;
            fromPartial(object: any): _95.ProofOps;
        };
        PublicKey: {
            encode(message: _94.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PublicKey;
            fromPartial(object: any): _94.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _96.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BitArray;
                fromPartial(object: any): _96.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _97.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ProtocolVersion;
            fromPartial(object: any): _97.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _97.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.NodeInfo;
            fromPartial(object: any): _97.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _97.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.NodeInfoOther;
            fromPartial(object: any): _97.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _97.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PeerInfo;
            fromPartial(object: any): _97.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _97.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PeerAddressInfo;
            fromPartial(object: any): _97.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _102.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ValidatorSet;
            fromPartial(object: any): _102.ValidatorSet;
        };
        Validator: {
            encode(message: _102.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Validator;
            fromPartial(object: any): _102.Validator;
        };
        SimpleValidator: {
            encode(message: _102.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SimpleValidator;
            fromPartial(object: any): _102.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _101.BlockIDFlag;
        blockIDFlagToJSON(object: _101.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _101.SignedMsgType;
        signedMsgTypeToJSON(object: _101.SignedMsgType): string;
        BlockIDFlag: typeof _101.BlockIDFlag;
        BlockIDFlagSDKType: typeof _101.BlockIDFlagSDKType;
        SignedMsgType: typeof _101.SignedMsgType;
        SignedMsgTypeSDKType: typeof _101.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _101.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.PartSetHeader;
            fromPartial(object: any): _101.PartSetHeader;
        };
        Part: {
            encode(message: _101.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Part;
            fromPartial(object: any): _101.Part;
        };
        BlockID: {
            encode(message: _101.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BlockID;
            fromPartial(object: any): _101.BlockID;
        };
        Header: {
            encode(message: _101.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Header;
            fromPartial(object: any): _101.Header;
        };
        Data: {
            encode(message: _101.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Data;
            fromPartial(object: any): _101.Data;
        };
        Vote: {
            encode(message: _101.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Vote;
            fromPartial(object: any): _101.Vote;
        };
        Commit: {
            encode(message: _101.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Commit;
            fromPartial(object: any): _101.Commit;
        };
        CommitSig: {
            encode(message: _101.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CommitSig;
            fromPartial(object: any): _101.CommitSig;
        };
        Proposal: {
            encode(message: _101.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Proposal;
            fromPartial(object: any): _101.Proposal;
        };
        SignedHeader: {
            encode(message: _101.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SignedHeader;
            fromPartial(object: any): _101.SignedHeader;
        };
        LightBlock: {
            encode(message: _101.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.LightBlock;
            fromPartial(object: any): _101.LightBlock;
        };
        BlockMeta: {
            encode(message: _101.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BlockMeta;
            fromPartial(object: any): _101.BlockMeta;
        };
        TxProof: {
            encode(message: _101.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxProof;
            fromPartial(object: any): _101.TxProof;
        };
        ConsensusParams: {
            encode(message: _100.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ConsensusParams;
            fromPartial(object: any): _100.ConsensusParams;
        };
        BlockParams: {
            encode(message: _100.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BlockParams;
            fromPartial(object: any): _100.BlockParams;
        };
        EvidenceParams: {
            encode(message: _100.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.EvidenceParams;
            fromPartial(object: any): _100.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _100.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ValidatorParams;
            fromPartial(object: any): _100.ValidatorParams;
        };
        VersionParams: {
            encode(message: _100.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.VersionParams;
            fromPartial(object: any): _100.VersionParams;
        };
        HashedParams: {
            encode(message: _100.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.HashedParams;
            fromPartial(object: any): _100.HashedParams;
        };
        Evidence: {
            encode(message: _99.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Evidence;
            fromPartial(object: any): _99.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _99.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DuplicateVoteEvidence;
            fromPartial(object: any): _99.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _99.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.LightClientAttackEvidence;
            fromPartial(object: any): _99.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _99.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EvidenceList;
            fromPartial(object: any): _99.EvidenceList;
        };
        Block: {
            encode(message: _98.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Block;
            fromPartial(object: any): _98.Block;
        };
    };
    const version: {
        App: {
            encode(message: _103.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.App;
            fromPartial(object: any): _103.App;
        };
        Consensus: {
            encode(message: _103.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Consensus;
            fromPartial(object: any): _103.Consensus;
        };
    };
}
