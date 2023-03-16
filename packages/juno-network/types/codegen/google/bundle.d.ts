import * as _53 from "./protobuf/any";
import * as _54 from "./protobuf/descriptor";
import * as _55 from "./protobuf/duration";
import * as _56 from "./protobuf/empty";
import * as _57 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _57.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Timestamp;
            fromPartial(object: any): _57.Timestamp;
        };
        Empty: {
            encode(_: _56.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Empty;
            fromPartial(_: any): _56.Empty;
        };
        Duration: {
            encode(message: _55.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Duration;
            fromPartial(object: any): _55.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _54.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _54.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _54.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _54.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _54.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _54.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _54.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _54.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _54.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _54.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _54.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _54.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _54.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _54.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _54.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _54.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _54.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _54.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _54.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _54.FieldOptions_CType;
        FieldOptions_JSType: typeof _54.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _54.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _54.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _54.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _54.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileDescriptorSet;
            fromPartial(object: any): _54.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _54.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileDescriptorProto;
            fromPartial(object: any): _54.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _54.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto;
            fromPartial(object: any): _54.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _54.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _54.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _54.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DescriptorProto_ReservedRange;
            fromPartial(object: any): _54.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _54.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ExtensionRangeOptions;
            fromPartial(object: any): _54.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _54.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FieldDescriptorProto;
            fromPartial(object: any): _54.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _54.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.OneofDescriptorProto;
            fromPartial(object: any): _54.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _54.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumDescriptorProto;
            fromPartial(object: any): _54.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _54.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _54.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _54.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumValueDescriptorProto;
            fromPartial(object: any): _54.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _54.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ServiceDescriptorProto;
            fromPartial(object: any): _54.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _54.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MethodDescriptorProto;
            fromPartial(object: any): _54.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _54.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FileOptions;
            fromPartial(object: any): _54.FileOptions;
        };
        MessageOptions: {
            encode(message: _54.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MessageOptions;
            fromPartial(object: any): _54.MessageOptions;
        };
        FieldOptions: {
            encode(message: _54.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.FieldOptions;
            fromPartial(object: any): _54.FieldOptions;
        };
        OneofOptions: {
            encode(message: _54.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.OneofOptions;
            fromPartial(object: any): _54.OneofOptions;
        };
        EnumOptions: {
            encode(message: _54.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumOptions;
            fromPartial(object: any): _54.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _54.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EnumValueOptions;
            fromPartial(object: any): _54.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _54.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ServiceOptions;
            fromPartial(object: any): _54.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _54.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MethodOptions;
            fromPartial(object: any): _54.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _54.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.UninterpretedOption;
            fromPartial(object: any): _54.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _54.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.UninterpretedOption_NamePart;
            fromPartial(object: any): _54.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _54.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SourceCodeInfo;
            fromPartial(object: any): _54.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _54.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SourceCodeInfo_Location;
            fromPartial(object: any): _54.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _54.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GeneratedCodeInfo;
            fromPartial(object: any): _54.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _54.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _54.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _53.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Any;
            fromPartial(object: any): _53.Any;
        };
    };
}
