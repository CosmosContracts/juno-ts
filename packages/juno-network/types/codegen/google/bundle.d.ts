import * as _55 from "./protobuf/any";
import * as _56 from "./protobuf/descriptor";
import * as _57 from "./protobuf/duration";
import * as _58 from "./protobuf/empty";
import * as _59 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _59.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Timestamp;
            fromPartial(object: any): _59.Timestamp;
        };
        Empty: {
            encode(_: _58.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Empty;
            fromPartial(_: any): _58.Empty;
        };
        Duration: {
            encode(message: _57.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Duration;
            fromPartial(object: any): _57.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _56.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _56.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _56.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _56.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _56.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _56.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _56.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _56.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _56.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _56.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _56.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _56.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _56.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _56.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _56.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _56.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _56.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _56.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _56.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _56.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _56.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _56.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _56.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _56.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _56.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.FileDescriptorSet;
            fromPartial(object: any): _56.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _56.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.FileDescriptorProto;
            fromPartial(object: any): _56.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _56.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DescriptorProto;
            fromPartial(object: any): _56.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _56.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _56.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _56.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DescriptorProto_ReservedRange;
            fromPartial(object: any): _56.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _56.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ExtensionRangeOptions;
            fromPartial(object: any): _56.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _56.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.FieldDescriptorProto;
            fromPartial(object: any): _56.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _56.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.OneofDescriptorProto;
            fromPartial(object: any): _56.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _56.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.EnumDescriptorProto;
            fromPartial(object: any): _56.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _56.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _56.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _56.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.EnumValueDescriptorProto;
            fromPartial(object: any): _56.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _56.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ServiceDescriptorProto;
            fromPartial(object: any): _56.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _56.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MethodDescriptorProto;
            fromPartial(object: any): _56.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _56.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.FileOptions;
            fromPartial(object: any): _56.FileOptions;
        };
        MessageOptions: {
            encode(message: _56.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MessageOptions;
            fromPartial(object: any): _56.MessageOptions;
        };
        FieldOptions: {
            encode(message: _56.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.FieldOptions;
            fromPartial(object: any): _56.FieldOptions;
        };
        OneofOptions: {
            encode(message: _56.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.OneofOptions;
            fromPartial(object: any): _56.OneofOptions;
        };
        EnumOptions: {
            encode(message: _56.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.EnumOptions;
            fromPartial(object: any): _56.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _56.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.EnumValueOptions;
            fromPartial(object: any): _56.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _56.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ServiceOptions;
            fromPartial(object: any): _56.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _56.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MethodOptions;
            fromPartial(object: any): _56.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _56.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.UninterpretedOption;
            fromPartial(object: any): _56.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _56.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.UninterpretedOption_NamePart;
            fromPartial(object: any): _56.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _56.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.SourceCodeInfo;
            fromPartial(object: any): _56.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _56.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.SourceCodeInfo_Location;
            fromPartial(object: any): _56.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _56.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GeneratedCodeInfo;
            fromPartial(object: any): _56.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _56.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _56.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _55.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Any;
            fromPartial(object: any): _55.Any;
        };
    };
}
