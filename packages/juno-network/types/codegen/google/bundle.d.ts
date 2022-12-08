import * as _52 from "./protobuf/any";
import * as _53 from "./protobuf/descriptor";
import * as _54 from "./protobuf/duration";
import * as _55 from "./protobuf/empty";
import * as _56 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _56.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Timestamp;
            fromPartial(object: any): _56.Timestamp;
        };
        Empty: {
            encode(_: _55.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Empty;
            fromPartial(_: any): _55.Empty;
        };
        Duration: {
            encode(message: _54.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Duration;
            fromPartial(object: any): _54.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _53.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _53.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _53.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _53.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _53.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _53.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _53.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _53.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _53.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _53.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _53.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _53.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _53.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _53.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _53.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _53.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _53.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _53.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _53.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _53.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _53.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _53.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _53.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _53.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _53.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileDescriptorSet;
            fromPartial(object: any): _53.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _53.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileDescriptorProto;
            fromPartial(object: any): _53.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _53.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto;
            fromPartial(object: any): _53.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _53.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _53.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _53.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto_ReservedRange;
            fromPartial(object: any): _53.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _53.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ExtensionRangeOptions;
            fromPartial(object: any): _53.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _53.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FieldDescriptorProto;
            fromPartial(object: any): _53.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _53.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.OneofDescriptorProto;
            fromPartial(object: any): _53.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _53.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumDescriptorProto;
            fromPartial(object: any): _53.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _53.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _53.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _53.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumValueDescriptorProto;
            fromPartial(object: any): _53.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _53.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ServiceDescriptorProto;
            fromPartial(object: any): _53.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _53.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MethodDescriptorProto;
            fromPartial(object: any): _53.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _53.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileOptions;
            fromPartial(object: any): _53.FileOptions;
        };
        MessageOptions: {
            encode(message: _53.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MessageOptions;
            fromPartial(object: any): _53.MessageOptions;
        };
        FieldOptions: {
            encode(message: _53.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FieldOptions;
            fromPartial(object: any): _53.FieldOptions;
        };
        OneofOptions: {
            encode(message: _53.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.OneofOptions;
            fromPartial(object: any): _53.OneofOptions;
        };
        EnumOptions: {
            encode(message: _53.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumOptions;
            fromPartial(object: any): _53.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _53.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumValueOptions;
            fromPartial(object: any): _53.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _53.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ServiceOptions;
            fromPartial(object: any): _53.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _53.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MethodOptions;
            fromPartial(object: any): _53.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _53.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UninterpretedOption;
            fromPartial(object: any): _53.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _53.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UninterpretedOption_NamePart;
            fromPartial(object: any): _53.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _53.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SourceCodeInfo;
            fromPartial(object: any): _53.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _53.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SourceCodeInfo_Location;
            fromPartial(object: any): _53.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _53.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GeneratedCodeInfo;
            fromPartial(object: any): _53.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _53.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _53.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _52.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Any;
            fromPartial(object: any): _52.Any;
        };
    };
}
