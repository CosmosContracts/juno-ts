import * as _86 from "./abci/types";
import * as _87 from "./crypto/keys";
import * as _88 from "./crypto/proof";
import * as _89 from "./libs/bits/types";
import * as _90 from "./p2p/types";
import * as _91 from "./types/block";
import * as _92 from "./types/evidence";
import * as _93 from "./types/params";
import * as _94 from "./types/types";
import * as _95 from "./types/validator";
import * as _96 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _86.CheckTxType;
        checkTxTypeToJSON(object: _86.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _86.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _86.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _86.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _86.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _86.EvidenceType;
        evidenceTypeToJSON(object: _86.EvidenceType): string;
        CheckTxType: typeof _86.CheckTxType;
        CheckTxTypeSDKType: typeof _86.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _86.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _86.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _86.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _86.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _86.EvidenceType;
        EvidenceTypeSDKType: typeof _86.EvidenceTypeSDKType;
        Request: {
            encode(message: _86.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Request;
            fromPartial(object: any): _86.Request;
        };
        RequestEcho: {
            encode(message: _86.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestEcho;
            fromPartial(object: any): _86.RequestEcho;
        };
        RequestFlush: {
            encode(_: _86.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestFlush;
            fromPartial(_: any): _86.RequestFlush;
        };
        RequestInfo: {
            encode(message: _86.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestInfo;
            fromPartial(object: any): _86.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _86.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestSetOption;
            fromPartial(object: any): _86.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _86.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestInitChain;
            fromPartial(object: any): _86.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _86.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestQuery;
            fromPartial(object: any): _86.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _86.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestBeginBlock;
            fromPartial(object: any): _86.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _86.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestCheckTx;
            fromPartial(object: any): _86.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _86.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestDeliverTx;
            fromPartial(object: any): _86.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _86.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestEndBlock;
            fromPartial(object: any): _86.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _86.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestCommit;
            fromPartial(_: any): _86.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _86.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestListSnapshots;
            fromPartial(_: any): _86.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _86.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestOfferSnapshot;
            fromPartial(object: any): _86.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _86.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestLoadSnapshotChunk;
            fromPartial(object: any): _86.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _86.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RequestApplySnapshotChunk;
            fromPartial(object: any): _86.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _86.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Response;
            fromPartial(object: any): _86.Response;
        };
        ResponseException: {
            encode(message: _86.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseException;
            fromPartial(object: any): _86.ResponseException;
        };
        ResponseEcho: {
            encode(message: _86.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseEcho;
            fromPartial(object: any): _86.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _86.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseFlush;
            fromPartial(_: any): _86.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _86.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseInfo;
            fromPartial(object: any): _86.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _86.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseSetOption;
            fromPartial(object: any): _86.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _86.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseInitChain;
            fromPartial(object: any): _86.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _86.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseQuery;
            fromPartial(object: any): _86.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _86.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseBeginBlock;
            fromPartial(object: any): _86.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _86.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseCheckTx;
            fromPartial(object: any): _86.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _86.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseDeliverTx;
            fromPartial(object: any): _86.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _86.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseEndBlock;
            fromPartial(object: any): _86.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _86.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseCommit;
            fromPartial(object: any): _86.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _86.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseListSnapshots;
            fromPartial(object: any): _86.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _86.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseOfferSnapshot;
            fromPartial(object: any): _86.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _86.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _86.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _86.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ResponseApplySnapshotChunk;
            fromPartial(object: any): _86.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _86.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConsensusParams;
            fromPartial(object: any): _86.ConsensusParams;
        };
        BlockParams: {
            encode(message: _86.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BlockParams;
            fromPartial(object: any): _86.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _86.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.LastCommitInfo;
            fromPartial(object: any): _86.LastCommitInfo;
        };
        Event: {
            encode(message: _86.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Event;
            fromPartial(object: any): _86.Event;
        };
        EventAttribute: {
            encode(message: _86.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.EventAttribute;
            fromPartial(object: any): _86.EventAttribute;
        };
        TxResult: {
            encode(message: _86.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.TxResult;
            fromPartial(object: any): _86.TxResult;
        };
        Validator: {
            encode(message: _86.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Validator;
            fromPartial(object: any): _86.Validator;
        };
        ValidatorUpdate: {
            encode(message: _86.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorUpdate;
            fromPartial(object: any): _86.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _86.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.VoteInfo;
            fromPartial(object: any): _86.VoteInfo;
        };
        Evidence: {
            encode(message: _86.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Evidence;
            fromPartial(object: any): _86.Evidence;
        };
        Snapshot: {
            encode(message: _86.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Snapshot;
            fromPartial(object: any): _86.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _88.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Proof;
            fromPartial(object: any): _88.Proof;
        };
        ValueOp: {
            encode(message: _88.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValueOp;
            fromPartial(object: any): _88.ValueOp;
        };
        DominoOp: {
            encode(message: _88.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DominoOp;
            fromPartial(object: any): _88.DominoOp;
        };
        ProofOp: {
            encode(message: _88.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ProofOp;
            fromPartial(object: any): _88.ProofOp;
        };
        ProofOps: {
            encode(message: _88.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ProofOps;
            fromPartial(object: any): _88.ProofOps;
        };
        PublicKey: {
            encode(message: _87.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PublicKey;
            fromPartial(object: any): _87.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _89.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BitArray;
                fromPartial(object: any): _89.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _90.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ProtocolVersion;
            fromPartial(object: any): _90.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _90.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.NodeInfo;
            fromPartial(object: any): _90.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _90.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.NodeInfoOther;
            fromPartial(object: any): _90.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _90.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PeerInfo;
            fromPartial(object: any): _90.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _90.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PeerAddressInfo;
            fromPartial(object: any): _90.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _95.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorSet;
            fromPartial(object: any): _95.ValidatorSet;
        };
        Validator: {
            encode(message: _95.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Validator;
            fromPartial(object: any): _95.Validator;
        };
        SimpleValidator: {
            encode(message: _95.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SimpleValidator;
            fromPartial(object: any): _95.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _94.BlockIDFlag;
        blockIDFlagToJSON(object: _94.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _94.SignedMsgType;
        signedMsgTypeToJSON(object: _94.SignedMsgType): string;
        BlockIDFlag: typeof _94.BlockIDFlag;
        BlockIDFlagSDKType: typeof _94.BlockIDFlagSDKType;
        SignedMsgType: typeof _94.SignedMsgType;
        SignedMsgTypeSDKType: typeof _94.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _94.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PartSetHeader;
            fromPartial(object: any): _94.PartSetHeader;
        };
        Part: {
            encode(message: _94.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Part;
            fromPartial(object: any): _94.Part;
        };
        BlockID: {
            encode(message: _94.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BlockID;
            fromPartial(object: any): _94.BlockID;
        };
        Header: {
            encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Header;
            fromPartial(object: any): _94.Header;
        };
        Data: {
            encode(message: _94.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Data;
            fromPartial(object: any): _94.Data;
        };
        Vote: {
            encode(message: _94.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Vote;
            fromPartial(object: any): _94.Vote;
        };
        Commit: {
            encode(message: _94.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Commit;
            fromPartial(object: any): _94.Commit;
        };
        CommitSig: {
            encode(message: _94.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CommitSig;
            fromPartial(object: any): _94.CommitSig;
        };
        Proposal: {
            encode(message: _94.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Proposal;
            fromPartial(object: any): _94.Proposal;
        };
        SignedHeader: {
            encode(message: _94.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignedHeader;
            fromPartial(object: any): _94.SignedHeader;
        };
        LightBlock: {
            encode(message: _94.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.LightBlock;
            fromPartial(object: any): _94.LightBlock;
        };
        BlockMeta: {
            encode(message: _94.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BlockMeta;
            fromPartial(object: any): _94.BlockMeta;
        };
        TxProof: {
            encode(message: _94.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TxProof;
            fromPartial(object: any): _94.TxProof;
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
        EvidenceParams: {
            encode(message: _93.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.EvidenceParams;
            fromPartial(object: any): _93.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _93.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ValidatorParams;
            fromPartial(object: any): _93.ValidatorParams;
        };
        VersionParams: {
            encode(message: _93.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.VersionParams;
            fromPartial(object: any): _93.VersionParams;
        };
        HashedParams: {
            encode(message: _93.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HashedParams;
            fromPartial(object: any): _93.HashedParams;
        };
        Evidence: {
            encode(message: _92.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Evidence;
            fromPartial(object: any): _92.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _92.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DuplicateVoteEvidence;
            fromPartial(object: any): _92.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _92.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.LightClientAttackEvidence;
            fromPartial(object: any): _92.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _92.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.EvidenceList;
            fromPartial(object: any): _92.EvidenceList;
        };
        Block: {
            encode(message: _91.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Block;
            fromPartial(object: any): _91.Block;
        };
    };
    const version: {
        App: {
            encode(message: _96.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.App;
            fromPartial(object: any): _96.App;
        };
        Consensus: {
            encode(message: _96.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Consensus;
            fromPartial(object: any): _96.Consensus;
        };
    };
}
