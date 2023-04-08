import * as _58 from "./protobuf/any";
import * as _59 from "./protobuf/descriptor";
import * as _60 from "./protobuf/duration";
import * as _61 from "./protobuf/empty";
import * as _62 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _62.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Timestamp;
            fromPartial(object: any): _62.Timestamp;
        };
        Empty: {
            encode(_: _61.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Empty;
            fromPartial(_: any): _61.Empty;
        };
        Duration: {
            encode(message: _60.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Duration;
            fromPartial(object: any): _60.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _59.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _59.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _59.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _59.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _59.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _59.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _59.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _59.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _59.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _59.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _59.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _59.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _59.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _59.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _59.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _59.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _59.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _59.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _59.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _59.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _59.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _59.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _59.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _59.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _59.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileDescriptorSet;
            fromPartial(object: any): _59.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _59.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileDescriptorProto;
            fromPartial(object: any): _59.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _59.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto;
            fromPartial(object: any): _59.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _59.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _59.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _59.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto_ReservedRange;
            fromPartial(object: any): _59.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _59.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ExtensionRangeOptions;
            fromPartial(object: any): _59.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _59.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FieldDescriptorProto;
            fromPartial(object: any): _59.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _59.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.OneofDescriptorProto;
            fromPartial(object: any): _59.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _59.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumDescriptorProto;
            fromPartial(object: any): _59.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _59.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _59.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _59.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumValueDescriptorProto;
            fromPartial(object: any): _59.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _59.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ServiceDescriptorProto;
            fromPartial(object: any): _59.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _59.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MethodDescriptorProto;
            fromPartial(object: any): _59.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _59.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileOptions;
            fromPartial(object: any): _59.FileOptions;
        };
        MessageOptions: {
            encode(message: _59.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MessageOptions;
            fromPartial(object: any): _59.MessageOptions;
        };
        FieldOptions: {
            encode(message: _59.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FieldOptions;
            fromPartial(object: any): _59.FieldOptions;
        };
        OneofOptions: {
            encode(message: _59.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.OneofOptions;
            fromPartial(object: any): _59.OneofOptions;
        };
        EnumOptions: {
            encode(message: _59.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumOptions;
            fromPartial(object: any): _59.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _59.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumValueOptions;
            fromPartial(object: any): _59.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _59.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ServiceOptions;
            fromPartial(object: any): _59.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _59.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MethodOptions;
            fromPartial(object: any): _59.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _59.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.UninterpretedOption;
            fromPartial(object: any): _59.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _59.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.UninterpretedOption_NamePart;
            fromPartial(object: any): _59.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _59.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SourceCodeInfo;
            fromPartial(object: any): _59.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _59.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SourceCodeInfo_Location;
            fromPartial(object: any): _59.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _59.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GeneratedCodeInfo;
            fromPartial(object: any): _59.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _59.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _59.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _58.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Any;
            fromPartial(object: any): _58.Any;
        };
    };
}
