
# The Java® Virtual Machine Specification

      The Java® Virtual Machine Specification

              Java SE 8 Edition

                  Tim Lindholm
                  Frank Yellin
                  Gilad Bracha
                  Alex Buckley

                  2015-02-13

Java Language and Virtual Machine Specifications 文档主页：
https://docs.oracle.com/javase/specs/index.html

HTML -> Markdwon 文档转换脚本：

```js
/// <reference types="node" />
var TurndownService = require('turndown')

var turndownService = new TurndownService()
// var markdown = turndownService.turndown('<h1>Hello world!</h1>')
// process.stdout.write(markdown)

process.stdin.on("data", (it) => {
  // console.log('HTML data:' + it.length + it.toString());
  process.stdout.write(turndownService.turndown(it.toString()));
})
```

```sh
npm install marked turndown
# https://github.com/mixmark-io/turndown
# https://www.npmjs.com/package/marked
cat > list.md << EOF
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-0-front.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-0-preface8.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-1.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-3.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-7.html
https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-0-index.html
https://docs.oracle.com/javase/specs/jvms/se8/html/spec-license.html
EOF
urls=`cat list.md`
for url in $urls; do echo $url; done
for url in $urls; do 
  curl $url | node index.js >> /c/dl/java_se8_jvm_spec.md;
done
```

# Table of Contents

[Preface to the Java SE 8 Edition](jvms-0-preface8.html)

## 🍀 TOC1. Introduction

[1. Introduction](jvms-1.html)
[1.1. A Bit of History](jvms-1.html#jvms-1.1)
[1.2. The Java Virtual Machine](jvms-1.html#jvms-1.2)
[1.3. Organization of the Specification](jvms-1.html#jvms-1.3)
[1.4. Notation](jvms-1.html#jvms-1.4)
[1.5. Feedback](jvms-1.html#jvms-1.5)

## 🍀 TOC2. The Structure of the Java Virtual Machine

[2. The Structure of the Java Virtual Machine](jvms-2.html)
[2.1. The `class` File Format](jvms-2.html#jvms-2.1)
[2.2. Data Types](jvms-2.html#jvms-2.2)
[2.3. Primitive Types and Values](jvms-2.html#jvms-2.3)
[2.3.1. Integral Types and Values](jvms-2.html#jvms-2.3.1)
[2.3.2. Floating-Point Types, Value Sets, and Values](jvms-2.html#jvms-2.3.2)
[2.3.3. The `returnAddress` Type and Values](jvms-2.html#jvms-2.3.3)
[2.3.4. The `boolean` Type](jvms-2.html#jvms-2.3.4)
[2.4. Reference Types and Values](jvms-2.html#jvms-2.4)
[2.5. Run-Time Data Areas](jvms-2.html#jvms-2.5)
[2.5.1. The `pc` Register](jvms-2.html#jvms-2.5.1)
[2.5.2. Java Virtual Machine Stacks](jvms-2.html#jvms-2.5.2)
[2.5.3. Heap](jvms-2.html#jvms-2.5.3)
[2.5.4. Method Area](jvms-2.html#jvms-2.5.4)
[2.5.5. Run-Time Constant Pool](jvms-2.html#jvms-2.5.5)
[2.5.6. Native Method Stacks](jvms-2.html#jvms-2.5.6)
[2.6. Frames](jvms-2.html#jvms-2.6)
[2.6.1. Local Variables](jvms-2.html#jvms-2.6.1)
[2.6.2. Operand Stacks](jvms-2.html#jvms-2.6.2)
[2.6.3. Dynamic Linking](jvms-2.html#jvms-2.6.3)
[2.6.4. Normal Method Invocation Completion](jvms-2.html#jvms-2.6.4)
[2.6.5. Abrupt Method Invocation Completion](jvms-2.html#jvms-2.6.5)
[2.7. Representation of Objects](jvms-2.html#jvms-2.7)
[2.8. Floating-Point Arithmetic](jvms-2.html#jvms-2.8)
[2.8.1. Java Virtual Machine Floating-Point Arithmetic and IEEE 754](jvms-2.html#jvms-2.8.1)
[2.8.2. Floating-Point Modes](jvms-2.html#jvms-2.8.2)
[2.8.3. Value Set Conversion](jvms-2.html#jvms-2.8.3)
[2.9. Special Methods](jvms-2.html#jvms-2.9)
[2.10. Exceptions](jvms-2.html#jvms-2.10)
[2.11. Instruction Set Summary](jvms-2.html#jvms-2.11)
[2.11.1. Types and the Java Virtual Machine](jvms-2.html#jvms-2.11.1)
[2.11.2. Load and Store Instructions](jvms-2.html#jvms-2.11.2)
[2.11.3. Arithmetic Instructions](jvms-2.html#jvms-2.11.3)
[2.11.4. Type Conversion Instructions](jvms-2.html#jvms-2.11.4)
[2.11.5. Object Creation and Manipulation](jvms-2.html#jvms-2.11.5)
[2.11.6. Operand Stack Management Instructions](jvms-2.html#jvms-2.11.6)
[2.11.7. Control Transfer Instructions](jvms-2.html#jvms-2.11.7)
[2.11.8. Method Invocation and Return Instructions](jvms-2.html#jvms-2.11.8)
[2.11.9. Throwing Exceptions](jvms-2.html#jvms-2.11.9)
[2.11.10. Synchronization](jvms-2.html#jvms-2.11.10)
[2.12. Class Libraries](jvms-2.html#jvms-2.12)
[2.13. Public Design, Private Implementation](jvms-2.html#jvms-2.13)

## 🍀 TOC3. Compiling for the Java Virtual Machine

[3. Compiling for the Java Virtual Machine](jvms-3.html)
[3.1. Format of Examples](jvms-3.html#jvms-3.1)
[3.2. Use of Constants, Local Variables, and Control Constructs](jvms-3.html#jvms-3.2)
[3.3. Arithmetic](jvms-3.html#jvms-3.3)
[3.4. Accessing the Run-Time Constant Pool](jvms-3.html#jvms-3.4)
[3.5. More Control Examples](jvms-3.html#jvms-3.5)
[3.6. Receiving Arguments](jvms-3.html#jvms-3.6)
[3.7. Invoking Methods](jvms-3.html#jvms-3.7)
[3.8. Working with Class Instances](jvms-3.html#jvms-3.8)
[3.9. Arrays](jvms-3.html#jvms-3.9)
[3.10. Compiling Switches](jvms-3.html#jvms-3.10)
[3.11. Operations on the Operand Stack](jvms-3.html#jvms-3.11)
[3.12. Throwing and Handling Exceptions](jvms-3.html#jvms-3.12)
[3.13. Compiling `finally`](jvms-3.html#jvms-3.13)
[3.14. Synchronization](jvms-3.html#jvms-3.14)
[3.15. Annotations](jvms-3.html#jvms-3.15)

## 🍀 TOC4. The `class` File Format

[4. The `class` File Format](jvms-4.html)
[4.1. The `ClassFile` Structure](jvms-4.html#jvms-4.1)
[4.2. The Internal Form of Names](jvms-4.html#jvms-4.2)
[4.2.1. Binary Class and Interface Names](jvms-4.html#jvms-4.2.1)
[4.2.2. Unqualified Names](jvms-4.html#jvms-4.2.2)
[4.3. Descriptors](jvms-4.html#jvms-4.3)
[4.3.1. Grammar Notation](jvms-4.html#jvms-4.3.1)
[4.3.2. Field Descriptors](jvms-4.html#jvms-4.3.2)
[4.3.3. Method Descriptors](jvms-4.html#jvms-4.3.3)
[4.4. The Constant Pool](jvms-4.html#jvms-4.4)
[4.4.1. The `CONSTANT_Class_info` Structure](jvms-4.html#jvms-4.4.1)
[4.4.2. The `CONSTANT_Fieldref_info`, `CONSTANT_Methodref_info`, and `CONSTANT_InterfaceMethodref_info` Structures](jvms-4.html#jvms-4.4.2)
[4.4.3. The `CONSTANT_String_info` Structure](jvms-4.html#jvms-4.4.3)
[4.4.4. The `CONSTANT_Integer_info` and `CONSTANT_Float_info` Structures](jvms-4.html#jvms-4.4.4) 
[4.4.5. The `CONSTANT_Long_info` and `CONSTANT_Double_info` Structures](jvms-4.html#jvms-4.4.5)
[4.4.6. The `CONSTANT_NameAndType_info` Structure](jvms-4.html#jvms-4.4.6)
[4.4.7. The `CONSTANT_Utf8_info` Structure](jvms-4.html#jvms-4.4.7)
[4.4.8. The `CONSTANT_MethodHandle_info` Structure](jvms-4.html#jvms-4.4.8)
[4.4.9. The `CONSTANT_MethodType_info` Structure](jvms-4.html#jvms-4.4.9)
[4.4.10. The `CONSTANT_InvokeDynamic_info` Structure](jvms-4.html#jvms-4.4.10) 
[4.5. Fields](jvms-4.html#jvms-4.5)
[4.6. Methods](jvms-4.html#jvms-4.6)
[4.7. Attributes](jvms-4.html#jvms-4.7)
[4.7.1. Defining and Naming New Attributes](jvms-4.html#jvms-4.7.1)
[4.7.2. The `ConstantValue` Attribute](jvms-4.html#jvms-4.7.2)
[4.7.3. The `Code` Attribute](jvms-4.html#jvms-4.7.3)
[4.7.4. The `StackMapTable` Attribute](jvms-4.html#jvms-4.7.4)
[4.7.5. The `Exceptions` Attribute](jvms-4.html#jvms-4.7.5)
[4.7.6. The `InnerClasses` Attribute](jvms-4.html#jvms-4.7.6)
[4.7.7. The `EnclosingMethod` Attribute](jvms-4.html#jvms-4.7.7)
[4.7.8. The `Synthetic` Attribute](jvms-4.html#jvms-4.7.8)
[4.7.9. The `Signature` Attribute](jvms-4.html#jvms-4.7.9)
[4.7.9.1. Signatures](jvms-4.html#jvms-4.7.9.1)
[4.7.10. The `SourceFile` Attribute](jvms-4.html#jvms-4.7.10)
[4.7.11. The `SourceDebugExtension` Attribute](jvms-4.html#jvms-4.7.11)
[4.7.12. The `LineNumberTable` Attribute](jvms-4.html#jvms-4.7.12)
[4.7.13. The `LocalVariableTable` Attribute](jvms-4.html#jvms-4.7.13)
[4.7.14. The `LocalVariableTypeTable` Attribute](jvms-4.html#jvms-4.7.14)
[4.7.15. The `Deprecated` Attribute](jvms-4.html#jvms-4.7.15)
[4.7.16. The `RuntimeVisibleAnnotations` Attribute](jvms-4.html#jvms-4.7.16)
[4.7.16.1. The `element_value` structure](jvms-4.html#jvms-4.7.16.1)
[4.7.17. The `RuntimeInvisibleAnnotations` Attribute](jvms-4.html#jvms-4.7.17)
[4.7.18. The `RuntimeVisibleParameterAnnotations` Attribute](jvms-4.html#jvms-4.7.18)
[4.7.19. The `RuntimeInvisibleParameterAnnotations` Attribute](jvms-4.html#jvms-4.7.19)
[4.7.20. The `RuntimeVisibleTypeAnnotations` Attribute](jvms-4.html#jvms-4.7.20)
[4.7.20.1. The `target_info` union](jvms-4.html#jvms-4.7.20.1)
[4.7.20.2. The `type_path` structure](jvms-4.html#jvms-4.7.20.2)
[4.7.21. The `RuntimeInvisibleTypeAnnotations` Attribute](jvms-4.html#jvms-4.7.21)
[4.7.22. The `AnnotationDefault` Attribute](jvms-4.html#jvms-4.7.22)
[4.7.23. The `BootstrapMethods` Attribute](jvms-4.html#jvms-4.7.23)
[4.7.24. The `MethodParameters` Attribute](jvms-4.html#jvms-4.7.24)
[4.8. Format Checking](jvms-4.html#jvms-4.8)
[4.9. Constraints on Java Virtual Machine Code](jvms-4.html#jvms-4.9)
[4.9.1. Static Constraints](jvms-4.html#jvms-4.9.1)
[4.9.2. Structural Constraints](jvms-4.html#jvms-4.9.2)
[4.10. Verification of `class` Files](jvms-4.html#jvms-4.10)
[4.10.1. Verification by Type Checking](jvms-4.html#jvms-4.10.1)
[4.10.1.1. Accessors for Java Virtual Machine Artifacts](jvms-4.html#jvms-4.10.1.1)
[4.10.1.2. Verification Type System](jvms-4.html#jvms-4.10.1.2)
[4.10.1.3. Instruction Representation](jvms-4.html#jvms-4.10.1.3)
[4.10.1.4. Stack Map Frame Representation](jvms-4.html#jvms-4.10.1.4)
[4.10.1.5. Type Checking Abstract and Native Methods](jvms-4.html#jvms-4.10.1.5)
[4.10.1.6. Type Checking Methods with Code](jvms-4.html#jvms-4.10.1.6)
[4.10.1.7. Type Checking Load and Store Instructions](jvms-4.html#jvms-4.10.1.7)
[4.10.1.8. Type Checking for `protected` Members](jvms-4.html#jvms-4.10.1.8)
[4.10.1.9. Type Checking Instructions](jvms-4.html#jvms-4.10.1.9)
    [[*aaload*]](jvms-4.html#jvms-4.10.1.9.aaload)
    [[*aastore*]](jvms-4.html#jvms-4.10.1.9.aastore)
    [[*aconst_null*]](jvms-4.html#jvms-4.10.1.9.aconst_null)
    [[*aload*], [*aload_<n>*]](jvms-4.html#jvms-4.10.1.9.aload)
    [[*anewarray*]](jvms-4.html#jvms-4.10.1.9.anewarray)
    [[*areturn*]](jvms-4.html#jvms-4.10.1.9.areturn)
    [[*arraylength*]](jvms-4.html#jvms-4.10.1.9.arraylength)
    [[*astore*], [*astore_<n>*]](jvms-4.html#jvms-4.10.1.9.astore)
    [[*athrow*]](jvms-4.html#jvms-4.10.1.9.athrow)
    [[*baload*]](jvms-4.html#jvms-4.10.1.9.baload)
    [[*bastore*]](jvms-4.html#jvms-4.10.1.9.bastore)
    [[*bipush*]](jvms-4.html#jvms-4.10.1.9.bipush)
    [[*caload*]](jvms-4.html#jvms-4.10.1.9.caload)
    [[*castore*]](jvms-4.html#jvms-4.10.1.9.castore)
    [[*checkcast*]](jvms-4.html#jvms-4.10.1.9.checkcast)
    [[*d2f*], [*d2i*], [*d2l*]](jvms-4.html#jvms-4.10.1.9.d2f)
    [[*dadd*]](jvms-4.html#jvms-4.10.1.9.dadd)
    [[*daload*]](jvms-4.html#jvms-4.10.1.9.daload)
    [[*dastore*]](jvms-4.html#jvms-4.10.1.9.dastore)
    [[*dcmp<op>*]](jvms-4.html#jvms-4.10.1.9.dcmp_op)
    [[*dconst_<d>*]](jvms-4.html#jvms-4.10.1.9.dconst_d)
    [[*ddiv*]](jvms-4.html#jvms-4.10.1.9.ddiv)
    [[*dload*], [*dload_<n>*]](jvms-4.html#jvms-4.10.1.9.dload)
    [[*dmul*]](jvms-4.html#jvms-4.10.1.9.dmul)
    [[*dneg*]](jvms-4.html#jvms-4.10.1.9.dneg)
    [[*drem*]](jvms-4.html#jvms-4.10.1.9.drem)
    [[*dreturn*]](jvms-4.html#jvms-4.10.1.9.dreturn)
    [[*dstore*], [*dstore_<n>*]](jvms-4.html#jvms-4.10.1.9.dstore)
    [[*dsub*]](jvms-4.html#jvms-4.10.1.9.dsub)
    [[*dup*]](jvms-4.html#jvms-4.10.1.9.dup)
    [[*dup_x1*]](jvms-4.html#jvms-4.10.1.9.dup_x1)
    [[*dup_x2*]](jvms-4.html#jvms-4.10.1.9.dup_x2)
    [[*dup2*]](jvms-4.html#jvms-4.10.1.9.dup2)
    [[*dup2_x1*]](jvms-4.html#jvms-4.10.1.9.dup2_x1)
    [[*dup2_x2*]](jvms-4.html#jvms-4.10.1.9.dup2_x2)
    [[*f2d*], [*f2i*], [*f2l*]](jvms-4.html#jvms-4.10.1.9.f2d)
    [[*fadd*]](jvms-4.html#jvms-4.10.1.9.fadd)
    [[*faload*]](jvms-4.html#jvms-4.10.1.9.faload)
    [[*fastore*]](jvms-4.html#jvms-4.10.1.9.fastore)
    [[*fcmp<op>*]](jvms-4.html#jvms-4.10.1.9.fcmp_op)
    [[*fconst_<f>*]](jvms-4.html#jvms-4.10.1.9.fconst_f)
    [[*fdiv*]](jvms-4.html#jvms-4.10.1.9.fdiv)
    [[*fload*], [*fload_<n>*]](jvms-4.html#jvms-4.10.1.9.fload)
    [[*fmul*]](jvms-4.html#jvms-4.10.1.9.fmul)
    [[*fneg*]](jvms-4.html#jvms-4.10.1.9.fneg)
    [[*frem*]](jvms-4.html#jvms-4.10.1.9.frem)
    [[*freturn*]](jvms-4.html#jvms-4.10.1.9.freturn)
    [[*fstore*], [*fstore_<n>*]](jvms-4.html#jvms-4.10.1.9.fstore)
    [[*fsub*]](jvms-4.html#jvms-4.10.1.9.fsub)
    [[*getfield*]](jvms-4.html#jvms-4.10.1.9.getfield)
    [[*getstatic*]](jvms-4.html#jvms-4.10.1.9.getstatic)
    [[*goto*], [*goto_w*]](jvms-4.html#jvms-4.10.1.9.goto)
    [[*i2b*], [*i2c*], [*i2d*], [*i2f*], [*i2l*], [*i2s*]](jvms-4.html#jvms-4.10.1.9.i2b)
    [[*iadd*]](jvms-4.html#jvms-4.10.1.9.iadd)
    [[*iaload*]](jvms-4.html#jvms-4.10.1.9.iaload)
    [[*iand*]](jvms-4.html#jvms-4.10.1.9.iand)
    [[*iastore*]](jvms-4.html#jvms-4.10.1.9.iastore)
    [[*if_acmp<cond>*]](jvms-4.html#jvms-4.10.1.9.if_acmp_cond)
    [[*if_icmp<cond>*]](jvms-4.html#jvms-4.10.1.9.if_icmp_cond)
    [[*if<cond>*]](jvms-4.html#jvms-4.10.1.9.if_cond)
    [[*ifnonnull*]](jvms-4.html#jvms-4.10.1.9.ifnonnull)
    [[*ifnull*]](jvms-4.html#jvms-4.10.1.9.ifnull)
    [[*iinc*]](jvms-4.html#jvms-4.10.1.9.iinc)
    [[*iload*], [*iload_<n>*]](jvms-4.html#jvms-4.10.1.9.iload)
    [[*imul*]](jvms-4.html#jvms-4.10.1.9.imul)
    [[*ineg*]](jvms-4.html#jvms-4.10.1.9.ineg)
    [[*instanceof*]](jvms-4.html#jvms-4.10.1.9.instanceof)
    [[*invokedynamic*]](jvms-4.html#jvms-4.10.1.9.invokedynamic)
    [[*invokeinterface*]](jvms-4.html#jvms-4.10.1.9.invokeinterface)
    [[*invokespecial*]](jvms-4.html#jvms-4.10.1.9.invokespecial)
    [[*invokestatic*]](jvms-4.html#jvms-4.10.1.9.invokestatic)
    [[*invokevirtual*]](jvms-4.html#jvms-4.10.1.9.invokevirtual)
    [[*ior*]](jvms-4.html#jvms-4.10.1.9.ior)
    [[*irem*]](jvms-4.html#jvms-4.10.1.9.irem)
    [[*ireturn*]](jvms-4.html#jvms-4.10.1.9.ireturn)
    [[*ishl*], [*ishr*], [*iushr*]](jvms-4.html#jvms-4.10.1.9.ishl)
    [[*istore*], [*istore_<n>*]](jvms-4.html#jvms-4.10.1.9.istore)
    [[*isub*]](jvms-4.html#jvms-4.10.1.9.isub)
    [[*ixor*]](jvms-4.html#jvms-4.10.1.9.ixor)
    [[*l2d*], [*l2f*], [*l2i*]](jvms-4.html#jvms-4.10.1.9.l2d)
    [[*ladd*]](jvms-4.html#jvms-4.10.1.9.ladd)
    [[*laload*]](jvms-4.html#jvms-4.10.1.9.laload)
    [[*land*]](jvms-4.html#jvms-4.10.1.9.land)
    [[*lastore*]](jvms-4.html#jvms-4.10.1.9.lastore)
    [[*lcmp*]](jvms-4.html#jvms-4.10.1.9.lcmp)
    [[*lconst_<l>*]](jvms-4.html#jvms-4.10.1.9.lconst_l)
    [[*ldc*], [*ldc_w*], [*ldc2_w*]](jvms-4.html#jvms-4.10.1.9.ldc)
    [[*ldiv*]](jvms-4.html#jvms-4.10.1.9.ldiv)
    [[*lload*], [*lload_<n>*]](jvms-4.html#jvms-4.10.1.9.lload)
    [[*lmul*]](jvms-4.html#jvms-4.10.1.9.lmul)
    [[*lneg*]](jvms-4.html#jvms-4.10.1.9.lneg)
    [[*lookupswitch*]](jvms-4.html#jvms-4.10.1.9.lookupswitch)
    [[*lor*]](jvms-4.html#jvms-4.10.1.9.lor)
    [[*lrem*]](jvms-4.html#jvms-4.10.1.9.lrem)
    [[*lreturn*]](jvms-4.html#jvms-4.10.1.9.lreturn)
    [[*lshl*], [*lshr*], [*lushr*]](jvms-4.html#jvms-4.10.1.9.lshl)
    [[*lstore*], [*lstore_<n>*]](jvms-4.html#jvms-4.10.1.9.lstore)
    [[*lsub*]](jvms-4.html#jvms-4.10.1.9.lsub)
    [[*lxor*]](jvms-4.html#jvms-4.10.1.9.lxor)
    [[*monitorenter*]](jvms-4.html#jvms-4.10.1.9.monitorenter)
    [[*monitorexit*]](jvms-4.html#jvms-4.10.1.9.monitorexit)
    [[*multianewarray*]](jvms-4.html#jvms-4.10.1.9.multianewarray)
    [[*new*]](jvms-4.html#jvms-4.10.1.9.new)
    [[*newarray*]](jvms-4.html#jvms-4.10.1.9.newarray)
    [[*nop*]](jvms-4.html#jvms-4.10.1.9.nop)
    [[*pop*], [*pop2*]](jvms-4.html#jvms-4.10.1.9.pop)
    [[*putfield*]](jvms-4.html#jvms-4.10.1.9.putfield)
    [[*putstatic*]](jvms-4.html#jvms-4.10.1.9.putstatic)
    [[*return*]](jvms-4.html#jvms-4.10.1.9.return)
    [[*saload*]](jvms-4.html#jvms-4.10.1.9.saload)
    [[*sastore*]](jvms-4.html#jvms-4.10.1.9.sastore)
    [[*sipush*]](jvms-4.html#jvms-4.10.1.9.sipush)
    [[*swap*]](jvms-4.html#jvms-4.10.1.9.swap)
    [[*tableswitch*]](jvms-4.html#jvms-4.10.1.9.tableswitch)
    [[*wide*]](jvms-4.html#jvms-4.10.1.9.wide)
[4.10.2. Verification by Type Inference](jvms-4.html#jvms-4.10.2)
[4.10.2.1. The Process of Verification by Type Inference](jvms-4.html#jvms-4.10.2.1)
[4.10.2.2. The Bytecode Verifier](jvms-4.html#jvms-4.10.2.2)
[4.10.2.3. Values of Types `long` and `double`](jvms-4.html#jvms-4.10.2.3)
[4.10.2.4. Instance Initialization Methods and Newly Created Objects](jvms-4.html#jvms-4.10.2.4)
[4.10.2.5. Exceptions and `finally`](jvms-4.html#jvms-4.10.2.5)
[4.11. Limitations of the Java Virtual Machine](jvms-4.html#jvms-4.11)

## 🍀 TOC5. Loading, Linking, and Initializing

[5. Loading, Linking, and Initializing](jvms-5.html)
[5.1. The Run-Time Constant Pool](jvms-5.html#jvms-5.1)
[5.2. Java Virtual Machine Startup](jvms-5.html#jvms-5.2)
[5.3. Creation and Loading](jvms-5.html#jvms-5.3)
[5.3.1. Loading Using the Bootstrap Class Loader](jvms-5.html#jvms-5.3.1)
[5.3.2. Loading Using a User-defined Class Loader](jvms-5.html#jvms-5.3.2)
[5.3.3. Creating Array Classes](jvms-5.html#jvms-5.3.3)
[5.3.4. Loading Constraints](jvms-5.html#jvms-5.3.4)
[5.3.5. Deriving a Class from a `class` File Representation](jvms-5.html#jvms-5.3.5)
[5.4. Linking](jvms-5.html#jvms-5.4)
[5.4.1. Verification](jvms-5.html#jvms-5.4.1)
[5.4.2. Preparation](jvms-5.html#jvms-5.4.2)
[5.4.3. Resolution](jvms-5.html#jvms-5.4.3)
[5.4.3.1. Class and Interface Resolution](jvms-5.html#jvms-5.4.3.1)
[5.4.3.2. Field Resolution](jvms-5.html#jvms-5.4.3.2)
[5.4.3.3. Method Resolution](jvms-5.html#jvms-5.4.3.3)
[5.4.3.4. Interface Method Resolution](jvms-5.html#jvms-5.4.3.4)
[5.4.3.5. Method Type and Method Handle Resolution](jvms-5.html#jvms-5.4.3.5)
[5.4.3.6. Call Site Specifier Resolution](jvms-5.html#jvms-5.4.3.6)
[5.4.4. Access Control](jvms-5.html#jvms-5.4.4)
[5.4.5. Overriding](jvms-5.html#jvms-5.4.5)
[5.5. Initialization](jvms-5.html#jvms-5.5)
[5.6. Binding Native Method Implementations](jvms-5.html#jvms-5.6)
[5.7. Java Virtual Machine Exit](jvms-5.html#jvms-5.7)

## 🍀 TOC6. The Java Virtual Machine Instruction Set

[6. The Java Virtual Machine Instruction Set](jvms-6.html)
[6.1. Assumptions: The Meaning of "Must"](jvms-6.html#jvms-6.1)
[6.2. Reserved Opcodes](jvms-6.html#jvms-6.2)
[6.3. Virtual Machine Errors](jvms-6.html#jvms-6.3)
[6.4. Format of Instruction Descriptions](jvms-6.html#jvms-6.4)
    [mnemonic](jvms-6.html#jvms-6.4-mnemonic)
[6.5. Instructions](jvms-6.html#jvms-6.5)
    [[*aaload*]](jvms-6.html#jvms-6.5.aaload)
    [[*aastore*]](jvms-6.html#jvms-6.5.aastore)
    [[*aconst_null*]](jvms-6.html#jvms-6.5.aconst_null)
    [[*aload*]](jvms-6.html#jvms-6.5.aload)
    [[*aload_<n>*]](jvms-6.html#jvms-6.5.aload_n)
    [[*anewarray*]](jvms-6.html#jvms-6.5.anewarray)
    [[*areturn*]](jvms-6.html#jvms-6.5.areturn)
    [[*arraylength*]](jvms-6.html#jvms-6.5.arraylength)
    [[*astore*]](jvms-6.html#jvms-6.5.astore)
    [[*astore_<n>*]](jvms-6.html#jvms-6.5.astore_n)
    [[*athrow*]](jvms-6.html#jvms-6.5.athrow)
    [[*baload*]](jvms-6.html#jvms-6.5.baload)
    [[*bastore*]](jvms-6.html#jvms-6.5.bastore)
    [[*bipush*]](jvms-6.html#jvms-6.5.bipush)
    [[*caload*]](jvms-6.html#jvms-6.5.caload)
    [[*castore*]](jvms-6.html#jvms-6.5.castore)
    [[*checkcast*]](jvms-6.html#jvms-6.5.checkcast)
    [[*d2f*]](jvms-6.html#jvms-6.5.d2f)
    [[*d2i*]](jvms-6.html#jvms-6.5.d2i)
    [[*d2l*]](jvms-6.html#jvms-6.5.d2l)
    [[*dadd*]](jvms-6.html#jvms-6.5.dadd)
    [[*daload*]](jvms-6.html#jvms-6.5.daload)
    [[*dastore*]](jvms-6.html#jvms-6.5.dastore)
    [[*dcmp<op>*]](jvms-6.html#jvms-6.5.dcmp_op)
    [[*dconst_<d>*]](jvms-6.html#jvms-6.5.dconst_d)
    [[*ddiv*]](jvms-6.html#jvms-6.5.ddiv)
    [[*dload*]](jvms-6.html#jvms-6.5.dload)
    [[*dload_<n>*]](jvms-6.html#jvms-6.5.dload_n)
    [[*dmul*]](jvms-6.html#jvms-6.5.dmul)
    [[*dneg*]](jvms-6.html#jvms-6.5.dneg)
    [[*drem*]](jvms-6.html#jvms-6.5.drem)
    [[*dreturn*]](jvms-6.html#jvms-6.5.dreturn)
    [[*dstore*]](jvms-6.html#jvms-6.5.dstore)
    [[*dstore_<n>*]](jvms-6.html#jvms-6.5.dstore_n)
    [[*dsub*]](jvms-6.html#jvms-6.5.dsub)
    [[*dup*]](jvms-6.html#jvms-6.5.dup)
    [[*dup_x1*]](jvms-6.html#jvms-6.5.dup_x1)
    [[*dup_x2*]](jvms-6.html#jvms-6.5.dup_x2)
    [[*dup2*]](jvms-6.html#jvms-6.5.dup2)
    [[*dup2_x1*]](jvms-6.html#jvms-6.5.dup2_x1)
    [[*dup2_x2*]](jvms-6.html#jvms-6.5.dup2_x2)
    [[*f2d*]](jvms-6.html#jvms-6.5.f2d)
    [[*f2i*]](jvms-6.html#jvms-6.5.f2i)
    [[*f2l*]](jvms-6.html#jvms-6.5.f2l)
    [[*fadd*]](jvms-6.html#jvms-6.5.fadd)
    [[*faload*]](jvms-6.html#jvms-6.5.faload)
    [[*fastore*]](jvms-6.html#jvms-6.5.fastore)
    [[*fcmp<op>*]](jvms-6.html#jvms-6.5.fcmp_op)
    [[*fconst_<f>*]](jvms-6.html#jvms-6.5.fconst_f)
    [[*fdiv*]](jvms-6.html#jvms-6.5.fdiv)
    [[*fload*]](jvms-6.html#jvms-6.5.fload)
    [[*fload_<n>*]](jvms-6.html#jvms-6.5.fload_n)
    [[*fmul*]](jvms-6.html#jvms-6.5.fmul)
    [[*fneg*]](jvms-6.html#jvms-6.5.fneg)
    [[*frem*]](jvms-6.html#jvms-6.5.frem)
    [[*freturn*]](jvms-6.html#jvms-6.5.freturn)
    [[*fstore*]](jvms-6.html#jvms-6.5.fstore)
    [[*fstore_<n>*]](jvms-6.html#jvms-6.5.fstore_n)
    [[*fsub*]](jvms-6.html#jvms-6.5.fsub)
    [[*getfield*]](jvms-6.html#jvms-6.5.getfield)
    [[*getstatic*]](jvms-6.html#jvms-6.5.getstatic)
    [[*goto*]](jvms-6.html#jvms-6.5.goto)
    [[*goto_w*]](jvms-6.html#jvms-6.5.goto_w)
    [[*i2b*]](jvms-6.html#jvms-6.5.i2b)
    [[*i2c*]](jvms-6.html#jvms-6.5.i2c)
    [[*i2d*]](jvms-6.html#jvms-6.5.i2d)
    [[*i2f*]](jvms-6.html#jvms-6.5.i2f)
    [[*i2l*]](jvms-6.html#jvms-6.5.i2l)
    [[*i2s*]](jvms-6.html#jvms-6.5.i2s)
    [[*iadd*]](jvms-6.html#jvms-6.5.iadd)
    [[*iaload*]](jvms-6.html#jvms-6.5.iaload)
    [[*iand*]](jvms-6.html#jvms-6.5.iand)
    [[*iastore*]](jvms-6.html#jvms-6.5.iastore)
    [[*iconst_<i>*]](jvms-6.html#jvms-6.5.iconst_i)
    [[*idiv*]](jvms-6.html#jvms-6.5.idiv)
    [[*if_acmp<cond>*]](jvms-6.html#jvms-6.5.if_acmp_cond)
    [[*if_icmp<cond>*]](jvms-6.html#jvms-6.5.if_icmp_cond)
    [[*if<cond>*]](jvms-6.html#jvms-6.5.if_cond)
    [[*ifnonnull*]](jvms-6.html#jvms-6.5.ifnonnull)
    [[*ifnull*]](jvms-6.html#jvms-6.5.ifnull)
    [[*iinc*]](jvms-6.html#jvms-6.5.iinc)
    [[*iload*]](jvms-6.html#jvms-6.5.iload)
    [[*iload_<n>*]](jvms-6.html#jvms-6.5.iload_n)
    [[*imul*]](jvms-6.html#jvms-6.5.imul)
    [[*ineg*]](jvms-6.html#jvms-6.5.ineg)
    [[*instanceof*]](jvms-6.html#jvms-6.5.instanceof)
    [[*invokedynamic*]](jvms-6.html#jvms-6.5.invokedynamic)
    [[*invokeinterface*]](jvms-6.html#jvms-6.5.invokeinterface)
    [[*invokespecial*]](jvms-6.html#jvms-6.5.invokespecial)
    [[*invokestatic*]](jvms-6.html#jvms-6.5.invokestatic)
    [[*invokevirtual*]](jvms-6.html#jvms-6.5.invokevirtual)
    [[*ior*]](jvms-6.html#jvms-6.5.ior)
    [[*irem*]](jvms-6.html#jvms-6.5.irem)
    [[*ireturn*]](jvms-6.html#jvms-6.5.ireturn)
    [[*ishl*]](jvms-6.html#jvms-6.5.ishl)
    [[*ishr*]](jvms-6.html#jvms-6.5.ishr)
    [[*istore*]](jvms-6.html#jvms-6.5.istore)
    [[*istore_<n>*]](jvms-6.html#jvms-6.5.istore_n)
    [[*isub*]](jvms-6.html#jvms-6.5.isub)
    [[*iushr*]](jvms-6.html#jvms-6.5.iushr)
    [[*ixor*]](jvms-6.html#jvms-6.5.ixor)
    [[*jsr*]](jvms-6.html#jvms-6.5.jsr)
    [[*jsr_w*]](jvms-6.html#jvms-6.5.jsr_w)
    [[*l2d*]](jvms-6.html#jvms-6.5.l2d)
    [[*l2f*]](jvms-6.html#jvms-6.5.l2f)
    [[*l2i*]](jvms-6.html#jvms-6.5.l2i)
    [[*ladd*]](jvms-6.html#jvms-6.5.ladd)
    [[*laload*]](jvms-6.html#jvms-6.5.laload)
    [[*land*]](jvms-6.html#jvms-6.5.land)
    [[*lastore*]](jvms-6.html#jvms-6.5.lastore)
    [[*lcmp*]](jvms-6.html#jvms-6.5.lcmp)
    [[*lconst_<l>*]](jvms-6.html#jvms-6.5.lconst_l)
    [[*ldc*]](jvms-6.html#jvms-6.5.ldc)
    [[*ldc_w*]](jvms-6.html#jvms-6.5.ldc_w)
    [[*ldc2_w*]](jvms-6.html#jvms-6.5.ldc2_w)
    [[*ldiv*]](jvms-6.html#jvms-6.5.ldiv)
    [[*lload*]](jvms-6.html#jvms-6.5.lload)
    [[*lload_<n>*]](jvms-6.html#jvms-6.5.lload_n)
    [[*lmul*]](jvms-6.html#jvms-6.5.lmul)
    [[*lneg*]](jvms-6.html#jvms-6.5.lneg)
    [[*lookupswitch*]](jvms-6.html#jvms-6.5.lookupswitch)
    [[*lor*]](jvms-6.html#jvms-6.5.lor)
    [[*lrem*]](jvms-6.html#jvms-6.5.lrem)
    [[*lreturn*]](jvms-6.html#jvms-6.5.lreturn)
    [[*lshl*]](jvms-6.html#jvms-6.5.lshl)
    [[*lshr*]](jvms-6.html#jvms-6.5.lshr)
    [[*lstore*]](jvms-6.html#jvms-6.5.lstore)
    [[*lstore_<n>*]](jvms-6.html#jvms-6.5.lstore_n)
    [[*lsub*]](jvms-6.html#jvms-6.5.lsub)
    [[*lushr*]](jvms-6.html#jvms-6.5.lushr)
    [[*lxor*]](jvms-6.html#jvms-6.5.lxor)
    [[*monitorenter*]](jvms-6.html#jvms-6.5.monitorenter)
    [[*monitorexit*]](jvms-6.html#jvms-6.5.monitorexit)
    [[*multianewarray*]](jvms-6.html#jvms-6.5.multianewarray)
    [[*new*]](jvms-6.html#jvms-6.5.new)
    [[*newarray*]](jvms-6.html#jvms-6.5.newarray)
    [[*nop*]](jvms-6.html#jvms-6.5.nop)
    [[*pop*]](jvms-6.html#jvms-6.5.pop)
    [[*pop2*]](jvms-6.html#jvms-6.5.pop2)
    [[*putfield*]](jvms-6.html#jvms-6.5.putfield)
    [[*putstatic*]](jvms-6.html#jvms-6.5.putstatic)
    [[*ret*]](jvms-6.html#jvms-6.5.ret)
    [[*return*]](jvms-6.html#jvms-6.5.return)
    [[*saload*]](jvms-6.html#jvms-6.5.saload)
    [[*sastore*]](jvms-6.html#jvms-6.5.sastore)
    [[*sipush*]](jvms-6.html#jvms-6.5.sipush)
    [[*swap*]](jvms-6.html#jvms-6.5.swap)
    [[*tableswitch*]](jvms-6.html#jvms-6.5.tableswitch)
    [[*wide*]](jvms-6.html#jvms-6.5.wide)

## 🍀 TOC7. Opcode Mnemonics by Opcode

[7. Opcode Mnemonics by Opcode](jvms-7.html)
[Index](jvms-0-index.html)
[A. Limited License Grant](spec-license.html)

☘ Legal Notice
-----------

Specification: JSR-337 Java® SE 8 Release Contents ("Specification")  
Version: 8  
Status: Maintenance Release  
Release: March 2015  
  
Copyright © 1997, 2015, Oracle America, Inc. and/or its affiliates.  
500 Oracle Parkway, Redwood City, California 94065, U.S.A.  
All rights reserved.  

Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.

The Specification provided herein is provided to you only under the Limited License Grant included herein as Appendix A. Please see [Appendix A, _Limited License Grant_](spec-license.html "Appendix A. Limited License Grant").

☘ Preface to the Java SE 8 Edition
--------------------------------

### Alex Buckley

The Java SE 8 Edition of _The Java® Virtual Machine Specification_ incorporates all the changes that have been made to the Java Virtual Machine since the Java SE 7 Edition in 2011. In addition, numerous corrections and clarifications have been made to align with popular implementations of the Java Virtual Machine.

This Edition continues the tradition of specifying the _abstract_ Java Virtual Machine, serving as documentation for a concrete implementation only as a blueprint documents a house. An implementation of the Java Virtual Machine must embody this specification, but is constrained by it only where absolutely necessary.

Notable changes to the Java programming language in Java SE 8 have brought corresponding changes to the Java Virtual Machine. To maximize binary compatibility, it has been desirable to specify default methods directly in the Java Virtual Machine, rather than relying on compiler magic that might not be portable across vendors or product releases, and is certainly not applicable to pre-existing `class` files. In the context of JSR 335, _Lambda Expressions for the Java Programming Language_, Dan Smith at Oracle consulted with implementers to determine how best to integrate default methods into the constant pool and method structures, the method and interface method resolution algorithms, and the bytecode instruction set. JSR 335 also introduced `private` and `static` methods in interfaces at the `class` file level; they too have been carefully integrated with interface method resolution.

A theme of Java SE 8 is co-evolution of the Java SE platform libraries with the Java Virtual Machine. A small but useful example is support for method parameter names at run time: storing such names in the `class` file structure goes hand in hand with offering a standard API to retrieve them (`java.lang.reflect.Parameter`). This illustrates an interesting development in the `class` file structure over the years: the First Edition of this specification defined six attributes, of which three were deemed critical to the Java Virtual Machine, while this Java SE 8 Edition defines 23 attributes, of which five are deemed critical to the Java Virtual Machine; that is to say, attributes now exist primarily to support libraries and tools rather than the Java Virtual Machine itself. To help readers understand the `class` file structure, this specification more clearly documents the role of each attribute and the constraints placed upon it.

Many colleagues in the Java Platform Group at Oracle have provided valuable support to this specification: Mandy Chung, Joe Darcy, Joel Borggrén-Franck, Staffan Friberg, Yuri Gaevsky, Jon Gibbons, Jeannette Hung, Eric McCorkle, Matherey Nunez, Mark Reinhold, John Rose, Georges Saab, Steve Sides, Bernard Traversat, Michel Trudeau, and Mikael Vidstedt. Particular thanks to Dan Heidinga (IBM), Karen Kinnear, Keith McGuigan, and Harold Seigel for their ironclad commitment to compatibility and security in popular Java Virtual Machine implementations.

📜 Chapter 1. Introduction
-----------------------

**Table of Contents**
[1.1. A Bit of History](jvms-1.html#jvms-1.1)
[1.2. The Java Virtual Machine](jvms-1.html#jvms-1.2)
[1.3. Organization of the Specification](jvms-1.html#jvms-1.3)
[1.4. Notation](jvms-1.html#jvms-1.4)
[1.5. Feedback](jvms-1.html#jvms-1.5)

1.1. A Bit of History
---------------------

The Java® programming language is a general-purpose, concurrent, object-oriented language. Its syntax is similar to C and C++, but it omits many of the features that make C and C++ complex, confusing, and unsafe. The Java platform was initially developed to address the problems of building software for networked consumer devices. It was designed to support multiple host architectures and to allow secure delivery of software components. To meet these requirements, compiled code had to survive transport across networks, operate on any client, and assure the client that it was safe to run.

The popularization of the World Wide Web made these attributes much more interesting. Web browsers enabled millions of people to surf the Net and access media-rich content in simple ways. At last there was a medium where what you saw and heard was essentially the same regardless of the machine you were using and whether it was connected to a fast network or a slow modem.

Web enthusiasts soon discovered that the content supported by the Web's HTML document format was too limited. HTML extensions, such as forms, only highlighted those limitations, while making it clear that no browser could include all the features users wanted. Extensibility was the answer.

The HotJava browser first showcased the interesting properties of the Java programming language and platform by making it possible to embed programs inside HTML pages. Programs are transparently downloaded into the browser along with the HTML pages in which they appear. Before being accepted by the browser, programs are carefully checked to make sure they are safe. Like HTML pages, compiled programs are network- and host-independent. The programs behave the same way regardless of where they come from or what kind of machine they are being loaded into and run on.

A Web browser incorporating the Java platform is no longer limited to a predetermined set of capabilities. Visitors to Web pages incorporating dynamic content can be assured that their machines cannot be damaged by that content. Programmers can write a program once, and it will run on any machine supplying a Java run-time environment.

1.2. The Java Virtual Machine
-----------------------------

The Java Virtual Machine is the cornerstone of the Java platform. It is the component of the technology responsible for its hardware- and operating system-independence, the small size of its compiled code, and its ability to protect users from malicious programs.

The Java Virtual Machine is an abstract computing machine. Like a real computing machine, it has an instruction set and manipulates various memory areas at run time. It is reasonably common to implement a programming language using a virtual machine; the best-known virtual machine may be the P-Code machine of UCSD Pascal.

The first prototype implementation of the Java Virtual Machine, done at Sun Microsystems, Inc., emulated the Java Virtual Machine instruction set in software hosted by a handheld device that resembled a contemporary Personal Digital Assistant (PDA). Oracle's current implementations emulate the Java Virtual Machine on mobile, desktop and server devices, but the Java Virtual Machine does not assume any particular implementation technology, host hardware, or host operating system. It is not inherently interpreted, but can just as well be implemented by compiling its instruction set to that of a silicon CPU. It may also be implemented in microcode or directly in silicon.

The Java Virtual Machine knows nothing of the Java programming language, only of a particular binary format, the `class` file format. A `class` file contains Java Virtual Machine instructions (or _bytecodes_) and a symbol table, as well as other ancillary information.

For the sake of security, the Java Virtual Machine imposes strong syntactic and structural constraints on the code in a `class` file. However, any language with functionality that can be expressed in terms of a valid `class` file can be hosted by the Java Virtual Machine. Attracted by a generally available, machine-independent platform, implementors of other languages can turn to the Java Virtual Machine as a delivery vehicle for their languages.

The Java Virtual Machine specified here is compatible with the Java SE 8 platform, and supports the Java programming language specified in _The Java Language Specification, Java SE 8 Edition_.

1.3. Organization of the Specification
--------------------------------------

Chapter 2 gives an overview of the Java Virtual Machine architecture.

Chapter 3 introduces compilation of code written in the Java programming language into the instruction set of the Java Virtual Machine.

Chapter 4 specifies the `class` file format, the hardware- and operating system-independent binary format used to represent compiled classes and interfaces.

Chapter 5 specifies the start-up of the Java Virtual Machine and the loading, linking, and initialization of classes and interfaces.

Chapter 6 specifies the instruction set of the Java Virtual Machine, presenting the instructions in alphabetical order of opcode mnemonics.

Chapter 7 gives a table of Java Virtual Machine opcode mnemonics indexed by opcode value.

In the Second Edition of _The Java® Virtual Machine Specification_, Chapter 2 gave an overview of the Java programming language that was intended to support the specification of the Java Virtual Machine but was not itself a part of the specification. In _The Java Virtual Machine Specification, Java SE 8 Edition_, the reader is referred to _The Java Language Specification, Java SE 8 Edition_ for information about the Java programming language. References of the form: (JLS §x.y) indicate where this is necessary.

In the Second Edition of _The Java® Virtual Machine Specification_, Chapter 8 detailed the low-level actions that explained the interaction of Java Virtual Machine threads with a shared main memory. In _The Java Virtual Machine Specification, Java SE 8 Edition_, the reader is referred to Chapter 17 of _The Java Language Specification, Java SE 8 Edition_ for information about threads and locks. Chapter 17 reflects _The Java Memory Model and Thread Specification_ produced by the JSR 133 Expert Group.

1.4. Notation
-------------

Throughout this specification we refer to classes and interfaces drawn from the Java SE platform API. Whenever we refer to a class or interface (other than those declared in an example) using a single identifier _N_, the intended reference is to the class or interface named _N_ in the package `java.lang`. We use the fully qualified name for classes or interfaces from packages other than `java.lang`.

Whenever we refer to a class or interface that is declared in the package `java` or any of its subpackages, the intended reference is to that class or interface as loaded by the bootstrap class loader ([§5.3.1](jvms-5.html#jvms-5.3.1 "5.3.1. Loading Using the Bootstrap Class Loader")).

Whenever we refer to a subpackage of a package named `java`, the intended reference is to that subpackage as determined by the bootstrap class loader.

The use of fonts in this specification is as follows:

*   A `fixed width` font is used for Java Virtual Machine data types, exceptions, errors, `class` file structures, Prolog code, and Java code fragments.
    
*   _Italic_ is used for Java Virtual Machine "assembly language", its opcodes and operands, as well as items in the Java Virtual Machine's run-time data areas. It is also used to introduce new terms and simply for emphasis.
    

Non-normative information, designed to clarify the specification, is given in smaller, indented text.

This is non-normative information. It provides intuition, rationale, advice, examples, etc.

1.5. Feedback
-------------

Readers are invited to report technical errors and ambiguities in _The Java® Virtual Machine Specification_ to `jls-jvms-spec-comments@openjdk.java.net`.

Questions concerning the generation and manipulation of `class` files by `javac` (the reference compiler for the Java programming language) may be sent to `compiler-dev@openjdk.java.net`.

 📜 Chapter 2. The Structure of the Java Virtual Machine
----------------------------------------------------

**Table of Contents**

[2.1. The `class` File Format](jvms-2.html#jvms-2.1)
[2.2. Data Types](jvms-2.html#jvms-2.2)
[2.3. Primitive Types and Values](jvms-2.html#jvms-2.3)
[2.3.1. Integral Types and Values](jvms-2.html#jvms-2.3.1)
[2.3.2. Floating-Point Types, Value Sets, and Values](jvms-2.html#jvms-2.3.2)
[2.3.3. The `returnAddress` Type and Values](jvms-2.html#jvms-2.3.3)
[2.3.4. The `boolean` Type](jvms-2.html#jvms-2.3.4)
[2.4. Reference Types and Values](jvms-2.html#jvms-2.4)
[2.5. Run-Time Data Areas](jvms-2.html#jvms-2.5)
[2.5.1. The `pc` Register](jvms-2.html#jvms-2.5.1)
[2.5.2. Java Virtual Machine Stacks](jvms-2.html#jvms-2.5.2)
[2.5.3. Heap](jvms-2.html#jvms-2.5.3)
[2.5.4. Method Area](jvms-2.html#jvms-2.5.4)
[2.5.5. Run-Time Constant Pool](jvms-2.html#jvms-2.5.5)
[2.5.6. Native Method Stacks](jvms-2.html#jvms-2.5.6)
[2.6. Frames](jvms-2.html#jvms-2.6)
[2.6.1. Local Variables](jvms-2.html#jvms-2.6.1)
[2.6.2. Operand Stacks](jvms-2.html#jvms-2.6.2)
[2.6.3. Dynamic Linking](jvms-2.html#jvms-2.6.3)
[2.6.4. Normal Method Invocation Completion](jvms-2.html#jvms-2.6.4)
[2.6.5. Abrupt Method Invocation Completion](jvms-2.html#jvms-2.6.5)
[2.7. Representation of Objects](jvms-2.html#jvms-2.7)
[2.8. Floating-Point Arithmetic](jvms-2.html#jvms-2.8)
[2.8.1. Java Virtual Machine Floating-Point Arithmetic and IEEE 754](jvms-2.html#jvms-2.8.1)
[2.8.2. Floating-Point Modes](jvms-2.html#jvms-2.8.2)
[2.8.3. Value Set Conversion](jvms-2.html#jvms-2.8.3)
[2.9. Special Methods](jvms-2.html#jvms-2.9)
[2.10. Exceptions](jvms-2.html#jvms-2.10)
[2.11. Instruction Set Summary](jvms-2.html#jvms-2.11)
[2.11.1. Types and the Java Virtual Machine](jvms-2.html#jvms-2.11.1)
[2.11.2. Load and Store Instructions](jvms-2.html#jvms-2.11.2)
[2.11.3. Arithmetic Instructions](jvms-2.html#jvms-2.11.3)
[2.11.4. Type Conversion Instructions](jvms-2.html#jvms-2.11.4)
[2.11.5. Object Creation and Manipulation](jvms-2.html#jvms-2.11.5)
[2.11.6. Operand Stack Management Instructions](jvms-2.html#jvms-2.11.6)
[2.11.7. Control Transfer Instructions](jvms-2.html#jvms-2.11.7)
[2.11.8. Method Invocation and Return Instructions](jvms-2.html#jvms-2.11.8)
[2.11.9. Throwing Exceptions](jvms-2.html#jvms-2.11.9)
[2.11.10. Synchronization](jvms-2.html#jvms-2.11.10)
[2.12. Class Libraries](jvms-2.html#jvms-2.12)
[2.13. Public Design, Private Implementation](jvms-2.html#jvms-2.13)

This document specifies an abstract machine. It does not describe any particular implementation of the Java Virtual Machine.

To implement the Java Virtual Machine correctly, you need only be able to read the `class` file format and correctly perform the operations specified therein. Implementation details that are not part of the Java Virtual Machine's specification would unnecessarily constrain the creativity of implementors. For example, the memory layout of run-time data areas, the garbage-collection algorithm used, and any internal optimization of the Java Virtual Machine instructions (for example, translating them into machine code) are left to the discretion of the implementor.

All references to Unicode in this specification are given with respect to _The Unicode Standard, Version 6.0.0_, available at `http://www.unicode.org/`.

2.1. The `class` File Format
----------------------------

Compiled code to be executed by the Java Virtual Machine is represented using a hardware- and operating system-independent binary format, typically (but not necessarily) stored in a file, known as the `class` file format. The `class` file format precisely defines the representation of a class or interface, including details such as byte ordering that might be taken for granted in a platform-specific object file format.

Chapter 4, "The `class` File Format", covers the `class` file format in detail.

2.2. Data Types
---------------

Like the Java programming language, the Java Virtual Machine operates on two kinds of types: _primitive types_ and _reference types_. There are, correspondingly, two kinds of values that can be stored in variables, passed as arguments, returned by methods, and operated upon: _primitive values_ and _reference values_.

The Java Virtual Machine expects that nearly all type checking is done prior to run time, typically by a compiler, and does not have to be done by the Java Virtual Machine itself. Values of primitive types need not be tagged or otherwise be inspectable to determine their types at run time, or to be distinguished from values of reference types. Instead, the instruction set of the Java Virtual Machine distinguishes its operand types using instructions intended to operate on values of specific types. For instance, _iadd_, _ladd_, _fadd_, and _dadd_ are all Java Virtual Machine instructions that add two numeric values and produce numeric results, but each is specialized for its operand type: `int`, `long`, `float`, and `double`, respectively. For a summary of type support in the Java Virtual Machine instruction set, see [§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine").

The Java Virtual Machine contains explicit support for objects. An object is either a dynamically allocated class instance or an array. A reference to an object is considered to have Java Virtual Machine type `reference`. Values of type `reference` can be thought of as pointers to objects. More than one reference to an object may exist. Objects are always operated on, passed, and tested via values of type `reference`.

2.3. Primitive Types and Values
-------------------------------

The primitive data types supported by the Java Virtual Machine are the _numeric types_, the `boolean` type ([§2.3.4](jvms-2.html#jvms-2.3.4 "2.3.4. The boolean Type")), and the `returnAddress` type ([§2.3.3](jvms-2.html#jvms-2.3.3 "2.3.3. The returnAddress Type and Values")).

The numeric types consist of the _integral types_ ([§2.3.1](jvms-2.html#jvms-2.3.1 "2.3.1. Integral Types and Values")) and the _floating-point types_ ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")).

The integral types are:

*   `byte`, whose values are 8-bit signed two's-complement integers, and whose default value is zero
    
*   `short`, whose values are 16-bit signed two's-complement integers, and whose default value is zero
    
*   `int`, whose values are 32-bit signed two's-complement integers, and whose default value is zero
    
*   `long`, whose values are 64-bit signed two's-complement integers, and whose default value is zero
    
*   `char`, whose values are 16-bit unsigned integers representing Unicode code points in the Basic Multilingual Plane, encoded with UTF-16, and whose default value is the null code point (`'\u0000'`)
    

The floating-point types are:

*   `float`, whose values are elements of the float value set or, where supported, the float-extended-exponent value set, and whose default value is positive zero
    
*   `double`, whose values are elements of the double value set or, where supported, the double-extended-exponent value set, and whose default value is positive zero
    

The values of the `boolean` type encode the truth values `true` and `false`, and the default value is `false`.

The First Edition of _The Java® Virtual Machine Specification_ did not consider `boolean` to be a Java Virtual Machine type. However, `boolean` values do have limited support in the Java Virtual Machine. The Second Edition of _The Java® Virtual Machine Specification_ clarified the issue by treating `boolean` as a type.

The values of the `returnAddress` type are pointers to the opcodes of Java Virtual Machine instructions. Of the primitive types, only the `returnAddress` type is not directly associated with a Java programming language type.

### 2.3.1. Integral Types and Values

The values of the integral types of the Java Virtual Machine are:

*   For `byte`, from -128 to 127 (-27 to 27 - 1), inclusive
    
*   For `short`, from -32768 to 32767 (-215 to 215 - 1), inclusive
    
*   For `int`, from -2147483648 to 2147483647 (-231 to 231 - 1), inclusive
    
*   For `long`, from -9223372036854775808 to 9223372036854775807 (-263 to 263 - 1), inclusive
    
*   For `char`, from 0 to 65535 inclusive
    

### 2.3.2. Floating-Point Types, Value Sets, and Values

The floating-point types are `float` and `double`, which are conceptually associated with the 32-bit single-precision and 64-bit double-precision format IEEE 754 values and operations as specified in _IEEE Standard for Binary Floating-Point Arithmetic_ (ANSI/IEEE Std. 754-1985, New York).

The IEEE 754 standard includes not only positive and negative sign-magnitude numbers, but also positive and negative zeros, positive and negative _infinities_, and a special Not-a-Number value (hereafter abbreviated as "NaN"). The NaN value is used to represent the result of certain invalid operations such as dividing zero by zero.

Every implementation of the Java Virtual Machine is required to support two standard sets of floating-point values, called the _float value set_ and the _double value set_. In addition, an implementation of the Java Virtual Machine may, at its option, support either or both of two extended-exponent floating-point value sets, called the _float-extended-exponent value set_ and the _double-extended-exponent value set_. These extended-exponent value sets may, under certain circumstances, be used instead of the standard value sets to represent the values of type `float` or `double`.

The finite nonzero values of any floating-point value set can all be expressed in the form _s_ ⋅ _m_ ⋅ 2(_e_ − _N_ + 1), where _s_ is +1 or −1, _m_ is a positive integer less than 2_N_, and _e_ is an integer between _Emin_ = −(2_K_−1−2) and _Emax_ = 2_K_−1−1, inclusive, and where _N_ and _K_ are parameters that depend on the value set. Some values can be represented in this form in more than one way; for example, supposing that a value _v_ in a value set might be represented in this form using certain values for _s_, _m_, and _e_, then if it happened that _m_ were even and _e_ were less than 2_K_\-1, one could halve _m_ and increase _e_ by 1 to produce a second representation for the same value _v_. A representation in this form is called _normalized_ if _m_ ≥ 2_N_\-1; otherwise the representation is said to be _denormalized_. If a value in a value set cannot be represented in such a way that _m_ ≥ 2_N_\-1, then the value is said to be a _denormalized value_, because it has no normalized representation.

The constraints on the parameters _N_ and _K_ (and on the derived parameters _Emin_ and _Emax_) for the two required and two optional floating-point value sets are summarized in [Table 2.3.2-A](jvms-2.html#jvms-2.3.2-140-A "Table 2.3.2-A. Floating-point value set parameters").

**Table 2.3.2-A. Floating-point value set parameters**

    

Parameter

float

float-extended-exponent

double

double-extended-exponent

_N_

24

24

53

53

_K_

8

≥ 11

11

≥ 15

_Emax_

+127

≥ +1023

+1023

≥ +16383

_Emin_

\-126

≤ -1022

\-1022

≤ -16382

  

Where one or both extended-exponent value sets are supported by an implementation, then for each supported extended-exponent value set there is a specific implementation-dependent constant _K_, whose value is constrained by [Table 2.3.2-A](jvms-2.html#jvms-2.3.2-140-A "Table 2.3.2-A. Floating-point value set parameters"); this value _K_ in turn dictates the values for _Emin_ and _Emax_.

Each of the four value sets includes not only the finite nonzero values that are ascribed to it above, but also the five values positive zero, negative zero, positive infinity, negative infinity, and NaN.

Note that the constraints in [Table 2.3.2-A](jvms-2.html#jvms-2.3.2-140-A "Table 2.3.2-A. Floating-point value set parameters") are designed so that every element of the float value set is necessarily also an element of the float-extended-exponent value set, the double value set, and the double-extended-exponent value set. Likewise, each element of the double value set is necessarily also an element of the double-extended-exponent value set. Each extended-exponent value set has a larger range of exponent values than the corresponding standard value set, but does not have more precision.

The elements of the float value set are exactly the values that can be represented using the single floating-point format defined in the IEEE 754 standard, except that there is only one NaN value (IEEE 754 specifies 224\-2 distinct NaN values). The elements of the double value set are exactly the values that can be represented using the double floating-point format defined in the IEEE 754 standard, except that there is only one NaN value (IEEE 754 specifies 253\-2 distinct NaN values). Note, however, that the elements of the float-extended-exponent and double-extended-exponent value sets defined here do _not_ correspond to the values that can be represented using IEEE 754 single extended and double extended formats, respectively. This specification does not mandate a specific representation for the values of the floating-point value sets except where floating-point values must be represented in the `class` file format ([§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures"), [§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures")).

The float, float-extended-exponent, double, and double-extended-exponent value sets are not types. It is always correct for an implementation of the Java Virtual Machine to use an element of the float value set to represent a value of type `float`; however, it may be permissible in certain contexts for an implementation to use an element of the float-extended-exponent value set instead. Similarly, it is always correct for an implementation to use an element of the double value set to represent a value of type `double`; however, it may be permissible in certain contexts for an implementation to use an element of the double-extended-exponent value set instead.

Except for NaNs, values of the floating-point value sets are _ordered_. When arranged from smallest to largest, they are negative infinity, negative finite values, positive and negative zero, positive finite values, and positive infinity.

Floating-point positive zero and floating-point negative zero compare as equal, but there are other operations that can distinguish them; for example, dividing `1.0` by `0.0` produces positive infinity, but dividing `1.0` by `-0.0` produces negative infinity.

NaNs are _unordered_, so numerical comparisons and tests for numerical equality have the value `false` if either or both of their operands are NaN. In particular, a test for numerical equality of a value against itself has the value `false` if and only if the value is NaN. A test for numerical inequality has the value `true` if either operand is NaN.

### 2.3.3. The `returnAddress` Type and Values

The `returnAddress` type is used by the Java Virtual Machine's _jsr_, _ret_, and _jsr\_w_ instructions ([§_jsr_](jvms-6.html#jvms-6.5.jsr "jsr"), [§_ret_](jvms-6.html#jvms-6.5.ret "ret"), [§_jsr\_w_](jvms-6.html#jvms-6.5.jsr_w "jsr_w")). The values of the `returnAddress` type are pointers to the opcodes of Java Virtual Machine instructions. Unlike the numeric primitive types, the `returnAddress` type does not correspond to any Java programming language type and cannot be modified by the running program.

### 2.3.4. The `boolean` Type

Although the Java Virtual Machine defines a `boolean` type, it only provides very limited support for it. There are no Java Virtual Machine instructions solely dedicated to operations on `boolean` values. Instead, expressions in the Java programming language that operate on `boolean` values are compiled to use values of the Java Virtual Machine `int` data type.

The Java Virtual Machine does directly support `boolean` arrays. Its _newarray_ instruction ([§_newarray_](jvms-6.html#jvms-6.5.newarray "newarray")) enables creation of `boolean` arrays. Arrays of type `boolean` are accessed and modified using the `byte` array instructions _baload_ and _bastore_ ([§_baload_](jvms-6.html#jvms-6.5.baload "baload"), [§_bastore_](jvms-6.html#jvms-6.5.bastore "bastore")).

In Oracle’s Java Virtual Machine implementation, `boolean` arrays in the Java programming language are encoded as Java Virtual Machine `byte` arrays, using 8 bits per `boolean` element.

The Java Virtual Machine encodes `boolean` array components using `1` to represent `true` and `0` to represent `false`. Where Java programming language `boolean` values are mapped by compilers to values of Java Virtual Machine type `int`, the compilers must use the same encoding.

2.4. Reference Types and Values
-------------------------------

There are three kinds of `reference` types: class types, array types, and interface types. Their values are references to dynamically created class instances, arrays, or class instances or arrays that implement interfaces, respectively.

An array type consists of a _component type_ with a single dimension (whose length is not given by the type). The component type of an array type may itself be an array type. If, starting from any array type, one considers its component type, and then (if that is also an array type) the component type of that type, and so on, eventually one must reach a component type that is not an array type; this is called the _element type_ of the array type. The element type of an array type is necessarily either a primitive type, or a class type, or an interface type.

A `reference` value may also be the special null reference, a reference to no object, which will be denoted here by `null`. The `null` reference initially has no run-time type, but may be cast to any type. The default value of a `reference` type is `null`.

This specification does not mandate a concrete value encoding `null`.

2.5. Run-Time Data Areas
------------------------

The Java Virtual Machine defines various run-time data areas that are used during execution of a program. Some of these data areas are created on Java Virtual Machine start-up and are destroyed only when the Java Virtual Machine exits. Other data areas are per thread. Per-thread data areas are created when a thread is created and destroyed when the thread exits.

### 2.5.1. The `pc` Register

The Java Virtual Machine can support many threads of execution at once (JLS §17). Each Java Virtual Machine thread has its own `pc` (program counter) register. At any point, each Java Virtual Machine thread is executing the code of a single method, namely the current method ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) for that thread. If that method is not `native`, the `pc` register contains the address of the Java Virtual Machine instruction currently being executed. If the method currently being executed by the thread is `native`, the value of the Java Virtual Machine's `pc` register is undefined. The Java Virtual Machine's `pc` register is wide enough to hold a `returnAddress` or a native pointer on the specific platform.

### 2.5.2. Java Virtual Machine Stacks

Each Java Virtual Machine thread has a private _Java Virtual Machine stack_, created at the same time as the thread. A Java Virtual Machine stack stores frames ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). A Java Virtual Machine stack is analogous to the stack of a conventional language such as C: it holds local variables and partial results, and plays a part in method invocation and return. Because the Java Virtual Machine stack is never manipulated directly except to push and pop frames, frames may be heap allocated. The memory for a Java Virtual Machine stack does not need to be contiguous.

In the First Edition of _The Java® Virtual Machine Specification_, the Java Virtual Machine stack was known as the _Java stack_.

This specification permits Java Virtual Machine stacks either to be of a fixed size or to dynamically expand and contract as required by the computation. If the Java Virtual Machine stacks are of a fixed size, the size of each Java Virtual Machine stack may be chosen independently when that stack is created.

A Java Virtual Machine implementation may provide the programmer or the user control over the initial size of Java Virtual Machine stacks, as well as, in the case of dynamically expanding or contracting Java Virtual Machine stacks, control over the maximum and minimum sizes.

The following exceptional conditions are associated with Java Virtual Machine stacks:

*   If the computation in a thread requires a larger Java Virtual Machine stack than is permitted, the Java Virtual Machine throws a `StackOverflowError`.
    
*   If Java Virtual Machine stacks can be dynamically expanded, and expansion is attempted but insufficient memory can be made available to effect the expansion, or if insufficient memory can be made available to create the initial Java Virtual Machine stack for a new thread, the Java Virtual Machine throws an `OutOfMemoryError`.
    

### 2.5.3. Heap

The Java Virtual Machine has a _heap_ that is shared among all Java Virtual Machine threads. The heap is the run-time data area from which memory for all class instances and arrays is allocated.

The heap is created on virtual machine start-up. Heap storage for objects is reclaimed by an automatic storage management system (known as a _garbage collector_); objects are never explicitly deallocated. The Java Virtual Machine assumes no particular type of automatic storage management system, and the storage management technique may be chosen according to the implementor's system requirements. The heap may be of a fixed size or may be expanded as required by the computation and may be contracted if a larger heap becomes unnecessary. The memory for the heap does not need to be contiguous.

A Java Virtual Machine implementation may provide the programmer or the user control over the initial size of the heap, as well as, if the heap can be dynamically expanded or contracted, control over the maximum and minimum heap size.

The following exceptional condition is associated with the heap:

*   If a computation requires more heap than can be made available by the automatic storage management system, the Java Virtual Machine throws an `OutOfMemoryError`.
    

### 2.5.4. Method Area

The Java Virtual Machine has a _method area_ that is shared among all Java Virtual Machine threads. The method area is analogous to the storage area for compiled code of a conventional language or analogous to the "text" segment in an operating system process. It stores per-class structures such as the run-time constant pool, field and method data, and the code for methods and constructors, including the special methods ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) used in class and instance initialization and interface initialization.

The method area is created on virtual machine start-up. Although the method area is logically part of the heap, simple implementations may choose not to either garbage collect or compact it. This specification does not mandate the location of the method area or the policies used to manage compiled code. The method area may be of a fixed size or may be expanded as required by the computation and may be contracted if a larger method area becomes unnecessary. The memory for the method area does not need to be contiguous.

A Java Virtual Machine implementation may provide the programmer or the user control over the initial size of the method area, as well as, in the case of a varying-size method area, control over the maximum and minimum method area size.

The following exceptional condition is associated with the method area:

*   If memory in the method area cannot be made available to satisfy an allocation request, the Java Virtual Machine throws an `OutOfMemoryError`.
    

### 2.5.5. Run-Time Constant Pool

A _run-time constant pool_ is a per-class or per-interface run-time representation of the `constant_pool` table in a `class` file ([§4.4](jvms-4.html#jvms-4.4 "4.4. The Constant Pool")). It contains several kinds of constants, ranging from numeric literals known at compile-time to method and field references that must be resolved at run-time. The run-time constant pool serves a function similar to that of a symbol table for a conventional programming language, although it contains a wider range of data than a typical symbol table.

Each run-time constant pool is allocated from the Java Virtual Machine's method area ([§2.5.4](jvms-2.html#jvms-2.5.4 "2.5.4. Method Area")). The run-time constant pool for a class or interface is constructed when the class or interface is created ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) by the Java Virtual Machine.

The following exceptional condition is associated with the construction of the run-time constant pool for a class or interface:

*   When creating a class or interface, if the construction of the run-time constant pool requires more memory than can be made available in the method area of the Java Virtual Machine, the Java Virtual Machine throws an `OutOfMemoryError`.
    

See [§5 (_Loading, Linking, and Initializing_)](jvms-5.html "Chapter 5. Loading, Linking, and Initializing") for information about the construction of the run-time constant pool.

### 2.5.6. Native Method Stacks

An implementation of the Java Virtual Machine may use conventional stacks, colloquially called "C stacks," to support `native` methods (methods written in a language other than the Java programming language). Native method stacks may also be used by the implementation of an interpreter for the Java Virtual Machine's instruction set in a language such as C. Java Virtual Machine implementations that cannot load `native` methods and that do not themselves rely on conventional stacks need not supply native method stacks. If supplied, native method stacks are typically allocated per thread when each thread is created.

This specification permits native method stacks either to be of a fixed size or to dynamically expand and contract as required by the computation. If the native method stacks are of a fixed size, the size of each native method stack may be chosen independently when that stack is created.

A Java Virtual Machine implementation may provide the programmer or the user control over the initial size of the native method stacks, as well as, in the case of varying-size native method stacks, control over the maximum and minimum method stack sizes.

The following exceptional conditions are associated with native method stacks:

*   If the computation in a thread requires a larger native method stack than is permitted, the Java Virtual Machine throws a `StackOverflowError`.
    
*   If native method stacks can be dynamically expanded and native method stack expansion is attempted but insufficient memory can be made available, or if insufficient memory can be made available to create the initial native method stack for a new thread, the Java Virtual Machine throws an `OutOfMemoryError`.
    

2.6. Frames
-----------

A _frame_ is used to store data and partial results, as well as to perform dynamic linking, return values for methods, and dispatch exceptions.

A new frame is created each time a method is invoked. A frame is destroyed when its method invocation completes, whether that completion is normal or abrupt (it throws an uncaught exception). Frames are allocated from the Java Virtual Machine stack ([§2.5.2](jvms-2.html#jvms-2.5.2 "2.5.2. Java Virtual Machine Stacks")) of the thread creating the frame. Each frame has its own array of local variables ([§2.6.1](jvms-2.html#jvms-2.6.1 "2.6.1. Local Variables")), its own operand stack ([§2.6.2](jvms-2.html#jvms-2.6.2 "2.6.2. Operand Stacks")), and a reference to the run-time constant pool ([§2.5.5](jvms-2.html#jvms-2.5.5 "2.5.5. Run-Time Constant Pool")) of the class of the current method.

A frame may be extended with additional implementation-specific information, such as debugging information.

The sizes of the local variable array and the operand stack are determined at compile-time and are supplied along with the code for the method associated with the frame ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). Thus the size of the frame data structure depends only on the implementation of the Java Virtual Machine, and the memory for these structures can be allocated simultaneously onmethod invocation.

Only one frame, the frame for the executing method, is active at any point in a given thread of control. This frame is referred to as the _current frame_, and its method is known as the _current method_. The class in which the current method is defined is the _current class_. Operations on local variables and the operand stack are typically with reference to the current frame.

A frame ceases to be current if its method invokes another method or if its method completes. When a method is invoked, a new frame is created and becomes current when control transfers to the new method. On method return, the current frame passes back the result of its method invocation, if any, to the previous frame. The current frame is then discarded as the previous frame becomes the current one.

Note that a frame created by a thread is local to that thread and cannot be referenced by any other thread.

### 2.6.1. Local Variables

Each frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) contains an array of variables known as its _local variables_. The length of the local variable array of a frame is determined at compile-time and supplied in the binary representation of a class or interface along with the code for the method associated with the frame ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")).

A single local variable can hold a value of type `boolean`, `byte`, `char`, `short`, `int`, `float`, `reference`, or `returnAddress`. A pair of local variables can hold a value of type `long` or `double`.

Local variables are addressed by indexing. The index of the first local variable is zero. An integer is considered to be an index into the local variable array if and only if that integer is between zero and one less than the size of the local variable array.

A value of type `long` or type `double` occupies two consecutive local variables. Such a value may only be addressed using the lesser index. For example, a value of type `double` stored in the local variable array at index _n_ actually occupies the local variables with indices _n_ and _n_+1; however, the local variable at index _n_+1 cannot be loaded from. It can be stored into. However, doing so invalidates the contents of local variable _n_.

The Java Virtual Machine does not require _n_ to be even. In intuitive terms, values of types `long` and `double` need not be 64-bit aligned in the local variables array. Implementors are free to decide the appropriate way to represent such values using the two local variables reserved for the value.

The Java Virtual Machine uses local variables to pass parameters on method invocation. On class method invocation, any parameters are passed in consecutive local variables starting from local variable _0_. On instance method invocation, local variable _0_ is always used to pass a reference to the object on which the instance method is being invoked (`this` in the Java programming language). Any parameters are subsequently passed in consecutive local variables starting from local variable _1_.

### 2.6.2. Operand Stacks

Each frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) contains a last-in-first-out (LIFO) stack known as its _operand stack_. The maximum depth of the operand stack of a frame is determined at compile-time and is supplied along with the code for the method associated with the frame ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")).

Where it is clear by context, we will sometimes refer to the operand stack of the current frame as simply the operand stack.

The operand stack is empty when the frame that contains it is created. The Java Virtual Machine supplies instructions to load constants or values from local variables or fields onto the operand stack. Other Java Virtual Machine instructions take operands from the operand stack, operate on them, and push the result back onto the operand stack. The operand stack is also used to prepare parameters to be passed to methods and to receive method results.

For example, the _iadd_ instruction ([§_iadd_](jvms-6.html#jvms-6.5.iadd "iadd")) adds two `int` values together. It requires that the `int` values to be added be the top two values of the operand stack, pushed there by previous instructions. Both of the `int` values are popped from the operand stack. They are added, and their sum is pushed back onto the operand stack. Subcomputations may be nested on the operand stack, resulting in values that can be used by the encompassing computation.

Each entry on the operand stack can hold a value of any Java Virtual Machine type, including a value of type `long` or type `double`.

Values from the operand stack must be operated upon in ways appropriate to their types. It is not possible, for example, to push two `int` values and subsequently treat them as a `long` or to push two `float` values and subsequently add them with an _iadd_ instruction. A small number of Java Virtual Machine instructions (the _dup_ instructions ([§_dup_](jvms-6.html#jvms-6.5.dup "dup")) and _swap_ ([§_swap_](jvms-6.html#jvms-6.5.swap "swap"))) operate on run-time data areas as raw values without regard to their specific types; these instructions are defined in such a way that they cannot be used to modify or break up individual values. These restrictions on operand stack manipulation are enforced through `class` file verification ([§4.10](jvms-4.html#jvms-4.10 "4.10. Verification of class Files")).

At any point in time, an operand stack has an associated depth, where a value of type `long` or `double` contributes two units to the depth and a value of any other type contributes one unit.

### 2.6.3. Dynamic Linking

Each frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) contains a reference to the run-time constant pool ([§2.5.5](jvms-2.html#jvms-2.5.5 "2.5.5. Run-Time Constant Pool")) for the type of the current method to support _dynamic linking_ of the method code. The `class` file code for a method refers to methods to be invoked and variables to be accessed via symbolic references. Dynamic linking translates these symbolic method references into concrete method references, loading classes as necessary to resolve as-yet-undefined symbols, and translates variable accesses into appropriate offsets in storage structures associated with the run-time location of these variables.

This late binding of the methods and variables makes changes in other classes that a method uses less likely to break this code.

### 2.6.4. Normal Method Invocation Completion

A method invocation _completes normally_ if that invocation does not cause an exception ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")) to be thrown, either directly from the Java Virtual Machine or as a result of executing an explicit `throw` statement. If the invocation of the current method completes normally, then a value may be returned to the invoking method. This occurs when the invoked method executes one of the return instructions ([§2.11.8](jvms-2.html#jvms-2.11.8 "2.11.8. Method Invocation and Return Instructions")), the choice of which must be appropriate for the type of the value being returned (if any).

The current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) is used in this case to restore the state of the invoker, including its local variables and operand stack, with the program counter of the invoker appropriately incremented to skip past the method invocation instruction. Execution then continues normally in the invoking method's frame with the returned value (if any) pushed onto the operand stack of that frame.

### 2.6.5. Abrupt Method Invocation Completion

A method invocation _completes abruptly_ if execution of a Java Virtual Machine instruction within the method causes the Java Virtual Machine to throw an exception ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")), and that exception is not handled within the method. Execution of an _athrow_ instruction ([§_athrow_](jvms-6.html#jvms-6.5.athrow "athrow")) also causes an exception to be explicitly thrown and, if the exception is not caught by the current method, results in abrupt method invocation completion. A method invocation that completes abruptly never returns a value to its invoker.

2.7. Representation of Objects
------------------------------

The Java Virtual Machine does not mandate any particular internal structure for objects.

In some of Oracle’s implementations of the Java Virtual Machine, a reference to a class instance is a pointer to a _handle_ that is itself a pair of pointers: one to a table containing the methods of the object and a pointer to the `Class` object that represents the type of the object, and the other to the memory allocated from the heap for the object data.

2.8. Floating-Point Arithmetic
------------------------------

The Java Virtual Machine incorporates a subset of the floating-point arithmetic specified in _IEEE Standard for Binary Floating-Point Arithmetic_ (ANSI/IEEE Std. 754-1985, New York).

### 2.8.1. Java Virtual Machine Floating-Point Arithmetic and IEEE 754

The key differences between the floating-point arithmetic supported by the Java Virtual Machine and the IEEE 754 standard are:

*   The floating-point operations of the Java Virtual Machine do not throw exceptions, trap, or otherwise signal the IEEE 754 exceptional conditions of invalid operation, division by zero, overflow, underflow, or inexact. The Java Virtual Machine has no signaling NaN value.
    
*   The Java Virtual Machine does not support IEEE 754 signaling floating-point comparisons.
    
*   The rounding operations of the Java Virtual Machine always use IEEE 754 round to nearest mode. Inexact results are rounded to the nearest representable value, with ties going to the value with a zero least-significant bit. This is the IEEE 754 default mode. But Java Virtual Machine instructions that convert values of floating-point types to values of integral types round toward zero. The Java Virtual Machine does not give any means to change the floating-point rounding mode.
    
*   The Java Virtual Machine does not support either the IEEE 754 single extended or double extended format, except insofar as the double and double-extended-exponent value sets may be said to support the single extended format. The float-extended-exponent and double-extended-exponent value sets, which may optionally be supported, do not correspond to the values of the IEEE 754 extended formats: the IEEE 754 extended formats require extended precision as well as extended exponent range.
    

### 2.8.2. Floating-Point Modes

Every method has a _floating-point mode_, which is either _FP-strict_ or _not FP-strict_. The floating-point mode of a method is determined by the setting of the `ACC_STRICT` flag of the `access_flags` item of the `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")) defining the method. A method for which this flag is set is FP-strict; otherwise, the method is not FP-strict.

Note that this mapping of the `ACC_STRICT` flag implies that methods in classes compiled by a compiler in JDK release 1.1 or earlier are effectively not FP-strict.

We will refer to an operand stack as having a given floating-point mode when the method whose invocation created the frame containing the operand stack has that floating-point mode. Similarly, we will refer to a Java Virtual Machine instruction as having a given floating-point mode when the method containing that instruction has that floating-point mode.

If a float-extended-exponent value set is supported ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")), values of type `float` on an operand stack that is not FP-strict may range over that value set except where prohibited by value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")). If a double-extended-exponent value set is supported ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")), values of type `double` on an operand stack that is not FP-strict may range over that value set except where prohibited by value set conversion.

In all other contexts, whether on the operand stack or elsewhere, and regardless of floating-point mode, floating-point values of type `float` and `double` may only range over the float value set and double value set, respectively. In particular, class and instance fields, array elements, local variables, and method parameters may only contain values drawn from the standard value sets.

### 2.8.3. Value Set Conversion

An implementation of the Java Virtual Machine that supports an extended floating-point value set is permitted or required, under specified circumstances, to map a value of the associated floating-point type between the extended and the standard value sets. Such a _value set conversion_ is not a type conversion, but a mapping between the value sets associated with the same type.

Where value set conversion is indicated, an implementation is permitted to perform one of the following operations on a value:

*   If the value is of type `float` and is not an element of the float value set, it maps the value to the nearest element of the float value set.
    
*   If the value is of type `double` and is not an element of the double value set, it maps the value to the nearest element of the double value set.
    

In addition, where value set conversion is indicated, certain operations are required:

*   Suppose execution of a Java Virtual Machine instruction that is not FP-strict causes a value of type `float` to be pushed onto an operand stack that is FP-strict, passed as a parameter, or stored into a local variable, a field, or an element of an array. If the value is not an element of the float value set, it maps the value to the nearest element of the float value set.
    
*   Suppose execution of a Java Virtual Machine instruction that is not FP-strict causes a value of type `double` to be pushed onto an operand stack that is FP-strict, passed as a parameter, or stored into a local variable, a field, or an element of an array. If the value is not an element of the double value set, it maps the value to the nearest element of the double value set.
    

Such required value set conversions may occur as a result of passing a parameter of a floating-point type during method invocation, including `native` method invocation; returning a value of a floating-point type from a method that is not FP-strict to a method that is FP-strict; or storing a value of a floating-point type into a local variable, a field, or an array in a method that is not FP-strict.

Not all values from an extended-exponent value set can be mapped exactly to a value in the corresponding standard value set. If a value being mapped is too large to be represented exactly (its exponent is greater than that permitted by the standard value set), it is converted to a (positive or negative) infinity of the corresponding type. If a value being mapped is too small to be represented exactly (its exponent is smaller than that permitted by the standard value set), it is rounded to the nearest of a representable denormalized value or zero of the same sign.

Value set conversion preserves infinities and NaNs and cannot change the sign of the value being converted. Value set conversion has no effect on a value that is not of a floating-point type.

2.9. Special Methods
--------------------

At the level of the Java Virtual Machine, every constructor written in the Java programming language (JLS §8.8) appears as an _instance initialization method_ that has the special name `<init>`. This name is supplied by a compiler. Because the name `<init>` is not a valid identifier, it cannot be used directly in a program written in the Java programming language. Instance initialization methods may be invoked only within the Java Virtual Machine by the _invokespecial_ instruction ([§_invokespecial_](jvms-6.html#jvms-6.5.invokespecial "invokespecial")), and they may be invoked only on uninitialized class instances. An instance initialization method takes on the access permissions (JLS §6.6) of the constructor from which it was derived.

A class or interface has at most one _class or interface initialization method_ and is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")) by invoking that method. The initialization method of a class or interface has the special name `<clinit>`, takes no arguments, and is void ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

Other methods named `<clinit>` in a `class` file are of no consequence. They are not class or interface initialization methods. They cannot be invoked by any Java Virtual Machine instruction and are never invoked by the Java Virtual Machine itself.

In a `class` file whose version number is 51.0 or above, the method must additionally have its `ACC_STATIC` flag ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")) set in order to be the class or interface initialization method.

This requirement was introduced in Java SE 7. In a class file whose version number is 50.0 or below, a method named `<clinit>` that is void and takes no arguments is considered the class or interface initialization method regardless of the setting of its `ACC_STATIC` flag.

The name `<clinit>` is supplied by a compiler. Because the name `<clinit>` is not a valid identifier, it cannot be used directly in a program written in the Java programming language. Class and interface initialization methods are invoked implicitly by the Java Virtual Machine; they are never invoked directly from any Java Virtual Machine instruction, but are invoked only indirectly as part of the class initialization process.

A method is _signature polymorphic_ if all of the following are true:

*   It is declared in the `java.lang.invoke.MethodHandle` class.
    
*   It has a single formal parameter of type `Object``[]`.
    
*   It has a return type of `Object`.
    
*   It has the `ACC_VARARGS` and `ACC_NATIVE` flags set.
    

In Java SE 8, the only signature polymorphic methods are the `invoke` and `invokeExact` methods of the class `java.lang.invoke.MethodHandle`.

The Java Virtual Machine gives special treatment to signature polymorphic methods in the _invokevirtual_ instruction ([§_invokevirtual_](jvms-6.html#jvms-6.5.invokevirtual "invokevirtual")), in order to effect invocation of a _method handle_. A method handle is a strongly typed, directly executable reference to an underlying method, constructor, field, or similar low-level operation ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")), with optional transformations of arguments or return values. These transformations are quite general, and include such patterns as conversion, insertion, deletion, and substitution. See the `java.lang.invoke` package in the Java SE platform API for more information.

2.10. Exceptions
----------------

An exception in the Java Virtual Machine is represented by an instance of the class `Throwable` or one of its subclasses. Throwing an exception results in an immediate nonlocal transfer of control from the point where the exception was thrown.

Most exceptions occur synchronously as a result of an action by the thread in which they occur. An asynchronous exception, by contrast, can potentially occur at any point in the execution of a program. The Java Virtual Machine throws an exception for one of three reasons:

*   An _athrow_ instruction ([§_athrow_](jvms-6.html#jvms-6.5.athrow "athrow")) was executed.
    
*   An abnormal execution condition was synchronously detected by the Java Virtual Machine. These exceptions are not thrown at an arbitrary point in the program, but only synchronously after execution of an instruction that either:
    
    *   Specifies the exception as a possible result, such as:
        
        *   When the instruction embodies an operation that violates the semantics of the Java programming language, for example indexing outside the bounds of an array.
            
        *   When an error occurs in loading or linking part of the program.
            
        
    *   Causes some limit on a resource to be exceeded, for example when too much memory is used.
        
    
*   An asynchronous exception occurred because:
    
    *   The `stop` method of class `Thread` or `ThreadGroup` was invoked, or
        
    *   An internal error occurred in the Java Virtual Machine implementation.
        
    
    The `stop` methods may be invoked by one thread to affect another thread or all the threads in a specified thread group. They are asynchronous because they may occur at any point in the execution of the other thread or threads. An internal error is considered asynchronous ([§6.3](jvms-6.html#jvms-6.3 "6.3. Virtual Machine Errors")).
    

A Java Virtual Machine may permit a small but bounded amount of execution to occur before an asynchronous exception is thrown. This delay is permitted to allow optimized code to detect and throw these exceptions at points where it is practical to handle them while obeying the semantics of the Java programming language.

A simple implementation might poll for asynchronous exceptions at the point of each control transfer instruction. Since a program has a finite size, this provides a bound on the total delay in detecting an asynchronous exception. Since no asynchronous exception will occur between control transfers, the code generator has some flexibility to reorder computation between control transfers for greater performance. The paper _Polling Efficiently on Stock Hardware_ by Marc Feeley, _Proc. 1993 Conference on Functional Programming and Computer Architecture_, Copenhagen, Denmark, pp. 179–187, is recommended as further reading.

Exceptions thrown by the Java Virtual Machine are precise: when the transfer of control takes place, all effects of the instructions executed before the point from which the exception is thrown must appear to have taken place. No instructions that occur after the point from which the exception is thrown may appear to have been evaluated. If optimized code has speculatively executed some of the instructions which follow the point at which the exception occurs, such code must be prepared to hide this speculative execution from the user-visible state of the program.

Each method in the Java Virtual Machine may be associated with zero or more _exception handlers_. An exception handler specifies the range of offsets into the Java Virtual Machine code implementing the method for which the exception handler is active, describes the type of exception that the exception handler is able to handle, and specifies the location of the code that is to handle that exception. An exception matches an exception handler if the offset of the instruction that caused the exception is in the range of offsets of the exception handler and the exception type is the same class as or a subclass of the class of exception that the exception handler handles. When an exception is thrown, the Java Virtual Machine searches for a matching exception handler in the current method. If a matching exception handler is found, the system branches to the exception handling code specified by the matched handler.

If no such exception handler is found in the current method, the current method invocation completes abruptly ([§2.6.5](jvms-2.html#jvms-2.6.5 "2.6.5. Abrupt Method Invocation Completion")). On abrupt completion, the operand stack and local variables of the current method invocation are discarded, and its frame is popped, reinstating the frame of the invoking method. The exception is then rethrown in the context of the invoker's frame and so on, continuing up the method invocation chain. If no suitable exception handler is found before the top of the method invocation chain is reached, the execution of the thread in which the exception was thrown is terminated.

The order in which the exception handlers of a method are searched for a match is important. Within a `class` file, the exception handlers for each method are stored in a table ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). At run time, when an exception is thrown, the Java Virtual Machine searches the exception handlers of the current method in the order that they appear in the corresponding exception handler table in the `class` file, starting from the beginning of that table.

Note that the Java Virtual Machine does not enforce nesting of or any ordering of the exception table entries of a method. The exception handling semantics of the Java programming language are implemented only through cooperation with the compiler ([§3.12](jvms-3.html#jvms-3.12 "3.12. Throwing and Handling Exceptions")). When `class` files are generated by some other means, the defined search procedure ensures that all Java Virtual Machine implementations will behave consistently.

2.11. Instruction Set Summary
-----------------------------

A Java Virtual Machine instruction consists of a one-byte _opcode_ specifying the operation to be performed, followed by zero or more _operands_ supplying arguments or data that are used by the operation. Many instructions have no operands and consist only of an opcode.

Ignoring exceptions, the inner loop of a Java Virtual Machine interpreter is effectively

do {
    atomically calculate pc and fetch opcode at pc;
    if (operands) fetch operands;
    execute the action for the opcode;
} while (there is more to do);

The number and size of the operands are determined by the opcode. If an operand is more than one byte in size, then it is stored in _big-endian_ order - high-order byte first. For example, an unsigned 16-bit index into the local variables is stored as two unsigned bytes, _byte1_ and _byte2_, such that its value is (_byte1_ `<<` 8) | _byte2_.

The bytecode instruction stream is only single-byte aligned. The two exceptions are the _lookupswitch_ and _tableswitch_ instructions ([§_lookupswitch_](jvms-6.html#jvms-6.5.lookupswitch "lookupswitch"), [§_tableswitch_](jvms-6.html#jvms-6.5.tableswitch "tableswitch")), which are padded to force internal alignment of some of their operands on 4-byte boundaries.

The decision to limit the Java Virtual Machine opcode to a byte and to forgo data alignment within compiled code reflects a conscious bias in favor of compactness, possibly at the cost of some performance in naive implementations. A one-byte opcode also limits the size of the instruction set. Not assuming data alignment means that immediate data larger than a byte must be constructed from bytes at run time on many machines.

### 2.11.1. Types and the Java Virtual Machine

Most of the instructions in the Java Virtual Machine instruction set encode type information about the operations they perform. For instance, the _iload_ instruction ([§_iload_](jvms-6.html#jvms-6.5.iload "iload")) loads the contents of a local variable, which must be an `int`, onto the operand stack. The _fload_ instruction ([§_fload_](jvms-6.html#jvms-6.5.fload "fload")) does the same with a `float` value. The two instructions may have identical implementations, but have distinct opcodes.

For the majority of typed instructions, the instruction type is represented explicitly in the opcode mnemonic by a letter: _i_ for an `int` operation, _l_ for `long`, _s_ for `short`, _b_ for `byte`, _c_ for `char`, _f_ for `float`, _d_ for `double`, and _a_ for `reference`. Some instructions for which the type is unambiguous do not have a type letter in their mnemonic. For instance, _arraylength_ always operates on an object that is an array. Some instructions, such as _goto_, an unconditional control transfer, do not operate on typed operands.

Given the Java Virtual Machine's one-byte opcode size, encoding types into opcodes places pressure on the design of its instruction set. If each typed instruction supported all of the Java Virtual Machine's run-time data types, there would be more instructions than could be represented in a byte. Instead, the instruction set of the Java Virtual Machine provides a reduced level of type support for certain operations. In other words, the instruction set is intentionally not orthogonal. Separate instructions can be used to convert between unsupported and supported data types as necessary.

[Table 2.11.1-A](jvms-2.html#jvms-2.11.1-220 "Table 2.11.1-A. Type support in the Java Virtual Machine instruction set") summarizes the type support in the instruction set of the Java Virtual Machine. A specific instruction, with type information, is built by replacing the _T_ in the instruction template in the opcode column by the letter in the type column. If the type column for some instruction template and type is blank, then no instruction exists supporting that type of operation. For instance, there is a load instruction for type `int`, _iload_, but there is no load instruction for type `byte`.

Note that most instructions in [Table 2.11.1-A](jvms-2.html#jvms-2.11.1-220 "Table 2.11.1-A. Type support in the Java Virtual Machine instruction set") do not have forms for the integral types `byte`, `char`, and `short`. None have forms for the `boolean` type. A compiler encodes loads of literal values of types `byte` and `short` using Java Virtual Machine instructions that sign-extend those values to values of type `int` at compile-time or run-time. Loads of literal values of types `boolean` and `char` are encoded using instructions that zero-extend the literal to a value of type `int` at compile-time or run-time. Likewise, loads from arrays of values of type `boolean`, `byte`, `short`, and `char` are encoded using Java Virtual Machine instructions that sign-extend or zero-extend the values to values of type `int`. Thus, most operations on values of actual types `boolean`, `byte`, `char`, and `short` are correctly performed by instructions operating on values of computational type `int`.

**Table 2.11.1-A. Type support in the Java Virtual Machine instruction set**

        

opcode

`byte`

`short`

`int`

`long`

`float`

`double`

`char`

`reference`

_Tipush_

_bipush_

_sipush_

 

 

 

 

 

 

_Tconst_

 

 

_iconst_

_lconst_

_fconst_

_dconst_

 

_aconst_

_Tload_

 

 

_iload_

_lload_

_fload_

_dload_

 

_aload_

_Tstore_

 

 

_istore_

_lstore_

_fstore_

_dstore_

 

_astore_

_Tinc_

 

 

_iinc_

 

 

 

 

 

_Taload_

_baload_

_saload_

_iaload_

_laload_

_faload_

_daload_

_caload_

_aaload_

_Tastore_

_bastore_

_sastore_

_iastore_

_lastore_

_fastore_n class="emphasis">_dastore_ _castore_ _aastore_ _Tadd_     _iadd_ _ladd_ _fadd_ _dadd_     _Tsub_     _isub_ _lsub_ _fsub_ _dsub_     _Tmul_     _imul_ _lmul_ _fmul_ _dmul_     _Tdiv_     _idiv_ _ldiv_ _fdiv_ _ddiv_     _Trem_     _irem_ _lrem_ _frem_ _drem_     _Tneg_     _ineg_ _lneg_ _fneg_ _dneg_     _Tshl_     _ishl_ _lshl_         _Tshr_     _ishr_ _lshr_         _Tushr_     _iushr_ _lushr_         _Tand_     _iand_ _land_         _Tor_     _ior_ _lor_         _Txor_     _ixor_ _lxor_         _i2T_ _i2b_ _i2s_   _i2l_ _i2f_ _i2d_     _l2T_     _l2i_   _l2f_ _l2d_     _f2T_     _f2i_ _f2l_   _f2d_     _d2T_     _d2i_ _d2l_ _d2f_       _Tcmp_       _lcmp_         _Tcmpl_         _fcmpl_ _dcmpl_     _Tcmpg_         _fcmpg_ _dcmpg_     _if\_TcmpOP_     _if\_icmpOP_         _if\_acmpOP_ _Treturn_     _ireturn_ _lreturn_ _freturn_ _dreturn_   _areturn_  

The mapping between Java Virtual Machine actual types and Java Virtual Machine computational types is summarized by [Table 2.11.1-B](jvms-2.html#jvms-2.11.1-320 "Table 2.11.1-B. Actual and Computational types in the Java Virtual Machine").

Certain Java Virtual Machine instructions such as _pop_ and _swap_ operate on the operand stack without regard to type; however, such instructions are constrained to use only on values of certain categories of computational types, also given in [Table 2.11.1-B](jvms-2.html#jvms-2.11.1-320 "Table 2.11.1-B. Actual and Computational types in the Java Virtual Machine").

**Table 2.11.1-B. Actual and Computational types in the Java Virtual Machine**

  

Actual type

Computational type

Category

`boolean`

`int`

1

`byte`

`int`

1

`char`

`int`

1

`short`

`int`

1

`int`

`int`

1

`float`

`float`

1

`reference`

`reference`

1

`returnAddress`

`returnAddress`

1

`long`

`long`

2

`double`

`double`

2

  

### 2.11.2. Load and Store Instructions

The load and store instructions transfer values between the local variables ([§2.6.1](jvms-2.html#jvms-2.6.1 "2.6.1. Local Variables")) and the operand stack ([§2.6.2](jvms-2.html#jvms-2.6.2 "2.6.2. Operand Stacks")) of a Java Virtual Machine frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")):

*   Load a local variable onto the operand stack: _iload_, _iload\_<n>_, _lload_, _lload\_<n>_, _fload_, _fload\_<n>_, _dload_, _dload\_<n>_, _aload_, _aload\_<n>_.
    
*   Store a value from the operand stack into a local variable: _istore_, _istore\_<n>_, _lstore_, _lstore\_<n>_, _fstore_, _fstore\_<n>_, _dstore_, _dstore\_<n>_, _astore_, _astore\_<n>_.
    
*   Load a constant on to the operand stack: _bipush_, _sipush_, _ldc_, _ldc\_w_, _ldc2\_w_, _aconst\_null_, _iconst\_m1_, _iconst\_<i>_, _lconst\_<l>_, _fconst\_<f>_, _dconst\_<d>_.
    
*   Gain access to more local variables using a wider index, or to a larger immediate operand: _wide_.
    

Instructions that access fields of objects and elements of arrays ([§2.11.5](jvms-2.html#jvms-2.11.5 "2.11.5. Object Creation and Manipulation")) also transfer data to and from the operand stack.

Instruction mnemonics shown above with trailing letters between angle brackets (for instance, _iload\_<n>_) denote families of instructions (with members _iload\_0_, _iload\_1_, _iload\_2_, and _iload\_3_ in the case of _iload\_<n>_). Such families of instructions are specializations of an additional generic instruction (_iload_) that takes one operand. For the specialized instructions, the operand is implicit and does not need to be stored or fetched. The semantics are otherwise the same (_iload\_0_ means the same thing as _iload_ with the operand _0_). The letter between the angle brackets specifies the type of the implicit operand for that family of instructions: for _<n>_, a nonnegative integer; for _<i>_, an `int`; for _<l>_, a `long`; for _<f>_, a `float`; and for _<d>_, a `double`. Forms for type `int` are used in many cases to perform operations on values of type `byte`, `char`, and `short` ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

This notation for instruction families is used throughout this specification.

### 2.11.3. Arithmetic Instructions

The arithmetic instructions compute a result that is typically a function of two values on the operand stack, pushing the result back on the operand stack. There are two main kinds of arithmetic instructions: those operating on integer values and those operating on floating-point values. Within each of these kinds, the arithmetic instructions are specialized to Java Virtual Machine numeric types. There is no direct support for integer arithmetic on values of the `byte`, `short`, and `char` types ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")), or for values of the `boolean` type; those operations are handled by instructions operating on type `int`. Integer and floating-point instructions also differ in their behavior on overflow and divide-by-zero. The arithmetic instructions are as follows:

*   Add: _iadd_, _ladd_, _fadd_, _dadd_.
    
*   Subtract: _isub_, _lsub_, _fsub_, _dsub_.
    
*   Multiply: _imul_, _lmul_, _fmul_, _dmul_.
    
*   Divide: _idiv_, _ldiv_, _fdiv_, _ddiv_.
    
*   Remainder: _irem_, _lrem_, _frem_, _drem_.
    
*   Negate: _ineg_, _lneg_, _fneg_, _dneg_.
    
*   Shift: _ishl_, _ishr_, _iushr_, _lshl_, _lshr_, _lushr_.
    
*   Bitwise OR: _ior_, _lor_.
    
*   Bitwise AND: _iand_, _land_.
    
*   Bitwise exclusive OR: _ixor_, _lxor_.
    
*   Local variable increment: _iinc_.
    
*   Comparison: _dcmpg_, _dcmpl_, _fcmpg_, _fcmpl_, _lcmp_.
    

The semantics of the Java programming language operators on integer and floating-point values (JLS §4.2.2, JLS §4.2.4) are directly supported by the semantics of the Java Virtual Machine instruction set.

The Java Virtual Machine does not indicate overflow during operations on integer data types. The only integer operations that can throw an exception are the integer divide instructions (_idiv_ and _ldiv_) and the integer remainder instructions (_irem_ and _lrem_), which throw an `ArithmeticException` if the divisor is zero.

Java Virtual Machine operations on floating-point numbers behave as specified in IEEE 754. In particular, the Java Virtual Machine requires full support of IEEE 754 _denormalized_ floating-point numbers and _gradual underflow_, which make it easier to prove desirable properties of particular numerical algorithms.

The Java Virtual Machine requires that floating-point arithmetic behave as if every floating-point operator rounded its floating-point result to the result precision. _Inexact_ results must be rounded to the representable value nearest to the infinitely precise result; if the two nearest representable values are equally near, the one having a least significant bit of zero is chosen. This is the IEEE 754 standard's default rounding mode, known as _round to nearest_ mode.

The Java Virtual Machine uses the IEEE 754 _round towards zero_ mode when converting a floating-point value to an integer. This results in the number being truncated; any bits of the significand that represent the fractional part of the operand value are discarded. Round towards zero mode chooses as its result the type's value closest to, but no greater in magnitude than, the infinitely precise result.

The Java Virtual Machine's floating-point operators do not throw run-time exceptions (not to be confused with IEEE 754 floating-point exceptions). An operation that overflows produces a signed infinity, an operation that underflows produces a denormalized value or a signed zero, and an operation that has no mathematically definite result produces NaN. All numeric operations with NaN as an operand produce NaN as a result.

Comparisons on values of type `long` (_lcmp_) perform a signed comparison. Comparisons on values of floating-point types (_dcmpg_, _dcmpl_, _fcmpg_, _fcmpl_) are performed using IEEE 754 nonsignaling comparisons.

### 2.11.4. Type Conversion Instructions

The type conversion instructions allow conversion between Java Virtual Machine numeric types. These may be used to implement explicit conversions in user code or to mitigate the lack of orthogonality in the instruction set of the Java Virtual Machine.

The Java Virtual Machine directly supports the following widening numeric conversions:

*   `int` to `long`, `float`, or `double`
    
*   `long` to `float` or `double`
    
*   `float` to `double`
    

The widening numeric conversion instructions are _i2l_, _i2f_, _i2d_, _l2f_, _l2d_, and _f2d_. The mnemonics for these opcodes are straightforward given the naming conventions for typed instructions and the punning use of 2 to mean "to." For instance, the _i2d_ instruction converts an `int` value to a `double`.

Most widening numeric conversions do not lose information about the overall magnitude of a numeric value. Indeed, conversions widening from `int` to `long` and `int` to `double` do not lose any information at all; the numeric value is preserved exactly. Conversions widening from `float` to `double` that are FP-strict ([§2.8.2](jvms-2.html#jvms-2.8.2 "2.8.2. Floating-Point Modes")) also preserve the numeric value exactly; only such conversions that are not FP-strict may lose information about the overall magnitude of the converted value.

Conversions from `int` to `float`, or from `long` to `float`, or from `long` to `double`, may lose _precision_, that is, may lose some of the least significant bits of the value; the resulting floating-point value is a correctly rounded version of the integer value, using IEEE 754 round to nearest mode.

Despite the fact that loss of precision may occur, widening numeric conversions never cause the Java Virtual Machine to throw a run-time exception (not to be confused with an IEEE 754 floating-point exception).

A widening numeric conversion of an `int` to a `long` simply sign-extends the two's-complement representation of the `int` value to fill the wider format. A widening numeric conversion of a `char` to an integral type zero-extends the representation of the `char` value to fill the wider format.

Note that widening numeric conversions do not exist from integral types `byte`, `char`, and `short` to type `int`. As noted in [§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine"), values of type `byte`, `char`, and `short` are internally widened to type `int`, making these conversions implicit.

The Java Virtual Machine also directly supports the following narrowing numeric conversions:

*   `int` to `byte`, `short`, or `char`
    
*   `long` to `int`
    
*   `float` to `int` or `long`
    
*   `double` to `int`, `long`, or `float`
    

The narrowing numeric conversion instructions are _i2b_, _i2c_, _i2s_, _l2i_, _f2i_, _f2l_, _d2i_, _d2l_, and _d2f_. A narrowing numeric conversion can result in a value of different sign, a different order of magnitude, or both; it may thereby lose precision.

A narrowing numeric conversion of an `int` or `long` to an integral type T simply discards all but the _n_ lowest-order bits, where _n_ is the number of bits used to represent type T. This may cause the resulting value not to have the same sign as the input value.

In a narrowing numeric conversion of a floating-point value to an integral type T, where T is either `int` or `long`, the floating-point value is converted as follows:

*   If the floating-point value is NaN, the result of the conversion is an `int` or `long` `0`.
    
*   Otherwise, if the floating-point value is not an infinity, the floating-point value is rounded to an integer value _V_ using IEEE 754 round towards zero mode. There are two cases:
    
    *   If T is `long` and this integer value can be represented as a `long`, then the result is the `long` value _V_.
        
    *   If T is of type `int` and this integer value can be represented as an `int`, then the result is the `int` value _V_.
        
    
*   Otherwise:
    
    *   Either the value must be too small (a negative value of large magnitude or negative infinity), and the result is the smallest representable value of type `int` or `long`.
        
    *   Or the value must be too large (a positive value of large magnitude or positive infinity), and the result is the largest representable value of type `int` or `long`.
        
    

A narrowing numeric conversion from `double` to `float` behaves in accordance with IEEE 754. The result is correctly rounded using IEEE 754 round to nearest mode. A value too small to be represented as a `float` is converted to a positive or negative zero of type `float`; a value too large to be represented as a `float` is converted to a positive or negative infinity. A `double` NaN is always converted to a `float` NaN.

Despite the fact that overflow, underflow, or loss of precision may occur, narrowing conversions among numeric types never cause the Java Virtual Machine to throw a run-time exception (not to be confused with an IEEE 754 floating-point exception).

### 2.11.5. Object Creation and Manipulation

Although both class instances and arrays are objects, the Java Virtual Machine creates and manipulates class instances and arrays using distinct sets of instructions:

*   Create a new class instance: _new_.
    
*   Create a new array: _newarray_, _anewarray_, _multianewarray_.
    
*   Access fields of classes (`static` fields, known as class variables) and fields of class instances (non-`static` fields, known as instance variables): _getstatic_, _putstatic_, _getfield_, _putfield_.
    
*   Load an array component onto the operand stack: _baload_, _caload_, _saload_, _iaload_, _laload_, _faload_, _daload_, _aaload_.
    
*   Store a value from the operand stack as an array component: _bastore_, _castore_, _sastore_, _iastore_, _lastore_, _fastore_, _dastore_, _aastore_.
    
*   Get the length of array: _arraylength_.
    
*   Check properties of class instances or arrays: _instanceof_, _checkcast_.
    

### 2.11.6. Operand Stack Management Instructions

A number of instructions are provided for the direct manipulation of the operand stack: _pop_, _pop2_, _dup_, _dup2_, _dup\_x1_, _dup2\_x1_, _dup\_x2_, _dup2\_x2_, _swap_.

### 2.11.7. Control Transfer Instructions

The control transfer instructions conditionally or unconditionally cause the Java Virtual Machine to continue execution with an instruction other than the one following the control transfer instruction. They are:

*   Conditional branch: _ifeq_, _ifne_, _iflt_, _ifle_, _ifgt_, _ifge_, _ifnull_, _ifnonnull_, _if\_icmpeq_, _if\_icmpne_, _if\_icmplt_, _if\_icmple_, _if\_icmpgt_ _if\_icmpge_, _if\_acmpeq_, _if\_acmpne_.
    
*   Compound conditional branch: _tableswitch_, _lookupswitch_.
    
*   Unconditional branch: _goto_, _goto\_w_, _jsr_, _jsr\_w_, _ret_.
    

The Java Virtual Machine has distinct sets of instructions that conditionally branch on comparison with data of `int` and `reference` types. It also has distinct conditional branch instructions that test for the null reference and thus it is not required to specify a concrete value for `null` ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")).

Conditional branches on comparisons between data of types `boolean`, `byte`, `char`, and `short` are performed using `int` comparison instructions ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")). A conditional branch on a comparison between data of types `long`, `float`, or `double` is initiated using an instruction that compares the data and produces an `int` result of the comparison ([§2.11.3](jvms-2.html#jvms-2.11.3 "2.11.3. Arithmetic Instructions")). A subsequent `int` comparison instruction tests this result and effects the conditional branch. Because of its emphasis on `int` comparisons, the Java Virtual Machine provides a rich complement of conditional branch instructions for type `int`.

All `int` conditional control transfer instructions perform signed comparisons.

### 2.11.8. Method Invocation and Return Instructions

The following five instructions invoke methods:

*   _invokevirtual_ invokes an instance method of an object, dispatching on the (virtual) type of the object. This is the normal method dispatch in the Java programming language.
    
*   _invokeinterface_ invokes an interface method, searching the methods implemented by the particular run-time object to find the appropriate method.
    
*   _invokespecial_ invokes an instance method requiring special handling, whether an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), a `private` method, or a superclass method.
    
*   _invokestatic_ invokes a class (`static`) method in a named class.
    
*   _invokedynamic_ invokes the method which is the target of the call site object bound to the _invokedynamic_ instruction. The call site object was bound to a specific lexical occurrence of the _invokedynamic_ instruction by the Java Virtual Machine as a result of running a bootstrap method before the first execution of the instruction. Therefore, each occurrence of an _invokedynamic_ instruction has a unique linkage state, unlike the other instructions which invoke methods.
    

The method return instructions, which are distinguished by return type, are _ireturn_ (used to return values of type `boolean`, `byte`, `char`, `short`, or `int`), _lreturn_, _freturn_, _dreturn_, and _areturn_. In addition, the _return_ instruction is used to return from methods declared to be void, instance initialization methods, and class or interface initialization methods.

### 2.11.9. Throwing Exceptions

An exception is thrown programmatically using the _athrow_ instruction. Exceptions can also be thrown by various Java Virtual Machine instructions if they detect an abnormal condition.

### 2.11.10. Synchronization
The Java Virtual Machine supports synchronization of both methods and sequences of instructions within a method by a single synchronization construct: the _monitor_.

Method-level synchronization is performed implicitly, as part of method invocation and return ([§2.11.8](jvms-2.html#jvms-2.11.8 "2.11.8. Method Invocation and Return Instructions")). A `synchronized` method is distinguished in the run-time constant pool's `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")) by the `ACC_SYNCHRONIZED` flag, which is checked by the method invocation instructions. When invoking a method for which `ACC_SYNCHRONIZED` is set, the executing thread enters a monitor, invokes the method itself, and exits the monitor whether the method invocation completes normally or abruptly. During the time the executing thread owns the monitor, no other thread may enter it. If an exception is thrown during invocation of the `synchronized` method and the `synchronized` method does not handle the exception, the monitor for the method is automatically exited before the exception is rethrown out of the `synchronized` method.

Synchronization of sequences of instructions is typically used to encode the `synchronized` block of the Java programming language. The Java Virtual Machine supplies the _monitorenter_ and _monitorexit_ instructions to support such language constructs. Proper implementation of `synchronized` blocks requires cooperation from a compiler targeting the Java Virtual Machine ([§3.14](jvms-3.html#jvms-3.14 "3.14. Synchronization")).

_Structured locking_ is the situation when, during a method invocation, every exit on a given monitor matches a preceding entry on that monitor. Since there is no assurance that all code submitted to the Java Virtual Machine will perform structured locking, implementations of the Java Virtual Machine are permitted but not required to enforce both of the following two rules guaranteeing structured locking. Let _T_ be a thread and _M_ be a monitor. Then:

1.  The number of monitor entries performed by _T_ on _M_ during a method invocation must equal the number of monitor exits performed by _T_ on _M_ during the method invocation whether the method invocation completes normally or abruptly.
    
2.  At no point during a method invocation may the number of monitor exits performed by _T_ on _M_ since the method invocation exceed the number of monitor entries performed by _T_ on _M_ since the method invocation.
    

Note that the monitor entry and exit automatically performed by the Java Virtual Machine when invoking a `synchronized` method are considered to occur during the calling method's invocation.

2.12. Class Libraries
---------------------

The Java Virtual Machine must provide sufficient support for the implementation of the class libraries of the Java SE platform. Some of the classes in these libraries cannot be implemented without the cooperation of the Java Virtual Machine.

Classes that might require special support from the Java Virtual Machine include those that support:

*   Reflection, such as the classes in the package `java.lang.reflect` and the class `Class`.
    
*   Loading and creation of a class or interface. The most obvious example is the class `ClassLoader`.
    
*   Linking and initialization of a class or interface. The example classes cited above fall into this category as well.
    
*   Security, such as the classes in the package `java.security` and other classes such as `SecurityManager`.
    
*   Multithreading, such as the class `Thread`.
    
*   Weak references, such as the classes in the package `java.lang.ref`.
    

The list above is meant to be illustrative rather than comprehensive. An exhaustive list of these classes or of the functionality they provide is beyond the scope of this specification. See the specifications of the Java SE platform class libraries for details.

2.13. Public Design, Private Implementation
-------------------------------------------

Thus far this specification has sketched the public view of the Java Virtual Machine: the `class` file format and the instruction set. These components are vital to the hardware-, operating system-, and implementation-independence of the Java Virtual Machine. The implementor may prefer to think of them as a means to securely communicate fragments of programs between hosts each implementing the Java SE platform, rather than as a blueprint to be followed exactly.

It is important to understand where the line between the public design and the private implementation lies. A Java Virtual Machine implementation must be able to read `class` files and must exactly implement the semantics of the Java Virtual Machine code therein. One way of doing this is to take this document as a specification and to implement that specification literally. But it is also perfectly feasible and desirable for the implementor to modify or optimize the implementation within the constraints of this specification. So long as the `class` file format can be read and the semantics of its code are maintained, the implementor may implement these semantics in any way. What is "under the hood" is the implementor's business, as long as the correct external interface is carefully maintained.

There are some exceptions: debuggers, profilers, and just-in-time code generators can each require access to elements of the Java Virtual Machine that are normally considered to be “under the hood.” Where appropriate, Oracle works with other Java Virtual Machine implementors and with tool vendors to develop common interfaces to the Java Virtual Machine for use by such tools, and to promote those interfaces across the industry.

The implementor can use this flexibility to tailor Java Virtual Machine implementations for high performance, low memory use, or portability. What makes sense in a given implementation depends on the goals of that implementation. The range of implementation options includes the following:

*   Translating Java Virtual Machine code at load-time or during execution into the instruction set of another virtual machine.
    
*   Translating Java Virtual Machine code at load-time or during execution into the native instruction set of the host CPU (sometimes referred to as _just-in-time_, or _JIT_, code generation).
    

The existence of a precisely defined virtual machine and object file format need not significantly restrict the creativity of the implementor. The Java Virtual Machine is designed to support many different implementations, providing new and interesting solutions while retaining compatibility between implementations.


📜 Chapter 3. Compiling for the Java Virtual Machine
-------------------------------------------------

**Table of Contents**
[3.1. Format of Examples](jvms-3.html#jvms-3.1)
[3.2. Use of Constants, Local Variables, and Control Constructs](jvms-3.html#jvms-3.2)
[3.3. Arithmetic](jvms-3.html#jvms-3.3)
[3.4. Accessing the Run-Time Constant Pool](jvms-3.html#jvms-3.4)
[3.5. More Control Examples](jvms-3.html#jvms-3.5)
[3.6. Receiving Arguments](jvms-3.html#jvms-3.6)
[3.7. Invoking Methods](jvms-3.html#jvms-3.7)
[3.8. Working with Class Instances](jvms-3.html#jvms-3.8)
[3.9. Arrays](jvms-3.html#jvms-3.9)
[3.10. Compiling Switches](jvms-3.html#jvms-3.10)
[3.11. Operations on the Operand Stack](jvms-3.html#jvms-3.11)
[3.12. Throwing and Handling Exceptions](jvms-3.html#jvms-3.12)
[3.13. Compiling `finally`](jvms-3.html#jvms-3.13)
[3.14. Synchronization](jvms-3.html#jvms-3.14)
[3.15. Annotations](jvms-3.html#jvms-3.15)

The Java Virtual Machine machine is designed to support the Java programming language. Oracle's JDK software contains a compiler from source code written in the Java programming language to the instruction set of the Java Virtual Machine, and a run-time system that implements the Java Virtual Machine itself. Understanding how one compiler utilizes the Java Virtual Machine is useful to the prospective compiler writer, as well as to one trying to understand the Java Virtual Machine itself. The numbered sections in this chapter are not normative.

Note that the term "compiler" is sometimes used when referring to a translator from the instruction set of a Java Virtual Machine to the instruction set of a specific CPU. One example of such a translator is a just-in-time (JIT) code generator, which generates platform-specific instructions only after Java Virtual Machine code has been loaded. This chapter does not address issues associated with code generation, only those associated with compiling source code written in the Java programming language to Java Virtual Machine instructions.

3.1. Format of Examples
-----------------------

This chapter consists mainly of examples of source code together with annotated listings of the Java Virtual Machine code that the `javac` compiler in Oracle’s JDK release 1.0.2 generates for the examples. The Java Virtual Machine code is written in the informal “virtual machine assembly language” output by Oracle's `javap` utility, distributed with the JDK release. You can use `javap` to generate additional examples of compiled methods.

The format of the examples should be familiar to anyone who has read assembly code. Each instruction takes the form:

<index> <opcode> \[ <operand1> \[ <operand2>... \]\] \[<comment>\]

The `<index>` is the index of the opcode of the instruction in the array that contains the bytes of Java Virtual Machine code for this method. Alternatively, the `<index>` may be thought of as a byte offset from the beginning of the method. The `<opcode>` is the mnemonic for the instruction's opcode, and the zero or more `<operandN>` are the operands of the instruction. The optional `<comment>` is given in end-of-line comment syntax:

8   _bipush 100_     // Push int constant `100`

Some of the material in the comments is emitted by `javap`; the rest is supplied by the authors. The `<index>` prefacing each instruction may be used as the target of a control transfer instruction. For instance, a `_goto 8_` instruction transfers control to the instruction at index 8. Note that the actual operands of Java Virtual Machine control transfer instructions are offsets from the addresses of the opcodes of those instructions; these operands are displayed by `javap` (and are shown in this chapter) as more easily read offsets into their methods.

We preface an operand representing a run-time constant pool index with a hash sign and follow the instruction by a comment identifying the run-time constant pool item referenced, as in:

10  _ldc #1_         // Push `float` constant `100.0`

or:

9   _invokevirtual #4_    // Method `Example.addTwo(II)I`

For the purposes of this chapter, we do not worry about specifying details such as operand sizes.

3.2. Use of Constants, Local Variables, and Control Constructs
--------------------------------------------------------------

Java Virtual Machine code exhibits a set of general characteristics imposed by the Java Virtual Machine's design and use of types. In the first example we encounter many of these, and we consider them in some detail.

The `spin` method simply spins around an empty for loop 100 times:

void spin() {
    int i;
    for (i = 0; i < 100; i++) {
        ;    // Loop body is empty
    }
}

A compiler might compile `spin` to:

0   _iconst\_0_       // Push int constant 0
1   _istore\_1_       // Store into local variable 1 (i=0)
2   _goto 8_         // First time through don't increment
5   _iinc 1 1_       // Increment local variable 1 by 1 (i++)
8   _iload\_1_        // Push local variable 1 (i)
9   _bipush 100_     // Push int constant 100
11  _if\_icmplt 5_    // Compare and loop if less than (i < 100)
14  _return_         // Return void when done

The Java Virtual Machine is stack-oriented, with most operations taking one or more operands from the operand stack of the Java Virtual Machine's current frame or pushing results back onto the operand stack. A new frame is created each time a method is invoked, and with it is created a new operand stack and set of local variables for use by that method ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). At any one point of the computation, there are thus likely to be many frames and equally many operand stacks per thread of control, corresponding to many nested method invocations. Only the operand stack in the current frame is active.

The instruction set of the Java Virtual Machine distinguishes operand types by using distinct bytecodes for operations on its various data types. The method `spin` operates only on values of type `int`. The instructions in its compiled code chosen to operate on typed data (_iconst\_0_, _istore\_1_, _iinc_, _iload\_1_, _if\_icmplt_) are all specialized for type `int`.

The two constants in `spin`, `0` and `100`, are pushed onto the operand stack using two different instructions. The `0` is pushed using an _iconst\_0_ instruction, one of the family of _iconst\_<i>_ instructions. The `100` is pushed using a _bipush_ instruction, which fetches the value it pushes as an immediate operand.

The Java Virtual Machine frequently takes advantage of the likelihood of certain operands (`int` constants _\-1_, _0_, _1_, _2_, _3_, _4_ and _5_ in the case of the _iconst\_<i>_ instructions) by making those operands implicit in the opcode. Because the _iconst\_0_ instruction knows it is going to push an `int` `0`, _iconst\_0_ does not need to store an operand to tell it what value to push, nor does it need to fetch or decode an operand. Compiling the push of `0` as _bipush_ _0_ would have been correct, but would have made the compiled code for `spin` one byte longer. A simple virtual machine would have also spent additional time fetching and decoding the explicit operand each time around the loop. Use of implicit operands makes compiled code more compact and efficient.

The `int` `i` in `spin` is stored as Java Virtual Machine local variable _1_. Because most Java Virtual Machine instructions operate on values popped from the operand stack rather than directly on local variables, instructions that transfer values between local variables and the operand stack are common in code compiled for the Java Virtual Machine. These operations also have special support in the instruction set. In `spin`, values are transferred to and from local variables using the _istore\_1_ and _iload\_1_ instructions, each of which implicitly operates on local variable _1_. The _istore\_1_ instruction pops an `int` from the operand stack and stores it in local variable _1_. The _iload\_1_ instruction pushes the value in local variable _1_ on to the operand stack.

The use (and reuse) of local variables is the responsibility of the compiler writer. The specialized load and store instructions should encourage the compiler writer to reuse local variables as much as is feasible. The resulting code is faster, more compact, and uses less space in the frame.

Certain very frequent operations on local variables are catered to specially by the Java Virtual Machine. The _iinc_ instruction increments the contents of a local variable by a one-byte signed value. The _iinc_ instruction in `spin` increments the first local variable (its first operand) by _1_ (its second operand). The _iinc_ instruction is very handy when implementing looping constructs.

The `for` loop of `spin` is accomplished mainly by these instructions:

5   _iinc 1 1_       // Increment local variable 1 by 1 (i++)
8   _iload\_1_        // Push local variable 1 (i)
9   _bipush 100_     // Push int constant 100
11  _if\_icmplt 5_    // Compare and loop if less than (i < 100)

The _bipush_ instruction pushes the value _100_ onto the operand stack as an `int`, then the _if\_icmplt_ instruction pops that value off the operand stack and compares it against _i_. If the comparison succeeds (the variable `i` is less than `100`), control is transferred to index _5_ and the next iteration of the `for` loop begins. Otherwise, control passes to the instruction following the _if\_icmplt_.

If the `spin` example had used a data type other than `int` for the loop counter, the compiled code would necessarily change to reflect the different data type. For instance, if instead of an `int` the `spin` example uses a `double`, as shown:

void dspin() {
    double i;
    for (i = 0.0; i < 100.0; i++) {
        ;    // Loop body is empty
    }
}

the compiled code is:

Method void dspin()
0   _dconst\_0_       // Push double constant 0.0
1   _dstore\_1_       // Store into local variables 1 and 2
2   _goto 9_         // First time through don't increment
5   _dload\_1_        // Push local variables 1 and 2 
6   _dconst\_1_       // Push double constant 1.0 
7   _dadd_           // Add; there is no dinc instruction
8   _dstore\_1_       // Store result in local variables 1 and 2
9   _dload\_1_        // Push local variables 1 and 2 
10  _ldc2\_w #4_      // Push double constant 100.0 
13  _dcmpg_          // There is no if\_dcmplt instruction
14  _iflt 5_         // Compare and loop if less than (i < 100.0)
17  _return_         // Return void when done

The instructions that operate on typed data are now specialized for type `double`. (The _ldc2\_w_ instruction will be discussed later in this chapter.)

Recall that `double` values occupy two local variables, although they are only accessed using the lesser index of the two local variables. This is also the case for values of type `long`. Again for example,

double doubleLocals(double d1, double d2) {
    return d1 + d2;
}

becomes

Method double doubleLocals(double,double)
0   _dload\_1_       // First argument in local variables 1 and 2
1   _dload\_3_       // Second argument in local variables 3 and 4
2   _dadd_
3   _dreturn_

Note that local variables of the local variable pairs used to store `double` values in `doubleLocals` must never be manipulated individually.

The Java Virtual Machine's opcode size of 1 byte results in its compiled code being very compact. However, 1-byte opcodes also mean that the Java Virtual Machine instruction set must stay small. As a compromise, the Java Virtual Machine does not provide equal support for all data types: it is not completely orthogonal ([Table 2.11.1-A](jvms-2.html#jvms-2.11.1-220 "Table 2.11.1-A. Type support in the Java Virtual Machine instruction set")).

For example, the comparison of values of type `int` in the `for` statement of example `spin` can be implemented using a single _if\_icmplt_ instruction; however, there is no single instruction in the Java Virtual Machine instruction set that performs a conditional branch on values of type `double`. Thus, `dspin` must implement its comparison of values of type `double` using a _dcmpg_ instruction followed by an _iflt_ instruction.

The Java Virtual Machine provides the most direct support for data of type `int`. This is partly in anticipation of efficient implementations of the Java Virtual Machine's operand stacks and local variable arrays. It is also motivated by the frequency of `int` data in typical programs. Other integral types have less direct support. There are no `byte`, `char`, or `short` versions of the store, load, or add instructions, for instance. Here is the `spin` example written using a `short`:

void sspin() {
    short i;
    for (i = 0; i < 100; i++) {
        ;    // Loop body is empty
    }
}

It must be compiled for the Java Virtual Machine, as follows, using instructions operating on another type, most likely `int`, converting between `short` and `int` values as necessary to ensure that the results of operations on `short` data stay within the appropriate range:

Method void sspin()
0   _iconst\_0_
1   _istore\_1_
2   _goto 10_
5   _iload\_1_        // The short is treated as though an int
6   _iconst\_1_
7   _iadd_
8   _i2s_            // Truncate int to short
9   _istore\_1_
10  _iload\_1_
11  _bipush 100_
13  _if\_icmplt 5_
16  _return_

The lack of direct support for `byte`, `char`, and `short` types in the Java Virtual Machine is not particularly painful, because values of those types are internally promoted to `int` (`byte` and `short` are sign-extended to `int`, `char` is zero-extended). Operations on `byte`, `char`, and `short` data can thus be done using `int` instructions. The only additional cost is that of truncating the values of `int` operations to valid ranges.

The `long` and floating-point types have an intermediate level of support in the Java Virtual Machine, lacking only the full complement of conditional control transfer instructions.

3.3. Arithmetic
---------------

The Java Virtual Machine generally does arithmetic on its operand stack. (The exception is the _iinc_ instruction, which directly increments the value of a local variable.) For instance, the `align2grain` method aligns an `int` value to a given power of 2:

int align2grain(int i, int grain) {
    return ((i + grain-1) & ~(grain-1));
}

Operands for arithmetic operations are popped from the operand stack, and the results of operations are pushed back onto the operand stack. Results of arithmetic subcomputations can thus be made available as operands of their nesting computation. For instance, the calculation of `~(grain-1)` is handled by these instructions:

5   _iload\_2_        // Push grain
6   _iconst\_1_       // Push int constant 1
7   _isub_           // Subtract; push result
8   _iconst\_m1_      // Push int constant -1
9   _ixor_           // Do XOR; push result

First `grain-1` is calculated using the contents of local variable _2_ and an immediate `int` value `1`. These operands are popped from the operand stack and their difference pushed back onto the operand stack. The difference is thus immediately available for use as one operand of the _ixor_ instruction. (Recall that `~x == -1^x`.) Similarly, the result of the _ixor_ instruction becomes an operand for the subsequent _iand_ instruction.

The code for the entire method follows:

Method int align2grain(int,int)
0   _iload\_1_
1   _iload\_2_
2   _iadd_
3   _iconst\_1_
4   _isub_
5   _iload\_2_
6   _iconst\_1_
7   _isub_
8   _iconst\_m1_
9   _ixor_
10  _iand_
11  _ireturn_

3.4. Accessing the Run-Time Constant Pool
-----------------------------------------

Many numeric constants, as well as objects, fields, and methods, are accessed via the run-time constant pool of the current class. Object access is considered later ([§3.8](jvms-3.html#jvms-3.8 "3.8. Working with Class Instances")). Data of types `int`, `long`, `float`, and `double`, as well as references to instances of class `String`, are managed using the _ldc_, _ldc\_w_, and _ldc2\_w_ instructions.

The _ldc_ and _ldc\_w_ instructions are used to access values in the run-time constant pool (including instances of class `String`) of types other than `double` and `long`. The _ldc\_w_ instruction is used in place of _ldc_ only when there is a large number of run-time constant pool items and a larger index is needed to access an item. The _ldc2\_w_ instruction is used to access all values of types `double` and `long`; there is no non-wide variant.

Integral constants of types `byte`, `char`, or `short`, as well as small `int` values, may be compiled using the _bipush_, _sipush_, or _iconst\_<i>_ instructions ([§3.2](jvms-3.html#jvms-3.2 "3.2. Use of Constants, Local Variables, and Control Constructs")). Certain small floating-point constants may be compiled using the _fconst\_<f>_ and _dconst\_<d>_ instructions.

In all of these cases, compilation is straightforward. For instance, the constants for:

void useManyNumeric() {
    int i = 100;
    int j = 1000000;
    long l1 = 1;
    long l2 = 0xffffffff;
    double d = 2.2;
    ...do some calculations...
}

are set up as follows:

Method void useManyNumeric()
0   _bipush 100_   // Push small int constant with bipush
2   _istore\_1_
3   _ldc #1_       // Push large int constant (1000000) with ldc
5   _istore\_2_
6   _lconst\_1_     // A tiny long value uses small fast lconst\_1
7   _lstore\_3_
8   _ldc2\_w #6_    // Push long 0xffffffff (that is, an int -1)
        // Any long constant value can be pushed with ldc2\_w
11  _lstore 5_
13  _ldc2\_w #8_    // Push double constant 2.200000
        // Uncommon double values are also pushed with ldc2\_w
16  _dstore 7_
...do those calculations...

3.5. More Control Examples
--------------------------

Compilation of `for` statements was shown in an earlier section ([§3.2](jvms-3.html#jvms-3.2 "3.2. Use of Constants, Local Variables, and Control Constructs")). Most of the Java programming language's other control constructs (`if-then-else`, `do`, `while`, `break`, and `continue`) are also compiled in the obvious ways. The compilation of `switch` statements is handled in a separate section ([§3.10](jvms-3.html#jvms-3.10 "3.10. Compiling Switches")), as are the compilation of exceptions ([§3.12](jvms-3.html#jvms-3.12 "3.12. Throwing and Handling Exceptions")) and the compilation of `finally` clauses ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally")).

As a further example, a `while` loop is compiled in an obvious way, although the specific control transfer instructions made available by the Java Virtual Machine vary by data type. As usual, there is more support for data of type `int`, for example:

void whileInt() {
    int i = 0;
    while (i < 100) {
        i++;
    }
}

is compiled to:

Method void whileInt()
0   _iconst\_0_
1   _istore\_1_
2   _goto 8_
5   _iinc 1 1_
8   _iload\_1_
9   _bipush 100_
11  _if\_icmplt 5_
14  _return_

Note that the test of the `while` statement (implemented using the _if\_icmplt_ instruction) is at the bottom of the Java Virtual Machine code for the loop. (This was also the case in the `spin` examples earlier.) The test being at the bottom of the loop forces the use of a _goto_ instruction to get to the test prior to the first iteration of the loop. If that test fails, and the loop body is never entered, this extra instruction is wasted. However, `while` loops are typically used when their body is expected to be run, often for many iterations. For subsequent iterations, putting the test at the bottom of the loop saves a Java Virtual Machine instruction each time around the loop: if the test were at the top of the loop, the loop body would need a trailing _goto_ instruction to get back to the top.

Control constructs involving other data types are compiled in similar ways, but must use the instructions available for those data types. This leads to somewhat less efficient code because more Java Virtual Machine instructions are needed, for example:

void whileDouble() {
    double i = 0.0;
    while (i < 100.1) {
        i++;
    }
}

is compiled to:

Method void whileDouble()
0   _dconst\_0_
1   _dstore\_1_
2   _goto 9_
5   _dload\_1_
6   _dconst\_1_
7   _dadd_
8   _dstore\_1_
9   _dload\_1_
10  _ldc2\_w #4_      // Push double constant 100.1
13  _dcmpg_          // To compare and branch we have to use...
14  _iflt 5_         // ...two instructions
17  _return_

Each floating-point type has two comparison instructions: _fcmpl_ and _fcmpg_ for type `float`, and _dcmpl_ and _dcmpg_ for type `double`. The variants differ only in their treatment of NaN. NaN is unordered ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")), so all floating-point comparisons fail if either of their operands is NaN. The compiler chooses the variant of the comparison instruction for the appropriate type that produces the same result whether the comparison fails on non-NaN values or encounters a NaN. For instance:

int lessThan100(double d) {
    if (d < 100.0) {
        return 1;				
    } else {
        return -1;				
    }
}

compiles to:

Method int lessThan100(double)
0   _dload\_1_
1   _ldc2\_w #4_      // Push double constant 100.0
4   _dcmpg_          // Push 1 if d is NaN or d > 100.0;
                   // push 0 if d == 100.0
5   _ifge 10_        // Branch on 0 or 1
8   _iconst\_1_
9   _ireturn_
10  _iconst\_m1_
11  _ireturn_

If `d` is not NaN and is less than `100.0`, the _dcmpg_ instruction pushes an `int` _\-1_ onto the operand stack, and the _ifge_ instruction does not branch. Whether `d` is greater than `100.0` or is NaN, the _dcmpg_ instruction pushes an `int` _1_ onto the operand stack, and the _ifge_ branches. If `d` is equal to `100.0`, the _dcmpg_ instruction pushes an `int` _0_ onto the operand stack, and the _ifge_ branches.

The _dcmpl_ instruction achieves the same effect if the comparison is reversed:

int greaterThan100(double d) {
    if (d > 100.0) {
        return 1;			
    } else {
        return -1;			
    }
}

becomes:

Method int greaterThan100(double)
0   _dload\_1_
1   _ldc2\_w #4_      // Push double constant 100.0
4   _dcmpl_          // Push -1 if d is NaN or d < 100.0;
                   // push 0 if d == 100.0
5   _ifle 10_        // Branch on 0 or -1
8   _iconst\_1_
9   _ireturn_
10  _iconst\_m1_
11  _ireturn_

Once again, whether the comparison fails on a non-NaN value or because it is passed a NaN, the _dcmpl_ instruction pushes an `int` value onto the operand stack that causes the _ifle_ to branch. If both of the _dcmp_ instructions did not exist, one of the example methods would have had to do more work to detect NaN.

3.6. Receiving Arguments
------------------------

If _n_ arguments are passed to an instance method, they are received, by convention, in the local variables numbered _1_ through _n_ of the frame created for the new method invocation. The arguments are received in the order they were passed. For example:

int addTwo(int i, int j) {
    return i + j;
}

compiles to:

Method int addTwo(int,int)
0   _iload\_1_        // Push value of local variable 1 (i)
1   _iload\_2_        // Push value of local variable 2 (j)
2   _iadd_           // Add; leave int result on operand stack
3   _ireturn_        // Return int result

By convention, an instance method is passed a `reference` to its instance in local variable _0_. In the Java programming language the instance is accessible via the `this` keyword.

Class (`static`) methods do not have an instance, so for them this use of local variable _0_ is unnecessary. A class method starts using local variables at index _0_. If the `addTwo` method were a class method, its arguments would be passed in a similar way to the first version:

static int addTwoStatic(int i, int j) {
    return i + j;
}

compiles to:

Method int addTwoStatic(int,int)
0   _iload\_0_
1   _iload\_1_
2   _iadd_
3   _ireturn_

The only difference is that the method arguments appear starting in local variable _0_ rather than _1_.

3.7. Invoking Methods
---------------------

The normal method invocation for a instance method dispatches on the run-time type of the object. (They are virtual, in C++ terms.) Such an invocation is implemented using the _invokevirtual_ instruction, which takes as its argument an index to a run-time constant pool entry giving the internal form of the binary name of the class type of the object, the name of the method to invoke, and that method's descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")). To invoke the `addTwo` method, defined earlier as an instance method, we might write:

int add12and13() {
    return addTwo(12, 13);
}

This compiles to:

Method int add12and13()
0   _aload\_0_             // Push local variable 0 (this)
1   _bipush 12_           // Push int constant 12
3   _bipush 13_           // Push int constant 13
5   _invokevirtual #4_    // Method Example.addtwo(II)I
8   _ireturn_             // Return int on top of operand stack;
                        // it is the int result of addTwo()

The invocation is set up by first pushing a `reference` to the current instance, `this`, on to the operand stack. The method invocation's arguments, `int` values `12` and `13`, are then pushed. When the frame for the `addTwo` method is created, the arguments passed to the method become the initial values of the new frame's local variables. That is, the `reference` for `this` and the two arguments, pushed onto the operand stack by the invoker, will become the initial values of local variables _0_, _1_, and _2_ of the invoked method.

Finally, `addTwo` is invoked. When it returns, its `int` return value is pushed onto the operand stack of the frame of the invoker, the `add12and13` method. The return value is thus put in place to be immediately returned to the invoker of `add12and13`.

The return from `add12and13` is handled by the _ireturn_ instruction of `add12and13`. The _ireturn_ instruction takes the `int` value returned by `addTwo`, on the operand stack of the current frame, and pushes it onto the operand stack of the frame of the invoker. It then returns control to the invoker, making the invoker's frame current. The Java Virtual Machine provides distinct return instructions for many of its numeric and `reference` data types, as well as a _return_ instruction for methods with no return value. The same set of return instructions is used for all varieties of method invocations.

The operand of the _invokevirtual_ instruction (in the example, the run-time constant pool index _#4_) is not the offset of the method in the class instance. The compiler does not know the internal layout of a class instance. Instead, it generates symbolic references to the methods of an instance, which are stored in the run-time constant pool. Those run-time constant pool items are resolved at run-time to determine the actual method location. The same is true for all other Java Virtual Machine instructions that access class instances.

Invoking `addTwoStatic`, a class (`static`) variant of `addTwo`, is similar, as shown:

int add12and13() {
    return addTwoStatic(12, 13);
}

although a different Java Virtual Machine method invocation instruction is used:

Method int add12and13()
0   _bipush 12_
2   _bipush 13_
4   _invokestatic #3_     // Method Example.addTwoStatic(II)I
7   _ireturn_

Compiling an invocation of a class (`static`) method is very much like compiling an invocation of an instance method, except this is not passed by the invoker. The method arguments will thus be received beginning with local variable _0_ ([§3.6](jvms-3.html#jvms-3.6 "3.6. Receiving Arguments")). The _invokestatic_ instruction is always used to invoke class methods.

The _invokespecial_ instruction must be used to invoke instance initialization methods ([§3.8](jvms-3.html#jvms-3.8 "3.8. Working with Class Instances")). It is also used when invoking methods in the superclass (`super`) and when invoking `private` methods. For instance, given classes `Near` and `Far` declared as:

class Near {
    int it;
    public int getItNear() {
        return getIt();
    }
    private int getIt() {
        return it;
    }
}

class Far extends Near {
    int getItFar() {
        return super.getItNear();
    }
}

the method `Near.getItNear` (which invokes a `private` method) becomes:

Method int getItNear()
0   _aload\_0_
1   _invokespecial #5_    // Method Near.getIt()I
4   _ireturn_

The method `Far.getItFar` (which invokes a superclass method) becomes:

Method int getItFar()
0   _aload\_0_
1   _invokespecial #4_    // Method Near.getItNear()I
4   _ireturn_

Note that methods called using the _invokespecial_ instruction always pass `this` to the invoked method as its first argument. As usual, it is received in local variable _0_.

To invoke the target of a method handle, a compiler must form a method descriptor that records the actual argument and return types. A compiler may not perform method invocation conversions on the arguments; instead, it must push them on the stack according to their own unconverted types. The compiler arranges for a `reference` to the method handle object to be pushed on the stack before the arguments, as usual. The compiler emits an _invokevirtual_ instruction that references a descriptor which describes the argument and return types. By special arrangement with method resolution ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")), an _invokevirtual_ instruction which invokes the `invokeExact` or `invoke` methods of `java.lang.invoke.MethodHandle` will always link, provided the method descriptor is syntactically well-formed and the types named in the descriptor can be resolved.

3.8. Working with Class Instances
---------------------------------

Java Virtual Machine class instances are created using the Java Virtual Machine's _new_ instruction. Recall that at the level of the Java Virtual Machine, a constructor appears as a method with the compiler-supplied name `<init>`. This specially named method is known as the instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")). Multiple instance initialization methods, corresponding to multiple constructors, may exist for a given class. Once the class instance has been created and its instance variables, including those of the class and all of its superclasses, have been initialized to their default values, an instance initialization method of the new class instance is invoked. For example:

Object create() {
    return new Object();
}

compiles to:

Method java.lang.Object create()
0   _new #1_              // Class java.lang.Object
3   _dup_
4   _invokespecial #4_    // Method java.lang.Object.`<init>`()V
7   _areturn_

Class instances are passed and returned (as `reference` types) very much like numeric values, although type `reference` has its own complement of instructions, for example:

int i;                                  // An instance variable
MyObj example() {
    MyObj o = new MyObj();
    return silly(o);
}
MyObj silly(MyObj o) {
    if (o != null) {
        return o;
    } else {
        return o;
    }
}

becomes:

Method MyObj example()
0   _new #2_              // Class MyObj
3   _dup_
4   _invokespecial #5_    // Method MyObj.`<init>`()V
7   _astore\_1_
8   _aload\_0_
9   _aload\_1_
10  _invokevirtual #4_    // Method Example.silly(LMyObj;)LMyObj;
13  _areturn_

Method MyObj silly(MyObj)
0   _aload\_1_
1   _ifnull 6_
4   _aload\_1_
5   _areturn_
6   _aload\_1_
7   _areturn_

The fields of a class instance (instance variables) are accessed using the _getfield_ and _putfield_ instructions. If `i` is an instance variable of type `int`, the methods `setIt` and `getIt`, defined as:

void setIt(int value) {
    i = value;
}
int getIt() {
    return i;
}

become:

Method void setIt(int)
0   _aload\_0_
1   _iload\_1_
2   _putfield #4_    // Field Example.i I
5   _return_

Method int getIt()
0   _aload\_0_
1   _getfield #4_    // Field Example.i I
4   _ireturn_

As with the operands of method invocation instructions, the operands of the _putfield_ and _getfield_ instructions (the run-time constant pool index _#4_) are not the offsets of the fields in the class instance. The compiler generates symbolic references to the fields of an instance, which are stored in the run-time constant pool. Those run-time constant pool items are resolved at run-time to determine the location of the field within the referenced object.

3.9. Arrays
-----------

Java Virtual Machine arrays are also objects. Arrays are created and manipulated using a distinct set of instructions. The _newarray_ instruction is used to create an array of a numeric type. The code:

void createBuffer() {
    int buffer\[\];
    int bufsz = 100;
    int value = 12;
    buffer = new int\[bufsz\];
    buffer\[10\] = value;
    value = buffer\[11\];
}

might be compiled to:

Method void createBuffer()
0   _bipush 100_     // Push int constant 100 (bufsz)
2   _istore\_2_       // Store bufsz in local variable 2
3   _bipush 12_      // Push int constant 12 (value)
5   _istore\_3_       // Store value in local variable 3
6   _iload\_2_        // Push bufsz...
7   _newarray int_   // ...and create new int array of that length
9   _astore\_1_       // Store new array in buffer
10  _aload\_1_        // Push buffer
11  _bipush 10_      // Push int constant 10
13  _iload\_3_        // Push value
14  _iastore_        // Store value at buffer\[10\]
15  _aload\_1_        // Push buffer
16  _bipush 11_      // Push int constant 11
18  _iaload_         // Push value at buffer\[11\]...
19  _istore\_3_       // ...and store it in value
20  _return_

The _anewarray_ instruction is used to create a one-dimensional array of object references, for example:

void createThreadArray() {
    Thread threads\[\];
    int count = 10;
    threads = new Thread\[count\];
    threads\[0\] = new Thread();
}

becomes:

Method void createThreadArray()
0   _bipush 10_           // Push int constant 10
2   _istore\_2_            // Initialize count to that
3   _iload\_2_             // Push count, used by anewarray
4   _anewarray class #1_  // Create new array of class Thread
7   _astore\_1_            // Store new array in threads
8   _aload\_1_             // Push value of threads
9   _iconst\_0_            // Push int constant 0
10  _new #1_              // Create instance of class Thread
13  _dup_                 // Make duplicate reference...
14  _invokespecial #5_    // ...for Thread's constructor
                        // Method java.lang.Thread.`<init>`()V
17  _aastore_             // Store new Thread in array at 0
18  _return_

The _anewarray_ instruction can also be used to create the first dimension of a multidimensional array. Alternatively, the _multianewarray_ instruction can be used to create several dimensions at once. For example, the three-dimensional array:

int\[\]\[\]\[\] create3DArray() {
    int grid\[\]\[\]\[\];
    grid = new int\[10\]\[5\]\[\];
    return grid;
}

is created by:

Method int create3DArray()\[\]\[\]\[\]
0   _bipush 10_                // Push int 10 (dimension one)
2   _iconst\_5_                 // Push int 5 (dimension two)
3   _multianewarray #1 dim #2_ // Class \[\[\[I, a three-dimensional
                             // int array; only create the
                             // first two dimensions
7   _astore\_1_                 // Store new array...
8   _aload\_1_                  // ...then prepare to return it
9   _areturn_

The first operand of the _multianewarray_ instruction is the run-time constant pool index to the array class type to be created. The second is the number of dimensions of that array type to actually create. The _multianewarray_ instruction can be used to create all the dimensions of the type, as the code for `create3DArray` shows. Note that the multidimensional array is just an object and so is loaded and returned by an _aload\_1_ and _areturn_ instruction, respectively. For information about array class names, see [§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure").

All arrays have associated lengths, which are accessed via the _arraylength_ instruction.

3.10. Compiling Switches
------------------------

Compilation of `switch` statements uses the _tableswitch_ and _lookupswitch_ instructions. The _tableswitch_ instruction is used when the cases of the `switch` can be efficiently represented as indices into a table of target offsets. The `default` target of the `switch` is used if the value of the expression of the `switch` falls outside the range of valid indices. For instance:

int chooseNear(int i) {
    switch (i) {
        case 0:  return  0;
        case 1:  return  1;
        case 2:  return  2;
        default: return -1;
    }
}

compiles to:

Method int chooseNear(int)
0   _iload\_1_             // Push local variable 1 (argument i)
1   _tableswitch 0 to 2:_ // Valid indices are 0 through 2
      _0: 28_             // If i is 0, continue at 28
      _1: 30_             // If i is 1, continue at 30
      _2: 32_             // If i is 2, continue at 32
      _default:34_        // Otherwise, continue at 34
28  _iconst\_0_            // i was 0; push int constant 0...
29  _ireturn_             // ...and return it
30  _iconst\_1_            // i was 1; push int constant 1...
31  _ireturn_             // ...and return it
32  _iconst\_2_            // i was 2; push int constant 2...
33  _ireturn_             // ...and return it
34  _iconst\_m1_           // otherwise push int constant -1...
35  _ireturn_             // ...and return it

The Java Virtual Machine's _tableswitch_ and _lookupswitch_ instructions operate only on `int` data. Because operations on `byte`, `char`, or `short` values are internally promoted to `int`, a `switch` whose expression evaluates to one of those types is compiled as though it evaluated to type `int`. If the `chooseNear` method had been written using type `short`, the same Java Virtual Machine instructions would have been generated as when using type `int`. Other numeric types must be narrowed to type `int` for use in a `switch`.

Where the cases of the `switch` are sparse, the table representation of the _tableswitch_ instruction becomes inefficient in terms of space. The _lookupswitch_ instruction may be used instead. The _lookupswitch_ instruction pairs `int` keys (the values of the `case` labels) with target offsets in a table. When a _lookupswitch_ instruction is executed, the value of the expression of the `switch` is compared against the keys in the table. If one of the keys matches the value of the expression, execution continues at the associated target offset. If no key matches, execution continues at the `default` target. For instance, the compiled code for:

int chooseFar(int i) {
    switch (i) {
        case -100: return -1;
        case 0:    return  0;
        case 100:  return  1;
        default:   return -1;
    }
}

looks just like the code for `chooseNear`, except for the _lookupswitch_ instruction:

Method int chooseFar(int)
0   _iload\_1_
1   _lookupswitch 3:_
         _\-100: 36_
            _0: 38_
          _100: 40_
      _default: 42_
36  _iconst\_m1_
37  _ireturn_
38  _iconst\_0_
39  _ireturn_
40  _iconst\_1_
41  _ireturn_
42  _iconst\_m1_
43  _ireturn_

The Java Virtual Machine specifies that the table of the _lookupswitch_ instruction must be sorted by key so that implementations may use searches more efficient than a linear scan. Even so, the _lookupswitch_ instruction must search its keys for a match rather than simply perform a bounds check and index into a table like _tableswitch_. Thus, a _tableswitch_ instruction is probably more efficient than a _lookupswitch_ where space considerations permit a choice.

3.11. Operations on the Operand Stack
-------------------------------------

The Java Virtual Machine has a large complement of instructions that manipulate the contents of the operand stack as untyped values. These are useful because of the Java Virtual Machine's reliance on deft manipulation of its operand stack. For instance:

public long nextIndex() { 
    return index++;
}

private long index = 0;

is compiled to:

Method long nextIndex()
0   _aload\_0_        // Push this
1   _dup_            // Make a copy of it
2   _getfield #4_    // One of the copies of this is consumed
                   // pushing long field index,
                   // above the original this
5   _dup2\_x1_        // The long on top of the operand stack is 
                   // inserted into the operand stack below the 
                   // original this
6   _lconst\_1_       // Push long constant 1 
7   _ladd_           // The index value is incremented...
8   _putfield #4_    // ...and the result stored in the field
11  _lreturn_        // The original value of index is on top of
                   // the operand stack, ready to be returned

Note that the Java Virtual Machine never allows its operand stack manipulation instructions to modify or break up individual values on the operand stack.

3.12. Throwing and Handling Exceptions
--------------------------------------

Exceptions are thrown from programs using the `throw` keyword. Its compilation is simple:

void cantBeZero(int i) throws TestExc {
    if (i == 0) {
        throw new TestExc();
    }
}

becomes:

Method void cantBeZero(int)
0   _iload\_1_             // Push argument 1 (i)
1   _ifne 12_             // If i==0, allocate instance and throw
4   _new #1_              // Create instance of TestExc
7   _dup_                 // One reference goes to its constructor
8   _invokespecial #7_    // Method TestExc.`<init>`()V
11  _athrow_              // Second reference is thrown
12  _return_              // Never get here if we threw TestExc

Compilation of `try`\-`catch` constructs is straightforward. For example:

void catchOne() {
    try {
        tryItOut();
    } catch (TestExc e) {
        handleExc(e);
    }
}

is compiled as:

Method void catchOne()
0   _aload\_0_             // Beginning of try block
1   _invokevirtual #6_    // Method Example.tryItOut()V
4   _return_              // End of try block; normal return
5   _astore\_1_            // Store thrown value in local var 1
6   _aload\_0_             // Push this
7   _aload\_1_             // Push thrown value
8   _invokevirtual #5_    // Invoke handler method: 
                        // Example.handleExc(LTestExc;)V
11  _return_              // Return after handling TestExc
Exception table:
From    To      Target      Type
0       4       5           Class TestExc

Looking more closely, the `try` block is compiled just as it would be if the `try` were not present:

Method void catchOne()
0   _aload\_0_             // Beginning of try block
1   _invokevirtual #6_    // Method Example.tryItOut()V
4   _return_              // End of try block; normal return

If no exception is thrown during the execution of the `try` block, it behaves as though the `try` were not there: `tryItOut` is invoked and `catchOne` returns.

Following the `try` block is the Java Virtual Machine code that implements the single `catch` clause:

5   _astore\_1_            // Store thrown value in local var 1
6   _aload\_0_             // Push this
7   _aload\_1_             // Push thrown value
8   _invokevirtual #5_    // Invoke handler method: 
                        // Example.handleExc(LTestExc;)V
11  _return_              // Return after handling TestExc
Exception table:
From    To      Target      Type
0       4       5           Class TestExc

The invocation of `handleExc`, the contents of the `catch` clause, is also compiled like a normal method invocation. However, the presence of a `catch` clause causes the compiler to generate an exception table entry ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions"), [§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). The exception table for the `catchOne` method has one entry corresponding to the one argument (an instance of class `TestExc`) that the `catch` clause of `catchOne` can handle. If some value that is an instance of `TestExc` is thrown during execution of the instructions between indices _0_ and _4_ in `catchOne`, control is transferred to the Java Virtual Machine code at index _5_, which implements the block of the `catch` clause. If the value that is thrown is not an instance of `TestExc`, the `catch` clause of `catchOne` cannot handle it. Instead, the value is rethrown to the invoker of `catchOne`.

A `try` may have multiple `catch` clauses:

void catchTwo() {
    try {
        tryItOut();
    } catch (TestExc1 e) {
        handleExc(e);
    } catch (TestExc2 e) {
        handleExc(e);
    }
}

Multiple `catch` clauses of a given `try` statement are compiled by simply appending the Java Virtual Machine code for each `catch` clause one after the other and adding entries to the exception table, as shown:

Method void catchTwo()
0   _aload\_0_             // Begin try block
1   _invokevirtual #5_    // Method Example.tryItOut()V
4   _return_              // End of try block; normal return
5   _astore\_1_            // Beginning of handler for TestExc1;
                        // Store thrown value in local var 1
6   _aload\_0_             // Push this
7   _aload\_1_             // Push thrown value
8   _invokevirtual #7_    // Invoke handler method:
                        // Example.handleExc(LTestExc1;)V
11  _return_              // Return after handling TestExc1
12  _astore\_1_            // Beginning of handler for TestExc2;
                        // Store thrown value in local var 1
13  _aload\_0_             // Push this
14  _aload\_1_             // Push thrown value
15  _invokevirtual #7_    // Invoke handler method:
                        // Example.handleExc(LTestExc2;)V
18  _return_              // Return after handling TestExc2
Exception table:
From    To      Target      Type
0       4       5           Class TestExc1
0       4       12          Class TestExc2

If during the execution of the `try` clause (between indices _0_ and _4_) a value is thrown that matches the parameter of one or more of the `catch` clauses (the value is an instance of one or more of the parameters), the first (innermost) such `catch` clause is selected. Control is transferred to the Java Virtual Machine code for the block of that `catch` clause. If the value thrown does not match the parameter of any of the `catch` clauses of `catchTwo`, the Java Virtual Machine rethrows the value without invoking code in any `catch` clause of `catchTwo`.

Nested `try`\-`catch` statements are compiled very much like a `try` statement with multiple `catch` clauses:

void nestedCatch() {
    try {
        try {
            tryItOut();
        } catch (TestExc1 e) {
            handleExc1(e);
        }
    } catch (TestExc2 e) {
        handleExc2(e);
    }
}

becomes:

Method void nestedCatch()
0   _aload\_0_             // Begin try block
1   _invokevirtual #8_    // Method Example.tryItOut()V
4   _return_              // End of try block; normal return
5   _astore\_1_            // Beginning of handler for TestExc1;
                        // Store thrown value in local var 1
6   _aload\_0_             // Push this
7   _aload\_1_             // Push thrown value
8   _invokevirtual #7_    // Invoke handler method: 
                        // Example.handleExc1(LTestExc1;)V
11  _return_              // Return after handling TestExc1
12  _astore\_1_            // Beginning of handler for TestExc2;
                        // Store thrown value in local var 1
13  _aload\_0_             // Push this
14  _aload\_1_             // Push thrown value
15  _invokevirtual #6_    // Invoke handler method:
                        // Example.handleExc2(LTestExc2;)V
18  _return_              // Return after handling TestExc2
Exception table:
From    To      Target      Type
0       4       5           Class TestExc1
0       12      12          Class TestExc2

The nesting of `catch` clauses is represented only in the exception table. The Java Virtual Machine does not enforce nesting of or any ordering of the exception table entries ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")). However, because `try`\-`catch` constructs are structured, a compiler can always order the entries of the exception handler table such that, for any thrown exception and any program counter value in that method, the first exception handler that matches the thrown exception corresponds to the innermost matching `catch` clause.

For instance, if the invocation of `tryItOut` (at index _1_) threw an instance of `TestExc1`, it would be handled by the `catch` clause that invokes `handleExc1`. This is so even though the exception occurs within the bounds of the outer `catch` clause (catching `TestExc2`) and even though that outer `catch` clause might otherwise have been able to handle the thrown value.

As a subtle point, note that the range of a `catch` clause is inclusive on the "from" end and exclusive on the "to" end ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). Thus, the exception table entry for the `catch` clause catching `TestExc1` does not cover the _return_ instruction at offset _4_. However, the exception table entry for the `catch` clause catching `TestExc2` does cover the _return_ instruction at offset _11_. Return instructions within nested `catch` clauses are included in the range of instructions covered by nesting `catch` clauses.

3.13. Compiling `finally`
-------------------------

(This section assumes a compiler generates `class` files with version number 50.0 or below, so that the _jsr_ instruction may be used. See also [§4.10.2.5](jvms-4.html#jvms-4.10.2.5 "4.10.2.5. Exceptions and finally").)

Compilation of a `try`\-`finally` statement is similar to that of `try`\-`catch`. Prior to transferring control outside the `try` statement, whether that transfer is normal or abrupt, because an exception has been thrown, the `finally` clause must first be executed. For this simple example:

void tryFinally() {
    try {
        tryItOut();
    } finally {
        wrapItUp();
    }
}

the compiled code is:

Method void tryFinally()
0   _aload\_0_             // Beginning of try block
1   _invokevirtual #6_    // Method Example.tryItOut()V
4   _jsr 14_              // Call finally block
7   _return_              // End of try block
8   _astore\_1_            // Beginning of handler for any throw
9   _jsr 14_              // Call finally block
12  _aload\_1_             // Push thrown value
13  _athrow_              // ...and rethrow value to the invoker
14  _astore\_2_            // Beginning of finally block
15  _aload\_0_             // Push this
16  _invokevirtual #5_    // Method Example.wrapItUp()V
19  _ret 2_               // Return from finally block
Exception table:
From    To      Target      Type
0       4       8           any

There are four ways for control to pass outside of the `try` statement: by falling through the bottom of that block, by returning, by executing a `break` or `continue` statement, or by raising an exception. If `tryItOut` returns without raising an exception, control is transferred to the `finally` block using a _jsr_ instruction. The _jsr_ _14_ instruction at index _4_ makes a "subroutine call" to the code for the `finally` block at index _14_ (the `finally` block is compiled as an embedded subroutine). When the `finally` block completes, the _ret_ _2_ instruction returns control to the instruction following the _jsr_ instruction at index _4_.

In more detail, the subroutine call works as follows: The _jsr_ instruction pushes the address of the following instruction (_return_ at index _7_) onto the operand stack before jumping. The _astore\_2_ instruction that is the jump target stores the address on the operand stack into local variable _2_. The code for the `finally` block (in this case the _aload\_0_ and _invokevirtual_ instructions) is run. Assuming execution of that code completes normally, the _ret_ instruction retrieves the address from local variable _2_ and resumes execution at that address. The _return_ instruction is executed, and `tryFinally` returns normally.

A `try` statement with a `finally` clause is compiled to have a special exception handler, one that can handle any exception thrown within the `try` statement. If `tryItOut` throws an exception, the exception table for `tryFinally` is searched for an appropriate exception handler. The special handler is found, causing execution to continue at index _8_. The _astore\_1_ instruction at index _8_ stores the thrown value into local variable _1_. The following _jsr_ instruction does a subroutine call to the code for the `finally` block. Assuming that code returns normally, the _aload\_1_ instruction at index _12_ pushes the thrown value back onto the operand stack, and the following _athrow_ instruction rethrows the value.

Compiling a `try` statement with both a `catch` clause and a `finally` clause is more complex:

void tryCatchFinally() {
    try {
        tryItOut();
    } catch (TestExc e) {
        handleExc(e);
    } finally {
        wrapItUp();
    }
}

becomes:

Method void tryCatchFinally()
0   _aload\_0_             // Beginning of try block
1   _invokevirtual #4_    // Method Example.tryItOut()V
4   _goto 16_             // Jump to finally block
7   _astore\_3_            // Beginning of handler for TestExc;
                        // Store thrown value in local var 3
8   _aload\_0_             // Push this
9   _aload\_3_             // Push thrown value
10  _invokevirtual #6_    // Invoke handler method:
                        // Example.handleExc(LTestExc;)V
13  _goto 16_             // This goto is unnecessary, but was
                        // generated by javac in JDK 1.0.2
16  _jsr 26_              // Call finally block
19  _return_              // Return after handling TestExc
20  _astore\_1_            // Beginning of handler for exceptions
                        // other than TestExc, or exceptions
                        // thrown while handling TestExc
21  _jsr 26_              // Call finally block
24  _aload\_1_             // Push thrown value...
25  _athrow_              // ...and rethrow value to the invoker
26  _astore\_2_            // Beginning of finally block
27  _aload\_0_             // Push this
28  _invokevirtual #5_    // Method Example.wrapItUp()V
31  _ret 2_               // Return from finally block
Exception table:
From    To      Target      Type
0       4       7           Class TestExc
0       16      20          any

If the `try` statement completes normally, the _goto_ instruction at index _4_ jumps to the subroutine call for the `finally` block at index _16_. The `finally` block at index _26_ is executed, control returns to the _return_ instruction at index _19_, and `tryCatchFinally` returns normally.

If `tryItOut` throws an instance of `TestExc`, the first (innermost) applicable exception handler in the exception table is chosen to handle the exception. The code for that exception handler, beginning at index _7_, passes the thrown value to `handleExc` and on its return makes the same subroutine call to the `finally` block at index _26_ as in the normal case. If an exception is not thrown by `handleExc`, `tryCatchFinally` returns normally.

If `tryItOut` throws a value that is not an instance of `TestExc` or if `handleExc` itself throws an exception, the condition is handled by the second entry in the exception table, which handles any value thrown between indices _0_ and _16_. That exception handler transfers control to index _20_, where the thrown value is first stored in local variable _1_. The code for the `finally` block at index _26_ is called as a subroutine. If it returns, the thrown value is retrieved from local variable _1_ and rethrown using the _athrow_ instruction. If a new value is thrown during execution of the `finally` clause, the `finally` clause aborts, and `tryCatchFinally` returns abruptly, throwing the new value to its invoker.

3.14. Synchronization
---------------------

Synchronization in the Java Virtual Machine is implemented by monitor entry and exit, either explicitly (by use of the _monitorenter_ and _monitorexit_ instructions) or implicitly (by the method invocation and return instructions).

For code written in the Java programming language, perhaps the most common form of synchronization is the `synchronized` method. A `synchronized` method is not normally implemented using _monitorenter_ and _monitorexit_. Rather, it is simply distinguished in the run-time constant pool by the `ACC_SYNCHRONIZED` flag, which is checked by the method invocation instructions ([§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization")).

The _monitorenter_ and _monitorexit_ instructions enable the compilation of `synchronized` statements. For example:

void onlyMe(Foo f) {
    synchronized(f) {
        doSomething();
    }
}

is compiled to:

Method void onlyMe(Foo)
0   _aload\_1_             // Push f
1   _dup_                 // Duplicate it on the stack
2   _astore\_2_            // Store duplicate in local variable 2
3   _monitorenter_        // Enter the monitor associated with f
4   _aload\_0_             // Holding the monitor, pass this and...
5   _invokevirtual #5_    // ...call Example.doSomething()V
8   _aload\_2_             // Push local variable 2 (f)
9   _monitorexit_         // Exit the monitor associated with f
10  _goto 18_             // Complete the method normally
13  _astore\_3_            // In case of any throw, end up here
14  _aload\_2_             // Push local variable 2 (f)
15  _monitorexit_         // Be sure to exit the monitor!
16  _aload\_3_             // Push thrown value...
17  _athrow_              // ...and rethrow value to the invoker
18  _return_              // Return in the normal case
Exception table:
From    To      Target      Type
4       10      13          any
13      16      13          any

The compiler ensures that at any method invocation completion, a _monitorexit_ instruction will have been executed for each _monitorenter_ instruction executed since the method invocation. This is the case whether the method invocation completes normally ([§2.6.4](jvms-2.html#jvms-2.6.4 "2.6.4. Normal Method Invocation Completion")) or abruptly ([§2.6.5](jvms-2.html#jvms-2.6.5 "2.6.5. Abrupt Method Invocation Completion")). To enforce proper pairing of _monitorenter_ and _monitorexit_ instructions on abrupt method invocation completion, the compiler generates exception handlers ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")) that will match any exception and whose associated code executes the necessary _monitorexit_ instructions.

3.15. Annotations
-----------------

The representation of annotations in `class` files is described in [§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")\-[§4.7.22](jvms-4.html#jvms-4.7.22 "4.7.22. The AnnotationDefault Attribute"). These sections make it clear how to represent annotations on declarations of classes, interfaces, fields, methods, method parameters, and type parameters, as well as annotations on types used in those declarations. Annotations on package declarations require additional rules, given here.

When the compiler encounters an annotated package declaration that must be made available at run time, it emits a `class` file with the following properties:

*   The `class` file represents an interface, that is, the `ACC_INTERFACE` and `ACC_ABSTRACT` flags of the `ClassFile` structure are set ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).
    
*   If the `class` file version number is less than 50.0, then the `ACC_SYNTHETIC` flag is unset; if the `class` file version number is 50.0 or above, then the `ACC_SYNTHETIC` flag is set.
    
*   The interface has package access (JLS §6.6.1).
    
*   The interface's name is the internal form ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")) of `_package-name_.package-info`.
    
*   The interface has no superinterfaces.
    
*   The interface's only members are those implied by _The Java Language Specification, Java SE 8 Edition_ (JLS §9.2).
    
*   The annotations on the package declaration are stored as `RuntimeVisibleAnnotations` and `RuntimeInvisibleAnnotations` attributes in the `attributes` table of the `ClassFile` structure.
    


📜 Chapter 4. The `class` File Format
----------------------------------

**Table of Contents**
[4.1. The `ClassFile` Structure](jvms-4.html#jvms-4.1)
[4.2. The Internal Form of Names](jvms-4.html#jvms-4.2)
[4.2.1. Binary Class and Interface Names](jvms-4.html#jvms-4.2.1)
[4.2.2. Unqualified Names](jvms-4.html#jvms-4.2.2)
[4.3. Descriptors](jvms-4.html#jvms-4.3)
[4.3.1. Grammar Notation](jvms-4.html#jvms-4.3.1)
[4.3.2. Field Descriptors](jvms-4.html#jvms-4.3.2)
[4.3.3. Method Descriptors](jvms-4.html#jvms-4.3.3)
[4.4. The Constant Pool](jvms-4.html#jvms-4.4)
[4.4.1. The `CONSTANT_Class_info` Structure](jvms-4.html#jvms-4.4.1)
[4.4.2. The `CONSTANT_Fieldref_info`, `CONSTANT_Methodref_info`, and `CONSTANT_InterfaceMethodref_info` Structures](jvms-4.html#jvms-4.4.2)
[4.4.3. The `CONSTANT_String_info` Structure](jvms-4.html#jvms-4.4.3)
[4.4.4. The `CONSTANT_Integer_info` and `CONSTANT_Float_info` Structures](jvms-4.html#jvms-4.4.4)
[4.4.5. The `CONSTANT_Long_info` and `CONSTANT_Double_info` Structures](jvms-4.html#jvms-4.4.5)
[4.4.6. The `CONSTANT_NameAndType_info` Structure](jvms-4.html#jvms-4.4.6)
[4.4.7. The `CONSTANT_Utf8_info` Structure](jvms-4.html#jvms-4.4.7)
[4.4.8. The `CONSTANT_MethodHandle_info` Structure](jvms-4.html#jvms-4.4.8)
[4.4.9. The `CONSTANT_MethodType_info` Structure](jvms-4.html#jvms-4.4.9)
[4.4.10. The `CONSTANT_InvokeDynamic_info` Structure](jvms-4.html#jvms-4.4.10)
[4.5. Fields](jvms-4.html#jvms-4.5)
[4.6. Methods](jvms-4.html#jvms-4.6)
[4.7. Attributes](jvms-4.html#jvms-4.7)
[4.7.1. Defining and Naming New Attributes](jvms-4.html#jvms-4.7.1)
[4.7.2. The `ConstantValue` Attribute](jvms-4.html#jvms-4.7.2)
[4.7.3. The `Code` Attribute](jvms-4.html#jvms-4.7.3)
[4.7.4. The `StackMapTable` Attribute](jvms-4.html#jvms-4.7.4)
[4.7.5. The `Exceptions` Attribute](jvms-4.html#jvms-4.7.5)
[4.7.6. The `InnerClasses` Attribute](jvms-4.html#jvms-4.7.6)
[4.7.7. The `EnclosingMethod` Attribute](jvms-4.html#jvms-4.7.7)
[4.7.8. The `Synthetic` Attribute](jvms-4.html#jvms-4.7.8)
[4.7.9. The `Signature` Attribute](jvms-4.html#jvms-4.7.9)
[4.7.9.1. Signatures](jvms-4.html#jvms-4.7.9.1)
[4.7.10. The `SourceFile` Attribute](jvms-4.html#jvms-4.7.10)
[4.7.11. The `SourceDebugExtension` Attribute](jvms-4.html#jvms-4.7.11)
[4.7.12. The `LineNumberTable` Attribute](jvms-4.html#jvms-4.7.12)
[4.7.13. The `LocalVariableTable` Attribute](jvms-4.html#jvms-4.7.13)
[4.7.14. The `LocalVariableTypeTable` Attribute](jvms-4.html#jvms-4.7.14)
[4.7.15. The `Deprecated` Attribute](jvms-4.html#jvms-4.7.15)
[4.7.16. The `RuntimeVisibleAnnotations` Attribute](jvms-4.html#jvms-4.7.16)
[4.7.16.1. The `element_value` structure](jvms-4.html#jvms-4.7.16.1)
[4.7.17. The `RuntimeInvisibleAnnotations` Attribute](jvms-4.html#jvms-4.7.17)
[4.7.18. The `RuntimeVisibleParameterAnnotations` Attribute](jvms-4.html#jvms-4.7.18)
[4.7.19. The `RuntimeInvisibleParameterAnnotations` Attribute](jvms-4.html#jvms-4.7.19)
[4.7.20. The `RuntimeVisibleTypeAnnotations` Attribute](jvms-4.html#jvms-4.7.20)
[4.7.20.1. The `target_info` union](jvms-4.html#jvms-4.7.20.1)
[4.7.20.2. The `type_path` structure](jvms-4.html#jvms-4.7.20.2)
[4.7.21. The `RuntimeInvisibleTypeAnnotations` Attribute](jvms-4.html#jvms-4.7.21)
[4.7.22. The `AnnotationDefault` Attribute](jvms-4.html#jvms-4.7.22)
[4.7.23. The `BootstrapMethods` Attribute](jvms-4.html#jvms-4.7.23)
[4.7.24. The `MethodParameters` Attribute](jvms-4.html#jvms-4.7.24)
[4.8. Format Checking](jvms-4.html#jvms-4.8)
[4.9. Constraints on Java Virtual Machine Code](jvms-4.html#jvms-4.9)
[4.9.1. Static Constraints](jvms-4.html#jvms-4.9.1)
[4.9.2. Structural Constraints](jvms-4.html#jvms-4.9.2)
[4.10. Verification of `class` Files](jvms-4.html#jvms-4.10)
[4.10.1. Verification by Type Checking](jvms-4.html#jvms-4.10.1)
[4.10.1.1. Accessors for Java Virtual Machine Artifacts](jvms-4.html#jvms-4.10.1.1)
[4.10.1.2. Verification Type System](jvms-4.html#jvms-4.10.1.2)
[4.10.1.3. Instruction Representation](jvms-4.html#jvms-4.10.1.3)
[4.10.1.4. Stack Map Frame Representation](jvms-4.html#jvms-4.10.1.4)
[4.10.1.5. Type Checking Abstract and Native Methods](jvms-4.html#jvms-4.10.1.5)
[4.10.1.6. Type Checking Methods with Code](jvms-4.html#jvms-4.10.1.6)
[4.10.1.7. Type Checking Load and Store Instructions](jvms-4.html#jvms-4.10.1.7)
[4.10.1.8. Type Checking for `protected` Members](jvms-4.html#jvms-4.10.1.8)
[4.10.1.9. Type Checking Instructions](jvms-4.html#jvms-4.10.1.9)
    [_aaload_](jvms-4.html#jvms-4.10.1.9.aaload)
    [_aastore_](jvms-4.html#jvms-4.10.1.9.aastore)
    [_aconst\_null_](jvms-4.html#jvms-4.10.1.9.aconst_null)
    [_aload_, _aload\_<n>_](jvms-4.html#jvms-4.10.1.9.aload)
    [_anewarray_](jvms-4.html#jvms-4.10.1.9.anewarray)
    [_areturn_](jvms-4.html#jvms-4.10.1.9.areturn)
    [_arraylength_](jvms-4.html#jvms-4.10.1.9.arraylength)
    [_astore_, _astore\_<n>_](jvms-4.html#jvms-4.10.1.9.astore)
    [_athrow_](jvms-4.html#jvms-4.10.1.9.athrow)
    [_baload_](jvms-4.html#jvms-4.10.1.9.baload)
    [_bastore_](jvms-4.html#jvms-4.10.1.9.bastore)
    [_bipush_](jvms-4.html#jvms-4.10.1.9.bipush)
    [_caload_](jvms-4.html#jvms-4.10.1.9.caload)
    [_castore_](jvms-4.html#jvms-4.10.1.9.castore)
    [_checkcast_](jvms-4.html#jvms-4.10.1.9.checkcast)
    [_d2f_, _d2i_, _d2l_](jvms-4.html#jvms-4.10.1.9.d2f)
    [_dadd_](jvms-4.html#jvms-4.10.1.9.dadd)
    [_daload_](jvms-4.html#jvms-4.10.1.9.daload)
    [_dastore_](jvms-4.html#jvms-4.10.1.9.dastore)
    [_dcmp<op>_](jvms-4.html#jvms-4.10.1.9.dcmp_op)
    [_dconst\_<d>_](jvms-4.html#jvms-4.10.1.9.dconst_d)
    [_ddiv_](jvms-4.html#jvms-4.10.1.9.ddiv)
    [_dload_, _dload\_<n>_](jvms-4.html#jvms-4.10.1.9.dload)
    [_dmul_](jvms-4.html#jvms-4.10.1.9.dmul)
    [_dneg_](jvms-4.html#jvms-4.10.1.9.dneg)
    [_drem_](jvms-4.html#jvms-4.10.1.9.drem)
    [_dreturn_](jvms-4.html#jvms-4.10.1.9.dreturn)
    [_dstore_, _dstore\_<n>_](jvms-4.html#jvms-4.10.1.9.dstore)
    [_dsub_](jvms-4.html#jvms-4.10.1.9.dsub)
    [_dup_](jvms-4.html#jvms-4.10.1.9.dup)
    [_dup\_x1_](jvms-4.html#jvms-4.10.1.9.dup_x1)
    [_dup\_x2_](jvms-4.html#jvms-4.10.1.9.dup_x2)
    [_dup2_](jvms-4.html#jvms-4.10.1.9.dup2)
    [_dup2\_x1_](jvms-4.html#jvms-4.10.1.9.dup2_x1)
    [_dup2\_x2_](jvms-4.html#jvms-4.10.1.9.dup2_x2)
    [_f2d_, _f2i_, _f2l_](jvms-4.html#jvms-4.10.1.9.f2d)
    [_fadd_](jvms-4.html#jvms-4.10.1.9.fadd)
    [_faload_](jvms-4.html#jvms-4.10.1.9.faload)
    [_fastore_](jvms-4.html#jvms-4.10.1.9.fastore)
    [_fcmp<op>_](jvms-4.html#jvms-4.10.1.9.fcmp_op)
    [_fconst\_<f>_](jvms-4.html#jvms-4.10.1.9.fconst_f)
    [_fdiv_](jvms-4.html#jvms-4.10.1.9.fdiv)
    [_fload_, _fload\_<n>_](jvms-4.html#jvms-4.10.1.9.fload)
    [_fmul_](jvms-4.html#jvms-4.10.1.9.fmul)
    [_fneg_](jvms-4.html#jvms-4.10.1.9.fneg)
    [_frem_](jvms-4.html#jvms-4.10.1.9.frem)
    [_freturn_](jvms-4.html#jvms-4.10.1.9.freturn)
    [_fstore_, _fstore\_<n>_](jvms-4.html#jvms-4.10.1.9.fstore)
    [_fsub_](jvms-4.html#jvms-4.10.1.9.fsub)
    [_getfield_](jvms-4.html#jvms-4.10.1.9.getfield)
    [_getstatic_](jvms-4.html#jvms-4.10.1.9.getstatic)
    [_goto_, _goto\_w_](jvms-4.html#jvms-4.10.1.9.goto)
    [_i2b_, _i2c_, _i2d_, _i2f_, _i2l_, _i2s_](jvms-4.html#jvms-4.10.1.9.i2b)
    [_iadd_](jvms-4.html#jvms-4.10.1.9.iadd)
    [_iaload_](jvms-4.html#jvms-4.10.1.9.iaload)
    [_iand_](jvms-4.html#jvms-4.10.1.9.iand)
    [_iastore_](jvms-4.html#jvms-4.10.1.9.iastore)
    [_if\_acmp<cond>_](jvms-4.html#jvms-4.10.1.9.if_acmp_cond)
    [_if\_icmp<cond>_](jvms-4.html#jvms-4.10.1.9.if_icmp_cond)
    [_if<cond>_](jvms-4.html#jvms-4.10.1.9.if_cond)
    [_ifnonnull_](jvms-4.html#jvms-4.10.1.9.ifnonnull)
    [_ifnull_](jvms-4.html#jvms-4.10.1.9.ifnull)
    [_iinc_](jvms-4.html#jvms-4.10.1.9.iinc)
    [_iload_, _iload\_<n>_](jvms-4.html#jvms-4.10.1.9.iload)
    [_imul_](jvms-4.html#jvms-4.10.1.9.imul)
    [_ineg_](jvms-4.html#jvms-4.10.1.9.ineg)
    [_instanceof_](jvms-4.html#jvms-4.10.1.9.instanceof)
    [_invokedynamic_](jvms-4.html#jvms-4.10.1.9.invokedynamic)
    [_invokeinterface_](jvms-4.html#jvms-4.10.1.9.invokeinterface)
    [_invokespecial_](jvms-4.html#jvms-4.10.1.9.invokespecial)
    [_invokestatic_](jvms-4.html#jvms-4.10.1.9.invokestatic)
    [_invokevirtual_](jvms-4.html#jvms-4.10.1.9.invokevirtual)
    [_ior_](jvms-4.html#jvms-4.10.1.9.ior)
    [_irem_](jvms-4.html#jvms-4.10.1.9.irem)
    [_ireturn_](jvms-4.html#jvms-4.10.1.9.ireturn)
    [_ishl_, _ishr_, _iushr_](jvms-4.html#jvms-4.10.1.9.ishl)
    [_istore_, _istore\_<n>_](jvms-4.html#jvms-4.10.1.9.istore)
    [_isub_](jvms-4.html#jvms-4.10.1.9.isub)
    [_ixor_](jvms-4.html#jvms-4.10.1.9.ixor)
    [_l2d_, _l2f_, _l2i_](jvms-4.html#jvms-4.10.1.9.l2d)
    [_ladd_](jvms-4.html#jvms-4.10.1.9.ladd)
    [_laload_](jvms-4.html#jvms-4.10.1.9.laload)
    [_land_](jvms-4.html#jvms-4.10.1.9.land)
    [_lastore_](jvms-4.html#jvms-4.10.1.9.lastore)
    [_lcmp_](jvms-4.html#jvms-4.10.1.9.lcmp)
    [_lconst\_<l>_](jvms-4.html#jvms-4.10.1.9.lconst_l)
    [_ldc_, _ldc\_w_, _ldc2\_w_](jvms-4.html#jvms-4.10.1.9.ldc)
    [_ldiv_](jvms-4.html#jvms-4.10.1.9.ldiv)
    [_lload_, _lload\_<n>_](jvms-4.html#jvms-4.10.1.9.lload)
    [_lmul_](jvms-4.html#jvms-4.10.1.9.lmul)
    [_lneg_](jvms-4.html#jvms-4.10.1.9.lneg)
    [_lookupswitch_](jvms-4.html#jvms-4.10.1.9.lookupswitch)
    [_lor_](jvms-4.html#jvms-4.10.1.9.lor)
    [_lrem_](jvms-4.html#jvms-4.10.1.9.lrem)
    [_lreturn_](jvms-4.html#jvms-4.10.1.9.lreturn)
    [_lshl_, _lshr_, _lushr_](jvms-4.html#jvms-4.10.1.9.lshl)
    [_lstore_, _lstore\_<n>_](jvms-4.html#jvms-4.10.1.9.lstore)
    [_lsub_](jvms-4.html#jvms-4.10.1.9.lsub)
    [_lxor_](jvms-4.html#jvms-4.10.1.9.lxor)
    [_monitorenter_](jvms-4.html#jvms-4.10.1.9.monitorenter)
    [_monitorexit_](jvms-4.html#jvms-4.10.1.9.monitorexit)
    [_multianewarray_](jvms-4.html#jvms-4.10.1.9.multianewarray)
    [_new_](jvms-4.html#jvms-4.10.1.9.new)
    [_newarray_](jvms-4.html#jvms-4.10.1.9.newarray)
    [_nop_](jvms-4.html#jvms-4.10.1.9.nop)
    [_pop_, _pop2_](jvms-4.html#jvms-4.10.1.9.pop)
    [_putfield_](jvms-4.html#jvms-4.10.1.9.putfield)
    [_putstatic_](jvms-4.html#jvms-4.10.1.9.putstatic)
    [_return_](jvms-4.html#jvms-4.10.1.9.return)
    [_saload_](jvms-4.html#jvms-4.10.1.9.saload)
    [_sastore_](jvms-4.html#jvms-4.10.1.9.sastore)
    [_sipush_](jvms-4.html#jvms-4.10.1.9.sipush)
    [_swap_](jvms-4.html#jvms-4.10.1.9.swap)
    [_tableswitch_](jvms-4.html#jvms-4.10.1.9.tableswitch)
    [_wide_](jvms-4.html#jvms-4.10.1.9.wide)
[4.10.2. Verification by Type Inference](jvms-4.html#jvms-4.10.2)
[4.10.2.1. The Process of Verification by Type Inference](jvms-4.html#jvms-4.10.2.1)
[4.10.2.2. The Bytecode Verifier](jvms-4.html#jvms-4.10.2.2)
[4.10.2.3. Values of Types `long` and `double`](jvms-4.html#jvms-4.10.2.3)
[4.10.2.4. Instance Initialization Methods and Newly Created Objects](jvms-4.html#jvms-4.10.2.4)
[4.10.2.5. Exceptions and `finally`](jvms-4.html#jvms-4.10.2.5)
[4.11. Limitations of the Java Virtual Machine](jvms-4.html#jvms-4.11)

This chapter describes the `class` file format of the Java Virtual Machine. Each `class` file contains the definition of a single class or interface. Although a class or interface need not have an external representation literally contained in a file (for instance, because the class is generated by a class loader), we will colloquially refer to any valid representation of a class or interface as being in the `class` file format.

A `class` file consists of a stream of 8-bit bytes. All 16-bit, 32-bit, and 64-bit quantities are constructed by reading in two, four, and eight consecutive 8-bit bytes, respectively. Multibyte data items are always stored in big-endian order, where the high bytes come first. In the Java SE platform, this format is supported by interfaces `java.io.DataInput` and `java.io.DataOutput` and classes such as `java.io.DataInputStream` and `java.io.DataOutputStream`.

This chapter defines its own set of data types representing `class` file data: The types `u1`, `u2`, and `u4` represent an unsigned one-, two-, or four-byte quantity, respectively. In the Java SE platform, these types may be read by methods such as `readUnsignedByte`, `readUnsignedShort`, and `readInt` of the interface `java.io.DataInput`.

This chapter presents the `class` file format using pseudostructures written in a C-like structure notation. To avoid confusion with the fields of classes and class instances, etc., the contents of the structures describing the `class` file format are referred to as _items_. Successive items are stored in the `class` file sequentially, without padding or alignment.

_Tables_, consisting of zero or more variable-sized items, are used in several `class` file structures. Although we use C-like array syntax to refer to table items, the fact that tables are streams of varying-sized structures means that it is not possible to translate a table index directly to a byte offset into the table.

Where we refer to a data structure as an _array_, it consists of zero or more contiguous fixed-sized items and can be indexed like an array.

Reference to an ASCII character in this chapter should be interpreted to mean the Unicode code point corresponding to the ASCII character.

4.1. The `ClassFile` Structure
------------------------------

A `class` file consists of a single `ClassFile` structure:

ClassFile {
    u4             magic;
    u2             minor\_version;
    u2             major\_version;
    u2             constant\_pool\_count;
    cp\_info        constant\_pool\[constant\_pool\_count-1\];
    u2             access\_flags;
    u2             this\_class;
    u2             super\_class;
    u2             interfaces\_count;
    u2             interfaces\[interfaces\_count\];
    u2             fields\_count;
    field\_info     fields\[fields\_count\];
    u2             methods\_count;
    method\_info    methods\[methods\_count\];
    u2             attributes\_count;
    attribute\_info attributes\[attributes\_count\];
}

The items in the `ClassFile` structure are as follows:

magic

The `magic` item supplies the magic number identifying the `class` file format; it has the value `0xCAFEBABE`.

minor\_version, major\_version

The values of the `minor_version` and `major_version` items are the minor and major version numbers of this `class` file. Together, a major and a minor version number determine the version of the `class` file format. If a `class` file has major version number M and minor version number m, we denote the version of its `class` file format as M.m. Thus, `class` file format versions may be ordered lexicographically, for example, 1.5 < 2.0 < 2.1.

A Java Virtual Machine implementation can support a `class` file format of version v if and only if v lies in some contiguous range Mi.0 ≤ v ≤ Mj.m. The release level of the Java SE platform to which a Java Virtual Machine implementation conforms is responsible for determining the range.

Oracle's Java Virtual Machine implementation in JDK release 1.0.2 supports `class` file format versions 45.0 through 45.3 inclusive. JDK releases 1.1.\* support `class` file format versions in the range 45.0 through 45.65535 inclusive. For k ≥ 2, JDK release 1.k supports `class` file format versions in the range 45.0 through 44+k.0 inclusive.

constant\_pool\_count

The value of the `constant_pool_count` item is equal to the number of entries in the `constant_pool` table plus one. A `constant_pool` index is considered valid if it is greater than zero and less than `constant_pool_count`, with the exception for constants of type `long` and `double` noted in [§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures").

constant\_pool\[\]

The `constant_pool` is a table of structures ([§4.4](jvms-4.html#jvms-4.4 "4.4. The Constant Pool")) representing various string constants, class and interface names, field names, and other constants that are referred to within the `ClassFile` structure and its substructures. The format of each `constant_pool` table entry is indicated by its first "tag" byte.

The `constant_pool` table is indexed from 1 to `constant_pool_count` - 1.

access\_flags

The value of the `access_flags` item is a mask of flags used to denote access permissions to and properties of this class or interface. The interpretation of each flag, when set, is specified in [Table 4.1-A](jvms-4.html#jvms-4.1-200-E.1 "Table 4.1-A. Class access and property modifiers").

**Table 4.1-A. Class access and property modifiers**

  

Flag Name

Value

Interpretation

`ACC_PUBLIC`

0x0001

Declared `public`; may be accessed from outside its package.

`ACC_FINAL`

0x0010

Declared `final`; no subclasses allowed.

`ACC_SUPER`

0x0020

Treat superclass methods specially when invoked by the _invokespecial_ instruction.

`ACC_INTERFACE`

0x0200

Is an interface, not a class.

`ACC_ABSTRACT`

0x0400

Declared `abstract`; must not be instantiated.

`ACC_SYNTHETIC`

0x1000

Declared synthetic; not present in the source code.

`ACC_ANNOTATION`

0x2000

Declared as an annotation type.

`ACC_ENUM`

0x4000

Declared as an `enum` type.

  

An interface is distinguished by the `ACC_INTERFACE` flag being set. If the `ACC_INTERFACE` flag is not set, this `class` file defines a class, not an interface.

If the `ACC_INTERFACE` flag is set, the `ACC_ABSTRACT` flag must also be set, and the `ACC_FINAL`, `ACC_SUPER`, and `ACC_ENUM` flags set must not be set.

If the `ACC_INTERFACE` flag is not set, any of the other flags in [Table 4.1-A](jvms-4.html#jvms-4.1-200-E.1 "Table 4.1-A. Class access and property modifiers") may be set except `ACC_ANNOTATION`. However, such a `class` file must not have both its `ACC_FINAL` and `ACC_ABSTRACT` flags set (JLS §8.1.1.2).

The `ACC_SUPER` flag indicates which of two alternative semantics is to be expressed by the _invokespecial_ instruction ([§_invokespecial_](jvms-6.html#jvms-6.5.invokespecial "invokespecial")) if it appears in this class or interface. Compilers to the instruction set of the Java Virtual Machine should set the `ACC_SUPER` flag. In Java SE 8 and above, the Java Virtual Machine considers the `ACC_SUPER` flag to be set in every `class` file, regardless of the actual value of the flag in the `class` file and the version of the `class` file.

The `ACC_SUPER` flag exists for backward compatibility with code compiled by older compilers for the Java programming language. In JDK releases prior to 1.0.2, the compiler generated `access_flags` in which the flag now representing `ACC_SUPER` had no assigned meaning, and Oracle's Java Virtual Machine implementation ignored the flag if it was set.

The `ACC_SYNTHETIC` flag indicates that this class or interface was generated by a compiler and does not appear in source code.

An annotation type must have its `ACC_ANNOTATION` flag set. If the `ACC_ANNOTATION` flag is set, the `ACC_INTERFACE` flag must also be set.

The `ACC_ENUM` flag indicates that this class or its superclass is declared as an enumerated type.

All bits of the `access_flags` item not assigned in [Table 4.1-A](jvms-4.html#jvms-4.1-200-E.1 "Table 4.1-A. Class access and property modifiers") are reserved for future use. They should be set to zero in generated `class` files and should be ignored by Java Virtual Machine implementations.

this\_class

The value of the `this_class` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) representing the class or interface defined by this `class` file.

super\_class

For a class, the value of the `super_class` item either must be zero or must be a valid index into the `constant_pool` table. If the value of the `super_class` item is nonzero, the `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure representing the direct superclass of the class defined by this `class` file. Neither the direct superclass nor any of its superclasses may have the `ACC_FINAL` flag set in the `access_flags` item of its `ClassFile` structure.

If the value of the `super_class` item is zero, then this `class` file must represent the class `Object`, the only class or interface without a direct superclass.

For an interface, the value of the `super_class` item must always be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure representing the class `Object`.

interfaces\_count

The value of the `interfaces_count` item gives the number of direct superinterfaces of this class or interface type.

interfaces\[\]

Each value in the `interfaces` array must be a valid index into the `constant_pool` table. The `constant_pool` entry at each value of `interfaces[_i_]`, where 0 ≤ _i_ < `interfaces_count`, must be a `CONSTANT_Class_info` structure representing an interface that is a direct superinterface of this class or interface type, in the left-to-right order given in the source for the type.

fields\_count

The value of the `fields_count` item gives the number of `field_info` structures in the `fields` table. The `field_info` structures represent all fields, both class variables and instance variables, declared by this class or interface type.

fields\[\]

Each value in the `fields` table must be a `field_info` structure ([§4.5](jvms-4.html#jvms-4.5 "4.5. Fields")) giving a complete description of a field in this class or interface. The `fields` table includes only those fields that are declared by this class or interface. It does not include items representing fields that are inherited from superclasses or superinterfaces.

methods\_count

The value of the `methods_count` item gives the number of `method_info` structures in the `methods` table.

methods\[\]

Each value in the `methods` table must be a `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")) giving a complete description of a method in this class or interface. If neither of the `ACC_NATIVE` and `ACC_ABSTRACT` flags are set in the `access_flags` item of a `method_info` structure, the Java Virtual Machine instructions implementing the method are also supplied.

The `method_info` structures represent all methods declared by this class or interface type, including instance methods, class methods, instance initialization methods ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), and any class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")). The `methods` table does not include items representing methods that are inherited from superclasses or superinterfaces.

attributes\_count

The value of the `attributes_count` item gives the number of attributes in the `attributes` table of this class.

attributes\[\]

Each value of the `attributes` table must be an `attribute_info` structure ([§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes")).

The attributes defined by this specification as appearing in the `attributes` table of a `ClassFile` structure are listed in [Table 4.7-C](jvms-4.html#jvms-4.7-320 "Table 4.7-C. Predefined class file attributes (by location)").

The rules concerning attributes defined to appear in the `attributes` table of a `ClassFile` structure are given in.html#jvms-4.7" title="4.7. Attributes">§4.7.

The rules concerning non-predefined attributes in the `attributes` table of a `ClassFile` structure are given in [§4.7.1](jvms-4.html#jvms-4.7.1 "4.7.1. Defining and Naming New Attributes").

4.2. The Internal Form of Names
-------------------------------

### 4.2.1. Binary Class and Interface Names

Class and interface names that appear in `class` file structures are always represented in a fully qualified form known as _binary names_ (JLS §13.1). Such names are always represented as `CONSTANT_Utf8_info` structures ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) and thus may be drawn, where not further constrained, from the entire Unicode codespace. Class and interface names are referenced from those `CONSTANT_NameAndType_info` structures ([§4.4.6](jvms-4.html#jvms-4.4.6 "4.4.6. The CONSTANT_NameAndType_info Structure")) which have such names as part of their descriptor ([§4.3](jvms-4.html#jvms-4.3 "4.3. Descriptors")), and from all `CONSTANT_Class_info` structures ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")).

For historical reasons, the syntax of binary names that appear in `class` file structures differs from the syntax of binary names documented in JLS §13.1. In this internal form, the ASCII periods (`.`) that normally separate the identifiers which make up the binary name are replaced by ASCII forward slashes (`/`). The identifiers themselves must be unqualified names ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

For example, the normal binary name of class `Thread` is `java.lang.Thread`. In the internal form used in descriptors in the `class` file format, a reference to the name of class `Thread` is implemented using a `CONSTANT_Utf8_info` structure representing the string `java/lang/Thread`.

### 4.2.2. Unqualified Names

Names of methods, fields, local variables, and formal parameters are stored as _unqualified names_. An unqualified name must contain at least one Unicode code point and must not contain any of the ASCII characters `.` `;` `[` `/` (that is, period or semicolon or left square bracket or forward slash).

Method names are further constrained so that, with the exception of the special method names `<init>` and `<clinit>` ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), they must not contain the ASCII characters `<` or `>` (that is, left angle bracket or right angle bracket).

Note that a field name or interface method name may be `<init>` or `<clinit>`, but no method invocation instruction may reference `<clinit>` and only the _invokespecial_ instruction ([§_invokespecial_](jvms-6.html#jvms-6.5.invokespecial "invokespecial")) may reference `<init>`.

4.3. Descriptors
----------------

A _descriptor_ is a string representing the type of a field or method. Descriptors are represented in the `class` file format using modified UTF-8 strings ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) and thus may be drawn, where not further constrained, from the entire Unicode codespace.

### 4.3.1. Grammar Notation

Descriptors are specified using a grammar. The grammar is a set of productions that describe how sequences of characters can form syntactically correct descriptors of various kinds. Terminal symbols of the grammar are shown in `fixed width` font. Nonterminal symbols are shown in _italic_ type. The definition of a nonterminal is introduced by the name of the nonterminal being defined, followed by a colon. One or more alternative definitions for the nonterminal then follow on succeeding lines.

The syntax _{x}_ on the right-hand side of a production denotes zero or more occurrences of _x_.

The phrase _(one of)_ on the right-hand side of a production signifies that each of the terminal symbols on the following line or lines is an alternative definition.

### 4.3.2. Field Descriptors

A _field descriptor_ represents the type of a class, instance, or local variable.

FieldDescriptor:

[FieldType](jvms-4.html#jvms-FieldType "FieldType")

FieldType:

[BaseType](jvms-4.html#jvms-BaseType "BaseType")  
[ObjectType](jvms-4.html#jvms-ObjectType "ObjectType")  
[ArrayType](jvms-4.html#jvms-ArrayType "ArrayType")

BaseType:

(one of)  
`B` `C` `D` `F` `I` `J` `S` `Z`

ObjectType:

`L` ClassName `;`

ArrayType:

`[` [ComponentType](jvms-4.html#jvms-ComponentType "ComponentType")

ComponentType:

[FieldType](jvms-4.html#jvms-FieldType "FieldType")

The characters of _BaseType_, the `L` and `;` of _ObjectType_, and the `[` of _ArrayType_ are all ASCII characters.

_ClassName_ represents a binary class or interface name encoded in internal form ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")).

The interpretation of field descriptors as types is shown in [Table 4.3-A](jvms-4.html#jvms-4.3.2-200 "Table 4.3-A. Interpretation of field descriptors").

A field descriptor representing an array type is valid only if it represents a type with 255 or fewer dimensions.

**Table 4.3-A. Interpretation of field descriptors**

  

_FieldType_ term

Type

Interpretation

`B`

`byte`

signed byte

`C`

`char`

Unicode character code point in the Basic Multilingual Plane, encoded with UTF-16

`D`

`double`

double-precision floating-point value

`F`

`float`

single-precision floating-point value

`I`

`int`

integer

`J`

`long`

long integer

`L` _ClassName_ `;`

`reference`

an instance of class _ClassName_

`S`

`short`

signed short

`Z`

`boolean`

`true` or `false`

`[`

`reference`

one array dimension

  

The field descriptor of an instance variable of type `int` is simply `I`.

The field descriptor of an instance variable of type `Object` is `Ljava/lang/Object;`. Note that the internal form of the binary name for class `Object` is used.

The field descriptor of an instance variable of the multidimensional array type `double[][][]` is `[[[D`.

### 4.3.3. Method Descriptors

A _method descriptor_ contains zero or more _parameter descriptors_, representing the types of parameters that the method takes, and a _return descriptor_, representing the type of the value (if any) that the method returns.

MethodDescriptor:

`(` {[ParameterDescriptor](jvms-4.html#jvms-ParameterDescriptor "ParameterDescriptor")} `)` [ReturnDescriptor](jvms-4.html#jvms-ReturnDescriptor "ReturnDescriptor")

ParameterDescriptor:

[FieldType](jvms-4.html#jvms-FieldType "FieldType")

ReturnDescriptor:

[FieldType](jvms-4.html#jvms-FieldType "FieldType")  
[VoidDescriptor](jvms-4.html#jvms-VoidDescriptor "VoidDescriptor")

VoidDescriptor:

`V`

The character `V` indicates that the method returns no value (its result is `void`).

The method descriptor for the method:

Object m(int i, double d, Thread t) {...}

is:

(IDLjava/lang/Thread;)Ljava/lang/Object;

Note that the internal forms of the binary names of `Thread` and `Object` are used.

A method descriptor is valid only if it represents method parameters with a total length of 255 or less, where that length includes the contribution for `this` in the case of instance or interface method invocations. The total length is calculated by summing the contributions of the individual parameters, where a parameter of type `long` or `double` contributes two units to the length and a parameter of any other type contributes one unit.

A method descriptor is the same whether the method it describes is a class method or an instance method. Although an instance method is passed `this`, a reference to the object on which the method is being invoked, in addition to its intended arguments, that fact is not reflected in the method descriptor. The reference to `this` is passed implicitly by the Java Virtual Machine instructions which invoke instance methods ([§2.6.1](jvms-2.html#jvms-2.6.1 "2.6.1. Local Variables"), [§4.11](jvms-4.html#jvms-4.11 "4.11. Limitations of the Java Virtual Machine")).

4.4. The Constant Pool
----------------------

Java Virtual Machine instructions do not rely on the run-time layout of classes, interfaces, class instances, or arrays. Instead, instructions refer to symbolic information in the `constant_pool` table.

All `constant_pool` table entries have the following general format:

cp\_info {
    u1 tag;
    u1 info\[\];
}

Each item in the `constant_pool` table must begin with a 1-byte tag indicating the kind of `cp_info` entry. The contents of the `info` array vary with the value of `tag`. The valid tags and their values are listed in [Table 4.4-A](jvms-4.html#jvms-4.4-140 "Table 4.4-A. Constant pool tags"). Each tag byte must be followed by two or more bytes giving information about the specific constant. The format of the additional information varies with the tag value.

**Table 4.4-A. Constant pool tags**

 

Constant Type

Value

`CONSTANT_Class`

7

`CONSTANT_Fieldref`

9

`CONSTANT_Methodref`

10

`CONSTANT_InterfaceMethodref`

11

`CONSTANT_String`

8

`CONSTANT_Integer`

3

`CONSTANT_Float`

4

`CONSTANT_Long`

5

`CONSTANT_Double`

6

`CONSTANT_NameAndType`

12

`CONSTANT_Utf8`

1

`CONSTANT_MethodHandle`

15

`CONSTANT_MethodType`

16

`CONSTANT_InvokeDynamic`

18

  

### 4.4.1. The `CONSTANT_Class_info` Structure

The `CONSTANT_Class_info` structure is used to represent a class or an interface:

CONSTANT\_Class\_info {
    u1 tag;
    u2 name\_index;
}

The items of the `CONSTANT_Class_info` structure are as follows:

tag

The `tag` item has the value `CONSTANT_Class` (7).

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a valid binary class or interface name encoded in internal form ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")).

Because arrays are objects, the opcodes _anewarray_ and _multianewarray_ - but not the opcode _new_ - can reference array "classes" via `CONSTANT_Class_info` structures in the `constant_pool` table. For such array classes, the name of the class is the descriptor of the array type ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")).

For example, the class name representing the two-dimensional array type `int[][]` is `[[I`, while the class name representing the type `Thread[]` is `[Ljava/lang/Thread;`.

An array type descriptor is valid only if it represents 255 or fewer dimensions.

### 4.4.2. The `CONSTANT_Fieldref_info`, `CONSTANT_Methodref_info`, and `### 4.4.2. The `CONSTANT_Fieldref_info`, `CONSTANT_Methodref_info`, and `

Fields, methods, and interface methods are represented by similar structures:

CONSTANT\_Fieldref\_info {
    u1 tag;
    u2 class\_index;
    u2 name\_and\_type\_index;
}

CONSTANT\_Methodref\_info {
    u1 tag;
    u2 class\_index;
    u2 name\_and\_type\_index;
}

CONSTANT\_InterfaceMethodref\_info {
    u1 tag;
    u2 class\_index;
    u2 name\_and\_type\_index;
}

The items of these structures are as follows:

tag

The `tag` item of a `CONSTANT_Fieldref_info` structure has the value `CONSTANT_Fieldref` (9).

The `tag` item of a `CONSTANT_Methodref_info` structure has the value `CONSTANT_Methodref` (10).

The `tag` item of a `CONSTANT_InterfaceMethodref_info` structure has the value `CONSTANT_InterfaceMethodref` (11).

class\_index

The value of the `class_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) representing a class or interface type that has the field or method as a member.

The `class_index` item of a `CONSTANT_Methodref_info` structure must be a class type, not an interface type.

The `class_index` item of a `CONSTANT_InterfaceMethodref_info` structure must be an interface type.

The `class_index` item of a `CONSTANT_Fieldref_info` structure may be either a class type or an interface type.

name\_and\_type\_index

The value of the `name_and_type_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_NameAndType_info` structure ([§4.4.6](jvms-4.html#jvms-4.4.6 "4.4.6. The CONSTANT_NameAndType_info Structure")). This `constant_pool` entry indicates the name and descriptor of the field or method.

In a `CONSTANT_Fieldref_info`, the indicated descriptor must be a field descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). Otherwise, the indicated descriptor must be a method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

If the name of the method of a `CONSTANT_Methodref_info` structure begins with a '`<`' ('`\u003c`'), then the name must be the special name `<init>`, representing an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")). The return type of such a method must be `void`.

### 4.4.3. The `CONSTANT_String_info` Structure

The `CONSTANT_String_info` structure is used to represent constant objects of the type `String`:

CONSTANT\_String\_info {
    u1 tag;
    u2 string\_index;
}

The items of the `CONSTANT_String_info` structure are as follows:

tag

The `tag` item of the `CONSTANT_String_info` structure has the value `CONSTANT_String` (8).

string\_index

The value of the `string_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the sequence of Unicode code points to which the `String` object is to be initialized.

### 4.4.4. The `CONSTANT_Integer_info` and `CONSTANT_Float_info` Structures

The `CONSTANT_Integer_info` and `CONSTANT_Float_info` structures represent 4-byte numeric (`int` and `float`) constants:

CONSTANT\_Integer\_info {
    u1 tag;
    u4 bytes;
}

CONSTANT\_Float\_info {
    u1 tag;
    u4 bytes;
}

The items of these structures are as follows:

tag

The `tag` item of the `CONSTANT_Integer_info` structure has the value `CONSTANT_Integer` (3).

The `tag` item of the `CONSTANT_Float_info` structure has the value `CONSTANT_Float` (4).

bytes

The `bytes` item of the `CONSTANT_Integer_info` structure represents the value of the `int` constant. The bytes of the value are stored in big-endian (high byte first) order.

The `bytes` item of the `CONSTANT_Float_info` structure represents the value of the `float` constant in IEEE 754 floating-point single format ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")). The bytes of the single format representation are stored in big-endian (high byte first) order.

The value represented by the `CONSTANT_Float_info` structure is determined as follows. The bytes of the value are first converted into an `int` constant _bits_. Then:

*   If _bits_ is `0x7f800000`, the `float` value will be positive infinity.
    
*   If _bits_ is `0xff800000`, the `float` value will be negative infinity.
    
*   If _bits_ is in the range `0x7f800001` through `0x7fffffff` or in the range `0xff800001` through `0xffffffff`, the `float` value will be NaN.
    
*   In all other cases, let `s`, `e`, and `m` be three values that might be computed from _bits_:
    
    int s = ((_bits_ >> 31) == 0) ? 1 : -1;
    int e = ((_bits_ >> 23) & 0xff);
    int m = (e == 0) ?
              (_bits_ & 0x7fffff) << 1 :
              (_bits_ & 0x7fffff) | 0x800000;
    	  
    

Then the `float` value equals the result of the mathematical expression `s · m · 2e-150`.

### 4.4.5. The `CONSTANT_Long_info` and `CONSTANT_Double_info` Structures

The `CONSTANT_Long_info` and `CONSTANT_Double_info` represent 8-byte numeric (`long` and `double`) constants:

CONSTANT\_Long\_info {
    u1 tag;
    u4 high\_bytes;
    u4 low\_bytes;
}

CONSTANT\_Double\_info {
    u1 tag;
    u4 high\_bytes;
    u4 low\_bytes;
}

All 8-byte constants take up two entries in the `constant_pool` table of the `class` file. If a `CONSTANT_Long_info` or `CONSTANT_Double_info` structure is the item in the `constant_pool` table at index _n_, then the next usable item in the pool is located at index _n_+2. The `constant_pool` index _n_+1 must be valid but is considered unusable.

In retrospect, making 8-byte constants take two constant pool entries was a poor choice.

The items of these structures are as follows:

tag

The `tag` item of the `CONSTANT_Long_info` structure has the value `CONSTANT_Long` (5).

The `tag` item of the `CONSTANT_Double_info` structure has the value `CONSTANT_Double` (6).

high\_bytes, low\_bytes

The unsigned `high_bytes` and `low_bytes` items of the `CONSTANT_Long_info` structure together represent the value of the `long` constant

((long) high\_bytes << 32) + low\_bytes
      

where the bytes of each of `high_bytes` and `low_bytes` are stored in big-endian (high byte first) order.

The `high_bytes` and `low_bytes` items of the `CONSTANT_Double_info` structure together represent the `double` value in IEEE 754 floating-point double format ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")). The bytes of each item are stored in big-endian (high byte first) order.

The value represented by the `CONSTANT_Double_info` structure is determined as follows. The `high_bytes` and `low_bytes` items are converted into the `long` constant _bits_, which is equal to

((long) high\_bytes << 32) + low\_bytes
      

Then:

*   If _bits_ is `0x7ff0000000000000L`, the `double` value will be positive infinity.
    
*   If _bits_ is `0xfff0000000000000L`, the `double` value will be negative infinity.
    
*   If _bits_ is in the range `0x7ff0000000000001L` through `0x7fffffffffffffffL` or in the range `0xfff0000000000001L` through `0xffffffffffffffffL`, the double value will be NaN.
    
*   In all other cases, let `s`, `e`, and `m` be three values that might be computed from _bits_:
    
    int s = ((_bits_ >> 63) == 0) ? 1 : -1;
    int e = (int)((_bits_ >> 52) & 0x7ffL);
    long m = (e == 0) ?
               (_bits_ & 0xfffffffffffffL) << 1 :
               (_bits_ & 0xfffffffffffffL) | 0x10000000000000L;
    	  
    

Then the floating-point value equals the `double` value of the mathematical expression `s · m · 2e-1075`.

### 4.4.6. The `CONSTANT_NameAndType_info` Structure

The `CONSTANT_NameAndType_info` structure is used to represent a field or method, without indicating which class or interface type it belongs to:

CONSTANT\_NameAndType\_info {
    u1 tag;
    u2 name\_index;
    u2 descriptor\_index;
}

The items of the `CONSTANT_NameAndType_info` structure are as follows:

tag

The `tag` item of the `CONSTANT_NameAndType_info` structure has the value `CONSTANT_NameAndType` (12).

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing either the special method name `<init>` ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) or a valid unqualified name denoting a field or method ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

descriptor\_index

The value of the `descriptor_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a valid field descriptor or method descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors"), [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

### 4.4.7. The `CONSTANT_Utf8_info` Structure

The `CONSTANT_Utf8_info` structure is used to represent constant string values:

CONSTANT\_Utf8\_info {
    u1 tag;
    u2 length;
    u1 bytes\[length\];
}

The items of the `CONSTANT_Utf8_info` structure are as follows:

tag

The `tag` item of the `CONSTANT_Utf8_info` structure has the value `CONSTANT_Utf8` (1).

length

The value of the `length` item gives the number of bytes in the `bytes` array (not the length of the resulting string).

bytes\[\]

The `bytes` array contains the bytes of the string.

No byte may have the value `(byte)0`.

No byte may lie in the range `(byte)0xf0` to `(byte)0xff`.

String content is encoded in modified UTF-8. Modified UTF-8 strings are encoded so that code point sequences that contain only non-null ASCII characters can be represented using only 1 byte per code point, but all code points in the Unicode codespace can be represented. Modified UTF-8 strings are not null-terminated. The encoding is as follows:*   Code points in the range '`\u0001`' to '`\u007F`' are represented by a single byte:
    
    **Table 4.4.** 
    
           
    
    _0_
    
    _bits 6-0_
    
      
    
    The 7 bits of data in the byte give the value of the code point represented.
    
*   The null code point ('`\u0000`') and code points in the range '`\u0080`' to '`\u07FF`' are represented by a pair of bytes `x` and `y` :
    
    **Table 4.5.** 
    
     
    
    `x`:
    
    **Table 4.6.** 
    
           
    
    _1_
    
    _1_
    
    _0_
    
    _bits 10-6_
    
      
    
    `y`:
    
    **Table 4.7.** 
    
           
    
    _1_
    
    _0_
    
    _bits 5-0_
    
      
    
      
    
    The two bytes represent the code point with the value:
    
    ((x & 0x1f) << 6) + (y & 0x3f)
        
    
*   Code points in the range '`\u0800`' to '`\uFFFF`' are represented by 3 bytes `x`, `y`, and `z` :
    
    **Table 4.8.** 
    
     
    
    `x`:
    
    **Table 4.9.** 
    
           
    
    _1_
    
    _1_
    
    _1_
    
    _0_
    
    _bits 15-12_
    
      
    
    `y`:
    
    **Table 4.10.** 
    
           
    
    _1_
    
    _0_
    
    _bits 11-6_
    
      
    
    `z`:
    
    **Table 4.11.** 
    
           
    
    _1_
    
    _0_
    
    _bits 5-0_
    
      
    
      
    
    The three bytes represent the code point with the value:
    
    ((x & 0xf) << 12) + ((y & 0x3f) << 6) + (z & 0x3f)
        
    
*   Characters with code points above U+FFFF (so-called _supplementary characters_) are represented by separately encoding the two surrogate code units of their UTF-16 representation. Each of the surrogate code units is represented by three bytes. This means supplementary characters are represented by six bytes, `u`, `v`, `w`, `x`, `y`, and `z` :
    
    **Table 4.12.** 
    
     
    
    `u`:
    
    **Table 4.13.** 
    
           
    
    _1_
    
    _1_
    
    _1_
    
    _0_
    
    _1_
    
    _1_
    
    _0_
    
    _1_
    
      
    
    `v`:
    
    **Table 4.14.** 
    
           
    
    _1_
    
    _0_
    
    _1_
    
    _0_
    
    _(bits 20-16)-1_
    
      
    
    `w`:
    
    **Table 4.15.** 
    
           
    
    _1_
    
    _0_
    
    _bits 15-10_
    
      
    
    `x`:
    
    **Table 4.16.** 
    
           
    
    _1_
    
    _1_
    
    _1_
    
    _0_
    
    _1_
    
    _1_
    
    _0_
    
    _1_
    
      
    
    `y`:
    
    **Table 4.17.** 
    
           
    
    _1_
    
    _0_
    
    _1_
    
    _1_
    
    _bits 9-6_
    
      
    
    `z`:
    
    **Table 4.18.** 
    
           
    
    _1_
    
    _0_
    
    _bits 5-0_
    
      
    
      
    
    The six bytes represent the code point with the value:
    
    0x10000 + ((v & 0x0f) << 16) + ((w & 0x3f) << 10) +
    ((y & 0x0f) << 6) + (z & 0x3f)
        
    

The bytes of multibyte characters are stored in the `class` file in big-endian (high byte first) order.

There are two differences between this format and the "standard" UTF-8 format. First, the null character `(char)0` is encoded using the 2-byte format rather than the 1-byte format, so that modified UTF-8 strings never have embedded nulls. Second, only the 1-byte, 2-byte, and 3-byte formats of standard UTF-8 are used. The Java Virtual Machine does not recognize the four-byte format of standard UTF-8; it uses its own two-times-three-byte format instead.

For more information regarding the standard UTF-8 format, see Section 3.9 _Unicode Encoding Forms_ of _The Unicode Standard, Version 6.0.0_.

### 4.4.8. The `CONSTANT_MethodHandle_info` Structure

The `CONSTANT_MethodHandle_info` structure is used to represent a method handle:

CONSTANT\_MethodHandle\_info {
    u1 tag;
    u1 reference\_kind;
    u2 reference\_index;
}

The items of the `CONSTANT_MethodHandle_info` structure are the following:

tag

The `tag` item of the `CONSTANT_MethodHandle_info` structure has the value `CONSTANT_MethodHandle` (15).

reference\_kind

The value of the `reference_kind` item must be in the range 1 to 9. The value denotes the _kind_ of this method handle, which characterizes its bytecode behavior ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")).

reference\_index

The value of the `reference_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be as follows:

*   If the value of the `reference_kind` item is 1 (`REF_getField`), 2 (`REF_getStatic`), 3 (`REF_putField`), or 4 (`REF_putStatic`), then the `constant_pool` entry at that index must be a `CONSTANT_Fieldref_info` ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) structure representing a field for which a method handle is to be created.
    
*   If the value of the `reference_kind` item is 5 (`REF_invokeVirtual`) or 8 (`REF_newInvokeSpecial`), then the `constant_pool` entry at that index must be a `CONSTANT_Methodref_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) representing a class's method or constructor ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) for which a method handle is to be created.
    
*   If the value of the `reference_kind` item is 6 (`REF_invokeStatic`) or 7 (`REF_invokeSpecial`), then if the `class` file version number is less than 52.0, the `constant_pool` entry at that index must be a `CONSTANT_Methodref_info` structure representing a class's method for which a method handle is to be created; if the `class` file version number is 52.0 or above, the `constant_pool` entry at that index must be either a `CONSTANT_Methodref_info` structure or a `CONSTANT_InterfaceMethodref_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) representing a class's or interface's method for which a method handle is to be created.
    
*   If the value of the `reference_kind` item is 9 (`REF_invokeInterface`), then the `constant_pool` entry at that index must be a `CONSTANT_InterfaceMethodref_info` structure representing an interface's method for which a method handle is to be created.
    

If the value of the `reference_kind` item is 5 (`REF_invokeVirtual`), 6 (`REF_invokeStatic`), 7 (`REF_invokeSpecial`), or 9 (`REF_invokeInterface`), the name of the method represented by a `CONSTANT_Methodref_info` structure or a `CONSTANT_InterfaceMethodref_info` structure must not be `<init>` or `<clinit>`.

If the value is 8 (`REF_newInvokeSpecial`), the name of the method represented by a `CONSTANT_Methodref_info` structure must be `<init>`.

### 4.4.9. The `CONSTANT_MethodType_info` Structure

The `CONSTANT_MethodType_info` structure is used to represent a method type:

CONSTANT\_MethodType\_info {
    u1 tag;
    u2 descriptor\_index;
}

The items of the `CONSTANT_MethodType_info` structure are as follows:

tag

The `tag` item of the `CONSTANT_MethodType_info` structure has the value `CONSTANT_MethodType` (16).

descriptor\_index

The value of the `descriptor_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

### 4.4.10. The `CONSTANT_InvokeDynamic_info` Structure

The `CONSTANT_InvokeDynamic_info` structure is used by an _invokedynamic_ instruction ([§_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic "invokedynamic")) to specify a bootstrap method, the dynamic invocation name, the argument and return types of the call, and optionally, a sequence of additional constants called _static arguments_ to the bootstrap method.

CONSTANT\_InvokeDynamic\_info {
    u1 tag;
    u2 bootstrap\_method\_attr\_index;
    u2 name\_and\_type\_index;
}

The items of the `CONSTANT_InvokeDynamic_info` structure are as follows:

tag

The `tag` item of the `CONSTANT_InvokeDynamic_info` structure has the value `CONSTANT_InvokeDynamic` (18).

bootstrap\_method\_attr\_index

The value of the `bootstrap_method_attr_index` item must be a valid index into the `bootstrap_methods` array of the bootstrap method table ([§4.7.23](jvms-4.html#jvms-4.7.23 "4.7.23. The BootstrapMethods Attribute")) of this `class` file.

name\_and\_type\_index

The value of the `name_and_type_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_NameAndType_info` structure ([§4.4.6](jvms-4.html#jvms-4.4.6 "4.4.6. The CONSTANT_NameAndType_info Structure")) representing a method name and method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

4.5. Fields
-----------

Each field is described by a `field_info` structure.

No two fields in one `class` file may have the same name and descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")).

The structure has the following format:

field\_info {
    u2             access\_flags;
    u2             name\_index;
    u2             descriptor\_index;
    u2             attributes\_count;
    attribute\_info attributes\[attributes\_count\];
}

The items of the `field_info` structure are as follows:

access\_flags

The value of the `access_flags` item is a mask of flags used to denote access permission to and properties of this field. The interpretation of each flag, when set, is specified in [Table 4.5-A](jvms-4.html#jvms-4.5-200-A.1 "Table 4.5-A. Field access and property flags").

**Table 4.5-A. Field access and property flags**

  

Flag Name

Value

Interpretation

`ACC_PUBLIC`

0x0001

Declared `public`; may be accessed from outside its package.

`ACC_PRIVATE`

0x0002

Declared `private`; usable only within the defining class.

`ACC_PROTECTED`

0x0004

Declared `protected`; may be accessed within subclasses.

`ACC_STATIC`

0x0008

Declared `static`.

`ACC_FINAL`

0x0010

Declared `final`; never directly assigned to after object construction (JLS §17.5).

`ACC_VOLATILE`

0x0040

Declared `volatile`; cannot be cached.

`ACC_TRANSIENT`

0x0080

Declared `transient`; not written or read by a persistent object manager.

`ACC_SYNTHETIC`

0x1000

Declared synthetic; not present in the source code.

`ACC_ENUM`

0x4000

Declared as an element of an `enum`.

  

Fields of classes may set any of the flags in [Table 4.5-A](jvms-4.html#jvms-4.5-200-A.1 "Table 4.5-A. Field access and property flags"). However, each field of a class may have at most one of its `ACC_PUBLIC`, `ACC_PRIVATE`, and `ACC_PROTECTED` flags set (JLS §8.3.1), and must not have both its `ACC_FINAL` and `ACC_VOLATILE` flags set (JLS §8.3.1.4).

Fields of interfaces must have their `ACC_PUBLIC`, `ACC_STATIC`, and `ACC_FINAL` flags set; they may have their `ACC_SYNTHETIC` flag set and must not have any of the other flags in [Table 4.5-A](jvms-4.html#jvms-4.5-200-A.1 "Table 4.5-A. Field access and property flags") set (JLS §9.3).

The `ACC_SYNTHETIC` flag indicates that this field was generated by a compiler and does not appear in source code.

The `ACC_ENUM` flag indicates that this field is used to hold an element of an enumerated type.

All bits of the `access_flags` item not assigned in [Table 4.5-A](jvms-4.html#jvms-4.5-200-A.1 "Table 4.5-A. Field access and property flags") are reserved for future use. They should be set to zero in generated `class` files and should be ignored by Java Virtual Machine implementations.

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) which represents a valid unqualified name denoting a field ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

descriptor\_index

The value of the `descriptor_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) which represents a valid field descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")).

attributes\_count

The value of the `attributes_count` item indicates the number of additional attributes of this field.

attributes\[\]

Each value of the `attributes` table must be an `attribute_info` structure ([§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes")).

A field can have any number of optional attributes associated with it.

The attributes defined by this specification as appearing in the `attributes` table of a `field_info` structure are listed in [Table 4.7-C](jvms-4.html#jvms-4.7-320 "Table 4.7-C. Predefined class file attributes (by location)").

The rules concerning attributes defined to appear in the `attributes` table of a `field_info` structure are given in [§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes").

The rules concerning non-predefined attributes in the `attributes` table of a `field_info` structure are given in [§4.7.1](jvms-4.html#jvms-4.7.1 "4.7.1. Defining and Naming New Attributes").4.6. Methods
------------

Each method, including each instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) and the class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), is described by a `method_info` structure.

No two methods in one `class` file may have the same name and descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

The structure has the following format:

method\_info {
    u2             access\_flags;
    u2             name\_index;
    u2             descriptor\_index;
    u2             attributes\_count;
    attribute\_info attributes\[attributes\_count\];
}

The items of the `method_info` structure are as follows:

access\_flags

The value of the `access_flags` item is a mask of flags used to denote access permission to and properties of this method. The interpretation of each flag, when set, is specified in [Table 4.6-A](jvms-4.html#jvms-4.6-200-A.1 "Table 4.6-A. Method access and property flags").

**Table 4.6-A. Method access and property flags**

  

Flag Name

Value

Interpretation

`ACC_PUBLIC`

0x0001

Declared `public`; may be accessed from outside its package.

`ACC_PRIVATE`

0x0002

Declared `private`; accessible only within the defining class.

`ACC_PROTECTED`

0x0004

Declared `protected`; may be accessed within subclasses.

`ACC_STATIC`

0x0008

Declared `static`.

`ACC_FINAL`

0x0010

Declared `final`; must not be overridden ([§5.4.5](jvms-5.html#jvms-5.4.5 "5.4.5. Overriding")).

`ACC_SYNCHRONIZED`

0x0020

Declared `synchronized`; invocation is wrapped by a monitor use.

`ACC_BRIDGE`

0x0040

A bridge method, generated by the compiler.

`ACC_VARARGS`

0x0080

Declared with variable number of arguments.

`ACC_NATIVE`

0x0100

Declared `native`; implemented in a language other than Java.

`ACC_ABSTRACT`

0x0400

Declared `abstract`; no implementation is provided.

`ACC_STRICT`

0x0800

Declared `strictfp`; floating-point mode is FP-strict.

`ACC_SYNTHETIC`

0x1000

Declared synthetic; not present in the source code.

  

Methods of classes may have any of the flags in [Table 4.6-A](jvms-4.html#jvms-4.6-200-A.1 "Table 4.6-A. Method access and property flags") set. However, each method of a class may have at most one of its `ACC_PUBLIC`, `ACC_PRIVATE`, and `ACC_PROTECTED` flags set (JLS §8.4.3).

Methods of interfaces may have any of the flags in [Table 4.6-A](jvms-4.html#jvms-4.6-200-A.1 "Table 4.6-A. Method access and property flags") set except `ACC_PROTECTED`, `ACC_FINAL`, `ACC_SYNCHRONIZED`, and `ACC_NATIVE` (JLS §9.4). In a `class` file whose version number is less than 52.0, each method of an interface must have its `ACC_PUBLIC` and `ACC_ABSTRACT` flags set; in a `class` file whose version number is 52.0 or above, each method of an interface must have exactly one of its `ACC_PUBLIC` and `ACC_PRIVATE` flags set.

If a method of a class or interface has its `ACC_ABSTRACT` flag set, it must not have any of its `ACC_PRIVATE`, `ACC_STATIC`, `ACC_FINAL`, `ACC_SYNCHRONIZED`, `ACC_NATIVE`, or `ACC_STRICT` flags set.

Each instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) may have at most one of its `ACC_PUBLIC`, `ACC_PRIVATE`, and `ACC_PROTECTED` flags set, and may also have its `ACC_VARARGS`, `ACC_STRICT`, and `ACC_SYNTHETIC` flags set, but must not have any of the other flags in [Table 4.6-A](jvms-4.html#jvms-4.6-200-A.1 "Table 4.6-A. Method access and property flags") set.

Class and interface initialization methods are called implicitly by the Java Virtual Machine. The value of their `access_flags` item is ignored except for the setting of the `ACC_STRICT` flag.

The `ACC_BRIDGE` flag is used to indicate a bridge method generated by a compiler for the Java programming language.

The `ACC_VARARGS` flag indicates that this method takes a variable number of arguments at the source code level. A method declared to take a variable number of arguments must be compiled with the `ACC_VARARGS` flag set to 1. All other methods must be compiled with the `ACC_VARARGS` flag set to 0.

The `ACC_SYNTHETIC` flag indicates that this method was generated by a compiler and does not appear in source code, unless it is one of the methods named in [§4.7.8](jvms-4.html#jvms-4.7.8 "4.7.8. The Synthetic Attribute").

All bits of the `access_flags` item not assigned in [Table 4.6-A](jvms-4.html#jvms-4.6-200-A.1 "Table 4.6-A. Method access and property flags") are reserved for future use. They should be set to zero in generated `class` files and should be ignored by Java Virtual Machine implementations.

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing either one of the special method names `<init>` or `<clinit>` ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), or a valid unqualified name denoting a method ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

descriptor\_index

The value of the `descriptor_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure representing a valid method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).

A future edition of this specification may require that the last parameter descriptor of the method descriptor is an array type if the `ACC_VARARGS` flag is set in the `access_flags` item.

attributes\_count

The value of the `attributes_count` item indicates the number of additional attributes of this method.

attributes\[\]

Each value of the `attributes` table must be an `attribute_info` structure ([§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes")).

A method can have any number of optional attributes associated with it.

The attributes defined by this specification as appearing in the `attributes` table of a `method_info` structure are listed in [Table 4.7-C](jvms-4.html#jvms-4.7-320 "Table 4.7-C. Predefined class file attributes (by location)").

The rules concerning attributes defined to appear in the `attributes` table of a `method_info` structure are given in [§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes").

The rules concerning non-predefined attributes in the `attributes` table of a `method_info` structure are given in [§4.7.1](jvms-4.html#jvms-4.7.1 "4.7.1. Defining and Naming New Attributes").

4.7. Attributes
---------------

_Attributes_ are used in the `ClassFile`, `field_info`, `method_info`, and `Code_attribute` structures of the `class` file format ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods"), [§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")).

All attributes have the following general format:

attribute\_info {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u1 info\[attribute\_length\];
}

For all attributes, the `attribute_name_index` must be a valid unsigned 16-bit index into the constant pool of the class. The `constant_pool` entry at `attribute_name_index` must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the name of the attribute. The value of the `attribute_length` item indicates the length of the subsequent information in bytes. The length does not include the initial six bytes that contain the `attribute_name_index` and `attribute_length` items.

23 attributes are predefined by this specification. They are listed three times, for ease of navigation:

*   [Table 4.7-A](jvms-4.html#jvms-4.7-300 "Table 4.7-A. Predefined class file attributes (by section)") is ordered by the attributes' section numbers in this chapter. Each attribute is accompanied by the first version of the `class` file format in which it was defined, and the corresponding version of the Java SE platform. (For old `class` file versions, the JDK release is used instead of the Java SE platform version).
    
*   [Table 4.7-B](jvms-4.html#jvms-4.7-310 "Table 4.7-B. Predefined class file attributes (by class file version)") is orderd by the first version of the `class` file format in which each attribute was defined.
    
*   [Table 4.7-C](jvms-4.html#jvms-4.7-320 "Table 4.7-C. Predefined class file attributes (by location)") is ordered by the location in a `class` file where each attribute is defined to appear.
    

Within the context of their use in this specification, that is, in the `attributes` tables of the `class` file structures in which they appear, the names of these predefined attributes are reserved.

Any conditions on the presence of a predefined attribute in an `attributes` table are specified explicitly in the section which describes the attribute. If no conditions are specified, then the attribute may appear any number of times in an `attributes` table.

The predefined attributes are categorized into three groups according to their purpose:

1.  Five attributes are critical to correct interpretation of the `class` file by the Java Virtual Machine:
    
    *   `ConstantValue`
        
    *   `Code`
        
    *   `StackMapTable`
        
    *   `Exceptions`
        
    *   `BootstrapMethods`
        
    
    In a `class` file of version V, each of these attributes must be recognized and correctly read by an implementation of the Java Virtual Machine if the implementation recognizes `class` files of version V, and V is at least the version where the attribute was first defined, and the attribute appears in a location where it is defined to appear.
    
2.  Twelve attributes are critical to correct interpretation of the `class` file by the class libraries of the Java SE platform:
    
    *   `InnerClasses`
        
    *   `EnclosingMethod`
        
    *   `Synthetic`
        
    *   `Signature`
        
    *   `RuntimeVisibleAnnotations`
        
    *   `RuntimeInvisibleAnnotations`
        
    *   `RuntimeVisibleParameterAnnotations`
        
    *   `RuntimeInvisibleParameterAnnotations`
        
    *   `RuntimeVisibleTypeAnnotations`
        
    *   `RuntimeInvisibleTypeAnnotations`
        
    *   `AnnotationDefault`
        
    *   `MethodParameters`
        
    
    Each of these attributes in a `class` file of version V must be recognized and correctly read by an implementation of the class libraries of the Java SE platform if the implementation recognizes `class` files of version V, and V is at least the version where the attribute was first defined, and the attribute appears in a location where it is defined to appear.
    
3.  Six attributes are not critical to correct interpretation of the `class` file by either the Java Virtual Machine or the class libraries of the Java SE platform, but are useful for tools:
    
    *   `SourceFile`
        
    *   `SourceDebugExtension`
        
    *   `LineNumberTable`
        
    *   `LocalVariableTable`
        
    *   `LocalVariableTypeTable`
        
    *   `Deprecated`
        
    
    Use of these attributes by an implementation of the Java Virtual Machine or the class libraries of the Java SE platform is optional. An implementation may use the information that these attributes contain, or otherwise must silently ignore these attributes.
    

**Table 4.7-A. Predefined `class` file attributes (by section)**

   

Attribute

Section

`class` file

Java SE

`ConstantValue`

[§4.7.2](jvms-4.html#jvms-4.7.2 "4.7.2. The ConstantValue Attribute")

45.3

1.0.2

`Code`

[§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")

45.3

1.0.2

`StackMapTable`

[§4.7.4](jvms-4.html#jvms-4.7.4 "4.7.4. The StackMapTable Attribute")

50.0

6

`Exceptions`

[§4.7.5](jvms-4.html#jvms-4.7.5 "4.7.5. The Exceptions Attribute")

45.3

1.0.2

`InnerClasses`

[§4.7.6](jvms-4.html#jvms-4.7.6 "4.7.6. The InnerClasses Attribute")

45.3

1.1

`EnclosingMethod`

[§4.7.7](jvms-4.html#jvms-4.7.7 "4.7.7. The EnclosingMethod Attribute")

49.0

5.0

`Synthetic`

[§4.7.8](jvms-4.html#jvms-4.7.8 "4.7.8. The Synthetic Attribute")

45.3

1.1

`Signature`

[§4.7.9](jvms-4.html#jvms-4.7.9 "4.7.9. The Signature Attribute")

49.0

5.0

`SourceFile`

[§4.7.10](jvms-4.html#jvms-4.7.10 "4.7.10. The SourceFile Attribute")

45.3

1.0.2

`SourceDebugExtension`

[§4.7.11](jvms-4.html#jvms-4.7.11 "4.7.11. The SourceDebugExtension Attribute")

49.0

5.0

`LineNumberTable`

[§4.7.12](jvms-4.html#jvms-4.7.12 "4.7.12. The LineNumberTable Attribute")

45.3

1.0.2

`LocalVariableTable`

[§4.7.13](jvms-4.html#jvms-4.7.13 "4.7.13. The LocalVariableTable Attribute")

45.3

1.0.2

`LocalVariableTypeTable`

[§4.7.14](jvms-4.html#jvms-4.7.14 "4.7.14. The LocalVariableTypeTable Attribute")

49.0

5.0

`Deprecated`

[§4.7.15](jvms-4.html#jvms-4.7.15 "4.7.15. The Deprecated Attribute")

45.3

1.1

`RuntimeVisibleAnnotations`

[§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")

49.0

5.0

`RuntimeInvisibleAnnotations`

[§4.7.17](jvms-4.html#jvms-4.7.17 "4.7.17. The RuntimeInvisibleAnnotations Attribute")

49.0

5.0

`RuntimeVisibleParameterAnnotations`

[§4.7.18](jvms-4.html#jvms-4.7.18 "4.7.18. The RuntimeVisibleParameterAnnotations Attribute")

49.0

5.0

`RuntimeInvisibleParameterAnnotations`

[§4.7.19](jvms-4.html#jvms-4.7.19 "4.7.19. The RuntimeInvisibleParameterAnnotations Attribute")

49.0

5.0

`RuntimeVisibleTypeAnnotations`

[§4.7.20](jvms-4.html#jvms-4.7.20 "4.7.20. The RuntimeVisibleTypeAnnotations Attribute")

52.0

8

`RuntimeInvisibleTypeAnnotations`

[§4.7.21](jvms-4.html#jvms-4.7.21 "4.7.21. The RuntimeInvisibleTypeAnnotations Attribute")

52.0

8

`AnnotationDefault`

[§4.7.22](jvms-4.html#jvms-4.7.22 "4.7.22. The AnnotationDefault Attribute")

49.0

5.0

`BootstrapMethods`

[§4.7.23](jvms-4.html#jvms-4.7.23 "4.7.23. The BootstrapMethods Attribute")

51.0

7

`MethodParameters`

[§4.7.24](jvms-4.html#jvms-4.7.24 "4.7.24. The MethodParameters Attribute")

52.0

8

  

**Table 4.7-B. Predefined `class` file attributes (by `class` file version)**

   

Attribute

`class` file

Java SE

Section

`ConstantValue`

45.3

1.0.2

[§4.7.2](jvms-4.html#jvms-4.7.2 "4.7.2. The ConstantValue Attribute")

`Code`

45.3

1.0.2

[§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")

`Exceptions`

45.3

1.0.2

[§4.7.5](jvms-4.html#jvms-4.7.5 "4.7.5. The Exceptions Attribute")

`SourceFile`

45.3

1.0.2

[§4.7.10](jvms-4.html#jvms-4.7.10 "4.7.10. The SourceFile Attribute")

`LineNumberTable`

45.3

1.0.2

[§4.7.12](jvms-4.html#jvms-4.7.12 "4.7.12. The LineNumberTable Attribute")

`LocalVariableTable`

45.3

1.0.2

[§4.7.13](jvms-4.html#jvms-4.7.13 "4.7.13. The LocalVariableTable Attribute")

`InnerClasses`

45.3

1.1

[§4.7.6](jvms-4.html#jvms-4.7.6 "4.7.6. The InnerClasses Attribute")

`Synthetic`

45.3

1.1

[§4.7.8](jvms-4.html#jvms-4.7.8 "4.7.8. The Synthetic Attribute")

`Deprecated`

45.3

1.1

[§4.7.15](jvms-4.html#jvms-4.7.15 "4.7.15. The Deprecated Attribute")

`EnclosingMethod`

49.0

5.0

[§4.7.7](jvms-4.html#jvms-4.7.7 "4.7.7. The EnclosingMethod Attribute")

`Signature`

49.0

5.0

[§4.7.9](jvms-4.html#jvms-4.7.9 "4.7.9. The Signature Attribute")

`SourceDebugExtension`

49.0

5.0

[§4.7.11](jvms-4.html#jvms-4.7.11 "4.7.11. The SourceDebugExtension Attribute")

`LocalVariableTypeTable`

49.0

5.0

[§4.7.14](jvms-4.html#jvms-4.7.14 "4.7.14. The LocalVariableTypeTable Attribute")

`RuntimeVisibleAnnotations`

49.0

5.0

[§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")

`RuntimeInvisibleAnnotations`

49.0

5.0

[§4.7.17](jvms-4.html#jvms-4.7.17 "4.7.17. The RuntimeInvisibleAnnotations Attribute")

`RuntimeVisibleParameterAnnotations`

49.0

5.0

[§4.7.18](jvms-4.html#jvms-4.7.18 "4.7.18. The RuntimeVisibleParameterAnnotations Attribute")

`RuntimeInvisibleParameterAnnotations`

49.0

5.0

[§4.7.19](jvms-4.html#jvms-4.7.19 "4.7.19. The RuntimeInvisibleParameterAnnotations Attribute")

`AnnotationDefault`

49.0

5.0

[§4.7.22](jvms-4.html#jvms-4.7.22 "4.7.22. The AnnotationDefault Attribute")

`StackMapTable`

50.0

6

[§4.7.4](jvms-4.html#jvms-4.7.4 "4.7.4. The StackMapTable Attribute")

`BootstrapMethods`

51.0

7

[§4.7.23](jvms-4.html#jvms-4.7.23 "4.7.23. The BootstrapMethods Attribute")

`RuntimeVisibleTypeAnnotations`

52.0

8

[§4.7.20](jvms-4.html#jvms-4.7.20 "4.7.20. The RuntimeVisibleTypeAnnotations Attribute")

`RuntimeInvisibleTypeAnnotations`

52.0

8

[§4.7.21](jvms-4.html#jvms-4.7.21 "4.7.21. The RuntimeInvisibleTypeAnnotations Attribute")

`MethodParameters`

52.0

8

[§4.7.24](jvms-4.html#jvms-4.7.24 "4.7.24. The MethodParameters Attribute")

  

**Table 4.7-C. Predefined `class` file attributes (by location)**

  

Attribute

Location

`class` file

`SourceFile`

`ClassFile`

45.3

`InnerClasses`

`ClassFile`

45.3

`EnclosingMethod`

`ClassFile`

49.0

`SourceDebugExtension`

`ClassFile`

49.0

`BootstrapMethods`

`ClassFile`

51.0

`ConstantValue`

`field_info`

45.3

`Code`

`method_info`

45.3

`Exceptions`

`method_info`

45.3

`RuntimeVisibleParameterAnnotations`, `RuntimeInvisibleParameterAnnotations`

`method_info`

49.0

`AnnotationDefault`

`method_info`

49.0

`MethodParameters`

`method_info`

52.0

`Synthetic`

`ClassFile`, `field_info`, `method_info`

45.3

`Deprecated`

`ClassFile`, `field_info`, `method_info`

45.3

`Signature`

`ClassFile`, `field_info`, `method_info`

49.0

`RuntimeVisibleAnnotations`, `RuntimeInvisibleAnnotations`

`ClassFile`, `field_info`, `method_info`

49.0

`LineNumberTable`

`Code`

45.3

`LocalVariableTable`

`Code`

45.3

`LocalVariableTypeTable`

`Code`

49.0

`StackMapTable`

`Code`

50.0

`RuntimeVisibleTypeAnnotations`, `RuntimeInvisibleTypeAnnotations`

`ClassFile`, `field_info`, `method_info`, `Code`

52.0

  

### 4.7.1. Defining and Naming New Attributes

Compilers are permitted to define and emit `class` files containing new attributes in the `attributes` tables of `class` file structures, `field_info` structures, `method_info` structures, and `Code` attributes ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). Java Virtual Machine implementations are permitted to recognize and use new attributes found in these `attributes` tables. However, any attribute not defined as part of the `class` file specification must not affect the semantics of the `class` file. Java Virtual Machine implementations are required to silently ignore attributes they do not recognize.

For instance, defining a new attribute to support vendor-specific debugging is permitted. Because Java Virtual Machine implementations are required to ignore attributes they do not recognize, `class` files intended for that particular Java Virtual Machine implementation will be usable by other implementations even if those implementations cannot make use of the additional debugging information that the `class` files contain.

Java Virtual Machine implementations are specifically prohibited from throwing an exception or otherwise refusing to use `class` files simply because of the presence of some new attribute. Of course, tools operating on `class` files may not run correctly if given `class` files that do not contain all the attributes they require.

Two attributes that are intended to be distinct, but that happen to use the same attribute name and are of the same length, will conflict on implementations that recognize either attribute. Attributes defined other than in this specification must have names chosen according to the package naming convention described in _The Java Language Specification, Java SE 8 Edition_ (JLS §6.1).

Future versions of this specification may define additional attributes.

### 4.7.2. The `ConstantValue` Attribute

The `ConstantValue` attribute is a fixed-length attribute in the `attributes` table of a `field_info` structure ([§4.5](jvms-4.html#jvms-4.5 "4.5. Fields")). A `ConstantValue` attribute represents the value of a constant expression (JLS §15.28), and is used as follows:

*   If the `ACC_STATIC` flag in the `access_flags` item of the `field_info` structure is set, then the field represented by the `field_info` structure is assigned the value represented by its `ConstantValue` attribute as part of the initialization of the class or interface declaring the field ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")). This occurs prior to the invocation of the class or interface initialization method of that class or interface ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).*   Otherwise, the Java Virtual Machine must silently ignore the attribute.
    

There may be at most one `ConstantValue` attribute in the `attributes` table of a `field_info` structure.

The `ConstantValue` attribute has the following format:

ConstantValue\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 constantvalue\_index;
}

The items of the `ConstantValue_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`ConstantValue`".

attribute\_length

The value of the `attribute_length` item of a `ConstantValue_attribute` structure must be two.

constantvalue\_index

The value of the `constantvalue_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index gives the constant value represented by this attribute. The `constant_pool` entry must be of a type appropriate to the field, as specified in [Table 4.7.2-A](jvms-4.html#jvms-4.7.2-300-C.1 "Table 4.7.2-A. Constant value attribute types").

**Table 4.7.2-A. Constant value attribute types**

 

Field Type

Entry Type

`long`

`CONSTANT_Long`

`float`

`CONSTANT_Float`

`double`

`CONSTANT_Double`

`int`, `short`, `char`, `byte`, `boolean`

`CONSTANT_Integer`

`String`

`CONSTANT_String`

  

### 4.7.3. The `Code` Attribute

The `Code` attribute is a variable-length attribute in the `attributes` table of a `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). A `Code` attribute contains the Java Virtual Machine instructions and auxiliary information for a method, including an instance initialization method or a class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

If the method is either `native` or `abstract`, its `method_info` structure must not have a `Code` attribute in its `attributes` table. Otherwise, its `method_info` structure must have exactly one `Code` attribute in its `attributes` table.

The `Code` attribute has the following format:

Code\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 max\_stack;
    u2 max\_locals;
    u4 code\_length;
    u1 code\[code\_length\];
    u2 exception\_table\_length;
    {   u2 start\_pc;
        u2 end\_pc;
        u2 handler\_pc;
        u2 catch\_type;
    } exception\_table\[exception\_table\_length\];
    u2 attributes\_count;
    attribute\_info attributes\[attributes\_count\];
}

The items of the `Code_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`Code`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

max\_stack

The value of the `max_stack` item gives the maximum depth of the operand stack of this method ([§2.6.2](jvms-2.html#jvms-2.6.2 "2.6.2. Operand Stacks")) at any point during execution of the method.

max\_locals

The value of the `max_locals` item gives the number of local variables in the local variable array allocated upon invocation of this method ([§2.6.1](jvms-2.html#jvms-2.6.1 "2.6.1. Local Variables")), including the local variables used to pass parameters to the method on its invocation.

The greatest local variable index for a value of type `long` or `double` is `max_locals - 2`. The greatest local variable index for a value of any other type is `max_locals - 1`.

code\_length

The value of the `code_length` item gives the number of bytes in the `code` array for this method.

The value of `code_length` must be greater than zero (as the `code` array must not be empty) and less than 65536.

code\[\]

The `code` array gives the actual bytes of Java Virtual Machine code that implement the method.

When the `code` array is read into memory on a byte-addressable machine, if the first byte of the array is aligned on a 4-byte boundary, the _tableswitch_ and _lookupswitch_ 32-bit offsets will be 4-byte aligned. (Refer to the descriptions of those instructions for more information on the consequences of `code` array alignment.)

The detailed constraints on the contents of the `code` array are extensive and are given in a separate section ([§4.9](jvms-4.html#jvms-4.9 "4.9. Constraints on Java Virtual Machine Code")).

exception\_table\_length

The value of the `exception_table_length` item gives the number of entries in the `exception_table` table.

exception\_table\[\]

Each entry in the `exception_table` array describes one exception handler in the `code` array. The order of the handlers in the `exception_table` array is significant ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")).

Each `exception_table` entry contains the following four items:

start\_pc, end\_pc

The values of the two items `start_pc` and `end_pc` indicate the ranges in the `code` array at which the exception handler is active. The value of `start_pc` must be a valid index into the `code` array of the opcode of an instruction. The value of `end_pc` either must be a valid index into the `code` array of the opcode of an instruction or must be equal to `code_length`, the length of the `code` array. The value of `start_pc` must be less than the value of `end_pc`.

The `start_pc` is inclusive and `end_pc` is exclusive; that is, the exception handler must be active while the program counter is within the interval \[`start_pc`, `end_pc`).

The fact that `end_pc` is exclusive is a historical mistake in the design of the Java Virtual Machine: if the Java Virtual Machine code for a method is exactly 65535 bytes long and ends with an instruction that is 1 byte long, then that instruction cannot be protected by an exception handler. A compiler writer can work around this bug by limiting the maximum size of the generated Java Virtual Machine code for any method, instance initialization method, or static initializer (the size of any code array) to 65534 bytes.

handler\_pc

The value of the `handler_pc` item indicates the start of the exception handler. The value of the item must be a valid index into the `code` array and must be the index of the opcode of an instruction.

catch\_type

If the value of the `catch_type` item is nonzero, it must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) representing a class of exceptions that this exception handler is designated to catch. The exception handler will be called only if the thrown exception is an instance of the given class or one of its subclasses.

The verifier checks that the class is `Throwable` or a subclass of `Throwable` ([§4.9.2](jvms-4.html#jvms-4.9.2 "4.9.2. Structural Constraints")).

If the value of the `catch_type` item is zero, this exception handler is called for all exceptions.

This is used to implement `finally` ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally")).

attributes\_count

The value of the `attributes_count` item indicates the number of attributes of the `Code` attribute.

attributes\[\]

Each value of the `attributes` table must be an `attribute_info` structure ([§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes")).

A `Code` attribute can have any number of optional attributes associated with it.

The attributes defined by this specification as appearing in the `attributes` table of a `Code` attribute are listed in [Table 4.7-C](jvms-4.html#jvms-4.7-320 "Table 4.7-C. Predefined class file attributes (by location)").

The rules concerning attributes defined to appear in the `attributes` table of a `Code` attribute are given in [§4.7](jvms-4.html#jvms-4.7 "4.7. Attributes").

The rules concerning non-predefined attributes in the `attributes` table of a `Code` attribute are given in [§4.7.1](jvms-4.html#jvms-4.7.1 "4.7.1. Defining and Naming New Attributes").

### 4.7.4. The `StackMapTable` Attribute

The `StackMapTable` attribute is a variable-length attribute in the `attributes` table of a `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). A `StackMapTable` attribute is used during the process of verification by type checking ([§4.10.1](jvms-4.html#jvms-4.10.1 "4.10.1. Verification by Type Checking")).

There may be at most one `StackMapTable` attribute in the `attributes` table of a `Code` attribute.

In a `class` file whose version number is 50.0 or above, if a method's `Code` attribute does not have a `StackMapTable` attribute, it has an _implicit stack map attribute_ ([§4.10.1](jvms-4.html#jvms-4.10.1 "4.10.1. Verification by Type Checking")). This implicit stack map attribute is equivalent to a `StackMapTable` attribute with `number_of_entries` equal to zero.

The `StackMapTable` attribute has the following format:

StackMapTable\_attribute {
    u2              attribute\_name\_index;
    u4              attribute\_length;
    u2              number\_of\_entries;
    stack\_map\_frame entries\[number\_of\_entries\];
}

The items of the `StackMapTable_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`StackMapTable`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

number\_of\_entries

The value of the `number_of_entries` item gives the number of `stack_map_frame` entries in the `entries` table.

entries\[\]

Each entry in the `entries` table describes one stack map frame of the method. The order of the stack map frames in the `entries` table is significant.

A _stack map frame_ specifies (either explicitly or implicitly) the bytecode offset at which it applies, and the verification types of local variables and operand stack entries for that offset.

Each stack map frame described in the `entries` table relies on the previous frame for some of its semantics. The first stack map frame of a method is implicit, and computed from the method descriptor by the type checker ([§4.10.1.6](jvms-4.html#jvms-4.10.1.6 "4.10.1.6. Type Checking Methods with Code")). The `stack_map_frame` structure at `entries[0]` therefore describes the second stack map frame of the method.

The _bytecode offset_ at which a stack map frame applies is calculated by taking the value `offset_delta` specified in the frame (either explicitly or implicitly), and adding `offset_delta + 1` to the bytecode offset of the previous frame, unless the previous frame is the initial frame of the method. In that case, the bytecode offset at which the stack map frame applies is the value `offset_delta` specified in the frame.

By using an offset delta rather than storing the actual bytecode offset, we ensure, by definition, that stack map frames are in the correctly sorted order. Furthermore, by consistently using the formula `offset_delta + 1` for all explicit frames (as opposed to the implicit first frame), we guarantee the absence of duplicates.

We say that an instruction in the bytecode has a _corresponding stack map frame_ if the instruction starts at offset _i_ in the `code` array of a `Code` attribute, and the `Code` attribute has a `StackMapTable` attribute whose `entries` array contains a stack map frame that applies at bytecode offset _i_.

A _verification type_ specifies the type of either one or two locations, where a _location_ is either a single local variable or a single operand stack entry. A verification type is represented by a discriminated union, `verification_type_info`, that consists of a one-byte tag, indicating which item of the union is in use, followed by zero or more bytes, giving more information about the tag.

union verification\_type\_info {
    Top\_variable\_info;
    Integer\_variable\_info;
    Float\_variable\_info;
    Long\_variable\_info;
    Double\_variable\_info;
    Null\_variable\_info;
    UninitializedThis\_variable\_info;
    Object\_variable\_info;
    Uninitialized\_variable\_info;
}

A verification type that specifies one location in the local variable array or in the operand stack is represented by the following items of the `verification_type_info` union:

*   The `Top_variable_info` item indicates that the local variable has the verification type `top`.
    
    Top\_variable\_info {
        u1 tag = ITEM\_Top; /\* 0 \*/
    }
        
    
*   The `Integer_variable_info` item indicates that the location has the verification type `int`.
    
    Integer\_variable\_info {
        u1 tag = ITEM\_Integer; /\* 1 \*/
    }
        
    
*   The `Float_variable_info` item indicates that the location has the verification type `float`.
    
    Float\_variable\_info {
        u1 tag = ITEM\_Float; /\* 2 \*/
    }
        
    
*   The `Null_variable_info` type indicates that the location has the verification type `null`.
    
    Null\_variable\_info {
        u1 tag = ITEM\_Null; /\* 5 \*/
    }
        
    
*   The `UninitializedThis_variable_info` item indicates that the location has the verification type `uninitializedThis`.
    
    UninitializedThis\_variable\_info {
        u1 tag = ITEM\_UninitializedThis; /\* 6 \*/
    }
        
    
*   The `Object_variable_info` item indicates that the location has the verification type which is the class represented by the `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) found in the `constant_pool` table at the index given by `cpool_index`.
    
    Object\_variable\_info {
        u1 tag = ITEM\_Object; /\* 7 \*/
        u2 cpool\_index;
    }
        
    
*   The `Uninitialized_variable_info` item indicates that the location has the verification type `uninitialized(Offset)`. The `Offset` item indicates the offset, in the `code` array of the `Code` attribute that contains this `StackMapTable` attribute, of the _new_ instruction ([§_new_](jvms-6.html#jvms-6.5.new "new")) that created the object being stored in the location.
    
    Uninitialized\_variable\_info {
        u1 tag = ITEM\_Uninitialized; /\* 8 \*/
        u2 offset;
    }
        
    

A verification type that specifies two locations in the local variable array or in the operand stack is represented by the following items of the `verification_type_info` union:

*   The `Long_variable_info` item indicates that the first of two locations has the verification type `long`.
    
    Long\_variable\_info {
        u1 tag = ITEM\_Long; /\* 4 \*/
    }
        
    
*   The `Double_variable_info` item indicates that the first of two locations has the verification type `double`.
    
    Double\_variable\_info {
        u1 tag = ITEM\_Double; /\* 3 \*/
    }
        
    
*   The `Long_variable_info` and `Double_variable_info` items indicate the verification type of the second of two locations as follows:
    
    *   If the first of the two locations is a local variable, then:
        
        *   It must not be the local variable with the highest index.
            
        *   The next higher numbered local variable has the verification type `top`.
            
        
    *   If the first of the two locations is an operand stack entry, then:
        
        *   It must not be the topmost location of the operand stack.
            
        *   The next location closer to the top of the operand stack has the verification type `top`.
            
        
    

A stack map frame is represented by a discriminated union, `stack_map_frame`, which consists of a one-byte tag, indicating which item of the union is in use, followed by zero or more bytes, giving more information about the tag.

union stack\_map\_frame {
    same\_frame;
    same\_locals\_1\_stack\_item\_frame;
    same\_locals\_1\_stack\_item\_frame\_extended;
    chop\_frame;
    same\_frame\_extended;
    append\_frame;
    full\_frame;
}

The tag indicates the _frame type_ of the stack map frame:

*   The frame type `same_frame` is represented by tags in the range \[0-63\]. This frame type indicates that the frame has exactly the same local variables as the previous frame and that the operand stack is empty. The `offset_delta` value for the frame is the value of the tag item, `frame_type`.
    
    same\_frame {
        u1 frame\_type = SAME; /\* 0-63 \*/
    }
        
    
*   The frame type `same_locals_1_stack_item_frame` is represented by tags in the range \[64, 127\]. This frame type indicates that the frame has exactly the same local variables as the previous frame and that the operand stack has one entry. The `offset_delta` value for the frame is given by the formula `frame_type - 64`. The verification type of the one stack entry appears after the frame type.
    
    same\_locals\_1\_stack\_item\_frame {
        u1 frame\_type = SAME\_LOCALS\_1\_STACK\_ITEM; /\* 64-127 \*/
        verification\_type\_info stack\[1\];
    }
    
*   Tags in the range \[128-246\] are reserved for future use.
    
*   The frame type `same_locals_1_stack_item_frame_extended` is represented by the tag 247. This frame type indicates that the frame has exactly the same local variables as the previous frame and that the operand stack has one entry. The `offset_delta` value for the frame is given explicitly, unlike in the frame type `same_locals_1_stack_item_frame`. The verification type of the one stack entry appears after `offset_delta`.
    
    same\_locals\_1\_stack\_item\_frame\_extended {
        u1 frame\_type = SAME\_LOCALS\_1\_STACK\_ITEM\_EXTENDED; /\* 247 \*/
        u2 offset\_delta;
        verification\_type\_info stack\[1\];
    }
        
    
*   The frame type `chop_frame` is represented by tags in the range \[248-250\]. This frame type indicates that the frame has the same local variables as the previous frame except that the last _k_ local variables are absent, and that the operand stack is empty. The value of _k_ is given by the formula `251 - frame_type`. The `offset_delta` value for the frame is given explicitly.
    
    chop\_frame {
        u1 frame\_type = CHOP; /\* 248-250 \*/
        u2 offset\_delta;
    }
        
    
    Assume the verification types of local variables in the previous frame are given by `locals`, an array structured as in the `full_frame` frame type. If `locals[M-1]` in the previous frame represented local variable X and `locals[M]` represented local variable Y, then the effect of removing one local variable is that `locals[M-1]` in the new frame represents local variable X and `locals[M]` is undefined.
    
    It is an error if _k_ is larger than the number of local variables in `locals` for the previous frame, that is, if the number of local variables in the new frame would be less than zero.
    
*   The frame type `same_frame_extended` is represented by the tag 251. This frame type indicates that the frame has exactly the same local variables as the previous frame and that the operand stack is empty. The `offset_delta` value for the frame is given explicitly, unlike in the frame type `same_frame`.
    
    same\_frame\_extended {
        u1 frame\_type = SAME\_FRAME\_EXTENDED; /\* 251 \*/
        u2 offset\_delta;
    }
       
    
*   The frame type `append_frame` is represented by tags in the range \[252-254\]. This frame type indicates that the frame has the same locals as the previous frame except that _k_ additional locals are defined, and that the operand stack is empty. The value of _k_ is given by the formula `frame_type - 251`. The `offset_delta` value for the frame is given explicitly.
    
    append\_frame {
        u1 frame\_type = APPEND; /\* 252-254 \*/
        u2 offset\_delta;
        verification\_type\_info locals\[frame\_type - 251\];
    }
        
    
    The 0th entry in `locals` represents the verification type of the first additional local variable. If `locals[M]` represents local variable `N`, then:
    
    *   `locals[M+1]` represents local variable `N+1` if `locals[M]` is one of `Top_variable_info`, `Integer_variable_info`, `Float_variable_info`, `Null_variable_info`, `UninitializedThis_variable_info`, `Object_variable_info`, or `Uninitialized_variable_info`; and
        
    *   `locals[M+1]` represents local variable `N+2` if `locals[M]` is either `Long_variable_info` or `Double_variable_info`.
        
    
    It is an error if, for any index _i_, `locals[_i_]` represents a local variable whose index is greater than the maximum number of local variables for the method.
    
*   The frame type `full_frame` is represented by the tag 255. The `offset_delta` value for the frame is given explicitly.
    
    full\_frame {
        u1 frame\_type = FULL\_FRAME; /\* 255 \*/
        u2 offset\_delta;
        u2 number\_of\_locals;
        verification\_type\_info locals\[number\_of\_locals\];
        u2 number\_of\_stack\_items;
        verification\_type\_info stack\[number\_of\_stack\_items\];
    }
        
    
    The 0th entry in `locals` represents the verification type of local variable 0. If `locals[M]` represents local variable `N`, then:
    
    *   `locals[M+1]` represents local variable `N+1` if `locals[M]` is one of `Top_variable_info`, `Integer_variable_info`, `Float_variable_info`, `Null_variable_info`, `UninitializedThis_variable_info`, `Object_variable_info`, or `Uninitialized_variable_info`; and
        
    *   `locals[M+1]` represents local variable `N+2` if `locals[M]` is either `Long_variable_info` or `Double_variable_info`.
        
    
    It is an error if, for any index _i_, `locals[_i_]` represents a local variable whose index is greater than the maximum number of local variables for the method.
    
    The 0th entry in `stack` represents the verification type of the bottom of the operand stack, and subsequent entries in `stack` represent the verification types of stack entries closer to the top of the operand stack. We refer to the bottom of the operand stack as stack entry 0, and to subsequent entries of the operand stack as stack entry 1, 2, etc. If `stack[M]` represents stack entry `N`, then:
    
    *   `stack[M+1]` represents stack entry `N+1` if `stack[M]` is one of `Top_variable_info`, `Integer_variable_info`, `Float_variable_info`, `Null_variable_info`, `UninitializedThis_variable_info`, `Object_variable_info`, or `Uninitialized_variable_info`; and
        
    *   `stack[M+1]` represents stack entry `N+2` if `stack[M]` is either `Long_variable_info` or `Double_variable_info`.
        
    
    It is an error if, for any index _i_, `stack[_i_]` represents a stack entry whose index is greater than the maximum operand stack size for the method.
    

### 4.7.5. The `Exceptions` Attribute

The `Exceptions` attribute is a variable-length attribute in the `attributes` table of a `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). The `Exceptions` attribute indicates which checked exceptions a method may throw.

There may be at most one `Exceptions` attribute in the `attributes` table of a `method_info` structure.

The `Exceptions` attribute has the following format:

Exceptions\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 number\_of\_exceptions;
    u2 exception\_index\_table\[number\_of\_exceptions\];
}

The items of the `Exceptions_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be the `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`Exceptions`".

attribute\_length

The value of the `attribute_length` item indicates the attribute length, excluding the initial six bytes.

number\_of\_exceptions

The value of the `number_of_exceptions` item indicates the number of entries in the `exception_index_table`.

exception\_index\_table\[\]n>

Each value in the `exception_index_table` array must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) representing a class type that this method is declared to throw.

A method should throw an exception only if at least one of the following three criteria is met:

*   The exception is an instance of `RuntimeException` or one of its subclasses.
    
*   The exception is an instance of `Error` or one of its subclasses.
    
*   The exception is an instance of one of the exception classes specified in the `exception_index_table` just described, or one of their subclasses.
    

These requirements are not enforced in the Java Virtual Machine; they are enforced only at compile time.

### 4.7.6. The `InnerClasses` Attribute

The `InnerClasses` attribute is a variable-length attribute in the `attributes` table of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).

If the constant pool of a class or interface C contains at least one `CONSTANT_Class_info` entry ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) which represents a class or interface that is not a member of a package, then there must be exactly one `InnerClasses` attribute in the `attributes` table of the `ClassFile` structure for C.

The `InnerClasses` attribute has the following format:

InnerClasses\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 number\_of\_classes;
    {   u2 inner\_class\_info\_index;
        u2 outer\_class\_info\_index;
        u2 inner\_name\_index;
        u2 inner\_class\_access\_flags;
    } classes\[number\_of\_classes\];
}

The items of the `InnerClasses_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`InnerClasses`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

number\_of\_classes

The value of the `number_of_classes` item indicates the number of entries in the `classes` array.

classes\[\]

Every `CONSTANT_Class_info` entry in the `constant_pool` table which represents a class or interface C that is not a package member must have exactly one corresponding entry in the `classes` array.

If a class or interface has members that are classes or interfaces, its `constant_pool` table (and hence its `InnerClasses` attribute) must refer to each such member (JLS §13.1), even if that member is not otherwise mentioned by the class.

In addition, the `constant_pool` table of every nested class and nested interface must refer to its enclosing class, so altogether, every nested class and nested interface will have `InnerClasses` information for each enclosing class and for each of its own nested classes and interfaces.

Each entry in the `classes` array contains the following four items:

inner\_class\_info\_index

The value of the `inner_class_info_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure representing C. The remaining items in the `classes` array entry give information about C.

outer\_class\_info\_index

If C is not a member of a class or an interface (that is, if C is a top-level class or interface (JLS §7.6) or a local class (JLS §14.3) or an anonymous class (JLS §15.9.5)), the value of the `outer_class_info_index` item must be zero.

Otherwise, the value of the `outer_class_info_index` item must be a valid index into the `constant_pool` table, and the entry at that index must be a `CONSTANT_Class_info` structure representing the class or interface of which C is a member.

inner\_name\_index

If C is anonymous (JLS §15.9.5), the value of the `inner_name_index` item must be zero.

Otherwise, the value of the `inner_name_index` item must be a valid index into the `constant_pool` table, and the entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) that represents the original simple name of C, as given in the source code from which this `class` file was compiled.

inner\_class\_access\_flags

The value of the `inner_class_access_flags` item is a mask of flags used to denote access permissions to and properties of class or interface C as declared in the source code from which this `class` file was compiled. It is used by a compiler to recover the original information when source code is not available. The flags are specified in [Table 4.7.6-A](jvms-4.html#jvms-4.7.6-300-D.1-D.1 "Table 4.7.6-A. Nested class access and property flags").

**Table 4.7.6-A. Nested class access and property flags**

  

Flag Name

Value

Interpretation

`ACC_PUBLIC`

0x0001

Marked or implicitly `public` in source.

`ACC_PRIVATE`

0x0002

Marked `private` in source.

`ACC_PROTECTED`

0x0004

Marked `protected` in source.

`ACC_STATIC`

0x0008

Marked or implicitly `static` in source.

`ACC_FINAL`

0x0010

Marked `final` in source.

`ACC_INTERFACE`

0x0200

Was an `interface` in source.

`ACC_ABSTRACT`

0x0400

Marked or implicitly `abstract` in source.

`ACC_SYNTHETIC`

0x1000

Declared synthetic; not present in the source code.

`ACC_ANNOTATION`

0x2000

Declared as an annotation type.

`ACC_ENUM`

0x4000

Declared as an `enum` type.

  

All bits of the `inner_class_access_flags` item not assigned in [Table 4.7.6-A](jvms-4.html#jvms-4.7.6-300-D.1-D.1 "Table 4.7.6-A. Nested class access and property flags") are reserved for future use. They should be set to zero in generated `class` files and should be ignored by Java Virtual Machine implementations.

If a `class` file has a version number that is 51.0 or above, and has an `InnerClasses` attribute in its `attributes` table, then for all entries in the `classes` array of the `InnerClasses` attribute, the value of the `outer_class_info_index` item must be zero if the value of the `inner_name_index` item is zero.

Oracle's Java Virtual Machine implementation does not check the consistency of an `InnerClasses` attribute against a `class` file representing a class or interface referenced by the attribute.

### 4.7.7. The `EnclosingMethod` Attribute

The `EnclosingMethod` attribute is a fixed-length attribute in the `attributes` table of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")). A class must have an `EnclosingMethod` attribute if and only if it represents a local class or an anonymous class (JLS §14.3, JLS §15.9.5).

There may be at most one `EnclosingMethod` attribute in the `attributes` table of a `ClassFile` structure.

The `EnclosingMethod` attribute has the following format:

EnclosingMethod\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 class\_index;
    u2 method\_index;
}

The items of the `EnclosingMethod_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`EnclosingMethod`".

attribute\_length

The value of the `attribute_length` item must be four.

class\_index

The value of the `class_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) representing the innermost class that encloses the declaration of the current class.

method\_index

If the current class is not immediately enclosed by a method or constructor, then the value of the `method_index` item must be zero.

In particular, `method_index` must be zero if the current class was immediately enclosed in source code by an instance initializer, static initializer, instance variable initializer, or class variable initializer. (The first two concern both local classes and anonymous classes, while the last two concern anonymous classes declared on the right hand side of a field assignment.)

Otherwise, the value of the `method_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_NameAndType_info` structure ([§4.4.6](jvms-4.html#jvms-4.4.6 "4.4.6. The CONSTANT_NameAndType_info Structure")) representing the name and type of a method in the class referenced by the `class_index` attribute above.

It is the responsibility of a Java compiler to ensure that the method identified via the `method_index` is indeed the closest lexically enclosing method of the class that contains this `EnclosingMethod` attribute.

### 4.7.8. The `Synthetic` Attribute

The `Synthetic` attribute is a fixed-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). A class member that does not appear in the source code must be marked using a `Synthetic` attribute, or else it must have its `ACC_SYNTHETIC` flag set. The only exceptions to this requirement are compiler-generated methods which are not considered implementation artifacts, namely the instance initialization method representing a default constructor of the Java programming language ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), the class initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), and the `Enum.values()` and `Enum.valueOf()` methods.

The `Synthetic` attribute was introduced in JDK 1.1 to support nested classes and interfaces.

The `Synthetic` attribute has the following format:

Synthetic\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
}

The items of the `Synthetic_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`Synthetic`".

attribute\_length

The value of the `attribute_length` item must be zero.

### 4.7.9. The `Signature` Attribute

The `Signature` attribute is a fixed-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). A `Signature` attribute records a signature ([§4.7.9.1](jvms-4.html#jvms-4.7.9.1 "4.7.9.1. Signatures")) for a class, interface, constructor, method, or field whose declaration in the Java programming language uses type variables or parameterized types. See _The Java Language Specification, Java SE 8 Edition_ for details about these types.

The `Signature` attribute has the following format:

Signature\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 signature\_index;
}

The items of the `Signature_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`Signature`".

attribute\_length

The value of the `attribute_length` item of a `Signature_attribute` structure must be two.

signature\_index

The value of the `signature_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a class signature if this `Signature` attribute is an attribute of a `ClassFile` structure; a method signature if this `Signature` attribute is an attribute of a `method_info` structure; or a field signature otherwise.

Oracle's Java Virtual Machine implementation does not check the well-formedness of `Signature` attributes during class loading or linking. Instead, `Signature` attributes are checked by methods of the Java SE platform class libraries which expose generic signatures of classes, interfaces, constructors, methods, and fields. Examples include `getGenericSuperclass` in `Class` and `toGenericString` in `java.lang.reflect.Executable`.

#### 4.7.9.1. Signatures

_Signatures_ encode declarations written in the Java programming language that use types outside the type system of the Java Virtual Machine. They support reflection and debugging, as well as compilation when only `class` files are available.

A Java compiler must emit a signature for any class, interface, constructor, method, or field whose declaration uses type variables or parameterized types. Specifically, a Java compiler must emit:

*   A class signature for any class or interface declaration which is either generic, or has a parameterized type as a superclass or superinterface, or both.
    
*   A method signature for any method or constructor declaration which is either generic, or has a type variable or parameterized type as the return type or a formal parameter type, or has a type variable in a `throws` clause, or any combination thereof.
    
    If the `throws` clause of a method or constructor declaration does not involve type variables, then a compiler may treat the declaration as having no `throws` clause for the purpose of emitting a method signature.
    
*   A field signature for any field, formal parameter, or local variable declaration whose type uses a type variable or a parameterized type.
    

Signatures are specified using a grammar which follows the notation of [§4.3.1](jvms-4.html#jvms-4.3.1 "4.3.1. Grammar Notation"). In addition to that notation:

*   The syntax _\[x\]_ on the right-hand side of a production denotes zero or one occurrences of _x_. That is, _x_ is an _optional symbol_. The alternative which contains the optional symbol actually defines two alternatives: one that omits the optional symbol and one that includes it.
    
*   A very long right-hand side may be continued on a second line by clearly indenting the second line.
    

The grammar includes the terminal symbol _Identifier_ to denote the name of a type, field, method, formal parameter, local variable, or type variable, as generated by a Java compiler. Such a name must not contain any of the ASCII characters `.` `;` `[` `/` `<` `>` `:` (that is, the characters forbidden in method names ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")) and also colon) but may contain characters that must not appear in an identifier in the Java programming language (JLS §3.8).

Signatures rely on a hierarchy of nonterminals known as _type signatures_:

*   A _Java type signature_ represents either a reference type or a primitive type of the Java programming language.
    
    JavaTypeSignature:
    
    [ReferenceTypeSignature](jvms-4.html#jvms-ReferenceTypeSignature "ReferenceTypeSignature")  
    [BaseType](jvms-4.html#jvms-BaseType "BaseType")
    
    The following production from [§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors") is repeated here for convenience:
    
    BaseType:
    
    (one of)  
    `B` `C` `D` `F` `I` `J` `S` `Z`
    
*   A _reference type signature_ represents a reference type of the Java programming language, that is, a class or interface type, a type variable, or an array type.
    
    A _class type signature_ represents a (possibly parameterized) class or interface type. A class type signature must be formulated such that it can be reliably mapped to the binary name of the class it denotes by erasing any type arguments and converting each `.` character to a `$` character.
    
    A _type variable signature_ represents a type variable.
    
    An _array type signature_ represents one dimension of an array type.
    
    ReferenceTypeSignature:
    
    [ClassTypeSignature](jvms-4.html#jvms-ClassTypeSignature "ClassTypeSignature")  
    [TypeVariableSignature](jvms-4.html#jvms-TypeVariableSignature "TypeVariableSignature")  
    [ArrayTypeSignature](jvms-4.html#jvms-ArrayTypeSignature "ArrayTypeSignature")
    
    ClassTypeSignature:
    
    `L` \[[PackageSpecifier](jvms-4.html#jvms-PackageSpecifier "PackageSpecifier")\] [SimpleClassTypeSignature](jvms-4.html#jvms-SimpleClassTypeSignature "SimpleClassTypeSignature") {[ClassTypeSignatureSuffix](jvms-4.html#jvms-ClassTypeSignatureSuffix "ClassTypeSignatureSuffix")} `;`
    
    PackageSpecifier:
    
    Identifier `/` {[PackageSpecifier](jvms-4.html#jvms-PackageSpecifier "PackageSpecifier")}
    
    SimpleClassTypeSignature:
    
    Identifier \[[TypeArguments](jvms-4.html#jvms-TypeArguments "TypeArguments")\]
    
    TypeArguments:
    
    `<` [TypeArgument](jvms-4.html#jvms-TypeArgument "TypeArgument") {[TypeArgument](jvms-4.html#jvms-TypeArgument "TypeArgument")} `>`
    
    TypeArgument:
    
    \[[WildcardIndicator](jvms-4.html#jvms-WildcardIndicator "WildcardIndicator")\] [ReferenceTypeSignature](jvms-4.html#jvms-ReferenceTypeSignature "ReferenceTypeSignature")  
    `*`
    
    WildcardIndicator:
    
    `+`  
    `-`
    
    ClassTypeSignatureSuffix:
    
    `.` [SimpleClassTypeSignature](jvms-4.html#jvms-SimpleClassTypeSignature "SimpleClassTypeSignature")
    
    TypeVariableSignature:
    
    `T` Identifier `;`
    
    ArrayTypeSignature:
    
    `[` [JavaTypeSignature](jvms-4.html#jvms-JavaTypeSignature "JavaTypeSignature")
    

A _class signature_ encodes type information about a (possibly generic) class declaration. It describes any type parameters of the class, and lists its (possibly parameterized) direct superclass and direct superinterfaces, if any. A type parameter is described by its name, followed by any class bound and interface bounds.

ClassSignature:

\[[TypeParameters](jvms-4.html#jvms-TypeParameters "TypeParameters")\] [SuperclassSignature](jvms-4.html#jvms-SuperclassSignature "SuperclassSignature") {[SuperinterfaceSignature](jvms-4.html#jvms-SuperinterfaceSignature "SuperinterfaceSignature")}

TypeParameters:

`<` [TypeParameter](jvms-4.html#jvms-TypeParameter "TypeParameter") {[TypeParameter](jvms-4.html#jvms-TypeParameter "TypeParameter")} `>`

TypeParameter:

Identifier [ClassBound](jvms-4.html#jvms-ClassBound "ClassBound") {[InterfaceBound](jvms-4.html#jvms-InterfaceBound "InterfaceBound")}

ClassBound:

`:` \[[ReferenceTypeSignature](jvms-4.html#jvms-ReferenceTypeSignature "ReferenceTypeSignature")\]

InterfaceBound:

`:` [ReferenceTypeSignature](jvms-4.html#jvms-ReferenceTypeSignature "ReferenceTypeSignature")

SuperclassSignature:

[ClassTypeSignature](jvms-4.html#jvms-ClassTypeSignature "ClassTypeSignature")

SuperinterfaceSignature:

[ClassTypeSignature](jvms-4.html#jvms-ClassTypeSignature "ClassTypeSignature")

A _method signature_ encodes type information about a (possibly generic) method declaration. It describes any type parameters of the method; the (possibly parameterized) types of any formal parameters; the (possibly parameterized) return type, if any; and the types of any exceptions declared in the method's `throws` clause.

MethodSignature:

\[[TypeParameters](jvms-4.html#jvms-TypeParameters "TypeParameters")\] `(` {[JavaTypeSignature](jvms-4.html#jvms-JavaTypeSignature "JavaTypeSignature")} `)` [Result](jvms-4.html#jvms-Result "Result") {[ThrowsSignature](jvms-4.html#jvms-ThrowsSignature "ThrowsSignature")}

Result:

[JavaTypeSignature](jvms-4.html#jvms-JavaTypeSignature "JavaTypeSignature")  
[VoidDescriptor](jvms-4.html#jvms-VoidDescriptor "VoidDescriptor")

ThrowsSignature:

`^` [ClassTypeSignature](jvms-4.html#jvms-ClassTypeSignature "ClassTypeSignature")  
`^` [TypeVariableSignature](jvms-4.html#jvms-TypeVariableSignature "TypeVariableSignature")

The following production from [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors") is repeated here for convenience:

VoidDescriptor:

`V`

Due to compiler-generated artifacts, the method signature of a method may not correspond exactly to the method descriptor of the method ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")). In particular, the number of formal parameter types in the method signature may be less than the number of parameter descriptors in the method descriptor..7.9.1-600">A _field signature_ encodes the (possibly parameterized) type of a field, formal parameter, or local variable declaration.

FieldSignature:

[ReferenceTypeSignature](jvms-4.html#jvms-ReferenceTypeSignature "ReferenceTypeSignature")

### 4.7.10. The `SourceFile` Attribute

The `SourceFile` attribute is an optional fixed-length attribute in the `attributes` table of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).

There may be at most one `SourceFile` attribute in the `attributes` table of a `ClassFile` structure.

The `SourceFile` attribute has the following format:

SourceFile\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 sourcefile\_index;
}

The items of the `SourceFile_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`SourceFile`".

attribute\_length

The value of the `attribute_length` item of a `SourceFile_attribute` structure must be two.

sourcefile\_index

The value of the `sourcefile_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a string.

The string referenced by the `sourcefile_index` item will be interpreted as indicating the name of the source file from which this `class` file was compiled. It will not be interpreted as indicating the name of a directory containing the file or an absolute path name for the file; such platform-specific additional information must be supplied by the run-time interpreter or development tool at the time the file name is actually used.

### 4.7.11. The `SourceDebugExtension` Attribute

The `SourceDebugExtension` attribute is an optional attribute in the `attributes` table of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).

There may be at most one `SourceDebugExtension` attribute in the `attributes` table of a `ClassFile` structure.

The `SourceDebugExtension` attribute has the following format:

SourceDebugExtension\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u1 debug\_extension\[attribute\_length\];
}

The items of the `SourceDebugExtension_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`SourceDebugExtension`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

debug\_extension\[\]

The `debug_extension` array holds extended debugging information which has no semantic effect on the Java Virtual Machine. The information is represented using a modified UTF-8 string ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) with no terminating zero byte.

Note that the `debug_extension` array may denote a string longer than that which can be represented with an instance of class `String`.

### 4.7.12. The `LineNumberTable` Attribute

The `LineNumberTable` attribute is an optional variable-length attribute in the `attributes` table of a `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). It may be used by debuggers to determine which part of the `code` array corresponds to a given line number in the original source file.

If multiple `LineNumberTable` attributes are present in the `attributes` table of a `Code` attribute, then they may appear in any order.

There may be more than one `LineNumberTable` attribute _per line of a source file_ in the `attributes` table of a `Code` attribute. That is, `LineNumberTable` attributes may together represent a given line of a source file, and need not be one-to-one with source lines.

The `LineNumberTable` attribute has the following format:

LineNumberTable\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 line\_number\_table\_length;
    {   u2 start\_pc;
        u2 line\_number;	
    } line\_number\_table\[line\_number\_table\_length\];
}

The items of the `LineNumberTable_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`LineNumberTable`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

line\_number\_table\_length

The value of the `line_number_table_length` item indicates the number of entries in the `line_number_table` array.

line\_number\_table\[\]

Each entry in the `line_number_table` array indicates that the line number in the original source file changes at a given point in the `code` array. Each `line_number_table` entry must contain the following two items:

start\_pc

The value of the `start_pc` item must indicate the index into the `code` array at which the code for a new line in the original source file begins.

The value of `start_pc` must be less than the value of the `code_length` item of the `Code` attribute of which this `LineNumberTable` is an attribute.

line\_number

The value of the `line_number` item must give the corresponding line number in the original source file.

### 4.7.13. The `LocalVariableTable` Attribute

The `LocalVariableTable` attribute is an optional variable-length attribute in the `attributes` table of a `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). It may be used by debuggers to determine the value of a given local variable during the execution of a method.

If multiple `LocalVariableTable` attributes are present in the `attributes` table of a `Code` attribute, then they may appear in any order.

There may be no more than one `LocalVariableTable` attribute _per local variable_ in the `attributes` table of a `Code` attribute.

The `LocalVariableTable` attribute has the following format:

LocalVariableTable\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 local\_variable\_table\_length;
    {   u2 start\_pc;
        u2 length;
        u2 name\_index;
        u2 descriptor\_index;
        u2 index;
    } local\_variable\_table\[local\_variable\_table\_length\];
}

The items of the `LocalVariableTable_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`LocalVariableTable`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

local\_variable\_table\_length

The value of the `local_variable_table_length` item indicates the number of entries in the `local_variable_table` array.

local\_variable\_table\[\]

Each entry in the `local_variable_table` array indicates a range of `code` array offsets within which a local variable has a value. It also indicates the index into the local variable array of the current frame at which that local variable can be found. Each entry must contain the following five items:

start\_pc, length

The given local variable must have a value at indices into the `code` array in the interval \[`start_pc`, `start_pc + length`), that is, between `start_pc` inclusive and `start_pc + length` exclusive.

The value of `start_pc` must be a valid index into the `code` array of this `Code` attribute and must be the index of the opcode of an instruction.

The value of `start_pc + length` must either be a valid index into the `code` array of this `Code` attribute and be the index of the opcode of an instruction, or it must be the first index beyond the end of that `code` array.

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must contain a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a valid unqualified name denoting a local variable ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

descriptor\_index

The value of the `descriptor_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must contain a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a field descriptor which encodes the type of a local variable in the source program ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")).

index

The given local variable must be at `index` in the local variable array of the current frame.

If the local variable at `index` is of type `double` or `long`, it occupies both `index` and `index + 1`.

### 4.7.14. The `LocalVariableTypeTable` Attribute

The `LocalVariableTypeTable` attribute is an optional variable-length attribute in the `attributes` table of a `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). It may be used by debuggers to determine the value of a given local variable during the execution of a method.

If multiple `LocalVariableTypeTable` attributes are present in the `attributes` table of a given `Code` attribute, then they may appear in any order.

There may be no more than one `LocalVariableTypeTable` attribute _per local variable_ in the `attributes` table of a `Code` attribute.

The `LocalVariableTypeTable` attribute differs from the `LocalVariableTable` attribute ([§4.7.13](jvms-4.html#jvms-4.7.13 "4.7.13. The LocalVariableTable Attribute")) in that it provides signature information rather than descriptor information. This difference is only significant for variables whose type uses a type variable or parameterized type. Such variables will appear in both tables, while variables of other types will appear only in `LocalVariableTable`.

The `LocalVariableTypeTable` attribute has the following format:

LocalVariableTypeTable\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 local\_variable\_type\_table\_length;
    {   u2 start\_pc;
        u2 length;
        u2 name\_index;
        u2 signature\_index;
        u2 index;
    } local\_variable\_type\_table\[local\_variable\_type\_table\_length\];
}

The items of the `LocalVariableTypeTable_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`LocalVariableTypeTable`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

local\_variable\_type\_table\_length

The value of the `local_variable_type_table_length` item indicates the number of entries in the `local_variable_type_table` array.

local\_variable\_type\_table\[\]

Each entry in the `local_variable_type_table` array indicates a range of `code` array offsets within which a local variable has a value. It also indicates the index into the local variable array of the current frame at which that local variable can be found. Each entry must contain the following five items:

start\_pc, length

The given local variable must have a value at indices into the `code` array in the interval \[`start_pc`, `start_pc + length`), that is, between `start_pc` inclusive and `start_pc + length` exclusive.

The value of `start_pc` must be a valid index into the `code` array of this `Code` attribute and must be the index of the opcode of an instruction.

The value of `start_pc + length` must either be a valid index into the `code` array of this `Code` attribute and be the index of the opcode of an instruction, or it must be the first index beyond the end of that `code` array.

name\_index

The value of the `name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must contain a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a valid unqualified name denoting a local variable ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

signature\_index

The value of the `signature_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must contain a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a field signature which encodes the type of a local variable in the source program ([§4.7.9.1](jvms-4.html#jvms-4.7.9.1 "4.7.9.1. Signatures")).

index

The given local variable must be at `index` in the local variable array of the current frame.

If the local variable at `index` is of type `double` or `long`, it occupies both `index` and `index + 1`.

### 4.7.15. The `Deprecated` Attribute

The `Deprecated` attribute is an optional fixed-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). A class, interface, method, or field may be marked using a `Deprecated` attribute to indicate that the class, interface, method, or field has been superseded.

A run-time interpreter or tool that reads the `class` file format, such as a compiler, can use this marking to advise the user that a superseded class, interface, method, or field is being referred to. The presence of a `Deprecated` attribute does not alter the semantics of a class or interface.

The `Deprecated` attribute has the following format:

Deprecated\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
}

The items of the `Deprecated_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`Deprecated`".

attribute\_length

The value of the `attribute_length` item must be zero.

### 4.7.16. The `RuntimeVisibleAnnotations` Attribute

The `RuntimeVisibleAnnotations` attribute is a variable-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). The `RuntimeVisibleAnnotations` attribute records run-time visible annotations on the declaration of the corresponding class, field, or method. The Java Virtual Machine must make these annotations available so they can be returned by the appropriate reflective APIs.

There may be at most one `RuntimeVisibleAnnotations` attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure.

The `RuntimeVisibleAnnotations` attribute has the following format:

RuntimeVisibleAnnotations\_attribute {
    u2         attribute\_name\_index;
    u4         attribute\_length;
    u2         num\_annotations;
    annotation annotations\[num\_annotations\];
}

The items of the `RuntimeVisibleAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`RuntimeVisibleAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_annotations

The value of the `num_annotations` item gives the number of run-time visible annotations represented by the structure.

annotations\[\]

Each entry in the `annotations` table represents a single run-time visible annotation on a declaration. The `annotation` structure has the following format:

annotation {
    u2 type\_index;
    u2 num\_element\_value\_pairs;
    {   u2            element\_name\_index;
        element\_value value;
    } element\_value\_pairs\[num\_element\_value\_pairs\];
}
      

The items of the `annotation` structure are as follows:

type\_index

The value of the `type_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a field descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). The field descriptor denotes the type of the annotation represented by this `annotation` structure.

num\_element\_value\_pairs

The value of the `num_element_value_pairs` item gives the number of element-value pairs of the annotation represented by this `annotation` structure.

element\_value\_pairs\[\]

Each value of the `element_value_pairs` table represents a single element-value pair in the annotation represented by this `annotation` structure. Each `element_value_pairs` entry contains the following two items:

element\_name\_index

The value of the `element_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")). The `constant_pool` entry denotes the name of the element of the element-value pair represented by this `element_value_pairs` entry.

In other words, the entry denotes an element of the annotation type specified by `type_index`.

value

The value of the `value` item represents the value of the element-value pair represented by this `element_value_pairs` entry.

#### 4.7.16.1. The `element_value` structure

The `element_value` structure is a discriminated union representing the value of an element-value pair. It has the following format:

element\_value {
    u1 tag;
    union {
        u2 const\_value\_index;

        {   u2 type\_name\_index;
            u2 const\_name\_index;
        } enum\_const\_value;

        u2 class\_info\_index;

        annotation annotation\_value;

        {   u2            num\_values;
            element\_value values\[num\_values\];
        } array\_value;
    } value;
}

The `tag` item uses a single ASCII character to indicate the type of the value of the element-value pair. This determines which item of the `value` union is in use. [Table 4.7.16.1-A](jvms-4.html#jvms-4.7.16.1-130 "Table 4.7.16.1-A. Interpretation of tag values as types") shows the valid characters for the `tag` item, the type indicated by each character, and the item used in the `value` union for each character. The table's fourth column is used in the description below of one item of the `value` union.

**Table 4.7.16.1-A. Interpretation of `tag` values as types**

   

`tag` Item

Type

`value` Item

Constant Type

`B`

`byte`

`const_value_index`

`CONSTANT_Integer`

`C`

`char`

`const_value_index`

`CONSTANT_Integer`

`D`

`double`

`const_value_index`

`CONSTANT_Double`

`F`

`float`

`const_value_index`

`CONSTANT_Float`

`I`

`int`

`const_value_index`

`CONSTANT_Integer`

`J`

`long`

`const_value_index`

`CONSTANT_Long`

`S`

`short`

`const_value_index`

`CONSTANT_Integer`

`Z`

`boolean`

`const_value_index`

`CONSTANT_Integer`

`s`

`String`

`const_value_index`

`CONSTANT_Utf8`

`e`

Enum type

`enum_const_value`

_Not applicable_

`c`

`Class`

`class_info_index`

_Not applicable_

`@`

Annotation type

`annotation_value`

_Not applicable_

`[`

Array type

`array_value`

_Not applicable_

  

The `value` item represents the value of an element-value pair. The item is a union, whose own items are as follows:

const\_value\_index

The `const_value_index` item denotes either a primitive constant value or a `String` literal as the value of this element-value pair.

The value of the `const_value_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be of a type appropriate to the `tag` item, as specified in the fourth column of [Table 4.7.16.1-A](jvms-4.html#jvms-4.7.16.1-130 "Table 4.7.16.1-A. Interpretation of tag values as types").

enum\_const\_value

The `enum_const_value` item denotes an enum constant as the value of this element-value pair.

The `enum_const_value` item consists of the following two items:

type\_name\_index

The value of the `type_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a field descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). The `constant_pool` entry gives the internal form of the binary name of the type of the enum constant representedby this `element_value` structure ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")).

const\_name\_index

The value of the `const_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")). The `constant_pool` entry gives the simple name of the enum constant represented by this `element_value` structure.

class\_info\_index

The `class_info_index` item denotes a class literal as the value of this element-value pair.

The `class_info_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing a return descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")). The return descriptor gives the type corresponding to the class literal represented by this `element_value` structure. Types correspond to class literals as follows:

*   For a class literal C`.``class`, where C is the name of a class, interface, or array type, the corresponding type is C. The return descriptor in the `constant_pool` will be an _ObjectType_ or an _ArrayType_.
    
*   For a class literal p`.``class`, where p is the name of a primitive type, the corresponding type is p. The return descriptor in the `constant_pool` will be a _BaseType_ character.
    
*   For a class literal `void``.``class`, the corresponding type is `void`. The return descriptor in the `constant_pool` will be _V_.
    

For example, the class literal `Object.class` corresponds to the type `Object`, so the `constant_pool` entry is `Ljava/lang/Object;`, whereas the class literal `int.class` corresponds to the type `int`, so the `constant_pool` entry is `I`.

The class literal `void.class` corresponds to `void`, so the `constant_pool` entry is _V_, whereas the class literal `Void.class` corresponds to the type `Void`, so the `constant_pool` entry is `Ljava/lang/Void;`.

annotation\_value

The `annotation_value` item denotes a "nested" annotation as the value of this element-value pair.

The value of the `annotation_value` item is an `annotation` structure ([§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")) that gives the annotation represented by this `element_value` structure.

array\_value

The `array_value` item denotes an array as the value of this element-value pair.

The `array_value` item consists of the following two items:

num\_values

The value of the `num_values` item gives the number of elements in the array represented by this `element_value` structure.

values\[\]

Each value in the `values` table gives the corresponding element of the array represented by this `element_value` structure.

### 4.7.17. The `RuntimeInvisibleAnnotations` Attribute

The `RuntimeInvisibleAnnotations` attribute is a variable-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). The `RuntimeInvisibleAnnotations` attribute records run-time invisible annotations on the declaration of the corresponding class, method, or field.

There may be at most one `RuntimeInvisibleAnnotations` attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure.

The `RuntimeInvisibleAnnotations` attribute is similar to the `RuntimeVisibleAnnotations` attribute ([§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")), except that the annotations represented by a `RuntimeInvisibleAnnotations` attribute must not be made available for return by reflective APIs, unless the Java Virtual Machine has been instructed to retain these annotations via some implementation-specific mechanism such as a command line flag. In the absence of such instructions, the Java Virtual Machine ignores this attribute.

The `RuntimeInvisibleAnnotations` attribute has the following format:

RuntimeInvisibleAnnotations\_attribute {
    u2         attribute\_name\_index;
    u4         attribute\_length;
    u2         num\_annotations;
    annotation annotations\[num\_annotations\];
}

The items of the `RuntimeInvisibleAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`RuntimeInvisibleAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_annotations

The value of the `num_annotations` item gives the number of run-time invisible annotations represented by the structure.

annotations\[\]

Each entry in the `annotations` table represents a single run-time invisible annotation on a declaration. The `annotation` structure is specified in [§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute").

### 4.7.18. The `RuntimeVisibleParameterAnnotations` Attribute

The `RuntimeVisibleParameterAnnotations` attribute is a variable-length attribute in the `attributes` table of the `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). The `RuntimeVisibleParameterAnnotations` attribute records run-time visible annotations on the declarations of formal parameters of the corresponding method. The Java Virtual Machine must make these annotations available so they can be returned by the appropriate reflective APIs.

There may be at most one `RuntimeVisibleParameterAnnotations` attribute in the `attributes` table of a `method_info` structure.

The `RuntimeVisibleParameterAnnotations` attribute has the following format:

RuntimeVisibleParameterAnnotations\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u1 num\_parameters;
    {   u2         num\_annotations;
        annotation annotations\[num\_annotations\];
    } parameter\_annotations\[num\_parameters\];
}

The items of the `RuntimeVisibleParameterAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`RuntimeVisibleParameterAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_parameters

The value of the `num_parameters` item gives the number of formal parameters of the method represented by the `method_info` structure on which the annotation occurs.

This duplicates information that could be extracted from the method descriptor.

parameter\_annotations\[\]

Each entry in the `parameter_annotations` table represents all of the run-time visible annotations on the declaration of a single formal parameter. The _i_'th entry in the table corresponds to the _i_'th formal parameter in the method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")). Each `parameter_annotations` entry contains the following two items:

num\_annotations

The value of the `num_annotations` item indicates the number of run-time visible annotations on the declaration of the formal parameter corresponding to the `parameter_annotations` entry.

annotations\[\]

Each entry in the `annotations` table represents a single run-time visible annotation on the declaration of the formal parameter corresponding to the `parameter_annotations` entry. The `annotation` structure is specified in [§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute").

### 4.7.19. The `RuntimeInvisibleParameterAnnotations` Attribute

The `RuntimeInvisibleParameterAnnotations` attribute is a variable-length attribute in the `attributes` table of a `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). The `RuntimeInvisibleParameterAnnotations` attribute records run-time invisible annotations on the declarations of formal parameters of the corresponding method.

There may be at most one `RuntimeInvisibleParameterAnnotations` attribute in the `attributes` table of a `method_info` structure.

The `RuntimeInvisibleParameterAnnotations` attribute is similar to the `RuntimeVisibleParameterAnnotations` attribute ([§4.7.18](jvms-4.html#jvms-4.7.18 "4.7.18. The RuntimeVisibleParameterAnnotations Attribute")), except that the annotations represented by a `RuntimeInvisibleParameterAnnotations` attribute must not be made available for return by reflective APIs, unless the Java Virtual Machine has specifically been instructed to retain these annotations via some implementation-specific mechanism such as a command line flag. In the absence of such instructions, the Java Virtual Machine ignores this attribute.

The `RuntimeInvisibleParameterAnnotations` attribute has the following format:

RuntimeInvisibleParameterAnnotations\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u1 num\_parameters;
    {   u2         num\_annotations;
        annotation annotations\[num\_annotations\];
    } parameter\_annotations\[num\_parameters\];
}

The items of the `RuntimeInvisibleParameterAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`RuntimeInvisibleParameterAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_parameters

The value of the `num_parameters` item gives the number of formal parameters of the method represented by the `method_info` structure on which the annotation occurs.

This duplicates information that could be extracted from the method descriptor.

parameter\_annotations\[\]

Each entry in the `parameter_annotations` table represents all of the run-time invisible annotations on the declaration of a single formal parameter. The _i_'th entry in the table corresponds to the _i_'th formal parameter in the method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")). Each `parameter_annotations` entry contains the following two items:

num\_annotations

The value of the `num_annotations` item indicates the number of run-time invisible annotations on the declaration of the formal parameter corresponding to the `parameter_annotations` entry.

annotations\[\]

Each entry in the `annotations` table represents a single run-time invisible annotation on the declaration of the formal parameter corresponding to the `parameter_annotations` entry. The `annotation` structure is specified in [§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute").

### 4.7.20. The `RuntimeVisibleTypeAnnotations` Attribute

The `RuntimeVisibleTypeAnnotations` attribute is an variable-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure, or `Code` attribute ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods"), [§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). The `RuntimeVisibleTypeAnnotations` attribute records run-time visible annotations on types used in the declaration of the corresponding class, field, or method, or in an expression in the corresponding method body. The `RuntimeVisibleTypeAnnotations` attribute also records run-time visible annotations on type parameter declarations of generic classes, interfaces, methods, and constructors. The Java Virtual Machine must make these annotations available so they can be returned by the appropriate reflective APIs.

There may be at most one `RuntimeVisibleTypeAnnotations` attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure, or `Code` attribute.

An `attributes` table contains a `RuntimeVisibleTypeAnnotations` attribute only if types are annotated in kinds of declaration or expression that correspond to the parent structure or attribute of the `attributes` table.

For example, all annotations on types in the `implements` clause of a class declaration are recorded in the `RuntimeVisibleTypeAnnotations` attribute of the class's `ClassFile` structure. Meanwhile, all annotations on the type in a field declaration are recorded in the `RuntimeVisibleTypeAnnotations` attribute of the field's `field_info` structure.

The `RuntimeVisibleTypeAnnotations` attribute has the following format:

RuntimeVisibleTypeAnnotations\_attribute {
    u2              attribute\_name\_index;
    u4              attribute\_length;
    u2              num\_annotations;
    type\_annotation annotations\[num\_annotations\];
}

The items of the `RuntimeVisibleTypeAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure representing the string "`RuntimeVisibleTypeAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_annotations

The value of the `num_annotations` item gives the number of run-time visible type annotations represented by the structure.

annotations\[\]

Each entry in the `annotations` table represents a single run-time visible annotation on a type used in a declaration or expression. The `type_annotation` structure has the following format:

type\_annotation {
    u1 target\_type;
    union {
        type\_parameter\_target;
        supertype\_target;
        type\_parameter\_bound\_target;
        empty\_target;
        method\_formal\_parameter\_target;
        throws\_target;
        localvar\_target;
        catch\_target;
        offset\_target;
        type\_argument\_target;
    } target\_info;
    type\_path target\_path;
    u2        type\_index;
    u2        num\_element\_value\_pairs;
    {   u2            element\_name\_index;
        element\_value value;
    } element\_value\_pairs\[num\_element\_value\_pairs\];
}
      

The first three items - `target_type`, `target_info`, and `target_path` - specify the precise location of the annotated type. The last three items - `type_index`, `num_element_value_pairs`, and `element_value_pairs[]` - specify the annotation's own type and element-value pairs.

The items of the `type_annotation` structure are as follows:

target\_type

The value of the `target_type` item denotes the kind of target on which the annotation appears. The various kinds of target correspond to the _type contexts_ of the Java programming language where types are used in declarations and expressions (JLS §4.11).

The legal values of `target_type` are specified in [Table 4.7.20-A](jvms-4.html#jvms-4.7.20-400 "Table 4.7.20-A. Interpretation of target_type values (Part 1)") and [Table 4.7.20-B](jvms-4.html#jvms-4.7.20-410 "Table 4.7.20-B. Interpretation of target_type values (Part 2)"). Each value is a one-byte tag indicating which item of the `target_info` union follows the `target_type` item to give more information about the target.

The kinds of target in [Table 4.7.20-A](jvms-4.html#jvms-4.7.20-400 "Table 4.7.20-A. Interpretation of target_type values (Part 1)") and [Table 4.7.20-B](jvms-4.html#jvms-4.7.20-410 "Table 4.7.20-B. Interpretation of target_type values (Part 2)") correspond to the type contexts in JLS §4.11. Namely, `target_type` values 0x10-0x17 and 0x40-0x42 correspond to type contexts 1-10, while `target_type` values 0x43-0x4B correspond to type contexts 11-16.

The value of the `target_type` item determines whether the `type_annotation` structure appears in a `RuntimeVisibleTypeAnnotations` attribute in a `ClassFile` structure, a `field_info` structure, a `method_info` structure, or a `Code` attribute. [Table 4.7.20-C](jvms-4.html#jvms-4.7.20-420 "Table 4.7.20-C. Location of enclosing attribute for target_type values") gives the location of the `RuntimeVisibleTypeAnnotations` attribute for a `type_annotation` structure with each legal `target_type` value.

target\_info

The value of the `target_info` item denotes precisely which type in a declaration or expression is annotated.

The items of the `target_info` union are specified in [§4.7.20.1](jvms-4.html#jvms-4.7.20.1 "4.7.20.1. The target_info union").

target\_path

The value of the `target_path` item denotes precisely which part of the type indicated by `target_info` is annotated.

The format of the `type_path` structure is specified in [§4.7.20.2](jvms-4.html#jvms-4.7.20.2 "4.7.20.2. The type_path structure").

type\_index, num\_element\_value\_pairs, element\_value\_pairs\[\]

The meaning of these items in the `type_annotation` structure is the same as their meaning in the `annotation` structure ([§4.7.16](jvms-4.html#jvms-4.7.16 "4.7.16. The RuntimeVisibleAnnotations Attribute")).

**Table 4.7.20-A. Interpretation of `target_type` values (Part 1)**

  

Value

Kind of target

`target_info` item

0x00

type parameter declaration of generic class or interface

`type_parameter_target`

0x01

type parameter declaration of generic method or constructor

`type_parameter_target`

0x10

type in `extends` or `implements` clause of class declaration (including the direct superclass or direct superinterface of an anonymous class declaration), or in `extends` clause of interface declaration

`supertype_target`

0x11

type in bound of type parameter declaration of generic class or interface

`type_parameter_bound_target`

0x12

type in bound of type parameter declaration of generic method or constructor

`type_parameter_bound_target`

0x13

type in field declaration

`empty_target`

0x14

return type of method, or type of newly constructed object

`empty_target`

0x15

receiver type of method or constructor

`empty_target`

0x16

type in formal parameter declaration of method, constructor, or lambda expression

`formal_parameter_target`

0x17

type in `throws` clause of method or constructor

`throws_target`

  

**Table 4.7.20-B. Interpretation of `target_type` values (Part 2)**

  

Value

Kind of target

`target_info` item

0x40

type in local variable declaration

`localvar_target`

0x41

type in resource variable declaration

`localvar_target`

0x42

type in exception parameter declaration

`catch_target`

0x43

type in _instanceof_ expression

`offset_target`

0x44

type in _new_ expression

`offset_target`

0x45

type in method reference expression using `::`_new_

`offset_target`

0x46

type in method reference expression using `::`_Identifier_

`offset_target`

0x47

type in cast expression

`type_argument_target`

0x48

type argument for generic constructor in _new_ expression or explicit constructor invocation statement

`type_argument_target`

0x49

type argument for generic method in method invocation expression

`type_argument_target`

0x4A

type argument for generic constructor in method reference expression using `::`_new_

`type_argument_target`

0x4B

type argument for generic method in method reference expression using `::`_Identifier_

`type_argument_target`

  

**Table 4.7.20-C. Location of enclosing attribute for `target_type` values**

  

Value

Kind of target

Location

0x00

type parameter declaration of generic class or interface

`ClassFile`

0x01

type parameter declaration of generic method or constructor

`method_info`

0x10

type in `extends` clause of class or interface declaration, or in `implements` clause of interface declaration

`ClassFile`

0x11

type in bound of type parameter declaration of generic class or interface

`ClassFile`

0x12

type in bound of type parameter declaration of generic method or constructor

`method_info`

0x13

type in field declaration

`field_info`

0x14

return type of method or constructor

`method_info`

0x15

receiver type of method or constructor

`method_info`

0x16

type in formal parameter declaration of method, constructor, or lambda expression

`method_info`

0x17

type in `throws` clause of method or constructor

`method_info`

0x40-0x4B

types in local variable declarations, resource variable declarations, exception parameter declarations, expressions

`Code`

  

#### 4.7.20.1. The `target_info` union

The items of the `target_info` union (except for the first) specify precisely which type in a declaration or expression is annotated. The first item specifies not which type, but rather which declaration of a type parameter is annotated. The items are as follows:

*   The `type_parameter_target` item indicates that an annotation appears on the declaration of the _i_'th type parameter of a generic class, generic interface, generic method, or generic constructor.
    
    type\_parameter\_target {
        u1 type\_parameter\_index;
    }
        
    
    The value of the `type_parameter_index` item specifies which type parameter declaration is annotated. A `type_parameter_index` value of `0` specifies the first type parameter declaration.
    
*   The `supertype_target` item indicates that an annotation appears on a type in the `extends` or `implements` clause of a class or interface declaration.
    
    supertype\_target {
        u2 supertype\_index;
    }
        
    
    A `supertype_index` value of 65535 specifies that the annotation appears on the superclass in an `extends` clause of a class declaration.
    
    Any other `supertype_index` value is an index into the `interfaces` array of the enclosing `ClassFile` structure, and specifies that the annotation appears on that superinterface in either the `implements` clause of aclass declaration or the `extends` clause of an interface declaration.

*   The `type_parameter_bound_target` item indicates that an annotation appears on the _i_'th bound of the _j_'th type parameter declaration of a generic class, interface, method, or constructor.
    
    type\_parameter\_bound\_target {
        u1 type\_parameter\_index;
        u1 bound\_index;
    }
        
    
    The value of the of `type_parameter_index` item specifies which type parameter declaration has an annotated bound. A `type_parameter_index` value of `0` specifies the first type parameter declaration.
    
    The value of the `bound_index` item specifies which bound of the type parameter declaration indicated by `type_parameter_index` is annotated. A `bound_index` value of `0` specifies the first bound of a type parameter declaration.
    
    The `type_parameter_bound_target` item records that a bound is annotated, but does not record the type which constitutes the bound. The type may be found by inspecting the class signature or method signature stored in the appropriate `Signature` attribute.
    
*   The `empty_target` item indicates that an annotation appears on either the type in a field declaration, the return type of a method, the type of a newly constructed object, or the receiver type of a method or constructor.
    
    empty\_target {
    }
        
    
    Only one type appears in each of these locations, so there is no per-type information to represent in the `target_info` union.
    
*   The `formal_parameter_target` item indicates that an annotation appears on the type in a formal parameter declaration of a method, constructor, or lambda expression.
    
    formal\_parameter\_target {
        u1 formal\_parameter\_index;
    }
        
    
    The value of the `formal_parameter_index` item specifies which formal parameter declaration has an annotated type. A `formal_parameter_index` value of `0` specifies the first formal parameter declaration.
    
    The `formal_parameter_target` item records that a formal parameter's type is annotated, but does not record the type itself. The type may be found by inspecting the method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the `method_info` structure enclosing the `RuntimeVisibleTypeAnnotations` attribute. A `formal_parameter_index` value of `0` indicates the first parameter descriptor in the method descriptor.
    
*   The `throws_target` item indicates that an annotation appears on the _i_'th type in the `throws` clause of a method or constructor declaration.
    
    throws\_target {
        u2 throws\_type\_index;
    }
        
    
    The value of the `throws_type_index` item is an index into the `exception_index_table` array of the `Exceptions` attribute of the `method_info` structure enclosing the `RuntimeVisibleTypeAnnotations` attribute.
    
*   The `localvar_target` item indicates that an annotation appears on the type in a local variable declaration, including a variable declared as a resource in a `try`\-with-resources statement.
    
    localvar\_target {
        u2 table\_length;
        {   u2 start\_pc;
            u2 length;
            u2 index;
        } table\[table\_length\];
    }
        
    
    The value of the `table_length` item gives the number of entries in the `table` array. Each entry indicates a range of `code` array offsets within which a local variable has a value. It also indicates the index into the local variable array of the current frame at which that local variable can be found. Each entry contains the following three items:
    
    start\_pc, length
    
    The given local variable has a value at indices into the `code` array in the interval \[`start_pc`, `start_pc + length`), that is, between `start_pc` inclusive and `start_pc + length` exclusive.
    
    index
    
    The given local variable must be at `index` in the local variable array of the current frame.
    
    If the local variable at `index` is of type `double` or `long`, it occupies both `index` and `index + 1`.
    
    A table is needed to fully specify the local variable whose type is annotated, because a single local variable may be represented with different local variable indices over multiple live ranges. The `start_pc`, `length`, and `index` items in each table entry specify the same information as a `LocalVariableTable` attribute.
    
    The `localvar_target` item records that a local variable's type is annotated, but does not record the type itself. The type may be found by inspecting the appropriate `LocalVariableTable` attribute.
    
*   The `catch_target` item indicates that an annotation appears on the _i_'th type in an exception parameter declaration.
    
    catch\_target {
        u2 exception\_table\_index;
    }
        
    
    The value of the `exception_table_index` item is an index into the `exception_table` array of the `Code` attribute enclosing the `RuntimeVisibleTypeAnnotations` attribute.
    
    The possibility of more than one type in an exception parameter declaration arises from the multi-`catch` clause of the `try` statement, where the type of the exception parameter is a union of types (JLS §14.20). A compiler usually creates one `exception_table` entry for each type in the union, which allows the `catch_target` item to distinguish them. This preserves the correspondence between a type and its annotations.
    
*   The `offset_target` item indicates that an annotation appears on either the type in an _instanceof_ expression or a _new_ expression, or the type before the `::` in a method reference expression.
    
    offset\_target {
        u2 offset;
    }
        
    
    The value of the `offset` item specifies the `code` array offset of either the _instanceof_ bytecode instruction corresponding to the _instanceof_ expression, the _new_ bytecode instruction corresponding to the _new_ expression, or the bytecode instruction corresponding to the method reference expression.
    
*   The `type_argument_target` item indicates that an annotation appears either on the _i_'th type in a cast expression, or on the _i_'th type argument in the explicit type argument list for any of the following: a _new_ expression, an explicit constructor invocation statement, a method invocation expression, or a method reference expression.
    
    type\_argument\_target {
        u2 offset;
        u1 type\_argument\_index;
    }
        
    
    The value of the `offset` item specifies the `code` array offset of either the bytecode instruction corresponding to the cast expression, the _new_ bytecode instruction corresponding to the _new_ expression, the bytecode instruction corresponding to the explicit constructor invocation statement, the bytecode instruction corresponding to the method invocation expression, or the bytecode instruction corresponding to the method reference expression.
    
    For a cast expression, the value of the `type_argument_index` item specifies which type in the cast operator is annotated. A `type_argument_index` value of `0` specifies the first (or only) type in the cast operator.
    
    The possibility of more than one type in a cast expression arises from a cast to an intersection type.
    
    For an explicit type argument list, the value of the `type_argument_index` item specifies which type argument is annotated. A `type_argument_index` value of `0` specifies the first type argument.
    

#### 4.7.20.2. The `type_path` structure

Wherever a type is used in a declaration or expression, the `type_path` structure identifies which part of the type is annotated. An annotation may appear on the type itself, but if the type is a reference type, then there are additional locations where an annotation may appear:

*   If an array type T`[]` is used in a declaration or expression, then an annotation may appear on any component type of the array type, including the element type.
    
*   If a nested type T1`.`T2 is used in a declaration or expression, then an annotation may appear on the name of the top level type or any member type.
    
*   If a parameterized type T`<`A`>` or T`<`? extends A`>` or T`<`? super A`>` is used in a declaration or expression, then an annotation may appear on any type argument or on the bound of any wildcard type argument.
    

For example, consider the different parts of `String``[]``[]` that are annotated in:

@Foo String\[\]\[\]   // Annotates the class type String
String @Foo \[\]\[\]  // Annotates the array type String\[\]\[\]
String\[\] @Foo \[\]  // Annotates the array type String\[\]

or the different parts of the nested type `Outer.Middle.Inner` that are annotated in:

@Foo Outer.Middle.Inner
Outer.@Foo Middle.Inner
Outer.Middle.@Foo Inner

or the different parts of the parameterized types `Map<String,Object>` and `List<...>` that are annotated in:

@Foo Map<String,Object>
Map<@Foo String,Object>
Map<String,@Foo Object>

List<@Foo ? extends String>
List<? extends @Foo String>

The `type_path` structure has the following format:

type\_path {
    u1 path\_length;
    {   u1 type\_path\_kind;
        u1 type\_argument\_index;
    } path\[path\_length\];
}

The value of the `path_length` item gives the number of entries in the `path` array:

*   If the value of `path_length` is `0`, then the annotation appears directly on the type itself.
    
*   If the value of `path_length` is non-zero, then each entry in the `path` array represents an iterative, left-to-right step towards the precise location of the annotation in an array type, nested type, or parameterized type. (In an array type, the iteration visits the array type itself, then its component type, then the component type of that component type, and so on, until the element type is reached.) Each entry contains the following two items:
    
    type\_path\_kind
    
    The legal values for the `type_path_kind` item are listed in [Table 4.7.20.2-A](jvms-4.html#jvms-4.7.20.2-220-B-A.1 "Table 4.7.20.2-A. Interpretation of type_path_kind values").
    
    **Table 4.7.20.2-A. Interpretation of `type_path_kind` values**
    
     
    
    Value
    
    Interpretation
    
    `0`
    
    Annotation is deeper in an array type
    
    `1`
    
    Annotation is deeper in a nested type
    
    `2`
    
    Annotation is on the bound of a wildcard type argument of a parameterized type
    
    `3`
    
    Annotation is on a type argument of a parameterized type
    
      
    
    type\_argument\_index
    
    If the value of the `type_path_kind` item is `0`, `1`, or `2`, then the value of the `type_argument_index` item is `0`.
    
    If the value of the `type_path_kind` item is `3`, then the value of the `type_argument_index` item specifies which type argument of a parameterized type is annotated, where `0` indicates the first type argument of a parameterized type.
    

**Table 4.7.20.2-B. `type_path` structures for `@A Map<@B ? extends @C String, @D List<@E Object>>`**

  

Annotation

`path_length`

`path`

`@A`

`0`

`[]`

`@B`

`1`

`[{type_path_kind: 3; type_argument_index: 0}]`

`@C`

`2`

`[{type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 2; type_argument_index: 0}]`

`@D`

`1`

`[{type_path_kind: 3; type_argument_index: 1}]`

`@E`

`2`

`[{type_path_kind: 3; type_argument_index: 1}, {type_path_kind: 3; type_argument_index: 0}]`

  

**Table 4.7.20.2-C. `type_path` structures for `@I String @F [] @G [] @H []`**

  

Annotation

`path_length`

`path`

`@F`

`0`

`[]`

`@G`

`1`

`[{type_path_kind: 0; type_argument_index: 0}]`

`@H`

`2`

`[{type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

`@I`

`3`

`[{type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

  

**Table 4.7.20.2-D. `type_path` structures for `@A List<@B Comparable<@F Object @C [] @D [] @E []>>`**

  

Annotation

`path_length`

`path`

`@A`

`0`

`[]`

`@B`

`1`

`[{type_path_kind: 3; type_argument_index: 0}]`

`@C`

`2`

`[{type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}]`

`@D`

`3`

`[{type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

`@E`

`4`

`[{type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

`@F`

`5`

`[{type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

  

**Table 4.7.20.2-E. `type_path` structures for `@C Outer . @B Middle . @A Inner`**

  

Annotation

`path_length`

`path`

`@A`

`2`

`[{type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 1; type_argument_index: 0}]`

`@B`

`1`

`[{type_path_kind: 1; type_argument_index: 0}]`

`@C`

`0`

`[]`

  

**Table 4.7.20.2-F. `type_path` structures for `Outer . Middle<@D Foo . @C Bar> . Inner<@B String @A []>`**

  

Annotation

`path_length`

`path`

`@A`

`3`

`[{type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}]`

`@B`

`4`

`[{type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 0; type_argument_index: 0}]`

`@C`

`3`

`[{type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}, {type_path_kind: 1; type_argument_index: 0}]`

`@D`

`2`

`[{type_path_kind: 1; type_argument_index: 0}, {type_path_kind: 3; type_argument_index: 0}]`

  

### 4.7.21. The `RuntimeInvisibleTypeAnnotations` Attribute

The `RuntimeInvisibleTypeAnnotations` attribute is an variable-length attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure, or `Code` attribute ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.5](jvms-4.html#jvms-4.5 "4.5. Fields"), [§4.6](jvms-4.html#jvms-4.6 "4.6. Methods"), [§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). The `RuntimeInvisibleTypeAnnotations` attribute records run-time invisible annotations on types used in the corresponding declaration of a class, field, or method, or in an expression in the corresponding method body. The `RuntimeInvisibleTypeAnnotations` attribute also records annotations on type parameter declarations of generic classes, interfaces, methods, and constructors.

There may be at most one `RuntimeInvisibleTypeAnnotations` attribute in the `attributes` table of a `ClassFile`, `field_info`, or `method_info` structure, or `Code` attribute.

An `attributes` table contains a `RuntimeInvisibleTypeAnnotations` attribute only if types are annotated in kinds of declaration or expression that correspond to the parent structure or attribute of the `attributes` table.

The `RuntimeInvisibleTypeAnnotations` attribute has the following format:

RuntimeInvisibleTypeAnnotations\_attribute {
    u2              attribute\_name\_index;
    u4              attribute\_length;
    u2              num\_annotations;
    type\_annotation annotations\[num\_annotations\];
}

The items of the `RuntimeInvisibleTypeAnnotations_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure representing the string "`RuntimeInvisibleTypeAnnotations`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

num\_annotations

The value of the `num_annotations` item gives the number of run-time invisible type annotations represented by the structure.

annotations\[\]

Each entry in the `annotations` table represents a single run-time invisible annotation on a type used in a declaration or expression. The `type_annotation` structure is specified in [§4.7.20](jvms-4.html#jvms-4.7.20 "4.7.20. The RuntimeVisibleTypeAnnotations Attribute").

### 4.7.22. The `AnnotationDefault` Attribute

The `AnnotationDefault` attribute is a variable-length attribute in the `attributes` table of certain `method_info` structures ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")), namely those representing elements of annotation types (JLS §9.6.1). The `AnnotationDefault` attribute records the default value (JLS §9.6.2) for the element represented by the `method_info` structure. The Java Virtual Machine must make this default value available so it can be applied by appropriate reflective APIs.

There may be at most one `AnnotationDefault` attribute in the `attributes` table of a `method_info` structure which represents an element of an annotation type.

The `AnnotationDefault` attribute has the following format:

AnnotationDefault\_attribute {
    u2            attribute\_name\_index;
    u4            attribute\_length;
    element\_value default\_value;
}

The items of the `AnnotationDefault_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`AnnotationDefault`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

default\_value

The `default_value` item represents the default value of the annotation type element represented by the `method_info` structure enclosing this `AnnotationDefault` attribute.

### 4.7.23. The `BootstrapMethods` Attribute

The `BootstrapMethods` attribute is a variable-length attribute in the `attributes` table of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")). The `BootstrapMethods` attribute records bootstrap method specifiers referenced by _invokedynamic_ instructions ([§_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic "invokedynamic")).

There must be exactly one `BootstrapMethods` attribute in the `attributes` table of a `ClassFile` structure if the `constant_pool` table of the `ClassFile` structure has at least one `CONSTANT_InvokeDynamic_info` entry ([§4.4.10](jvms-4.html#jvms-4.4.10 "4.4.10. The CONSTANT_InvokeDynamic_info Structure")).

There may be at most one `BootstrapMethods` attribute in the `attributes` table of a `ClassFile` structure.

The `BootstrapMethods` attribute has the following format:

BootstrapMethods\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u2 num\_bootstrap\_methods;
    {   u2 bootstrap\_method\_ref;
        u2 num\_bootstrap\_arguments;
        u2 bootstrap\_arguments\[num\_bootstrap\_arguments\];
    } bootstrap\_methods\[num\_bootstrap\_methods\];
}

The items of the `BootstrapMethods_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) representing the string "`BootstrapMethods`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

The value of the `attribute_length` item is thus dependent on the number of _invokedynamic_ instructions in this `ClassFile` structure.

num\_bootstrap\_methods

The value of the `num_bootstrap_methods` item determines the number of bootstrap method specifiers in the `bootstrap_methods` array.

bootstrap\_methods\[\]

Each entry in the `bootstrap_methods` table contains an index to a `CONSTANT_MethodHandle_info` structure ([§4.4.8](jvms-4.html#jvms-4.4.8 "4.4.8. The CONSTANT_MethodHandle_info Structure")) which specifies a bootstrap method, and a sequence (perhaps empty) of indexes to _static arguments_ for the bootstrap method.

Each `bootstrap_methods` entry must contain the following three items:

bootstrap\_method\_ref

The value of the `bootstrap_method_ref` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_MethodHandle_info` structure ([§4.4.8](jvms-4.html#jvms-4.4.8 "4.4.8. The CONSTANT_MethodHandle_info Structure")).

The form of the method handle is driven by the continuing resolution of the call site specifier in [§_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic "invokedynamic"), where execution of `invoke` in `java.lang.invoke.MethodHandle` requires that the bootstrap method handle be adjustable to the actual arguments being passed, as if by a call to `java.lang.invoke.MethodHandle.asType`. Accordingly, the `reference_kind` item of the `CONSTANT_MethodHandle_info` structure should have the value 6 or 8 ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")), and the `reference_index` item should specify a static method or constructor that takes three arguments of type `java.lang.invoke.MethodHandles.Lookup`, `String`, and `java.lang.invoke.MethodType`, in that order. Otherwise, invocation of the bootstrap method handle during call site specifier resolution will complete abruptly.

num\_bootstrap\_arguments

The value of the `num_bootstrap_arguments` item gives the number of items in the `bootstrap_arguments` array.

<dt>bootstrap\_arguments\[\]

Each entry in the `bootstrap_arguments` array must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_String_info`, `CONSTANT_Class_info`, `CONSTANT_Integer_info`, `CONSTANT_Long_info`, `CONSTANT_Float_info`, `CONSTANT_Double_info`, `CONSTANT_MethodHandle_info`, or `CONSTANT_MethodType_info` structure ([§4.4.3](jvms-4.html#jvms-4.4.3 "4.4.3. The CONSTANT_String_info Structure"), [§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure"), [§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures"), [§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures"), [§4.4.8](jvms-4.html#jvms-4.4.8 "4.4.8. The CONSTANT_MethodHandle_info Structure"), [§4.4.9](jvms-4.html#jvms-4.4.9 "4.4.9. The CONSTANT_MethodType_info Structure")).

### 4.7.24. The `MethodParameters` Attribute

The `MethodParameters` attribute is a variable-length attribute in the `attributes` table of a `method_info` structure ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")). A `MethodParameters` attribute records information about the formal parameters of a method, such as their names.

There may be at most one `MethodParameters` attribute in the `attributes` table of a `method_info` structure.

The `MethodParameters` attribute has the following format:

MethodParameters\_attribute {
    u2 attribute\_name\_index;
    u4 attribute\_length;
    u1 parameters\_count;
    {   u2 name\_index;
        u2 access\_flags;
    } parameters\[parameters\_count\];
}

The items of the `MethodParameters_attribute` structure are as follows:

attribute\_name\_index

The value of the `attribute_name_index` item must be a valid index into the `constant_pool` table. The `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure representing the string "`MethodParameters`".

attribute\_length

The value of the `attribute_length` item indicates the length of the attribute, excluding the initial six bytes.

parameters\_count

The value of the `parameters_count` item indicates the number of parameter descriptors in the method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) referenced by the `descriptor_index` of the attribute's enclosing `method_info` structure.

This is not a constraint which a Java Virtual Machine implementation must enforce during format checking ([§4.8](jvms-4.html#jvms-4.8 "4.8. Format Checking")). The task of matching parameter descriptors in a method descriptor against the items in the `parameters` array below is done by the reflection libraries of the Java SE platform.

parameters\[\]

Each entry in the `parameters` array contains the following pair of items:

name\_index

The value of the `name_index` item must either be zero or a valid index into the `constant_pool` table.

If the value of the `name_index` item is zero, then this `parameters` element indicates a formal parameter with no name.

If the value of the `name_index` item is nonzero, the `constant_pool` entry at that index must be a `CONSTANT_Utf8_info` structure representing a valid unqualified name denoting a formal parameter ([§4.2.2](jvms-4.html#jvms-4.2.2 "4.2.2. Unqualified Names")).

access\_flags

The value of the `access_flags` item is as follows:

0x0010 (`ACC_FINAL`)

Indicates that the formal parameter was declared `final`.

0x1000 (`ACC_SYNTHETIC`)

Indicates that the formal parameter was not explicitly or implicitly declared in source code, according to the specification of the language in which the source code was written (JLS §13.1). (The formal parameter is an implementation artifact of the compiler which produced this `class` file.)

0x8000 (`ACC_MANDATED`)

Indicates that the formal parameter was implicitly declared in source code, according to the specification of the language in which the source code was written (JLS §13.1). (The formal parameter is mandated by a language specification, so all compilers for the language must emit it.)

The _i_'th entry in the `parameters` array corresponds to the _i_'th parameter descriptor in the enclosing method's descriptor. (The `parameters_count` item is one byte because a method descriptor is limited to 255 parameters.) Effectively, this means the `parameters` array stores information for all the parameters of the method. One could imagine other schemes, where entries in the `parameters` array specify their corresponding parameter descriptors, but it would unduly complicate the `MethodParameters` attribute.

The _i_'th entry in the `parameters` array may or may not correspond to the _i_'th type in the enclosing method's `Signature` attribute (if present), or to the _i_'th annotation in the enclosing method's parameter annotations.

4.8. Format Checking
--------------------

When a prospective `class` file is loaded by the Java Virtual Machine ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")), the Java Virtual Machine first ensures that the file has the basic format of a `class` file ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")). This process is known as _format checking_. The checks are as follows:

*   The first four bytes must contain the right magic number.
    
*   All recognized attributes must be of the proper length.
    
*   The `class` file must not be truncated or have extra bytes at the end.
    
*   The constant pool must satisfy the constraints documented throughout [§4.4](jvms-4.html#jvms-4.4 "4.4. The Constant Pool").
    
    For example, each `CONSTANT_Class_info` structure in the constant pool must contain in its `name_index` item a valid constant pool index for a `CONSTANT_Utf8_info` structure.
    
*   All field references and method references in the constant pool must have valid names, valid classes, and valid descriptors ([§4.3](jvms-4.html#jvms-4.3 "4.3. Descriptors")).
    
    Format checking does not ensure that the given field or method actually exists in the given class, nor that the descriptors given refer to real classes. Format checking ensures only that these items are well formed. More detailed checking is performed when the bytecodes themselves are verified, and during resolution.
    

These checks for basic `class` file integrity are necessary for any interpretation of the `class` file contents. Format checking is distinct from bytecode verification, although historically they have been confused because both are a form of integrity check.

4.9. Constraints on Java Virtual Machine Code
---------------------------------------------

The code for a method, instance initialization method, or class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) is stored in the `code` array of the `Code` attribute of a `method_info` structure of a `class` file ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). This section describes the constraints associated with the contents of the `Code_attribute` structure.

### 4.9.1. Static Constraints

The _static constraints_ on a `class` file are those defining the well-formedness of the file. These constraints have been given in the previous sections, except for static constraints on the code in the `class` file. The static constraints on the code in a `class` file specify how Java Virtual Machine instructions must be laid out in the `code` array and what the operands of individual instructions must be.

The static constraints on the instructions in the `code` array are as follows:

*   Only instances of the instructions documented in [§6.5](jvms-6.html#jvms-6.5 "6.5. Instructions") may appear in the `code` array. Instances of instructions using the reserved opcodes ([§6.2](jvms-6.html#jvms-6.2 "6.2. Reserved Opcodes")) or any opcodes not documented in this specification must not appear in the `code` array.
    
    If the `class` file version number is 51.0 or above, then neither the _jsr_ opcode or the _jsr\_w_ opcode may appear in the `code` array.
    
*   The opcode of the first instruction in the `code` array begins at index `0`.
    
*   For each instruction in the `code` array except the last, the index of the opcode of the next instruction equals the index of the opcode of the current instruction plus the length of that instruction, including all its operands.
    
    The _wide_ instruction is treated like any other instruction for these purposes; the opcode specifying the operation that a _wide_ instruction is to modify is treated as one of the operands of that _wide_ instruction. That opcode must never be directly reachable by the computation.
    
*   The last byte of the last instruction in the `code` array must be the byte at index `code_length - 1`.
    

The static constraints on the operands of instructions in the `code` array are as follows:

*   The target of each jump and branch instruction (_jsr_, _jsr\_w_, _goto_, _goto\_w_, _ifeq_, _ifne_, _ifle_, _iflt_, _ifge_, _ifgt_, _ifnull_, _ifnonnull_, _if\_icmpeq_, _if\_icmpne_, _if\_icmple_, _if\_icmplt_, _if\_icmpge_, _if\_icmpgt_, _if\_acmpeq_, _if\_acmpne_) must be the opcode of an instruction within this method.
    
    The target of a jump or branch instruction must never be the opcode used to specify the operation to be modified by a _wide_ instruction; a jump or branch target may be the _wide_ instruction itself.
    
*   Each target, including the default, of each _tableswitch_ instruction must be the opcode of an instruction within this method.
    
    Each _tableswitch_ instruction must have a number of entries in its jump table that is consistent with the value of its _low_ and _high_ jump table operands, and its _low_ value must be less than or equal to its _high_ value.
    
    No target of a _tableswitch_ instruction may be the opcode used to specify the operation to be modified by a _wide_ instruction; a _tableswitch_ target may be a _wide_ instruction itself.
    
*   Each target, including the default, of each _lookupswitch_ instruction must be the opcode of an instruction within this method.
    
    Each _lookupswitch_ instruction must have a number of _match-offset_ pairs that is consistent with the value of its _npairs_ operand. The _match-offset_ pairs must be sorted in increasing numerical order by signed match value.
    
    No target of a _lookupswitch_ instruction may be the opcode used to specify the operation to be modified by a _wide_ instruction; a _lookupswitch_ target may be a _wide_ instruction itself.
    
*   The operand of each _ldc_ instruction and each _ldc\_w_ instruction must be a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type:
    
    *   `CONSTANT_Integer`, `CONSTANT_Float`, or `CONSTANT_String` if the `class` file version number is less than 49.0.
        
    *   `CONSTANT_Integer`, `CONSTANT_Float`, `CONSTANT_String`, or `CONSTANT_Class` if the `class` file version number is 49.0 or 50.0.
        
    *   `CONSTANT_Integer`, `CONSTANT_Float`, `CONSTANT_String`, `CONSTANT_Class`, `CONSTANT_MethodType`, or `CONSTANT_MethodHandle` if the `class` file version number is 51.0 or above.
        
    
*   The operands of each _ldc2\_w_ instruction must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_Long` or `CONSTANT_Double`.
    
    The subsequent constant pool index must also be a valid index into the constant pool, and the constant pool entry at that index must not be used.
    
*   The operands of each _getfield_, _putfield_, _getstatic_, and _putstatic_ instruction must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_Fieldref`.
    
*   The _indexbyte_ operands of each _invokevirtual_ instruction must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_Methodref`.
    
*   The _indexbyte_ operands of each _invokespecial_ and _invokestatic_ instruction must represent a valid index into the `constant_pool` table. If the `class` file version number is less than 52.0, the constant pool entry referenced by that index must be of type `CONSTANT_Methodref`; if the `class` file version number is 52.0 or above, the constant pool entry referenced by that index must be of type `CONSTANT_Methodref` or `CONSTANT_InterfaceMethodref`.
    
*   The _indexbyte_ operands of each _invokeinterface_ instruction must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_InterfaceMethodref`.
    
    The value of the _count_ operand of each _invokeinterface_ instruction must reflect the number of local variables necessary to store the arguments to be passed to the interface method, as implied by the descriptor of the `CONSTANT_NameAndType_info` structure referenced by the `CONSTANT_InterfaceMethodref` constant pool entry.
    
    The fourth operand byte of each _invokeinterface_ instruction must have the value zero.
    
*   The _indexbyte_ operands of each _invokedynamic_ instruction must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_InvokeDynamic`.
    
    The third and fourth operand bytes of each _invokedynamic_ instruction must have the value zero.
    
*   Only the _invokespecial_ instruction is allowed to invoke an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).
    
    No other method whose name begins with the character '`<`' ('`\u003c`') may be called by the method invocation instructions. In particular, the class or interface initialization method specially named `<clinit>` is never called explicitly from Java Virtual Machine instructions, but only implicitly by the Java Virtual Machine itself.
    
*   The operands of each _instanceof_, _checkcast_, _new_, and _anewarray_ instruction, and the _indexbyte_ operands of each _multianewarray_ instruction, must represent a valid index into the `constant_pool` table. The constant pool entry referenced by that index must be of type `CONSTANT_Class`.
    
*   No _new_ instruction may reference a constant pool entry of type `CONSTANT_Class` that represents an array type ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). The _new_ instruction cannot be used to create an array.
    
*   No _anewarray_ instruction may be used to create an array of more than 255 dimensions.
    
*   A _multianewarray_ instruction must be used only to create an array of a type that has at least as many dimensions as the value of its _dimensions_ operand. That is, while a _multianewarray_ instruction is not required to create all of the dimensions of the array type referenced by its _indexbyte_ operands, it must not attempt to create more dimensions than are in the array type.
    
    The _dimensions_ operand of each _multianewarray_ instruction must not be zero.
    
*   The _atype_ operand of each _newarray_ instruction must take one of the values `T_BOOLEAN` (4), `T_CHAR` (5), `T_FLOAT` (6), `T_DOUBLE` (7), `T_BYTE` (8), `T_SHORT` (9), `T_INT` (10), or `T_LONG` (11).
    
*   The _index_ operand of each _iload_, _fload_, _aload_, _istore_, _fstore_, _astore_, _iinc_, and _ret_ instruction must be a non-negative integer no greater than `max_locals - 1`.
    
    The implicit index of each _iload\_<n>_, _fload\_<n>_, _aload\_<n>_, _istore\_<n>_, _fstore\_<n>_, and _astore\_<n>_ instruction must be no greater than `max_locals - 1`.
    
*   The _index_ operand of each _lload_, _dload_, _lstore_, and _dstore_ instruction must be no greater than `max_locals - 2`.
    
    The implicit index of each _lload\_<n>_, _dload\_<n>_, _lstore\_<n>_, and _dstore\_<n>_ instruction must be no greater than `max_locals - 2`.
    
*   The _indexbyte_ operands of each _wide_ instruction modifying an _iload_, _fload_, _aload_, _istore_, _fstore_, _astore_, _iinc_, or _ret_ instruction must represent a non-negative integer no greater than `max_locals - 1`.
    
    The _indexbyte_ operands of each _wide_ instruction modifying an _lload_, _dload_, _lstore_, or _dstore_ instruction must represent a non-negative integer no greater than `max_locals - 2`.
    

### 4.9.2. Structural Constraints

The structural constraints on the `code` array specify constraints on relationships between Java Virtual Machine instructions. The structural constraints are as follows:

*   Each instruction must only be executed with the appropriate type and number of arguments in the operand stack and local variable array, regardless of the execution path that leads to its invocation.
    
    An instruction operating on values of type `int` is also permitted to operate on values of type `boolean`, `byte`, `char`, and `short`.
    
    As noted in [§2.3.4](jvms-2.html#jvms-2.3.4 "2.3.4. The boolean Type") and [§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine"), the Java Virtual Machine internally converts values of types `boolean`, `byte`, `short`, and `char` to type `int`.)
    
*   If an instruction can be executed along several different execution paths, the operand stack must have the same depth ([§2.6.2](jvms-2.html#jvms-2.6.2 "2.6.2. Operand Stacks")) prior to the execution of the instruction, regardless of the path taken.
    
*   At no point during execution can the operand stack grow to a depth greater than that implied by the `max_stack` item.
    
*   At no point during execution can more values be popped from the operand stack than it contains.
    
*   At no point during execution can the order of the local variable pair holding a value of type `long` or `double` be reversed or the pair split up. At no point can the local variables of such a pair be operated on individually.
    
*   No local variable (or local variable pair, in the case of a value of type `long` or `double`) can be accessed before it is assigned a value.
    
*   Each _invokespecial_ instruction must name an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), a method in the current class or interface, a method in a superclass of the current class, a method in a direct superinterface of the current class or interface, or a method in `Object`.
    
    When an instance initialization method is invoked, an uninitialized class instance must be in an appropriate position on the operand stack. An instance initialization method must never be invoked on an initialized class instance.
    
    If an _invokespecial_ instruction names an instance initialization method and the target reference on the operand stack is an uninitialized class instance for the current class, then _invokespecial_ must name an instance initialization method from the current class or its direct superclass.
    
    If an _invokespecial_ instruction names an instance initialization method and the target reference on the operand stack is a class instance created by an earlier _new_ instruction, then _invokespecial_ must name an instance initialization method from the class of that class instance.
    
    If an _invokespecial_ instruction names a method which is not an instance initialization method, then the type of the target reference on the operand stack must be assignment compatible with the current class (JLS §5.2).
    
*   Each instance initialization method, except for the instance initialization method derived from the constructor of class `Object`, must call either another instance initialization method of `this` or an instance initialization method of its direct superclass `super` before its instance members are _accessed_.
    
    However, instance fields of `this` that are declared in the current class may be _assigned_ before calling any instance initialization method.
    
*   When any instance method is invoked or when any instance variable is accessed, the class instance that contains the instance method or instance variable must already be initialized.
    
*   If there is an uninitialized class instance in a local variable in code protected by an exception handler, then i) if the handler is inside an `<init>` method, the handler must throw an exception or loop forever, and ii) if the handler is not inside an `<init>` method, the uninitialized class instance must remain uninitialized.
    
*   There must never be an uninitialized class instance on the operand stack or in a local variable when a _jsr_ or _jsr\_w_ instruction is executed.
    
*   The type of every class instance that is the target of a method invocation instruction must be assignment compatible with the class or interface type specified in the instruction (JLS §5.2).
    
*   The types of the arguments to each method invocation must be method invocation compatible with the method descriptor (JLS §5.3, [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).
    
*   Each return instruction must match its method's return type:
    
    *   If the method returns a `boolean`, `byte`, `char`, `short`, or `int`, only the _ireturn_ instruction may be used.
        
    *   If the method returns a `float`, `long`, or `double`, only an _freturn_, _lreturn_, or _dreturn_ instruction, respectively, may be used.
        
    *   If the method returns a `reference` type, only an _areturn_ instruction may be used, and the type of the returned value must be assignment compatible with the return descriptor of the method (JLS §5.2, [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).
        
    *   All instance initialization methods, class or interface initialization methods, and methods declared to return `void` must use only the _return_ instruction.
        
    
*   The type of every class instance accessed by a _getfield_ instruction or modified by a _putfield_ instruction must be assignment compatible with the class type specified in the instruction (JLS §5.2).
    
*   The type of every value stored by a _putfield_ or _putstatic_ instruction must be compatible with the descriptor of the field ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")) of the class instance or class being stored into:
    
    *   If the descriptor type is `boolean`, `byte`, `char`, `short`, or `int`, then the value must be an `int`.
        
    *   If the descriptor type is `float`, `long`, or `double`, then the value must be a `float`, `long`, or `double`, respectively.
        
    *   If the descriptor type is a `reference` type, then the value mustbe of a type that is assignment compatible with the descriptor type (JLS §5.2).

*   The type of every value stored into an array by an _aastore_ instruction must be a `reference` type.
    
    The component type of the array being stored into by the _aastore_ instruction must also be a `reference` type.
    
*   Each _athrow_ instruction must throw only values that are instances of class `Throwable` or of subclasses of `Throwable`.
    
    Each class mentioned in a `catch_type` item of the `exception_table` array of the method's `Code_attribute` structure must be `Throwable` or a subclass of `Throwable`.
    
*   If _getfield_ or _putfield_ is used to access a `protected` field declared in a superclass that is a member of a different run-time package than the current class, then the type of the class instance being accessed must be the same as or a subclass of the current class.
    
    If _invokevirtual_ or _invokespecial_ is used to access a `protected` method declared in a superclass that is a member of a different run-time package than the current class, then the type of the class instance being accessed must be the same as or a subclass of the current class.
    
*   Execution never falls off the bottom of the `code` array.
    
*   No return address (a value of type `returnAddress`) may be loaded from a local variable.
    
*   The instruction following each _jsr_ or _jsr\_w_ instruction may be returned to only by a single _ret_ instruction.
    
*   No _jsr_ or _jsr\_w_ instruction that is returned to may be used to recursively call a subroutine if that subroutine is already present in the subroutine call chain. (Subroutines can be nested when using `try`\-`finally` constructs from within a `finally` clause.)
    
*   Each instance of type `returnAddress` can be returned to at most once.
    
    If a _ret_ instruction returns to a point in the subroutine call chain above the _ret_ instruction corresponding to a given instance of type `returnAddress`, then that instance can never be used as a return address.
    

4.10. Verification of `class` Files
-----------------------------------

Even though a compiler for the Java programming language must only produce `class` files that satisfy all the static and structural constraints in the previous sections, the Java Virtual Machine has no guarantee that any file it is asked to load was generated by that compiler or is properly formed. Applications such as web browsers do not download source code, which they then compile; these applications download already-compiled `class` files. The browser needs to determine whether the `class` file was produced by a trustworthy compiler or by an adversary attempting to exploit the Java Virtual Machine.

An additional problem with compile-time checking is version skew. A user may have successfully compiled a class, say `PurchaseStockOptions`, to be a subclass of `TradingClass`. But the definition of `TradingClass` might have changed since the time the class was compiled in a way that is not compatible with pre-existing binaries. Methods might have been deleted or had their return types or modifiers changed. Fields might have changed types or changed from instance variables to class variables. The access modifiers of a method or variable may have changed from `public` to `private`. For a discussion of these issues, see Chapter 13, "Binary Compatibility," in _The Java Language Specification, Java SE 8 Edition_.

Because of these potential problems, the Java Virtual Machine needs to verify for itself that the desired constraints are satisfied by the `class` files it attempts to incorporate. A Java Virtual Machine implementation verifies that each `class` file satisfies the necessary constraints at linking time ([§5.4](jvms-5.html#jvms-5.4 "5.4. Linking")).

Link-time verification enhances the performance of the run-time interpreter. Expensive checks that would otherwise have to be performed to verify constraints at run time for each interpreted instruction can be eliminated. The Java Virtual Machine can assume that these checks have already been performed. For example, the Java Virtual Machine will already know the following:

*   There are no operand stack overflows or underflows.
    
*   All local variable uses and stores are valid.
    
*   The arguments to all the Java Virtual Machine instructions are of valid types.
    

There are two strategies that Java Virtual Machine implementations may use for verification:

*   Verification by type checking must be used to verify `class` files whose version number is greater than or equal to 50.0.
    
*   Verification by type inference must be supported by all Java Virtual Machine implementations, except those conforming to the Java ME CLDC and Java Card profiles, in order to verify `class` files whose version number is less than 50.0.
    
    Verification on Java Virtual Machine implementations supporting the Java ME CLDC and Java Card profiles is governed by their respective specifications.
    

In both strategies, verification is mainly concerned with enforcing the static and structural constraints from [§4.9](jvms-4.html#jvms-4.9 "4.9. Constraints on Java Virtual Machine Code") on the `code` array of the `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). However, there are three additional checks outside the `Code` attribute which must be performed during verification:

*   Ensuring that `final` classes are not subclassed.
    
*   Ensuring that `final` methods are not overridden ([§5.4.5](jvms-5.html#jvms-5.4.5 "5.4.5. Overriding")).
    
*   Checking that every class (except `Object`) has a direct superclass.
    

### 4.10.1. Verification by Type Checking

A `class` file whose version number is 50.0 or above ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")) must be verified using the type checking rules given in this section.

If, and only if, a `class` file's version number equals 50.0, then if the type checking fails, a Java Virtual Machine implementation may choose to attempt to perform verification by type inference ([§4.10.2](jvms-4.html#jvms-4.10.2 "4.10.2. Verification by Type Inference")).

This is a pragmatic adjustment, designed to ease the transition to the new verification discipline. Many tools that manipulate `class` files may alter the bytecodes of a method in a manner that requires adjustment of the method's stack map frames. If a tool does not make the necessary adjustments to the stack map frames, type checking may fail even though the bytecode is in principle valid (and would consequently verify under the old type inference scheme). To allow implementors time to adapt their tools, Java Virtual Machine implementations may fall back to the older verification discipline, but only for a limited time.

In cases where type checking fails but type inference is invoked and succeeds, a certain performance penalty is expected. Such a penalty is unavoidable. It also should serve as a signal to tool vendors that their output needs to be adjusted, and provides vendors with additional incentive to make these adjustments.

In summary, failover to verification by type inference supports both the gradual addition of stack map frames to the Java SE platform (if they are not present in a version 50.0 `class` file, failover is allowed) and the gradual removal of the _jsr_ and _jsr\_w_ instructions from the Java SE platform (if they are present in a version 50.0 `class` file, failover is allowed).

If a Java Virtual Machine implementation ever attempts to perform verification by type inference on version 50.0 class files, it must do so in all cases where verification by type checking fails.

This means that a Java Virtual Machine implementation cannot choose to resort to type inference in once case and not in another. It must either reject `class` files that do not verify via type checking, or else consistently failover to the type inferencing verifier whenever type checking fails.

The type checker enforces type rules that are specified by means of Prolog clauses. English language text is used to describe the type rules in an informal way, while the Prolog clauses provide a formal specification.

The type checker requires a list of stack map frames for each method with a `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")). A list of stack map frames is given by the `StackMapTable` attribute ([§4.7.4](jvms-4.html#jvms-4.7.4 "4.7.4. The StackMapTable Attribute")) of a `Code` attribute. The intent is that a stack map frame must appear at the beginning of each basic block in a method. The stack map frame specifies the verification type of each operand stack entry and of each local variable at the start of each basic block. The type checker reads the stack map frames for each method with a `Code` attribute and uses these maps to generate a proof of the type safety of the instructions in the `Code` attribute.

A class is type safe if all its methods are type safe, and it does not subclass a `final` class.

classIsTypeSafe(Class) :-
    classClassName(Class, Name), 
    classDefiningLoader(Class, L),
    superclassChain(Name, L, Chain),
    Chain \\= \[\],
    classSuperClassName(Class, SuperclassName),
    loadedClass(SuperclassName, L, Superclass),
    classIsNotFinal(Superclass),	 
    classMethods(Class, Methods), 
    checklist(methodIsTypeSafe(Class), Methods).

classIsTypeSafe(Class) :-
    classClassName(Class, 'java/lang/Object'),
    classDefiningLoader(Class, L),
    isBootstrapLoader(L),
    classMethods(Class, Methods), 
    checklist(methodIsTypeSafe(Class), Methods).

The Prolog predicate `classIsTypeSafe` assumes that `Class` is a Prolog term representing a binary class that has been successfully parsed and loaded. This specification does not mandate the precise structure of this term, but does require that certain predicates be defined upon it.

For example, we assume a predicate `classMethods(Class, Methods)` that, given a term representing a class as described above as its first argument, binds its second argument to a list comprising all the methods of the class, represented in a convenient form described later.

Iff the predicate `classIsTypeSafe` is not true, the type checker must throw the exception `VerifyError` to indicate that the `class` file is malformed. Otherwise, the `class` file has type checked successfully and bytecode verification has completed successfully.

The rest of this section explains the process of type checking in detail:

*   First, we give Prolog predicates for core Java Virtual Machine artifacts like classes and methods ([§4.10.1.1](jvms-4.html#jvms-4.10.1.1 "4.10.1.1. Accessors for Java Virtual Machine Artifacts")).
    
*   Second, we specify the type system known to the type checker ([§4.10.1.2](jvms-4.html#jvms-4.10.1.2 "4.10.1.2. Verification Type System")).
    
*   Third, we specify the Prolog representation of instructions and stack map frames ([§4.10.1.3](jvms-4.html#jvms-4.10.1.3 "4.10.1.3. Instruction Representation"), [§4.10.1.4](jvms-4.html#jvms-4.10.1.4 "4.10.1.4. Stack Map Frame Representation")).
    
*   Fourth, we specify how a method is type checked, for methods without code ([§4.10.1.5](jvms-4.html#jvms-4.10.1.5 "4.10.1.5. Type Checking Abstract and Native Methods")) and methods with code ([§4.10.1.6](jvms-4.html#jvms-4.10.1.6 "4.10.1.6. Type Checking Methods with Code")).
    
*   Fifth, we discuss type checking issues common to all load and store instructions ([§4.10.1.7](jvms-4.html#jvms-4.10.1.7 "4.10.1.7. Type Checking Load and Store Instructions")), and also issues of access to `protected` members ([§4.10.1.8](jvms-4.html#jvms-4.10.1.8 "4.10.1.8. Type Checking for protected Members")).
    
*   Finally, we specify the rules to type check each instruction ([§4.10.1.9](jvms-4.html#jvms-4.10.1.9 "4.10.1.9. Type Checking Instructions")).
    

#### 4.10.1.1. Accessors for Java Virtual Machine Artifacts

We stipulate the existence of 28 Prolog predicates ("accessors") that have certain expected behavior but whose formal definitions are not given in this specification.

classClassName(Class, ClassName)

Extracts the name, `ClassName`, of the class `Class`.

classIsInterface(Class)

True iff the class, `Class`, is an interface.

classIsNotFinal(Class)

True iff the class, `Class`, is not a `final` class.

classSuperClassName(Class, SuperClassName)

Extracts the name, `SuperClassName`, of the superclass of class `Class`.

classInterfaces(Class, Interfaces)

Extracts a list, `Interfaces`, of the direct superinterfaces of the class `Class`.

classMethods(Class, Methods)

Extracts a list, `Methods`, of the methods declared in the class `Class`.

classAttributes(Class, Attributes)

Extracts a list, `Attributes`, of the attributes of the class `Class`.

Each attribute is represented as a functor application of the form `attribute(AttributeName, AttributeContents)`, where `AttributeName` is the name of the attribute. The format of the attribute's contents is unspecified.

classDefiningLoader(Class, Loader)

Extracts the defining class loader, `Loader`, of the class `Class`.

isBootstrapLoader(Loader)

True iff the class loader `Loader` is the bootstrap class loader.

loadedClass(Name, InitiatingLoader, ClassDefinition)

True iff there exists a class named `Name` whose representation (in accordance with this specification) when loaded by the class loader `InitiatingLoader` is `ClassDefinition`.

methodName(Method, Name)

Extracts the name, `Name`, of the method `Method`.

methodAccessFlags(Method, AccessFlags)

Extracts the access flags, `AccessFlags`, of the method `Method`.

methodDescriptor(Method, Descriptor)

Extracts the descriptor, `Descriptor`, of the method `Method`.

methodAttributes(Method, Attributes)

Extracts a list, `Attributes`, of the attributes of the method `Method`.

isInit(Method)

True iff `Method` (regardless of class) is `<init>`.

isNotInit(Method)

True iff `Method` (regardless of class) is not `<init>`.

isNotFinal(Method, Class)

True iff `Method` in class `Class` is not `final`.

isStatic(Method, Class)

True iff `Method` in class `Class` is `static`.

isNotStatic(Method, Class)

True iff `Method` in class `Class` is not `static`.

isPrivate(Method, Class)

True iff `Method` in class `Class` is `private`.

isNotPrivate(Method, Class)

True iff `Method` in class `Class` is not `private`.

isProtected(MemberClass, MemberName, MemberDescriptor)

True iff there is a member named `MemberName` with descriptor `MemberDescriptor` in the class `MemberClass` and it is `protected`.

isNotProtected(MemberClass, MemberName, MemberDescriptor)

True iff there is a member named `MemberName` with descriptor `MemberDescriptor` in the class `MemberClass` and it is not `protected`.

parseFieldDescriptor(Descriptor, Type)

Converts a field descriptor, `Descriptor`, into the corresponding verification type `Type` ([§4.10.1.2](jvms-4.html#jvms-4.10.1.2 "4.10.1.2. Verification Type System")).

parseMethodDescriptor(Descriptor, ArgTypeList, ReturnType)

Converts a method descriptor, `Descriptor`, into a list of verification types, `ArgTypeList`, corresponding to the method argument types, and a verification type, `ReturnType`, corresponding to the return type.

parseCodeAttribute(Class, Method, FrameSize, MaxStack, ParsedCode, Handlers, StackMap)

Extracts the instruction stream, `ParsedCode`, of the method `Method` in `Class`, as well as the maximum operand stack size, `MaxStack`, the maximal number of local variables, `FrameSize`, the exception handlers, `Handlers`, and the stack map `StackMap`.

The representation of the instruction stream and stack map attribute must be as specified in [§4.10.1.3](jvms-4.html#jvms-4.10.1.3 "4.10.1.3. Instruction Representation") and [§4.10.1.4](jvms-4.html#jvms-4.10.1.4 "4.10.1.4. Stack Map Frame Representation").

samePackageName(Class1, Class2)

True iff the package names of `Class1` and `Class2` are the same.

differentPackageName(Class1, Class2)

True iff the package names of `Class1` and `Class2` are different.

When type checking a method's body, it is convenient to access information about the method. For this purpose, we define an _environment_, a six-tuple consisting of:

*   a class
    
*   a method
    
*   the declared return type of the method
    
*   the instructions in a method
    
*   the maximal size of the operand stack
    
*   a list of exception handlers
    

We specify accessors to extract information from the environment.

allInstructions(Environment, Instructions) :-
    Environment = environment(\_Class, \_Method, \_ReturnType,
                              Instructions, \_, \_).

exceptionHandlers(Environment, Handlers) :-
    Environment = environment(\_Class, \_Method, \_ReturnType,
                              \_Instructions, \_, Handlers).

maxOperandStackLength(Environment, MaxStack) :-
    Environment = environment(\_Class, \_Method, \_ReturnType,
                              \_Instructions, MaxStack, \_Handlers).

thisClass(Environment, class(ClassName, L)) :-
    Environment = environment(Class, \_Method, \_ReturnType,
                              \_Instructions, \_, \_),
    classDefiningLoader(Class, L),
    classClassName(Class, ClassName).

thisMethodReturnType(Environment, ReturnType) :-
    Environment = environment(\_Class, \_Method, ReturnType,
                              \_Instructions, \_, \_).

We specify additional predicates to extract higher-level information from the environment.

offsetStackFrame(Environment, Offset, StackFrame) :-
    allInstructions(Environment, Instructions),
    member(stackMap(Offset, StackFrame), Instructions).

currentClassLoader(Environment, Loader) :-
    thisClass(Environment, class(\_, Loader)).

Finally, we specify a general predicate used throughout the type rules:

notMember(\_, \[\]).
notMember(X, \[A | More\]) :- X \\= A, notMember(X, More).

The principle guiding the determination as to which accessors are stipulated and which are fully specified is that we do not want to over-specify the representation of the `class` file. Providing specific accessors to the `Class` or `Method` term would force us to completely specify the format for a Prolog term representing the `class` file.

#### 4.10.1.2. Verification Type System

The type checker enforces a type system based upon a hierarchy of _verification types_, illustrated below.

Verification type hierarchy:

                             top
                 \_\_\_\_\_\_\_\_\_\_\_\_/\\\_\_\_\_\_\_\_\_\_\_\_\_
                /                          \\
               /                            \\
            oneWord                       twoWord
           /   |   \\                     /       \\
          /    |    \\                   /         \\
        int  float  reference        long        double
                     /     \\
                    /       \\\_\_\_\_\_\_\_\_\_\_\_\_\_
                   /                      \\
                  /                        \\
           uninitialized                    +------------------+
            /         \\                     |  Java reference  |
           /           \\                    |  type hierarchy  |
uninitializedThis  uninitialized(Offset)    +------------------+  
                                                     |
                                                     |
                                                    null

Most verification types have a direct correspondence with the primitive and reference types represented by field descriptors in [Table 4.3-A](jvms-4.html#jvms-4.3.2-200 "Table 4.3-A. Interpretation of field descriptors"):

*   The primitive types `double`, `float`, `int`, and `long` (field descriptors `D`, `F`, `I`, `J`) each correspond to the verification type of the same name.
    
*   The primitive types `byte`, `char`, `short`, and `boolean` (field descriptors `B`, `C`, `S`, `Z`) all correspond to the verification type `int`.
    
*   Class and interface types correspond to verification types that use the functor `class`. The verification type `class(_N_, _L_)` represents the class whose binary name is `_N_` as loaded by the loader `_L_`. Note that `_L_` is an initiating loader ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) of the class represented by `class(_N_, _L_)` and may, or may not, be the class's defining loader.
    
    For example, the class type `Object` would be represented as `class('java/lang/Object', BL)`, where `BL` is the bootstrap loader.
    
*   Array types correspond to verification types that use the functor `arrayOf`. The verification type `arrayOf(_T_)` represents the array type whose component type is the verification type `_T_`.
    
    For example, the types `int[]` and `Object[]` would be represented by `arrayOf(int)` and `arrayOf(class('java/lang/Object', BL))` respectively.
    

The verification type `uninitialized(Offset)` is represented by applying the functor `uninitialized` to an argument representing the numerical value of the `Offset`.

Other verification types are represented in Prolog as atoms whose name denotes the verification type in question.

The subtyping rules for verification types are as follows.

Subtyping is reflexive.

isAssignable(X, X).

The verification types which are not reference types in the Java programming language have subtype rules of the form:

isAssignable(v, X) :- isAssignable(the\_direct\_supertype\_of\_v, X).

That is, `v` is a subtype of `X` if the direct supertype of `v` is a subtype of `X`. The rules are:

isAssignable(oneWord, top).
isAssignable(twoWord, top).

isAssignable(int, X)    :- isAssignable(oneWord, X).
isAssignable(float, X)  :- isAssignable(oneWord, X).
isAssignable(long, X)   :- isAssignable(twoWord, X).
isAssignable(double, X) :- isAssignable(twoWord, X).

isAssignable(reference, X)   :- isAssignable(oneWord, X).
isAssignable(class(\_, \_), X) :- isAssignable(reference, X).
isAssignable(arrayOf(\_), X)  :- isAssignable(reference, X).

isAssignable(uninitialized, X)     :- isAssignable(reference, X).
isAssignable(uninitializedThis, X) :- isAssignable(uninitialized, X).
isAssignable(uninitialized(\_), X)  :- isAssignable(uninitialized, X).

isAssignable(null, class(\_, \_)).
isAssignable(null, arrayOf(\_)).
isAssignable(null, X) :- isAssignable(class('java/lang/Object', BL), X),
                         isBootstrapLoader(BL).

These subtype rules are not necessarily the most obvious formulation of subtyping. There is a clear split between subtyping rules for reference types in the Java programming language, and rules for the remaining verification types. The split allows us to state general subtyping relations between Java programming language reference types and other verification types. These relations hold independently of a Java reference type's position in the type hierarchy, and help to prevent excessive class loading by a Java Virtual Machine implementation. For example, we do not want to start climbing the Java superclass hierarchy in response to a query of the form `class(foo, L) <: twoWord`.

We also have a rule that says subtyping is reflexive, so together these rules cover most verification types that are not reference types in the Java programming language.

Subtype rules for the reference types in the Java programming language are specified recursively with `isJavaAssignable`.

isAssignable(class(X, Lx), class(Y, Ly)) :-
    isJavaAssignable(class(X, Lx), class(Y, Ly)).

isAssignable(arrayOf(X), class(Y, L)) :-
    isJavaAssignable(arrayOf(X), class(Y, L)).

isAssignable(arrayOf(X), arrayOf(Y)) :-
    isJavaAssignable(arrayOf(X), arrayOf(Y)).

For assignments, interfaces are treated like `Object`.

isJavaAssignable(class(\_, \_), class(To, L)) :-
    loadedClass(To, L, ToClass),
    classIsInterface(ToClass).

isJavaAssignable(From, To) :-
    isJavaSubclassOf(From, To).

Array types are subtypes of `Object`. The intent is also that array types are subtypes of `Cloneable` and `java.io.Serializable`.

isJavaAssignable(arrayOf(\_), class('java/lang/Object', BL)) :-
    isBootstrapLoader(BL).

isJavaAssignable(arrayOf(\_), X) :-
    isArrayInterface(X).

isArrayInterface(class('java/lang/Cloneable', BL)) :-
    isBootstrapLoader(BL).

isArrayInterface(class('java/io/Serializable', BL)) :-
    isBootstrapLoader(BL).

Subtyping between arrays of primitive type is the identity relation.

isJavaAssignable(arrayOf(X), arrayOf(Y)) :-
    atom(X),
    atom(Y),
    X = Y.

Subtyping between arrays of reference type is covariant.

isJavaAssignable(arrayOf(X), arrayOf(Y)) :-
    compound(X), compound(Y), isJavaAssignable(X, Y).

Subclassing is reflexive.

isJavaSubclassOf(class(SubclassName, L), class(SubclassName, L)).

isJavaSubclassOf(class(SubclassName, LSub), class(SuperclassName, LSuper)) :-
    superclassChain(SubclassName, LSub, Chain),
    member(class(SuperclassName, L), Chain),
    loadedClass(SuperclassName, L, Sup),
    loadedClass(SuperclassName, LSuper, Sup).

superclassChain(ClassName, L, \[class(SuperclassName, Ls) | Rest\]) :-
    loadedClass(ClassName, L, Class),
    classSuperClassName(Class, SuperclassName),
    classDefiningLoader(Class, Ls),
    superclassChain(SuperclassName, Ls, Rest).

superclassChain('java/lang/Object', L, \[\]) :-
    loadedClass('java/lang/Object', L, Class),
    classDefiningLoader(Class, BL),
    isBootstrapLoader(BL).

#### 4.10.1.3. Instruction Representation

Individual bytecode instructions are represented in Prolog as terms whose functor is the name of the instruction and whose arguments are its parsed operands.

For example, an _aload_ instruction is represented as the term `aload(N)`, which includes the index `N` that is the operand of the instruction.

The instructions as a whole are represented as a list of terms of the form:

instruction(Offset, AnInstruction)

For example, `instruction(21, aload(1))`.

The order of instructions in this list must be the same as in the `class` file.

A few instructions have operands that are constant pool entries representing fields, methods, and dynamic call sites. In the constant pool, a field is represented by a `CONSTANT_Fieldref_info` structure, a method is represented by a `CONSTANT_InterfaceMethodref_info` structure (for an interface's method) or a `CONSTANT_Methodref_info` structure (for a class's method), and a dynamic call site is represented by a `CONSTANT_InvokeDynamic_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures"), [§4.4.10](jvms-4.html#jvms-4.4.10 "4.4.10. The CONSTANT_InvokeDynamic_info Structure")). Such structures are represented as functor applications of the form:

*   `field(FieldClassName, FieldName, FieldDescriptor)` for a field, where `FieldClassName` is the name of the class referenced by the `class_index` item in the `CONSTANT_Fieldref_info` structure, and `FieldName` and `FieldDescriptor` correspond to the name and field descriptor referenced by the `name_and_type_index` item of the `CONSTANT_Fieldref_info` structure.
    
*   `imethod(MethodIntfName, MethodName, MethodDescriptor)` for an interface's method, where `MethodIntfName` is the name of the interface referenced by the `class_index` item of the `CONSTANT_InterfaceMethodref_info` structure, and `MethodName` and `MethodDescriptor` correspond to the name and method descriptor referenced by the `name_and_type_index` item of the `CONSTANT_InterfaceMethodref_info` structure;
    
*   `method(MethodClassName, MethodName, MethodDescriptor)` for a class's method, where `MethodClassName` is the name of the class referenced by the `class_index` item of the `CONSTANT_Methodref_info` structure, and `MethodName` and `MethodDescriptor` correspond to the name and method descriptor referenced by the `name_and_type_index` item of the `CONSTANT_Methodref_info` structure; and
    
*   `dmethod(CallSiteName, MethodDescriptor)` for a dynamic call site, where `CallSiteName` and `MethodDescriptor` correspond to the name and method descriptor referenced by the `name_and_type_index` item of the `CONSTANT_InvokeDynamic_info` structure.For clarity, we assume that field and method descriptors ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors"), [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) are mapped into more readable names: the leading `L` and trailing `;` are dropped from class names, and the _BaseType_ characters used for primitive types are mapped to the names of those types.

For example, a _getfield_ instruction whose operand was an index into the constant pool that refers to a field `foo` of type `F` in class `Bar` would be represented as `getfield(field('Bar', 'foo', 'F'))`.

Constant pool entries that refer to constant values, such as `CONSTANT_String`, `CONSTANT_Integer`, `CONSTANT_Float`, `CONSTANT_Long`, `CONSTANT_Double`, and `CONSTANT_Class`, are encoded via the functors whose names are `string`, `int`, `float`, `long`, `double`, and `classConstant` respectively.

For example, an _ldc_ instruction for loading the integer 91 would be encoded as `ldc(int(91))`.

#### 4.10.1.4. Stack Map Frame Representation

Stack map frames are represented in Prolog as a list of terms of the form:

stackMap(Offset, TypeState)

where:

*   `Offset` is an integer indicating the bytecode offset at which the stack map frame applies ([§4.7.4](jvms-4.html#jvms-4.7.4 "4.7.4. The StackMapTable Attribute")).
    
    The order of bytecode offsets in this list must be the same as in the `class` file.
    
*   `TypeState` is the expected incoming type state for the instruction at `Offset`.
    

A _type state_ is a mapping from locations in the operand stack and local variables of a method to verification types. It has the form:

frame(Locals, OperandStack, Flags)

where:

*   `Locals` is a list of verification types, such that the _i_'th element of the list (with 0-based indexing) represents the type of local variable _i_.
    
*   `OperandStack` is a list of verification types, such that the first element of the list represents the type of the top of the operand stack, and the types of stack entries below the top follow in the list in the appropriate order.
    
    Types of size 2 (`long` and `double`) are represented by two stack entries, with the first entry being `top` and the second entry being the type itself.
    
    For example, a stack with a `double` value, an `int` value, and a `long` value is represented in a type state as a stack with five entries: `top` and `double` entries for the `double` value, an `int` entry for the `int` value, and `top` and `long` entries for the `long` value. Accordingly, `OperandStack` is the list `[top, double, int, top, long]`.
    
*   `Flags` is a list which may either be empty or have the single element `flagThisUninit`.
    
    If any local variable in `Locals` has the type `uninitializedThis`, then `Flags` has the single element `flagThisUninit`, otherwise `Flags` is an empty list.
    
    `flagThisUninit` is used in constructors to mark type states where initialization of `this` has not yet been completed. In such type states, it is illegal to return from the method.
    

Subtyping of verification types is extended pointwise to type states.

The local variable array of a method has a fixed length by construction (see `methodInitialStackFrame` in [§4.10.1.6](jvms-4.html#jvms-4.10.1.6 "4.10.1.6. Type Checking Methods with Code")) while the operand stack grows and shrinks. Therefore, we require an explicit check on the length of the operand stacks whose assignability is desired.

frameIsAssignable(frame(Locals1, StackMap1, Flags1),
                  frame(Locals2, StackMap2, Flags2)) :-
    length(StackMap1, StackMapLength),
    length(StackMap2, StackMapLength),
    maplist(isAssignable, Locals1, Locals2),
    maplist(isAssignable, StackMap1, StackMap2),
    subset(Flags1, Flags2).

The length of the operand stack must not exceed the declared maximum stack length.

operandStackHasLegalLength(Environment, OperandStack) :-
    length(OperandStack, Length),
    maxOperandStackLength(Environment, MaxStack),
    Length =< MaxStack.

Certain array instructions ([§_aaload_](jvms-4.html#jvms-4.10.1.9.aaload "aaload"), [§_arraylength_](jvms-4.html#jvms-4.10.1.9.arraylength "arraylength"), [§_baload_](jvms-4.html#jvms-4.10.1.9.baload "baload"), [§_bastore_](jvms-4.html#jvms-4.10.1.9.bastore "bastore")) peek at the types of values on the operand stack in order to check they are array types. The following clause accesses the _i_'th element of the operand stack from a type state.

nth1OperandStackIs(_i_, frame(\_Locals, OperandStack, \_Flags), Element) :-
    nth1(_i_, OperandStack, Element).

Manipulation of the operand stack by load and store instructions ([§4.10.1.7](jvms-4.html#jvms-4.10.1.7 "4.10.1.7. Type Checking Load and Store Instructions")) is complicated by the fact that some types occupy two entries on the stack. The predicates given below take this into account, allowing the rest of the specification to abstract from this issue.

Pop a list of types off the stack.

canPop(frame(Locals, OperandStack, Flags), Types,
       frame(Locals, PoppedOperandStack, Flags)) :-
    popMatchingList(OperandStack, Types, PoppedOperandStack).

popMatchingList(OperandStack, \[\], OperandStack).
popMatchingList(OperandStack, \[P | Rest\], NewOperandStack) :-
    popMatchingType(OperandStack, P, TempOperandStack, \_ActualType),
    popMatchingList(TempOperandStack, Rest, NewOperandStack).

Pop an individual type off the stack. More precisely, if the logical top of the stack is some subtype of the specified type, `Type`, then pop it. If a type occupies two stack entries, then the logical top of the stack is really the type just below the top, and the top of the stack is the unusable type `top`.

popMatchingType(\[ActualType | OperandStack\],
                Type, OperandStack, ActualType) :-
    sizeOf(Type, 1),
    isAssignable(ActualType, Type).

popMatchingType(\[top, ActualType | OperandStack\],
                Type, OperandStack, ActualType) :-
    sizeOf(Type, 2),
    isAssignable(ActualType, Type).

sizeOf(X, 2) :- isAssignable(X, twoWord).
sizeOf(X, 1) :- isAssignable(X, oneWord).
sizeOf(top, 1).

Push a logical type onto the stack. The exact behavior varies with the size of the type. If the pushed type is of size 1, we just push it onto the stack. If the pushed type is of size 2, we push it, and then push `top`.

pushOperandStack(OperandStack, 'void', OperandStack).
pushOperandStack(OperandStack, Type, \[Type | OperandStack\]) :-
    sizeOf(Type, 1).
pushOperandStack(OperandStack, Type, \[top, Type | OperandStack\]) :-
    sizeOf(Type, 2).

Push a list of types onto the stack if there is space.

canSafelyPush(Environment, InputOperandStack, Type, OutputOperandStack) :-
    pushOperandStack(InputOperandStack, Type, OutputOperandStack),
    operandStackHasLegalLength(Environment, OutputOperandStack).

canSafelyPushList(Environment, InputOperandStack, Types,
                  OutputOperandStack) :-
    canPushList(InputOperandStack, Types, OutputOperandStack),
    operandStackHasLegalLength(Environment, OutputOperandStack).

canPushList(InputOperandStack, \[\], InputOperandStack).
canPushList(InputOperandStack, \[Type | Rest\], OutputOperandStack) :-
    pushOperandStack(InputOperandStack, Type, InterimOperandStack),
    canPushList(InterimOperandStack, Rest, OutputOperandStack).

Manipulation of the operand stack by the _dup_ instructions is specified entirely in terms of the _category_ of types for values on the stack ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Category 1 types occupy a single stack entry. Popping a logical type of category 1, `Type`, off the stack is possible if the top of the stack is `Type` and `Type` is not `top` (otherwise it could denote the upper half of a category 2 type). The result is the incoming stack, with the top entry popped off.

popCategory1(\[Type | Rest\], Type, Rest) :-
    Type \\= top,
    sizeOf(Type, 1).

Category 2 types occupy two stack entries. Popping a logical type of category 2, `Type`, off the stack is possible if the top of the stack is type `top`, and the entry directly below it is `Type`. The result is the incoming stack, with the top two entries popped off.

popCategory2(\[top, Type | Rest\], Type, Rest) :-
    sizeOf(Type, 2).

Most of the type rules for individual instructions ([§4.10.1.9](jvms-4.html#jvms-4.10.1.9 "4.10.1.9. Type Checking Instructions")) depend on the notion of a valid _type transition_. A type transition is _valid_ if one can pop a list of expected types off the incoming type state's operand stack and replace them with an expected result type, resulting in a new valid type state. In particular, the size of the operand stack in the new type state must not exceed its maximum declared size.

validTypeTransition(Environment, ExpectedTypesOnStack, ResultType,
                    frame(Locals, InputOperandStack, Flags),
                    frame(Locals, NextOperandStack, Flags)) :-
    popMatchingList(InputOperandStack, ExpectedTypesOnStack,
                    InterimOperandStack),
    pushOperandStack(InterimOperandStack, ResultType, NextOperandStack),
    operandStackHasLegalLength(Environment, NextOperandStack).

#### 4.10.1.5. Type Checking Abstract and Native Methods

`abstract` methods and `native` methods are considered to be type safe if they do not override a `final` method.

methodIsTypeSafe(Class, Method) :-
    doesNotOverrideFinalMethod(Class, Method),
    methodAccessFlags(Method, AccessFlags),
    member(abstract, AccessFlags).

methodIsTypeSafe(Class, Method) :-
    doesNotOverrideFinalMethod(Class, Method),
    methodAccessFlags(Method, AccessFlags),
    member(native, AccessFlags).

`private` methods and `static` methods are orthogonal to dynamic method dispatch, so they never override other methods ([§5.4.5](jvms-5.html#jvms-5.4.5 "5.4.5. Overriding")).

doesNotOverrideFinalMethod(class('java/lang/Object', L), Method) :-
    isBootstrapLoader(L).

doesNotOverrideFinalMethod(Class, Method) :-
    isPrivate(Method, Class).

doesNotOverrideFinalMethod(Class, Method) :-
    isStatic(Method, Class).

doesNotOverrideFinalMethod(Class, Method) :-
    isNotPrivate(Method, Class),
    isNotStatic(Method, Class),
    doesNotOverrideFinalMethodOfSuperclass(Class, Method).

doesNotOverrideFinalMethodOfSuperclass(Class, Method) :-
    classSuperClassName(Class, SuperclassName),
    classDefiningLoader(Class, L),
    loadedClass(SuperclassName, L, Superclass),
    classMethods(Superclass, SuperMethodList),
    finalMethodNotOverridden(Method, Superclass, SuperMethodList).

`final` methods that are `private` and/or `static` are unusual, as `private` methods and `static` methods cannot be overridden per se. Therefore, if a `final` `private` method or a `final` `static` method is found, it was logically not overridden by another method.

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    member(method(\_, Name, Descriptor), SuperMethodList),
    isFinal(Method, Superclass),
    isPrivate(Method, Superclass).

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    member(method(\_, Name, Descriptor), SuperMethodList),
    isFinal(Method, Superclass),
    isStatic(Method, Superclass). 

If a non-`final` `private` method or a non-`final` `static` method is found, skip over it because it is orthogonal to overriding.

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    member(method(\_, Name, Descriptor), SuperMethodList),
    isNotFinal(Method, Superclass),
    isPrivate(Method, Superclass),
    doesNotOverrideFinalMethodOfSuperclass(Superclass, Method).

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    member(method(\_, Name, Descriptor), SuperMethodList),
    isNotFinal(Method, Superclass),
    isStatic(Method, Superclass),
    doesNotOverrideFinalMethodOfSuperclass(Superclass, Method).

If a non-`final`, non-`private`, non-`static` method is found, then indeed a `final` method was not overridden. Otherwise, recurse upwards.

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    member(method(\_, Name, Descriptor), SuperMethodList),
    isNotFinal(Method, Superclass),
    isNotStatic(Method, Superclass),
    isNotPrivate(Method, Superclass).

finalMethodNotOverridden(Method, Superclass, SuperMethodList) :-
    methodName(Method, Name),
    methodDescriptor(Method, Descriptor),
    notMember(method(\_, Name, Descriptor), SuperMethodList),
    doesNotOverrideFinalMethodOfSuperclass(Superclass, Method).

#### 4.10.1.6. Type Checking Methods with Code

Non-`abstract`, non-`native` methods are type correct if they have code and the code is type correct.

methodIsTypeSafe(Class, Method) :-
    doesNotOverrideFinalMethod(Class, Method),
    methodAccessFlags(Method, AccessFlags),
    methodAttributes(Method, Attributes),
    notMember(native, AccessFlags),
    notMember(abstract, AccessFlags),
    member(attribute('Code', \_), Attributes),
    methodWithCodeIsTypeSafe(Class, Method).

A method with code is type safe if it is possible to merge the code and the stack map frames into a single stream such that each stack map frame precedes the instruction it corresponds to, and the merged stream is type correct. The method's exception handlers, if any, must also be legal.

methodWithCodeIsTypeSafe(Class, Method) :-
    parseCodeAttribute(Class, Method, FrameSize, MaxStack,
                       ParsedCode, Handlers, StackMap),
    mergeStackMapAndCode(StackMap, ParsedCode, MergedCode),
    methodInitialStackFrame(Class, Method, FrameSize, StackFrame, ReturnType),
    Environment = environment(Class, Method, ReturnType, MergedCode,
                              MaxStack, Handlers),
    handlersAreLegal(Environment),
    mergedCodeIsTypeSafe(Environment, MergedCode, StackFrame).

Let us consider exception handlers first.

An exception handler is represented by a functor application of the form:

handler(Start, End, Target, ClassName)

whose arguments are, respectively, the start and end of the range of instructions covered by the handler, the first instruction of the handler code, and the name of the exception class that this handler is designed to handle.

An exception handler is _legal_ if its start (`Start`) is less than its end (`End`), there exists an instruction whose offset is equal to `Start`, there exists an instruction whose offset equals `End`, and the handler's exception class is assignable to the class `Throwable`. The exception class of a handler is `Throwable` if the handler's class entry is 0, otherwise it is the class named in the handler.

An additional requirement exists for a handler inside an `<init>` method if one of the instructions covered by the handler is _invokespecial_ of an `<init>` method. In this case, the fact that a handler is running means the object under construction is likely broken, so it is important that the handler does not swallow the exception and allow the enclosing `<init>` method to return normally to the caller. Accordingly, the handler is required to either complete abruptly by throwing an exception to the caller of the enclosing `<init>` method, or to loop forever.

handlersAreLegal(Environment) :-
    exceptionHandlers(Environment, Handlers),
    checklist(handlerIsLegal(Environment), Handlers).

handlerIsLegal(Environment, Handler) :-
    Handler = handler(Start, End, Target, \_),
    Start < End,
    allInstructions(Environment, Instructions),
    member(instruction(Start, \_), Instructions),
    offsetStackFrame(Environment, Target, \_),
    instructionsIncludeEnd(Instructions, End),
    currentClassLoader(Environment, CurrentLoader),
    handlerExceptionClass(Handler, ExceptionClass, CurrentLoader), 
    isBootstrapLoader(BL),
    isAssignable(ExceptionClass, class('java/lang/Throwable', BL)),
    initHandlerIsLegal(Environment, Handler).

instructionsIncludeEnd(Instructions, End) :-
    member(instruction(End, \_), Instructions).
instructionsIncludeEnd(Instructions, End) :-
    member(endOfCode(End), Instructions).

handlerExceptionClass(handler(\_, \_, \_, 0),
                      class('java/lang/Throwable', BL), \_) :-
    isBootstrapLoader(BL).

handlerExceptionClass(handler(\_, \_, \_, Name),
                      class(Name, L), L) :-
    Name \\= 0.

initHandlerIsLegal(Environment, Handler) :-
    notInitHandler(Environment, Handler).

notInitHandler(Environment, Handler) :-
    Environment = environment(\_Class, Method, \_, Instructions, \_, \_),
    isNotInit(Method).

notInitHandler(Environment, Handler) :-
    Environment = environment(\_Class, Method, \_, Instructions, \_, \_),
    isInit(Method),
    member(instruction(\_, invokespecial(CP)), Instructions),
    CP = method(MethodClassName, MethodName, Descriptor),
    MethodName \\= '`<init>`'. 


initHandlerIsLegal(Environment, Handler) :-
    isInitHandler(Environment, Handler),
    sublist(isApplicableInstruction(Target), Instructions,
            HandlerInstructions),
    noAttemptToReturnNormally(HandlerInstructions).

isInitHandler(Environment, Handler) :-
    Environment = environment(\_Class, Method, \_, Instructions, \_, \_),
    isInit(Method).
    member(instruction(\_, invokespecial(CP)), Instructions),
    CP = method(MethodClassName, '`<init>`', Descriptor).

isApplicableInstruction(HandlerStart, instruction(Offset, \_)) :-
    Offset >= HandlerStart.

noAttemptToReturnNormally(Instructions) :-
    notMember(instruction(\_, return), Instructions).

noAttemptToReturnNormally(Instructions) :-
    member(instruction(\_, athrow), Instructions). 

Let us now turn to the stream of instructions and stack map frames.

Merging instructions and stack map frames into a single stream involves four cases:

*   Merging an empty `StackMap` and a list of instructions yields the original list of instructions.
    
    mergeStackMapAndCode(\[\], CodeList, CodeList).
    
*   Given a list of stack map frames beginning with the type state for the instruction at `Offset`, and a list of instructions beginning at `Offset`, the merged list is the head of the stack map frame list, followed by the head of the instruction list, followed by the merge of the tails of the two lists.
    
    mergeStackMapAndCode(\[stackMap(Offset, Map) | RestMap\],
                         \[instruction(Offset, Parse) | RestCode\],
                         \[stackMap(Offset, Map),
                           instruction(Offset, Parse) | RestMerge\]) :-
        mergeStackMapAndCode(RestMap, RestCode, RestMerge).
    
*   Otherwise, given a list of stack map frames beginning with the type state for the instruction at `OffsetM`, and a list of instructions beginning at `OffsetP`, then, if `OffsetP < OffsetM`, the merged list consists of the head of the instruction list, followed by the merge of the stack map frame list and the tail of the instruction list.
    
    mergeStackMapAndCode(\[stackMap(OffsetM, Map) | RestMap\],
                         \[instruction(OffsetP, Parse) | RestCode\],
                         \[instruction(OffsetP, Parse) | RestMerge\]) :-
        OffsetP < OffsetM,
        mergeStackMapAndCode(\[stackMap(OffsetM, Map) | RestMap\],
                             RestCode, RestMerge).
    
*   Otherwise, the merge of the two lists is undefined. Since the instruction list has monotonically increasing offsets, the merge of the two lists is not defined unless every stack map frame offset has a corresponding instruction offset and the stack map frames are in monotonically increasing order.
    

To determine if the merged stream for a method is type correct, we first infer the method's initial type state.

The initial type state of a method consists of an empty operand stack and local variable types derived from the type of `this` and the arguments, as well as the appropriate flag, depending on whether this is an `<init>` method.

methodInitialStackFrame(Class, Method, FrameSize, frame(Locals, \[\], Flags),
                        ReturnType):-
    methodDescriptor(Method, Descriptor),
    parseMethodDescriptor(Descriptor, RawArgs, ReturnType),
    expandTypeList(RawArgs, Args),
    methodInitialThisType(Class, Method, ThisList),
    flags(ThisList, Flags),
    append(ThisList, Args, ThisArgs),
    expandToLength(ThisArgs, FrameSize, top, Locals).

Given a list of types, the following clause produces a list where every type of size 2 has been substituted by two entries: one for itself, and one `top` entry. The result then corresponds to the representation of the list as 32-bit words in the Java Virtual Machine.

expandTypeList(\[\], \[\]).
expandTypeList(\[Item | List\], \[Item | Result\]) :-
    sizeOf(Item, 1),
    expandTypeList(List, Result).
expandTypeList(\[Item | List\], \[Item, top | Result\]) :-
    sizeOf(Item, 2),
    expandTypeList(List, Result).

flags(\[uninitializedThis\], \[flagThisUninit\]).
flags(X, \[\]) :- X \\= \[uninitializedThis\].

expandToLength(List, Size, \_Filler, List) :-
    length(List, Size).
expandToLength(List, Size, Filler, Result) :-
    length(List, ListLength),
    ListLength < Size,
    Delta is Size - ListLength,
    length(Extra, Delta),
    checklist(=(Filler), Extra),
    append(List, Extra, Result).

For the initial type state of an instance method, we compute the type of `this` and put it in a list. The type of `this` in the `<init>` method of `Object` is `Object`; in other `<init>` methods, the type of `this` is `uninitializedThis`; otherwise, the type of `this` in an instance method is `class(N, L)` where `N` is the name of the class containing the method and `L` is its defining class loader.

For the initial type state of a static method, `this` is irrelevant, so the list is empty.

methodInitialThisType(\_Class, Method, \[\]) :-
    methodAccessFlags(Method, AccessFlags),
    member(static, AccessFlags),
    methodName(Method, MethodName),
    MethodName \\= '`<init>`'.

methodInitialThisType(Class, Method, \[This\]) :-
    methodAccessFlags(Method, AccessFlags),
    notMember(static, AccessFlags),
    instanceMethodInitialThisType(Class, Method, This).

instanceMethodInitialThisType(Class, Method, class('java/lang/Object', L)) :-
    methodName(Method, '`<init>`'), 
    classDefiningLoader(Class, L),
    isBootstrapLoader(L),
    classClassName(Class, 'java/lang/Object').

instanceMethodInitialThisType(Class, Method, uninitializedThis) :-
    methodName(Method, '`<init>`'), 
    classClassName(Class, ClassName),
    classDefiningLoader(Class, CurrentLoader),
    superclassChain(ClassName, CurrentLoader, Chain),
    Chain \\= \[\].

instanceMethodInitialThisType(Class, Method, class(ClassName, L)) :-
    methodName(Method, MethodName),
    MethodName \\= '`<init>`',
    classDefiningLoader(Class, L),
    classClassName(Class, ClassName).

We now compute whether the merged stream for a method is type correct, using the method's initial type state:

*   If we have a stack map frame and an incoming type state, the type state must be assignable to the one in the stack map frame. We may then proceed to type check the rest of the stream with the type state given in the stack map frame.
    
    mergedCodeIsTypeSafe(Environment, \[stackMap(Offset, MapFrame) | MoreCode\],
                         frame(Locals, OperandStack, Flags)) :-
        frameIsAssignable(frame(Locals, OperandStack, Flags), MapFrame),
        mergedCodeIsTypeSafe(Environment, MoreCode, MapFrame).
    
*   A merged code stream is type safe relative to an incoming type state `T` if it begins with an instruction `I` that is type safe relative to `T`, and `I` _satisfies_ its exception handlers (see below), and the tail of the stream is type safe given the type state following that execution of `I`.
    
    `NextStackFrame` indicates what falls through to the following instruction. For an unconditional branch instruction, it will have the special value `afterGoto`. `ExceptionStackFrame` indicates what is passed to exception handlers.
    
    mergedCodeIsTypeSafe(Environment, \[instruction(Offset, Parse) | MoreCode\],
                         frame(Locals, OperandStack, Flags)) :-
        instructionIsTypeSafe(Parse, Environment, Offset,
                              frame(Locals, OperandStack, Flags),
                              NextStackFrame, ExceptionStackFrame),
        instructionSatisfiesHandlers(Environment, Offset, ExceptionStackFrame),
        mergedCodeIsTypeSafe(Environment, MoreCode, NextStackFrame).
    
*   After an unconditional branch (indicated by an incoming type state of `afterGoto`), if we have a stack map frame giving the type state for the following instructions, we can proceed and type check them using the type state provided by the stack map frame.
    
    mergedCodeIsTypeSafe(Environment, \[stackMap(Offset, MapFrame) | MoreCode\],
                         afterGoto) :-
        mergedCodeIsTypeSafe(Environment, MoreCode, MapFrame).
    
*   It is illegal to have code after an unconditional branch without a stack map frame being provided for it.
    
    mergedCodeIsTypeSafe(\_Environment, \[instruction(\_, \_) | \_MoreCode\],
                         afterGoto) :-
        write\_ln('No stack frame after unconditional branch'),
        fail.
    
*   If we have an unconditional branch at the end of the code, stop.
    
    mergedCodeIsTypeSafe(\_Environment, \[endOfCode(Offset)\],
                         afterGoto).
    

Branching to a target is type safe if the target has an associated stack frame, `Frame`, and the current stack frame, `StackFrame`, is assignable to `Frame`.

targetIsTypeSafe(Environment, StackFrame, Target) :-
    offsetStackFrame(Environment, Target, Frame),
    frameIsAssignable(StackFrame, Frame).

An instruction _satisfies its exception handlers_ if it satisfies every exception handler that is applicable to the instruction.

instructionSatisfiesHandlers(Environment, Offset, ExceptionStackFrame) :-
    exceptionHandlers(Environment, Handlers),
    sublist(isApplicableHandler(Offset), Handlers, ApplicableHandlers),
    checklist(instructionSatisfiesHandler(Environment, ExceptionStackFrame),
              ApplicableHandlers).

An exception handler is _applicable_ to an instruction if the offset of the instruction is greater or equal to the start of the handler's range and less than the end of the handler's range.

isApplicableHandler(Offset, handler(Start, End, \_Target, \_ClassName)) :-
    Offset >= Start,
    Offset < End.

An instruction _satisfies_ an exception handler if the instructions's outgoing type state is `ExcStackFrame`, and the handler's target (the initial instruction of the handler code) is type safe assuming an incoming type state `T`. The type state `T` is derived from `ExcStackFrame` by replacing the operand stack with a stack whose sole element is the handler's exception class.

instructionSatisfiesHandler(Environment, ExcStackFrame, Handler) :-
    Handler = handler(\_, \_, Target, \_),
    currentClassLoader(Environment, CurrentLoader),
    handlerExceptionClass(Handler, ExceptionClass, CurrentLoader), 
    /\* The stack consists of just the exception. \*/
    ExcStackFrame = frame(Locals, \_, Flags),
    TrueExcStackFrame = frame(Locals, \[ ExceptionClass \], Flags),
    operandStackHasLegalLength(Environment, TrueExcStackFrame),
    targetIsTypeSafe(Environment, TrueExcStackFrame, Target).

#### 4.10.1.7. Type Checking Load and Store Instructions

All load instructions are variations on a common pattern, varying the type of the value that the instruction loads.

Loading a value of type `Type` from local variable `Index` is type safe, if the type of that local variable is `ActualType`, `ActualType` is assignable to `Type`, and pushing `ActualType` onto the incoming operand stack is a valid type transition ([§4.10.1.4](jvms-4.html#jvms-4.10.1.4 "4.10.1.4. Stack Map Frame Representation")) that yields a new type state `NextStackFrame`. After execution of the load instruction, the type state will be `NextStackFrame`.

loadIsTypeSafe(Environment, Index, Type, StackFrame, NextStackFrame) :-
    StackFrame = frame(Locals, \_OperandStack, \_Flags),
    nth0(Index, Locals, ActualType),
    isAssignable(ActualType, Type),
    validTypeTransition(Environment, \[\], ActualType, StackFrame,
                        NextStackFrame).

All store instructions are variations on a common pattern, varying the type of the value that the instruction stores.

In general, a store instruction is type safe if the local variable it references is of a type that is a supertype of `Type`, and the top of the operand stack is of a subtype of `Type`, where `Type` is the type the instruction is designed to store.

More precisely, the store is type safe if one can pop a type `ActualType` that "matches" `Type` (that is, is a subtype of `Type`) off the operand stack ([§4.10.1.4](jvms-4.html#jvms-4.10.1.4 "4.10.1.4. Stack Map Frame Representation")), and then legally assign that type the local variable `LIndex`.

storeIsTypeSafe(\_Environment, Index, Type,
                frame(Locals, OperandStack, Flags),
                frame(NextLocals, NextOperandStack, Flags)) :-
    popMatchingType(OperandStack, Type, NextOperandStack, ActualType),
    modifyLocalVariable(Index, ActualType, Locals, NextLocals).

Given local variables `Locals`, modifying `Index` to have type `Type` results in the local variable list `NewLocals`. The modifications are somewhat involved, because some values (and their corresponding types) occupy two local variables. Hence, modifying `LN` may require modifying `LN+1` (because the type will occupy both the `N` and `N+1` slots) or `LN-1` (because local `N` used to be the upper half of the two word value/type starting at local `N-1`, and so local `N-1` must be invalidated), or both. This is described further below. We start at `L0` and count up.

modifyLocalVariable(Index, Type, Locals, NewLocals) :-
    modifyLocalVariable(0, Index, Type, Locals, NewLocals).

Given `LocalsRest`, the suffix of the local variable list starting at index `I`, modifying local variable `Index` to have type `Type` results in the local variable list suffix `NextLocalsRest`.

If `I < Index-1`, just copy the input to the output and recurse forward. If `I = Index-1`, the type of local `I` may change. This can occur if `LI` has a type of size 2. Once we set `LI+1` to the new type (and the corresponding value), the type/value of `LI` will be invalidated, as its upper half will be trashed. Then we recurse forward.

modifyLocalVariable(I, Index, Type,
                    \[Locals1 | LocalsRest\],
                    \[Locals1 | NextLocalsRest\] ) :-
    I < Index - 1, 
    I1 is I + 1,
    modifyLocalVariable(I1, Index, Type, LocalsRest, NextLocalsRest).

modifyLocalVariable(I, Index, Type,
                    \[Locals1 | LocalsRest\],
                    \[NextLocals1 | NextLocalsRest\] ) :-
    I =:= Index - 1,
    modifyPreIndexVariable(Locals1, NextLocals1),
    modifyLocalVariable(Index, Index, Type, LocalsRest, NextLocalsRest).

When we find the variable, and it only occupies one word, we change it to `Type` and we're done. When we find the variable, and it occupies two words, we change its type to `Type` and the next word to `top`.

modifyLocalVariable(Index, Index, Type,
                    \[\_ | LocalsRest\], \[Type | LocalsRest\]) :-
    sizeOf(Type, 1).

modifyLocalVariable(Index, Index, Type,
                    \[\_, \_ | LocalsRest\], \[Type, top | LocalsRest\]) :-
    sizeOf(Type, 2).

We refer to a local whose index immediately precedes a local whose type will be modified as a _pre-index variable_. The future type of a pre-index variable of type `InputType` is `Result`. If the type, `Type`, of the pre-index local is of size 1, it doesn't change. If the type of the pre-index local, `Type`, is 2, we need to mark the lower half of its two word value as unusable, by setting its type to `top`.

modifyPreIndexVariable(Type, Type) :- sizeOf(Type, 1).
modifyPreIndexVariable(Type, top) :- sizeOf(Type, 2).

#### 4.10.1.8. Type Checking for `protected` Members

All instructions that access members must contend with the rules concerning `protected` members. This section describes the `protected` check that corresponds to JLS §6.6.2.1.

The `protected` check applies only to `protected` members of superclasses of the current class. `protected` members in other classes will be caught by the access checking done at resolution ([§5.4.4](jvms-5.html#jvms-5.4.4 "5.4.4. Access Control")). There are four cases:

*   If the name of a class is not the name of any superclass, it cannot be a superclass, and so it can safely be ignored.
    
    passesProtectedCheck(Environment, MemberClassName, MemberName,
                         MemberDescriptor, StackFrame) :-
        thisClass(Environment, class(CurrentClassName, CurrentLoader)),
        superclassChain(CurrentClassName, CurrentLoader, Chain),
        notMember(class(MemberClassName, \_), Chain).
    
*   If the `MemberClassName` is the same as the name of a superclass, the class being resolved may indeed be a superclass. In this case, if no superclass named `MemberClassName` in a different run-time package has a `protected` member named `MemberName` with descriptor `MemberDescriptor`, the `protected` check does not apply.
    
    This is because the actual class being resolved will either be one of these superclasses, in which case we know that it is either in the same run-time package, and the access is legal; or the member in question is not `protected` and the check does not apply; or it will be a subclass, in which case the check would succeed anyway; or it will be some other class in the same run-time package, in which case the access is legal and the check need not take place; or the verifier need not flag this as a problem, since it will be caught anyway because resolution will per force fail.
    
    passesProtectedCheck(Environment, MemberClassName, MemberName,
                         MemberDescriptor, StackFrame) :-
        thisClass(Environment, class(CurrentClassName, CurrentLoader)),
        superclassChain(CurrentClassName, CurrentLoader, Chain),
        member(class(MemberClassName, \_), Chain),
        classesInOtherPkgWithProtectedMember(
          class(CurrentClassName, CurrentLoader),
          MemberName, MemberDescriptor, MemberClassName, Chain, \[\]).
    
*   If there does exist a `protected` superclass member in a different run-time package, then load `MemberClassName`; if the member in question is not `protected`, the check does not apply. (Using a superclass member that is not `protected` is trivially correct.)
    
    passesProtectedCheck(Environment, MemberClassName, MemberName,
                         MemberDescriptor,
                         frame(\_Locals, \[Target | Rest\], \_Flags)) :-
        thisClass(Environment, class(CurrentClassName, CurrentLoader)),
        superclassChain(CurrentClassName, CurrentLoader, Chain),
        member(class(MemberClassName, \_), Chain),
        classesInOtherPkgWithProtectedMember(
          class(CurrentClassName, CurrentLoader),
          MemberName, MemberDescriptor, MemberClassName, Chain, List),
        List /= \[\],
        loadedClass(MemberClassName, CurrentLoader, ReferencedClass),
        isNotProtected(ReferencedClass, MemberName, MemberDescriptor).
    
*   Otherwise, use of a member of an object of type `Target` requires that `Target` be assignable to the type of the current class.
    
    passesProtectedCheck(Environment, MemberClassName, MemberName,
                         MemberDescriptor,
                         frame(\_Locals, \[Target | Rest\], \_Flags)) :-
        thisClass(Environment, class(CurrentClassName, CurrentLoader)),
        superclassChain(CurrentClassName, CurrentLoader, Chain),
        member(class(MemberClassName, \_), Chain),
        classesInOtherPkgWithProtectedMember(
          class(CurrentClassName, CurrentLoader),
          MemberName, MemberDescriptor, MemberClassName, Chain, List),
        List /= \[\],
        loadedClass(MemberClassName, CurrentLoader, ReferencedClass),
        isProtected(ReferencedClass, MemberName, MemberDescriptor),
        isAssignable(Target, class(CurrentClassName, CurrentLoader)).
    

The predicate `classesInOtherPkgWithProtectedMember(Class, MemberName, MemberDescriptor, MemberClassName, Chain, List)` is true if `List` is the set of classes in `Chain` with name `MemberClassName` that are in a different run-time package than `Class` which have a `protected` member named `MemberName` with descriptor `MemberDescriptor`.

classesInOtherPkgWithProtectedMember(\_, \_, \_, \_, \[\], \[\]).

classesInOtherPkgWithProtectedMember(Class, MemberName,
                                     MemberDescriptor, MemberClassName,
                                     \[class(MemberClassName, L) | Tail\],
                                     \[class(MemberClassName, L) | T\]) :-
    differentRuntimePackage(Class, class(MemberClassName, L)),
    loadedClass(MemberClassName, L, Super),
    isProtected(Super, MemberName, MemberDescriptor),
    classesInOtherPkgWithProtectedMember(
      Class, MemberName, MemberDescriptor, MemberClassName, Tail, T).

classesInOtherPkgWithProtectedMember(Class, MemberName,
                                     MemberDescriptor, MemberClassName,
                                     \[class(MemberClassName, L) | Tail\],
                                     T) :-
    differentRuntimePackage(Class, class(MemberClassName, L)),
    loadedClass(MemberClassName, L, Super),
    isNotProtected(Super, MemberName, MemberDescriptor),
    classesInOtherPkgWithProtectedMember(
      Class, MemberName, MemberDescriptor, MemberClassName, Tail, T).

classesInOtherPkgWithProtectedMember(Class, MemberName,
                                     MemberDescriptor, MemberClassName,
                                     \[class(MemberClassName, L) | Tail\],
                                     T\] :-
    sameRuntimePackage(Class, class(MemberClassName, L)),
    classesInOtherPkgWithProtectedMember(
      Class, MemberName, MemberDescriptor, MemberClassName, Tail, T).

sameRuntimePackage(Class1, Class2) :-
    classDefiningLoader(Class1, L),
    classDefiningLoader(Class2, L),
    samePackageName(Class1, Class2).

differentRuntimePackage(Class1, Class2) :-
    classDefiningLoader(Class1, L1),
    classDefiningLoader(Class2, L2),
    L1 \\= L2.

differentRuntimePackage(Class1, Class2) :-
    differentPackageName(Class1, Class2).

#### 4.10.1.9. Type Checking Instructions

In general, the type rule for an instruction is given relative to an environment `Environment` that defines the class and method in which the instruction occurs ([§4.10.1.1](jvms-4.html#jvms-4.10.1.1 "4.10.1.1. Accessors for Java Virtual Machine Artifacts")), and the offset `Offset` within the method at which the instruction occurs. The rule states that if the incoming type state `StackFrame` fulfills certain requirements, then:

*   The instruction is type safe.
    
*   It is provable that the type state after the instruction completes normally has a particular form given by `NextStackFrame`, and that the type state after the instruction completes abruptly is given by `ExceptionStackFrame`.
    
    The type state after an instruction completes abruptly is the same as the incoming type state, except that the operand stack is empty.
    
    exceptionStackFrame(StackFrame, ExceptionStackFrame) :-
        StackFrame = frame(Locals, \_OperandStack, Flags),
        ExceptionStackFrame = frame(Locals, \[\], Flags).
        
    

Many instructions have type rules that are completely isomorphic to the rules for other instructions. If an instruction `b1` is isomorphic to another instruction `b2`, then the type rule for `b1` is the same as the type rule for `b2`.

instructionIsTypeSafe(Instruction, Environment, Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    instructionHasEquivalentTypeRule(Instruction, IsomorphicInstruction),
    instructionIsTypeSafe(IsomorphicInstruction, Environment, Offset,
                          StackFrame, NextStackFrame,
                          ExceptionStackFrame).

The English language description of each rule is intended to be readable, intuitive, and concise. As such, the description avoids repeating all the contextual assumptions given above. In particular:

*   The description does not explicitly mention the environment.
    
*   When the description speaks of the operand stack or local variables in the following, it is referring to the operand stack and local variable components of a type state: either the incoming type state or the outgoing one.
    
*   The type state after the instruction completes abruptly is almost always identical to the incoming type state. The description only discusses the type state after the instruction completes abruptly when that is not the case.
    
*   The description speaks of popping and pushing types onto the operand stack, and does not explicitly discuss issues of stack underflow or overflow. The description assumes these operations can be completed successfully, but the Prolog clauses for operand stack manipulation ensure that the necessary checks are made.
    
*   The description discusses only the manipulation of logical types. In practice, some types take more than one word. The description abstracts from these representation details, but the Prolog clauses that manipulate data do not.
    

Any ambiguities can be resolved by referring to the formal Prolog clauses.

##### `aaload`

An _aaload_ instruction is type safe iff one can validly replace types matching `int` and an array type with component type `ComponentType` where `ComponentType` is a subtype of `Object`, with `ComponentType` yielding the outgoing type state.

instructionIsTypeSafe(aaload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    nth1OperandStackIs(2, StackFrame, ArrayType),
    arrayComponentType(ArrayType, ComponentType),
    isBootstrapLoader(BL),
    validTypeTransition(Environment,
                        \[int, arrayOf(class('java/lang/Object', BL))\],
                        ComponentType, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The component type of an array of `X` is `X`. We define the component type of `null` to be `null`.

arrayComponentType(arrayOf(X), X).
arrayComponentType(null, null).

##### `aastore`

An _aastore_ instruction is type safe iff one can validly pop types matching `Object`, `int`, and an array of `Object` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(aastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    isBootstrapLoader(BL),
    canPop(StackFrame,
           \[class('java/lang/Object', BL),
            int,
            arrayOf(class('java/lang/Object', BL))\],
           NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `aconst_null`

An _aconst\_null_ instruction is type safe if one can validly push the type `null` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(aconst\_null, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[\], null, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `aload, aload_<n>`

An _aload_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a load instruction with operand `Index` and type `reference` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(aload(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    loadIsTypeSafe(Environment, Index, reference, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _aload\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _aload_ instruction is type safe.

instructionHasEquivalentTypeRule(aload\_0, aload(0)).
instructionHasEquivalentTypeRule(aload\_1, aload(1)).
instructionHasEquivalentTypeRule(aload\_2, aload(2)).
instructionHasEquivalentTypeRule(aload\_3, aload(3)).

##### `anewarray`

An _anewarray_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting either a class type or an array type, and one can legally replace a type matching `int` on the incoming operand stack with an array with component type `CP` yielding the outgoing type state.

instructionIsTypeSafe(anewarray(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    (CP = class(\_, \_) ; CP = arrayOf(\_)),
    validTypeTransition(Environment, \[int\], arrayOf(CP),
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `areturn`

An _areturn_ instruction is type safe iff the enclosing method has a declared return type, `ReturnType`, that is a `reference` type, and one can validly pop a type matching `ReturnType` off the incoming operand stack.

instructionIsTypeSafe(areturn, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, ReturnType),
    isAssignable(ReturnType, reference),
    canPop(StackFrame, \[ReturnType\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `arraylength`

An _arraylength_ instruction is type safe iff one can validly replace an array type on the incoming operand stack with the type `int` yielding the outgoing type state.

instructionIsTypeSafe(arraylength, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    nth1OperandStackIs(1, StackFrame, ArrayType),
    arrayComponentType(ArrayType, \_),
    validTypeTransition(Environment, \[top\], int, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `astore, astore_<n>`

An _astore_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a store instruction with operand `Index` and type `reference` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(astore(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    storeIsTypeSafe(Environment, Index, reference, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _astore\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _astore_ instruction is type safe.

instructionHasEquivalentTypeRule(astore\_0, astore(0)).
instructionHasEquivalentTypeRule(astore\_1, astore(1)).
instructionHasEquivalentTypeRule(astore\_2, astore(2)).
instructionHasEquivalentTypeRule(astore\_3, astore(3)).

##### `athrow`

An _athrow_ instruction is type safe iff the top of the operand stack matches `Throwable`.

instructionIsTypeSafe(athrow, \_Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    isBootstrapLoader(BL),
    canPop(StackFrame, \[class('java/lang/Throwable', BL)\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `baload`

A _baload_ instruction is type safe iff one can validly replace types matching `int` and a small array type on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(baload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :
    nth1OperandStackIs(2, StackFrame, ArrayType),
    isSmallArray(ArrayType),
    validTypeTransition(Environment, \[int, top\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An array type is a _small array type_ if it is an array of `byte`, an array of `boolean`, or a subtype thereof (`null`).

isSmallArray(arrayOf(byte)).
isSmallArray(arrayOf(boolean)).
isSmallArray(null).

##### `bastore`

A _bastore_ instruction is type safe iff one can validly pop types matching `int`, `int` and a small array type off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(bastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    nth1OperandStackIs(3, StackFrame, ArrayType),
    isSmallArray(ArrayType),
    canPop(StackFrame, \[int, int, top\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `bipush`

A _bipush_ instruction is type safe iff the equivalent _sipush_ instruction is type safe.

instructionHasEquivalentTypeRule(bipush(Value), sipush(Value)).

##### `caload`

A _caload_ instruction is type safe iff one can validly replace types matching `int` and array of `char` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(caload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(char)\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `castore`

A _castore_ instruction is type safe iff one can validly pop types matching `int`, `int` and array of `char` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(castore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[int, int, arrayOf(char)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `checkcast`

A _checkcast_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting either a class or an array, and one can validly replace the type `Object` on top of the incoming operand stack with the type denoted by `CP` yielding the outgoing type state.

instructionIsTypeSafe(checkcast(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    (CP = class(\_, \_) ; CP = arrayOf(\_)),
    isBootstrapLoader(BL),
    validTypeTransition(Environment, \[class('java/lang/Object', BL)\], CP,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `d2f, d2i, d2l`

A _d2f_ instruction is type safe if one can validly pop `double` off the incoming operand stack and replace it with `float`, yielding the outgoing type state.

instructionIsTypeSafe(d2f, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[double\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _d2i_ instruction is type safe if one can validly pop `double` off the incoming operand stack and replace it with `int`, yielding the outgoing type state.

instructionIsTypeSafe(d2i, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[double\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _d2l_ instruction is type safe if one can validly pop `double` off the incoming operand stack and replace it with `long`, yielding the outgoing type state.

instructionIsTypeSafe(d2l, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[double\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dadd`

A _dadd_ instruction is type safe iff one can validly replace types matching `double` and `double` on the incoming operand stack with `double` yielding the outgoing type state.

instructionIsTypeSafe(dadd, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    validTypeTransition(Environment, \[double, double\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `daload`

A _daload_ instruction is type safe iff one can validly replace types matching `int` and array of `double` on the incoming operand stack with `double` yielding the outgoing type state.

instructionIsTypeSafe(daload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(double)\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dastore`

A _dastore_ instruction is type safe iff one can validly pop types matching `double`, `int` and array of `double` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(dastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[double, int, arrayOf(double)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dcmp<op>`

A _dcmpg_ instruction is type safe iff one can validly replace types matching `double` and `double` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(dcmpg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[double, double\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dcmpl_ instruction is type safe iff the equivalent _dcmpg_ instruction is type safe.

instructionHasEquivalentTypeRule(dcmpl, dcmpg).

##### `dconst_<d>`

A _dconst\_0_ instruction is type safe if one can validly push the type `double` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(dconst\_0, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[\], double, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dconst\_1_ instruction is type safe iff the equivalent _dconst\_0_ instruction is type safe.

instructionHasEquivalentTypeRule(dconst\_1, dconst\_0).

##### `ddiv`

A _ddiv_ instruction is type safe iff the equivalent _dadd_ instruction is type safe.

instructionHasEquivalentTypeRule(ddiv, dadd).

##### `dload, dload_<n>`

A _dload_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a load instruction with operand `Index` and type `double` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(dload(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    loadIsTypeSafe(Environment, Index, double, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _dload\_<n>_, for 0 ≤ _n_ ≤ 3, are typesafe iff the equivalent _dload_ instruction is type safe.

instructionHasEquivalentTypeRule(dload\_0, dload(0)).
instructionHasEquivalentTypeRule(dload\_1, dload(1)).
instructionHasEquivalentTypeRule(dload\_2, dload(2)).
instructionHasEquivalentTypeRule(dload\_3, dload(3)).

##### `dmul`

A _dmul_ instruction is type safe iff the equivalent _dadd_ instruction is type safe.

instructionHasEquivalentTypeRule(dmul, dadd).

##### `dneg`

A _dneg_ instruction is type safe iff there is a type matching `double` on the incoming operand stack. The _dneg_ instruction does not alter the type state.

instructionIsTypeSafe(dneg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[double\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `drem`

A _drem_ instruction is type safe iff the equivalent _dadd_ instruction is type safe.

instructionHasEquivalentTypeRule(drem, dadd).

##### `dreturn`

A _dreturn_ instruction is type safe if the enclosing method has a declared return type of `double`, and one can validly pop a type matching `double` off the incoming operand stack.

instructionIsTypeSafe(dreturn, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, double),
    canPop(StackFrame, \[double\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dstore, dstore_<n>`

A _dstore_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a store instruction with operand `Index` and type `double` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(dstore(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    storeIsTypeSafe(Environment, Index, double, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _dstore\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _dstore_ instruction is type safe.

instructionHasEquivalentTypeRule(dstore\_0, dstore(0)).
instructionHasEquivalentTypeRule(dstore\_1, dstore(1)).
instructionHasEquivalentTypeRule(dstore\_2, dstore(2)).
instructionHasEquivalentTypeRule(dstore\_3, dstore(3)).

##### `dsub`

A _dsub_ instruction is type safe iff the equivalent _dadd_ instruction is type safe.

instructionHasEquivalentTypeRule(dsub, dadd).

##### `dup`

A _dup_ instruction is type safe iff one can validly replace a category 1 type, `Type`, with the types `Type`, `Type`, yielding the outgoing type state.

instructionIsTypeSafe(dup, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    StackFrame = frame(Locals, InputOperandStack, Flags),
    popCategory1(InputOperandStack, Type, \_),
    canSafelyPush(Environment, InputOperandStack, Type, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dup_x1`

A _dup\_x1_ instruction is type safe iff one can validly replace two category 1 types, `Type1`, and `Type2`, on the incoming operand stack with the types `Type1`, `Type2`, `Type1`, yielding the outgoing type state.

instructionIsTypeSafe(dup\_x1, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, InputOperandStack, Flags),
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Rest),
    canSafelyPushList(Environment, Rest, \[Type1, Type2, Type1\],
                      OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `dup_x2`

A _dup\_x2_ instruction is type safe iff it is a _type safe form_ of the _dup\_x2_ instruction.

instructionIsTypeSafe(dup\_x2, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, InputOperandStack, Flags),
    dup\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dup\_x2_ instruction is a _type safe form_ of the _dup\_x2_ instruction iff it is a _type safe form 1_ _dup\_x2_ instruction or a _type safe form 2_ _dup\_x2_ instruction.

dup\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup\_x2Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

dup\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup\_x2Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

A _dup\_x2_ instruction is a _type safe form 1_ _dup\_x2_ instruction iff one can validly replace three category 1 types, `Type1`, `Type2`, `Type3` on the incoming operand stack with the types `Type1`, `Type2`, `Type3`, `Type1`, yielding the outgoing type state.

dup\_x2Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Stack2),
    popCategory1(Stack2, Type3, Rest),
    canSafelyPushList(Environment, Rest, \[Type1, Type3, Type2, Type1\],
                      OutputOperandStack).

A _dup\_x2_ instruction is a _type safe form 2_ _dup\_x2_ instruction iff one can validly replace a category 1 type, `Type1`, and a category 2 type, `Type2`, on the incoming operand stack with the types `Type1`, `Type2`, `Type1`, yielding the outgoing type state.

dup\_x2Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory2(Stack1, Type2, Rest),
    canSafelyPushList(Environment, Rest, \[Type1, Type2, Type1\],
                      OutputOperandStack).

##### `dup2`

A _dup2_ instruction is type safe iff it is a _type safe form_ of the _dup2_ instruction.

instructionIsTypeSafe(dup2, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    StackFrame = frame(Locals, InputOperandStack, Flags),
    dup2FormIsTypeSafe(Environment,InputOperandStack, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dup2_ instruction is a _type safe form_ of the _dup2_ instruction iff it is a _type safe form 1_ _dup2_ instruction or a _type safe form 2_ _dup2_ instruction.

dup2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2Form1IsTypeSafe(Environment,InputOperandStack, OutputOperandStack).

dup2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2Form2IsTypeSafe(Environment,InputOperandStack, OutputOperandStack).

A _dup2_ instruction is a _type safe form 1_ _dup2_ instruction iff one can validly replace two category 1 types, `Type1` and `Type2` on the incoming operand stack with the types `Type1`, `Type2`, `Type1`, `Type2`, yielding the outgoing type state.

dup2Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack):-
    popCategory1(InputOperandStack, Type1, TempStack),
    popCategory1(TempStack, Type2, \_),
    canSafelyPushList(Environment, InputOperandStack, \[Type1, Type2\],
                      OutputOperandStack).

A _dup2_ instruction is a _type safe form 2_ _dup2_ instruction iff one can validly replace a category 2 type, `Type` on the incoming operand stack with the types `Type`, `Type`, yielding the outgoing type state.

dup2Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack):-
    popCategory2(InputOperandStack, Type, \_),
    canSafelyPush(Environment, InputOperandStack, Type, OutputOperandStack).

##### `dup2_x1`

A _dup2\_x1_ instruction is type safe iff it is a _type safe form_ of the _dup2\_x1_ instruction.

instructionIsTypeSafe(dup2\_x1, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, InputOperandStack, Flags),
    dup2\_x1FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dup2\_x1_ instruction is a _type safe form_ of the _dup2\_x1_ instruction iff it is a _type safe form 1_ _dup2\_x1_ instruction or a _type safe form 2_ _dup\_x2_ instruction.

dup2\_x1FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x1Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

dup2\_x1FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x1Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

A _dup2\_x1_ instruction is a _type safe form 1_ _dup2\_x1_ instruction iff one can validly replace three category 1 types, `Type1`, `Type2`, `Type3`, on the incoming operand stack with the types `Type1`, `Type2`, `Type3`, `Type1`, `Type2`, yielding the outgoing type state.

dup2\_x1Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Stack2),
    popCategory1(Stack2, Type3, Rest),
    canSafelyPushList(Environment, Rest, \[Type2, Type1, Type3, Type2, Type1\],
                      OutputOperandStack).

A _dup2\_x1_ instruction is a _type safe form 2_ _dup2\_x1_ instruction iff one can validly replace a category 2 type, `Type1`, and a category 1 type, `Type2`, on the incoming operand stack with the types `Type1`, `Type2`, `Type1`, yielding the outgoing type state.

dup2\_x1Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory2(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Rest),
    canSafelyPushList(Environment, Rest, \[Type1, Type2, Type1\],
                      OutputOperandStack).

##### `dup2_x2`

A _dup2\_x2_ instruction is type safe iff it is a _type safe form_ of the _dup2\_x2_ instruction.

instructionIsTypeSafe(dup2\_x2, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, InputOperandStack, Flags),
    dup2\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _dup2\_x2_ instruction is a _type safe form_ of the _dup2\_x2_ instruction iff one of the following holds:

*   it is a _type safe form 1_ _dup2\_x2_ instruction.
    
*   it is a _type safe form 2_ _dup2\_x2_ instruction.
    
*   it is a _type safe form 3_ _dup2\_x2_ instruction.
    
*   it is a _type safe form 4_ _dup2\_x2_ instruction.
    

dup2\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x2Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

dup2\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x2Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

dup2\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x2Form3IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

dup2\_x2FormIsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    dup2\_x2Form4IsTypeSafe(Environment, InputOperandStack, OutputOperandStack).

A _dup2\_x2_ instruction is a _type safe form 1_ _dup2\_x2_ instruction iff one can validly replace four category 1 types, `Type1`, `Type2`, `Type3`, `Type4`, on the incoming operand stack with the types `Type1`, `Type2`, `Type3`, `Type4`, `Type1`, `Type2`, yielding the outgoing type state.

dup2\_x2Form1IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Stack2),
    popCategory1(Stack2, Type3, Stack3),
    popCategory1(Stack3, Type4, Rest),
    canSafelyPushList(Environment, Rest,
                      \[Type2, Type1, Type4, Type3, Type2, Type1\],
                      OutputOperandStack).

A _dup2\_x2_ instruction is a _type safe form 2_ _dup2\_x2_ instruction iff one can validly replace a category 2 type, `Type1`, and two category 1 types, `Type2`, `Type3`, on the incoming operand stack with the types `Type1`, `Type2`, `Type3`, `Type1`, yielding the outgoing type state.

dup2\_x2Form2IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory2(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Stack2),
    popCategory1(Stack2, Type3, Rest),
    canSafelyPushList(Environment, Rest,
                      \[Type1, Type3, Type2, Type1\],
                      OutputOperandStack).

A _dup2\_x2_ instruction is a _type safe form 3_ _dup2\_x2_ instruction iff one can validly replace two category 1 types, `Type1`, `Type2`, and a category 2 type, `Type3`, on the incoming operand stack with the types `Type1`, `Type2`, `Type3`, `Type1`, `Type2`, yielding the outgoing type state.

dup2\_x2Form3IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory1(InputOperandStack, Type1, Stack1),
    popCategory1(Stack1, Type2, Stack2),
    popCategory2(Stack2, Type3, Rest),
    canSafelyPushList(Environment, Rest,
                      \[Type2, Type1, Type3, Type2, Type1\],
                      OutputOperandStack).

A _dup2\_x2_ instruction is a _type safe form 4_ _dup2\_x2_ instruction iff one can validly replace two category 2 types, `Type1`, `Type2`, on the incoming operand stack with the types `Type1`, `Type2`, `Type1`, yielding the outgoing type state.

dup2\_x2Form4IsTypeSafe(Environment, InputOperandStack, OutputOperandStack) :-
    popCategory2(InputOperandStack, Type1, Stack1),
    popCategory2(Stack1, Type2, Rest),
    canSafelyPushList(Environment, Rest, \[Type1, Type2, Type1\],
                      OutputOperandStack).

##### `f2d, f2i, f2l`

An _f2d_ instruction is type safe if one can validly pop `float` off the incoming operand stack and replace it with `double`, yielding the outgoing type state.

instructionIsTypeSafe(f2d, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _f2i_ instruction is type safe if one can validly pop `float` off the incoming operand stack and replace it with `int`, yielding the outgoing type state.

instructionIsTypeSafe(f2i, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _f2l_ instruction is type safe if one can validly pop `float` off the incoming operand stack and replace it with `long`, yielding the outgoing type state.

instructionIsTypeSafe(f2l, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `fadd`

An _fadd_ instruction is type safe iff one can validly replace types matching `float` and `float` on the incoming operand stack with `float` yielding the outgoing type state.

instructionIsTypeSafe(fadd, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float, float\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `faload`

An _faload_ instruction is type safe iff one can validly replace types matching `int` and array of `float` on the incoming operand stack with `float` yielding the outgoing type state.

instructionIsTypeSafe(faload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(float)\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `fastore`

An _fastore_ instruction is type safe iff one can validly pop types matching `float`, `int` and array of `float` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(fastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[float, int, arrayOf(float)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `fcmp<op>`

An _fcmpg_ instruction is type safe iff one can validly replace types matching `float` and `float` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(fcmpg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float, float\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _fcmpl_ instruction is type safe iff the equivalent _fcmpg_ instruction is type safe.

instructionHasEquivalentTypeRule(fcmpl, fcmpg).

##### `fconst_<f>`

An _fconst\_0_ instruction is type safe if one can validly push the type `float` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(fconst\_0, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[\], float, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The rules for the other variants of _fconst_ are equivalent.

instructionHasEquivalentTypeRule(fconst\_1, fconst\_0).
instructionHasEquivalentTypeRule(fconst\_2, fconst\_0).

##### `fdiv`

An _fdiv_ instruction is type safe iff the equivalent _fadd_ instruction is type safe.

instructionHasEquivalentTypeRule(fdiv, fadd).

##### `fload, fload_<n>`

An _fload_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a load instruction with operand `Index` and type `float` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(fload(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    loadIsTypeSafe(Environment, Index, float, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _fload\_<n>_, for 0 ≤ _n_ ≤ 3, are typesafe iff the equivalent _fload_ instruction is type safe.

instructionHasEquivalentTypeRule(fload\_0, fload(0)).
instructionHasEquivalentTypeRule(fload\_1, fload(1)).
instructionHasEquivalentTypeRule(fload\_2, fload(2)).
instructionHasEquivalentTypeRule(fload\_3, fload(3)).

##### `fmul`

An _fmul_ instruction is type safe iff the equivalent _fadd_ instruction is type safe.

instructionHasEquivalentTypeRule(fmul, fadd).

##### `fneg`

An _fneg_ instruction is type safe iff there is a type matching `float` on the incoming operand stack. The _fneg_ instruction does not alter the type state.

instructionIsTypeSafe(fneg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[float\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `frem`

An _frem_ instruction is type safe iff the equivalent _fadd_ instruction is type safe.

instructionHasEquivalentTypeRule(frem, fadd).

##### `freturn`

An _freturn_ instruction is type safe if the enclosing method has a declared return type of `float`, and one can validly pop a type matching `float` off the incoming operand stack.

instructionIsTypeSafe(freturn, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, float),
    canPop(StackFrame, \[float\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `fstore, fstore_<n>`

An _fstore_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a store instruction with operand `Index` and type `float` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(fstore(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    storeIsTypeSafe(Environment, Index, float, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _fstore\_<n>_, for 0 ≤ _n_ ≤ 3, are typesafe iff the equivalent _fstore_ instruction is type safe.

instructionHasEquivalentTypeRule(fstore\_0, fstore(0)).
instructionHasEquivalentTypeRule(fstore\_1, fstore(1)).
instructionHasEquivalentTypeRule(fstore\_2, fstore(2)).
instructionHasEquivalentTypeRule(fstore\_3, fstore(3)).

##### `fsub`

An _fsub_ instruction is type safe iff the equivalent _fadd_ instruction is type safe.

instructionHasEquivalentTypeRule(fsub, fadd).

##### `getfield`

A _getfield_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting a field whose declared type is `FieldType`, declared in a class `FieldClass`, and one can validly replace a type matching `FieldClass` with type `FieldType` on the incoming operand stack yielding the outgoing type state. `FieldClass` must not be an array type. `protected` fields are subject to additional checks ([§4.10.1.8](jvms-4.html#jvms-4.10.1.8 "4.10.1.8. Type Checking for protected Members")).

instructionIsTypeSafe(getfield(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = field(FieldClass, FieldName, FieldDescriptor),
    parseFieldDescriptor(FieldDescriptor, FieldType),
    passesProtectedCheck(Environment, FieldClass, FieldName,
                         FieldDescriptor, StackFrame),
    validTypeTransition(Environment, \[class(FieldClass)\], FieldType,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `getstatic`

A _getstatic_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting a field whose declared type is `FieldType`, and one can validly push `FieldType` on the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(getstatic(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = field(\_FieldClass, \_FieldName, FieldDescriptor),
    parseFieldDescriptor(FieldDescriptor, FieldType),
    validTypeTransition(Environment, \[\], FieldType,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `goto, goto_w`

A _goto_ instruction is type safe iff its target operand is a valid branch target.

instructionIsTypeSafe(goto(Target), Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :-
    targetIsTypeSafe(Environment, StackFrame, Target),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _goto\_w_ instruction is type safe iff the equivalent _goto_ instruction is type safe.

instructionHasEquivalentTypeRule(goto\_w(Target), goto(Target)).

##### `i2b, i2c, i2d, i2f, i2l, i2s`

An _i2b_ instruction is type safe iff the equivalent _ineg_ instruction is type safe.

instructionHasEquivalentTypeRule(i2b, ineg).

An _i2c_ instruction is type safe iff the equivalent _ineg_ instruction is type safe.

instructionHasEquivalentTypeRule(i2c, ineg).

An _i2d_ instruction is type safe if one can validly pop `int` off the incoming operand stack and replace it with `double`, yielding the outgoing type state.

instructionIsTypeSafe(i2d, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _i2f_ instruction is type safe if one can validly pop `int` off the incoming operand stack and replace it with `float`, yielding the outgoing type state.

instructionIsTypeSafe(i2f, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _i2l_ instruction is type safe if one can validly pop `int` off the incoming operand stack and replace it with `long`, yielding the outgoing type state.

instructionIsTypeSafe(i2l, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _i2s_ instruction is type safe iff the equivalent _ineg_ instruction is type safe.

instructionHasEquivalentTypeRule(i2s, ineg).

##### `iadd`

An _iadd_ instruction is type safe iff one can validly replace types matching `int` and `int` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(iadd, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, int\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `iaload`

An _iaload_ instruction is type safe iff one can validly replace types matching `int` and array of `int` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(iaload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(int)\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `iand`

An _iand_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(iand, iadd).

##### `iastore`

An _iastore_ instruction is type safe iff one can validly pop types matching `int`, `int` and array of `int` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(iastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[int, int, arrayOf(int)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `if_acmp<cond>`

An _if\_acmpeq_ instruction is type safe iff one can validly pop types matching `reference` and `reference` on the incoming operand stack yielding the outgoing type state `NextStackFrame`, and the operand of the instruction, `Target`, is a valid branch target assuming an incoming type state of `NextStackFrame`.

instructionIsTypeSafe(if\_acmpeq(Target), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[reference, reference\], NextStackFrame),
    targetIsTypeSafe(Environment, NextStackFrame, Target),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The rule for _if\_acmpne_ is identical.

instructionHasEquivalentTypeRule(if\_acmpne(Target), if\_acmpeq(Target)).

##### `if_icmp<cond>`

An _if\_icmpeq_ instruction is type safe iff one can validly pop types matching `int` and `int` on the incoming operand stack yielding the outgoing type state `NextStackFrame`, and the operand of the instruction, `Target`, is a valid branch target assuming an incoming type state of `NextStackFrame`.

instructionIsTypeSafe(if\_icmpeq(Target), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[int, int\], NextStackFrame),
    targetIsTypeSafe(Environment, NextStackFrame, Target),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The rules for all other variants of the _if\_icmp<cond>_ instruction are identical.

instructionHasEquivalentTypeRule(if\_icmpge(Target), if\_icmpeq(Target)).
instructionHasEquivalentTypeRule(if\_icmpgt(Target), if\_icmpeq(Target)).
instructionHasEquivalentTypeRule(if\_icmple(Target), if\_icmpeq(Target)).
instructionHasEquivalentTypeRule(if\_icmplt(Target), if\_icmpeq(Target)).
instructionHasEquivalentTypeRule(if\_icmpne(Target), if\_icmpeq(Target)).

##### `if<cond>`

An _ifeq_ instruction is type safe iff one can validly pop a type matching `int` off the incoming operand stack yielding the outgoing type state `NextStackFrame`, and the operand of the instruction, `Target`, is a valid branch target assuming an incoming type state of `NextStackFrame`.

instructionIsTypeSafe(ifeq(Target), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    canPop(StackFrame, \[int\], NextStackFrame), 
    targetIsTypeSafe(Environment, NextStackFrame, Target),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The rules for all other variations of the _if<cond>_ instruction are identical.

instructionHasEquivalentTypeRule(ifge(Target), ifeq(Target)).
instructionHasEquivalentTypeRule(ifgt(Target), ifeq(Target)).
instructionHasEquivalentTypeRule(ifle(Target), ifeq(Target)).
instructionHasEquivalentTypeRule(iflt(Target), ifeq(Target)).
instructionHasEquivalentTypeRule(ifne(Target), ifeq(Target)).

##### `ifnonnull`

An _ifnonnull_ instruction is type safe iff one can validly pop a type matching `reference` off the incoming operand stack yielding the outgoing type state `NextStackFrame`, and the operand of the instruction, `Target`, is a valid branch target assuming an incoming type state of `NextStackFrame`.

instructionIsTypeSafe(ifnonnull(Target), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[reference\], NextStackFrame),
    targetIsTypeSafe(Environment, NextStackFrame, Target),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `ifnull`

An _ifnull_ instruction is type safe iff the equivalent _ifnonnull_ instruction is type safe.

instructionHasEquivalentTypeRule(ifnull(Target), ifnonnull(Target)).

##### `iinc`

An _iinc_ instruction with first operand `Index` is type safe iff `LIndex` has type `int`. The _iinc_ instruction does not change the type state.

instructionIsTypeSafe(iinc(Index, \_Value), \_Environment, \_Offset,
                      StackFrame, StackFrame, ExceptionStackFrame) :-
    StackFrame = frame(Locals, \_OperandStack, \_Flags),
    nth0(Index, Locals, int),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `iload, iload_<n>`

An _iload_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a load instruction with operand `Index` and type `int` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(iload(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    loadIsTypeSafe(Environment, Index, int, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _iload\_<n>_, for 0 ≤ _n_ ≤ 3, are typesafe iff the equivalent _iload_ instruction is type safe.

instructionHasEquivalentTypeRule(iload\_0, iload(0)).
instructionHasEquivalentTypeRule(iload\_1, iload(1)).
instructionHasEquivalentTypeRule(iload\_2, iload(2)).
instructionHasEquivalentTypeRule(iload\_3, iload(3)).

##### `imul`

An _imul_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(imul, iadd).

##### `ineg`

An _ineg_ instruction is type safe iff there is a type matching `int` on the incoming operand stack. The _ineg_ instruction does not alter the type state.

instructionIsTypeSafe(ineg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int\], int, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `instanceof`

An _instanceof_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting either a class or an array, and one can validly replace the type `Object` on top of the incoming operand stack with type `int` yielding the outgoing type state.

instructionIsTypeSafe(instanceof(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    (CP = class(\_, \_) ; CP = arrayOf(\_)),
    isBootstrapLoader(BL),
    validTypeTransition(Environment, \[class('java/lang/Object', BL)\], int,
                        StackFrame,NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `invokedynamic`

An _invokedynamic_ instruction is type safe iff all of the following are true:

*   Its first operand, `CP`, refers to a constant pool entry denoting an dynamic call site with name `CallSiteName` with descriptor `Descriptor`.
    
*   `CallSiteName` is not `<init>`.
    
*   `CallSiteName` is not `<clinit>`.
    
*   One can validly replace types matching the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`, yielding the outgoing type state.
    

instructionIsTypeSafe(invokedynamic(CP,0,0), Environment, \_Offset,
                      StackFrame, NextStackFrame, ExceptionStackFrame) :- 
    CP = dmethod(CallSiteName, Descriptor),
    CallSiteName \\= '`<init>`',
    CallSiteName \\= '`<clinit>`',
    parseMethodDescriptor(Descriptor, OperandArgList, ReturnType),
    reverse(OperandArgList, StackArgList),
    validTypeTransition(Environment, StackArgList, ReturnType,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `invokeinterface`

An _invokeinterface_ instruction is type safe iff all of the following are true:

*   Its first operand, `CP`, refers to a constant pool entry denoting an interface method named `MethodName` with descriptor `Descriptor` that is a member of an interface `MethodIntfName`.
    
*   `MethodName` is not `<init>`.
    
*   `MethodName` is not `<clinit>`.
    
*   Its second operand, `Count`, is a valid count operand (see below).
    
*   One can validly replace types matching the type `MethodIntfName` and the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`, yielding the outgoing type state.
    

instructionIsTypeSafe(invokeinterface(CP, Count, 0), Environment, \_Offset,
                      StackFrame, NextStackFrame, ExceptionStackFrame) :- 
    CP = imethod(MethodIntfName, MethodName, Descriptor),
    MethodName \\= '`<init>`',
    MethodName \\= '`<clinit>`',
    parseMethodDescriptor(Descriptor, OperandArgList, ReturnType), currentClassLoader(Environment, CurrentLoader), reverse(\[class(MethodIntfName, CurrentLoader) | OperandArgList\], StackArgList), canPop(StackFrame, StackArgList, TempFrame), validTypeTransition(Environment, \[\], ReturnType, TempFrame, NextStackFrame), countIsValid(Count, StackFrame, TempFrame), exceptionStackFrame(StackFrame, ExceptionStackFrame).

The `Count` operand of an _invokeinterface_ instruction is valid if it equals the size of the arguments to the instruction. This is equal to the difference between the size of `InputFrame` and `OutputFrame`.

countIsValid(Count, InputFrame, OutputFrame) :-
    InputFrame = frame(\_Locals1, OperandStack1, \_Flags1),
    OutputFrame = frame(\_Locals2, OperandStack2, \_Flags2),
    length(OperandStack1, Length1),
    length(OperandStack2, Length2),
    Count =:= Length1 - Length2.

##### `invokespecial`

An _invokespecial_ instruction is type safe iff all of the following are true:

*   Its first operand, `CP`, refers to a constant pool entry denoting a method named `MethodName` with descriptor `Descriptor` that is a member of a class `MethodClassName`.
    
*   Either:
    
    *   `MethodName` is not `<init>`.
        
    *   `MethodName` is not `<clinit>`.
        
    *   One can validly replace types matching the current class and the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`, yielding the outgoing type state.
        
    *   One can validly replace types matching the class `MethodClassName` and the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`.
        
    

instructionIsTypeSafe(invokespecial(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = method(MethodClassName, MethodName, Descriptor),
    MethodName \\= '`<init>`',
    MethodName \\= '`<clinit>`',
    parseMethodDescriptor(Descriptor, OperandArgList, ReturnType),
    thisClass(Environment, class(CurrentClassName, CurrentLoader)), 
    reverse(\[class(CurrentClassName, CurrentLoader) | OperandArgList\],
            StackArgList),
    validTypeTransition(Environment, StackArgList, ReturnType,
                        StackFrame, NextStackFrame),
    reverse(\[class(MethodClassName, CurrentLoader) | OperandArgList\],
            StackArgList2),
    validTypeTransition(Environment, StackArgList2, ReturnType,
                        StackFrame, \_ResultStackFrame),
    isAssignable(class(CurrentClassName, CurrentLoader),
                 class(MethodClassName, CurrentLoader)).
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

*   Or:
    
    *   MethodName is `<init>`.
        
    *   `Descriptor` specifies a `void` return type.
        
    *   One can validly pop types matching the argument types given in `Descriptor` and an uninitialized type, `UninitializedArg`, off the incoming operand stack, yielding `OperandStack`.
        
    *   The outgoing type state is derived from the incoming type state by first replacing the incoming operand stack with `OperandStack` and then replacing all instances of `UninitializedArg` with the type of instance being initialized.
        
    

instructionIsTypeSafe(invokespecial(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    CP = method(MethodClassName, '`<init>`', Descriptor),
    parseMethodDescriptor(Descriptor, OperandArgList, void), 
    reverse(OperandArgList, StackArgList),
    canPop(StackFrame, StackArgList, TempFrame),
    TempFrame = frame(Locals, FullOperandStack, Flags),
    FullOperandStack = \[UninitializedArg | OperandStack\],
    currentClassLoader(Environment, CurrentLoader),
    rewrittenUninitializedType(UninitializedArg, Environment,
                               class(MethodClassName, CurrentLoader), This), 
    rewrittenInitializationFlags(UninitializedArg, Flags, NextFlags), 
    substitute(UninitializedArg, This, OperandStack, NextOperandStack),
    substitute(UninitializedArg, This, Locals, NextLocals),
    NextStackFrame = frame(NextLocals, NextOperandStack, NextFlags),
    ExceptionStackFrame = frame(Locals, \[\], Flags),
    passesProtectedCheck(Environment, MethodClassName, '`<init>`',
                         Descriptor, NextStackFrame).

To compute what type the uninitialized argument's type needs to be rewritten to, there are two cases:

*   If we are initializing an object within its constructor, its type is initially `uninitializedThis`. This type will be rewritten to the type of the class of the `<init>` method.
    
*   The second case arises from initialization of an object created by _new_. The uninitialized arg type is rewritten to `MethodClass`, the type of the method holder of `<init>`. We check whether there really is a _new_ instruction at `Address`.
    

rewrittenUninitializedType(uninitializedThis, Environment,
                           MethodClass, MethodClass) :-
    MethodClass = class(MethodClassName, CurrentLoader),
    thisClass(Environment, MethodClass). 

rewrittenUninitializedType(uninitializedThis, Environment,
                           MethodClass, MethodClass) :-
    MethodClass = class(MethodClassName, CurrentLoader),
    thisClass(Environment, class(thisClassName, thisLoader)),
    superclassChain(thisClassName, thisLoader, \[MethodClass | Rest\]).

rewrittenUninitializedType(uninitialized(Address), Environment,
                           MethodClass, MethodClass) :-
    allInstructions(Environment, Instructions),
    member(instruction(Address, new(MethodClass)), Instructions).

rewrittenInitializationFlags(uninitializedThis, \_Flags, \[\]).
rewrittenInitializationFlags(uninitialized(\_), Flags, Flags).

substitute(\_Old, \_New, \[\], \[\]).
substitute(Old, New, \[Old | FromRest\], \[New | ToRest\]) :-
    substitute(Old, New, FromRest, ToRest).
substitute(Old, New, \[From1 | FromRest\], \[From1 | ToRest\]) :-
    From1 \\= Old,
    substitute(Old, New, FromRest, ToRest).

The rule for _invokespecial_ of an `<init>` method is the sole motivation for passing back a distinct exception stack frame. The concern is that when initializing an object within its constructor, _invokespecial_ can cause a superclass `<init>` method to be invoked, and that invocation could fail, leaving `this` uninitialized. This situation cannot be created using source code in the Java programming language, but can be created by programming in bytecode directly.

In this situation, the original frame holds an uninitialized object in local variable 0 and has flag `flagThisUninit`. Normal termination of _invokespecial_ initializes the uninitialized object and turns off the `flagThisUninit` flag. But if the invocation of an `<init>` method throws an exception, the uninitialized object might be left in a partially initialized state, and needs to be made permanently unusable. This is represented by an exception frame containing the broken object (the new value of the local) and the `flagThisUninit` flag (the old flag). There is no way to get from an apparently-initialized object bearing the `flagThisUninit` flag to a properly initialized object, so the object is permanently unusable.

If not for this situation, the flags of the exception stack frame would always be the same as the flags of the input stack frame.

##### `invokestatic`

An _invokestatic_ instruction is type safe iff all of the following are true:

*   Its first operand, `CP`, refers to a constant pool entry denoting a method named `MethodName` with descriptor `Descriptor`.
    
*   `MethodName` is not `<init>`.
    
*   `MethodName` is not `<clinit>`.
    
*   One can validly replace types matching the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`, yielding the outgoing type state.
    

instructionIsTypeSafe(invokestatic(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = method(\_MethodClassName, MethodName, Descriptor),
    MethodName \\= '`<init>`',
    MethodName \\= '`<clinit>`',
    parseMethodDescriptor(Descriptor, OperandArgList, ReturnType), 
    reverse(OperandArgList, StackArgList),
    validTypeTransition(Environment, StackArgList, ReturnType,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `invokevirtual`

An _invokevirtual_ instruction is type safe iff all of the following are true:

*   Its first operand, `CP`, refers to a constant pool entry denoting a method named `MethodName` with descriptor `Descriptor` that is a member of a class `MethodClassName`.
    
*   `MethodName` is not `<init>`.
    
*   `MethodName` is not `<clinit>`.
    
*   One can validly replace types matching the class `MethodClassName` and the argument types given in `Descriptor` on the incoming operand stack with the return type given in `Descriptor`, yielding the outgoing type state.
    
*   If the method is `protected`, the usage conforms to the special rules governing access to `protected` members ([§4.10.1.8](jvms-4.html#jvms-4.10.1.8 "4.10.1.8. Type Checking for protected Members")).
    

instructionIsTypeSafe(invokevirtual(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = method(MethodClassName, MethodName, Descriptor),
    MethodName \\= '`<init>`',
    MethodName \\= '`<clinit>`',
    parseMethodDescriptor(Descriptor, OperandArgList, ReturnType), 
    reverse(OperandArgList, ArgList),
    currentClassLoader(Environment, CurrentLoader),
    reverse(\[class(MethodClassName, CurrentLoader) | OperandArgList\],
            StackArgList),
    validTypeTransition(Environment, StackArgList, ReturnType,
                        StackFrame, NextStackFrame),
    canPop(StackFrame, ArgList, PoppedFrame),
    passesProtectedCheck(Environment, MethodClassName, MethodName,
                         Descriptor, PoppedFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `ior`

An _ior_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(ior, iadd).

##### `irem`

An _irem_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(irem, iadd).

##### `ireturn`

An _ireturn_ instruction is type safe if the enclosing method has a declared return type of `int`, and one can validly pop a type matching `int` off the incoming operand stack.

instructionIsTypeSafe(ireturn, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, int),
    canPop(StackFrame, \[int\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `ishl, ishr, iushr`

An _ishl_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(ishl, iadd).

An _ishr_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(ishr, iadd).

An _iushr_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(iushr, iadd).

##### `istore, istore_<n>`

An _istore_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a store instruction with operand `Index` and type `int` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(istore(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    storeIsTypeSafe(Environment, Index, int, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _istore\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _istore_ instruction is type safe.

instructionHasEquivalentTypeRule(istore\_0, istore(0)).
instructionHasEquivalentTypeRule(istore\_1, istore(1)).
instructionHasEquivalentTypeRule(istore\_2, istore(2)).
instructionHasEquivalentTypeRule(istore\_3, istore(3)).

##### `isub`

An _isub_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(isub, iadd).

##### `ixor`

An _ixor_ instruction is type safe iff the equivalent _iadd_ instruction is type safe.

instructionHasEquivalentTypeRule(ixor, iadd).

##### `l2d, l2f, l2i`

An _l2d_ instruction is type safe if one can validly pop `long` off the incoming operand stack and replace it with `double`, yielding the outgoing type state.

instructionIsTypeSafe(l2d, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long\], double,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _l2f_ instruction is type safe if one can validly pop `long` off the incoming operand stack and replace it with `float`, yielding the outgoing type state.

instructionIsTypeSafe(l2f, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long\], float,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _l2i_ instruction is type safe if one can validly pop `long` off the incoming operand stack and replace it with `int`, yielding the outgoing type state.

instructionIsTypeSafe(l2i, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `ladd`

An _ladd_ instruction is type safe iff one can validly replace types matching `long` and `long` on the incoming operand stack with `long` yielding the outgoing type state.

instructionIsTypeSafe(ladd, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long, long\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `laload`

An _laload_ instruction is type safe iff one can validly replace types matching `int` and array of `long` on the incoming operand stack with `long` yielding the outgoing type state.

instructionIsTypeSafe(laload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(long)\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `land`

An _land_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(land, ladd).

##### `lastore`

An _lastore_ instruction is type safe iff one can validly pop types matching `long`, `int` and array of `long` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(lastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[long, int, arrayOf(long)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `lcmp`

A _lcmp_ instruction is type safe iff one can validly replace types matching `long` and `long` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(lcmp, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long, long\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `lconst_<l>`

An _lconst\_0_ instruction is type safe if one can validly push the type `long` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(lconst\_0, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[\], long, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _lconst\_1_ instruction is type safe iff the equivalent _lconst\_0_ instruction is type safe.

instructionHasEquivalentTypeRule(lconst\_1, lconst\_0).

##### `ldc, ldc_w, ldc2_w`

An _ldc_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting an entity of type `Type`, where `Type` is either `int`, `float`, `String`, `Class`, `java.lang.invoke.MethodType`, or `java.lang.invoke.MethodHandle`, and one can validly push `Type` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(ldc(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    functor(CP, Tag, \_),
    isBootstrapLoader(BL),
    member(\[Tag, Type\], \[
        \[int, int\],
        \[float, float\],
        \[string, class('java/lang/String', BL)\],
        \[classConst, class('java/lang/Class', BL)\],
        \[methodTypeConst, class('java/lang/invoke/MethodType', BL)\],
        \[methodHandleConst, class('java/lang/invoke/MethodHandle', BL)\],
    \]),
    validTypeTransition(Environment, \[\], Type, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _ldc\_w_ instruction is type safe iff the equivalent _ldc_ instruction is type safe.

instructionHasEquivalentTypeRule(ldc\_w(CP), ldc(CP))

An _ldc2\_w_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting an entity of type `Tag`, where `Tag` is either `long` or `double`, and one can validly push `Tag` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(ldc2\_w(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    functor(CP, Tag, \_),
    member(Tag, \[long, double\]), 
    validTypeTransition(Environment, \[\], Tag, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `ldiv`

An _ldiv_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(ldiv, ladd).

##### `lload, lload_<n>`

An _lload_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a load instruction with operand `Index` and type `long` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(lload(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    loadIsTypeSafe(Environment, Index, long, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _lload\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _lload_ instruction is type safe.

instructionHasEquivalentTypeRule(lload\_0, lload(0)).
instructionHasEquivalentTypeRule(lload\_1, lload(1)).
instructionHasEquivalentTypeRule(lload\_2, lload(2)).
instructionHasEquivalentTypeRule(lload\_3, lload(3)).

##### `lmul`

An _lmul_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(lmul, ladd).

##### `lneg`

An _lneg_ instruction is type safe iff there is a type matching `long` on the incoming operand stack. The _lneg_ instruction does not alter the type state.

instructionIsTypeSafe(lneg, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[long\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `lookupswitch`

A _lookupswitch_ instruction is type safe if its keys are sorted, one can validly pop `int` off the incoming operand stack yielding a new type state `BranchStackFrame`, and all of the instruction's targets are valid branch targets assuming `BranchStackFrame` as their incoming type state.

instructionIsTypeSafe(lookupswitch(Targets, Keys), Environment, \_, StackFrame, 
                      afterGoto, ExceptionStackFrame) :-
    sort(Keys, Keys),
    canPop(StackFrame, \[int\], BranchStackFrame),
    checklist(targetIsTypeSafe(Environment, BranchStackFrame), Targets),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `lor`

A _lor_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(lor, ladd).

##### `lrem`

An _lrem_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(lrem, ladd).

##### `lreturn`

An _lreturn_ instruction is type safe if the enclosing method has a declared return type of `long`, and one can validly pop a type matching `long` off the incoming operand stack.

instructionIsTypeSafe(lreturn, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, long),
    canPop(StackFrame, \[long\], \_PoppedStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `lshl, lshr, lushr`

An _lshl_ instruction is type safe if one can validly replace the types `int` and `long` on the incoming operand stack with the type `long` yielding the outgoing type state.

instructionIsTypeSafe(lshl, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, long\], long,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

An _lshr_ instruction is type safe iff the equivalent _lshl_ instruction is type safe.

instructionHasEquivalentTypeRule(lshr, lshl).

An _lushr_ instruction is type safe iff the equivalent _lshl_ instruction is type safe.

instructionHasEquivalentTypeRule(lushr, lshl).

##### `lstore, lstore_<n>`

An _lstore_ instruction with operand `Index` is type safe and yields an outgoing type state `NextStackFrame`, if a store instruction with operand `Index` and type `long` is type safe and yields an outgoing type state `NextStackFrame`.

instructionIsTypeSafe(lstore(Index), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    storeIsTypeSafe(Environment, Index, long, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The instructions _lstore\_<n>_, for 0 ≤ _n_ ≤ 3, are type safe iff the equivalent _lstore_ instruction is type safe.

instructionHasEquivalentTypeRule(lstore\_0, lstore(0)).
instructionHasEquivalentTypeRule(lstore\_1, lstore(1)).
instructionHasEquivalentTypeRule(lstore\_2, lstore(2)).
instructionHasEquivalentTypeRule(lstore\_3, lstore(3)).

##### `lsub`

An _lsub_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(lsub, ladd).

##### `lxor`

An _lxor_ instruction is type safe iff the equivalent _ladd_ instruction is type safe.

instructionHasEquivalentTypeRule(lxor, ladd).

##### `monitorenter`

A _monitorenter_ instruction is type safe iff one can validly pop a type matching `reference` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(monitorenter, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :-
    canPop(StackFrame, \[reference\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `monitorexit`

A _monitorexit_ instruction is type safe iff the equivalent _monitorenter_ instruction is type safe.

instructionHasEquivalentTypeRule(monitorexit, monitorenter).

##### `multianewarray`

A _multianewarray_ instruction with operands `CP` and `Dim` is type safe iff `CP` refers to a constant pool entry denoting an array type whose dimension is greater or equal to `Dim`, `Dim` is strictly positive, and one can validly replace `Dim` `int` types on the incoming operand stack with the type denoted byliteral">CP yielding the outgoing type state.

instructionIsTypeSafe(multianewarray(CP, Dim), Environment, \_Offset,
                      StackFrame, NextStackFrame, ExceptionStackFrame) :- 
    CP = arrayOf(\_),
    classDimension(CP, Dimension),
    Dimension >= Dim,
    Dim > 0, 
    /\* Make a list of Dim ints \*/
    findall(int, between(1, Dim, \_), IntList),
    validTypeTransition(Environment, IntList, CP,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The dimension of an array type whose component type is also an array type is one more than the dimension of its component type.

classDimension(arrayOf(X), Dimension) :-
    classDimension(X, Dimension1), 
    Dimension is Dimension1 + 1.	

classDimension(\_, Dimension) :-
    Dimension = 0. 

##### `new`

A _new_ instruction with operand `CP` at offset `Offset` is type safe iff `CP` refers to a constant pool entry denoting a class type, the type `uninitialized(Offset)` does not appear in the incoming operand stack, and one can validly push `uninitialized(Offset)` onto the incoming operand stack and replace `uninitialized(Offset)` with `top` in the incoming local variables yielding the outgoing type state.

instructionIsTypeSafe(new(CP), Environment, Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, OperandStack, Flags), 
    CP = class(\_, \_), 
    NewItem = uninitialized(Offset),
    notMember(NewItem, OperandStack),
    substitute(NewItem, top, Locals, NewLocals),
    validTypeTransition(Environment, \[\], NewItem,
                        frame(NewLocals, OperandStack, Flags),
                        NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The `substitute` predicate is defined in the rule for _invokespecial_ ([§_invokespecial_](jvms-4.html#jvms-4.10.1.9.invokespecial "invokespecial")).

##### `newarray`

A _newarray_ instruction with operand `TypeCode` is type safe iff `TypeCode` corresponds to the primitive type `ElementType`, and one can validly replace the type `int` on the incoming operand stack with the type 'array of `ElementType`', yielding the outgoing type state.

instructionIsTypeSafe(newarray(TypeCode), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    primitiveArrayInfo(TypeCode, \_TypeChar, ElementType, \_VerifierType),
    validTypeTransition(Environment, \[int\], arrayOf(ElementType),
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

The correspondence between type codes and primitive types is specified by the following predicate:

primitiveArrayInfo(4,  0'Z, boolean, int).
primitiveArrayInfo(5,  0'C, char,    int).
primitiveArrayInfo(6,  0'F, float,   float).
primitiveArrayInfo(7,  0'D, double,  double).
primitiveArrayInfo(8,  0'B, byte,    int).
primitiveArrayInfo(9,  0'S, short,   int).
primitiveArrayInfo(10, 0'I, int,     int). 
primitiveArrayInfo(11, 0'J, long,    long).

##### `nop`

A _nop_ instruction is always type safe. The _nop_ instruction does not affect the type state.

instructionIsTypeSafe(nop, \_Environment, \_Offset, StackFrame,
                      StackFrame, ExceptionStackFrame) :-
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `pop, pop2`

A _pop_ instruction is type safe iff one can validly pop a category 1 type off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(pop, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, \[Type | Rest\], Flags),
    Type \\= top,
    sizeOf(Type, 1),
    NextStackFrame = frame(Locals, Rest, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _pop2_ instruction is type safe iff it is a _type safe form_ of the _pop2_ instruction.

instructionIsTypeSafe(pop2, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(Locals, InputOperandStack, Flags),
    pop2SomeFormIsTypeSafe(InputOperandStack, OutputOperandStack),
    NextStackFrame = frame(Locals, OutputOperandStack, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

A _pop2_ instruction is a _type safe form_ of the _pop2_ instruction iff it is a _type safe form 1_ _pop2_ instruction or a _type safe form 2_ _pop2_ instruction.

pop2SomeFormIsTypeSafe(InputOperandStack, OutputOperandStack) :-
    pop2Form1IsTypeSafe(InputOperandStack, OutputOperandStack).

pop2SomeFormIsTypeSafe(InputOperandStack, OutputOperandStack) :-
    pop2Form2IsTypeSafe(InputOperandStack, OutputOperandStack).

A _pop2_ instruction is a _type safe form 1_ _pop2_ instruction iff one can validly pop two types of size 1 off the incoming operand stack yielding the outgoing type state.

pop2Form1IsTypeSafe(\[Type1, Type2 | Rest\], Rest) :-
    sizeOf(Type1, 1),
    sizeOf(Type2, 1).

A _pop2_ instruction is a _type safe form 2_ _pop2_ instruction iff one can validly pop a type of size 2 off the incoming operand stack yielding the outgoing type state.

pop2Form2IsTypeSafe(\[top, Type | Rest\], Rest) :- sizeOf(Type, 2).

##### `putfield`

A _putfield_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting a field whose declared type is `FieldType`, declared in a class `FieldClass`, and one can validly pop types matching `FieldType` and `FieldClass` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(putfield(CP), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = field(FieldClass, FieldName, FieldDescriptor),
    parseFieldDescriptor(FieldDescriptor, FieldType),	
    canPop(StackFrame, \[FieldType\], PoppedFrame),
    passesProtectedCheck(Environment, FieldClass, FieldName,
                         FieldDescriptor, PoppedFrame),
    currentClassLoader(Environment, CurrentLoader),
    canPop(StackFrame, \[FieldType, class(FieldClass, CurrentLoader)\],
           NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `putstatic`

A _putstatic_ instruction with operand `CP` is type safe iff `CP` refers to a constant pool entry denoting a field whose declared type is `FieldType`, and one can validly pop a type matching `FieldType` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(putstatic(CP), \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    CP = field(\_FieldClass, \_FieldName, FieldDescriptor),
    parseFieldDescriptor(FieldDescriptor, FieldType),
    canPop(StackFrame, \[FieldType\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `return`

A _return_ instruction is type safe if the enclosing method declares a `void` return type, and either:

*   The enclosing method is not an `<init>` method, or
    
*   `this` has already been completely initialized at the point where the instruction occurs.
    

instructionIsTypeSafe(return, Environment, \_Offset, StackFrame,
                      afterGoto, ExceptionStackFrame) :- 
    thisMethodReturnType(Environment, void),
    StackFrame = frame(\_Locals, \_OperandStack, Flags),
    notMember(flagThisUninit, Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `saload`

An _saload_ instruction is type safe iff one can validly replace types matching `int` and array of `short` on the incoming operand stack with `int` yielding the outgoing type state.

instructionIsTypeSafe(saload, Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[int, arrayOf(short)\], int,
                        StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `sastore`

An _sastore_ instruction is type safe iff one can validly pop types matching `int`, `int`, and array of `short` off the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(sastore, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    canPop(StackFrame, \[int, int, arrayOf(short)\], NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `sipush`

An _sipush_ instruction is type safe iff one can validly push the type `int` onto the incoming operand stack yielding the outgoing type state.

instructionIsTypeSafe(sipush(\_Value), Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    validTypeTransition(Environment, \[\], int, StackFrame, NextStackFrame),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `swap`

A _swap_ instruction is type safe iff one can validly replace two category 1 types, `Type1` and `Type2`, on the incoming operand stack with the types `Type2` and `Type1` yielding the outgoing type state.

instructionIsTypeSafe(swap, \_Environment, \_Offset, StackFrame,
                      NextStackFrame, ExceptionStackFrame) :- 
    StackFrame = frame(\_Locals, \[Type1, Type2 | Rest\], \_Flags),
    sizeOf(Type1, 1),
    sizeOf(Type2, 1),
    NextStackFrame = frame(\_Locals, \[Type2, Type1 | Rest\], \_Flags),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `tableswitch`

A _tableswitch_ instruction is type safe if its keys are sorted, one can validly pop `int` off the incoming operand stack yielding a new type state `BranchStackFrame`, and all of the instruction's targets are valid branch targets assuming `BranchStackFrame` as their incoming type state.

instructionIsTypeSafe(tableswitch(Targets, Keys), Environment, \_Offset,
                      StackFrame, afterGoto, ExceptionStackFrame) :- 
    sort(Keys, Keys), 
    canPop(StackFrame, \[int\], BranchStackFrame),
    checklist(targetIsTypeSafe(Environment, BranchStackFrame), Targets),
    exceptionStackFrame(StackFrame, ExceptionStackFrame).

##### `wide`

The _wide_ instructions follow the same rules as the instructions they widen.

instructionHasEquivalentTypeRule(wide(WidenedInstruction),
                                 WidenedInstruction).

### 4.10.2. Verification by Type Inference

A `class` file that does not contain a `StackMapTable` attribute (which necessarily has a version number of 49.0 or below) must be verified using type inference.

#### 4.10.2.1. The Process of Verification by Type Inference

During linking, the verifier checks the `code` array of the `Code` attribute for each method of the `class` file by performing data-flow analysis on each method. The verifier ensures that at any given point in the program, no matter what code path is taken to reach that point, all of the following are true:

*   The operand stack is always the same size and contains the same types of values.
    
*   No local variable is accessed unless it is known to contain a value of an appropriate type.
    
*   Methods are invoked with the appropriate arguments.
    
*   Fields are assigned only using values of appropriate types.
    
*   All opcodes have appropriately typed arguments on the operand stack and in the local variable array.
    

For efficiency reasons, certain tests that could in principle be performed by the verifier are delayed until the first time the code for the method is actually invoked. In so doing, the verifier avoids loading `class` files unless it has to.

For example, if a method invokes another method that returns an instance of class A, and that instance is assigned only to a field of the same type, the verifier does not bother to check if the class A actually exists. However, if it is assigned to a field of the type B, the definitions of both A and B must be loaded in to ensure that A is a subclass of B.

#### 4.10.2.2. The Bytecode Verifier

The code for each method is verified independently. First, the bytes that make up the code are broken up into a sequence of instructions, and the index into the `code` array of the start of each instruction is placed in an array. The verifier then goes through the code a second time and parses the instructions. During this pass a data structure is built to hold information about each Java Virtual Machine instruction in the method. The operands, if any, of each instruction are checked to make sure they are valid. For instance:

*   Branches must be within the bounds of the `code` array for the method.
    
*   The targets of all control-flow instructions are each the start of an instruction. In the case of a _wide_ instruction, the _wide_ opcode is considered the start of the instruction, and the opcode giving the operation modified by that _wide_ instruction is not considered to start an instruction. Branches into the middle of an instruction are disallowed.
    
*   No instruction can access or modify a local variable at an index greater than or equal to the number of local variables that its method indicates it allocates.
    
*   All references to the constant pool must be to an entry of the appropriate type. (For example, the instruction _getfield_ must reference a field.)
    
*   The code does not end in the middle of an instruction.
    
*   Execution cannot fall off the end of the code.
    
*   For each exception handler, the starting and ending point of code protected by the handler must be at the beginning of an instruction or, in the case of the ending point, immediately past the end of the code. The starting point must be before the ending point. The exception handler code must start at a valid instruction, and it must not start at an opcode being modified by the _wide_ instruction.
    

For each instruction of the method, the verifier records the contents of the operand stack and the contents of the local variable array prior to the execution of that instruction. For the operand stack, it needs to know the stack height and the type of each value on it. For each local variable, it needs to know either the type of the contents of that local variable or that the local variable contains an unusable or unknown value (it might be uninitialized). The bytecode verifier does not need to distinguish between the integral types (e.g., `byte`, `short`, `char`) when determining the value types on the operand stack.

Next, a data-flow analyzer is initialized. For the first instruction of the method, the local variables that represent parameters initially contain values of the types indicated by the method's type descriptor; the operand stack is empty. All other local variables contain an illegal value. For the other instructions, which have not been examined yet, no information is available regarding the operand stack or local variables.

Finally, the data-flow analyzer is run. For each instruction, a "changed" bit indicates whether this instruction needs to be looked at. Initially, the "changed" bit is set only for the first instruction. The data-flow analyzer executes the following loop:

1.  Select a Java Virtual Machine instruction whose "changed" bit is set. If no instruction remains whose "changed" bit is set, the method has successfully been verified. Otherwise, turn off the "changed" bit of the selected instruction.
    
2.  Model the effect of the instruction on the operand stack and local variable array by doing the following:
    
    *   If the instruction uses values from the operand stack, ensure that there are a sufficient number of values on the stack and that the top values on the stack are of an appropriate type. Otherwise, verification fails.
        
    *   If the instruction uses a local variable, ensure that the specified local variable contains a value of the appropriate type. Otherwise, verification fails.
        
    *   If the instruction pushes values onto the operand stack, ensure that there is sufficient room on the operand stack for the new values. Add the indicated types to the top of the modeled operand stack.
        
    *   If the instruction modifies a local variable, record that the local variable now contains the new type.
        
    
3.  Determine the instructions that can follow the current instruction. Successor instructions can be one of the following:
    
    *   The next instruction, if the current instruction is not an unconditional control transfer instruction (for instance, _goto_, _return_, or _athrow_). Verification fails if it is possible to "fall off" the last instruction of the method.
        
    *   The target(s) of a conditional or unconditional branch or switch.
        
    *   Any exception handlers for this instruction.
        
    
4.  Merge the state of the operand stack and local variable array at the end of the execution of the current instruction into each of the successor instructions.
    
    In the special case of control transfer to an exception handler, the operand stack is set to contain a single object of the exception type indicated by the exception handler information. There must be sufficient room on the operand stack for this single value, as if an instruction had pushed it.
    
    *   If this is the first time the successor instruction has been visited, record that the operand stack and local variable values calculated in steps 2 and 3 are the state of the operand stack and local variable array prior to executing the successor instruction. Set the "changed" bit for the successor instruction.
        
    *   If the successor instruction has been seen before, merge the operand stack and local variable values calculated in steps 2 and 3 into the values already there. Set the "changed" bit if there is any modification to the values.
        
    
5.  Continue at step 1.
    

To merge two operand stacks, the number of values on each stack must be identical. Then, corresponding values on the two stacks are compared and the value on the merged stack is computed, as follows:

*   If one value is a primitive type, then the corresponding value must be the same primitive type. The merged value is the primitive type.
    
*   If one value is a non-array reference type, then the corresponding value must be a reference type (array or non-array). The merged value is a reference to an instance of the first common supertype of the two reference types. (Such a reference type always exists because the type `Object` is a supertype of all class, interface, and array types.)
    
    For example, `Object` and `String` can be merged; the result is `Object`. Similarly, `Object` and `String``[]` can be merged; the result is again `Object`. Even `Object` and `int``[]` can be merged, or `String` and `int``[]`; the result is `Object` for both.
    
*   If corresponding values are both array reference types, then their dimensions are examined. If the array types have the same dimensions, then the merged value is a `reference` to an instance of an array type which is first common supertype of both array types. (If either or both of the array types has a primitive element type, then `Object` is used as the element type instead.) If the array types have different dimensions, then the merged value is a `reference` to an instance of an array type whose dimension is the smaller of the two; the element type is `Cloneable` or `java.io.Serializable` if the smaller array type was `Cloneable` or `java.io.Serializable`, and `Object` otherwise.
    
    For example, `Object``[]` and `String``[]` can be merged; the result is `Object``[]`. `Cloneable``[]` and `String``[]` can be merged, or `java.io.Serializable``[]` and `String``[]`; the result is `Cloneable``[]` and `java.io.Serializable``[]` respectively. Even `int``[]` and `String``[]` can be merged; the result is `Object``[]`, because `Object` is used instead of `int` when computing the first common supertype.
    
    Since the array types can have different dimensions, `Object``[]` and `String``[]``[]` can be merged, or `Object``[]``[]` and `String``[]`; in both cases the result is `Object``[]`. `Cloneable``[]` and `String``[]``[]` can be merged; the result is `Cloneable``[]`. Finally, `Cloneable``[]``[]` and `String``[]` can be merged; the result is `Object``[]`.
    

If the operand stacks cannot be merged, verification of the method fails.

To merge two local variable array states, corresponding pairs of local variables are compared. The value of the merged local variable is computed using the rules above, except that the corresponding values are permitted to be different primitive types. In that case, the verifier records that the merged local variable contains an unusable value.

If the data-flow analyzer runs on a method without reporting a verification failure, then the method has been successfully verified by the `class` file verifier.

Certain instructions and data types complicate the data-flow analyzer. We now examine each of these in more detail.

#### 4.10.2.3. Values of Types `long` and `double`

Values of the `long` and `double` types are treated specially by the verification process.

Whenever a value of type `long` or `double` is moved into a local variable at index _n_, index _n_+1 is specially marked to indicate that it has been reserved by the value at index _n_ and must not be used as a local variable index. Any value previously at index _n_+1 becomes unusable.

Whenever a value is moved to a local variable at index _n_, the index _n_\-1 is examined to see if it is the index of a value of type `long` or `double`. If so, the local variable at index _n_\-1 is changed to indicate that it now contains an unusable value. Since the local variable at index _n_ has been overwritten, the local variable at index _n_\-1 cannot represent a value of type `long` or `double`.

Dealing with values of types `long` or `double` on the operand stack is simpler; the verifier treats them as single values on the stack. For example, the verification code for the _dadd_ opcode (add two `double` values) checks that the top two items on the stack are both of type `double`. When calculating operand stack length, values of type `long` and `double` have length two.

Untyped instructions that manipulate the operand stack must treat values of type `long` and `double` as atomic (indivisible). For example, the verifier reports a failure if the top value on the stack is a `double` and it encounters an instruction such as _pop_ or _dup_. The instructions _pop2_ or _dup2_ must be used instead.

#### 4.10.2.4. Instance Initialization Methods and Newly Created Objects

Creating a new class instance is a multistep process. The statement:

...
new myClass(i, j, k);
...

can be implemented by the following:

...
new #1            // Allocate uninitialized space for myClass
dup               // Duplicate object on the operand stack
iload\_1           // Push i
iload\_2           // Push j
iload\_3           // Push k
invokespecial #5  // Invoke myClass.`<init>`
...

This instruction sequence leaves the newly created and initialized object on top of the operand stack. (Additional examples of compilation to the instruction set of the Java Virtual Machine are given in [§3 (_Compiling for the Java Virtual Machine_)](jvms-3.html "Chapter 3. Compiling for the Java Virtual Machine").)

The instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) for class `myClass` sees the new uninitialized object as its `this` argument in local variable 0. Before that method invokes another instance initialization method of `myClass` or its direct superclass on `this`, the only operation the method can perform on `this` is assigning fields declared within `myClass`.

When doing dataflow analysis on instance methods, the verifier initializes local variable 0 to contain an object of the current class, or, for instance initialization methods, local variable 0 contains a special type indicating an uninitialized object. After an appropriate instance initialization method is invoked (from the current class or its direct superclass) on this object, all occurrences of this special type on the verifier's model of the operand stack and in the local variable array are replaced by the current class type. The verifier rejects code that uses the new object before it has been initialized or that initializes the object more than once. In addition, it ensures that every normal return of the method has invoked an instance initialization method either in the class of this method or in the direct superclass.

Similarly, a special type is created and pushed on the verifier's model of the operand stack as the result of the Java Virtual Machine instruction _new_. The special type indicates the instruction by which the class instance was created and the type of the uninitialized class instance created. When an instance initialization method declared in the class of the uninitialized class instance is invoked on that class instance, all occurrences of the special type are replaced by the intended type of the class instance. This change in type may propagate to subsequent instructions as the dataflow analysis proceeds.

The instruction number needs to be stored as part of the special type, as there may be multiple not-yet-initialized instances of a class in existence on the operand stack at one time. For example, the Java Virtual Machine instruction sequence that implements:

new InputStream(new Foo(), new InputStream("foo"))

may have two uninitialized instances of `InputStream` on the operand stack at once. When an instance initialization method is invoked on a class instance, only those occurrences of the special type on the operand stack or in the local variable array that are the same object as the class instance are replaced.

#### 4.10.2.5. Exceptions and `finally`

To implement the `try`\-`finally` construct, a compiler for the Java programming language that generates `class` files with version number 50.0 or below may use the exception-handling facilities together with two special instructions: _jsr_ ("jump to subroutine") and _ret_ ("return from subroutine"). The `finally` clause is compiled as a subroutine within the Java Virtual Machine code for its method, much like the code for an exception handler. When a _jsr_ instruction that invokes the subroutine is executed, it pushes its return address, the address of the instruction after the _jsr_ that is being executed, onto the operand stack as a value of type `returnAddress`. The code for the subroutine stores the return address in a local variable. At the end of the subroutine, a _ret_ instruction fetches the return address from the local variable and transfers control to the instruction at the return address.

Control can be transferred to the `finally` clause (the `finally` subroutine can be invoked) in several different ways. If the `try` clause completes normally, the `finally` subroutine is invoked via a _jsr_ instruction before evaluating the next expression. A `break` or `continue` inside the `try` clause that transfers control outside the `try` clause executes a _jsr_ to the code for the `finally` clause first. If the `try` clause executes a _return_, the compiled code does the following:

1.  Saves the return value (if any) in a local variable.
    
2.  Executes a _jsr_ to the code for the `finally` clause.
    
3.  Upon return from the `finally` clause, returns the value saved in the local variable.

The compiler sets up a special exception handler, which catches any exception thrown by the `try` clause. If an exception is thrown in the `try` clause, this exception handler does the following:

1.  Saves the exception in a local variable.
    
2.  Executes a _jsr_ to the `finally` clause.
    
3.  Upon return from the `finally` clause, rethrows the exception.
    

For more information about the implementation of the `try`\-`finally` construct, see [§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally").

The code for the `finally` clause presents a special problem to the verifier. Usually, if a particular instruction can be reached via multiple paths and a particular local variable contains incompatible values through those multiple paths, then the local variable becomes unusable. However, a `finally` clause might be called from several different places, yielding several different circumstances:

*   The invocation from the exception handler may have a certain local variable that contains an exception.
    
*   The invocation to implement _return_ may have some local variable that contains the return value.
    
*   The invocation from the bottom of the `try` clause may have an indeterminate value in that same local variable.
    

The code for the `finally` clause itself might pass verification, but after completing the updating all the successors of the _ret_ instruction, the verifier would note that the local variable that the exception handler expects to hold an exception, or that the return code expects to hold a return value, now contains an indeterminate value.

Verifying code that contains a `finally` clause is complicated. The basic idea is the following:

*   Each instruction keeps track of the list of _jsr_ targets needed to reach that instruction. For most code, this list is empty. For instructions inside code for the `finally` clause, it is of length one. For multiply nested `finally` code (extremely rare!), it may be longer than one.
    
*   For each instruction and each _jsr_ needed to reach that instruction, a bit vector is maintained of all local variables accessed or modified since the execution of the _jsr_ instruction.
    
*   When executing the _ret_ instruction, which implements a return from a subroutine, there must be only one possible subroutine from which the instruction can be returning. Two different subroutines cannot "merge" their execution to a single _ret_ instruction.
    
*   To perform the data-flow analysis on a _ret_ instruction, a special procedure is used. Since the verifier knows the subroutine from which the instruction must be returning, it can find all the _jsr_ instructions that call the subroutine and merge the state of the operand stack and local variable array at the time of the _ret_ instruction into the operand stack and local variable array of the instructions following the _jsr_. Merging uses a special set of values for local variables:
    
    *   For any local variable that the bit vector (constructed above) indicates has been accessed or modified by the subroutine, use the type of the local variable at the time of the _ret_.
        
    *   For other local variables, use the type of the local variable before the _jsr_ instruction.
        
    

4.11. Limitations of the Java Virtual Machine
---------------------------------------------

The following limitations of the Java Virtual Machine are implicit in the `class` file format:

*   The per-class or per-interface constant pool is limited to 65535 entries by the 16-bit `constant_pool_count` field of the `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")). This acts as an internal limit on the total complexity of a single class or interface.
    
*   The number of fields that may be declared by a class or interface is limited to 65535 by the size of the `fields_count` item of the `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).
    
    Note that the value of the `fields_count` item of the `ClassFile` structure does not include fields that are inherited from superclasses or superinterfaces.
    
*   The number of methods that may be declared by a class or interface is limited to 65535 by the size of the `methods_count` item of the `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).
    
    Note that the value of the `methods_count` item of the `ClassFile` structure does not include methods that are inherited from superclasses or superinterfaces.
    
*   The number of direct superinterfaces of a class or interface is limited to 65535 by the size of the `interfaces_count` item of the `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).
    
*   The greatest number of local variables in the local variables array of a frame created upon invocation of a method ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) is limited to 65535 by the size of the `max_locals` item of the `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")) giving the code of the method, and by the 16-bit local variable indexing of the Java Virtual Machine instruction set.
    
    Note that values of type `long` and `double` are each considered to reserve two local variables and contribute two units toward the `max_locals` value, so use of local variables of those types further reduces this limit.
    
*   The size of an operand stack in a frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) is limited to 65535 values by the `max_stack` field of the `Code` attribute ([§4.7.3](jvms-4.html#jvms-4.7.3 "4.7.3. The Code Attribute")).
    
    Note that values of type `long` and `double` are each considered to contribute two units toward the `max_stack` value, so use of values of these types on the operand stack further reduces this limit.
    
*   The number of method parameters is limited to 255 by the definition of a method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")), where the limit includes one unit for `this` in the case of instance or interface method invocations.
    
    Note that a method descriptor is defined in terms of a notion of method parameter length in which a parameter of type `long` or `double` contributes two units to the length, so parameters of these types further reduce the limit.
    
*   The length of field and method names, field and method descriptors, and other constant string values (including those referenced by `ConstantValue` ([§4.7.2](jvms-4.html#jvms-4.7.2 "4.7.2. The ConstantValue Attribute")) attributes) is limited to 65535 characters by the 16-bit unsigned `length` item of the `CONSTANT_Utf8_info` structure ([§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")).
    
    Note that the limit is on the number of bytes in the encoding and not on the number of encoded characters. UTF-8 encodes some characters using two or three bytes. Thus, strings incorporating multibyte characters are further constrained.
    
*   The number of dimensions in an array is limited to 255 by the size of the _dimensions_ opcode of the _multianewarray_ instruction and by the constraints imposed on the _multianewarray_, _anewarray_, and _newarray_ instructions ([§4.9.1](jvms-4.html#jvms-4.9.1 "4.9.1. Static Constraints"), [§4.9.2](jvms-4.html#jvms-4.9.2 "4.9.2. Structural Constraints")).
    


📜 Chapter 5. Loading, Linking, and Initializing
---------------------------------------------

**Table of Contents**
[5.1. The Run-Time Constant Pool](jvms-5.html#jvms-5.1)
[5.2. Java Virtual Machine Startup](jvms-5.html#jvms-5.2)
[5.3. Creation and Loading](jvms-5.html#jvms-5.3)
[5.3.1. Loading Using the Bootstrap Class Loader](jvms-5.html#jvms-5.3.1)
[5.3.2. Loading Using a User-defined Class Loader](jvms-5.html#jvms-5.3.2)
[5.3.3. Creating Array Classes](jvms-5.html#jvms-5.3.3)
[5.3.4. Loading Constraints](jvms-5.html#jvms-5.3.4)
[5.3.5. Deriving a Class from a `class` File Representation](jvms-5.html#jvms-5.3.5)
[5.4. Linking](jvms-5.html#jvms-5.4)
[5.4.1. Verification](jvms-5.html#jvms-5.4.1)
[5.4.2. Preparation](jvms-5.html#jvms-5.4.2)
[5.4.3. Resolution](jvms-5.html#jvms-5.4.3)
[5.4.3.1. Class and Interface Resolution](jvms-5.html#jvms-5.4.3.1)
[5.4.3.2. Field Resolution](jvms-5.html#jvms-5.4.3.2)
[5.4.3.3. Method Resolution](jvms-5.html#jvms-5.4.3.3)
[5.4.3.4. Interface Method Resolution](jvms-5.html#jvms-5.4.3.4)
[5.4.3.5. Method Type and Method Handle Resolution](jvms-5.html#jvms-5.4.3.5)
[5.4.3.6. Call Site Specifier Resolution](jvms-5.html#jvms-5.4.3.6)
[5.4.4. Access Control](jvms-5.html#jvms-5.4.4)
[5.4.5. Overriding](jvms-5.html#jvms-5.4.5)
[5.5. Initialization](jvms-5.html#jvms-5.5)
[5.6. Binding Native Method Implementations](jvms-5.html#jvms-5.6)
[5.7. Java Virtual Machine Exit](jvms-5.html#jvms-5.7)

The Java Virtual Machine dynamically loads, links and initializes classes and interfaces. Loading is the process of finding the binary representation of a class or interface type with a particular name and _creating_ a class or interface from that binary representation. Linking is the process of taking a class or interface and combining it into the run-time state of the Java Virtual Machine so that it can be executed. Initialization of a class or interface consists of executing the class or interface initialization method `<clinit>` ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

In this chapter, [§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool") describes how the Java Virtual Machine derives symbolic references from the binary representation of a class or interface. [§5.2](jvms-5.html#jvms-5.2 "5.2. Java Virtual Machine Startup") explains how the processes of loading, linking, and initialization are first initiated by the Java Virtual Machine. [§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading") specifies how binary representations of classes and interfaces are loaded by class loaders and how classes and interfaces are created. Linking is described in [§5.4](jvms-5.html#jvms-5.4 "5.4. Linking"). [§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization") details how classes and interfaces are initialized. [§5.6](jvms-5.html#jvms-5.6 "5.6. Binding Native Method Implementations") introduces the notion of binding native methods. Finally, [§5.7](jvms-5.html#jvms-5.7 "5.7. Java Virtual Machine Exit") describes when a Java Virtual Machine exits.

5.1. The Run-Time Constant Pool
-------------------------------

The Java Virtual Machine maintains a per-type constant pool ([§2.5.5](jvms-2.html#jvms-2.5.5 "2.5.5. Run-Time Constant Pool")), a run-time data structure that serves many of the purposes of the symbol table of a conventional programming language implementation.

The `constant_pool` table ([§4.4](jvms-4.html#jvms-4.4 "4.4. The Constant Pool")) in the binary representation of a class or interface is used to construct the run-time constant pool upon class or interface creation ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")). All references in the run-time constant pool are initially symbolic. The symbolic references in the run-time constant pool are derived from structures in the binary representation of the class or interface as follows:

*   A symbolic reference to a class or interface is derived from a `CONSTANT_Class_info` structure ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")) in the binary representation of a class or interface. Such a reference gives the name of the class or interface in the form returned by the `Class.getName` method, that is:
    
    *   For a nonarray class or an interface, the name is the binary name ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")) of the class or interface.
        
    *   For an array class of _n_ dimensions, the name begins with _n_ occurrences of the ASCII "\[" character followed by a representation of the element type:
        
        *   If the element type is a primitive type, it is represented by the corresponding field descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")).
            
        *   Otherwise, if the element type is a reference type, it is represented by the ASCII "L" character followed by the binary name ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")) of the element type followed by the ASCII ";" character.
            
        
    
    Whenever this chapter refers to the name of a class or interface, it should be understood to be in the form returned by the `Class.getName` method.
    
*   A symbolic reference to a field of a class or an interface is derived from a `CONSTANT_Fieldref_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) in the binary representation of a class or interface. Such a reference gives the name and descriptor of the field, as well as a symbolic reference to the class or interface in which the field is to be found.
    
*   A symbolic reference to a method of a class is derived from a `CONSTANT_Methodref_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) in the binary representation of a class or interface. Such a reference gives the name and descriptor of the method, as well as a symbolic reference to the class in which the method is to be found.
    
*   A symbolic reference to a method of an interface is derived from a `CONSTANT_InterfaceMethodref_info` structure ([§4.4.2](jvms-4.html#jvms-4.4.2 "4.4.2. The CONSTANT_Fieldref_info, CONSTANT_Methodref_info, and CONSTANT_InterfaceMethodref_info Structures")) in the binary representation of a class or interface. Such a reference gives the name and descriptor of the interface method, as well as a symbolic reference to the interface in which the method is to be found.
    
*   A symbolic reference to a method handle is derived from a `CONSTANT_MethodHandle_info` structure ([§4.4.8](jvms-4.html#jvms-4.4.8 "4.4.8. The CONSTANT_MethodHandle_info Structure")) in the binary representation of a class or interface. Such a reference gives a symbolic reference to a field of a class or interface, or a method of a class, or a method of an interface, depending on the kind of the method handle.
    
*   A symbolic reference to a method type is derived from a `CONSTANT_MethodType_info` structure ([§4.4.9](jvms-4.html#jvms-4.4.9 "4.4.9. The CONSTANT_MethodType_info Structure")) in the binary representation of a class or interface. Such a reference gives a method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).
    
*   A symbolic reference to a _call site specifier_ is derived from a `CONSTANT_InvokeDynamic_info` structure ([§4.4.10](jvms-4.html#jvms-4.4.10 "4.4.10. The CONSTANT_InvokeDynamic_info Structure")) in the binary representation of a class or interface. Such a reference gives:
    
    *   a symbolic reference to a method handle, which will serve as a bootstrap method for an _invokedynamic_ instruction ([§_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic "invokedynamic"));
        
    *   a sequence of symbolic references (to classes, method types, and method handles), string literals, and run-time constant values which will serve as _static arguments_ to a bootstrap method;
        
    *   a method name and method descriptor.
        
    

In addition, certain run-time values which are not symbolic references are derived from items found in the `constant_pool` table:

*   A string literal is a `reference` to an instance of class `String`, and is derived from a `CONSTANT_String_info` structure ([§4.4.3](jvms-4.html#jvms-4.4.3 "4.4.3. The CONSTANT_String_info Structure")) in the binary representation of a class or interface. The `CONSTANT_String_info` structure gives the sequence of Unicode code points constituting the string literal.
    
    The Java programming language requires that identical string literals (that is, literals that contain the same sequence of code points) must refer to the same instance of class `String` (JLS §3.10.5). In addition, if the method `String.intern` is called on any string, the result is a `reference` to the same class instance that would be returned if that string appeared as a literal. Thus, the following expression must have the value `true`:
    
    ("a" + "b" + "c").intern() == "abc"
        
    
    To derive a string literal, the Java Virtual Machine examines the sequence of code points given by the `CONSTANT_String_info` structure.
    
    *   If the method `String.intern` has previously been called on an instance of class `String` containing a sequence of Unicode code points identical to that given by the `CONSTANT_String_info` structure, then the result of string literal derivation is a `reference` to that same instance of class `String`.
        
    *   Otherwise, a new instance of class `String` is created containing the sequence of Unicode code points given by the `CONSTANT_String_info` structure; a `reference` to that class instance is the result of string literal derivation. Finally, the `intern` method of the new `String` instance is invoked.
        
    
*   Run-time constant values are derived from `CONSTANT_Integer_info`, `CONSTANT_Float_info`, `CONSTANT_Long_info`, or `CONSTANT_Double_info` structures ([§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures"), [§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures")) in the binary representation of a class or interface.
    
    Note that `CONSTANT_Float_info` structures represent values in IEEE 754 single format and `CONSTANT_Double_info` structures represent values in IEEE 754 double format ([§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures"), [§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures")). The run-time constant values derived from these structures must thus be values that can be represented using IEEE 754 single and double formats, respectively.
    

The remaining structures in the `constant_pool` table of the binary representation of a class or interface - the `CONSTANT_NameAndType_info` and `CONSTANT_Utf8_info` structures ([§4.4.6](jvms-4.html#jvms-4.4.6 "4.4.6. The CONSTANT_NameAndType_info Structure"), [§4.4.7](jvms-4.html#jvms-4.4.7 "4.4.7. The CONSTANT_Utf8_info Structure")) - are only used indirectly when deriving symbolic references to classes, interfaces, methods, fields, method types, and method handles, and when deriving string literals and call site specifiers.

5.2. Java Virtual Machine Startup
---------------------------------

The Java Virtual Machine starts up by creating an initial class, which is specified in an implementation-dependent manner, using the bootstrap class loader ([§5.3.1](jvms-5.html#jvms-5.3.1 "5.3.1. Loading Using the Bootstrap Class Loader")). The Java Virtual Machine then links the initial class, initializes it, and invokes the `public` class method `void main(String[])`. The invocation of this method drives all further execution. Execution of the Java Virtual Machine instructions constituting the `main` method may cause linking (and consequently creation) of additional classes and interfaces, as well as invocation of additional methods.

In an implementation of the Java Virtual Machine, the initial class could be provided as a command line argument. Alternatively, the implementation could provide an initial class that sets up a class loader which in turn loads an application. Other choices of the initial class are possible so long as they are consistent with the specification given in the previous paragraph.

5.3. Creation and Loading
-------------------------

Creation of a class or interface C denoted by the name `N` consists of the construction in the method area of the Java Virtual Machine ([§2.5.4](jvms-2.html#jvms-2.5.4 "2.5.4. Method Area")) of an implementation-specific internal representation of C. Class or interface creation is triggered by another class or interface D, which references C through its run-time constant pool. Class or interface creation may also be triggered by D invoking methods in certain Java SE platform class libraries ([§2.12](jvms-2.html#jvms-2.12 "2.12. Class Libraries")) such as reflection.

If C is not an array class, it is created by loading a binary representation of C ([§4 (_The `class` File Format_)](jvms-4.html "Chapter 4. The class File Format")) using a class loader. Array classes do not have an external binary representation; they are created by the Java Virtual Machine rather than by a class loader.

There are two kinds of class loaders: the bootstrap class loader supplied by the Java Virtual Machine, and user-defined class loaders. Every user-defined class loader is an instance of a subclass of the abstract class `ClassLoader`. Applications employ user-defined class loaders in order to extend the manner in which the Java Virtual Machine dynamically loads and thereby creates classes. User-defined class loaders can be used to create classes that originate from user-defined sources. For example, a class could be downloaded across a network, generated on the fly, or extracted from an encrypted file.

A class loader `L` may create C by defining it directly or by delegating to another class loader. If `L` creates C directly, we say that `L` _defines_ C or, equivalently, that `L` is the _defining loader_ of C.

When one class loader delegates to another class loader, the loader that initiates the loading is not necessarily the same loader that completes the loading and defines the class. If `L` creates C, either by defining it directly or by delegation, we say that `L` initiates loading of C or, equivalently, that `L` is an _initiating loader_ of C.

At run time, a class or interface is determined not by its name alone, but by a pair: its binary name ([§4.2.1](jvms-4.html#jvms-4.2.1 "4.2.1. Binary Class and Interface Names")) and its defining class loader. Each such class or interface belongs to a single _run-time package_. The run-time package of a class or interface is determined by the package name and defining class loader of the class or interface.

The Java Virtual Machine uses one of three procedures to create class or interface C denoted by `N`:

*   If `N` denotes a nonarray class or an interface, one of the two following methods is used to load and thereby create C:
    
    *   If D was defined by the bootstrap class loader, then the bootstrap class loader initiates loading of C ([§5.3.1](jvms-5.html#jvms-5.3.1 "5.3.1. Loading Using the Bootstrap Class Loader")).
        
    *   If D was defined by a user-defined class loader, then that same user-defined class loader initiates loading of C ([§5.3.2](jvms-5.html#jvms-5.3.2 "5.3.2. Loading Using a User-defined Class Loader")).
        
    
*   Otherwise `N` denotes an array class. An array class is created directly by the Java Virtual Machine ([§5.3.3](jvms-5.html#jvms-5.3.3 "5.3.3. Creating Array Classes")), not by a class loader. However, the defining class loader of D is used in the process of creating array class C.
    

If an error occurs during class loading, then an instance of a subclass of `LinkageError` must be thrown at a point in the program that (directly or indirectly) uses the class or interface being loaded.

If the Java Virtual Machine ever attempts to load a class C during verification ([§5.4.1](jvms-5.html#jvms-5.4.1 "5.4.1. Verification")) or resolution ([§5.4.3](jvms-5.html#jvms-5.4.3 "5.4.3. Resolution")) (but not initialization ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization"))), and the class loader that is used to initiate loading of C throws an instance of `ClassNotFoundException`, then the Java Virtual Machine must throw an instance of `NoClassDefFoundError` whose cause is the instance of `ClassNotFoundException`.

(A subtlety here is that recursive class loading to load superclasses is performed as part of resolution ([§5.3.5](jvms-5.html#jvms-5.3.5 "5.3.5. Deriving a Class from a class File Representation"), step 3). Therefore, a `ClassNotFoundException` that results from a class loader failing to load a superclass must be wrapped in a `NoClassDefFoundError`.)

A well-behaved class loader should maintain three properties:

*   Given the same name, a good class loader should always return the same `Class` object.
    
*   If a class loader `L1` delegates loading of a class C to another loader `L2`, then for any type T that occurs as the direct superclass or a direct superinterface of C, or as the type of a field in C, or as the type of a formal parameter of a method or constructor in C, or as a return type of a method in C, `L1` and `L2` should return the same `Class` object.
    
*   If a user-defined classloader prefetches binary representations of classes and interfaces, or loads a group of related classes together, then it must reflect loading errors only at points in the program where they could have arisen without prefetching or group loading.
    

We will sometimes represent a class or interface using the notation `<``N`, `Ld``>`, where `N` denotes the name of the class or interface and `Ld` denotes the defining loader of the class or interface.

We will also represent a class or interface using the notation `N``Li`, where `N` denotes the name of the class or interface and `Li` denotes an initiating loader of the class or interface.

### 5.3.1. Loading Using the Bootstrap Class Loader

The following steps are used to load and thereby create the nonarray class or interface C denoted by `N` using the bootstrap class loader.

First, the Java Virtual Machine determines whether the bootstrap class loader has already been recorded as an initiating loader of a class or interface denoted by `N`. If so, this class or interface is C, and no class creation is necessary.

Otherwise, the Java Virtual Machine passes the argument `N` to an invocation of a method on the bootstrap class loader to search for a purported representation of C in a platform-dependent manner. Typically, a class or interface will be represented using a file in a hierarchical file system, and the name of the class or interface will be encoded in the pathname of the file.

Note that there is no guarantee that a purported representation found is valid or is a representation of C. This phase of loading must detect the following error:

*   If no purported representation of C is found, loading throws an instance of `ClassNotFoundException`.
    

Then the Java Virtual Machine attempts to derive a class denoted by `N` using the bootstrap class loader from the purported representation using the algorithm found in [§5.3.5](jvms-5.html#jvms-5.3.5 "5.3.5. Deriving a Class from a class File Representation"). That class is C.

### 5.3.2. Loading Using a User-defined Class Loader

The following steps are used to load and thereby create the nonarray class or interface C denoted by `N` using a user-defined class loader `L`.

First, the Java Virtual Machine determines whether `L` has already been recorded as an initiating loader of a class or interface denoted by `N`. If so, this class or interface is C, and no class creation is necessary.

Otherwise, the Java Virtual Machine invokes ``loadClass(`N`)`` on `L`. The value returned by the invocation is the created class or interface C. The Java Virtual Machine then records that `L` is an initiating loader of C ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")). The remainder of this section describes this process in more detail.

When the `loadClass` method of the class loader `L` is invoked with the name `N` of a class or interface C to be loaded, `L` must perform one of the following two operations in order to load C:

1.  The class loader `L` can create an array of bytes representing C as the bytes of a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")); it then must invoke the method `defineClass` of class `ClassLoader`. Invoking `defineClass` causes the Java Virtual Machine to derive a class or interface denoted by `N` using `L` from the array of bytes using the algorithm found in [§5.3.5](jvms-5.html#jvms-5.3.5 "5.3.5. Deriving a Class from a class File Representation").
    
2.  The class loader `L` can delegate the loading of C to some other class loader `L`'. This is accomplished by passing the argument `N` directly or indirectly to an invocation of a method on `L`' (typically the `loadClass` method). The result of the invocation is C.
    

In either (1) or (2), if the class loader `L` is unable to load a class or interface denoted by `N` for any reason, it must throw an instance of `ClassNotFoundException`.

Since JDK release 1.1, Oracle’s Java Virtual Machine implementation has invoked the `loadClass` method of a class loader in order to cause it to load a class or interface. The argument to `loadClass` is the name of the class or interface to be loaded. There is also a two-argument version of the `loadClass` method, where the second argument is a `boolean` that indicates whether the class or interface is to be linked or not. Only the two-argument version was supplied in JDK release 1.0.2, and Oracle’s Java Virtual Machine implementation relied on it to link the loaded class or interface. From JDK release 1.1 onward, Oracle’s Java Virtual Machine implementation links the class or interface directly, without relying on the class loader.

### 5.3.3. Creating Array Classes

The following steps are used to create the array class C denoted by `N` using class loader `L`. Class loader `L` may be either the bootstrap class loader or a user-defined class loader.

If `L` has already been recorded as an initiating loader of an array class with the same component type as `N`, that class is C, and no array class creation is necessary.

Otherwise, the following steps are performed to create C:

1.  If the component type is a `reference` type, the algorithm of this section ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) is applied recursively using class loader `L` in order to load and thereby create the component type of C.
    
2.  The Java Virtual Machine creates a new array class with the indicated component type and number of dimensions.
    
    If the component type is a `reference` type, C is marked as having been defined by the defining class loader of the component type. Otherwise, C is marked as having been defined by the bootstrap class loader.
    
    In any case, the Java Virtual Machine then records that `L` is an initiating loader for C ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")).
    
    If the component type is a `reference` type, the accessibility of the array class is determined by the accessibility of its component type. Otherwise, the accessibility of the array class is `public`.
    

### 5.3.4. Loading Constraints

Ensuring type safe linkage in the presence of class loaders requires special care. It is possible that when two different class loaders initiate loading of a class or interface denoted by `N`, the name `N` may denote a different class or interface in each loader.

When a class or interface C = `<``N1`, `L1``>` makes a symbolic reference to a field or method of another class or interface D = `<``N2`, `L2``>`, the symbolic reference includes a descriptor specifying the type of the field, or the return and argument types of the method. It is essential that any type name `N` mentioned in the field or method descriptor denote the same class or interface when loaded by `L1` and when loaded by `L2`.

To ensure this, the Java Virtual Machine imposes _loading constraints_ of the form `N``L1` = `N``L2` during preparation ([§5.4.2](jvms-5.html#jvms-5.4.2 "5.4.2. Preparation")) and resolution ([§5.4.3](jvms-5.html#jvms-5.4.3 "5.4.3. Resolution")). To enforce these constraints, the Java Virtual Machine will, at certain prescribed times (see [§5.3.1](jvms-5.html#jvms-5.3.1 "5.3.1. Loading Using the Bootstrap Class Loader"), [§5.3.2](jvms-5.html#jvms-5.3.2 "5.3.2. Loading Using a User-defined Class Loader"), [§5.3.3](jvms-5.html#jvms-5.3.3 "5.3.3. Creating Array Classes"), and [§5.3.5](jvms-5.html#jvms-5.3.5 "5.3.5. Deriving a Class from a class File Representation")), record that a particular loader is an initiating loader of a particular class. After recording that a loader is an initiating loader of a class, the Java Virtual Machine must immediately check to see if any loading constraints are violated. If so, the record is retracted, the Java Virtual Machine throws a `LinkageError`, and the loading operation that caused the recording to take place fails.

Similarly, after imposing a loading constraint (see [§5.4.2](jvms-5.html#jvms-5.4.2 "5.4.2. Preparation"), [§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution"), [§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution"), and [§5.4.3.4](jvms-5.html#jvms-5.4.3.4 "5.4.3.4. Interface Method Resolution")), the Java Virtual Machine must immediately check to see if any loading constraints are violated. If so, the newly imposed loading constraint is retracted, the Java Virtual Machine throws a `LinkageError`, and the operation that caused the constraint to be imposed (either resolution or preparation, as the case may be) fails.

The situations described here are the only times at which the Java Virtual Machine checks whether any loading constraints have been violated. A loading constraint is violated if, and only if, all the following four conditions hold:

*   There exists a loader `L` such that `L` has been recorded by the Java Virtual Machine as an initiating loader of a class C named `N`.
    
*   There exists a loader `L`' such that `L`' has been recorded by the Java Virtual Machine as an initiating loader of a class C ' named `N`.
    
*   The equivalence relation defined by the (transitive closure of the) set of imposed constraints implies `N``L` = `N``L`'.
    
*   C ≠ C '.
    

A full discussion of class loaders and type safety is beyond the scope of this specification. For a more comprehensive discussion, readers are referred to _Dynamic Class Loading in the Java Virtual Machine_ by Sheng Liang and Gilad Bracha (_Proceedings of the 1998 ACM SIGPLAN Conference on Object-Oriented Programming Systems, Languages and Applications_).

### 5.3.5. Deriving a Class from a `class` File Representation

The following steps are used to derive a `Class` object for the nonarray class or interface C denoted by `N` using loader `L` from a purported representation in `class` file format.

1.  First, the Java Virtual Machine determines whether it has already recorded that `L` is an initiating loader of a class or interface denoted by `N`. If so, this creation attempt is invalid and loading throws a `LinkageError`.
    
2.  Otherwise, the Java Virtual Machine attempts to parse the purported representation. However, the purported representation may not in fact be a valid representation of C.
    
    This phase of loading must detect the following errors:
    
    *   If the purported representation is not a `ClassFile` structure ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure"), [§4.8](jvms-4.html#jvms-4.8 "4.8. Format Checking")), loading throws an instance of `ClassFormatError`.
        
    *   Otherwise, if the purported representation is not of a supported major or minor version ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")), loading throws an instance of `UnsupportedClassVersionError`.
        
        `UnsupportedClassVersionError`, a subclass of `ClassFormatError`, was introduced to enable easy identification of aal">ClassFormatError caused by an attempt to load a class whose representation uses an unsupported version of the `class` file format. In JDK release 1.1 and earlier, an instance of `NoClassDefFoundError` or `ClassFormatError` was thrown in case of an unsupported version, depending on whether the class was being loaded by the system class loader or a user-defined class loader.

*   Otherwise, if the purported representation does not actually represent a class named `N`, loading throws an instance of `NoClassDefFoundError` or an instance of one of its subclasses.
    
*   If C has a direct superclass, the symbolic reference from C to its direct superclass is resolved using the algorithm of [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution"). Note that if C is an interface it must have `Object` as its direct superclass, which must already have been loaded. Only `Object` has no direct superclass.
    
    Any exceptions that can be thrown due to class or interface resolution can be thrown as a result of this phase of loading. In addition, this phase of loading must detect the following errors:
    
    *   If the class or interface named as the direct superclass of C is in fact an interface, loading throws an `IncompatibleClassChangeError`.
        
    *   Otherwise, if any of the superclasses of C is C itself, loading throws a `ClassCircularityError`.
        
    
*   If C has any direct superinterfaces, the symbolic references from C to its direct superinterfaces are resolved using the algorithm of [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution").
    
    Any exceptions that can be thrown due to class or interface resolution can be thrown as a result of this phase of loading. In addition, this phase of loading must detect the following errors:
    
    *   If any of the classes or interfaces named as direct superinterfaces of C is not in fact an interface, loading throws an `IncompatibleClassChangeError`.
        
    *   Otherwise, if any of the superinterfaces of C is C itself, loading throws a `ClassCircularityError`.
        
    
*   The Java Virtual Machine marks C as having `L` as its defining class loader and records that `L` is an initiating loader of C ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")).
    

5.4. Linking
------------

Linking a class or interface involves verifying and preparing that class or interface, its direct superclass, its direct superinterfaces, and its element type (if it is an array type), if necessary. Resolution of symbolic references in the class or interface is an optional part of linking.

This specification allows an implementation flexibility as to when linking activities (and, because of recursion, loading) take place, provided that all of the following properties are maintained:

*   A class or interface is completely loaded before it is linked.
    
*   A class or interface is completely verified and prepared before it is initialized.
    
*   Errors detected during linkage are thrown at a point in the program where some action is taken by the program that might, directly or indirectly, require linkage to the class or interface involved in the error.
    

For example, a Java Virtual Machine implementation may choose to resolve each symbolic reference in a class or interface individually when it is used ("lazy" or "late" resolution), or to resolve them all at once when the class is being verified ("eager" or "static" resolution). This means that the resolution process may continue, in some implementations, after a class or interface has been initialized. Whichever strategy is followed, any error detected during resolution must be thrown at a point in the program that (directly or indirectly) uses a symbolic reference to the class or interface.

Because linking involves the allocation of new data structures, it may fail with an `OutOfMemoryError`.

### 5.4.1. Verification

_Verification_ ([§4.10](jvms-4.html#jvms-4.10 "4.10. Verification of class Files")) ensures that the binary representation of a class or interface is structurally correct ([§4.9](jvms-4.html#jvms-4.9 "4.9. Constraints on Java Virtual Machine Code")). Verification may cause additional classes and interfaces to be loaded ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) but need not cause them to be verified or prepared.

If the binary representation of a class or interface does not satisfy the static or structural constraints listed in [§4.9](jvms-4.html#jvms-4.9 "4.9. Constraints on Java Virtual Machine Code"), then a `VerifyError` must be thrown at the point in the program that caused the class or interface to be verified.

If an attempt by the Java Virtual Machine to verify a class or interface fails because an error is thrown that is an instance of `LinkageError` (or a subclass), then subsequent attempts to verify the class or interface always fail with the same error that was thrown as a result of the initial verification attempt.

### 5.4.2. Preparation

_Preparation_ involves creating the static fields for a class or interface and initializing such fields to their default values ([§2.3](jvms-2.html#jvms-2.3 "2.3. Primitive Types and Values"), [§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")). This does not require the execution of any Java Virtual Machine code; explicit initializers for static fields are executed as part of initialization ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")), not preparation.

During preparation of a class or interface C, the Java Virtual Machine also imposes loading constraints ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")). Let `L1` be the defining loader of C. For each method `m` declared in C that overrides ([§5.4.5](jvms-5.html#jvms-5.4.5 "5.4.5. Overriding")) a method declared in a superclass or superinterface `<`D, `L2``>`, the Java Virtual Machine imposes the following loading constraints:

Given that the return type of `m` is Tr, and that the formal parameter types of `m` are Tf1, ..., Tfn, then:

If Tr not an array type, let T0 be Tr; otherwise, let T0 be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tr.

For _i_ = 1 to _n_: If Tfi is not an array type, let Ti be Tfi; otherwise, let Ti be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tfi.

Then Ti`L1` = Ti`L2` for _i_ = 0 to _n_.

Furthermore, if C implements a method `m` declared in a superinterface `<`I, `L3``>` of C, but C does not itself declare the method `m`, then let `<`D, `L2``>` be the superclass of C that declares the implementation of method `m` inherited by C. The Java Virtual Machine imposes the following constraints:

Given that the return type of `m` is Tr, and that the formal parameter types of `m` are Tf1, ..., Tfn, then:

If Tr not an array type, let T0 be Tr; otherwise, let T0 be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tr.

For _i_ = 1 to _n_: If Tfi is not an array type, let Ti be Tfi; otherwise, let Ti be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tfi.

Then Ti`L2` = Ti`L3` for _i_ = 0 to _n_.

Preparation may occur at any time following creation but must be completed prior to initialization.

### 5.4.3. Resolution

The Java Virtual Machine instructions _anewarray_, _checkcast_, _getfield_, _getstatic_, _instanceof_, _invokedynamic_, _invokeinterface_, _invokespecial_, _invokestatic_, _invokevirtual_, _ldc_, _ldc\_w_, _multianewarray_, _new_, _putfield_, and _putstatic_ make symbolic references to the run-time constant pool. Execution of any of these instructions requires resolution of its symbolic reference.

_Resolution_ is the process of dynamically determining concrete values from symbolic references in the run-time constant pool.

Resolution of the symbolic reference of one occurrence of an _invokedynamic_ instruction _does not_ imply that the same symbolic reference is considered resolved for any other _invokedynamic_ instruction.

For all other instructions above, resolution of the symbolic reference of one occurrence of an instruction _does_ imply that the same symbolic reference is considered resolved for any other non-_invokedynamic_ instruction.

(The above text implies that the concrete value determined by resolution for a specific _invokedynamic_ instruction is a call site object bound to that specific _invokedynamic_ instruction.)

Resolution can be attempted on a symbolic reference that has already been resolved. An attempt to resolve a symbolic reference that has already successfully been resolved always succeeds trivially and always results in the same entity produced by the initial resolution of that reference.

If an error occurs during resolution of a symbolic reference, then an instance of `IncompatibleClassChangeError` (or a subclass) must be thrown at a point in the program that (directly or indirectly) uses the symbolic reference.

If an attempt by the Java Virtual Machine to resolve a symbolic reference fails because an error is thrown that is an instance of `LinkageError` (or a subclass), then subsequent attempts to resolve the reference always fail with the same error that was thrown as a result of the initial resolution attempt.

A symbolic reference to a call site specifier by a specific _invokedynamic_ instruction must not be resolved prior to execution of that instruction.

In the case of failed resolution of an _invokedynamic_ instruction, the bootstrap method is not re-executed on subsequent resolution attempts.

Certain of the instructions above require additional linking checks when resolving symbolic references. For instance, in order for a _getfield_ instruction to successfully resolve the symbolic reference to the field on which it operates, it must not only complete the field resolution steps given in [§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution") but also check that the field is not `static`. If it is a `static` field, a linking exception must be thrown.

Notably, in order for an _invokedynamic_ instruction to successfully resolve the symbolic reference to a call site specifier, the bootstrap method specified therein must complete normally and return a suitable call site object. If the bootstrap method completes abruptly or returns an unsuitable call site object, a linking exception must be thrown.

Linking exceptions generated by checks that are specific to the execution of a particular Java Virtual Machine instruction are given in the description of that instruction and are not covered in this general discussion of resolution. Note that such exceptions, although described as part of the execution of Java Virtual Machine instructions rather than resolution, are still properly considered failures of resolution.

The following sections describe the process of resolving a symbolic reference in the run-time constant pool ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")) of a class or interface D. Details of resolution differ with the kind of symbolic reference to be resolved.

#### 5.4.3.1. Class and Interface Resolution

To resolve an unresolved symbolic reference from D to a class or interface C denoted by `N`, the following steps are performed:

1.  The defining class loader of D is used to create a class or interface denoted by `N`. This class or interface is C. The details of the process are given in [§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading").
    
    Any exception that can be thrown as a result of failure of class or interface creation can thus be thrown as a result of failure of class and interface resolution.
    
2.  If C is an array class and its element type is a `reference` type, then a symbolic reference to the class or interface representing the element type is resolved by invoking the algorithm in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") recursively.
    
3.  Finally, access permissions to C are checked.
    
    *   If C is not accessible ([§5.4.4](jvms-5.html#jvms-5.4.4 "5.4.4. Access Control")) to D, class or interface resolution throws an `IllegalAccessError`.
        
        This condition can occur, for example, if C is a class that was originally declared to be `public` but was changed to be non-`public` after D was compiled.
        
    

If steps 1 and 2 succeed but step 3 fails, C is still valid and usable. Nevertheless, resolution fails, and D is prohibited from accessing C.

#### 5.4.3.2. Field Resolution

To resolve an unresolved symbolic reference from D to a field in a class or interface C, the symbolic reference to C given by the field reference must first be resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). Therefore, any exception that can be thrown as a result of failure of resolution of a class or interface reference can be thrown as a result of failure of field resolution. If the reference to C can be successfully resolved, an exception relating to the failure of resolution of the field reference itself can be thrown.

When resolving a field reference, field resolution first attempts to look up the referenced field in C and its superclasses:

1.  If C declares a field with the name and descriptor specified by the field reference, field lookup succeeds. The declared field is the result of the field lookup.
    
2.  Otherwise, field lookup is applied recursively to the direct superinterfaces of the specified class or interface C.
    
3.  Otherwise, if C has a superclass S, field lookup is applied recursively to S.
    
4.  Otherwise, field lookup fails.
    

Then:

*   If field lookup fails, field resolution throws a `NoSuchFieldError`.
    
*   Otherwise, if field lookup succeeds but the referenced field is not accessible ([§5.4.4](jvms-5.html#jvms-5.4.4 "5.4.4. Access Control")) to D, field resolution throws an `IllegalAccessError`.
    
*   Otherwise, let `<`E, `L1``>` be the class or interface in which the referenced field is actually declared and let `L2` be the defining loader of D.
    
    Given that the type of the referenced field is Tf, let T be Tf if Tf is not an array type, and let T be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tf otherwise.
    
    The Java Virtual Machine must impose the loading constraint that T`L1` = T`L2` ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")).
    

#### 5.4.3.3. Method Resolution

To resolve an unresolved symbolic reference from D to a method in a class C, the symbolic reference to C given by the method reference is first resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). Therefore, any exception that can be thrown as a result of failure of resolution of a class reference can be thrown as a result of failure of method resolution. If the reference to C can be successfully resolved, exceptions relating to the resolution of the method reference itself can be thrown.

When resolving a method reference:

1.  If C is an interface, method resolution throws an `IncompatibleClassChangeError`.
    
2.  Otherwise, method resolution attempts to locate the referenced method in C and its superclasses:
    
    *   If C declares exactly one method with the name specified by the method reference, and the declaration is a signature polymorphic method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), then method lookup succeeds. All the class names mentioned in the descriptor are resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")).
        
        _The resolved method is the signature polymorphic method declaration._ It is not necessary for C to declare a method with the descriptor specified by the method reference.
        
    *   Otherwise, if C declares a method with the name and descriptor specified by the method reference, method lookup succeeds.
        
    *   Otherwise, if C has a superclass, step 2 of method resolution is recursively invoked on the direct superclass of C.
        
    
3.  Otherwise, method resolution attempts to locate the referenced method in the superinterfaces of the specified class C:
    
    *   If the _maximally-specific superinterface methods_ of C for the name and descriptor specified by the method reference include exactly one method that does not have its `ACC_ABSTRACT` flag set, then this method is chosen and method lookup succeeds.
        
    *   Otherwise, if any superinterface of C declares a method with the name and descriptor specified by the method reference that has neither its `ACC_PRIVATE` flag nor its `ACC_STATIC` flag set, one of these is arbitrarily chosen and method lookup succeeds.
        
    *   Otherwise, method lookup fails.
        
    

A _maximally-specific superinterface method_ of a class or interface C for a particular method name and descriptor is any method for which all of the following are true:

*   The method is declared in a superinterface (direct or indirect) of C.
    
*   The method is declared with the specified name and descriptor.
    
*   The method has neither its `ACC_PRIVATE` flag nor its `ACC_STATIC` flag set.
    
*   Where the method is declared in interface I, there exists no other maximally-specific superinterface method of C with the specified name and descriptor that is declared in a subinterface of I.
    

The result of method resolution is determined by whether method lookup succeeds or fails:

*   If method lookup fails, method resolution throws a `NoSuchMethodError`.
    
*   Otherwise, if method lookup succeeds and the referenced method is not accessible ([§5.4.4](jvms-5.html#jvms-5.4.4 "5.4.4. Access Control")) to D, method resolution throws an `IllegalAccessError`.
    
*   Otherwise, let `<`E, `L1``>` be the class or interface in which the referenced method `m` is actually declared, and let `L2` be the defining loader of D.
    
    Given that the return type of `m` is Tr, and that the formal parameter types of `m` are Tf1, ..., Tfn, then:
    
    If Tr is not an array type, let T0 be Tr; otherwise, let T0 be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tr.
    
    For _i_ = 1 to _n_: If Tfi is not an array type, let Ti be Tfi; otherwise, let Ti be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tfi.
    
    The Java Virtual Machine must impose the loading constraints Ti`L1` = Ti`L2` for _i_ = 0 to _n_ ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")).
    

When resolution searches for a method in the class's superinterfaces, the best outcome is to identify a maximally-specific non-`abstract` method. It is possible that this method will be chosen by method selection, so it is desirable to add class loader constraints for it.

Otherwise, the result is nondeterministic. This is not new: _The Java® Virtual Machine Specification_ has never identified exactly which method is chosen, and how "ties" should be broken. Prior to Java SE 8, this was mostly an unobservable distinction. However, beginning with Java SE 8, the set of interface methods is more heterogenous, so care must be taken to avoid problems with nondeterministic behavior. Thus:

*   Superinterface methods that are `private` and `static` are ignored by resolution. This is consistent with the Java programming language, where such interface methods are not inherited.
    
*   Any behavior controlled by the resolved method should not depend on whether the method is `abstract` or not.
    

Note that if the result of resolution is an `abstract` method, the referenced class C may be non-`abstract`. Requiring C to be `abstract` would conflict with the nondeterministic choice of superinterface methods. Instead, resolution assumes that the run time class of the invoked object has a concrete implementation of the method.

#### 5.4.3.4. Interface Method Resolution

To resolve an unresolved symbolic reference from D to an interface method in an interface C, the symbolic reference to C given by the interface method reference is first resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). Therefore, any exception that can be thrown as a result of failure of resolution of an interface reference can be thrown as a result of failure of interface method resolution. If the reference to C can be successfully resolved, exceptions relating to the resolution of the interface method reference itself can be thrown.

When resolving an interface method reference:

1.  If C is not an interface, interface method resolution throws an `IncompatibleClassChangeError`.
    
2.  Otherwise, if C declares a method with the name and descriptor specified by the interface method reference, method lookup succeeds.
    
3.  Otherwise, if the class `Object` declares a method with the name and descriptor specified by the interface method reference, which has its `ACC_PUBLIC` flag set and does not have its `ACC_STATIC` flag set, method lookup succeeds.
    
4.  Otherwise, if the maximally-specific superinterface methods ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) of C for the name and descriptor specified by the method reference include exactly one method that does not have its `ACC_ABSTRACT` flag set, then this method is chosen and method lookup succeeds.
    
5.  Otherwise, if any superinterface of C declares a method with the name and descriptor specified by the method reference that has neither its `ACC_PRIVATE` flag nor its `ACC_STATIC` flag set, one of these is arbitrarily chosen and method lookup succeeds.
    
6.  Otherwise, method lookup fails.
    

The result of interface method resolution is determined by whether method lookup succeeds or fails:

*   If method lookup fails, interface method resolution throws a `NoSuchMethodError`.
    
*   If method lookup succeeds and the referenced method is not accessible ([§5.4.4](jvms-5.html#jvms-5.4.4 "5.4.4. Access Control")) to D, interface method resolution throws an `IllegalAccessError`.
    
*   Otherwise, let `<`E, `L1``>` be the class or interface in which the referenced interface method `m` is actually declared, and let `L2` be the defining loader of D.
    
    Given that the return type of `m` is Tr, and that the formal parameter types of `m` are Tf1, ..., Tfn, then:
    
    If Tr is not an array type, let T0 be Tr; otherwise, let T0 be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tr.
    
    For _i_ = 1 to _n_: If Tfi is not an array type, let Ti be Tfi; otherwise, let Ti be the element type ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) of Tfi.
    
    The Java Virtual Machine must impose the loading constraints Ti`L1` = Ti`L2` for _i_ = 0 to _n_ ([§5.3.4](jvms-5.html#jvms-5.3.4 "5.3.4. Loading Constraints")).
    

The clause about accessibility is necessary because interface method resolution may pick a `private` method of interface C. (Prior to Java SE 8, the result of interface method resolution could be a non-`public` method of class `Object` or a `static` method of class `Object`; such results were not consistent with the inheritance model of the Java programming language, and are disallowed in Java SE 8 and above.)

#### 5.4.3.5. Method Type and Method Handle Resolution

To resolve an unresolved symbolic reference to a method type, it is as if resolution occurs of unresolved symbolic references to classes and interfaces ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) whose names correspond to the types given in the method descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")).Any exception that can be thrown as a result of failure of resolution of a class reference can thus be thrown as a result of failure of method type resolution.

The result of successful method type resolution is a `reference` to an instance of `java.lang.invoke.MethodType` which represents the method descriptor.

Method type resolution occurs regardless of whether the run time constant pool actually contains symbolic references to classes and interfaces indicated in the method descriptor. Also, the resolution is deemed to occur on _unresolved_ symbolic references, so a failure to resolve one method type will not necessarily lead to a later failure to resolve another method type with the same textual method descriptor, if suitable classes and interfaces can be loaded by the later time.

Resolution of an unresolved symbolic reference to a method handle is more complicated. Each method handle resolved by the Java Virtual Machine has an equivalent instruction sequence called its _bytecode behavior_, indicated by the method handle's _kind_. The integer values and descriptions of the nine kinds of method handle are given in [Table 5.4.3.5-A](jvms-5.html#jvms-5.4.3.5-220 "Table 5.4.3.5-A. Bytecode Behaviors for Method Handles").

Symbolic references by an instruction sequence to fields or methods are indicated by `C.x:T`, where `x` and `T` are the name and descriptor ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors"), [§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the field or method, and `C` is the class or interface in which the field or method is to be found.

**Table 5.4.3.5-A. Bytecode Behaviors for Method Handles**

  

Kind

Description

Interpretation

1

`REF_getField`

`getfield C.f:T`

2

`REF_getStatic`

`getstatic C.f:T`

3

`REF_putField`

`putfield C.f:T`

4

`REF_putStatic`

`putstatic C.f:T`

5

`REF_invokeVirtual`

`invokevirtual C.m:(A*)T`

6

`REF_invokeStatic`

`invokestatic C.m:(A*)T`

7

`REF_invokeSpecial`

`invokespecial C.m:(A*)T`

8

`REF_newInvokeSpecial`

``new C; dup; invokespecial C.`<init>`:(A*)V``

9

`REF_invokeInterface`

`invokeinterface C.m:(A*)T`

  

Let `MH` be the symbolic reference to a method handle ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")) being resolved. Then:

*   Let R be the symbolic reference to the field or method contained within `MH`.
    
    (R is derived from the `CONSTANT_Fieldref`, `CONSTANT_Methodref`, or `CONSTANT_InterfaceMethodref` structure referred to by the `reference_index` item of the `CONSTANT_MethodHandle` from which `MH` is derived.)
    
*   Let T be the type of the field referenced by R, or the return type of the method referenced by R. Let A\* be the sequence (perhaps empty) of parameter types of the method referenced by R.
    
    (T and A\* are derived from the `CONSTANT_NameAndType` structure referred to by the `name_and_type_index` item in the `CONSTANT_Fieldref`, `CONSTANT_Methodref`, or `CONSTANT_InterfaceMethodref` structure from which R is derived.)
    

To resolve `MH`, all symbolic references to classes, interfaces, fields, and methods in `MH`'s bytecode behavior are resolved, using the following three steps:

*   First, R is resolved.
    
*   Second, resolution occurs as if of unresolved symbolic references to classes and interfaces whose names correspond to each type in A\*, and to the type T, in that order.
    
*   Third, a reference to an instance of `java.lang.invoke.MethodType` is obtained as if by resolution of an unresolved symbolic reference to a method type that contains the method descriptor specified in [Table 5.4.3.5-B](jvms-5.html#jvms-5.4.3.5-260 "Table 5.4.3.5-B. Method Descriptors for Method Handles") for the kind of `MH`.
    
    It is as if the symbolic reference to a method handle contains a symbolic reference to the method type that the resolved method handle will eventually have. The detailed structure of the method type is obtained by inspecting [Table 5.4.3.5-B](jvms-5.html#jvms-5.4.3.5-260 "Table 5.4.3.5-B. Method Descriptors for Method Handles").
    

In each step, any exception that can be thrown as a result of failure of resolution of a class or interface or field or method reference can be thrown as a result of failure of method handle resolution.

The intent is that resolving a method handle can be done in exactly the same circumstances that the Java Virtual Machine would successfully resolve the symbolic references in the bytecode behavior. In particular, method handles to `private` and `protected` members can be created in exactly those classes for which the corresponding normal accesses are legal.

**Table 5.4.3.5-B. Method Descriptors for Method Handles**

  

Kind

Description

Method descriptor

1

`REF_getField`

`(C)T`

2

`REF_getStatic`

`()T`

3

`REF_putField`

`(C,T)V`

4

`REF_putStatic`

`(T)V`

5

`REF_invokeVirtual`

`(C,A*)T`

6

`REF_invokeStatic`

`(A*)T`

7

`REF_invokeSpecial`

`(C,A*)T`

8

`REF_newInvokeSpecial`

`(A*)C`

9

`REF_invokeInterface`

`(C,A*)T`

  

The result of successful method handle resolution is a `reference` to an instance of `java.lang.invoke.MethodHandle` which represents the method handle `MH`.

The type descriptor of this `java.lang.invoke.MethodHandle` instance is the `java.lang.invoke.MethodType` instance produced in the third step of method handle resolution above.

The type descriptor of a method handle is such that a valid call to `invokeExact` in `java.lang.invoke.MethodHandle` on the method handle has exactly the same stack effects as the bytecode behavior. Calling this method handle on a valid set of arguments has exactly the same effect and returns the same result (if any) as the corresponding bytecode behavior.

If the method referenced by R has the `ACC_VARARGS` flag set ([§4.6](jvms-4.html#jvms-4.6 "4.6. Methods")), then the `java.lang.invoke.MethodHandle` instance is a variable arity method handle; otherwise, it is a fixed arity method handle.

A variable arity method handle performs argument list boxing (JLS §15.12.4.2) when invoked via `invoke`, while its behavior with respect to `invokeExact` is as if the `ACC_VARARGS` flag were not set.

Method handle resolution throws an `IncompatibleClassChangeError` if the method referenced by R has the `ACC_VARARGS` flag set and either A\* is an empty sequence or the last parameter type in A\* is not an array type. That is, creation of a variable arity method handle fails.

An implementation of the Java Virtual Machine is not required to intern method types or method handles. That is, two distinct symbolic references to method types or method handles which are structurally identical might not resolve to the same instance of `java.lang.invoke.MethodType` or `java.lang.invoke.MethodHandle` respectively.

The `java.lang.invoke.MethodHandles` class in the Java SE platform API allows creation of method handles with no bytecode behavior. Their behavior is defined by the method of `java.lang.invoke.MethodHandles` that creates them. For example, a method handle may, when invoked, first apply transformations to its argument values, then supply the transformed values to the invocation of another method handle, then apply a transformation to the value returned from that invocation, then return the transformed value as its own result.

#### 5.4.3.6. Call Site Specifier Resolution

To resolve an unresolved symbolic reference to a call site specifier involves three steps:

*   A call site specifier gives a symbolic reference to a method handle which is to serve as the _bootstrap method_ for a dynamic call site ([§4.7.23](jvms-4.html#jvms-4.7.23 "4.7.23. The BootstrapMethods Attribute")). The method handle is resolved to obtain a `reference` to an instance of `java.lang.invoke.MethodHandle` ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")).
    
*   A call site specifier gives a method descriptor, _TD_. A `reference` to an instance of `java.lang.invoke.MethodType` is obtained as if by resolution of a symbolic reference to a method type with the same parameter and return types as _TD_ ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")).
    
*   A call site specifier gives zero or more _static arguments_, which communicate application-specific metadata to the bootstrap method. Any static arguments which are symbolic references to classes, method handles, or method types are resolved, as if by invocation of the _ldc_ instruction ([§_ldc_](jvms-6.html#jvms-6.5.ldc "ldc")), to obtain `reference`s to `Class` objects, `java.lang.invoke.MethodHandle` objects, and `java.lang.invoke.MethodType` objects respectively. Any static arguments that are string literals are used to obtain `reference`s to `String` objects.
    

The result of call site specifier resolution is a tuple consisting of:

*   the `reference` to an instance of `java.lang.invoke.MethodHandle`,
    
*   the `reference` to an instance of `java.lang.invoke.MethodType`,
    
*   the `reference`s to instances of `Class`, `java.lang.invoke.MethodHandle`, `java.lang.invoke.MethodType`, and `String`.
    

During resolution of the symbolic reference to the method handle in the call site specifier, or resolution of the symbolic reference to the method type for the method descriptor in the call site specifier, or resolution of a symbolic reference to any static argument, any of the exceptions pertaining to method type or method handle resolution may be thrown ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")).

### 5.4.4. Access Control

A class or interface C is _accessible_ to a class or interface D if and only if either of the following is true:

*   C is `public`.
    
*   C and D are members of the same run-time package ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")).
    

A field or method R is accessible to a class or interface D if and only if any of the following is true:

*   R is `public`.
    
*   R is `protected` and is declared in a class C, and D is either a subclass of C or C itself. Furthermore, if R is not `static`, then the symbolic reference to R must contain a symbolic reference to a class T, such that T is either a subclass of D, a superclass of D, or D itself.
    
*   R is either `protected` or has default access (that is, neither `public` nor `protected` nor `private`), and is declared by a class in the same run-time package as D.
    
*   R is `private` and is declared in D.
    

This discussion of access control omits a related restriction on the target of a `protected` field access or method invocation (the target must be of class D or a subtype of D). That requirement is checked as part of the verification process ([§4.10.1.8](jvms-4.html#jvms-4.10.1.8 "4.10.1.8. Type Checking for protected Members")); it is not part of link-time access control.

### 5.4.5. Overriding

An instance method `mC` declared in class C overrides another instance method `mA` declared in class A iff either `mC` is the same as `mA`, or all of the following are true:

*   C is a subclass of A.
    
*   `mC` has the same name and descriptor as `mA`.
    
*   `mC` is not marked `ACC_PRIVATE`.
    
*   One of the following is true:
    
    *   `mA` is marked `ACC_PUBLIC`; or is marked `ACC_PROTECTED`; or is marked neither `ACC_PUBLIC` nor `ACC_PROTECTED` nor `ACC_PRIVATE` and A belongs to the same run-time package as C.
        
    *   `mC` overrides a method `m'` (`m'` distinct from `mC` and `mA`) such that `m'` overrides `mA`.
        
    

5.5. Initialization
-------------------

_Initialization_ of a class or interface consists of executing its class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

A class or interface C may be initialized only as a result of:

*   The execution of any one of the Java Virtual Machine instructions _new_, _getstatic_, _putstatic_, or _invokestatic_ that references C ([§_new_](jvms-6.html#jvms-6.5.new "new"), [§_getstatic_](jvms-6.html#jvms-6.5.getstatic "getstatic"), [§_putstatic_](jvms-6.html#jvms-6.5.putstatic "putstatic"), [§_invokestatic_](jvms-6.html#jvms-6.5.invokestatic "invokestatic")). These instructions reference a class or interface directly or indirectly through either a field reference or a method reference.
    
    Upon execution of a _new_ instruction, the referenced class is initialized if it has not been initialized already.
    
    Upon execution of a _getstatic_, _putstatic_, or _invokestatic_ instruction, the class or interface that declared the resolved field or method is initialized if it has not been initialized already.
    
*   The first invocation of a `java.lang.invoke.MethodHandle` instance which was the result of method handle resolution ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) for a method handle of kind 2 (`REF_getStatic`), 4 (`REF_putStatic`), 6 (`REF_invokeStatic`), or 8 (`REF_newInvokeSpecial`).
    
    This implies that the class of a bootstrap method is initialized when the bootstrap method is invoked for an _invokedynamic_ instruction ([§_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic "invokedynamic")), as part of the continuing resolution of the call site specifier.
    
*   Invocation of certain reflective methods in the class library ([§2.12](jvms-2.html#jvms-2.12 "2.12. Class Libraries")), for example, in class `Class` or in package `java.lang.reflect`.
    
*   If C is a class, the initialization of one of its subclasses.
    
*   If C is an interface that declares a non-`abstract`, non-`static` method, the initialization of a class that implements C directly or indirectly.
    
*   If C is a class, its designation as the initial class at Java Virtual Machine startup ([§5.2](jvms-5.html#jvms-5.2 "5.2. Java Virtual Machine Startup")).
    

Prior to initialization, a class or interface must be linked, that is, verified, prepared, and optionally resolved.

Because the Java Virtual Machine is multithreaded, initialization of a class or interface requires careful synchronization, since some other thread may be trying to initialize the same class or interface at the same time. There is also the possibility that initialization of a class or interface may be requested recursively as part of the initialization of that class or interface. The implementation of the Java Virtual Machine is responsible for taking care of synchronization and recursive initialization by using the following procedure. It assumes that the `Class` object has already been verified and prepared, and that the `Class` object contains state that indicates one of four situations:

*   This `Class` object is verified and prepared but not initialized.
    
*   This `Class` object is being initialized by some particular thread.
    
*   This `Class` object is fully initialized and ready for use.
    
*   This `Class` object is in an erroneous state, perhaps because initialization was attempted and failed.
    

For each class or interface C, there is a unique initialization lock `LC`. The mapping from C to `LC` is left to the discretion of the Java Virtual Machine implementation. For example, `LC` could be the `Class` object for C, or the monitor associated with that `Class` object. The procedure for initializing C is then as follows:

1.  Synchronize on the initialization lock, `LC`, for C. This involves waiting until the current thread can acquire `LC`.
    
2.  If the `Class` object for C indicates that initialization is in progress for C by some other thread, then release `LC` and block the current thread until informed that the in-progress initialization has completed, at which time repeat this procedure.
    
    Thread interrupt status is unaffected by execution of the initialization procedure.
    
3.  If the `Class` object for C indicates that initialization is in progress for C by the current thread, then this must be a recursive request for initialization. Release `LC` and complete normally.
    
4.  If the `Class` object for C indicates that C has already been initialized, then no further action is required. Release `LC` and complete normally.
    
5.  If the `Class` object for C is in an erroneous state, then initialization is not possible. Release `LC` and throw a `NoClassDefFoundError`.
    
6.  Otherwise, record the fact that initialization of the `Class` object for C is in progress by the current thread, and release `LC`.
    
    Then, initialize each `final` `static` field of C with the constant value in its `ConstantValue` attribute ([§4.7.2](jvms-4.html#jvms-4.7.2 "4.7.2. The ConstantValue Attribute")), in the order the fields appear in the `ClassFile` structure.
    
7.  Next, if C is a class rather than an interface, and its superclass has not yet been initialized, then let SC be its superclass and let SI1, ..., SIn be all superinterfaces of C (whether direct or indirect) that declare at least one non-`abstract`, non-`static` method. The order of superinterfaces is given by a recursive enumeration over the superinterface hierarchy of each interface directly implemented by C. For each interface I directly implemented by C (in the order of the `interfaces` array of C), the enumeration recurs on I's superinterfaces (in the order of the `interfaces` array of I) before returning I.
    
    For each S in the list \[ SC, SI1, ..., SIn \], recursively perform this entire procedure for S. If necessary, verify and prepare S first.
    
    If the initialization of S completes abruptly because of a thrown exception, then acquire `LC`, label the `Class` object for C as erroneous, notify all waiting threads, release `LC`, and complete abruptly, throwing the same exception that resulted from initializing SC.
    
8.  Next, determine whether assertions are enabled for C by querying its defining class loader.
    
9.  Next, execute the class or interface initialization method of C.
    
10.  If the execution of the class or interface initialization method completes normally, then acquire `LC`, label the `Class` object for C as fully initialized, notify all waiting threads, release `LC`, and complete this procedure normally.
    
11.  Otherwise, the class or interface initialization method must have completed abruptly by throwing some exception E. If the class of E is not `Error` or one of its subclasses, then create a new instance of the class `ExceptionInInitializerError` with E as the argument, and use this object in place of E in the following step. If a new instance of `ExceptionInInitializerError` cannot be created because an `OutOfMemoryError` occurs, then use an `OutOfMemoryError` object in place of E in the following step.
    
12.  Acquire `LC`, label the `Class` object for C as erroneous, notify all waiting threads, release `LC`, and complete this procedure abruptly with reason E or its replacement as determined in the previous step.
    

A Java Virtual Machine implementation may optimize this procedure by eliding the lock acquisition in step 1 (and release in step 4/5) when it can determine that the initialization of the class has already completed, provided that, in terms of the Java memory model, all _happens-before_ orderings (JLS §17.4.5) that would exist if the lock were acquired, still exist when the optimization is performed.

5.6. Binding Native Method Implementations
------------------------------------------

_Binding_ is the process by which a function written in a language other than the Java programming language and implementing a `native` method is integrated into the Java Virtual Machine so that it can be executed. Although this process is traditionally referred to as linking, the term binding is used in the specification to avoid confusion with linking of classes or interfaces by the Java Virtual Machine.

5.7. Java Virtual Machine Exit
------------------------------

The Java Virtual Machine exits when some thread invokes the `exit` method of class `Runtime` or class `System`, or the `halt` method of class `Runtime`, and the `exit` or `halt` operation is permitted by the security manager.

In addition, the JNI (Java Native Interface) Specification describes termination of the Java Virtual Machine when the JNI Invocation API is used to load and unload the Java Virtual Machine.


📜 Chapter 6. The Java Virtual Machine Instruction Set
---------------------------------------------------

**Table of Contents**

[6.1. Assumptions: The Meaning of "Must"](jvms-6.html#jvms-6.1)
[6.2. Reserved Opcodes](jvms-6.html#jvms-6.2)
[6.3. Virtual Machine Errors](jvms-6.html#jvms-6.3)
[6.4. Format of Instruction Descriptions](jvms-6.html#jvms-6.4)
[mnemonic](jvms-6.html#jvms-6.4-mnemonic)
[6.5. Instructions](jvms-6.html#jvms-6.5)
[_aaload_](jvms-6.html#jvms-6.5.aaload)
[_aastore_](jvms-6.html#jvms-6.5.aastore)
[_aconst\_null_](jvms-6.html#jvms-6.5.aconst_null)
[_aload_](jvms-6.html#jvms-6.5.aload)
[_aload\_<n>_](jvms-6.html#jvms-6.5.aload_n)
[_anewarray_](jvms-6.html#jvms-6.5.anewarray)
[_areturn_](jvms-6.html#jvms-6.5.areturn)
[_arraylength_](jvms-6.html#jvms-6.5.arraylength)
[_astore_](jvms-6.html#jvms-6.5.astore)
[_astore\_<n>_](jvms-6.html#jvms-6.5.astore_n)
[_athrow_](jvms-6.html#jvms-6.5.athrow)
[_baload_](jvms-6.html#jvms-6.5.baload)
[_bastore_](jvms-6.html#jvms-6.5.bastore)
[_bipush_](jvms-6.html#jvms-6.5.bipush)
[_caload_](jvms-6.html#jvms-6.5.caload)
[_castore_](jvms-6.html#jvms-6.5.castore)
[_checkcast_](jvms-6.html#jvms-6.5.checkcast)
[_d2f_](jvms-6.html#jvms-6.5.d2f)
[_d2i_](jvms-6.html#jvms-6.5.d2i)
[_d2l_](jvms-6.html#jvms-6.5.d2l)
[_dadd_](jvms-6.html#jvms-6.5.dadd)
[_daload_](jvms-6.html#jvms-6.5.daload)
[_dastore_](jvms-6.html#jvms-6.5.dastore)
[_dcmp<op>_](jvms-6.html#jvms-6.5.dcmp_op)
[_dconst\_<d>_](jvms-6.html#jvms-6.5.dconst_d)
[_ddiv_](jvms-6.html#jvms-6.5.ddiv)
[_dload_](jvms-6.html#jvms-6.5.dload)
[_dload\_<n>_](jvms-6.html#jvms-6.5.dload_n)
[_dmul_](jvms-6.html#jvms-6.5.dmul)
[_dneg_](jvms-6.html#jvms-6.5.dneg)
[_drem_](jvms-6.html#jvms-6.5.drem)
[_dreturn_](jvms-6.html#jvms-6.5.dreturn)
[_dstore_](jvms-6.html#jvms-6.5.dstore)
[_dstore\_<n>_](jvms-6.html#jvms-6.5.dstore_n)
[_dsub_](jvms-6.html#jvms-6.5.dsub)
[_dup_](jvms-6.html#jvms-6.5.dup)
[_dup\_x1_](jvms-6.html#jvms-6.5.dup_x1)
[_dup\_x2_](jvms-6.html#jvms-6.5.dup_x2)
[_dup2_](jvms-6.html#jvms-6.5.dup2)
[_dup2\_x1_](jvms-6.html#jvms-6.5.dup2_x1)
[_dup2\_x2_](jvms-6.html#jvms-6.5.dup2_x2)
[_f2d_](jvms-6.html#jvms-6.5.f2d)
[_f2i_](jvms-6.html#jvms-6.5.f2i)
[_f2l_](jvms-6.html#jvms-6.5.f2l)
[_fadd_](jvms-6.html#jvms-6.5.fadd)
[_faload_](jvms-6.html#jvms-6.5.faload)
[_fastore_](jvms-6.html#jvms-6.5.fastore)
[_fcmp<op>_](jvms-6.html#jvms-6.5.fcmp_op)
[_fconst\_<f>_](jvms-6.html#jvms-6.5.fconst_f)
[_fdiv_](jvms-6.html#jvms-6.5.fdiv)
[_fload_](jvms-6.html#jvms-6.5.fload)
[_fload\_<n>_](jvms-6.html#jvms-6.5.fload_n)
[_fmul_](jvms-6.html#jvms-6.5.fmul)
[_fneg_](jvms-6.html#jvms-6.5.fneg)
[_frem_](jvms-6.html#jvms-6.5.frem)
[_freturn_](jvms-6.html#jvms-6.5.freturn)
[_fstore_](jvms-6.html#jvms-6.5.fstore)
[_fstore\_<n>_](jvms-6.html#jvms-6.5.fstore_n)
[_fsub_](jvms-6.html#jvms-6.5.fsub)
[_getfield_](jvms-6.html#jvms-6.5.getfield)
[_getstatic_](jvms-6.html#jvms-6.5.getstatic)
[_goto_](jvms-6.html#jvms-6.5.goto)
[_goto\_w_](jvms-6.html#jvms-6.5.goto_w)
[_i2b_](jvms-6.html#jvms-6.5.i2b)
[_i2c_](jvms-6.html#jvms-6.5.i2c)
[_i2d_](jvms-6.html#jvms-6.5.i2d)
[_i2f_](jvms-6.html#jvms-6.5.i2f)
[_i2l_](jvms-6.html#jvms-6.5.i2l)
[_i2s_](jvms-6.html#jvms-6.5.i2s)
[_iadd_](jvms-6.html#jvms-6.5.iadd)
[_iaload_](jvms-6.html#jvms-6.5.iaload)
[_iand_](jvms-6.html#jvms-6.5.iand)
[_iastore_](jvms-6.html#jvms-6.5.iastore)
[_iconst\_<i>_](jvms-6.html#jvms-6.5.iconst_i)
[_idiv_](jvms-6.html#jvms-6.5.idiv)
[_if\_acmp<cond>_](jvms-6.html#jvms-6.5.if_acmp_cond)
[_if\_icmp<cond>_](jvms-6.html#jvms-6.5.if_icmp_cond)
[_if<cond>_](jvms-6.html#jvms-6.5.if_cond)
[_ifnonnull_](jvms-6.html#jvms-6.5.ifnonnull)
[_ifnull_](jvms-6.html#jvms-6.5.ifnull)
[_iinc_](jvms-6.html#jvms-6.5.iinc)
[_iload_](jvms-6.html#jvms-6.5.iload)
[_iload\_<n>_](jvms-6.html#jvms-6.5.iload_n)
[_imul_](jvms-6.html#jvms-6.5.imul)
[_ineg_](jvms-6.html#jvms-6.5.ineg)
[_instanceof_](jvms-6.html#jvms-6.5.instanceof)
[_invokedynamic_](jvms-6.html#jvms-6.5.invokedynamic)
[_invokeinterface_](jvms-6.html#jvms-6.5.invokeinterface)
[_invokespecial_](jvms-6.html#jvms-6.5.invokespecial)
[_invokestatic_](jvms-6.html#jvms-6.5.invokestatic)
[_invokevirtual_](jvms-6.html#jvms-6.5.invokevirtual)
[_ior_](jvms-6.html#jvms-6.5.ior)
[_irem_](jvms-6.html#jvms-6.5.irem)
[_ireturn_](jvms-6.html#jvms-6.5.ireturn)
[_ishl_](jvms-6.html#jvms-6.5.ishl)
[_ishr_](jvms-6.html#jvms-6.5.ishr)
[_istore_](jvms-6.html#jvms-6.5.istore)
[_istore\_<n>_](jvms-6.html#jvms-6.5.istore_n)
[_isub_](jvms-6.html#jvms-6.5.isub)
[_iushr_](jvms-6.html#jvms-6.5.iushr)
[_ixor_](jvms-6.html#jvms-6.5.ixor)
[_jsr_](jvms-6.html#jvms-6.5.jsr)
[_jsr\_w_](jvms-6.html#jvms-6.5.jsr_w)
[_l2d_](jvms-6.html#jvms-6.5.l2d)
[_l2f_](jvms-6.html#jvms-6.5.l2f)
[_l2i_](jvms-6.html#jvms-6.5.l2i)
[_ladd_](jvms-6.html#jvms-6.5.ladd)
[_laload_](jvms-6.html#jvms-6.5.laload)
[_land_](jvms-6.html#jvms-6.5.land)
[_lastore_](jvms-6.html#jvms-6.5.lastore)
[_lcmp_](jvms-6.html#jvms-6.5.lcmp)
[_lconst\_<l>_](jvms-6.html#jvms-6.5.lconst_l)
[_ldc_](jvms-6.html#jvms-6.5.ldc)
[_ldc\_w_](jvms-6.html#jvms-6.5.ldc_w)
[_ldc2\_w_](jvms-6.html#jvms-6.5.ldc2_w)
[_ldiv_](jvms-6.html#jvms-6.5.ldiv)
[_lload_](jvms-6.html#jvms-6.5.lload)
[_lload\_<n>_](jvms-6.html#jvms-6.5.lload_n)
[_lmul_](jvms-6.html#jvms-6.5.lmul)
[_lneg_](jvms-6.html#jvms-6.5.lneg)
[_lookupswitch_](jvms-6.html#jvms-6.5.lookupswitch)
[_lor_](jvms-6.html#jvms-6.5.lor)
[_lrem_](jvms-6.html#jvms-6.5.lrem)
[_lreturn_](jvms-6.html#jvms-6.5.lreturn)
[_lshl_](jvms-6.html#jvms-6.5.lshl)
[_lshr_](jvms-6.html#jvms-6.5.lshr)
[_lstore_](jvms-6.html#jvms-6.5.lstore)
[_lstore\_<n>_](jvms-6.html#jvms-6.5.lstore_n)
[_lsub_](jvms-6.html#jvms-6.5.lsub)
[_lushr_](jvms-6.html#jvms-6.5.lushr)
[_lxor_](jvms-6.html#jvms-6.5.lxor)
[_monitorenter_](jvms-6.html#jvms-6.5.monitorenter)
[_monitorexit_](jvms-6.html#jvms-6.5.monitorexit)
[_multianewarray_](jvms-6.html#jvms-6.5.multianewarray)
[_new_](jvms-6.html#jvms-6.5.new)
[_newarray_](jvms-6.html#jvms-6.5.newarray)
[_nop_](jvms-6.html#jvms-6.5.nop)
[_pop_](jvms-6.html#jvms-6.5.pop)
[_pop2_](jvms-6.html#jvms-6.5.pop2)
[_putfield_](jvms-6.html#jvms-6.5.putfield)
[_putstatic_](jvms-6.html#jvms-6.5.putstatic)
[_ret_](jvms-6.html#jvms-6.5.ret)
[_return_](jvms-6.html#jvms-6.5.return)
[_saload_](jvms-6.html#jvms-6.5.saload)
[_sastore_](jvms-6.html#jvms-6.5.sastore)
[_sipush_](jvms-6.html#jvms-6.5.sipush)
[_swap_](jvms-6.html#jvms-6.5.swap)
[_tableswitch_](jvms-6.html#jvms-6.5.tableswitch)
[_wide_](jvms-6.html#jvms-6.5.wide)

A Java Virtual Machine instruction consists of an opcode specifying the operation to be performed, followed by zero or more operands embodying values to be operated upon. This chapter gives details about the format of each Java Virtual Machine instruction and the operation it performs.

6.1. Assumptions: The Meaning of "Must"
---------------------------------------

The description of each instruction is always given in the context of Java Virtual Machine code that satisfies the static and structural constraints of [§4 (_The `class` File Format_)](jvms-4.html "Chapter 4. The class File Format"). In the description of individual Java Virtual Machine instructions, we frequently state that some situation "must" or "must not" be the case: "The _value2_ must be of type `int`." The constraints of [§4 (_The `class` File Format_)](jvms-4.html "Chapter 4. The class File Format") guarantee that all such expectations will in fact be met. If some constraint (a "must" or "must not") in an instruction description is not satisfied at run time, the behavior of the Java Virtual Machine is undefined.

The Java Virtual Machine checks that Java Virtual Machine code satisfies the static and structural constraints at link time using a `class` file verifier ([§4.10](jvms-4.html#jvms-4.10 "4.10. Verification of class Files")). Thus, a Java Virtual Machine will only attempt to execute code from valid `class` files. Performing verification at link time is attractive in that the checks are performed just once, substantially reducing the amount of work that must be done at run time. Other implementation strategies are possible, provided that they comply with _The Java Language Specification, Java SE 8 Edition_ and _The Java Virtual Machine Specification, Java SE 8 Edition_.

6.2. Reserved Opcodes
---------------------

In addition to the opcodes of the instructions specified later in this chapter, which are used in `class` files ([§4 (_The `class` File Format_)](jvms-4.html "Chapter 4. The class File Format")), three opcodes are reserved for internal use by a Java Virtual Machine implementation. If the instruction set of the Java Virtual Machine is extended in the future, these reserved opcodes are guaranteed not to be used.

Two of the reserved opcodes, numbers 254 (0xfe) and 255 (0xff), have the mnemonics _impdep1_ and _impdep2_, respectively. These instructions are intended to provide "back doors" or traps to implementation-specific functionality implemented in software and hardware, respectively. The third reserved opcode, number 202 (0xca), has the mnemonic _breakpoint_ and is intended to be used by debuggers to implement breakpoints.

Although these opcodes have been reserved, they may be used only inside a Java Virtual Machine implementation. They cannot appear in valid `class` files. Tools such as debuggers or JIT code generators ([§2.13](jvms-2.html#jvms-2.13 "2.13. Public Design, Private Implementation")) that might directly interact with Java Virtual Machine code that has been already loaded and executed may encounter these opcodes. Such tools should attempt to behave gracefully if they encounter any of these reserved instructions.

6.3. Virtual Machine Errors
---------------------------

A Java Virtual Machine implementation throws an object that is an instance of a subclass of the class `VirtualMachineError` when an internal error or resource limitation prevents it from implementing the semantics described in this chapter. This specification cannot predict where internal errors or resource limitations may be encountered and does not mandate precisely when they can be reported. Thus, any of the `VirtualMachineError` subclasses defined below may be thrown at any time during the operation of the Java Virtual Machine:

*   `InternalError`: An internal error has occurred in the Java Virtual Machine implementation because of a fault in the software implementing the virtual machine, a fault in the underlying host system software, or a fault in the hardware. This error is delivered asynchronously ([§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions")) when it is detected and may occur at any point in a program.
    
*   `OutOfMemoryError`: The Java Virtual Machine implementation has run out of either virtual or physical memory, and the automatic storage manager was unable to reclaim enough memory to satisfy an object creation request.
    
*   `StackOverflowError`: The Java Virtual Machine implementation has run out of stack space for a thread, typically because the thread is doing an unbounded number of recursive invocations as a result of a fault in the executing program.
    
*   `UnknownError`: An exception or error has occurred, but the Java Virtual Machine implementation is unable to report the actual exception or error.
    

6.4. Format of Instruction Descriptions
---------------------------------------

Java Virtual Machine instructions are represented in this chapter by entries of the form shown below, in alphabetical order and each beginning on a new page.

### `mnemonic`

#### Operation

Short description of the instruction

#### Format

  
_mnemonic_  
_operand1_  
_operand2_  
...  

#### Forms

_mnemonic_ = opcode

#### Operand Stack

..., _value1_, _value2_ →

..., _value3_

#### Description

A longer description detailing constraints on operand stack contents or constant pool entries, the operation performed, the type of the results, etc.

#### Linking Exceptions

If any linking exceptions may be thrown by the execution of this instruction, they are set off one to a line, in the order in which they must be thrown.

#### Run-time Exceptions

If any run-time exceptions can be thrown by the execution of an instruction, they are set off one to a line, in the order in which they must be thrown.

Other than the linking and run-time exceptions, if any, listed for an instruction, that instruction must not throw any run-time exceptions except for instances of `VirtualMachineError` or its subclasses.

#### Notes

Comments not strictly part of the specification of an instruction are set aside as notes at the end of the description.

Each cell in the instruction format diagram represents a single 8-bit byte. The instruction's _mnemonic_ is its name. Its opcode is its numeric representation and is given in both decimal and hexadecimal forms. Only the numeric representation is actually present in the Java Virtual Machine code in a `class` file.

Keep in mind that there are "operands" generated at compile time and embedded within Java Virtual Machine instructions, as well as "operands" calculated at run time and supplied on the operand stack. Although they are supplied from several different areas, all these operands represent the same thing: values to be operated upon by the Java Virtual Machine instruction being executed. By implicitly taking many of its operands from its operand stack, rather than representing them explicitly in its compiled code as additional operand bytes, register numbers, etc., the Java Virtual Machine's code stays compact.

Some instructions are presented as members of a family of related instructions sharing a single description, format, and operand stack diagram. As such, a family of instructions includes several opcodes and opcode mnemonics; only the family mnemonic appears in the instruction format diagram, and a separate forms line lists all member mnemonics and opcodes. For example, the Forms line for the _lconst\_<l>_ family of instructions, giving mnemonic and opcode information for the two instructions in that family (_lconst\_0_ and _lconst\_1_), is

_lconst\_0_ = 9 (0x9)

_lconst\_1_ = 10 (0xa)

In the description of the Java Virtual Machine instructions, the effect of an instruction's execution on the operand stack ([§2.6.2](jvms-2.html#jvms-2.6.2 "2.6.2. Operand Stacks")) of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) is represented textually, with the stack growing from left to right and each value represented separately. Thus,

..., _value1_, _value2_ →

..., _result_

shows an operation that begins by having _value2_ on top of the operand stack with _value1_ just beneath it. As a result of the execution of the instruction, _value1_ and _value2_ are popped from the operand stack and replaced by _result_ value, which has been calculated by the instruction. The remainder of the operand stack, represented by an ellipsis (...), is unaffected by the instruction's execution.

Values of types `long` and `double` are represented by a single entry on the operand stack.

In the First Edition of _The Java® Virtual Machine Specification_, values on the operand stack of types `long` and `double` were each represented in the stack diagram by two entries.

6.5. Instructions
-----------------

### `aaload`

#### Operation

Load `reference` from array

#### Format

  
_aaload_  

#### Forms

_aaload_ = 50 (0x32)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `reference`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `reference` _value_ in the component of the array at _index_ is retrieved and pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _aaload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _aaload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `aastore`

#### Operation

Store into `reference` array

#### Format

  
_aastore_  

#### Forms

_aastore_ = 83 (0x53)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `reference`. The _index_ must be of type `int` and value must be of type `reference`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `reference` _value_ is stored as the component of the array at _index_.

At run time, the type of _value_ must be compatible with the type of the components of the array referenced by _arrayref_. Specifically, assignment of a value of reference type S (source) to an array component of reference type T (target) is allowed only if:

*   If S is a class type, then:
    
    *   If T is a class type, then S must be the same class as T, or S must be a subclass of T;
        
    *   If T is an interface type, then S must implement interface T.
        
    
*   If S is an interface type, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be the same interface as S or a superinterface of S.
        
    
*   If S is an array type, namely, the type SC`[]`, that is, an array of components of type SC, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be one of the interfaces implemented by arrays (JLS §4.10.3).
        
    *   If T is an array type TC`[]`, that is, an array of components of type TC, then one of the following must be true:
        
        *   TC and SC are the same primitive type.
            
        *   TC and SC are reference types, and type SC is assignable to TC by these run-time rules.
            
        
    

#### Run-time Exceptions

If _arrayref_ is `null`, _aastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _aastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

Otherwise, if _arrayref_ is not `null` and the actual type of _value_ is not assignment compatible (JLS §5.2) with the actual type of the components of the array, _aastore_ throws an `ArrayStoreException`.

### `aconst_null`

#### Operation

Push `null`

#### Format

  
_aconst\_null_  

#### Forms

_aconst\_null_ = 1 (0x1)

#### Operand Stack

... →

..., `null`

#### Description

Push the `null` object `reference` onto the operand stack.

#### Notes

The Java Virtual Machine does not mandate a concrete value for `null`.

### `aload`

#### Operation

Load `reference` from local variable

#### Format

  
_aload_  
_index_  

#### Forms

_aload_ = 25 (0x19)

#### Operand Stack

... →

..., _objectref_

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at _index_ must contain a `reference`. The _objectref_ in the local variable at _index_ is pushed onto the operand stack.

#### Notes

The _aload_ instruction cannot be used to load a value of type `returnAddress` from a local variable onto the operand stack. This asymmetry with the _astore_ instruction ([§_astore_](jvms-6.html#jvms-6.5.astore "astore")) is intentional.

The _aload_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `aload_<n>`

#### Operation

Load `reference` from local variable

#### Format

  
_aload\_<n>_  

#### Forms

_aload\_0_ = 42 (0x2a)

_aload\_1_ = 43 (0x2b)

_aload\_2_ = 44 (0x2c)

_aload\_3_ = 45 (0x2d)

#### Operand Stack

... →

..., _objectref_

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at <_n_\> must contain a `reference`. The _objectref_ in the local variable at <_n_\> is pushed onto the operand stack.

#### Notes

An _aload\_<n>_ instruction cannot be used to load a value of type `returnAddress` from a local variable onto the operand stack. This asymmetry with the corresponding _astore\_<n>_ instruction ([§_astore\_<n>_](jvms-6.html#jvms-6.5.astore_n "astore_<n>")) is intentional.

Each of the _aload\_<n>_ instructions is the same as _aload_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `anewarray`

#### Operation

Create new array of `reference`

#### Format

  
_anewarray_  
_indexbyte1_  
_indexbyte2_  

#### Forms

anewarray = 189 (0xbd)

#### Operand Stack

..., _count_ →

..., _arrayref_

#### Description

The _count_ must be of type `int`. It is popped off the operand stack. The _count_ represents the number of components of the array to be created. The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a class, array, or interface type. The named class, array, or interface type is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). A new array with components of that type, of length _count_, is allocated from the garbage-collected heap, and a `reference` _arrayref_ to this new array object is pushed onto the operand stack. All components of the new array are initialized to `null`, the default value for `reference` types ([§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")).

#### Linking Exceptions

During resolution of the symbolic reference to the class, array, or interface type, any of the exceptions documented in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") can be thrown.

#### Run-time Exceptions

Otherwise, if _count_ is less than zero, the _anewarray_ instruction throws a `NegativeArraySizeException`.

#### Notes

The _anewarray_ instruction is used to create a single dimension of an array of object references or part of a multidimensional array.

### `areturn`

#### Operation

Return `reference` from method

#### Format

  
_areturn_  

#### Forms

_areturn_ = 176 (0xb0)

#### Operand Stack

..., _objectref_ →

\[empty\]

#### Description

The _objectref_ must be of type `reference` and must refer to an object of a type that is assignment compatible (JLS §5.2) with the type represented by the return descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the current method. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, _objectref_ is popped from the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) and pushed onto the operand stack of the frame of the invoker. Any other values on the operand stack of the current method are discarded.

The interpreter then reinstates the frame of the invoker and returns control to the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _areturn_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is synchronized.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _areturn_ throws an `IllegalMonitorStateException`.

### `arraylength`

#### Operation

Get length of array

#### Format

  
_arraylength_  

#### Forms

_arraylength_ = 190 (0xbe)

#### Operand Stack

..., _arrayref_ →

..., _length_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array. It is popped from the operand stack. The _length_ of the array it references is determined. That _length_ is pushed onto the operand stack as an `int`.

#### Run-time Exceptions

If the _arrayref_ is `null`, the _arraylength_ instruction throws a `NullPointerException`.

### `astore`

#### Operation

Store `reference` into local variable

#### Format

  
_astore_  
_index_  

#### Forms

_astore_ = 58 (0x3a)

#### Operand Stack

..., _objectref_ →

...

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _objectref_ on the top of the operand stack must be of type `returnAddress` or of type `reference`. It is popped from the operand stack, and the value of the local variable at _index_ is set to _objectref_.

#### Notes

The _astore_ instruction is used with an _objectref_ of type `returnAddress` when implementing the `finally` clause of the Java programming language ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally")).

The _aload_ instruction ([§_aload_](jvms-6.html#jvms-6.5.aload "aload")) cannot be used to load a value of type `returnAddress` from a local variable onto the operand stack. This asymmetry with the _astore_ instruction is intentional.

The _astore_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `astore_<n>`

#### Operation

Store `reference` into local variable

#### Format

  
_astore\_<n>_  

#### Forms

_astore\_0_ = 75 (0x4b)

_astore\_1_ = 76 (0x4c)

_astore\_2_ = 77 (0x4d)

_astore\_3_ = 78 (0x4e)

#### Operand Stack

..., _objectref_ →

...

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _objectref_ on the top of the operand stack must be of type `returnAddress` or of type `reference`. It is popped from the operand stack, and the value of the local variable at <_n_\> is set to _objectref_.

#### Notes

An _astore\_<n>_ instruction is used with an _objectref_ of type `returnAddress` when implementing the `finally` clauses of the Java programming language ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally")).

An _aload\_<n>_ instruction ([§_aload\_<n>_](jvms-6.html#jvms-6.5.aload_n "aload_<n>")) cannot be used to load a value of type `returnAddress` from a local variable onto the operand stack. This asymmetry with the corresponding _astore\_<n>_ instruction is intentional.

Each of the _astore\_<n>_ instructions is the same as _astore_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `athrow`

#### Operation

Throw exception or error

#### Format

  
_athrow_  

#### Forms

_athrow_ = 191 (0xbf)

#### Operand Stack

..., _objectref_ →

_objectref_

#### Description

The _objectref_ must be of type `reference` and must refer to an object that is an instance of class `Throwable` or of a subclass of `Throwable`. It is popped from the operand stack. The _objectref_ is then thrown by searching the current method ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) for the first exception handler that matches the class of _objectref_, as given by the algorithm in [§2.10](jvms-2.html#jvms-2.10 "2.10. Exceptions").

If an exception handler that matches _objectref_ is found, it contains the location of the code intended to handle this exception. The `pc` register is reset to that location, the operand stack of the current frame is cleared, _objectref_ is pushed back onto the operand stack, and execution continues.

If no matching exception handler is found in the current frame, that frame is popped. If the current frame represents an invocation of a `synchronized` method, the monitor entered or reentered on invocation of the method is exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")). Finally, the frame of its invoker is reinstated, if such a frame exists, and the _objectref_ is rethrown. If no such frame exists, the current thread exits.

#### Run-time Exceptions

If _objectref_ is `null`, _athrow_ throws a `NullPointerException` instead of _objectref_.

Otherwise, if the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the method of the current frame is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _athrow_ throws an `IllegalMonitorStateException` instead of the object previously being thrown. This can happen, for example, if an abruptly completing `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is synchronized.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _athrow_ throws an `IllegalMonitorStateException` instead of the object previously being thrown.

#### Notes

The operand stack diagram for the _athrow_ instruction may be misleading: If a handler for this exception is matched in the current method, the _athrow_ instruction discards all the values on the operand stack, then pushes the thrown object onto the operand stack. However, if no handler is matched in the current method and the exception is thrown farther up the method invocation chain, then the operand stack of the method (if any) that handles the exception is cleared and _objectref_ is pushed onto that empty operand stack. All intervening frames from the method that threw the exception up to, but not including, the method that handles the exception are discarded.

### `baload`

#### Operation

Load `byte` or `boolean` from array

#### Format

  
_baload_  

#### Forms

_baload_ = 51 (0x33)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `byte` or of type `boolean`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `byte` _value_ in the component of the array at _index_ is retrieved, sign-extended to an `int` _value_, and pushed onto the top of the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _baload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _baload_ instruction throws an `ArrayIndexOutOfBoundsException`.

#### Notes

The _baload_ instruction is used to load values from both `byte` and `boolean` arrays. In Oracle's Java Virtual Machine implementation, `boolean` arrays - that is, arrays of type `T_BOOLEAN` ([§2.2](jvms-2.html#jvms-2.2 "2.2. Data Types"), [§_newarray_](jvms-6.html#jvms-6.5.newarray "newarray")) - are implemented as arrays of 8-bit values. Other implementations may implement packed `boolean` arrays; the _baload_ instruction of such implementations must be used to access those arrays.

### `bastore`

#### Operation

Store into `byte` or `boolean` array

#### Format

  
_bastore_  

#### Forms

_bastore_ = 84 (0x54)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `byte` or of type `boolean`. The _index_ and the _value_ must both be of type `int`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `int` _value_ is truncated to a `byte` and stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _bastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _bastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

#### Notes

The _bastore_ instruction is used to store values into both `byte` and `boolean` arrays. In Oracle's Java Virtual Machine implementation, `boolean` arrays - that is, arrays of type `T_BOOLEAN` ([§2.2](jvms-2.html#jvms-2.2 "2.2. Data Types"), [§_newarray_](jvms-6.html#jvms-6.5.newarray "newarray")) - are implemented as arrays of 8-bit values. Other implementations may implement packed `boolean` arrays; in such implementations the _bastore_ instruction must be able to store `boolean` values into packed `boolean` arrays as well as `byte` values into `byte` arrays.

### `bipush`

#### Operation

Push `byte`

#### Format

  
_bipush_  
_byte_  

#### Forms

_bipush_ = 16 (0x10)

#### Operand Stack

... →

..., _value_

#### Description

The immediate _byte_ is sign-extended to an `int` _value_. That _value_ is pushed onto the operand stack.

### `caload`

#### Operation

Load `char` from array

#### Format

  
_caload_  

#### Forms

_caload_ = 52 (0x34)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `char`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The component of the array at _index_ is retrieved and zero-extended to an `int` _value_. That _value_ is pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _caload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _caload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `castore`

#### Operation

Store into `char` array

#### Format

  
_castore_  

#### Forms

_castore_ = 85 (0x55)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `char`. The _index_ and the _value_ must both be of type `int`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `int` _value_ is truncated to a `char` and stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _castore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _castore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `checkcast`

#### Operation

Check whether object is of given type

#### Format

  
_checkcast_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_checkcast_ = 192 (0xc0)

#### Operand Stack

..., _objectref_ →

..., _objectref_

#### Description

The _objectref_ must be of type `reference`. The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at the index must be a symbolic reference to a class, array, or interface type.

If _objectref_ is `null`, then the operand stack is unchanged.

Otherwise, the named class, array, or interface type is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). If _objectref_ can be cast to the resolved class, array, or interface type, the operand stack is unchanged; otherwise, the _checkcast_ instruction throws a `ClassCastException`.

The following rules are used to determine whether an _objectref_ that is not `null` can be cast to the resolved type: if S is the class of the object referred to by _objectref_ and T is the resolved class, array, or interface type, _checkcast_ determines whether _objectref_ can be cast to type T as follows:

*   If S is an ordinary (nonarray) class, then:
    
    *   If T is a class type, then S must be the same class as T, or S must be a subclass of T;
        
    *   If T is an interface type, then S must implement interface T.
        
    
*   If S is an interface type, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be the same interface as S or a superinterface of S.
        
    
*   If S is a class representing the array type SC`[]`, that is, an array of components of type SC, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be one of the interfaces implemented by arrays (JLS §4.10.3).
        
    *   If T is an array type TC`[]`, that is, an array of components of type TC, then one of the following must be true:
        
        *   TC and SC are the same primitive type.
            
        *   TC and SC are reference types, and type SC can be cast to TC by recursive application of these rules.
            
        
    

#### Linking Exceptions

During resolution of the symbolic reference to the class, array, or interface type, any of the exceptions documented in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") can be thrown.

#### Run-time Exception

Otherwise, if _objectref_ cannot be cast to the resolved class, array, or interface type, the _checkcast_ instruction throws a `ClassCastException`.

#### Notes

The _checkcast_ instruction is very similar to the _instanceof_ instruction ([§_instanceof_](jvms-6.html#jvms-6.5.instanceof "instanceof")). It differs in its treatment of `null`, its behavior when its test fails (_checkcast_ throws an exception, _instanceof_ pushes a result code), and its effect on the operand stack.

### `d2f`

#### Operation

Convert `double` to `float`

#### Format

  
_d2f_  

#### Forms

_d2f_ = 144 (0x90)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) resulting in _value_'. Then _value_' is converted to a `float` result using IEEE 754 round to nearest mode. The _result_ is pushed onto the operand stack.

Where an _d2f_ instruction is FP-strict ([§2.8.2](jvms-2.html#jvms-2.8.2 "2.8.2. Floating-Point Modes")), the result of the conversion is always rounded to the nearest representable value in the float value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")).

Where an _d2f_ instruction is not FP-strict, the result of the conversion may be taken from the float-extended-exponent value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")); it is not necessarily rounded to the nearest representable value in the float value set.

A finite _value_' too small to be represented as a `float` is converted to a zero of the same sign; a finite _value_' too large to be represented as a `float` is converted to an infinity of the same sign. A `double` NaN is converted to a `float` NaN.

#### Notes

The _d2f_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_' and may also lose precision.

### `d2i`

#### Operation

Convert `double` to `int`

#### Format

  
_d2i_  

#### Forms

_d2i_ = 142 (0x8e)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) resulting in _value_'. Then _value_' is converted to an `int`. The result is pushed onto the operand stack:

*   If the _value_' is NaN, the _result_ of the conversion is an `int` 0.
    
*   Otherwise, if the _value_' is not an infinity, it is rounded to an integer value V, rounding towards zero using IEEE 754 round towards zero mode. If this integer value V can be represented as an `int`, then the result is the `int` value V.
    
*   Otherwise, either the _value_' must be too small (a negative value of large magnitude or negative infinity), and the _result_ is the smallest representable value of type `int`, or the _value_' must be too large (a positive value of large magnitude or positive infinity), and the _result_ is the largest representable value of type `int`.
    

#### Notes

The _d2i_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_' and may also lose precision.

### `d2l`

#### Operation

Convert `double` to `long`

#### Format

  
_d2l_  

#### Forms

_d2l_ = 143 (0x8f)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) resulting in _value_'. Then _value_' is converted to a `long`. The _result_ is pushed onto the operand stack:

*   If the _value_' is NaN, the _result_ of the conversion is a `long` 0.
    
*   Otherwise, if the _value_' is not an infinity, it is rounded to an integer value V, rounding towards zero using IEEE 754 round towards zero mode. If this integer value V can be represented as a `long`, then the _result_ is the `long` value V.
    
*   Otherwise, either the _value_' must be too small (a negative value of large magnitude or negative infinity), and the _result_ is the smallest representable value of type `long`, or the _value_' must be too large (a positive value of large magnitude or positive infinity), and the _result_ is the largest representable value of type `long`.
    

#### Notes

The _d2l_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_' and may also lose precision.

### `dadd`

#### Operation

Add `double`

#### Format

  
_dadd_  

#### Forms

_dadd_ = 99 (0x63)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of typeclass="literal">double. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `double` _result_ is _value1_' + _value2_'. The _result_ is pushed onto the operand stack.

The result of a _dadd_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   The sum of two infinities of opposite sign is NaN.
    
*   The sum of two infinities of the same sign is the infinity of that sign.
    
*   The sum of an infinity and any finite value is equal to the infinity.
    
*   The sum of two zeroes of opposite sign is positive zero.
    
*   The sum of two zeroes of the same sign is the zero of that sign.
    
*   The sum of a zero and a nonzero finite value is equal to the nonzero value.
    
*   The sum of two nonzero finite values of the same magnitude and opposite sign is positive zero.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN and the values have the same sign or have different magnitudes, the sum is computed and rounded to the nearest representable value using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `double`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `double`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of a _dadd_ instruction never throws a run-time exception.

### `daload`

#### Operation

Load `double` from array

#### Format

  
_daload_  

#### Forms

_daload_ = 49 (0x31)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `double`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `double` value in the component of the array at _index_ is retrieved and pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _daload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _daload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `dastore`

#### Operation

Store into `double` array

#### Format

  
_dastore_  

#### Forms

_dastore_ = 82 (0x52)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `double`. The _index_ must be of type `int`, and value must be of type `double`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `double` _value_ undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_', which is stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _dastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _dastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `dcmp<op>`

#### Operation

Compare `double`

#### Format

  
_dcmp<op>_  

#### Forms

_dcmpg_ = 152 (0x98)

_dcmpl_ = 151 (0x97)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `double`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. A floating-point comparison is performed:

*   If _value1_' is greater than _value2_', the `int` value 1 is pushed onto the operand stack.
    
*   Otherwise, if _value1_' is equal to _value2_', the `int` value 0 is pushed onto the operand stack.
    
*   Otherwise, if _value1_' is less than _value2_', the `int` value -1 is pushed onto the operand stack.
    
*   Otherwise, at least one of _value1_' or _value2_' is NaN. The _dcmpg_ instruction pushes the `int` value 1 onto the operand stack and the _dcmpl_ instruction pushes the `int` value -1 onto the operand stack.
    

Floating-point comparison is performed in accordance with IEEE 754. All values other than NaN are ordered, with negative infinity less than all finite values and positive infinity greater than all finite values. Positive zero and negative zero are considered equal.

#### Notes

The _dcmpg_ and _dcmpl_ instructions differ only in their treatment of a comparison involving NaN. NaN is unordered, so any `double` comparison fails if either or both of its operands are NaN. With both _dcmpg_ and _dcmpl_ available, any `double` comparison may be compiled to push the same _result_ onto the operand stack whether the comparison fails on non-NaN values or fails because it encountered a NaN. For more information, see [§3.5](jvms-3.html#jvms-3.5 "3.5. More Control Examples").

### `dconst_<d>`

#### Operation

Push `double`

#### Format

  
_dconst\_<d>_  

#### Forms

_dconst\_0_ = 14 (0xe)

_dconst\_1_ = 15 (0xf)

#### Operand Stack

... →

..., <_d_\>

#### Description

Push the `double` constant <_d_\> (0.0 or 1.0) onto the operand stack.

### `ddiv`

#### Operation

Divide `double`

#### Format

  
_ddiv_  

#### Forms

_ddiv_ = 111 (0x6f)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `double`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `double` _result_ is _value1_' / _value2_'. The _result_ is pushed onto the operand stack.

The result of a _ddiv_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result is positive if both values have the same sign, negative if the values have different signs.
    
*   Division of an infinity by an infinity results in NaN.
    
*   Division of an infinity by a finite value results in a signed infinity, with the sign-producing rule just given.
    
*   Division of a finite value by an infinity results in a signed zero, with the sign-producing rule just given.
    
*   Division of a zero by a zero results in NaN; division of zero by any other finite value results in a signed zero, with the sign-producing rule just given.
    
*   Division of a nonzero finite value by a zero results in a signed infinity, with the sign-producing rule just given.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN, the quotient is computed and rounded to the nearest `double` using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `double`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `double`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, division by zero, or loss of precision may occur, execution of a _ddiv_ instruction never throws a run-time exception.

### `dload`

#### Operation

Load `double` from local variable

#### Format

  
_dload_  
_index_  

#### Forms

_dload_ = 24 (0x18)

#### Operand Stack

... →

..., _value_

#### Description

The _index_ is an unsigned byte. Both _index_ and _index_+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at _index_ must contain a `double`. The _value_ of the local variable at _index_ is pushed onto the operand stack.

#### Notes

The _dload_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `dload_<n>`

#### Operation

Load `double` from local variable

#### Format

  
_dload\_<n>_  

#### Forms

_dload\_0_ = 38 (0x26)

_dload\_1_ = 39 (0x27)

_dload\_2_ = 40 (0x28)

_dload\_3_ = 41 (0x29)

#### Operand Stack

... →

..., _value_

#### Description

Both <_n_\> and <_n_\>+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at <_n_\> must contain a `double`. The _value_ of the local variable at <_n_\> is pushed onto the operand stack.

#### Notes

Each of the _dload\_<n>_ instructions is the same as _dload_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `dmul`

#### Operation

Multiply `double`

#### Format

  
_dmul_  

#### Forms

_dmul_ = 107 (0x6b)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `double`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `double` result is _value1_' \* _value2_'. The _result_ is pushed onto the operand stack.

The result of a _dmul_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result is positive if both values have the same sign and negative if the values have different signs.
    
*   Multiplication of an infinity by a zero results in NaN.
    
*   Multiplication of an infinity by a finite value results in a signed infinity, with the sign-producing rule just given.
    
*   In the remaining cases, where neither an infinity nor NaN is involved, the product is computed and rounded to the nearest representable value using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `double`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `double`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of a _dmul_ instruction never throws a run-time exception.

### `dneg`

#### Operation

Negate `double`

#### Format

  
_dneg_  

#### Forms

_dneg_ = 119 (0x77)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The value must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The `double` _result_ is the arithmetic negation of _value_'. The _result_ is pushed onto the operand stack.

For `double` values, negation is not the same as subtraction from zero. If `x` is `+0.0`, then `0.0-x` equals `+0.0`, but `-x` equals `-0.0`. Unary minus merely inverts the sign of a `double`.

Special cases of interest:

*   If the operand is NaN, the result is NaN (recall that NaN has no sign).
    
*   If the operand is an infinity, the result is the infinity of opposite sign.
    
*   If the operand is a zero, the result is the zero of opposite sign.
    

### `drem`

#### Operation

Remainder `double`

#### Format

  
_drem_  

#### Forms

_drem_ = 115 (0x73)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `double`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The _result_ is calculated and pushed onto the operand stack as a `double`.

The result of a _drem_ instruction is not the same as that of the so-called remainder operation defined by IEEE 754. The IEEE 754 "remainder" operation computes the remainder from a rounding division, not a truncating division, and so its behavior is _not_ analogous to that of the usual integer remainder operator. Instead, the Java Virtual Machine defines _drem_ to behave in a manner analogous to that of the Java Virtual Machine integer remainder instructions (_irem_ and _lrem_); this may be compared with the C library function `fmod`.

The result of a _drem_ instruction is governed by these rules:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result equals the sign of the dividend.
    
*   If the dividend is an infinity or the divisor is a zero or both, the result is NaN.
    
*   If the dividend is finite and the divisor is an infinity, the result equals the dividend.
    
*   If the dividend is a zero and the divisor is finite, the result equals the dividend.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN, the floating-point remainder _result_ from a dividend _value1_' and a divisor _value2_' is defined by the mathematical relation _result_ = _value1_' - (_value2_' \* _q_), where _q_ is an integer that is negative only if _value1_' / _value2_' is negative, and positive only if_value1_' / _value2_' is positive, and whose magnitude is as large as possible without exceeding the magnitude of the true mathematical quotient of _value1_' and _value2_'.

Despite the fact that division by zero may occur, evaluation of a _drem_ instruction never throws a run-time exception. Overflow, underflow, or loss of precision cannot occur.

#### Notes

The IEEE 754 remainder operation may be computed by the library routine `Math.IEEEremainder`.

### `dreturn`

#### Operation

Return `double` from method

#### Format

  
_dreturn_  

#### Forms

_dreturn_ = 175 (0xaf)

#### Operand Stack

..., _value_ →

\[empty\]

#### Description

The current method must have return type `double`. The _value_ must be of type `double`. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, _value_ is popped from the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The _value_' is pushed onto the operand stack of the frame of the invoker. Any other values on the operand stack of the current method are discarded.

The interpreter then returns control to the invoker of the method, reinstating the frame of the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _dreturn_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is synchronized.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _dreturn_ throws an `IllegalMonitorStateException`.

### `dstore`

#### Operation

Store `double` into local variable

#### Format

  
_dstore_  
_index_  

#### Forms

_dstore_ = 57 (0x39)

#### Operand Stack

..., _value_ →

...

#### Description

The _index_ is an unsigned byte. Both _index_ and _index_+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The local variables at _index_ and _index_+1 are set to _value_'.

#### Notes

The _dstore_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `dstore_<n>`

#### Operation

Store `double` into local variable

#### Format

  
_dstore\_<n>_  

#### Forms

_dstore\_0_ = 71 (0x47)

_dstore\_1_ = 72 (0x48)

_dstore\_2_ = 73 (0x49)

_dstore\_3_ = 74 (0x4a)

#### Operand Stack

..., _value_ →

...

#### Description

Both <_n_\> and <_n_\>+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `double`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The local variables at <_n_\> and <_n_\>+1 are set to _value_'.

#### Notes

Each of the _dstore\_<n>_ instructions is the same as _dstore_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `dsub`

#### Operation

Subtract `double`

#### Format

  
_dsub_  

#### Forms

_dsub_ = 103 (0x67)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `double`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `double` _result_ is _value1_' - _value2_'. The _result_ is pushed onto the operand stack.

For `double` subtraction, it is always the case that `a-b` produces the same result as `a+(-b)`. However, for the _dsub_ instruction, subtraction from zero is not the same as negation, because if `x` is `+0.0`, then `0.0-x` equals `+0.0`, but `-x` equals `-0.0`.

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of a _dsub_ instruction never throws a run-time exception.

### `dup`

#### Operation

Duplicate the top operand stack value

#### Format

  
_dup_  

#### Forms

_dup_ = 89 (0x59)

#### Operand Stack

..., _value_ →

..., _value_, _value_

#### Description

Duplicate the top value on the operand stack and push the duplicated value onto the operand stack.

The _dup_ instruction must not be used unless _value_ is a value of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

### `dup_x1`

#### Operation

Duplicate the top operand stack value and insert two values down

#### Format

  
_dup\_x1_  

#### Forms

_dup\_x1_ = 90 (0x5a)

#### Operand Stack

..., _value2_, _value1_ →

..., _value1_, _value2_, _value1_

#### Description

Duplicate the top value on the operand stack and insert the duplicated value two values down in the operand stack.

The _dup\_x1_ instruction must not be used unless both _value1_ and _value2_ are values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

### `dup_x2`

#### Operation

Duplicate the top operand stack value and insert two or three values down

#### Format

  
_dup\_x2_  

#### Forms

_dup\_x2_ = 91 (0x5b)

#### Operand Stack

Form 1:

..., _value3_, _value2_, _value1_ →

..., _value1_, _value3_, _value2_, _value1_

where _value1_, _value2_, and _value3_ are all values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 2:

..., _value2_, _value1_ →

..., _value1_, _value2_, _value1_

where _value1_ is a value of a category 1 computational type and _value2_ is a value of a category 2 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Description

Duplicate the top value on the operand stack and insert the duplicated value two or three values down in the operand stack.

### `dup2`

#### Operation

Duplicate the top one or two operand stack values

#### Format

  
_dup2_  

#### Forms

_dup2_ = 92 (0x5c)

#### Operand Stack

Form 1:

..., _value2_, _value1_ →

..., _value2_, _value1_, _value2_, _value1_

where both _value1_ and _value2_ are values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 2:

..., _value_ →

..., _value_, _value_

where _value_ is a value of a category 2 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Description

Duplicate the top one or two values on the operand stack and push the duplicated value or values back onto the operand stack in the original order.

### `dup2_x1`

#### Operation

Duplicate the top one or two operand stack values and insert two or three values down

#### Format

  
_dup2\_x1_  

#### Forms

_dup2\_x1_ = 93 (0x5d)

#### Operand Stack

Form 1:

..., _value3_, _value2_, _value1_ →

..., _value2_, _value1_, _value3_, _value2_, _value1_

where _value1_, _value2_, and _value3_ are all values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 2:

..., _value2_, _value1_ →

..., _value1_, _value2_, _value1_

where _value1_ is a value of a category 2 computational type and _value2_ is a value of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Description

Duplicate the top one or two values on the operand stack and insert the duplicated values, in the original order, one value beneath the original value or values in the operand stack.

### `dup2_x2`

#### Operation

Duplicate the top one or two operand stack values and insert two, three, or four values down

#### Format

  
_dup2\_x2_  

#### Forms

_dup2\_x2_ = 94 (0x5e)

#### Operand Stack

Form 1:

..., _value4_, _value3_, _value2_, _value1_ →

..., _value2_, _value1_, _value4_, _value3_, _value2_, _value1_

where _value1_, _value2_, _value3_, and _value4_ are all values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 2:

..., _value3_, _value2_, _value1_ →

..., _value1_, _value3_, _value2_, _value1_

where _value1_ is a value of a category 2 computational type and _value2_ and _value3_ are both values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 3:

..., _value3_, _value2_, _value1_ →

..., _value2_, _value1_, _value3_, _value2_, _value1_

where _value1_ and _value2_ are both values of a category 1 computational type and _value3_ is a value of a category 2 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 4:

..., _value2_, _value1_ →

..., _value1_, _value2_, _value1_

where _value1_ and _value2_ are both values of a category 2 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Description

Duplicate the top one or two values on the operand stack and insert the duplicated values, in the original order, into the operand stack.

### `f2d`

#### Operation

Convert `float` to `double`

#### Format

  
_f2d_  

#### Forms

_f2d_ = 141 (0x8d)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. Then _value_' is converted to a `double` _result_. This _result_ is pushed onto the operand stack.

#### Notes

Where an _f2d_ instruction is FP-strict ([§2.8.2](jvms-2.html#jvms-2.8.2 "2.8.2. Floating-Point Modes")) it performs a widening primitive conversion (JLS §5.1.2). Because all values of the float value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")) are exactly representable by values of the double value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")), such a conversion is exact.

Where an _f2d_ instruction is not FP-strict, the result of the conversion may be taken from the double-extended-exponent value set; it is not necessarily rounded to the nearest representable value in the double value set. However, if the operand _value_ is taken from the float-extended-exponent value set and the target result is constrained to the double value set, rounding of _value_ may be required.

### `f2i`

#### Operation

Convert `float` to `int`

#### Format

  
_f2i_  

#### Forms

_f2i_ = 139 (0x8b)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. Then _value_' is converted to an `int` _result_. This _result_ is pushed onto the operand stack:

*   If the _value_' is NaN, the _result_ of the conversion is an `int` 0.
    
*   Otherwise, if the _value_' is not an infinity, it is rounded to an integer value V, rounding towards zero using IEEE 754 round towards zero mode. If this integer value V can be represented as an `int`, then the _result_ is the `int` value V.
    
*   Otherwise, either the _value_' must be too small (a negative value of large magnitude or negative infinity), and the _result_ is the smallest representable value of type <code class="literal">int, or the _value_' must be too large (a positive value of large magnitude or positive infinity), and the _result_ is the largest representable value of type `int`.

#### Notes

The _f2i_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_' and may also lose precision.

### `f2l`

#### Operation

Convert `float` to `long`

#### Format

  
_f2l_  

#### Forms

_f2l_ = 140 (0x8c)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. Then _value_' is converted to a `long` _result_. This _result_ is pushed onto the operand stack:

*   If the _value_' is NaN, the result of the conversion is a `long` 0.
    
*   Otherwise, if the _value_' is not an infinity, it is rounded to an integer value V, rounding towards zero using IEEE 754 round towards zero mode. If this integer value V can be represented as a `long`, then the _result_ is the `long` value V.
    
*   Otherwise, either the _value_' must be too small (a negative value of large magnitude or negative infinity), and the _result_ is the smallest representable value of type `long`, or the _value_' must be too large (a positive value of large magnitude or positive infinity), and the _result_ is the largest representable value of type `long`.
    

#### Notes

The _f2l_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_' and may also lose precision.

### `fadd`

#### Operation

Add `float`

#### Format

  
_fadd_  

#### Forms

_fadd_ = 98 (0x62)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `float` _result_ is _value1_' + _value2_'. The _result_ is pushed onto the operand stack.

The result of an _fadd_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   The sum of two infinities of opposite sign is NaN.
    
*   The sum of two infinities of the same sign is the infinity of that sign.
    
*   The sum of an infinity and any finite value is equal to the infinity.
    
*   The sum of two zeroes of opposite sign is positive zero.
    
*   The sum of two zeroes of the same sign is the zero of that sign.
    
*   The sum of a zero and a nonzero finite value is equal to the nonzero value.
    
*   The sum of two nonzero finite values of the same magnitude and opposite sign is positive zero.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN and the values have the same sign or have different magnitudes, the sum is computed and rounded to the nearest representable value using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `float`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `float`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of an _fadd_ instruction never throws a run-time exception.

### `faload`

#### Operation

Load `float` from array

#### Format

  
_faload_  

#### Forms

_faload_ = 48 (0x30)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `float`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `float` value in the component of the array at _index_ is retrieved and pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _faload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _faload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `fastore`

#### Operation

Store into `float` array

#### Format

  
_fastore_  

#### Forms

_fastore_ = 81 (0x51)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `float`. The _index_ must be of type `int`, and the _value_ must be of type `float`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `float` _value_ undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_', and _value_' is stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _fastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _fastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `fcmp<op>`

#### Operation

Compare `float`

#### Format

  
_fcmp<op>_  

#### Forms

_fcmpg_ = 150 (0x96)

_fcmpl_ = 149 (0x95)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. A floating-point comparison is performed:

*   If _value1_' is greater than _value2_', the `int` value 1 is pushed onto the operand stack.
    
*   Otherwise, if _value1_' is equal to _value2_', the `int` value 0 is pushed onto the operand stack.
    
*   Otherwise, if _value1_' is less than _value2_', the `int` value -1 is pushed onto the operand stack.
    
*   Otherwise, at least one of _value1_' or _value2_' is NaN. The _fcmpg_ instruction pushes the `int` value 1 onto the operand stack and the _fcmpl_ instruction pushes the `int` value -1 onto the operand stack.
    

Floating-point comparison is performed in accordance with IEEE 754. All values other than NaN are ordered, with negative infinity less than all finite values and positive infinity greater than all finite values. Positive zero and negative zero are considered equal.

#### Notes

The _fcmpg_ and _fcmpl_ instructions differ only in their treatment of a comparison involving NaN. NaN is unordered, so any `float` comparison fails if either or both of its operands are NaN. With both _fcmpg_ and _fcmpl_ available, any `float` comparison may be compiled to push the same _result_ onto the operand stack whether the comparison fails on non-NaN values or fails because it encountered a NaN. For more information, see [§3.5](jvms-3.html#jvms-3.5 "3.5. More Control Examples").

### `fconst_<f>`

#### Operation

Push `float`

#### Format

  
_fconst\_<f>_  

#### Forms

_fconst\_0_ = 11 (0xb)

_fconst\_1_ = 12 (0xc)

_fconst\_2_ = 13 (0xd)

#### Operand Stack

... →

..., <_f_\>

#### Description

Push the `float` constant <_f_\> (0.0, 1.0, or 2.0) onto the operand stack.

### `fdiv`

#### Operation

Divide `float`

#### Format

  
_fdiv_  

#### Forms

_fdiv_ = 110 (0x6e)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `float` _result_ is _value1_' / _value2_'. The _result_ is pushed onto the operand stack.

The result of an _fdiv_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result is positive if both values have the same sign, negative if the values have different signs.
    
*   Division of an infinity by an infinity results in NaN.
    
*   Division of an infinity by a finite value results in a signed infinity, with the sign-producing rule just given.
    
*   Division of a finite value by an infinity results in a signed zero, with the sign-producing rule just given.
    
*   Division of a zero by a zero results in NaN; division of zero by any other finite value results in a signed zero, with the sign-producing rule just given.
    
*   Division of a nonzero finite value by a zero results in a signed infinity, with the sign-producing rule just given.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN, the quotient is computed and rounded to the nearest `float` using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `float`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `float`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, division by zero, or loss of precision may occur, execution of an _fdiv_ instruction never throws a run-time exception.

### `fload`

#### Operation

Load `float` from local variable

#### Format

  
_fload_  
_index_  

#### Forms

_fload_ = 23 (0x17)

#### Operand Stack

... →

..., _value_

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at _index_ must contain a `float`. The _value_ of the local variable at _index_ is pushed onto the operand stack.

#### Notes

The _fload_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `fload_<n>`

#### Operation

Load `float` from local variable

#### Format

  
_fload\_<n>_  

#### Forms

_fload\_0_ = 34 (0x22)

_fload\_1_ = 35 (0x23)

_fload\_2_ = 36 (0x24)

_fload\_3_ = 37 (0x25)

#### Operand Stack

... →

..., _value_

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at <_n_\> must contain a `float`. The _value_ of the local variable at <_n_\> is pushed onto the operand stack.

#### Notes

Each of the _fload\_<n>_ instructions is the same as _fload_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `fmul`

#### Operation

Multiply `float`

#### Format

  
_fmul_  

#### Forms

_fmul_ = 106 (0x6a)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `float` _result_ is _value1_' \* _value2_'. The _result_ is pushed onto the operand stack.

The result of an _fmul_ instruction is governed by the rules of IEEE arithmetic:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result is positive if both values have the same sign, and negative if the values have different signs.
    
*   Multiplication of an infinity by a zero results in NaN.
    
*   Multiplication of an infinity by a finite value results in a signed infinity, with the sign-producing rule just given.
    
*   In the remaining cases, where neither an infinity nor NaN is involved, the product is computed and rounded to the nearest representable value using IEEE 754 round to nearest mode. If the magnitude is too large to represent as a `float`, we say the operation overflows; the result is then an infinity of appropriate sign. If the magnitude is too small to represent as a `float`, we say the operation underflows; the result is then a zero of appropriate sign.
    

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of an _fmul_ instruction never throws a run-time exception.

### `fneg`

#### Operation

Negate `float`

#### Format

  
_fneg_  

#### Forms

_fneg_ = 118 (0x76)ass="title">Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The `float` _result_ is the arithmetic negation of _value_'. This _result_ is pushed onto the operand stack.

For `float` values, negation is not the same as subtraction from zero. If `x` is `+0.0`, then `0.0-x` equals `+0.0`, but `-x` equals `-0.0`. Unary minus merely inverts the sign of a `float`.

Special cases of interest:

*   If the operand is NaN, the result is NaN (recall that NaN has no sign).
    
*   If the operand is an infinity, the result is the infinity of opposite sign.
    
*   If the operand is a zero, the result is the zero of opposite sign.
    

### `frem`

#### Operation

Remainder `float`

#### Format

  
_frem_  

#### Forms

_frem_ = 114 (0x72)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The _result_ is calculated and pushed onto the operand stack as a `float`.

The _result_ of an _frem_ instruction is not the same as that of the so-called remainder operation defined by IEEE 754. The IEEE 754 "remainder" operation computes the remainder from a rounding division, not a truncating division, and so its behavior is _not_ analogous to that of the usual integer remainder operator. Instead, the Java Virtual Machine defines _frem_ to behave in a manner analogous to that of the Java Virtual Machine integer remainder instructions (_irem_ and _lrem_); this may be compared with the C library function `fmod`.

The result of an _frem_ instruction is governed by these rules:

*   If either _value1_' or _value2_' is NaN, the result is NaN.
    
*   If neither _value1_' nor _value2_' is NaN, the sign of the result equals the sign of the dividend.
    
*   If the dividend is an infinity or the divisor is a zero or both, the result is NaN.
    
*   If the dividend is finite and the divisor is an infinity, the result equals the dividend.
    
*   If the dividend is a zero and the divisor is finite, the result equals the dividend.
    
*   In the remaining cases, where neither operand is an infinity, a zero, or NaN, the floating-point remainder _result_ from a dividend _value1_' and a divisor _value2_' is defined by the mathematical relation _result_ = _value1_' - (_value2_' \* _q_), where _q_ is an integer that is negative only if _value1_' / _value2_' is negative and positive only if _value1_' / _value2_' is positive, and whose magnitude is as large as possible without exceeding the magnitude of the true mathematical quotient of _value1_' and _value2_'.
    

Despite the fact that division by zero may occur, evaluation of an _frem_ instruction never throws a run-time exception. Overflow, underflow, or loss of precision cannot occur.

#### Notes

The IEEE 754 remainder operation may be computed by the library routine `Math.IEEEremainder`.

### `freturn`

#### Operation

Return `float` from method

#### Format

  
_freturn_  

#### Forms

_freturn_ = 174 (0xae)

#### Operand Stack

..., _value_ →

\[empty\]

#### Description

The current method must have return type `float`. The _value_ must be of type `float`. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, _value_ is popped from the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The _value_' is pushed onto the operand stack of the frame of the invoker. Any other values on the operand stack of the current method are discarded.

The interpreter then returns control to the invoker of the method, reinstating the frame of the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _freturn_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is synchronized.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _freturn_ throws an `IllegalMonitorStateException`.

### `fstore`

#### Operation

Store `float` into local variable

#### Format

  
_fstore_  
_index_  

#### Forms

_fstore_ = 56 (0x38)

#### Operand Stack

..., _value_ →

...

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The value of the local variable at _index_ is set to _value_'.

#### Notes

The _fstore_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `fstore_<n>`

#### Operation

Store `float` into local variable

#### Format

  
_fstore\_<n>_  

#### Forms

_fstore\_0_ = 67 (0x43)

_fstore\_1_ = 68 (0x44)

_fstore\_2_ = 69 (0x45)

_fstore\_3_ = 70 (0x46)

#### Operand Stack

..., _value_ →

...

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `float`. It is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The value of the local variable at <_n_\> is set to _value_'.

#### Notes

Each of the _fstore\_<n>_ instructions is the same as _fstore_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `fsub`

#### Operation

Subtract `float`

#### Format

  
_fsub_  

#### Forms

_fsub_ = 102 (0x66)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `float`. The values are popped from the operand stack and undergo value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value1_' and _value2_'. The `float` _result_ is _value1_' - _value2_'. The _result_ is pushed onto the operand stack.

For `float` subtraction, it is always the case that `a-b` produces the same result as `a+(-b)`. However, for the _fsub_ instruction, subtraction from zero is not the same as negation, because if `x` is `+0.0`, then `0.0-x` equals `+0.0`, but `-x` equals `-0.0`.

The Java Virtual Machine requires support of gradual underflow as defined by IEEE 754. Despite the fact that overflow, underflow, or loss of precision may occur, execution of an _fsub_ instruction never throws a run-time exception.

### `getfield`

#### Operation

Fetch field from object

#### Format

  
_getfield_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_getfield_ = 180 (0xb4)

#### Operand Stack

..., _objectref_ →

..., _value_

#### Description

The _objectref_, which must be of type `reference`, is popped from the operand stack. The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a field ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor of the field as well as a symbolic reference to the class in which the field is to be found. The referenced field is resolved ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")). The _value_ of the referenced field in _objectref_ is fetched and pushed onto the operand stack.

The type of _objectref_ must not be an array type. If the field is `protected`, and it is a member of a superclass of the current class, and the field is not declared in the same run-time package ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) as the current class, then the class of _objectref_ must be either the current class or a subclass of the current class.

#### Linking Exceptions

During resolution of the symbolic reference to the field, any of the errors pertaining to field resolution ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")) can be thrown.

Otherwise, if the resolved field is a `static` field, _getfield_ throws an `IncompatibleClassChangeError`.

#### Run-time Exception

Otherwise, if _objectref_ is `null`, the _getfield_ instruction throws a `NullPointerException`.

#### Notes

The _getfield_ instruction cannot be used to access the `length` field of an array. The _arraylength_ instruction ([§_arraylength_](jvms-6.html#jvms-6.5.arraylength "arraylength")) is used instead.

### `getstatic`

#### Operation

Get `static` field from class

#### Format

  
_getstatic_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_getstatic_ = 178 (0xb2)

#### Operand Stack

..., →

..., _value_

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a field ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor of the field as well as a symbolic reference to the class or interface in which the field is to be found. The referenced field is resolved ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")).

On successful resolution of the field, the class or interface that declared the resolved field is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")) if that class or interface has not already been initialized.

The _value_ of the class or interface field is fetched and pushed onto the operand stack.

#### Linking Exceptions

During resolution of the symbolic reference to the class or interface field, any of the exceptions pertaining to field resolution ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")) can be thrown.

Otherwise, if the resolved field is not a `static` (class) field or an interface field, _getstatic_ throws an `IncompatibleClassChangeError`.

#### Run-time Exception

Otherwise, if execution of this _getstatic_ instruction causes initialization of the referenced class or interface, _getstatic_ may throw an `Error` as detailed in [§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization").

### `goto`

#### Operation

Branch always

#### Format

  
_goto_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_goto_ = 167 (0xa7)

#### Operand Stack

No change

#### Description

The unsigned bytes _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit _branchoffset_, where _branchoffset_ is (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution proceeds at that offset from the address of the opcode of this _goto_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _goto_ instruction.

### `goto_w`

#### Operation

Branch always (wide index)

#### Format

  
_goto\_w_  
_branchbyte1_  
_branchbyte2_  
_branchbyte3_  
_branchbyte4_  

#### Forms

_goto\_w_ = 200 (0xc8)

#### Operand Stack

No change

#### Description

The unsigned bytes _branchbyte1_, _branchbyte2_, _branchbyte3_, and _branchbyte4_ are used to construct a signed 32-bit _branchoffset_, where _branchoffset_ is (_branchbyte1_ `<<` 24) | (_branchbyte2_ `<<` 16) | (_branchbyte3_ `<<` 8) | _branchbyte4_. Execution proceeds at that offset from the address of the opcode of this _goto\_w_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _goto\_w_ instruction.

#### Notes

Although the _goto\_w_ instruction takes a 4-byte branch offset, other factors limit the size of a method to 65535 bytes ([§4.11](jvms-4.html#jvms-4.11 "4.11. Limitations of the Java Virtual Machine")). This limit may be raised in a future release of the Java Virtual Machine.

### `i2b`

#### Operation

Convert `int` to `byte`

#### Format

  
_i2b_  

#### Forms

_i2b_ = 145 (0x91)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack, truncated to a `byte`, then sign-extended to an `int` _result_. That _result_ is pushed onto the operand stack.

#### Notes

The _i2b_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_. The _result_ may also not have the same sign as _value_.

### `i2c`

#### Operation

Convert `int` to `char`

#### Format

_i2c_

#### Forms

_i2c_ = 146 (0x92)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack, truncated to `char`, then zero-extended to an `int` _result_. That _result_ is pushed onto the operand stack.

#### Notes

The _i2c_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_. The _result_ (which is always positive) may also not have the same sign as _value_.

### `i2d`

#### Operation

Convert `int` to `double`

#### Format

  
_i2d_  

#### Forms

_i2d_ = 135 (0x87)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack and converted to a `double` _result_. The _result_ is pushed onto the operand stack.

#### Notes

The _i2d_ instruction performs a widening primitive conversion (JLS §5.1.2). Because all values of type `int` are exactly representable by type `double`, the conversion is exact.

### `i2f`

#### Operation

Convert `int` to `float`

#### Format

  
_i2f_  

#### Forms

_i2f_ = 134 (0x86)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack and converted to the `float` _result_ using IEEE 754 round to nearest mode. The _result_ is pushed onto the operand stack.

#### Notes

The _i2f_ instruction performs a widening primitive conversion (JLS §5.1.2), but may result in a loss of precision because values of type `float` have only 24 significand bits.

### `i2l`

#### Operation

Convert `int` to `long`

#### Format

  
_i2l_  

#### Forms

_i2l_ = 133 (0x85)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack and sign-extended to a `long` _result_. That _result_ is pushed onto the operand stack.

#### Notes

The _i2l_ instruction performs a widening primitive conversion (JLS §5.1.2). Because all values of type `int` are exactly representable by type `long`, the conversion is exact.

### `i2s`

#### Operation

Convert `int` to `short`

#### Format

  
_i2s_  

#### Forms

_i2s_ = 147 (0x93)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack, truncated to a `short`, then sign-extended to an `int` _result_. That _result_ is pushed onto the operand stack.

#### Notes

The _i2s_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_. The _result_ may also not have the same sign as _value_.

### `iadd`

#### Operation

Add `int`

#### Format

  
_iadd_  

#### Forms

_iadd_ = 96 (0x60)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. The `int` _result_ is _value1_ + _value2_. The _result_ is pushed onto the operand stack.

The result is the 32 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `int`. If overflow occurs, then the sign of the result may not be the same as the sign of the mathematical sum of the two values.

Despite the fact that overflow may occur, execution of an _iadd_ instruction never throws a run-time exception.

### `iaload`

#### Operation

Load `int` from array

#### Format

  
_iaload_  

#### Forms

_iaload_ = 46 (0x2e)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `int`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `int` _value_ in the component of the array at _index_ is retrieved and pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _iaload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _iaload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `iand`

#### Operation

Boolean AND `int`

#### Format

  
_iand_  

#### Forms

_iand_ = 126 (0x7e)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. They are popped from the operand stack. An `int` _result_ is calculated by taking the bitwise AND (conjunction) of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `iastore`

#### Operation

Store into `int` array

#### Format

  
_iastore_  

#### Forms

_iastore_ = 79 (0x4f)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `int`. Both _index_ and _value_ must be of type `int`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `int` _value_ is stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _iastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _iastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `iconst_<i>`

#### Operation

Push `int` constant

#### Format

  
_iconst\_<i>_  

#### Forms

_iconst\_m1_ = 2 (0x2)

_iconst\_0_ = 3 (0x3)

_iconst\_1_ = 4 (0x4)

_iconst\_2_ = 5 (0x5)

_iconst\_3_ = 6 (0x6)

_iconst\_4_ = 7 (0x7)

_iconst\_5_ = 8 (0x8)

#### Operand Stack

... →

..., <_i_\>

#### Description

Push the `int` constant <_i_\> (-1, 0, 1, 2, 3, 4 or 5) onto the operand stack.

#### Notes

Each of this family of instructions is equivalent to _bipush_ <_i_\> for the respective value of <_i_\>, except that the operand <_i_\> is implicit.

### `idiv`

#### Operation

Divide `int`

#### Format

  
_idiv_  

#### Forms

_idiv_ = 108 (0x6c)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. The `int` _result_ is the value of the Java programming language expression _value1_ / _value2_. The _result_ is pushed onto the operand stack.

An `int` division rounds towards 0; that is, the quotient produced for `int` values in _n_/_d_ is an `int` value _q_ whose magnitude is as large as possible while satisfying |_d_ ⋅ _q_| ≤ |_n_|. Moreover, _q_ is positive when |_n_| ≥ |_d_| and _n_ and _d_ have the same sign, but _q_ is negative when |_n_| ≥ |_d_| and _n_ and _d_ have opposite signs.

There is one special case that does not satisfy this rule: if the dividend is the negative integer of largest possible magnitude for the `int` type, and the divisor is -1, then overflow occurs, and the result is equal to the dividend. Despite the overflow, no exception is thrown in this case.

#### Run-time Exception

If the value of the divisor in an `int` division is 0, _idiv_ throws an `ArithmeticException`.

### `if_acmp<cond>`

#### Operation

Branch if `reference` comparison succeeds

#### Format

  
_if\_acmp<cond>_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_if\_acmpeq_ = 165 (0xa5)

_if\_acmpne_ = 166 (0xa6)

#### Operand Stack

..., _value1_, _value2_ →

...

#### Description

Both _value1_ and _value2_ must be of type `reference`. They are both popped from the operand stack and compared. The results of the comparison are as follows:

*   _if\_acmpeq_ succeeds if and only if _value1_ = _value2_
    
*   _if\_acmpne_ succeeds if and only if _value1_ ≠ _value2_
    

If the comparison succeeds, the unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is calculated to be (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution then proceeds at that offset from the address of the opcode of this _if\_acmp<cond>_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _if\_acmp<cond>_ instruction.

Otherwise, if the comparison fails, execution proceeds at the address of the instruction following this _if\_acmp<cond>_ instruction.

### `if_icmp<cond>`

#### Operation

Branch if `int` comparison succeeds

#### Format

  
_if\_icmp<cond>_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_if\_icmpeq_ = 159 (0x9f)

_if\_icmpne_ = 160 (0xa0)

_if\_icmplt_ = 161 (0xa1)

_if\_icmpge_ = 162 (0xa2)

_if\_icmpgt_ = 163 (0xa3)

_if\_icmple_ = 164 (0xa4)

#### Operand Stack

..., _value1_, _value2_ →

...

#### Description

Both _value1_ and _value2_ must be of type `int`. They are both popped from the operand stack and compared. All comparisons are signed. The results of the comparison are as follows:

*   _if\_icmpeq_ succeeds if and only if _value1_ = _value2_
    
*   _if\_icmpne_ succeeds if and only if _value1_ ≠ _value2_
    
*   _if\_icmplt_ succeeds if and only if _value1_ < _value2_
    
*   _if\_icmple_ succeeds if and only if _value1_ ≤ _value2_
    
*   _if\_icmpgt_ succeeds if and only if _value1_ > _value2_
    
*   _if\_icmpge_ succeeds if and only if _value1_ ≥ _value2_
    

If the comparison succeeds, the unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is calculated to be (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution then proceeds at that offset from the address of the opcode of this _if\_icmp<cond>_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _if\_icmp<cond>_ instruction.

Otherwise, execution proceeds at the address of the instruction following this _if\_icmp<cond>_ instruction.

### `if<cond>`

#### Operation

Branch if `int` comparison with zero succeeds

#### Format

  
_if<cond>_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_ifeq_ = 153 (0x99)_ifne_ = 154 (0x9a)

_iflt_ = 155 (0x9b)

_ifge_ = 156 (0x9c)

_ifgt_ = 157 (0x9d)

_ifle_ = 158 (0x9e)

#### Operand Stack

..., _value_ →

...

#### Description

The _value_ must be of type `int`. It is popped from the operand stack and compared against zero. All comparisons are signed. The results of the comparisons are as follows:

*   _ifeq_ succeeds if and only if _value_ = 0
    
*   _ifne_ succeeds if and only if _value_ ≠ 0
    
*   _iflt_ succeeds if and only if _value_ < 0
    
*   _ifle_ succeeds if and only if _value_ ≤ 0
    
*   _ifgt_ succeeds if and only if _value_ > 0
    
*   _ifge_ succeeds if and only if _value_ ≥ 0
    

If the comparison succeeds, the unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is calculated to be (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution then proceeds at that offset from the address of the opcode of this _if<cond>_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _if<cond>_ instruction.

Otherwise, execution proceeds at the address of the instruction following this _if<cond>_ instruction.

### `ifnonnull`

#### Operation

Branch if `reference` not `null`

#### Format

  
_ifnonnull_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_ifnonnull_ = 199 (0xc7)

#### Operand Stack

..., _value_ →

...

#### Description

The _value_ must be of type `reference`. It is popped from the operand stack. If _value_ is not `null`, the unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is calculated to be (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution then proceeds at that offset from the address of the opcode of this _ifnonnull_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _ifnonnull_ instruction.

Otherwise, execution proceeds at the address of the instruction following this _ifnonnull_ instruction.

### `ifnull`

#### Operation

Branch if `reference` is `null`

#### Format

  
_ifnull_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_ifnull_ = 198 (0xc6)

#### Operand Stack

..., _value_ →

...

#### Description

The _value_ must of type `reference`. It is popped from the operand stack. If _value_ is `null`, the unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is calculated to be (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution then proceeds at that offset from the address of the opcode of this _ifnull_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _ifnull_ instruction.

Otherwise, execution proceeds at the address of the instruction following this _ifnull_ instruction.

### `iinc`

#### Operation

Increment local variable by constant

#### Format

  
_iinc_  
_index_  
_const_  

#### Forms

_iinc_ = 132 (0x84)

#### Operand Stack

No change

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _const_ is an immediate signed byte. The local variable at _index_ must contain an `int`. The value _const_ is first sign-extended to an `int`, and then the local variable at _index_ is incremented by that amount.

#### Notes

The _iinc_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index and to increment it by a two-byte immediate signed value.

### `iload`

#### Operation

Load `int` from local variable

#### Format

  
_iload_  
_index_  

#### Forms

_iload_ = 21 (0x15)

#### Operand Stack

... →

..., _value_

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at _index_ must contain an `int`. The _value_ of the local variable at _index_ is pushed onto the operand stack.

#### Notes

The _iload_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `iload_<n>`

#### Operation

Load `int` from local variable

#### Format

  
_iload\_<n>_  

#### Forms

_iload\_0_ = 26 (0x1a)

_iload\_1_ = 27 (0x1b)

_iload\_2_ = 28 (0x1c)

_iload\_3_ = 29 (0x1d)

#### Operand Stack

... →

..., _value_

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at <_n_\> must contain an `int`. The _value_ of the local variable at <_n_\> is pushed onto the operand stack.

#### Notes

Each of the _iload\_<n>_ instructions is the same as _iload_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `imul`

#### Operation

Multiply `int`

#### Format

  
_imul_  

#### Forms

_imul_ = 104 (0x68)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. The `int` _result_ is _value1_ \* _value2_. The _result_ is pushed onto the operand stack.

The result is the 32 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `int`. If overflow occurs, then the sign of the result may not be the same as the sign of the mathematical multiplication of the two values.

Despite the fact that overflow may occur, execution of an _imul_ instruction never throws a run-time exception.

### `ineg`

#### Operation

Negate `int`

#### Format

  
_ineg_  

#### Forms

_ineg_ = 116 (0x74)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ must be of type `int`. It is popped from the operand stack. The `int` _result_ is the arithmetic negation of _value_, -_value_. The _result_ is pushed onto the operand stack.

For `int` values, negation is the same as subtraction from zero. Because the Java Virtual Machine uses two's-complement representation for integers and the range of two's-complement values is not symmetric, the negation of the maximum negative `int` results in that same maximum negative number. Despite the fact that overflow has occurred, no exception is thrown.

For all `int` values `x`, `-x` equals `(~x)+1`.

### `instanceof`

#### Operation

Determine if object is of given type

#### Format

  
_instanceof_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_instanceof_ = 193 (0xc1)

#### Operand Stack

..., _objectref_ →

..., _result_

#### Description

The _objectref_, which must be of type `reference`, is popped from the operand stack. The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at the index must be a symbolic reference to a class, array, or interface type.

If _objectref_ is `null`, the _instanceof_ instruction pushes an `int` _result_ of 0 as an `int` on the operand stack.

Otherwise, the named class, array, or interface type is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). If _objectref_ is an instance of the resolved class or array or implements the resolved interface, the _instanceof_ instruction pushes an `int` _result_ of 1 as an `int` on the operand stack; otherwise, it pushes an `int` _result_ of 0.

The following rules are used to determine whether an _objectref_ that is not `null` is an instance of the resolved type: If S is the class of the object referred to by _objectref_ and T is the resolved class, array, or interface type, _instanceof_ determines whether _objectref_ is an instance of T as follows:

*   If S is an ordinary (nonarray) class, then:
    
    *   If T is a class type, then S must be the same class as T, or S must be a subclass of T;
        
    *   If T is an interface type, then S must implement interface T.
        
    
*   If S is an interface type, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be the same interface as S or a superinterface of S.
        
    
*   If S is a class representing the array type SC`[]`, that is, an array of components of type SC, then:
    
    *   If T is a class type, then T must be `Object`.
        
    *   If T is an interface type, then T must be one of the interfaces implemented by arrays (JLS §4.10.3).
        
    *   If T is an array type TC`[]`, that is, an array of components of type TC, then one of the following must be true:
        
        *   TC and SC are the same primitive type.
            
        *   TC and SC are reference types, and type SC can be cast to TC by these run-time rules.
            
        
    

#### Linking Exceptions

During resolution of the symbolic reference to the class, array, or interface type, any of the exceptions documented in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") can be thrown.

#### Notes

The _instanceof_ instruction is very similar to the _checkcast_ instruction ([§_checkcast_](jvms-6.html#jvms-6.5.checkcast "checkcast")). It differs in its treatment of `null`, its behavior when its test fails (_checkcast_ throws an exception, _instanceof_ pushes a result code), and its effect on the operand stack.

### `invokedynamic`

#### Operation

Invoke dynamic method

#### Format

  
_invokedynamic_  
_indexbyte1_  
_indexbyte2_  
_0_  
_0_  

#### Forms

_invokedynamic_ = 186 (0xba)

#### Operand Stack

..., \[_arg1_, \[_arg2_ ...\]\] →

...

#### Description

Each specific lexical occurrence of an _invokedynamic_ instruction is called a _dynamic call site_.

First, the unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a call site specifier ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")). The values of the third and fourth operand bytes must always be zero.

The call site specifier is resolved ([§5.4.3.6](jvms-5.html#jvms-5.4.3.6 "5.4.3.6. Call Site Specifier Resolution")) _for this specific dynamic call site_ to obtain a `reference` to a `java.lang.invoke.MethodHandle` instance that will serve as the bootstrap method, a `reference` to a `java.lang.invoke.MethodType` instance, and `reference`s to static arguments.

Next, as part of the continuing resolution of the call site specifier, the bootstrap method is invoked as if by execution of an _invokevirtual_ instruction ([§_invokevirtual_](jvms-6.html#jvms-6.5.invokevirtual "invokevirtual")) that contains a run-time constant pool index to a symbolic reference R where:

*   R is a symbolic reference to a method of a class ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool"));
    
*   for the symbolic reference to the class in which the method is to be found, R specifies `java.lang.invoke.MethodHandle`;
    
*   for the name of the method, R specifies `invoke`;
    
*   for the descriptor of the method, R specifies a return type of `java.lang.invoke.CallSite` and parameter types derived from the items pushed on the operand stack.
    
    The first three parameter types are `java.lang.invoke.MethodHandles.Lookup`, `String`, and `java.lang.invoke.MethodType`, in that order. If the call site specifier has any static arguments, then a parameter type for each argument is appended to the parameter types of the method descriptor in the order that the arguments were pushed on to the operand stack. These parameter types may be `Class`, `java.lang.invoke.MethodHandle`, `java.lang.invoke.MethodType`, `String`, `int`, `long`, `float`, or `double`.
    

and where it is as if the following items were pushed, in order, on the operand stack:

*   the `reference` to the `java.lang.invoke.MethodHandle` object for the bootstrap method;
    
*   a `reference` to a `java.lang.invoke.MethodHandles.Lookup` object for the class in which this dynamic call site occurs;
    
*   a `reference` to the `String` for the method name in the call site specifier;
    
*   the `reference` to the `java.lang.invoke.MethodType` object obtained for the method descriptor in the call site specifier;
    
*   `reference`s to classes, method types, method handles, and string literals denoted as static arguments in the call site specifier, and numeric values ([§2.3.1](jvms-2.html#jvms-2.3.1 "2.3.1. Integral Types and Values"), [§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")) denoted as static arguments in the call site specifier, in the order in which they appear in the call site specifier. (That is, no boxing occurs for primitive values.)
    

The symbolic reference R describes a method which is signature polymorphic ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")). Due to the operation of _invokevirtual_ on a signature polymorphic method called `invoke`, the type descriptor of the receiving method handle (representing the bootstrap method) need not be semantically equal to the method descriptor specified by R. For example, the first parameter type specified by R could be `Object` instead of `java.lang.invoke.MethodHandles.Lookup`, and the return type specified by R could be `Object` instead of `java.lang.invoke.CallSite`. As long as the bootstrap method can be invoked by the `invoke` method without a `java.lang.invoke.WrongMethodTypeException` being thrown, the type descriptor of the method handle which represents the bootstrap method is arbitrary.

If the bootstrap method is a variable arity method, then some or all of the arguments on the operand stack specified above may be collected into a trailing array parameter.

The invocation of a bootstrap method occurs within a thread that is attempting resolution of the symbolic reference to the call site specifier _of this dynamic call site_. If there are several such threads, the bootstrap method may be invoked in several threads concurrently. Therefore, bootstrap methods which access global application data must take the usual precautions against race conditions.

The result returned by the bootstrap method must be a `reference` to an object whose class is `java.lang.invoke.CallSite` or a subclass of `java.lang.invoke.CallSite`. This object is known as the _call site object_. The `reference` is popped from the operand stack used as if in the execution of an _invokevirtual_ instruction.

If several threads simultaneously execute the bootstrap method for the same dynamic call site, the Java Virtual Machine must choose one returned call site object and install it visibly to all threads. Any other bootstrap methods executing for the dynamic call site are allowed to complete, but their results are ignored, and the threads' execution of the dynamic call site proceeds with the chosen call site object.

The call site object has a type descriptor (an instance of `java.lang.invoke.MethodType`) which must be semantically equal to the `java.lang.invoke.MethodType` object obtained for the method descriptor in the call site specifier.

The result of successful call site specifier resolution is a call site object which is permanently bound to the dynamic call site.

The method handle represented by the target of the bound call site object is invoked. The invocation occurs as if by execution of an _invokevirtual_ instruction ([§_invokevirtual_](jvms-6.html#jvms-6.5.invokevirtual "invokevirtual")) that indicates a run-time constant pool index to a symbolic reference to a method ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")) with the following properties:

*   The method's name is `invokeExact`;
    
*   The method's descriptor is the method descriptor in the call site specifier; and
    
*   The method's symbolic reference to the class in which the method is to be found indicates the class `java.lang.invoke.MethodHandle`.
    

The operand stack will be interpreted as containing a `reference` to the target of the call site object, followed by _nargs_ argument values, where the number, type, and order of the values must be consistent with the method descriptor in the call site specifier.

#### Linking Exceptions

If resolution of the symbolic reference to the call site specifier throws an exception E, the _invokedynamic_ instruction throws a `BootstrapMethodError` that wraps E.

Otherwise, during the continuing resolution of the call site specifier, if invocation of the bootstrap method completes abruptly ([§2.6.5](jvms-2.html#jvms-2.6.5 "2.6.5. Abrupt Method Invocation Completion")) because of a throw of exception E, the _invokedynamic_ instruction throws a `BootstrapMethodError` that wraps E. (This can occur if the bootstrap method has the wrong arity, parameter type, or return type, causing `java.lang.invoke.MethodHandle` `.` `invoke` to throw `java.lang.invoke.WrongMethodTypeException`.)

Otherwise, during the continuing resolution of the call site specifier, if the result from the bootstrap method invocation is not a `reference` to an instance of `java.lang.invoke.CallSite`, the _invokedynamic_ instruction throws a `BootstrapMethodError`.

Otherwise, during the continuing resolution of the call site specifier, if the type descriptor of the target of the call site object is not semantically equal to the method descriptor in the call site specifier, the _invokedynamic_ instruction throws a `BootstrapMethodError`.

#### Run-time Exceptions

If this specific dynamic call site completed resolution of its call site specifier, it implies that a non-`null` `reference` to an instance of `java.lang.invoke.CallSite` is bound to this dynamic call site. Therefore, the operand stack item which represents a `reference` to the target of the call site object is never `null`. Similarly, it implies that the method descriptor in the call site specifier is semantically equal to the type descriptor of the _method handle to be invoked_ as if by execution of an _invokevirtual_ instruction. Together, these invariants mean that an _invokedynamic_ instruction which is bound to a call site object never throws a `NullPointerException` or a `java.lang.invoke.WrongMethodTypeException`.

### `invokeinterface`

#### Operation

Invoke interface method

#### Format

  
_invokeinterface_  
_indexbyte1_  
_indexbyte2_  
_count_  
_0_  

#### Forms

_invokeinterface_ = 185 (0xb9)

#### Operand Stack

..., _objectref_, \[_arg1_, \[_arg2_ ...\]\] →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to an interface method ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the interface method as well as a symbolic reference to the interface in which the interface method is to be found. The named interface method is resolved ([§5.4.3.4](jvms-5.html#jvms-5.4.3.4 "5.4.3.4. Interface Method Resolution")).

The resolved interface method must not be an instance initialization method, or the class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

The _count_ operand is an unsigned byte that must not be zero. The _objectref_ must be of type `reference` and must be followed on the operand stack by _nargs_ argument values, where the number, type, and order of the values must be consistent with the descriptor of the resolved interface method. The value of the fourth operand byte must always be zero.

Let C be the class of _objectref_. The actual method to be invoked is selected by the following lookup procedure:

1.  If C contains a declaration for an instance method with the same name and descriptor as the resolved method, then it is the method to be invoked.
    
2.  Otherwise, if C has a superclass, a search for a declaration of an instance method with the same name and descriptor as the resolved method is performed, starting with the direct superclass of C and continuing with the direct superclass of that class, and so forth, until a match is found or no further superclasses exist. If a match is found, then it is the method to be invoked.
    
3.  Otherwise, if there is exactly one maximally-specific method ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) in the superinterfaces of C that matches the resolved method's name and descriptor and is not `abstract`, then it is the method to be invoked.
    

If the method is `synchronized`, the monitor associated with _objectref_ is entered or reentered as if by execution of a _monitorenter_ instruction ([§_monitorenter_](jvms-6.html#jvms-6.5.monitorenter "monitorenter")) in the current thread.

If the method is not `native`, the _nargs_ argument values and _objectref_ are popped from the operand stack. A new frame is created on the Java Virtual Machine stack for the method being invoked. The _objectref_ and the argument values are consecutively made the values of local variables of the new frame, with _objectref_ in local variable 0, _arg1_ in local variable 1 (or, if _arg1_ is of type `long` or `double`, in local variables 1 and 2), and so on. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being stored in a local variable. The new frame is then made current, and the Java Virtual Machine `pc` is set to the opcode of the first instruction of the method to be invoked. Execution continues with the first instruction of the method.

If the method is `native` and the platform-dependent code that implements it has not yet been bound ([§5.6](jvms-5.html#jvms-5.6 "5.6. Binding Native Method Implementations")) into the Java Virtual Machine, that is done. The _nargs_ argument values and _objectref_ are popped from the operand stack and are passed as parameters to the code that implements the method. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being passed as a parameter. The parameters are passed and the code is invoked in an implementation-dependent manner. When the platform-dependent code returns:

*   If the `native` method is `synchronized`, the monitor associated with _objectref_ is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread.
    
*   If the `native` method returns a value, the return value of the platform-dependent code is converted in an implementation-dependent way to the return type of the `native` method and pushed onto the operand stack.
    

#### Linking Exceptions

During resolution of the symbolic reference to the interface method, any of the exceptions pertaining to interface method resolution ([§5.4.3.4](jvms-5.html#jvms-5.4.3.4 "5.4.3.4. Interface Method Resolution")) can be thrown.

Otherwise, if the resolved method is `static` or `private`, the _invokeinterface_ instruction throws an `IncompatibleClassChangeError`.

#### Run-time Exceptions

Otherwise, if _objectref_ is `null`, the _invokeinterface_ instruction throws a `NullPointerException`.

Otherwise, if the class of _objectref_ does not implement the resolved interface, _invokeinterface_ throws an `IncompatibleClassChangeError`.

Otherwise, if step 1 or step 2 of the lookup procedure selects a method that is not `public`, _invokeinterface_ throws an `IllegalAccessError`.

Otherwise, if step 1 or step 2 of the lookup procedure selects an `abstract` method, _invokeinterface_ throws an `AbstractMethodError`.

Otherwise, if step 1 or step 2 of the lookup procedure selects a `native` method and the code that implements the method cannot be bound, _invokeinterface_ throws an `UnsatisfiedLinkError`.

Otherwise, if step 3 of the lookup procedure determines there are multiple maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokeinterface_ throws an `IncompatibleClassChangeError`

Otherwise, if step 3 of the lookup procedure determines there are zero maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokeinterface_ throws an `AbstractMethodError`.

#### Notes

The _count_ operand of the _invokeinterface_ instruction records a measure of the number of argument values, where an argument value of type `long` or type `double` contributes two units to the _count_ value and an argument of any other type contributes one unit. This information can also be derived from the descriptor of the selected method. The redundancy is historical.

The fourth operand byte exists to reserve space for an additional operand used in certain of Oracle's Java Virtual Machine implementations, which replace the _invokeinterface_ instruction by a specialized pseudo-instruction at run time. It must be retained for backwards compatibility.

The _nargs_ argument values and _objectref_ are not one-to-one with the first _nargs_+1 local variables. Argument values of types `long` and `double` must be stored in two consecutive local variables, thus more than _nargs_ local variables may be required to pass _nargs_ argument values to the invoked method.

The selection logic allows a non-`abstract` method declared in a superinterface to be selected. Methods in interfaces are only considered if there is no matching method in the class hierarchy. In the event that there are two non-`abstract` methods in the superinterface hierarchy, with neither more specific than the other, an error occurs; there is no attempt to disambiguate (for example, one may be the referenced method and one may be unrelated, but we do not prefer the referenced method). On the other hand, if there are many `abstract` methods but only one non-`abstract` method, the non-`abstract` method is selected (unless an `abstract` method is more specific).

### `invokespecial`

#### Operation

Invoke instance method; special handling for superclass, private, and instance initialization method invocations

#### Format

  
_invokespecial_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_invokespecial_ = 183 (0xb7)

#### Operand Stack

..., _objectref_, \[_arg1_, \[_arg2_ ...\]\] →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a method or an interface method ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the method as well as a symbolic reference to the class or interface in which the method is to be found. The named method is resolved ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution"), [§5.4.3.4](jvms-5.html#jvms-5.4.3.4 "5.4.3.4. Interface Method Resolution")).

If the resolved method is `protected`, and it is a member of a superclass of the current class, and the method is not declared in the same run-time package ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) as the current class, then the class of _objectref_ must be either the current class or a subclass of the current class.

If all of the following are true, let C be the direct superclass of the current class:

*   The resolved method is not an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).
    
*   If the symbolic reference names a class (not an interface), then that class is a superclass of the current class.
    
*   The `ACC_SUPER` flag is set for the `class` file ([§4.1](jvms-4.html#jvms-4.1 "4.1. The ClassFile Structure")).
    

Otherwise, let C be the class or interface named by the symbolic reference.

The actual method to be invoked is selected by the following lookup procedure:

1.  If C contains a declaration for an instance method with the same name and descriptor as the resolved method, then it is the method to be invoked.
    
2.  Otherwise, if C is a class and has a superclass, a search for a declaration of an instance method with the same name and descriptor as the resolved method is performed, starting with the direct superclass of C and continuing with the direct superclass of that class, and so forth, until a match is found or no further superclasses exist. If a match is found, then it is the method to be invoked.
    
3.  Otherwise, if C is an interface and the class `Object` contains a declaration of a `public` instance method with the same name and descriptor as the resolved method, then it is the method to be invoked.
    
4.  Otherwise, if there is exactly one maximally-specific method ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) in the superinterfaces of C that matches the resolved method's name and descriptor and is not `abstract`, then it is the method to be invoked.
    

The _objectref_ must be of type `reference` and must be followed on the operand stack by _nargs_ argument values, where the number, type, and order of the values must be consistent with the descriptor of the selected instance method.

If the method is `synchronized`, the monitor associated with _objectref_ is entered or reentered as if by execution of a _monitorenter_ instruction ([§_monitorenter_](jvms-6.html#jvms-6.5.monitorenter "monitorenter")) in the current thread.

If the method is not `native`, the _nargs_ argument values and _objectref_ are popped from the operand stack. A new frame is created on the Java Virtual Machine stack for the method being invoked. The _objectref_ and the argument values are consecutively made the values of local variables of the new frame, with _objectref_ in local variable 0, _arg1_ in local variable 1 (or, if _arg1_ is of type `long` or `double`, in local variables 1 and 2), and so on. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being stored in a local variable. The new frame is then made current, and the Java Virtual Machine `pc` is set to the opcode of the first instruction of the method to be invoked. Execution continues with the first instruction of the method.

If the method is `native` and the platform-dependent code that implements it has not yet been bound ([§5.6](jvms-5.html#jvms-5.6 "5.6. Binding Native Method Implementations")) into the Java Virtual Machine, that is done. The _nargs_ argument values and _objectref_ are popped from the operand stack and are passed as parameters to the code that implements the method. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being passed as a parameter. The parameters are passed and the code is invoked in an implementation-dependent manner. When the platform-dependent code returns, the following take place:

*   If the `native` method is `synchronized`, the monitor associated with _objectref_ is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread.
    
*   If the `native` method returns a value, the return value of the platform-dependent code is converted in an implementation-dependent way to the return type of the `native` method and pushed onto the operand stack.
    

#### Linking Exceptions

During resolution of the symbolic reference to the method, any of the exceptions pertaining to method resolution ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) can be thrown.

Otherwise, if the resolved method is an instance initialization method, and the class in which it is declared is not the class symbolically referenced by the instruction, a `NoSuchMethodError` is thrown.

Otherwise, if the resolved method is a class (`static`) method, the _invokespecial_ instruction throws an `IncompatibleClassChangeError`.

#### Run-time Exceptions

Otherwise, if _objectref_ is `null`, the _invokespecial_ instruction throws a `NullPointerException`.

Otherwise, if the resolved method is a `protected` method of a superclass of the current class, declared in a different run-time package, and the class of _objectref_ is not the current class or a subclass of the current class, then _invokespecial_ throws an `IllegalAccessError`.

Otherwise, if step 1, step 2, or step 3 of the lookup procedure selects an `abstract` method, _invokespecial_ throws an `AbstractMethodError`.

Otherwise, if step 1, step 2, or step 3 of the lookup procedure selects a `native` method and the code that implements the method cannot be bound, _invokespecial_ throws an `UnsatisfiedLinkError`.

Otherwise, if step 4 of the lookup procedure determines there are multiple maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokespecial_ throws an `IncompatibleClassChangeError`

Otherwise, if step 4 of the lookup procedure determines there are zero maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokespecial_ throws an `AbstractMethodError`.

#### Notes

The difference between the _invokespecial_ instruction and the _invokevirtual_ instruction ([§_invokevirtual_](jvms-6.html#jvms-6.5.invokevirtual "invokevirtual")) is that _invokevirtual_ invokes a method based on the class of the object. The _invokespecial_ instruction is used to invoke instance initialization methods ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) as well as `private` methods and methods of a superclass of the current class.

The _invokespecial_ instruction was named `invokenonvirtual` prior to JDK release 1.0.2.

The _nargs_ argument values and _objectref_ are not one-to-one with the first _nargs_+1 local variables. Argument values of types `long` and `double` must be stored in two consecutive local variables, thus more than _nargs_ local variables may be required to pass _nargs_ argument values to the invoked method.

The _invokespecial_ instruction handles invocation of a `private` interface method, a non-`abstract` interface method referenced via a direct superinterface, and a non-`abstract` interface method referenced via a superclass. In these cases, the rules for selection are essentially the same as those for _invokeinterface_ (except that the search starts from a different class).

### `invokestatic`

#### Operation

Invoke a class (`static`) method

#### Format

  
_invokestatic_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_invokestatic_ = 184 (0xb8)

#### Operand Stack

..., \[_arg1_, \[_arg2_ ...\]\] →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a method or an interface method ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the method as well as a symbolic reference to the class or interface in which the method is to be found. The named method is resolved ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")).

The resolved method must not be an instance initialization method, or the class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

The resolved method must be `static`, and therefore cannot be `abstract`.

On successful resolution of the method, the class or interface that declared the resolved method is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")) if that class or interface has not already been initialized.

The operand stack must contain _nargs_ argument values, where the number, type, and order of the values must be consistent with the descriptor of the resolved method.

If the method is `synchronized`, the monitor associated with the resolved `Class` object is entered or reentered as if by execution of a _monitorenter_ instruction ([§_monitorenter_](jvms-6.html#jvms-6.5.monitorenter "monitorenter")) in the current thread.

If the method is not `native`, the _nargs_ argument values are popped from the operand stack. A new frame is created on the Java Virtual Machine stack for the method being invoked. The">_nargs_ argument values are consecutively made the values of local variables of the new frame, with _arg1_ in local variable 0 (or, if _arg1_ is of type `long` or `double`, in local variables 0 and 1) and so on. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being stored in a local variable. The new frame is then made current, and the Java Virtual Machine `pc` is set to the opcode of the first instruction of the method to be invoked. Execution continues with the first instruction of the method.

If the method is `native` and the platform-dependent code that implements it has not yet been bound ([§5.6](jvms-5.html#jvms-5.6 "5.6. Binding Native Method Implementations")) into the Java Virtual Machine, that is done. The _nargs_ argument values are popped from the operand stack and are passed as parameters to the code that implements the method. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being passed as a parameter. The parameters are passed and the code is invoked in an implementation-dependent manner. When the platform-dependent code returns, the following take place:

*   If the `native` method is `synchronized`, the monitor associated with the resolved `Class` object is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread.
    
*   If the `native` method returns a value, the return value of the platform-dependent code is converted in an implementation-dependent way to the return type of the `native` method and pushed onto the operand stack.
    

#### Linking Exceptions

During resolution of the symbolic reference to the method, any of the exceptions pertaining to method resolution ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) can be thrown.

Otherwise, if the resolved method is an instance method, the _invokestatic_ instruction throws an `IncompatibleClassChangeError`.

#### Run-time Exceptions

Otherwise, if execution of this _invokestatic_ instruction causes initialization of the referenced class or interface, _invokestatic_ may throw an `Error` as detailed in [§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization").

Otherwise, if the resolved method is `native` and the code that implements the method cannot be bound, _invokestatic_ throws an `UnsatisfiedLinkError`.

#### Notes

The _nargs_ argument values are not one-to-one with the first _nargs_ local variables. Argument values of types `long` and `double` must be stored in two consecutive local variables, thus more than _nargs_ local variables may be required to pass _nargs_ argument values to the invoked method.

### `invokevirtual`

#### Operation

Invoke instance method; dispatch based on class

#### Format

  
_invokevirtual_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_invokevirtual_ = 182 (0xb6)

#### Operand Stack

..., _objectref_, \[_arg1_, \[_arg2_ ...\]\] →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a method ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor ([§4.3.3](jvms-4.html#jvms-4.3.3 "4.3.3. Method Descriptors")) of the method as well as a symbolic reference to the class in which the method is to be found. The named method is resolved ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")).

The resolved method must not be an instance initialization method, or the class or interface initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

If the resolved method is `protected`, and it is a member of a superclass of the current class, and the method is not declared in the same run-time package ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) as the current class, then the class of _objectref_ must be either the current class or a subclass of the current class.

_If the resolved method is not signature polymorphic_ ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), then the _invokevirtual_ instruction proceeds as follows.

Let C be the class of _objectref_. The actual method to be invoked is selected by the following lookup procedure:

1.  If C contains a declaration for an instance method `m` that overrides ([§5.4.5](jvms-5.html#jvms-5.4.5 "5.4.5. Overriding")) the resolved method, then `m` is the method to be invoked.
    
2.  Otherwise, if C has a superclass, a search for a declaration of an instance method that overrides the resolved method is performed, starting with the direct superclass of C and continuing with the direct superclass of that class, and so forth, until an overriding method is found or no further superclasses exist. If an overriding method is found, it is the method to be invoked.
    
3.  Otherwise, if there is exactly one maximally-specific method ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) in the superinterfaces of C that matches the resolved method's name and descriptor and is not `abstract`, then it is the method to be invoked.
    

The _objectref_ must be followed on the operand stack by _nargs_ argument values, where the number, type, and order of the values must be consistent with the descriptor of the selected instance method.

If the method is `synchronized`, the monitor associated with _objectref_ is entered or reentered as if by execution of a _monitorenter_ instruction ([§_monitorenter_](jvms-6.html#jvms-6.5.monitorenter "monitorenter")) in the current thread.

If the method is not `native`, the _nargs_ argument values and _objectref_ are popped from the operand stack. A new frame is created on the Java Virtual Machine stack for the method being invoked. The _objectref_ and the argument values are consecutively made the values of local variables of the new frame, with _objectref_ in local variable 0, _arg1_ in local variable 1 (or, if _arg1_ is of type `long` or `double`, in local variables 1 and 2), and so on. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being stored in a local variable. The new frame is then made current, and the Java Virtual Machine `pc` is set to the opcode of the first instruction of the method to be invoked. Execution continues with the first instruction of the method.

If the method is `native` and the platform-dependent code that implements it has not yet been bound ([§5.6](jvms-5.html#jvms-5.6 "5.6. Binding Native Method Implementations")) into the Java Virtual Machine, that is done. The _nargs_ argument values and _objectref_ are popped from the operand stack and are passed as parameters to the code that implements the method. Any argument value that is of a floating-point type undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")) prior to being passed as a parameter. The parameters are passed and the code is invoked in an implementation-dependent manner. When the platform-dependent code returns, the following take place:

*   If the `native` method is `synchronized`, the monitor associated with _objectref_ is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread.
    
*   If the `native` method returns a value, the return value of the platform-dependent code is converted in an implementation-dependent way to the return type of the `native` method and pushed onto the operand stack.
    

_If the resolved method is signature polymorphic_ ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")), then the _invokevirtual_ instruction proceeds as follows.

First, a `reference` to an instance of `java.lang.invoke.MethodType` is obtained as if by resolution of a symbolic reference to a method type ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) with the same parameter and return types as the descriptor of the method referenced by the _invokevirtual_ instruction.

*   If the named method is `invokeExact`, the instance of `java.lang.invoke.MethodType` must be semantically equal to the type descriptor of the receiving method handle _objectref_. The _method handle to be invoked_ is _objectref_.
    
*   If the named method is `invoke`, and the instance of `java.lang.invoke.MethodType` is semantically equal to the type descriptor of the receiving method handle _objectref_, then the _method handle to be invoked_ is _objectref_.
    
*   If the named method is `invoke`, and the instance of `java.lang.invoke.MethodType` is not semantically equal to the type descriptor of the receiving method handle _objectref_, then the Java Virtual Machine attempts to adjust the type descriptor of the receiving method handle, as if by a call to `java.lang.invoke.MethodHandle.asType`, to obtain an exactly invokable method handle `m`. The _method handle to be invoked_ is `m`.
    

The _objectref_ must be followed on the operand stack by _nargs_ argument values, where the number, type, and order of the values must be consistent with the type descriptor of the method handle to be invoked. (This type descriptor will correspond to the method descriptor appropriate for the kind of the method handle to be invoked, as specified in [§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution").)

Then, if the method handle to be invoked has bytecode behavior, the Java Virtual Machine invokes the method handle as if by execution of the bytecode behavior associated with the method handle's kind. If the kind is 5 (`REF_invokeVirtual`), 6 (`REF_invokeStatic`), 7 (`REF_invokeSpecial`), 8 (`REF_newInvokeSpecial`), or 9 (`REF_invokeInterface`), then a frame will be created and made current _in the course of executing the bytecode behavior_; when the method invoked by the bytecode behavior completes (normally or abruptly), the _frame of its invoker_ is considered to be the frame for the method containing this _invokevirtual_ instruction.

The frame in which the bytecode behavior itself executes is not visible.

Otherwise, if the method handle to be invoked has no bytecode behavior, the Java Virtual Machine invokes it in an implementation-dependent manner.

#### Linking Exceptions

During resolution of the symbolic reference to the method, any of the exceptions pertaining to method resolution ([§5.4.3.3](jvms-5.html#jvms-5.4.3.3 "5.4.3.3. Method Resolution")) can be thrown.

Otherwise, if the resolved method is a class (`static`) method, the _invokevirtual_ instruction throws an `IncompatibleClassChangeError`.

Otherwise, if the resolved method is signature polymorphic, then during resolution of the method type derived from the descriptor in the symbolic reference to the method, any of the exceptions pertaining to method type resolution ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) can be thrown.

#### Run-time Exceptions

Otherwise, if _objectref_ is `null`, the _invokevirtual_ instruction throws a `NullPointerException`.

Otherwise, if the resolved method is a `protected` method of a superclass of the current class, declared in a different run-time package, and the class of _objectref_ is not the current class or a subclass of the current class, then _invokevirtual_ throws an `IllegalAccessError`.

Otherwise, if the resolved method is not signature polymorphic:

*   If step 1 or step 2 of the lookup procedure selects an `abstract` method, _invokevirtual_ throws an `AbstractMethodError`.
    
*   Otherwise, if step 1 or step 2 of the lookup procedure selects a `native` method and the code that implements the method cannot be bound, _invokevirtual_ throws an `UnsatisfiedLinkError`.
    
*   Otherwise, if step 3 of the lookup procedure determines there are multiple maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokevirtual_ throws an `IncompatibleClassChangeError`
    
*   Otherwise, if step 3 of the lookup procedure determines there are zero maximally-specific methods in the superinterfaces of C that match the resolved method's name and descriptor and are not `abstract`, _invokevirtual_ throws an `AbstractMethodError`.
    

Otherwise, if the resolved method is signature polymorphic, then:

*   If the method name is `invokeExact`, and the obtained instance of `java.lang.invoke.MethodType` is not semantically equal to the type descriptor of the receiving method handle, the _invokevirtual_ instruction throws a `java.lang.invoke.WrongMethodTypeException`.
    
*   If the method name is `invoke`, and the obtained instance of `java.lang.invoke.MethodType` is not a valid argument to the `java.lang.invoke.MethodHandle.asType` method invoked on the receiving method handle, the _invokevirtual_ instruction throws a `java.lang.invoke.WrongMethodTypeException`.
    

#### Notes

The _nargs_ argument values and _objectref_ are not one-to-one with the first _nargs_+1 local variables. Argument values of types `long` and `double` must be stored in two consecutive local variables, thus more than _nargs_ local variables may be required to pass _nargs_ argument values to the invoked method.

It is possible that the symbolic reference of an _invokevirtual_ instruction resolves to an interface method. In this case, it is possible that there is no overriding method in the class hierarchy, but that a non-`abstract` interface method matches the resolved method's descriptor. The selection logic matches such a method, using the same rules as for _invokeinterface_.

### `ior`

#### Operation

Boolean OR `int`

#### Format

  
_ior_  

#### Forms

_ior_ = 128 (0x80)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. They are popped from the operand stack. An `int` _result_ is calculated by taking the bitwise inclusive OR of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `irem`

#### Operation

Remainder `int`

#### Format

  
_irem_  

#### Forms

_irem_ = 112 (0x70)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. The `int` _result_ is _value1_ - (_value1_ / _value2_) \* _value2_. The _result_ is pushed onto the operand stack.

The result of the _irem_ instruction is such that `(a/b)*b + (a%b)` is equal to `a`. This identity holds even in the special case in which the dividend is the negative `int` of largest possible magnitude for its type and the divisor is -1 (the remainder is 0). It follows from this rule that the result of the remainder operation can be negative only if the dividend is negative and can be positive only if the dividend is positive. Moreover, the magnitude of the result is always less than the magnitude of the divisor.

#### Run-time Exception

If the value of the divisor for an `int` remainder operator is 0, _irem_ throws an `ArithmeticException`.

### `ireturn`

#### Operation

Return `int` from method

#### Format

  
_ireturn_  

#### Forms

_ireturn_ = 172 (0xac)

#### Operand Stack

..., _value_ →

\[empty\]

#### Description

The current method must have return type `boolean`, `byte`, `short`, `char`, or `int`. The _value_ must be of type `int`. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, _value_ is popped from the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) and pushed onto the operand stack of the frame of the invoker. Any other values on the operand stack of the current method are discarded.

The interpreter then returns control to the invoker of the method, reinstating the frame of the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _ireturn_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is synchronized.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _ireturn_ throws an `IllegalMonitorStateException`.

### `ishl`

#### Operation

Shift left `int`

#### Format

  
_ishl_  

#### Forms

_ishl_ = 120 (0x78)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. An `int` _result_ is calculated by shifting _value1_ left by _s_ bit positions, where _s_ is the value of the low 5 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

This is equivalent (even if overflow occurs) to multiplication by 2 to the power _s_. The shift distance actually used is always in the range 0 to 31, inclusive, as if _value2_ were subjected to a bitwise logical AND with the mask value 0x1f.

### `ishr`

#### Operation

Arithmetic shift right `int`

#### Format

  
_ishr_  

#### Forms

_ishr_ = 122 (0x7a)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. An `int` _result_ is calculated by shifting _value1_ right by _s_ bit positions, with sign extension, where _s_ is the value of the low 5 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

The resulting value is _floor_(_value1_ / 2_s_), where _s_ is _value2_ & 0x1f. For non-negative _value1_, this is equivalent to truncating `int` division by 2 to the power _s_. The shift distance actually used is always in the range 0 to 31, inclusive, as if _value2_ were subjected to a bitwise logical AND with the mask value 0x1f.

### `istore`

#### Operation

Store `int` into local variable

#### Format

  
_istore_  
_index_  

#### Forms

_istore_ = 54 (0x36)

#### Operand Stack

..., _value_ →

...

#### Description

The _index_ is an unsigned byte that must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack, and the value of the local variable at _index_ is set to _value_.

#### Notes

The _istore_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `istore_<n>`

#### Operation

Store `int` into local variable

#### Format

  
_istore\_<n>_  

#### Forms

_istore\_0_ = 59 (0x3b)

_istore\_1_ = 60 (0x3c)

_istore\_2_ = 61 (0x3d)

_istore\_3_ = 62 (0x3e)

#### Operand Stack

..., _value_ →

...

#### Description

The <_n_\> must be an index into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `int`. It is popped from the operand stack, and the value of the local variable at <_n_\> is set to _value_.

#### Notes

Each of the _istore\_<n>_ instructions is the same as _istore_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `isub`

#### Operation

Subtract `int`

#### Format

  
_isub_  

#### Forms

_isub_ = 100 (0x64)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. The `int` _result_ is _value1_ - _value2_. The _result_ is pushed onto the operand stack.

For `int` subtraction, `a-b` produces the same result as `a+(-b)`. For `int` values, subtraction from zero is the same as negation.

The result is the 32 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `int`. If overflow occurs, then the sign of the result may not be the same as the sign of the mathematical difference of the two values.

Despite the fact that overflow may occur, execution of an _isub_ instruction never throws a run-time exception.

### `iushr`

#### Operation

Logical shift right `int`

#### Format

  
_iushr_  

#### Forms

_iushr_ = 124 (0x7c)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. The values are popped from the operand stack. An `int` _result_ is calculated by shifting _value1_ right by _s_ bit positions, with zero extension, where _s_ is the value of the low 5 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

If _value1_ is positive and _s_ is _value2_ & 0x1f, the result is the same as that of _value1_ `>>` _s_; if _value1_ is negative, the result is equal to the value of the expression (_value1_ `>>` _s_) + (2 `<<` ~_s_). The addition of the (2 `<<` ~_s_) term cancels out the propagated sign bit. The shift distance actually used is always in the range 0 to 31, inclusive.

### `ixor`

#### Operation

Boolean XOR `int`

#### Format

  
_ixor_  

#### Forms

_ixor_ = 130 (0x82)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `int`. They are popped from the operand stack. An `int` _result_ is calculated by taking the bitwise exclusive OR of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `jsr`

#### Operation

Jump subroutine

#### Format

  
_jsr_  
_branchbyte1_  
_branchbyte2_  

#### Forms

_jsr_ = 168 (0xa8)

#### Operand Stack

... →

..., _address_

#### Description

The _address_ of the opcode of the instruction immediately following this _jsr_ instruction is pushed onto the operand stack as a value of type `returnAddress`. The unsigned _branchbyte1_ and _branchbyte2_ are used to construct a signed 16-bit offset, where the offset is (_branchbyte1_ `<<` 8) | _branchbyte2_. Execution proceeds at that offset from the address of this _jsr_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _jsr_ instruction.

#### Notes

Note that _jsr_ pushes the address onto the operand stack and _ret_ ([§_ret_](jvms-6.html#jvms-6.5.ret "ret")) gets it out of a local variable. This asymmetry is intentional.

In Oracle's implementation of a compiler for the Java programming language prior to Java SE 6, the _jsr_ instruction was used with the _ret_ instruction in the implementation of the `finally` clause ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally"), [§4.10.2.5](jvms-4.html#jvms-4.10.2.5 "4.10.2.5. Exceptions and finally")).

### `jsr_w`

#### Operation

Jump subroutine (wide index)

#### Format

  
_jsr\_w_  
_branchbyte1_  
_branchbyte2_  
_branchbyte3_  
_branchbyte4_  

#### Forms

_jsr\_w_ = 201 (0xc9)

#### Operand Stack

... →

..., _address_

#### Description

The _address_ of the opcode of the instruction immediately following this _jsr\_w_ instruction is pushed onto the operand stack as a value of type `returnAddress`. The unsigned _branchbyte1_, _branchbyte2_, _branchbyte3_, and _branchbyte4_ are used to construct a signed 32-bit offset, where the offset is (_branchbyte1_ `<<` 24) | (_branchbyte2_ `<<` 16) | (_branchbyte3_ `<<` 8) | _branchbyte4_. Execution proceeds at that offset from the address of this _jsr\_w_ instruction. The target address must be that of an opcode of an instruction within the method that contains this _jsr\_w_ instruction.

#### Notes

Note that _jsr\_w_ pushes the address onto the operand stack and _ret_ ([§_ret_](jvms-6.html#jvms-6.5.ret "ret")) gets it out of a local variable. This asymmetry is intentional.

In Oracle's implementation of a compiler for the Java programming language prior to Java SE 6, the _jsr\_w_ instruction was used with the _ret_ instruction in the implementation of the `finally` clause ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally"), [§4.10.2.5](jvms-4.html#jvms-4.10.2.5 "4.10.2.5. Exceptions and finally")).

Although the _jsr\_w_ instruction takes a 4-byte branch offset, other factors limit the size of a method to 65535 bytes ([§4.11](jvms-4.html#jvms-4.11 "4.11. Limitations of the Java Virtual Machine")). This limit may be raised in a future release of the Java Virtual Machine.

### `l2d`

#### Operation

Convert `long` to `double`

#### Format

  
_l2d_  

#### Forms

_l2d_ = 138 (0x8a)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `long`. It is popped from the operand stack and converted to a `double` _result_ using IEEE 754 round to nearest mode. The _result_ is pushed onto the operand stack.

#### Notes

The _l2d_ instruction performs a widening primitive conversion (JLS §5.1.2) that may lose precision because values of type `double` have only 53 significand bits.

### `l2f`

#### Operation

Convert `long` to `float`

#### Format

  
_l2f_  

#### Forms

_l2f_ = 137 (0x89)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `long`. It is popped from the operand stack and converted to a `float` _result_ using IEEE 754 round to nearest mode. The _result_ is pushed onto the operand stack.

#### Notes

The _l2f_ instruction performs a widening primitive conversion (JLS §5.1.2) that may lose precision because values of type `float` have only 24 significand bits.

### `l2i`

#### Operation

Convert `long` to `int`

#### Format

  
_l2i_  

#### Forms

_l2i_ = 136 (0x88)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ on the top of the operand stack must be of type `long`. It is popped from the operand stack and converted to an `int` _result_ by taking the low-order 32 bits of the `long` value and discarding the high-order 32 bits. The _result_ is pushed onto the operand stack.

#### Notes

The _l2i_ instruction performs a narrowing primitive conversion (JLS §5.1.3). It may lose information about the overall magnitude of _value_. The _result_ may also not have the same sign as value.

### `ladd`

#### Operation

Add `long`

#### Format

  
_ladd_  

#### Forms

_ladd_ = 97 (0x61)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. The values are popped from the operand stack. The `long` _result_ is _value1_ + _value2_. The _result_ is pushed onto the operand stack.

The result is the 64 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `long`. If overflow occurs, the sign of the result may not be the same as the sign of the mathematical sum of the two values.

Despite the fact that overflow may occur, execution of an _ladd_ instruction never throws a run-time exception.

### `laload`

#### Operation

Load `long` from array

#### Format

  
_laload_  

#### Forms

_laload_ = 47 (0x2f)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `long`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The `long` _value_ in the component of the array at _index_ is retrieved and pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _laload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _laload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `land`

#### Operation

Boolean AND `long`

#### Format

  
_land_  

#### Forms

_land_ = 127 (0x7f)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. They are popped from the operand stack. A `long` _result_ is calculated by taking the bitwise AND of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `lastore`

#### Operation

Store into `long` array

#### Format

  
_lastore_  

#### Forms

_lastore_ = 80 (0x50)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `long`. The _index_ must be of type `int`, and _value_ must be of type `long`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `long` _value_ is stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _lastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _lastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `lcmp_e"`

#### Operation

Compare `long`

#### Format

  
_lcmp_  

#### Forms

_lcmp_ = 148 (0x94)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. They are both popped from the operand stack, and a signed integer comparison is performed. If _value1_ is greater than _value2_, the `int` value 1 is pushed onto the operand stack. If _value1_ is equal to _value2_, the `int` value 0 is pushed onto the operand stack. If _value1_ is less than _value2_, the `int` value -1 is pushed onto the operand stack.

### `lconst_<l>`

#### Operation

Push `long` constant

#### Format

  
_lconst\_<l>_  

#### Forms

_lconst\_0_ = 9 (0x9)

_lconst\_1_ = 10 (0xa)

#### Operand Stack

... →

..., <_l_\>

#### Description

Push the `long` constant <_l_\> (0 or 1) onto the operand stack.

### `ldc`

#### Operation

Push item from run-time constant pool

#### Format

  
_ldc_  
_index_  

#### Forms

_ldc_ = 18 (0x12)

#### Operand Stack

... →

..., _value_

#### Description

The _index_ is an unsigned byte that must be a valid index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The run-time constant pool entry at _index_ either must be a run-time constant of type `int` or `float`, or a `reference` to a string literal, or a symbolic reference to a class, method type, or method handle ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")).

If the run-time constant pool entry is a run-time constant of type `int` or `float`, the numeric _value_ of that run-time constant is pushed onto the operand stack as an `int` or `float`, respectively.

Otherwise, if the run-time constant pool entry is a `reference` to an instance of class `String` representing a string literal ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), then a `reference` to that instance, _value_, is pushed onto the operand stack.

Otherwise, if the run-time constant pool entry is a symbolic reference to a class ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), then the named class is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) and a `reference` to the `Class` object representing that class, _value_, is pushed onto the operand stack.

Otherwise, the run-time constant pool entry must be a symbolic reference to a method type or a method handle ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")). The method type or method handle is resolved ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) and a `reference` to the resulting instance of `java.lang.invoke.MethodType` or `java.lang.invoke.MethodHandle`, _value_, is pushed onto the operand stack.

#### Linking Exceptions

During resolution of a symbolic reference to a class, any of the exceptions pertaining to class resolution ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) can be thrown.

During resolution of a symbolic reference to a method type or method handle, any of the exception pertaining to method type or method handle resolution ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) can be thrown.

#### Notes

The _ldc_ instruction can only be used to push a value of type `float` taken from the float value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")) because a constant of type `float` in the constant pool ([§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures")) must be taken from the float value set.

### `ldc_w`

#### Operation

Push item from run-time constant pool (wide index)

#### Format

  
_ldc\_w_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_ldc\_w_ = 19 (0x13)

#### Operand Stack

... →

..., _value_

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are assembled into an unsigned 16-bit index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is calculated as (_indexbyte1_ `<<` 8) | _indexbyte2_. The index must be a valid index into the run-time constant pool of the current class. The run-time constant pool entry at the index either must be a run-time constant of type `int` or `float`, or a `reference` to a string literal, or a symbolic reference to a class, method type, or method handle ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")).

If the run-time constant pool entry is a run-time constant of type `int` or `float`, the numeric _value_ of that run-time constant is pushed onto the operand stack as an `int` or `float`, respectively.

Otherwise, if the run-time constant pool entry is a `reference` to an instance of class `String` representing a string literal ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), then a `reference` to that instance, _value_, is pushed onto the operand stack.

Otherwise, if the run-time constant pool entry is a symbolic reference to a class ([§4.4.1](jvms-4.html#jvms-4.4.1 "4.4.1. The CONSTANT_Class_info Structure")). The named class is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) and a `reference` to the `Class` object representing that class, _value_, is pushed onto the operand stack.

Otherwise, the run-time constant pool entry must be a symbolic reference to a method type or a method handle ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")). The method type or method handle is resolved ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) and a `reference` to the resulting instance of `java.lang.invoke.MethodType` or `java.lang.invoke.MethodHandle`, _value_, is pushed onto the operand stack.

#### Linking Exceptions

During resolution of the symbolic reference to a class, any of the exceptions pertaining to class resolution ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) can be thrown.

During resolution of a symbolic reference to a method type or method handle, any of the exception pertaining to method type or method handle resolution ([§5.4.3.5](jvms-5.html#jvms-5.4.3.5 "5.4.3.5. Method Type and Method Handle Resolution")) can be thrown.

#### Notes

The _ldc\_w_ instruction is identical to the _ldc_ instruction ([§_ldc_](jvms-6.html#jvms-6.5.ldc "ldc")) except for its wider run-time constant pool index.

The _ldc\_w_ instruction can only be used to push a value of type `float` taken from the float value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")) because a constant of type `float` in the constant pool ([§4.4.4](jvms-4.html#jvms-4.4.4 "4.4.4. The CONSTANT_Integer_info and CONSTANT_Float_info Structures")) must be taken from the float value set.

### `ldc2_w`

#### Operation

Push `long` or `double` from run-time constant pool (wide index)

#### Format

  
_ldc2\_w_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_ldc2\_w_ = 20 (0x14)

#### Operand Stack

... →

..., _value_

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are assembled into an unsigned 16-bit index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is calculated as (_indexbyte1_ `<<` 8) | _indexbyte2_. The index must be a valid index into the run-time constant pool of the current class. The run-time constant pool entry at the index must be a run-time constant of type `long` or `double` ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")). The numeric _value_ of that run-time constant is pushed onto the operand stack as a `long` or `double`, respectively.

#### Notes

Only a wide-index version of the _ldc2\_w_ instruction exists; there is no _ldc2_ instruction that pushes a `long` or `double` with a single-byte index.

The _ldc2\_w_ instruction can only be used to push a value of type `double` taken from the double value set ([§2.3.2](jvms-2.html#jvms-2.3.2 "2.3.2. Floating-Point Types, Value Sets, and Values")) because a constant of type `double` in the constant pool ([§4.4.5](jvms-4.html#jvms-4.4.5 "4.4.5. The CONSTANT_Long_info and CONSTANT_Double_info Structures")) must be taken from the double value set.

### `ldiv`

#### Operation

Divide `long`

#### Format

  
_ldiv_  

#### Forms

_ldiv_ = 109 (0x6d)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. The values are popped from the operand stack. The `long` _result_ is the value of the Java programming language expression _value1_ / _value2_. The _result_ is pushed onto the operand stack.

A `long` division rounds towards 0; that is, the quotient produced for `long` values in _n_ / _d_ is a `long` value _q_ whose magnitude is as large as possible while satisfying |_d_ ⋅ _q_| ≤ |_n_|. Moreover, _q_ is positive when |_n_| ≥ |_d_| and _n_ and _d_ have the same sign, but _q_ is negative when |_n_| ≥ |_d_| and _n_ and _d_ have opposite signs.

There is one special case that does not satisfy this rule: if the dividend is the negative integer of largest possible magnitude for the `long` type and the divisor is -1, then overflow occurs and the result is equal to the dividend; despite the overflow, no exception is thrown in this case.

#### Run-time Exception

If the value of the divisor in a `long` division is 0, _ldiv_ throws an `ArithmeticException`.

### `lload`

#### Operation

Load `long` from local variable

#### Format

  
_lload_  
_index_  

#### Forms

_lload_ = 22 (0x16)

#### Operand Stack

... →

..., _value_

#### Description

The _index_ is an unsigned byte. Both _index_ and _index_+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at _index_ must contain a `long`. The _value_ of the local variable at _index_ is pushed onto the operand stack.

#### Notes

The _lload_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `lload_<n>`

#### Operation

Load `long` from local variable

#### Format

  
_lload\_<n>_  

#### Forms

_lload\_0_ = 30 (0x1e)

_lload\_1_ = 31 (0x1f)

_lload\_2_ = 32 (0x20)

_lload\_3_ = 33 (0x21)

#### Operand Stack

... →

..., _value_

#### Description

Both <_n_\> and <_n_\>+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The local variable at <_n_\> must contain a `long`. The _value_ of the local variable at <_n_\> is pushed onto the operand stack.

#### Notes

Each of the _lload\_<n>_ instructions is the same as _lload_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `lmul`

#### Operation

Multiply `long`

#### Format

  
_lmul_  

#### Forms

_lmul_ = 105 (0x69)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. The values are popped from the operand stack. The `long` _result_ is _value1_ \* _value2_. The _result_ is pushed onto the operand stack.

The result is the 64 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `long`. If overflow occurs, the sign of the result may not be the same as the sign of the mathematical multiplication of the two values.

Despite the fact that overflow may occur, execution of an _lmul_ instruction never throws a run-time exception.

### `lneg`

#### Operation

Negate `long`

#### Format

  
_lneg_  

#### Forms

_lneg_ = 117 (0x75)

#### Operand Stack

..., _value_ →

..., _result_

#### Description

The _value_ must be of type `long`. It is popped from the operand stack. The `long` _result_ is the arithmetic negation of _value_, -_value_. The _result_ is pushed onto the operand stack.

For `long` values, negation is the same as subtraction from zero. Because the Java Virtual Machine uses two's-complement representation for integers and the range of two's-complement values is not symmetric, the negation of the maximum negative `long` results in that same maximum negative number. Despite the fact that overflow has occurred, no exception is thrown.

For all `long` values `x`, `-x` equals `(~x)+1`.

### `lookupswitch`

#### Operation

Access jump table by key match and jump

#### Format

  
_lookupswitch_  
_<0-3 byte pad>_  
_defaultbyte1_  
_defaultbyte2_  
_defaultbyte3_  
_defaultbyte4_  
_npairs1_  
_npairs2_  
_npairs3_  
_npairs4_  
_match-offset pairs..._  

#### Forms

_lookupswitch_ = 171 (0xab)

#### Operand Stack

..., _key_ →

...

#### Description

A _lookupswitch_ is a variable-length instruction. Immediately after the _lookupswitch_ opcode, between zero and three bytes must act as padding, such that _defaultbyte1_ begins at an address that is a multiple of four bytes from the start of the current method (the opcode of its first instruction). Immediately after the padding follow a series of signed 32-bit values: _default_, _npairs_, and then _npairs_ pairs of signed 32-bit values. The _npairs_ must be greater than or equal to 0. Each of the _npairs_ pairs consists of an `int` _match_ and a signed 32-bit _offset_. Each of these signed 32-bit values is constructed from four unsigned bytes as (_byte1_ `<<` 24) | (_byte2_ `<<` 16) | (_byte3_ `<<` 8) | _byte4_.

The table _match-offset_ pairs of the _lookupswitch_ instruction must be sorted in increasing numerical order by _match_.

The _key_ must be of type `int` and is popped from the operand stack. The _key_ is compared against the _match_ values. If it is equal to one of them, then a target address is calculated by adding the corresponding _offset_ to the address of the opcode of this _lookupswitch_ instruction. If the _key_ does not match any of the _match_ values, the target address is calculated by adding _default_ to the address of the opcode of this _lookupswitch_ instruction. Execution then continues at the target address.

The target address that can be calculated from the _offset_ of each _match-offset_ pair, as well as the one calculated from _default_, must be the address of an opcode of an instruction within the method that contains this _lookupswitch_ instruction.

#### Notes

The alignment required of the 4-byte operands of the _lookupswitch_ instruction guarantees 4-byte alignment of those operands if and only if the method that contains the_lookupswitch_ is positioned on a 4-byte boundary.

The _match-offset_ pairs are sorted to support lookup routines that are quicker than linear search.

### `lor`

#### Operation

Boolean OR `long`

#### Format

  
_lor_  

#### Forms

_lor_ = 129 (0x81)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. They are popped from the operand stack. A `long` _result_ is calculated by taking the bitwise inclusive OR of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `lrem`

#### Operation

Remainder `long`

#### Format

  
_lrem_  

#### Forms

_lrem_ = 113 (0x71)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. The values are popped from the operand stack. The `long` _result_ is _value1_ - (_value1_ / _value2_) \* _value2_. The _result_ is pushed onto the operand stack.

The result of the _lrem_ instruction is such that `(a/b)*b + (a%b)` is equal to `a`. This identity holds even in the special case in which the dividend is the negative `long` of largest possible magnitude for its type and the divisor is -1 (the remainder is 0). It follows from this rule that the result of the remainder operation can be negative only if the dividend is negative and can be positive only if the dividend is positive; moreover, the magnitude of the result is always less than the magnitude of the divisor.

#### Run-time Exception

If the value of the divisor for a `long` remainder operator is 0, _lrem_ throws an `ArithmeticException`.

### `lreturn`

#### Operation

Return `long` from method

#### Format

  
_lreturn_  

#### Forms

_lreturn_ = 173 (0xad)

#### Operand Stack

..., _value_ →

\[empty\]

#### Description

The current method must have return type `long`. The _value_ must be of type `long`. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, _value_ is popped from the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) and pushed onto the operand stack of the frame of the invoker. Any other values on the operand stack of the current method are discarded.

The interpreter then returns control to the invoker of the method, reinstating the frame of the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _lreturn_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is `synchronized`.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _lreturn_ throws an `IllegalMonitorStateException`.

### `lshl`

#### Operation

Shift left `long`

#### Format

  
_lshl_  

#### Forms

_lshl_ = 121 (0x79)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

The _value1_ must be of type `long`, and _value2_ must be of type `int`. The values are popped from the operand stack. A `long` _result_ is calculated by shifting _value1_ left by _s_ bit positions, where _s_ is the low 6 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

This is equivalent (even if overflow occurs) to multiplication by 2 to the power _s_. The shift distance actually used is therefore always in the range 0 to 63, inclusive, as if _value2_ were subjected to a bitwise logical AND with the mask value 0x3f.

### `lshr`

#### Operation

Arithmetic shift right `long`

#### Format

  
_lshr_  

#### Forms

_lshr_ = 123 (0x7b)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

The _value1_ must be of type `long`, and _value2_ must be of type `int`. The values are popped from the operand stack. A `long` _result_ is calculated by shifting _value1_ right by _s_ bit positions, with sign extension, where _s_ is the value of the low 6 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

The resulting value is _floor_(_value1_ / 2_s_), where _s_ is _value2_ & 0x3f. For non-negative _value1_, this is equivalent to truncating `long` division by 2 to the power _s_. The shift distance actually used is therefore always in the range 0 to 63, inclusive, as if _value2_ were subjected to a bitwise logical AND with the mask value 0x3f.

### `lstore`

#### Operation

Store `long` into local variable

#### Format

  
_lstore_  
_index_  

#### Forms

_lstore_ = 55 (0x37)

#### Operand Stack

..., _value_ →

...

#### Description

The _index_ is an unsigned byte. Both _index_ and _index_+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `long`. It is popped from the operand stack, and the local variables at _index_ and _index_+1 are set to _value_.

#### Notes

The _lstore_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `lstore_<n>`

#### Operation

Store `long` into local variable

#### Format

  
_lstore\_<n>_  

#### Forms

_lstore\_0_ = 63 (0x3f)

_lstore\_1_ = 64 (0x40)

_lstore\_2_ = 65 (0x41)

_lstore\_3_ = 66 (0x42)

#### Operand Stack

..., _value_ →

...

#### Description

Both <_n_\> and <_n_\>+1 must be indices into the local variable array of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")). The _value_ on the top of the operand stack must be of type `long`. It is popped from the operand stack, and the local variables at <_n_\> and <_n_\>+1 are set to _value_.

#### Notes

Each of the _lstore\_<n>_ instructions is the same as _lstore_ with an _index_ of <_n_\>, except that the operand <_n_\> is implicit.

### `lsub`

#### Operation

Subtract `long`

#### Format

  
_lsub_  

#### Forms

_lsub_ = 101 (0x65)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. The values are popped from the operand stack. The `long` _result_ is _value1_ - _value2_. The _result_ is pushed onto the operand stack.

For `long` subtraction, `a-b` produces the same result as `a+(-b)`. For `long` values, subtraction from zero is the same as negation.

The result is the 64 low-order bits of the true mathematical result in a sufficiently wide two's-complement format, represented as a value of type `long`. If overflow occurs, then the sign of the result may not be the same as the sign of the mathematical difference of the two values.

Despite the fact that overflow may occur, execution of an _lsub_ instruction never throws a run-time exception.

### `lushr`

#### Operation

Logical shift right `long`

#### Format

  
_lushr_  

#### Forms

_lushr_ = 125 (0x7d)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

The _value1_ must be of type `long`, and _value2_ must be of type `int`. The values are popped from the operand stack. A `long` _result_ is calculated by shifting _value1_ right logically by _s_ bit positions, with zero extension, where _s_ is the value of the low 6 bits of _value2_. The _result_ is pushed onto the operand stack.

#### Notes

If _value1_ is positive and _s_ is _value2_ & 0x3f, the result is the same as that of _value1_ `>>` _s_; if _value1_ is negative, the result is equal to the value of the expression (_value1_ `>>` _s_) + (2L `<<` ~_s_). The addition of the (2L `<<` ~_s_) term cancels out the propagated sign bit. The shift distance actually used is always in the range 0 to 63, inclusive.

### `lxor`

#### Operation

Boolean XOR `long`

#### Format

  
_lxor_  

#### Forms

_lxor_ = 131 (0x83)

#### Operand Stack

..., _value1_, _value2_ →

..., _result_

#### Description

Both _value1_ and _value2_ must be of type `long`. They are popped from the operand stack. A `long` _result_ is calculated by taking the bitwise exclusive OR of _value1_ and _value2_. The _result_ is pushed onto the operand stack.

### `monitorenter`

#### Operation

Enter monitor for object

#### Format

  
_monitorenter_  

#### Forms

_monitorenter_ = 194 (0xc2)

#### Operand Stack

..., _objectref_ →

...

#### Description

The _objectref_ must be of type `reference`.

Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes _monitorenter_ attempts to gain ownership of the monitor associated with _objectref_, as follows:

*   If the entry count of the monitor associated with _objectref_ is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor.
    
*   If the thread already owns the monitor associated with _objectref_, it reenters the monitor, incrementing its entry count.
    
*   If another thread already owns the monitor associated with _objectref_, the thread blocks until the monitor's entry count is zero, then tries again to gain ownership.
    

#### Run-time Exception

If _objectref_ is `null`, _monitorenter_ throws a `NullPointerException`.

#### Notes

A _monitorenter_ instruction may be used with one or more _monitorexit_ instructions ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) to implement a `synchronized` statement in the Java programming language ([§3.14](jvms-3.html#jvms-3.14 "3.14. Synchronization")). The _monitorenter_ and _monitorexit_ instructions are not used in the implementation of `synchronized` methods, although they can be used to provide equivalent locking semantics. Monitor entry on invocation of a `synchronized` method, and monitor exit on its return, are handled implicitly by the Java Virtual Machine's method invocation and return instructions, as if _monitorenter_ and _monitorexit_ were used.

The association of a monitor with an object may be managed in various ways that are beyond the scope of this specification. For instance, the monitor may be allocated and deallocated at the same time as the object. Alternatively, it may be dynamically allocated at the time when a thread attempts to gain exclusive access to the object and freed at some later time when no thread remains in the monitor for the object.

The synchronization constructs of the Java programming language require support for operations on monitors besides entry and exit. These include waiting on a monitor (`Object.wait`) and notifying other threads waiting on a monitor (`Object.notifyAll` and `Object.notify`). These operations are supported in the standard package `java.lang` supplied with the Java Virtual Machine. No explicit support for these operations appears in the instruction set of the Java Virtual Machine.

### `monitorexit`

#### Operation

Exit monitor for object

#### Format

  
_monitorexit_  

#### Forms

_monitorexit_ = 195 (0xc3)

#### Operand Stack

..., _objectref_ →

...

#### Description

The _objectref_ must be of type `reference`.

The thread that executes _monitorexit_ must be the owner of the monitor associated with the instance referenced by _objectref_.

The thread decrements the entry count of the monitor associated with _objectref_. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.

#### Run-time Exceptions

If _objectref_ is `null`, _monitorexit_ throws a `NullPointerException`.

Otherwise, if the thread that executes _monitorexit_ is not the owner of the monitor associated with the instance referenced by _objectref_, _monitorexit_ throws an `IllegalMonitorStateException`.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the second of those rules is violated by the execution of this _monitorexit_ instruction, then _monitorexit_ throws an `IllegalMonitorStateException`.

#### Notes

One or more _monitorexit_ instructions may be used with a _monitorenter_ instruction ([§_monitorenter_](jvms-6.html#jvms-6.5.monitorenter "monitorenter")) to implement a `synchronized` statement in the Java programming language ([§3.14](jvms-3.html#jvms-3.14 "3.14. Synchronization")). The _monitorenter_ and _monitorexit_ instructions are not used in the implementation of `synchronized` methods, although they can be used to provide equivalent locking semantics.

The Java Virtual Machine supports exceptions thrown within `synchronized` methods and `synchronized` statements differently:

*   Monitor exit on normal `synchronized` method completion is handled by the Java Virtual Machine's return instructions. Monitor exit on abrupt `synchronized` method completion is handled implicitly by the Java Virtual Machine's _athrow_ instruction.
    
*   When an exception is thrown from within a `synchronized` statement, exit from the monitor entered prior to the execution of the `synchronized` statement is achieved using the Java Virtual Machine's exception handling mechanism ([§3.14](jvms-3.html#jvms-3.14 "3.14. Synchronization")).
    

### `multianewarray`

#### Operation

Create new multidimensional array

#### Format

  
_multianewarray_  
_indexbyte1_  
_indexbyte2_  
_dimensions_  

#### Forms

_multianewarray_ = 197 (0xc5)

#### Operand Stack

..., _count1_, \[_count2_, ...\] →

..., _arrayref_

#### Description

The _dimensions_ operand is an unsigned byte that must be greater than or equal to 1. It represents the number of dimensions of the array to be created. The operand stack must contain _dimensions_ values. Each such value represents the number of components in a dimension of the array to be created, must be of type `int`, and must be non-negative. The _count1_ is the desired length in the first dimension, _count2_ in the second, etc.

All of the _count_ values are popped off the operand stack. The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at the index must be a symbolic reference to a class, array, or interface type. The named class, array, or interface type is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")). The resulting entry must be an array class type of dimensionality greater than or equal to _dimensions_.

A new multidimensional array of the array type is allocated from the garbage-collected heap. If any _count_ value is zero, no subsequent dimensions are allocated. The components of the array in the first dimension are initialized to subarrays of the type of the second dimension, and so on. The components of the last allocated dimension of the array are initialized to the default initial value ([§2.3](jvms-2.html#jvms-2.3 "2.3. Primitive Types and Values"), [§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) for the element type of the array type. A `reference` _arrayref_ to the new array is pushed onto the operand stack.

#### Linking Exceptions

During resolution of the symbolic reference to the class, array, or interface type, any of the exceptions documented in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") can be thrown.

Otherwise, if the current class does not have permission to access the element type of the resolved array class, _multianewarray_ throws an `IllegalAccessError`.

#### Run-time Exception

Otherwise, if any of the _dimensions_ values on the operand stack are less than zero, the _multianewarray_ instruction throws a `NegativeArraySizeException`.

#### Notes

It may be more efficient to use _newarray_ or _anewarray_ ([§_newarray_](jvms-6.html#jvms-6.5.newarray "newarray"), [§_anewarray_](jvms-6.html#jvms-6.5.anewarray "anewarray")) when creating an array of a single dimension.

The array class referenced via the run-time constant pool may have more dimensions than the _dimensions_ operand of the _multianewarray_ instruction. In that case, only the first _dimensions_ of the dimensions of the array are created.

### `new`

#### Operation

Create new object

#### Format

  
_new_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_new_ = 187 (0xbb)

#### Operand Stack

... →

..., _objectref_

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at the index must be a symbolic reference to a class or interface type. The named class or interface type is resolved ([§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution")) and should result in a class type. Memory for a new instance of that class is allocated from the garbage-collected heap, and the instance variables of the new object are initialized to their default initial values ([§2.3](jvms-2.html#jvms-2.3 "2.3. Primitive Types and Values"), [§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")). The _objectref_, a `reference` to the instance, is pushed onto the operand stack.

On successful resolution of the class, it is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")) if it has not already been initialized.

#### Linking Exceptions

During resolution of the symbolic reference to the class, array, or interface type, any of the exceptions documented in [§5.4.3.1](jvms-5.html#jvms-5.4.3.1 "5.4.3.1. Class and Interface Resolution") can be thrown.

Otherwise, if the symbolic reference to the class, array, or interface type resolves to an interface or is an `abstract` class, _new_ throws an `InstantiationError`.

#### Run-time Exception

Otherwise, if execution of this _new_ instruction causes initialization of the referenced class, _new_ may throw an `Error` as detailed in JLS §15.9.4.

#### Notes

The _new_ instruction does not completely create a new instance; instance creation is not completed until an instance initialization method ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")) has been invoked on the uninitialized instance.

### `newarray`

#### Operation

Create new array

#### Format

  
_newarray_  
_atype_  

#### Forms

_newarray_ = 188 (0xbc)

#### Operand Stack

..., _count_ →

..., _arrayref_

#### Description

The _count_ must be of type `int`. It is popped off the operand stack. The _count_ represents the number of elements in the array to be created.

The _atype_ is a code that indicates the type of array to create. It must take one of the following values:

**Table 6.5.newarray-A. Array type codes**

 

Array Type

_atype_

`T_BOOLEAN`

4

`T_CHAR`

5

`T_FLOAT`

6

`T_DOUBLE`

7

`T_BYTE`

8

`T_SHORT`

9

`T_INT`

10

`T_LONG`

11

  

A new array whose components are of type _atype_ and of length _count_ is allocated from the garbage-collected heap. A `reference` _arrayref_ to this new array object is pushed into the operand stack. Each of the elements of the new array is initialized to the default initial value ([§2.3](jvms-2.html#jvms-2.3 "2.3. Primitive Types and Values"), [§2.4](jvms-2.html#jvms-2.4 "2.4. Reference Types and Values")) for the element type of the array type.

#### Run-time Exception

If _count_ is less than zero, _newarray_ throws a `NegativeArraySizeException`.

#### Notes

In Oracle's Java Virtual Machine implementation, arrays of type `boolean` (_atype_ is `T_BOOLEAN`) are stored as arrays of 8-bit values and are manipulated using the _baload_ and _bastore_ instructions ([§_baload_](jvms-6.html#jvms-6.5.baload "baload"), [§_bastore_](jvms-6.html#jvms-6.5.bastore "bastore")) which also access arrays of type `byte`. Other implementations may implement packed `boolean` arrays; the _baload_ and _bastore_ instructions must still be used to access those arrays.

### `nop`

#### Operation

Do nothing

#### Format

  
_nop_  

#### Forms

_nop_ = 0 (0x0)

#### Operand Stack

No change

#### Description

Do nothing.

### `pop`

#### Operation

Pop the top operand stack value

#### Format

  
_pop_  

#### Forms

_pop_ = 87 (0x57)

#### Operand Stack

..., _value_ →

...

#### Description

Pop the top value from the operand stack.

The _pop_ instruction must not be used unless _value_ is a value of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

### `pop2`

#### Operation

Pop the top one or two operand stack values

#### Format

  
_pop2_  

#### Forms

_pop2_ = 88 (0x58)

#### Operand Stack

Form 1:

..., _value2_, _value1_ →

...

where each of _value1_ and _value2_ is a value of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

Form 2:

..., _value_ →

...

where _value_ is a value of a category 2 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Description

Pop the top one or two values from the operand stack.

### `putfield`

#### Operation

Set field in object

#### Format

  
_putfield_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_putfield_ = 181 (0xb5)

#### Operand Stack

..., _objectref_, _value_ →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a field ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor of the field as well as a symbolic reference to the class in which the field is to be found. The class of _objectref_ must not be an array. If the field is `protected`, and it is a member of a superclass of the current class, and the field is not declared in the same run-time package ([§5.3](jvms-5.html#jvms-5.3 "5.3. Creation and Loading")) as the current class, then the class of _objectref_ must be either the current class or a subclass of the current class.

The referenced field is resolved ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")). The type of a _value_ stored by a _putfield_ instruction must be compatible with the descriptor of the referenced field ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). If the field descriptor type is `boolean`, `byte`, `char`, `short`, or `int`, then the _value_ must be an `int`. If the field descriptor type is `float`, `long`, or `double`, then the _value_ must be a `float`, `long`, or `double`, respectively. If the field descriptor type is a reference type, then the _value_ must be of a type that is assignment compatible (JLS §5.2) with the field descriptor type. If the field is `final`, it must be declared in the current class, and the instruction must occur in an instance initialization method (`<init>`) of the current class ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

The _value_ and _objectref_ are popped from the operand stack. The _objectref_ must be of type `reference`. The _value_ undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_', and the referenced field in _objectref_ is set to _value_'.

#### Linking Exceptions

During resolution of the symbolic reference to the field, any of the exceptions pertaining to field resolution ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")) can be thrown.

Otherwise, if the resolved field is a `static` field, _putfield_ throws an `IncompatibleClassChangeError`.

Otherwise, if the field is `final`, it must be declared in the current class, and the instruction must occur in an instance initialization method (`<init>`) of the current class. Otherwise, an `IllegalAccessError` is thrown.

#### Run-time Exception

Otherwise, if _objectref_ is `null`, the _putfield_ instruction throws a `NullPointerException`.

### `putstatic`

#### Operation

Set static field in class

#### Format

  
_putstatic_  
_indexbyte1_  
_indexbyte2_  

#### Forms

_putstatic_ = 179 (0xb3)

#### Operand Stack

..., _value_ →

...

#### Description

The unsigned _indexbyte1_ and _indexbyte2_ are used to construct an index into the run-time constant pool of the current class ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The run-time constant pool item at that index must be a symbolic reference to a field ([§5.1](jvms-5.html#jvms-5.1 "5.1. The Run-Time Constant Pool")), which gives the name and descriptor of the field as well as a symbolic reference to the class or interface in which the field is to be found. The referenced field is resolved ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")).

On successful resolution of the field, the class or interface that declared the resolved field is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization")) if that class or interface has not already been initialized.

The type of a _value_ stored by a _putstatic_ instruction must be compatible with the descriptor of the referenced field ([§4.3.2](jvms-4.html#jvms-4.3.2 "4.3.2. Field Descriptors")). If the field descriptor type is `boolean`, `byte`, `char`, `short`, or `int`, then the _value_ must be an `int`. If the field descriptor type is `float`, `long`, or `double`, then the _value_ must be a `float`, `long`, or `double`, respectively. If the field descriptor type is a reference type, then the _value_ must be of a type that is assignment compatible (JLS §5.2) with the field descriptor type. If the field is `final`, it must be declared in the current class, and the instruction must occur in the `<clinit>` method of the current class ([§2.9](jvms-2.html#jvms-2.9 "2.9. Special Methods")).

The _value_ is popped from the operand stack and undergoes value set conversion ([§2.8.3](jvms-2.html#jvms-2.8.3 "2.8.3. Value Set Conversion")), resulting in _value_'. The class field is set to _value_'.

#### Linking Exceptions

During resolution of the symbolic reference to the class or interface field, any of the exceptions pertaining to field resolution ([§5.4.3.2](jvms-5.html#jvms-5.4.3.2 "5.4.3.2. Field Resolution")) can be thrown.

Otherwise, if the resolved field is not a `static` (class) field or an interface field, _putstatic_ throws an `IncompatibleClassChangeError`.

Otherwise, if the field is `final`, it must be declared in the current class, and the instruction must occur in the `<clinit>` method of the current class. Otherwise, an `IllegalAccessError` is thrown.

#### Run-time Exception

Otherwise, if execution of this _putstatic_ instruction causes initialization of the referenced class or interface, _putstatic_ may throw an `Error` as detailed in [§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization").

#### Notes

A _putstatic_ instruction may be used only to set the value of an interface field on the initialization of that field. Interface fields may be assigned to only once, on execution of an interface variable initialization expression when the interface is initialized ([§5.5](jvms-5.html#jvms-5.5 "5.5. Initialization"), JLS §9.3.1).

### `ret`

#### Operation

Return from subroutine

#### Format

  
_ret_  
_index_  

#### Forms

_ret_ = 169 (0xa9)

#### Operand Stack

No change

#### Description

The _index_ is an unsigned byte between 0 and 255, inclusive. The local variable at _index_ in the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) must contain a value of type `returnA`ddress. The contents of the local variable are written into the Java Virtual Machine's `pc` register, and execution continues there.

#### Notes

Note that _jsr_ ([§_jsr_](jvms-6.html#jvms-6.5.jsr "jsr")) pushes the address onto the operand stack and _ret_ gets it out of a local variable. This asymmetry is intentional.

In Oracle's implementation of a compiler for the Java programming language prior to Java SE 6, the _ret_ instruction was used with the _jsr_ and _jsr\_w_ instructions ([§_jsr_](jvms-6.html#jvms-6.5.jsr "jsr"), [§_jsr\_w_](jvms-6.html#jvms-6.5.jsr_w "jsr_w")) in the implementation of the `finally` clause ([§3.13](jvms-3.html#jvms-3.13 "3.13. Compiling finally"), [§4.10.2.5](jvms-4.html#jvms-4.10.2.5 "4.10.2.5. Exceptions and finally")).

The _ret_ instruction should not be confused with the _return_ instruction ([§_return_](jvms-6.html#jvms-6.5.return "return")). A _return_ instruction returns control from a method to its invoker, without passing any value back to the invoker.

The _ret_ opcode can be used in conjunction with the _wide_ instruction ([§_wide_](jvms-6.html#jvms-6.5.wide "wide")) to access a local variable using a two-byte unsigned index.

### `return`

#### Operation

Return `void` from method

#### Format

  
_return_  

#### Forms

_return_ = 177 (0xb1)

#### Operand Stack

... →

\[empty\]

#### Description

The current method must have return type `void`. If the current method is a `synchronized` method, the monitor entered or reentered on invocation of the method is updated and possibly exited as if by execution of a _monitorexit_ instruction ([§_monitorexit_](jvms-6.html#jvms-6.5.monitorexit "monitorexit")) in the current thread. If no exception is thrown, any values on the operand stack of the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")) are discarded.

The interpreter then returns control to the invoker of the method, reinstating the frame of the invoker.

#### Run-time Exceptions

If the Java Virtual Machine implementation does not enforce the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization"), then if the current method is a `synchronized` method and the current thread is not the owner of the monitor entered or reentered on invocation of the method, _return_ throws an `IllegalMonitorStateException`. This can happen, for example, if a `synchronized` method contains a _monitorexit_ instruction, but no _monitorenter_ instruction, on the object on which the method is `synchronized`.

Otherwise, if the Java Virtual Machine implementation enforces the rules on structured locking described in [§2.11.10](jvms-2.html#jvms-2.11.10 "2.11.10. Synchronization") and if the first of those rules is violated during invocation of the current method, then _return_ throws an `IllegalMonitorStateException`.

### `saload`

#### Operation

Load `short` from array

#### Format

  
_saload_  

#### Forms

_saload_ = 53 (0x35)

#### Operand Stack

..., _arrayref_, _index_ →

..., _value_

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `short`. The _index_ must be of type `int`. Both _arrayref_ and _index_ are popped from the operand stack. The component of the array at _index_ is retrieved and sign-extended to an `int` _value_. That _value_ is pushed onto the operand stack.

#### Run-time Exceptions

If _arrayref_ is `null`, _saload_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _saload_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `sastore`

#### Operation

Store into `short` array

#### Format

  
_sastore_  

#### Forms

_sastore_ = 86 (0x56)

#### Operand Stack

..., _arrayref_, _index_, _value_ →

...

#### Description

The _arrayref_ must be of type `reference` and must refer to an array whose components are of type `short`. Both _index_ and _value_ must be of type `int`. The _arrayref_, _index_, and _value_ are popped from the operand stack. The `int` _value_ is truncated to a `short` and stored as the component of the array indexed by _index_.

#### Run-time Exceptions

If _arrayref_ is `null`, _sastore_ throws a `NullPointerException`.

Otherwise, if _index_ is not within the bounds of the array referenced by _arrayref_, the _sastore_ instruction throws an `ArrayIndexOutOfBoundsException`.

### `sipush`

#### Operation

Push `short`

#### Format

  
_sipush_  
_byte1_  
_byte2_  

#### Forms

_sipush_ = 17 (0x11)

#### Operand Stack

... →

..., _value_

#### Description

The immediate unsigned _byte1_ and _byte2_ values are assembled into an intermediate `short`, where the value of the `short` is (_byte1_ `<<` 8) | _byte2_. The intermediate value is then sign-extended to an `int` _value_. That _value_ is pushed onto the operand stack.

### `swap`

#### Operation

Swap the top two operand stack values

#### Format

  
_swap_  

#### Forms

_swap_ = 95 (0x5f)

#### Operand Stack

..., _value2_, _value1_ →

..., _value1_, _value2_

#### Description

Swap the top two values on the operand stack.

The _swap_ instruction must not be used unless _value1_ and _value2_ are both values of a category 1 computational type ([§2.11.1](jvms-2.html#jvms-2.11.1 "2.11.1. Types and the Java Virtual Machine")).

#### Notes

The Java Virtual Machine does not provide an instruction implementing a swap on operands of category 2 computational types.

### `tableswitch`

#### Operation

Access jump table by index and jump

#### Format

  
_tableswitch_  
_<0-3 byte pad>_  
_defaultbyte1_  
_defaultbyte2_  
_defaultbyte3_  
_defaultbyte4_  
_lowbyte1_  
_lowbyte2_  
_lowbyte3_  
_lowbyte4_  
_highbyte1_  
_highbyte2_  
_highbyte3_  
_highbyte4_  
_jump offsets..._  

#### Forms

_tableswitch_ = 170 (0xaa)

#### Operand Stack

..., _index_ →

...

#### Description

A _tableswitch_ is a variable-length instruction. Immediately after the _tableswitch_ opcode, between zero and three bytes must act as padding, such that _defaultbyte1_ begins at an address that is a multiple of four bytes from the start of the current method (the opcode of its first instruction). Immediately after the padding are bytes constituting three signed 32-bit values: _default_, _low_, and _high_. Immediately following are bytes constituting a series of _high_ - _low_ + 1 signed 32-bit offsets. The value _low_ must be less than or equal to _high_. The _high_ - _low_ + 1 signed 32-bit offsets are treated as a 0-based jump table. Each of these signed 32-bit values is constructed as (_byte1_ `<<` 24) | (_byte2_ `<<` 16) | (_byte3_ `<<` 8) | _byte4_.

The _index_ must be of type `int` and is popped from the operand stack. If _index_ is less than _low_ or _index_ is greater than _high_, then a target address is calculated by adding _default_ to the address of the opcode of this _tableswitch_ instruction. Otherwise, the offset at position _index_ - _low_ of the jump table is extracted. The target address is calculated by adding that offset to the address of the opcode of this _tableswitch_ instruction. Execution then continues at the target address.

The target address that can be calculated from each jump table offset, as well as the one that can be calculated from _default_, must be the address of an opcode of an instruction within the method that contains this _tableswitch_ instruction.

#### Notes

The alignment required of the 4-byte operands of the _tableswitch_ instruction guarantees 4-byte alignment of those operands if and only if the method that contains the _tableswitch_ starts on a 4-byte boundary.

### `wide`

#### Operation

Extend local variable index by additional bytes

#### Format 1

  
_wide_  
_<opcode>_  
_indexbyte1_  
_indexbyte2_  

where _<opcode>_ is one of _iload_, _fload_, _aload_, _lload_, _dload_, _istore_, _fstore_, _astore_, _lstore_, _dstore_, or _ret_

#### Format 2

  
_wide_  
_iinc_  
_indexbyte1_  
_indexbyte2_  
_constbyte1_  
_constbyte2_  

#### Forms

_wide_ = 196 (0xc4)

#### Operand Stack

Same as modified instruction

#### Description

The _wide_ instruction modifies the behavior of another instruction. It takes one of two formats, depending on the instruction being modified. The first form of the _wide_ instruction modifies one of the instructions _iload_, _fload_, _aload_, _lload_, _dload_, _istore_, _fstore_, _astore_, _lstore_, _dstore_, or _ret_ ([§_iload_](jvms-6.html#jvms-6.5.iload "iload"), [§_fload_](jvms-6.html#jvms-6.5.fload "fload"), [§_aload_](jvms-6.html#jvms-6.5.aload "aload"), [§_lload_](jvms-6.html#jvms-6.5.lload "lload"), [§_dload_](jvms-6.html#jvms-6.5.dload "dload"), [§_istore_](jvms-6.html#jvms-6.5.istore "istore"), [§_fstore_](jvms-6.html#jvms-6.5.fstore "fstore"), [§_astore_](jvms-6.html#jvms-6.5.astore "astore"), [§_lstore_](jvms-6.html#jvms-6.5.lstore "lstore"), [§_dstore_](jvms-6.html#jvms-6.5.dstore "dstore"), [§_ret_](jvms-6.html#jvms-6.5.ret "ret")). The second form applies only to the _iinc_ instruction ([§_iinc_](jvms-6.html#jvms-6.5.iinc "iinc")).

In either case, the _wide_ opcode itself is followed in the compiled code by the opcode of the instruction _wide_ modifies. In either form, two unsigned bytes _indexbyte1_ and _indexbyte2_ follow the modified opcode and are assembled into a 16-bit unsigned index to a local variable in the current frame ([§2.6](jvms-2.html#jvms-2.6 "2.6. Frames")), where the value of the index is (_indexbyte1_ `<<` 8) | _indexbyte2_. The calculated index must be an index into the local variable array of the current frame. Where the _wide_ instruction modifies an _lload_, _dload_, _lstore_, or _dstore_ instruction, the index following the calculated index (index + 1) must also be an index into the local variable array. In the second form, two immediate unsigned bytes _constbyte1_ and _constbyte2_ follow _indexbyte1_ and _indexbyte2_ in the code stream. Those bytes are also assembled into a signed 16-bit constant, where the constant is (_constbyte1_ `<<` 8) | _constbyte2_.

The widened bytecode operates as normal, except for the use of the wider index and, in the case of the second form, the larger increment range.

#### Notes

Although we say that _wide_ "modifies the behavior of another instruction," the _wide_ instruction effectively treats the bytes constituting the modified instruction as operands, denaturing the embedded instruction in the process. In the case of a modified _iinc_ instruction, one of the logical operands of the _iinc_ is not even at the normal offset from the opcode. The embedded instruction must never be executed directly; its opcode must never be the target of any control transfer instruction.


📜 Chapter 7. Opcode Mnemonics by Opcode
-------------------------------------

This chapter gives the mapping from Java Virtual Machine instruction opcodes, including the reserved opcodes ([§6.2](jvms-6.html#jvms-6.2 "6.2. Reserved Opcodes")), to the mnemonics for the instructions represented by those opcodes.

Opcode value 186 was not used prior to Java SE 7.

**Table 7.1.** 

Constants

`00 (0x00)`    nop  
`01 (0x01)`    aconst\_null  
`02 (0x02)`    iconst\_m1  
`03 (0x03)`    iconst\_0  
`04 (0x04)`    iconst\_1  
`05 (0x05)`    iconst\_2  
`06 (0x06)`    iconst\_3  
`07 (0x07)`    iconst\_4  
`08 (0x08)`    iconst\_5  
`09 (0x09)`    lconst\_0  
`10 (0x0a)`    lconst\_1  
`11 (0x0b)`    fconst\_0  
`12 (0x0c)`    fconst\_1  
`13 (0x0d)`    fconst\_2  
`14 (0x0e)`    dconst\_0  
`15 (0x0f)`    dconst\_1  
`16 (0x10)`    bipush  
`17 (0x11)`    sipush  
`18 (0x12)`    ldc  
`19 (0x13)`    ldc\_w  
`20 (0x14)`    ldc2\_w  

Loads

`21 (0x15)`    iload  
`22 (0x16)`    lload  
`23 (0x17)`    fload  
`24 (0x18)`    dload  
`25 (0x19)`    aload  
`26 (0x1a)`    iload\_0  
`27 (0x1b)`    iload\_1  
`28 (0x1c)`    iload\_2  
`29 (0x1d)`    iload\_3  
`30 (0x1e)`    lload\_0  
`31 (0x1f)`    lload\_1  
`32 (0x20)`    lload\_2  
`33 (0x21)`    lload\_3  
`34 (0x22)`    fload\_0  
`35 (0x23)`    fload\_1  
`36 (0x24)`    fload\_2  
`37 (0x25)`    fload\_3  
`38 (0x26)`    dload\_0  
`39 (0x27)`    dload\_1  
`40 (0x28)`    dload\_2  
`41 (0x29)`    dload\_3  
`42 (0x2a)`    aload\_0  
`43 (0x2b)`    aload\_1  
`44 (0x2c)`    aload\_2  
`45 (0x2d)`    aload\_3  
`46 (0x2e)`    iaload  
`47 (0x2f)`    laload  
`48 (0x30)`    faload  
`49 (0x31)`    daload  
`50 (0x32)`    aaload  
`51 (0x33)`    baload  
`52 (0x34)`    caload  
`53 (0x35)`    saload  
      
Stores

`54 (0x36)`    istore  
`55 (0x37)`    lstore  
`56 (0x38)`    fstore  
`57 (0x39)`    dstore  
`58 (0x3a)`    astore  
`59 (0x3b)`    istore\_0  
`60 (0x3c)`    istore\_1  
`61 (0x3d)`    istore\_2  
`62 (0x3e)`    istore\_3  
`63 (0x3f)`    lstore\_0  
`64 (0x40)`    lstore\_1  
`65 (0x41)`    lstore\_2  
`66 (0x42)`    lstore\_3  
`67 (0x43)`    fstore\_0  
`68 (0x44)`    fstore\_1  
`69 (0x45)`    fstore\_2  
`70 (0x46)`    fstore\_3  
`71 (0x47)`    dstore\_0  
`72 (0x48)`    dstore\_1  
`73 (0x49)`    dstore\_2  
`74 (0x4a)`    dstore\_3  
`75 (0x4b)`    astore\_0  
`76 (0x4c)`    astore\_1  
`77 (0x4d)`    astore\_2  
`78 (0x4e)`    astore\_3  
`79 (0x4f)`    iastore  
`80 (0x50)`    lastore  
`81 (0x51)`    fastore  
`82 (0x52)`    dastore  
`83 (0x53)`    aastore  
`84 (0x54)`    bastore  
`85 (0x55)`    castore  
`86 (0x56)`    sastore  


**Table 7.2.** 

Stack

`87 (0x57)`    pop  
`88 (0x58)`    pop2  
`89 (0x59)`    dup  
`90 (0x5a)`    dup\_x1  
`91 (0x5b)`    dup\_x2  
`92 (0x5c)`    dup2  
`93 (0x5d)`    dup2\_x1  
`94 (0x5e)`    dup2\_x2  
`95 (0x5f)`    swap  

Math

 `96 (0x60)`    iadd  
 `97 (0x61)`    ladd  
 `98 (0x62)`    fadd  
 `99 (0x63)`    dadd  
`100 (0x64)`    isub  
`101 (0x65)`    lsub  
`102 (0x66)`    fsub  
`103 (0x67)`    dsub  
`104 (0x68)`    imul  
`105 (0x69)`    lmul  
`106 (0x6a)`    fmul  
`107 (0x6b)`    dmul  
`108 (0x6c)`    idiv  
`109 (0x6d)`    ldiv  
`110 (0x6e)`    fdiv  
`111 (0x6f)`    ddiv  
`112 (0x70)`    irem  
`113 (0x71)`    lrem  
`114 (0x72)`    frem  
`115 (0x73)`    drem  
`116 (0x74)`    ineg  
`117 (0x75)`    lneg  
`118 (0x76)`    fneg  
`119 (0x77)`    dneg  
`120 (0x78)`    ishl  
`121 (0x79)`    lshl  
`122 (0x7a)`    ishr  
`123 (0x7b)`    lshr  
`124 (0x7c)`    iushr  
`125 (0x7d)`    lushr  
`126 (0x7e)`    iand  
`127 (0x7f)`    land  
`128 (0x80)`    ior  
`129 (0x81)`    lor  
`130 (0x82)`    ixor  
`131 (0x83)`    lxor  
`132 (0x84)`    iinc  

Conversions

`133 (0x85)`    i2l  
`134 (0x86)`    i2f  
`135 (0x87)`    i2d  
`136 (0x88)`    l2i  
`137 (0x89)`    l2f  
`138 (0x8a)`    l2d  
`139 (0x8b)`    f2i  
`140 (0x8c)`    f2l  
`141 (0x8d)`    f2d  
`142 (0x8e)`    d2i  
`143 (0x8f)`    d2l  
`144 (0x90)`    d2f  
`145 (0x91)`    i2b  
`146 (0x92)`    i2c  
`147 (0x93)`    i2s  


**Table 7.3.** 


Comparisons

`148 (0x94)`    lcmp  
`149 (0x95)`    fcmpl  
`150 (0x96)`    fcmpg  
`151 (0x97)`    dcmpl  
`152 (0x98)`    dcmpg  
`153 (0x99)`    ifeq  
`154 (0x9a)`    ifne  
`155 (0x9b)`    iflt  
`156 (0x9c)`    ifge  
`157 (0x9d)`    ifgt  
`158 (0x9e)`    ifle  
`159 (0x9f)`    if\_icmpeq  
`160 (0xa0)`    if\_icmpne  
`161 (0xa1)`    if\_icmplt  
`162 (0xa2)`    if\_icmpge  
`163 (0xa3)`    if\_icmpgt  
`164 (0xa4)`    if\_icmple  
`165 (0xa5)`    if\_acmpeq  
`166 (0xa6)`    if\_acmpne  
      

**Table 7.4.** 

Control

`167 (0xa7)`    goto  
`168 (0xa8)`    jsr  
`169 (0xa9)`    ret  
`170 (0xaa)`    tableswitch  
`171 (0xab)`    lookupswitch  
`172 (0xac)`    ireturn  
`173 (0xad)`    lreturn  
`174 (0xae)`    freturn  
`175 (0xaf)`    dreturn  
`176 (0xb0)`    areturn  
`177 (0xb1)`    return  


**Table 7.5.** 

References

`178 (0xb2)`    getstatic  
`179 (0xb3)`    putstatic  
`180 (0xb4)`    getfield  
`181 (0xb5)`    putfield  
`182 (0xb6)`    invokevirtual  
`183 (0xb7)`    invokespecial  
`184 (0xb8)`    invokestatic  
`185 (0xb9)`    invokeinterface  
`186 (0xba)`    invokedynamic  
`187 (0xbb)`    new  
`188 (0xbc)`    newarray  
`189 (0xbd)`    anewarray  
`190 (0xbe)`    arraylength  
`191 (0xbf)`    athrow  
`192 (0xc0)`    checkcast  
`193 (0xc1)`    instanceof  
`194 (0xc2)`    monitorenter  
`195 (0xc3)`    monitorexit  
      

Extended

  
`196 (0xc4)`    wide  
`197 (0xc5)`    multianewarray  
`198 (0xc6)`    ifnull  
`199 (0xc7)`    ifnonnull  
`200 (0xc8)`    goto\_w  
`201 (0xc9)`    jsr\_w  
      

Reserved

  
`202 (0xca)`    breakpoint  
`254 (0xfe)`    impdep1  
`255 (0xff)`    impdep2  

📜 Index
-------

### Index A

a bit of history, [1.1](jvms-1.html#jvms-1.1)
aaload, [4.10.1.9.aaload](jvms-4.html#jvms-4.10.1.9.aaload), [6.5.aaload](jvms-6.html#jvms-6.5.aaload)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-330)
aastore, [4.10.1.9.aastore](jvms-4.html#jvms-4.10.1.9.aastore), [6.5.aastore](jvms-6.html#jvms-6.5.aastore)
abrupt method invocation completion, [2.6.5](jvms-2.html#jvms-2.6.5)
Exceptions, [2.10](jvms-2.html#jvms-2.10-410)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.linking-110)
synchronization, [3.14](jvms-3.html#jvms-3.14-320)
access control, [5.4.4](jvms-5.html#jvms-5.4.4)
class and interface resolution, [5.4.3.1](jvms-5.html#jvms-5.4.3.1-100-C-A)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2-210-B)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-300-B)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-300-B)
type checking for protected members, [4.10.1.8](jvms-4.html#jvms-4.10.1.8-110)
accessing the run-time constant pool, [3.4](jvms-3.html#jvms-3.4)
accessors for Java Virtual Machine artifacts, [4.10.1.1](jvms-4.html#jvms-4.10.1.1)
type checking instructions, [4.10.1.9](jvms-4.html#jvms-4.10.1.9-100)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-A)
aconst\_null, [4.10.1.9.aconst\_null](jvms-4.html#jvms-4.10.1.9.aconst_null), [6.5.aconst\_null](jvms-6.html#jvms-6.5.aconst_null)
actual and computational types in the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1-320)
types and the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1-300), [2.11.1](jvms-2.html#jvms-2.11.1-310)
aload, [6.5.aload](jvms-6.html#jvms-6.5.aload)
astore, [6.5.astore](jvms-6.html#jvms-6.5.astore.notes-200)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
aload, aload\_<n>, [4.10.1.9.aload](jvms-4.html#jvms-4.10.1.9.aload)
aload\_<n>, [6.5.aload\_n](jvms-6.html#jvms-6.5.aload_n)
astore\_<n>, [6.5.astore\_n](jvms-6.html#jvms-6.5.astore_n.notes-200)
anewarray, [4.10.1.9.anewarray](jvms-4.html#jvms-4.10.1.9.anewarray), [6.5.anewarray](jvms-6.html#jvms-6.5.anewarray)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.notes-100)
AnnotationDefault attribute, [4.7.22](jvms-4.html#jvms-4.7.22)
annotations, [3.15](jvms-3.html#jvms-3.15-100)
annotations, [3.15](jvms-3.html#jvms-3.15)
areturn, [4.10.1.9.areturn](jvms-4.html#jvms-4.10.1.9.areturn), [6.5.areturn](jvms-6.html#jvms-6.5.areturn)
arithmetic, [3.3](jvms-3.html#jvms-3.3)
arithmetic instructions, [2.11.3](jvms-2.html#jvms-2.11.3)
control transfer instructions, [2.11.7](jvms-2.html#jvms-2.11.7-120)
array class loading, [5.3.3](jvms-5.html#jvms-5.3.3)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-B)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
array type codes, [6.5.newarray](jvms-6.html#jvms-6.5.newarray.desc-120)
arraylength, [4.10.1.9.arraylength](jvms-4.html#jvms-4.10.1.9.arraylength), [6.5.arraylength](jvms-6.html#jvms-6.5.arraylength)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.notes-100)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-330)
arrays, [3.9](jvms-3.html#jvms-3.9)
assumptions: the meaning of "must", [6.1](jvms-6.html#jvms-6.1)
astore, [6.5.astore](jvms-6.html#jvms-6.5.astore)
aload, [6.5.aload](jvms-6.html#jvms-6.5.aload.notes-100)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
astore, astore\_<n>, [4.10.1.9.astore](jvms-4.html#jvms-4.10.1.9.astore)
astore\_<n>, [6.5.astore\_n](jvms-6.html#jvms-6.5.astore_n)
aload\_<n>, [6.5.aload\_n](jvms-6.html#jvms-6.5.aload_n.notes-100)
athrow, [4.10.1.9.athrow](jvms-4.html#jvms-4.10.1.9.athrow), [6.5.athrow](jvms-6.html#jvms-6.5.athrow)
abrupt method invocation completion, [2.6.5](jvms-2.html#jvms-2.6.5-100)
Exceptions, [2.10](jvms-2.html#jvms-2.10-110-A)
attributes, [4.7](jvms-4.html#jvms-4.7)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-O), [4.1](jvms-4.html#jvms-4.1-200-O.2)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-J), [4.7.3](jvms-4.html#jvms-4.7.3-300-J.3)
fields, [4.5](jvms-4.html#jvms-4.5-200-E), [4.5](jvms-4.html#jvms-4.5-200-E.3)
methods, [4.6](jvms-4.html#jvms-4.6-200-E), [4.6](jvms-4.html#jvms-4.6-200-E.3)

### Index B

baload, [4.10.1.9.baload](jvms-4.html#jvms-4.10.1.9.baload), [6.5.baload](jvms-6.html#jvms-6.5.baload)
boolean type, [2.3.4](jvms-2.html#jvms-2.3.4-200)
newarray, [6.5.newarray](jvms-6.html#jvms-6.5.newarray.notes-100)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-330)
bastore, [4.10.1.9.bastore](jvms-4.html#jvms-4.10.1.9.bastore), [6.5.bastore](jvms-6.html#jvms-6.5.bastore)
boolean type, [2.3.4](jvms-2.html#jvms-2.3.4-200)
newarray, [6.5.newarray](jvms-6.html#jvms-6.5.newarray.notes-100)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-330)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1)
annotations, [3.15](jvms-3.html#jvms-3.15-200-D)
CONSTANT\_Class\_info structure, [4.4.1](jvms-4.html#jvms-4.4.1-200-B)
creation and loading, [5.3](jvms-5.html#jvms-5.3-300)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-B.1-A)
field descriptors, [4.3.2](jvms-4.html#jvms-4.3.2-130)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-A-A), [5.1](jvms-5.html#jvms-5.1-110-A-B-B)
binding native method implementations, [5.6](jvms-5.html#jvms-5.6)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-320)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-420)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-320)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-320)
bipush, [4.10.1.9.bipush](jvms-4.html#jvms-4.10.1.9.bipush), [6.5.bipush](jvms-6.html#jvms-6.5.bipush)
boolean type, [2.3.4](jvms-2.html#jvms-2.3.4)
primitive types and values, [2.3](jvms-2.html#jvms-2.3-100)
bootstrap loader, [5.3.1](jvms-5.html#jvms-5.3.1)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-A-A)
Java Virtual Machine startup, [5.2](jvms-5.html#jvms-5.2-100)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
notation, [1.4](jvms-1.html#jvms-1.4-110)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23)
call site specifier resolution, [5.4.3.6](jvms-5.html#jvms-5.4.3.6-100-A)
CONSTANT\_InvokeDynamic\_info structure, [4.4.10](jvms-4.html#jvms-4.4.10-200-B)
bytecode behaviors for method handles, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-220)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-200)
bytecode verifier, [4.10.2.2](jvms-4.html#jvms-4.10.2.2)

### Index C

call site specifier resolution, [5.4.3.6](jvms-5.html#jvms-5.4.3.6)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-120)
caload, [4.10.1.9.caload](jvms-4.html#jvms-4.10.1.9.caload), [6.5.caload](jvms-6.html#jvms-6.5.caload)
castore, [4.10.1.9.castore](jvms-4.html#jvms-4.10.1.9.castore), [6.5.castore](jvms-6.html#jvms-6.5.castore)
checkcast, [4.10.1.9.checkcast](jvms-4.html#jvms-4.10.1.9.checkcast), [6.5.checkcast](jvms-6.html#jvms-6.5.checkcast)
instanceof, [6.5.instanceof](jvms-6.html#jvms-6.5.instanceof.notes-100)
class access and property modifiers, [4.1](jvms-4.html#jvms-4.1-200-E.1)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-E), [4.1](jvms-4.html#jvms-4.1-200-E.4), [4.1](jvms-4.html#jvms-4.1-200-E.9)
class and interface resolution, [5.4.3.1](jvms-5.html#jvms-5.4.3.1)
anewarray, [6.5.anewarray](jvms-6.html#jvms-6.5.anewarray.desc-100), [6.5.anewarray](jvms-6.html#jvms-6.5.anewarray.linking-100)
checkcast, [6.5.checkcast](jvms-6.html#jvms-6.5.checkcast.desc-120), [6.5.checkcast](jvms-6.html#jvms-6.5.checkcast.linking-100)
class and interface resolution, [5.4.3.1](jvms-5.html#jvms-5.4.3.1-100-B)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5-100-C), [5.3.5](jvms-5.html#jvms-5.3.5-100-D)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2-100)
instanceof, [6.5.instanceof](jvms-6.html#jvms-6.5.instanceof.desc-210), [6.5.instanceof](jvms-6.html#jvms-6.5.instanceof.linking-100)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-100)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-220), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.linking-100)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-220), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.linking-100)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-100), [5.4.3.3](jvms-5.html#jvms-5.4.3.3-200-B-A)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-100)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.desc-200), [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.linking-100)
new, [6.5.new](jvms-6.html#jvms-6.5.new.desc-100), [6.5.new](jvms-6.html#jvms-6.5.new.linking-100)
class file format, [2.1](jvms-2.html#jvms-2.1), [4](jvms-4.html)
assumptions: the meaning of "must", [6.1](jvms-6.html#jvms-6.1-100)
creation and loading, [5.3](jvms-5.html#jvms-5.3-110)
reserved opcodes, [6.2](jvms-6.html#jvms-6.2-100)
class libraries, [2.12](jvms-2.html#jvms-2.12)
creation and loading, [5.3](jvms-5.html#jvms-5.3-100)
initialization, [5.5](jvms-5.html#jvms-5.5-110-C)
class loading, [5.3](jvms-5.html#jvms-5.3)
access control, [5.4.4](jvms-5.html#jvms-5.4.4-100-B)
class and interface resolution, [5.4.3.1](jvms-5.html#jvms-5.4.3.1-100-A)
creating array classes, [5.3.3](jvms-5.html#jvms-5.3.3-120-A)
format checking, [4.8](jvms-4.html#jvms-4.8-100)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-110)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-110)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-120)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-100)
run-time constant pool, [2.5.5](jvms-2.html#jvms-2.5.5-110), [5.1](jvms-5.html#jvms-5.1-110)
verification, [5.4.1](jvms-5.html#jvms-5.4.1-100)
verification type system, [4.10.1.2](jvms-4.html#jvms-4.10.1.2-110-C)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1)
annotations, [3.15](jvms-3.html#jvms-3.15-200-A)
attributes, [4.7](jvms-4.html#jvms-4.7-100)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-100)
Deprecated attribute, [4.7.15](jvms-4.html#jvms-4.7.15-100)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5-100-B.1-A), [5.3.5](jvms-5.html#jvms-5.3.5-100-B.1-B)
EnclosingMethod attribute, [4.7.7](jvms-4.html#jvms-4.7.7-100)
format checking, [4.8](jvms-4.html#jvms-4.8-100)
InnerClasses attribute, [4.7.6](jvms-4.html#jvms-4.7.6-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-200-C)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-A), [4.11](jvms-4.html#jvms-4.11-100-B), [4.11](jvms-4.html#jvms-4.11-100-C), [4.11](jvms-4.html#jvms-4.11-100-D)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2-130-A)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17-100)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21-100)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16-100)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-100)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9-100)
SourceDebugExtension attribute, [4.7.11](jvms-4.html#jvms-4.7.11-100)
SourceFile attribute, [4.7.10](jvms-4.html#jvms-4.7.10-100)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8-100)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-100)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3)
attributes, [4.7](jvms-4.html#jvms-4.7-100)
constraints on Java Virtual Machine Code, [4.9](jvms-4.html#jvms-4.9-100)
defining and naming new attributes, [4.7.1](jvms-4.html#jvms-4.7.1-100)
Exceptions, [2.10](jvms-2.html#jvms-2.10-420)
frames, [2.6](jvms-2.html#jvms-2.6-120)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-E), [4.11](jvms-4.html#jvms-4.11-100-F)
LineNumberTable attribute, [4.7.12](jvms-4.html#jvms-4.7.12-100)
local variables, [2.6.1](jvms-2.html#jvms-2.6.1-100)
LocalVariableTable attribute, [4.7.13](jvms-4.html#jvms-4.7.13-100)
LocalVariableTypeTable attribute, [4.7.14](jvms-4.html#jvms-4.7.14-100)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-100)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21-100)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-100)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-100)
throwing and handling Exceptions, [3.12](jvms-3.html#jvms-3.12-250), [3.12](jvms-3.html#jvms-3.12-440)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-210)
verification of class files, [4.10](jvms-4.html#jvms-4.10-300a)
compiling finally, [3.13](jvms-3.html#jvms-3.13)
astore, [6.5.astore](jvms-6.html#jvms-6.5.astore.notes-100)
astore\_<n>, [6.5.astore\_n](jvms-6.html#jvms-6.5.astore_n.notes-100)
jsr, [6.5.jsr](jvms-6.html#jvms-6.5.jsr.notes-200)
jsr\_w, [6.5.jsr\_w](jvms-6.html#jvms-6.5.jsr_w.notes-200)
more control examples, [3.5](jvms-3.html#jvms-3.5-100)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-200)
compiling for the Java Virtual Machine, [3](jvms-3.html)
instance initialization methods and newly created objects, [4.10.2.4](jvms-4.html#jvms-4.10.2.4-120)
compiling switches, [3.10](jvms-3.html#jvms-3.10)
more control examples, [3.5](jvms-3.html#jvms-3.5-100)
constant pool, [4.4](jvms-4.html#jvms-4.4), [5.1](jvms-5.html#jvms-5.1)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-D)
format checking, [4.8](jvms-4.html#jvms-4.8-100-D)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-100)
getstatic, [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.desc-100)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-110), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-130-A), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-300)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-100)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-100)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-100), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-210), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-220), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-230)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w.desc-100)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-100), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-210), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-230)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-230)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-100)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-100)
resolution, [5.4.3](jvms-5.html#jvms-5.4.3-600)
run-time constant pool, [2.5.5](jvms-2.html#jvms-2.5.5-100), [5.1](jvms-5.html#jvms-5.1-110)
constant pool tags, [4.4](jvms-4.html#jvms-4.4-140)
constant pool, [4.4](jvms-4.html#jvms-4.4-130)
constant value attribute types, [4.7.2](jvms-4.html#jvms-4.7.2-300-C.1)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2-300-C)
CONSTANT\_Class\_info structure, [4.4.1](jvms-4.html#jvms-4.4.1)
arrays, [3.9](jvms-3.html#jvms-3.9-320)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1-100)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-F)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-H.1-C)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2-200-B)
EnclosingMethod attribute, [4.7.7](jvms-4.html#jvms-4.7.7-300-C)
Exceptions attribute, [4.7.5](jvms-4.html#jvms-4.7.5-300-D)
InnerClasses attribute, [4.7.6](jvms-4.html#jvms-4.7.6-110)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-220)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-A)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-520-F)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2)
CONSTANT\_MethodHandle\_info structure, [4.4.8](jvms-4.html#jvms-4.4.8-200-C-A), [4.4.8](jvms-4.html#jvms-4.4.8-200-C-B), [4.4.8](jvms-4.html#jvms-4.4.8-200-C-C)
instruction representation, [4.10.1.3](jvms-4.html#jvms-4.10.1.3-130)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-B), [5.1](jvms-5.html#jvms-5.1-110-C), [5.1](jvms-5.html#jvms-5.1-110-D)
CONSTANT\_Integer\_info and CONSTANT\_Float\_info structures, [4.4.4](jvms-4.html#jvms-4.4.4)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
floating-point types, value sets, and values, [2.3.2](jvms-2.html#jvms-2.3.2-180)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.notes-100)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.notes-200)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-200-B), [5.1](jvms-5.html#jvms-5.1-200-B.1)
CONSTANT\_InvokeDynamic\_info structure, [4.4.10](jvms-4.html#jvms-4.4.10)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-110)
instruction representation, [4.10.1.3](jvms-4.html#jvms-4.10.1.3-130)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-G)
CONSTANT\_Long\_info and CONSTANT\_Double\_info structures, [4.4.5](jvms-4.html#jvms-4.4.5)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-C)
floating-point types, value sets, and values, [2.3.2](jvms-2.html#jvms-2.3.2-180)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w.notes-200)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-200-B), [5.1](jvms-5.html#jvms-5.1-200-B.1)
CONSTANT\_MethodHandle\_info structure, [4.4.8](jvms-4.html#jvms-4.4.8)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D), [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-A), [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-E)
CONSTANT\_MethodType\_info structure, [4.4.9](jvms-4.html#jvms-4.4.9)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-F)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1-100)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2-200-C)
CONSTANT\_InvokeDynamic\_info structure, [4.4.10](jvms-4.html#jvms-4.4.10-200-C)
EnclosingMethod attribute, [4.7.7](jvms-4.html#jvms-4.7.7-300-D.1)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-300)
CONSTANT\_String\_info structure, [4.4.3](jvms-4.html#jvms-4.4.3)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-D.1-C)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-200-A)
CONSTANT\_Utf8\_info structure, [4.4.7](jvms-4.html#jvms-4.4.7)
AnnotationDefault attribute, [4.7.22](jvms-4.html#jvms-4.7.22-300-A)
attributes, [4.7](jvms-4.html#jvms-4.7-130)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1-100)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-300-A)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-A)
CONSTANT\_Class\_info structure, [4.4.1](jvms-4.html#jvms-4.4.1-200-B)
CONSTANT\_MethodType\_info structure, [4.4.9](jvms-4.html#jvms-4.4.9-200-B)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6-200-B), [4.4.6](jvms-4.html#jvms-4.4.6-200-C)
CONSTANT\_String\_info structure, [4.4.3](jvms-4.html#jvms-4.4.3-200-B)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2-300-A)
Deprecated attribute, [4.7.15](jvms-4.html#jvms-4.7.15-300-A)
descriptors, [4.3](jvms-4.html#jvms-4.3-100)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-B.1-A), [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-B.1-B), [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-C.1)
EnclosingMethod attribute, [4.7.7](jvms-4.html#jvms-4.7.7-300-A)
Exceptions attribute, [4.7.5](jvms-4.html#jvms-4.7.5-300-A)
fields, [4.5](jvms-4.html#jvms-4.5-200-B), [4.5](jvms-4.html#jvms-4.5-200-C)
InnerClasses attribute, [4.7.6](jvms-4.html#jvms-4.7.6-300-A), [4.7.6](jvms-4.html#jvms-4.7.6-300-D.1-C.1)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-H)
LineNumberTable attribute, [4.7.12](jvms-4.html#jvms-4.7.12-300-A)
LocalVariableTable attribute, [4.7.13](jvms-4.html#jvms-4.7.13-300-A), [4.7.13](jvms-4.html#jvms-4.7.13-300-D-B), [4.7.13](jvms-4.html#jvms-4.7.13-300-D-C)
LocalVariableTypeTable attribute, [4.7.14](jvms-4.html#jvms-4.7.14-300-A), [4.7.14](jvms-4.html#jvms-4.7.14-300-D-B), [4.7.14](jvms-4.html#jvms-4.7.14-300-D-C)
methods, [4.6](jvms-4.html#jvms-4.6-200-B)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-300)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17-300-A)
RuntimeInvisibleParameterAnnotations attribute, [4.7.19](jvms-4.html#jvms-4.7.19-300-A)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16-300-A), [4.7.16](jvms-4.html#jvms-4.7.16-300-D.2-A), [4.7.16](jvms-4.html#jvms-4.7.16-300-D.2-C-A)
RuntimeVisibleParameterAnnotations attribute, [4.7.18](jvms-4.html#jvms-4.7.18-300-A)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9-300-A), [4.7.9](jvms-4.html#jvms-4.7.9-300-C)
SourceDebugExtension attribute, [4.7.11](jvms-4.html#jvms-4.7.11-300-A), [4.7.11](jvms-4.html#jvms-4.7.11-300-C)
SourceFile attribute, [4.7.10](jvms-4.html#jvms-4.7.10-300-A), [4.7.10](jvms-4.html#jvms-4.7.10-300-C)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-300-A)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8-300-A)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2)
initialization, [5.5](jvms-5.html#jvms-5.5-210-F.1)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-H)
constraints, [5.3.4](jvms-5.html#jvms-5.3.4)
creating array classes, [5.3.3](jvms-5.html#jvms-5.3.3-120-B.2)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5-100-E)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2-210-C.2)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-300-C.4)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2-120)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-300-C.4)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-110)
constraints on Java Virtual Machine Code, [4.9](jvms-4.html#jvms-4.9)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-F.2)
verification, [5.4.1](jvms-5.html#jvms-5.4.1-100), [5.4.1](jvms-5.html#jvms-5.4.1-110)
verification of class files, [4.10](jvms-4.html#jvms-4.10-300a)
control transfer instructions, [2.11.7](jvms-2.html#jvms-2.11.7)
creating array classes, [5.3.3](jvms-5.html#jvms-5.3.3)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-B)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
creation and loading, [5.3](jvms-5.html#jvms-5.3)
access control, [5.4.4](jvms-5.html#jvms-5.4.4-100-B)
class and interface resolution, [5.4.3.1](jvms-5.html#jvms-5.4.3.1-100-A)
creating array classes, [5.3.3](jvms-5.html#jvms-5.3.3-120-A)
format checking, [4.8](jvms-4.html#jvms-4.8-100)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-110)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-110)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-120)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-100)
run-time constant pool, [2.5.5](jvms-2.html#jvms-2.5.5-110), [5.1](jvms-5.html#jvms-5.1-110)
verification, [5.4.1](jvms-5.html#jvms-5.4.1-100)
verification type system, [4.10.1.2](jvms-4.html#jvms-4.10.1.2-110-C)

### Index D

d2f, [6.5.d2f](jvms-6.html#jvms-6.5.d2f)
d2f, d2i, d2l, [4.10.1.9.d2f](jvms-4.html#jvms-4.10.1.9.d2f)
d2i, [6.5.d2i](jvms-6.html#jvms-6.5.d2i)
d2l, [6.5.d2l](jvms-6.html#jvms-6.5.d2l)
dadd, [4.10.1.9.dadd](jvms-4.html#jvms-4.10.1.9.dadd), [6.5.dadd](jvms-6.html#jvms-6.5.dadd)
daload, [4.10.1.9.daload](jvms-4.html#jvms-4.10.1.9.daload), [6.5.daload](jvms-6.html#jvms-6.5.daload)
dastore, [4.10.1.9.dastore](jvms-4.html#jvms-4.10.1.9.dastore), [6.5.dastore](jvms-6.html#jvms-6.5.dastore)
data types, [2.2](jvms-2.html#jvms-2.2)
baload, [6.5.baload](jvms-6.html#jvms-6.5.baload.notes-100)
bastore, [6.5.bastore](jvms-6.html#jvms-6.5.bastore.notes-100)
dcmp<op>, [4.10.1.9.dcmp\_op](jvms-4.html#jvms-4.10.1.9.dcmp_op), [6.5.dcmp\_op](jvms-6.html#jvms-6.5.dcmp_op)
dconst\_<d>, [4.10.1.9.dconst\_d](jvms-4.html#jvms-4.10.1.9.dconst_d), [6.5.dconst\_d](jvms-6.html#jvms-6.5.dconst_d)
ddiv, [4.10.1.9.ddiv](jvms-4.html#jvms-4.10.1.9.ddiv), [6.5.ddiv](jvms-6.html#jvms-6.5.ddiv)
defineclass, [5.3.5](jvms-5.html#jvms-5.3.5)
creation and loading, [5.3](jvms-5.html#jvms-5.3-520)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2-130-A)
loading using the bootstrap class loader, [5.3.1](jvms-5.html#jvms-5.3.1-300)
defining and naming new attributes, [4.7.1](jvms-4.html#jvms-4.7.1)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-O.3)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-J.4)
fields, [4.5](jvms-4.html#jvms-4.5-200-E.4)
methods, [4.6](jvms-4.html#jvms-4.6-200-E.4)
Deprecated attribute, [4.7.15](jvms-4.html#jvms-4.7.15)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5)
creation and loading, [5.3](jvms-5.html#jvms-5.3-520)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2-130-A)
loading using the bootstrap class loader, [5.3.1](jvms-5.html#jvms-5.3.1-300)
descriptors, [4.3](jvms-4.html#jvms-4.3)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1-100)
format checking, [4.8](jvms-4.html#jvms-4.8-100-E)
dload, [6.5.dload](jvms-6.html#jvms-6.5.dload)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
dload, dload\_<n>, [4.10.1.9.dload](jvms-4.html#jvms-4.10.1.9.dload)
dload\_<n>, [6.5.dload\_n](jvms-6.html#jvms-6.5.dload_n)
dmul, [4.10.1.9.dmul](jvms-4.html#jvms-4.10.1.9.dmul), [6.5.dmul](jvms-6.html#jvms-6.5.dmul)
dneg, [4.10.1.9.dneg](jvms-4.html#jvms-4.10.1.9.dneg), [6.5.dneg](jvms-6.html#jvms-6.5.dneg)
drem, [4.10.1.9.drem](jvms-4.html#jvms-4.10.1.9.drem), [6.5.drem](jvms-6.html#jvms-6.5.drem)
dreturn, [4.10.1.9.dreturn](jvms-4.html#jvms-4.10.1.9.dreturn), [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn)
dstore, [6.5.dstore](jvms-6.html#jvms-6.5.dstore)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
dstore, dstore\_<n>, [4.10.1.9.dstore](jvms-4.html#jvms-4.10.1.9.dstore)
dstore\_<n>, [6.5.dstore\_n](jvms-6.html#jvms-6.5.dstore_n)
dsub, [4.10.1.9.dsub](jvms-4.html#jvms-4.10.1.9.dsub), [6.5.dsub](jvms-6.html#jvms-6.5.dsub)xmlns:rx="http://www.renderx.com/XSL/Extensions">dup, [4.10.1.9.dup](jvms-4.html#jvms-4.10.1.9.dup), [6.5.dup](jvms-6.html#jvms-6.5.dup)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-310)
dup2, [4.10.1.9.dup2](jvms-4.html#jvms-4.10.1.9.dup2), [6.5.dup2](jvms-6.html#jvms-6.5.dup2)
dup2\_x1, [4.10.1.9.dup2\_x1](jvms-4.html#jvms-4.10.1.9.dup2_x1), [6.5.dup2\_x1](jvms-6.html#jvms-6.5.dup2_x1)
dup2\_x2, [4.10.1.9.dup2\_x2](jvms-4.html#jvms-4.10.1.9.dup2_x2), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2)
dup\_x1, [4.10.1.9.dup\_x1](jvms-4.html#jvms-4.10.1.9.dup_x1), [6.5.dup\_x1](jvms-6.html#jvms-6.5.dup_x1)
dup\_x2, [4.10.1.9.dup\_x2](jvms-4.html#jvms-4.10.1.9.dup_x2), [6.5.dup\_x2](jvms-6.html#jvms-6.5.dup_x2)
dynamic linking, [2.6.3](jvms-2.html#jvms-2.6.3)

### Index E

element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1)
EnclosingMethod attribute, [4.7.7](jvms-4.html#jvms-4.7.7)
Exceptions, [2.10](jvms-2.html#jvms-2.10)
abrupt method invocation completion, [2.6.5](jvms-2.html#jvms-2.6.5-100)
athrow, [6.5.athrow](jvms-6.html#jvms-6.5.athrow.desc-100)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-H)
normal method invocation completion, [2.6.4](jvms-2.html#jvms-2.6.4-100)
synchronization, [3.14](jvms-3.html#jvms-3.14-320)
throwing and handling Exceptions, [3.12](jvms-3.html#jvms-3.12-250), [3.12](jvms-3.html#jvms-3.12-420)
Virtual Machine errors, [6.3](jvms-6.html#jvms-6.3-100-A)
Exceptions and finally, [4.10.2.5](jvms-4.html#jvms-4.10.2.5)
compiling finally, [3.13](jvms-3.html#jvms-3.13-100)
jsr, [6.5.jsr](jvms-6.html#jvms-6.5.jsr.notes-200)
jsr\_w, [6.5.jsr\_w](jvms-6.html#jvms-6.5.jsr_w.notes-200)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-200)
Exceptions attribute, [4.7.5](jvms-4.html#jvms-4.7.5)

### Index F

f2d, [6.5.f2d](jvms-6.html#jvms-6.5.f2d)
f2d, f2i, f2l, [4.10.1.9.f2d](jvms-4.html#jvms-4.10.1.9.f2d)
f2i, [6.5.f2i](jvms-6.html#jvms-6.5.f2i)
f2l, [6.5.f2l](jvms-6.html#jvms-6.5.f2l)
fadd, [4.10.1.9.fadd](jvms-4.html#jvms-4.10.1.9.fadd), [6.5.fadd](jvms-6.html#jvms-6.5.fadd)
faload, [4.10.1.9.faload](jvms-4.html#jvms-4.10.1.9.faload), [6.5.faload](jvms-6.html#jvms-6.5.faload)
fastore, [4.10.1.9.fastore](jvms-4.html#jvms-4.10.1.9.fastore), [6.5.fastore](jvms-6.html#jvms-6.5.fastore)
fcmp<op>, [4.10.1.9.fcmp\_op](jvms-4.html#jvms-4.10.1.9.fcmp_op), [6.5.fcmp\_op](jvms-6.html#jvms-6.5.fcmp_op)
fconst\_<f>, [4.10.1.9.fconst\_f](jvms-4.html#jvms-4.10.1.9.fconst_f), [6.5.fconst\_f](jvms-6.html#jvms-6.5.fconst_f)
fdiv, [4.10.1.9.fdiv](jvms-4.html#jvms-4.10.1.9.fdiv), [6.5.fdiv](jvms-6.html#jvms-6.5.fdiv)
feedback, [1.5](jvms-1.html#jvms-1.5)
field access and property flags, [4.5](jvms-4.html#jvms-4.5-200-A.1)
fields, [4.5](jvms-4.html#jvms-4.5-200-A), [4.5](jvms-4.html#jvms-4.5-200-A.2), [4.5](jvms-4.html#jvms-4.5-200-A.3), [4.5](jvms-4.html#jvms-4.5-200-A.6)
field descriptors, [4.3.2](jvms-4.html#jvms-4.3.2)
CONSTANT\_Class\_info structure, [4.4.1](jvms-4.html#jvms-4.4.1-300)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2-200-C.1)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6-200-C)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-B.1-A)
fields, [4.5](jvms-4.html#jvms-4.5-110), [4.5](jvms-4.html#jvms-4.5-200-C)
instruction representation, [4.10.1.3](jvms-4.html#jvms-4.10.1.3-140)
LocalVariableTable attribute, [4.7.13](jvms-4.html#jvms-4.7.13-300-D-C)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-210)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-110)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-300)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-A-B-A)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16-300-D.2-A)
static constraints, [4.9.1](jvms-4.html#jvms-4.9.1-120-M)
structural constraints, [4.9.2](jvms-4.html#jvms-4.9.2-120-O)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-100), [6.5.getfield](jvms-6.html#jvms-6.5.getfield.linking-100)
getstatic, [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.desc-100), [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.linking-100)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-130)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-110), [6.5.putfield](jvms-6.html#jvms-6.5.putfield.linking-100)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-100), [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.linking-100)
resolution, [5.4.3](jvms-5.html#jvms-5.4.3-500)
fields, [4.5](jvms-4.html#jvms-4.5)
attributes, [4.7](jvms-4.html#jvms-4.7-100)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-K)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2-100)
Deprecated attribute, [4.7.15](jvms-4.html#jvms-4.7.15-100)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17-100)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21-100)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16-100)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-100)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9-100)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8-100)
fload, [6.5.fload](jvms-6.html#jvms-6.5.fload)
types and the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1-100)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
fload, fload\_<n>, [4.10.1.9.fload](jvms-4.html#jvms-4.10.1.9.fload)
fload\_<n>, [6.5.fload\_n](jvms-6.html#jvms-6.5.fload_n)
floating-point arithmetic, [2.8](jvms-2.html#jvms-2.8)
floating-point modes, [2.8.2](jvms-2.html#jvms-2.8.2)
d2f, [6.5.d2f](jvms-6.html#jvms-6.5.d2f.desc-200)
f2d, [6.5.f2d](jvms-6.html#jvms-6.5.f2d.notes-100)
type conversion instructions, [2.11.4](jvms-2.html#jvms-2.11.4-130)
floating-point types, value sets, and values, [2.3.2](jvms-2.html#jvms-2.3.2)
CONSTANT\_Integer\_info and CONSTANT\_Float\_info structures, [4.4.4](jvms-4.html#jvms-4.4.4-200-B.1)
CONSTANT\_Long\_info and CONSTANT\_Double\_info structures, [4.4.5](jvms-4.html#jvms-4.4.5-200-B.3)
d2f, [6.5.d2f](jvms-6.html#jvms-6.5.d2f.desc-200), [6.5.d2f](jvms-6.html#jvms-6.5.d2f.desc-210)
f2d, [6.5.f2d](jvms-6.html#jvms-6.5.f2d.notes-100)
floating-point modes, [2.8.2](jvms-2.html#jvms-2.8.2-300)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-140-E)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.notes-100)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w.notes-200)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.notes-200)
more control examples, [3.5](jvms-3.html#jvms-3.5-300)
primitive types and values, [2.3](jvms-2.html#jvms-2.3-110)
floating-point value set parameters, [2.3.2](jvms-2.html#jvms-2.3.2-140-A)
floating-point types, value sets, and values, [2.3.2](jvms-2.html#jvms-2.3.2-140), [2.3.2](jvms-2.html#jvms-2.3.2-150), [2.3.2](jvms-2.html#jvms-2.3.2-170)
fmul, [4.10.1.9.fmul](jvms-4.html#jvms-4.10.1.9.fmul), [6.5.fmul](jvms-6.html#jvms-6.5.fmul)
fneg, [4.10.1.9.fneg](jvms-4.html#jvms-4.10.1.9.fneg), [6.5.fneg](jvms-6.html#jvms-6.5.fneg)
format checking, [4.8](jvms-4.html#jvms-4.8)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5-100-B.1-A)
format of examples, [3.1](jvms-3.html#jvms-3.1)
format of instruction descriptions, [6.4](jvms-6.html#jvms-6.4)
frames, [2.6](jvms-2.html#jvms-2.6)
aload, [6.5.aload](jvms-6.html#jvms-6.5.aload.desc-100)
aload\_<n>, [6.5.aload\_n](jvms-6.html#jvms-6.5.aload_n.desc-100)
anewarray, [6.5.anewarray](jvms-6.html#jvms-6.5.anewarray.desc-100)
areturn, [6.5.areturn](jvms-6.html#jvms-6.5.areturn.desc-100)
astore, [6.5.astore](jvms-6.html#jvms-6.5.astore.desc-100)
astore\_<n>, [6.5.astore\_n](jvms-6.html#jvms-6.5.astore_n.desc-100)
athrow, [6.5.athrow](jvms-6.html#jvms-6.5.athrow.desc-100)
checkcast, [6.5.checkcast](jvms-6.html#jvms-6.5.checkcast.desc-100)
dload, [6.5.dload](jvms-6.html#jvms-6.5.dload.desc-100)
dload\_<n>, [6.5.dload\_n](jvms-6.html#jvms-6.5.dload_n.desc-100)
dreturn, [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn.desc-100)
dstore, [6.5.dstore](jvms-6.html#jvms-6.5.dstore.desc-100)
dstore\_<n>, [6.5.dstore\_n](jvms-6.html#jvms-6.5.dstore_n.desc-100)
dynamic linking, [2.6.3](jvms-2.html#jvms-2.6.3-100)
fload, [6.5.fload](jvms-6.html#jvms-6.5.fload.desc-100)
fload\_<n>, [6.5.fload\_n](jvms-6.html#jvms-6.5.fload_n.desc-100)
format of instruction descriptions, [6.4](jvms-6.html#jvms-6.4-300)
freturn, [6.5.freturn](jvms-6.html#jvms-6.5.freturn.desc-100)
fstore, [6.5.fstore](jvms-6.html#jvms-6.5.fstore.desc-100)
fstore\_<n>, [6.5.fstore\_n](jvms-6.html#jvms-6.5.fstore_n.desc-100)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-100)
getstatic, [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.desc-100)
iinc, [6.5.iinc](jvms-6.html#jvms-6.5.iinc.desc-100)
iload, [6.5.iload](jvms-6.html#jvms-6.5.iload.desc-100)
iload\_<n>, [6.5.iload\_n](jvms-6.html#jvms-6.5.iload_n.desc-100)
instanceof, [6.5.instanceof](jvms-6.html#jvms-6.5.instanceof.desc-100)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-110)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-100)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-100)
ireturn, [6.5.ireturn](jvms-6.html#jvms-6.5.ireturn.desc-100)
istore, [6.5.istore](jvms-6.html#jvms-6.5.istore.desc-100)
istore\_<n>, [6.5.istore\_n](jvms-6.html#jvms-6.5.istore_n.desc-100)
Java Virtual Machine stacks, [2.5.2](jvms-2.html#jvms-2.5.2-100)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-100)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w.desc-100)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-100)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-E), [4.11](jvms-4.html#jvms-4.11-100-F)
lload, [6.5.lload](jvms-6.html#jvms-6.5.lload.desc-100)
lload\_<n>, [6.5.lload\_n](jvms-6.html#jvms-6.5.lload_n.desc-100)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2-100)
local variables, [2.6.1](jvms-2.html#jvms-2.6.1-100)
lreturn, [6.5.lreturn](jvms-6.html#jvms-6.5.lreturn.desc-100)
lstore, [6.5.lstore](jvms-6.html#jvms-6.5.lstore.desc-100)
lstore\_<n>, [6.5.lstore\_n](jvms-6.html#jvms-6.5.lstore_n.desc-100)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.desc-200)
new, [6.5.new](jvms-6.html#jvms-6.5.new.desc-100)
normal method invocation completion, [2.6.4](jvms-2.html#jvms-2.6.4-110)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-100)
pc register, [2.5.1](jvms-2.html#jvms-2.5.1-100)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-100)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-100)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.desc-100)
return, [6.5.return](jvms-6.html#jvms-6.5.return.desc-100)
use of constants, local variables, and control constructs, [3.2](jvms-3.html#jvms-3.2-200)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-110)
frem, [4.10.1.9.frem](jvms-4.html#jvms-4.10.1.9.frem), [6.5.frem](jvms-6.html#jvms-6.5.frem)
freturn, [4.10.1.9.freturn](jvms-4.html#jvms-4.10.1.9.freturn), [6.5.freturn](jvms-6.html#jvms-6.5.freturn)
fstore, [6.5.fstore](jvms-6.html#jvms-6.5.fstore)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
fstore, fstore\_<n>, [4.10.1.9.fstore](jvms-4.html#jvms-4.10.1.9.fstore)
fstore\_<n>, [6.5.fstore\_n](jvms-6.html#jvms-6.5.fstore_n)
fsub, [4.10.1.9.fsub](jvms-4.html#jvms-4.10.1.9.fsub), [6.5.fsub](jvms-6.html#jvms-6.5.fsub)

### Index G

getfield, [4.10.1.9.getfield](jvms-4.html#jvms-4.10.1.9.getfield), [6.5.getfield](jvms-6.html#jvms-6.5.getfield)
getstatic, [4.10.1.9.getstatic](jvms-4.html#jvms-4.10.1.9.getstatic), [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic)
initialization, [5.5](jvms-5.html#jvms-5.5-110-A)
goto, [6.5.goto](jvms-6.html#jvms-6.5.goto)
goto, goto\_w, [4.10.1.9.goto](jvms-4.html#jvms-4.10.1.9.goto)
goto\_w, [6.5.goto\_w](jvms-6.html#jvms-6.5.goto_w)
grammar notation, [4.3.1](jvms-4.html#jvms-4.3.1)
signatures, [4.7.9.1](jvms-4.html#jvms-4.7.9.1-200)

### Index H

heap, [2.5.3](jvms-2.html#jvms-2.5.3)

### Index I

i2b, [6.5.i2b](jvms-6.html#jvms-6.5.i2b)
i2b, i2c, i2d, i2f, i2l, i2s, [4.10.1.9.i2b](jvms-4.html#jvms-4.10.1.9.i2b)
i2c, [6.5.i2c](jvms-6.html#jvms-6.5.i2c)
i2d, [6.5.i2d](jvms-6.html#jvms-6.5.i2d)
i2f, [6.5.i2f](jvms-6.html#jvms-6.5.i2f)
i2l, [6.5.i2l](jvms-6.html#jvms-6.5.i2l)
i2s, [6.5.i2s](jvms-6.html#jvms-6.5.i2s)
iadd, [4.10.1.9.iadd](jvms-4.html#jvms-4.10.1.9.iadd), [6.5.iadd](jvms-6.html#jvms-6.5.iadd)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-210)
iaload, [4.10.1.9.iaload](jvms-4.html#jvms-4.10.1.9.iaload), [6.5.iaload](jvms-6.html#jvms-6.5.iaload)
iand, [4.10.1.9.iand](jvms-4.html#jvms-4.10.1.9.iand), [6.5.iand](jvms-6.html#jvms-6.5.iand)
iastore, [4.10.1.9.iastore](jvms-4.html#jvms-4.10.1.9.iastore), [6.5.iastore](jvms-6.html#jvms-6.5.iastore)
iconst\_<i>, [6.5.iconst\_i](jvms-6.html#jvms-6.5.iconst_i)
idiv, [6.5.idiv](jvms-6.html#jvms-6.5.idiv)
if<cond>, [4.10.1.9.if\_cond](jvms-4.html#jvms-4.10.1.9.if_cond), [6.5.if\_cond](jvms-6.html#jvms-6.5.if_cond)
if\_acmp<cond>, [4.10.1.9.if\_acmp\_cond](jvms-4.html#jvms-4.10.1.9.if_acmp_cond), [6.5.if\_acmp\_cond](jvms-6.html#jvms-6.5.if_acmp_cond)
if\_icmp<cond>, [4.10.1.9.if\_icmp\_cond](jvms-4.html#jvms-4.10.1.9.if_icmp_cond), [6.5.if\_icmp\_cond](jvms-6.html#jvms-6.5.if_icmp_cond)
ifnonnull, [4.10.1.9.ifnonnull](jvms-4.html#jvms-4.10.1.9.ifnonnull), [6.5.ifnonnull](jvms-6.html#jvms-6.5.ifnonnull)
ifnull, [4.10.1.9.ifnull](jvms-4.html#jvms-4.10.1.9.ifnull), [6.5.ifnull](jvms-6.html#jvms-6.5.ifnull)
iinc, [4.10.1.9.iinc](jvms-4.html#jvms-4.10.1.9.iinc), [6.5.iinc](jvms-6.html#jvms-6.5.iinc)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
iload, [6.5.iload](jvms-6.html#jvms-6.5.iload)
types and the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1-100)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
iload, iload\_<n>, [4.10.1.9.iload](jvms-4.html#jvms-4.10.1.9.iload)
iload\_<n>, [6.5.iload\_n](jvms-6.html#jvms-6.5.iload_n)
imul, [4.10.1.9.imul](jvms-4.html#jvms-4.10.1.9.imul), [6.5.imul](jvms-6.html#jvms-6.5.imul)
ineg, [4.10.1.9.ineg](jvms-4.html#jvms-4.10.1.9.ineg), [6.5.ineg](jvms-6.html#jvms-6.5.ineg)
initialization, [5.5](jvms-5.html#jvms-5.5)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2-100-A)
creation and loading, [5.3](jvms-5.html#jvms-5.3-510)
getstatic, [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.desc-110), [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.runtime-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-200), [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.runtime-100)
new, [6.5.new](jvms-6.html#jvms-6.5.new.desc-200)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-100)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-200), [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.notes-100), [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.runtime-100)
special methods, [2.9](jvms-2.html#jvms-2.9-200)
InnerClasses attribute, [4.7.6](jvms-4.html#jvms-4.7.6)
instance initialization methods and newly created objects, [4.10.2.4](jvms-4.html#jvms-4.10.2.4)
instanceof, [4.10.1.9.instanceof](jvms-4.html#jvms-4.10.1.9.instanceof), [6.5.instanceof](jvms-6.html#jvms-6.5.instanceof)
checkcast, [6.5.checkcast](jvms-6.html#jvms-6.5.checkcast.notes-100)
instruction representation, [4.10.1.3](jvms-4.html#jvms-4.10.1.3)
accessors for Java Virtual Machine artifacts, [4.10.1.1](jvms-4.html#jvms-4.10.1.1-100-Z.1)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-C)
instruction set summary, [2.11](jvms-2.html#jvms-2.11)
instructions, [6.5](jvms-6.html#jvms-6.5)
static constraints, [4.9.1](jvms-4.html#jvms-4.9.1-110-B)
integral types and values, [2.3.1](jvms-2.html#jvms-2.3.1)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-140-E)
primitive types and values, [2.3](jvms-2.html#jvms-2.3-110)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-100), [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.linking-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-130)
internal form of names, [4.2](jvms-4.html#jvms-4.2)
interpretation of field descriptors, [4.3.2](jvms-4.html#jvms-4.3.2-200)
field descriptors, [4.3.2](jvms-4.html#jvms-4.3.2-140)
verification type system, [4.10.1.2](jvms-4.html#jvms-4.10.1.2-110)
interpretation of tag values as types, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-130)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-120), [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-A.1)
interpretation of target\_type values (part 1), [4.7.20](jvms-4.html#jvms-4.7.20-400)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-A.1)
interpretation of target\_type values (part 2), [4.7.20](jvms-4.html#jvms-4.7.20-410)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-A.1)
interpretation of type\_path\_kind values, [4.7.20.2](jvms-4.html#jvms-4.7.20.2-220-B-A.1)
type\_path structure, [4.7.20.2](jvms-4.html#jvms-4.7.20.2-220-B-A)
introduction, [1](jvms-1.html)
invokedynamic, [4.10.1.9.invokedynamic](jvms-4.html#jvms-4.10.1.9.invokedynamic), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic)
BootstrapMethods attribute, [4.7.23](jvms-4.html#jvms-4.7.23-100)
CONSTANT\_InvokeDynamic\_info structure, [4.4.10](jvms-4.html#jvms-4.4.10-100)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-G-A)
invokeinterface, [4.10.1.9.invokeinterface](jvms-4.html#jvms-4.10.1.9.invokeinterface), [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface)
invokespecial, [4.10.1.9.invokespecial](jvms-4.html#jvms-4.10.1.9.invokespecial), [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-E.5)
special methods, [2.9](jvms-2.html#jvms-2.9-100)
invokestatic, [4.10.1.9.invokestatic](jvms-4.html#jvms-4.10.1.9.invokestatic), [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic)
initialization, [5.5](jvms-5.html#jvms-5.5-110-A)
invokevirtual, [4.10.1.9.invokevirtual](jvms-4.html#jvms-4.10.1.9.invokevirtual), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-130), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-300)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.notes-100)
special methods, [2.9](jvms-2.html#jvms-2.9-310)
invoking methods, [3.7](jvms-3.html#jvms-3.7)
ior, [4.10.1.9.ior](jvms-4.html#jvms-4.10.1.9.ior), [6.5.ior](jvms-6.html#jvms-6.5.ior)
irem, [4.10.1.9.irem](jvms-4.html#jvms-4.10.1.9.irem), [6.5.irem](jvms-6.html#jvms-6.5.irem)
ireturn, [4.10.1.9.ireturn](jvms-4.html#jvms-4.10.1.9.ireturn), [6.5.ireturn](jvms-6.html#jvms-6.5.ireturn)
ishl, [6.5.ishl](jvms-6.html#jvms-6.5.ishl)
ishl, ishr, iushr, [4.10.1.9.ishl](jvms-4.html#jvms-4.10.1.9.ishl)
ishr, [6.5.ishr](jvms-6.html#jvms-6.5.ishr)
istore, [6.5.istore](jvms-6.html#jvms-6.5.istore)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
istore, istore\_<n>, [4.10.1.9.istore](jvms-4.html#jvms-4.10.1.9.istore)
istore\_<n>, [6.5.istore\_n](jvms-6.html#jvms-6.5.istore_n)
isub, [4.10.1.9.isub](jvms-4.html#jvms-4.10.1.9.isub), [6.5.isub](jvms-6.html#jvms-6.5.isub)
iushr, [6.5.iushr](jvms-6.html#jvms-6.5.iushr)
ixor, [4.10.1.9.ixor](jvms-4.html#jvms-4.10.1.9.ixor), [6.5.ixor](jvms-6.html#jvms-6.5.ixor)

### Index J

Java Virtual Machine, [1.2](jvms-1.html#jvms-1.2)
Java Virtual Machine exit, [5.7](jvms-5.html#jvms-5.7)
Java Virtual Machine floating-point arithmetic and IEEE 754, [2.8.1](jvms-2.html#jvms-2.8.1)
Java Virtual Machine instruction set, [6](jvms-6.html)
Java Virtual Machine stacks, [2.5.2](jvms-2.html#jvms-2.5.2)
frames, [2.6](jvms-2.html#jvms-2.6-110)
Java Virtual Machine startup, [5.2](jvms-5.html#jvms-5.2)
initialization, [5.5](jvms-5.html#jvms-5.5-110-F)
jsr, [6.5.jsr](jvms-6.html#jvms-6.5.jsr)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-100), [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-200)
returnaddress type and values, [2.3.3](jvms-2.html#jvms-2.3.3-100)
jsr\_w, [6.5.jsr\_w](jvms-6.html#jvms-6.5.jsr_w)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-200)
returnaddress type and values, [2.3.3](jvms-2.html#jvms-2.3.3-100)

### Index L

l2d, [6.5.l2d](jvms-6.html#jvms-6.5.l2d)
l2d, l2f, l2i, [4.10.1.9.l2d](jvms-4.html#jvms-4.10.1.9.l2d)
l2f, [6.5.l2f](jvms-6.html#jvms-6.5.l2f)
l2i, [6.5.l2i](jvms-6.html#jvms-6.5.l2i)
ladd, [4.10.1.9.ladd](jvms-4.html#jvms-4.10.1.9.ladd), [6.5.ladd](jvms-6.html#jvms-6.5.ladd)
laload, [4.10.1.9.laload](jvms-4.html#jvms-4.10.1.9.laload), [6.5.laload](jvms-6.html#jvms-6.5.laload)
land, [4.10.1.9.land](jvms-4.html#jvms-4.10.1.9.land), [6.5.land](jvms-6.html#jvms-6.5.land)
lastore, [4.10.1.9.lastore](jvms-4.html#jvms-4.10.1.9.lastore), [6.5.lastore](jvms-6.html#jvms-6.5.lastore)
lcmp, [4.10.1.9.lcmp](jvms-4.html#jvms-4.10.1.9.lcmp), [6.5.lcmp](jvms-6.html#jvms-6.5.lcmp)
lconst\_<l>, [4.10.1.9.lconst\_l](jvms-4.html#jvms-4.10.1.9.lconst_l), [6.5.lconst\_l](jvms-6.html#jvms-6.5.lconst_l)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc)
call site specifier resolution, [5.4.3.6](jvms-5.html#jvms-5.4.3.6-100-C)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.notes-100)
ldc, ldc\_w, ldc2\_w, [4.10.1.9.ldc](jvms-4.html#jvms-4.10.1.9.ldc)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w)
ldiv, [4.10.1.9.ldiv](jvms-4.html#jvms-4.10.1.9.ldiv), [6.5.ldiv](jvms-6.html#jvms-6.5.ldiv)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11)
goto\_w, [6.5.goto\_w](jvms-6.html#jvms-6.5.goto_w.notes-100)
jsr\_w, [6.5.jsr\_w](jvms-6.html#jvms-6.5.jsr_w.notes-300)
method descriptors, [4.3.3](jvms-4.html#jvms-4.3.3-210)
LineNumberTable attribute, [4.7.12](jvms-4.html#jvms-4.7.12)
linking, [5.4](jvms-5.html#jvms-5.4)
verification of class files, [4.10](jvms-4.html#jvms-4.10-110)
lload, [6.5.lload](jvms-6.html#jvms-6.5.lload)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
lload, lload\_<n>, [4.10.1.9.lload](jvms-4.html#jvms-4.10.1.9.lload)
lload\_<n>, [6.5.lload\_n](jvms-6.html#jvms-6.5.lload_n)
lmul, [4.10.1.9.lmul](jvms-4.html#jvms-4.10.1.9.lmul), [6.5.lmul](jvms-6.html#jvms-6.5.lmul)
lneg,9.lneg">4.10.1.9.lneg, [6.5.lneg](jvms-6.html#jvms-6.5.lneg)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4)
creating array classes, [5.3.3](jvms-5.html#jvms-5.3.3-120-B.2)
deriving a class from a class file representation, [5.3.5](jvms-5.html#jvms-5.3.5-100-E)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2-210-C.2)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-300-C.4)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2-120)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-300-C.4)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-110)
loading using a user-defined class loader, [5.3.2](jvms-5.html#jvms-5.3.2)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-A-B)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
loading using the bootstrap class loader, [5.3.1](jvms-5.html#jvms-5.3.1)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-A-A)
Java Virtual Machine startup, [5.2](jvms-5.html#jvms-5.2-100)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
notation, [1.4](jvms-1.html#jvms-1.4-110)
loading, linking, and initializing, [5](jvms-5.html)
local variables, [2.6.1](jvms-2.html#jvms-2.6.1)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-D)
frames, [2.6](jvms-2.html#jvms-2.6-110)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2-100)
method descriptors, [4.3.3](jvms-4.html#jvms-4.3.3-210)
LocalVariableTable attribute, [4.7.13](jvms-4.html#jvms-4.7.13)
LocalVariableTypeTable attribute, [4.7.14](jvms-4.html#jvms-4.7.14)
location of enclosing attribute for target\_type values, [4.7.20](jvms-4.html#jvms-4.7.20-420)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-A.2)
lookupswitch, [4.10.1.9.lookupswitch](jvms-4.html#jvms-4.10.1.9.lookupswitch), [6.5.lookupswitch](jvms-6.html#jvms-6.5.lookupswitch)
instruction set summary, [2.11](jvms-2.html#jvms-2.11-210)
lor, [4.10.1.9.lor](jvms-4.html#jvms-4.10.1.9.lor), [6.5.lor](jvms-6.html#jvms-6.5.lor)
lrem, [4.10.1.9.lrem](jvms-4.html#jvms-4.10.1.9.lrem), [6.5.lrem](jvms-6.html#jvms-6.5.lrem)
lreturn, [4.10.1.9.lreturn](jvms-4.html#jvms-4.10.1.9.lreturn), [6.5.lreturn](jvms-6.html#jvms-6.5.lreturn)
lshl, [6.5.lshl](jvms-6.html#jvms-6.5.lshl)
lshl, lshr, lushr, [4.10.1.9.lshl](jvms-4.html#jvms-4.10.1.9.lshl)
lshr, [6.5.lshr](jvms-6.html#jvms-6.5.lshr)
lstore, [6.5.lstore](jvms-6.html#jvms-6.5.lstore)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
lstore, lstore\_<n>, [4.10.1.9.lstore](jvms-4.html#jvms-4.10.1.9.lstore)
lstore\_<n>, [6.5.lstore\_n](jvms-6.html#jvms-6.5.lstore_n)
lsub, [4.10.1.9.lsub](jvms-4.html#jvms-4.10.1.9.lsub), [6.5.lsub](jvms-6.html#jvms-6.5.lsub)
lushr, [6.5.lushr](jvms-6.html#jvms-6.5.lushr)
lxor, [4.10.1.9.lxor](jvms-4.html#jvms-4.10.1.9.lxor), [6.5.lxor](jvms-6.html#jvms-6.5.lxor)

### Index M

method access and property flags, [4.6](jvms-4.html#jvms-4.6-200-A.1)
methods, [4.6](jvms-4.html#jvms-4.6-200-A), [4.6](jvms-4.html#jvms-4.6-200-A.2), [4.6](jvms-4.html#jvms-4.6-200-A.3), [4.6](jvms-4.html#jvms-4.6-200-A.5), [4.6](jvms-4.html#jvms-4.6-200-A.10)
method area, [2.5.4](jvms-2.html#jvms-2.5.4)
creation and loading, [5.3](jvms-5.html#jvms-5.3-100)
run-time constant pool, [2.5.5](jvms-2.html#jvms-2.5.5-110)
method descriptors, [4.3.3](jvms-4.html#jvms-4.3.3)
areturn, [6.5.areturn](jvms-6.html#jvms-6.5.areturn.desc-100)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2-200-C.1)
CONSTANT\_InvokeDynamic\_info structure, [4.4.10](jvms-4.html#jvms-4.4.10-200-C)
CONSTANT\_MethodType\_info structure, [4.4.9](jvms-4.html#jvms-4.4.9-200-B)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6-200-C)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-C.1)
instruction representation, [4.10.1.3](jvms-4.html#jvms-4.10.1.3-140)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-100)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-100)
invoking methods, [3.7](jvms-3.html#jvms-3.7-100)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-G)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-100), [5.4.3.5](jvms-5.html#jvms-5.4.3.5-210)
MethodParameters attribute, [4.7.24](jvms-4.html#jvms-4.7.24-300-C)
methods, [4.6](jvms-4.html#jvms-4.6-110), [4.6](jvms-4.html#jvms-4.6-200-C)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-110-F)
RuntimeInvisibleParameterAnnotations attribute, [4.7.19](jvms-4.html#jvms-4.7.19-300-D)
RuntimeVisibleParameterAnnotations attribute, [4.7.18](jvms-4.html#jvms-4.7.18-300-D)
special methods, [2.9](jvms-2.html#jvms-2.9-200)
structural constraints, [4.9.2](jvms-4.html#jvms-4.9.2-120-L), [4.9.2](jvms-4.html#jvms-4.9.2-120-M-C)
method descriptors for method handles, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-260)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-240-C)
method invocation and return instructions, [2.11.8](jvms-2.html#jvms-2.11.8)
normal method invocation completion, [2.6.4](jvms-2.html#jvms-2.6.4-100)
synchronization, [2.11.10](jvms-2.html#jvms-2.11.10-110)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-200-D)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-200-C)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100), [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-300-D), [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.linking-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-100), [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.linking-100)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-100), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-210-C), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.linking-100)
invoking methods, [3.7](jvms-3.html#jvms-3.7-400)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-130)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5)
call site specifier resolution, [5.4.3.6](jvms-5.html#jvms-5.4.3.6-100-A), [5.4.3.6](jvms-5.html#jvms-5.4.3.6-100-B), [5.4.3.6](jvms-5.html#jvms-5.4.3.6-200)
CONSTANT\_MethodHandle\_info structure, [4.4.8](jvms-4.html#jvms-4.4.8-200-B)
initialization, [5.5](jvms-5.html#jvms-5.5-110-B)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-410), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-420), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.linking-120)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-230), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.linking-110)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-230), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.linking-110)
special methods, [2.9](jvms-2.html#jvms-2.9-310)
MethodParameters attribute, [4.7.24](jvms-4.html#jvms-4.7.24)
methods, [4.6](jvms-4.html#jvms-4.6)
AnnotationDefault attribute, [4.7.22](jvms-4.html#jvms-4.7.22-100)
attributes, [4.7](jvms-4.html#jvms-4.7-100)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-M)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-100)
Deprecated attribute, [4.7.15](jvms-4.html#jvms-4.7.15-100)
Exceptions attribute, [4.7.5](jvms-4.html#jvms-4.7.5-100)
floating-point modes, [2.8.2](jvms-2.html#jvms-2.8.2-100)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-320)
MethodParameters attribute, [4.7.24](jvms-4.html#jvms-4.7.24-100)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17-100)
RuntimeInvisibleParameterAnnotations attribute, [4.7.19](jvms-4.html#jvms-4.7.19-100)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21-100)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16-100)
RuntimeVisibleParameterAnnotations attribute, [4.7.18](jvms-4.html#jvms-4.7.18-100)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-100)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9-100)
special methods, [2.9](jvms-2.html#jvms-2.9-210)
synchronization, [2.11.10](jvms-2.html#jvms-2.11.10-110)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8-100)
mnemonic,[](jvms-6.html#jvms-6.4-mnemonic)
monitorenter, [4.10.1.9.monitorenter](jvms-4.html#jvms-4.10.1.9.monitorenter), [6.5.monitorenter](jvms-6.html#jvms-6.5.monitorenter)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-300)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-400)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-300)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-300)
monitorexit, [6.5.monitorexit](jvms-6.html#jvms-6.5.monitorexit.notes-100)
monitorexit, [4.10.1.9.monitorexit](jvms-4.html#jvms-4.10.1.9.monitorexit), [6.5.monitorexit](jvms-6.html#jvms-6.5.monitorexit)
areturn, [6.5.areturn](jvms-6.html#jvms-6.5.areturn.desc-100)
athrow, [6.5.athrow](jvms-6.html#jvms-6.5.athrow.desc-120)
dreturn, [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn.desc-100)
freturn, [6.5.freturn](jvms-6.html#jvms-6.5.freturn.desc-100)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-320-A)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-420-A)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-320-A)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-320-A)
ireturn, [6.5.ireturn](jvms-6.html#jvms-6.5.ireturn.desc-100)
lreturn, [6.5.lreturn](jvms-6.html#jvms-6.5.lreturn.desc-100)
monitorenter, [6.5.monitorenter](jvms-6.html#jvms-6.5.monitorenter.notes-100)
return, [6.5.return](jvms-6.html#jvms-6.5.return.desc-100)
more control examples, [3.5](jvms-3.html#jvms-3.5)
dcmp<op>, [6.5.dcmp\_op](jvms-6.html#jvms-6.5.dcmp_op.notes-100)
fcmp<op>, [6.5.fcmp\_op](jvms-6.html#jvms-6.5.fcmp_op.notes-100)
multianewarray, [4.10.1.9.multianewarray](jvms-4.html#jvms-4.10.1.9.multianewarray), [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray)

### Index N

native method stacks, [2.5.6](jvms-2.html#jvms-2.5.6)
native methods, [5.6](jvms-5.html#jvms-5.6)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-320)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-420)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-320)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-320)
nested class access and property flags, [4.7.6](jvms-4.html#jvms-4.7.6-300-D.1-D.1)
InnerClasses attribute, [4.7.6](jvms-4.html#jvms-4.7.6-300-D.1-D), [4.7.6](jvms-4.html#jvms-4.7.6-300-D.1-D.2)
new, [4.10.1.9.new](jvms-4.html#jvms-4.10.1.9.new), [6.5.new](jvms-6.html#jvms-6.5.new)
initialization, [5.5](jvms-5.html#jvms-5.5-110-A)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-520-G)
newarray, [4.10.1.9.newarray](jvms-4.html#jvms-4.10.1.9.newarray), [6.5.newarray](jvms-6.html#jvms-6.5.newarray)
baload, [6.5.baload](jvms-6.html#jvms-6.5.baload.notes-100)
bastore, [6.5.bastore](jvms-6.html#jvms-6.5.bastore.notes-100)
boolean type, [2.3.4](jvms-2.html#jvms-2.3.4-200)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.notes-100)
nop, [4.10.1.9.nop](jvms-4.html#jvms-4.10.1.9.nop), [6.5.nop](jvms-6.html#jvms-6.5.nop)
normal method invocation completion, [2.6.4](jvms-2.html#jvms-2.6.4)
synchronization, [3.14](jvms-3.html#jvms-3.14-320)
notation, [1.4](jvms-1.html#jvms-1.4)

### Index O

Object creation and manipulation, [2.11.5](jvms-2.html#jvms-2.11.5)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2-110)
opcode mnemonics by opcode, [7](jvms-7.html)
operand stack, [6.5.dup2](jvms-6.html#jvms-6.5.dup2.stack), [6.5.dup2\_x1](jvms-6.html#jvms-6.5.dup2_x1.stack), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2.stack), [6.5.dup\_x2](jvms-6.html#jvms-6.5.dup_x2.stack), [6.5.pop2](jvms-6.html#jvms-6.5.pop2.stack)
operand stack management instructions, [2.11.6](jvms-2.html#jvms-2.11.6)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-C)
format of instruction descriptions, [6.4](jvms-6.html#jvms-6.4-300)
frames, [2.6](jvms-2.html#jvms-2.6-110)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2-100)
structural constraints, [4.9.2](jvms-4.html#jvms-4.9.2-120-B)
operations on the operand stack, [3.11](jvms-3.html#jvms-3.11)
organization of the specification, [1.3](jvms-1.html#jvms-1.3)
overriding, [5.4.5](jvms-5.html#jvms-5.4.5)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-210-A)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-110)
type checking abstract and native methods, [4.10.1.5](jvms-4.html#jvms-4.10.1.5-200)
verification of class files, [4.10](jvms-4.html#jvms-4.10-300-B)

### Index P

pc register, [2.5.1](jvms-2.html#jvms-2.5.1)
pop, [6.5.pop](jvms-6.html#jvms-6.5.pop)
pop, pop2, [4.10.1.9.pop](jvms-4.html#jvms-4.10.1.9.pop)
pop2, [6.5.pop2](jvms-6.html#jvms-6.5.pop2)
predefined class file attributes (by class file version), [4.7](jvms-4.html#jvms-4.7-310)
attributes, [4.7](jvms-4.html#jvms-4.7-200-B)
predefined class file attributes (by location), [4.7](jvms-4.html#jvms-4.7-320)
attributes, [4.7](jvms-4.html#jvms-4.7-200-C)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-O.1)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-300-J.2)
fields, [4.5](jvms-4.html#jvms-4.5-200-E.2)
methods, [4.6](jvms-4.html#jvms-4.6-200-E.2)
predefined class file attributes (by section), [4.7](jvms-4.html#jvms-4.7-300)
attributes, [4.7](jvms-4.html#jvms-4.7-200-A)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120), [5.3.4](jvms-5.html#jvms-5.3.4-130)
primitive types and values, [2.3](jvms-2.html#jvms-2.3)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.desc-300)
new, [6.5.new](jvms-6.html#jvms-6.5.new.desc-100)
newarray, [6.5.newarray](jvms-6.html#jvms-6.5.newarray.desc-200)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-100)
process of verification by type inference, [4.10.2.1](jvms-4.html#jvms-4.10.2.1)
public design, private implementation, [2.13](jvms-2.html#jvms-2.13)
reserved opcodes, [6.2](jvms-6.html#jvms-6.2-300)
putfield, [4.10.1.9.putfield](jvms-4.html#jvms-4.10.1.9.putfield), [6.5.putfield](jvms-6.html#jvms-6.5.putfield)
putstatic, [4.10.1.9.putstatic](jvms-4.html#jvms-4.10.1.9.putstatic), [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic)
initialization, [5.5](jvms-5.html#jvms-5.5-110-A)

### Index R

receiving arguments, [3.6](jvms-3.html#jvms-3.6)
invoking methods, [3.7](jvms-3.html#jvms-3.7-220)
reference types and values, [2.4](jvms-2.html#jvms-2.4)
anewarray, [6.5.anewarray](jvms-6.html#jvms-6.5.anewarray.desc-100)
control transfer instructions, [2.11.7](jvms-2.html#jvms-2.11.7-110)
field resolution, [5.4.3.2](jvms-5.html#jvms-5.4.3.2-210-C.1)
interface method resolution, [5.4.3.4](jvms-5.html#jvms-5.4.3.4-300-C.2), [5.4.3.4](jvms-5.html#jvms-5.4.3.4-300-C.3)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-300-C.2), [5.4.3.3](jvms-5.html#jvms-5.4.3.3-300-C.3)
multianewarray, [6.5.multianewarray](jvms-6.html#jvms-6.5.multianewarray.desc-300)
new, [6.5.new](jvms-6.html#jvms-6.5.new.desc-100)
newarray, [6.5.newarray](jvms-6.html#jvms-6.5.newarray.desc-200)
preparation, [5.4.2](jvms-5.html#jvms-5.4.2-100), [5.4.2](jvms-5.html#jvms-5.4.2-130), [5.4.2](jvms-5.html#jvms-5.4.2-140), [5.4.2](jvms-5.html#jvms-5.4.2-220), [5.4.2](jvms-5.html#jvms-5.4.2-230)
representation of objects, [2.7](jvms-2.html#jvms-2.7)
reserved opcodes, [6.2](jvms-6.html#jvms-6.2)
static constraints, [4.9.1](jvms-4.html#jvms-4.9.1-110-B)
resolution, [5.4.3](jvms-5.html#jvms-5.4.3)
creation and loading, [5.3](jvms-5.html#jvms-5.3-510)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret)
jsr, [6.5.jsr](jvms-6.html#jvms-6.5.jsr.notes-100)
jsr\_w, [6.5.jsr\_w](jvms-6.html#jvms-6.5.jsr_w.notes-100)
returnaddress type and values, [2.3.3](jvms-2.html#jvms-2.3.3-100)
wide, [6.5.wide](jvms-6.html#jvms-6.5.wide.desc-100)
return, [4.10.1.9.return](jvms-4.html#jvms-4.10.1.9.return), [6.5.return](jvms-6.html#jvms-6.5.return)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-300)
returnaddress type and values, [2.3.3](jvms-2.html#jvms-2.3.3)
primitive types and values, [2.3](jvms-2.html#jvms-2.3-100)
run-time constant pool, [2.5.5](jvms-2.html#jvms-2.5.5), [5.1](jvms-5.html#jvms-5.1)
dynamic linking, [2.6.3](jvms-2.html#jvms-2.6.3-100)
frames, [2.6](jvms-2.html#jvms-2.6-110)
getfield, [6.5.getfield](jvms-6.html#jvms-6.5.getfield.desc-100)
getstatic, [6.5.getstatic](jvms-6.html#jvms-6.5.getstatic.desc-100)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-110), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-130-A), [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-300)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-100)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-100)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-100)
ldc, [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-100), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-210), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-220), [6.5.ldc](jvms-6.html#jvms-6.5.ldc.desc-230)
ldc2\_w, [6.5.ldc2\_w](jvms-6.html#jvms-6.5.ldc2_w.desc-100)
ldc\_w, [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-100), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-210), [6.5.ldc\_w](jvms-6.html#jvms-6.5.ldc_w.desc-230)
method type and method handle resolution, [5.4.3.5](jvms-5.html#jvms-5.4.3.5-230)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-100)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-100)
resolution, [5.4.3](jvms-5.html#jvms-5.4.3-600)
run-time constant pool, [5.1](jvms-5.html#jvms-5.1-100)
run-time data areas, [2.5](jvms-2.html#jvms-2.5)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17)
RuntimeInvisibleParameterAnnotations attribute, [4.7.19](jvms-4.html#jvms-4.7.19)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21)
RuntimeVisibleAnnotations attribute, [4.7.16](jvms-4.html#jvms-4.7.16)
annotations, [3.15](jvms-3.html#jvms-3.15-100)
element\_value structure, [4.7.16.1](jvms-4.html#jvms-4.7.16.1-200-D.1)
RuntimeInvisibleAnnotations attribute, [4.7.17](jvms-4.html#jvms-4.7.17-300-D)
RuntimeInvisibleParameterAnnotations attribute, [4.7.19](jvms-4.html#jvms-4.7.19-300-D-B)
RuntimeVisibleParameterAnnotations attribute, [4.7.18](jvms-4.html#jvms-4.7.18-300-D-B)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-D)
RuntimeVisibleParameterAnnotations attribute, [4.7.18](jvms-4.html#jvms-4.7.18)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20)
RuntimeInvisibleTypeAnnotations attribute, [4.7.21](jvms-4.html#jvms-4.7.21-300-D)

### Index S

saload, [4.10.1.9.saload](jvms-4.html#jvms-4.10.1.9.saload), [6.5.saload](jvms-6.html#jvms-6.5.saload)
sastore, [4.10.1.9.sastore](jvms-4.html#jvms-4.10.1.9.sastore), [6.5.sastore](jvms-6.html#jvms-6.5.sastore)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9)
signatures, [4.7.9.1](jvms-4.html#jvms-4.7.9.1)
LocalVariableTypeTable attribute, [4.7.14](jvms-4.html#jvms-4.7.14-300-D-C)
Signature attribute, [4.7.9](jvms-4.html#jvms-4.7.9-100)
sipush, [4.10.1.9.sipush](jvms-4.html#jvms-4.10.1.9.sipush), [6.5.sipush](jvms-6.html#jvms-6.5.sipush)
SourceDebugExtension attribute, [4.7.11](jvms-4.html#jvms-4.7.11)
SourceFile attribute, [4.7.10](jvms-4.html#jvms-4.7.10)
special methods, [2.9](jvms-2.html#jvms-2.9)
ClassFile structure, [4.1](jvms-4.html#jvms-4.1-200-M.1)
Code attribute, [4.7.3](jvms-4.html#jvms-4.7.3-100)
CONSTANT\_Fieldref\_info, CONSTANT\_Methodref\_info, and CONSTANT\_InterfaceMethodref\_info structures, [4.4.2](jvms-4.html#jvms-4.4.2-200-C.2)
CONSTANT\_MethodHandle\_info structure, [4.4.8](jvms-4.html#jvms-4.4.8-200-C-B)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6-200-B)
ConstantValue attribute, [4.7.2](jvms-4.html#jvms-4.7.2-100-A)
constraints on Java Virtual Machine Code, [4.9](jvms-4.html#jvms-4.9-100)
initialization, [5.5](jvms-5.html#jvms-5.5-100)
instance initialization methods and newly created objects, [4.10.2.4](jvms-4.html#jvms-4.10.2.4-130)
invokedynamic, [6.5.invokedynamic](jvms-6.html#jvms-6.5.invokedynamic.desc-200)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-110)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-200-A), [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.notes-100)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-110)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-110), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-200), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-400)
method area, [2.5.4](jvms-2.html#jvms-2.5.4-100)
method invocation and return instructions, [2.11.8](jvms-2.html#jvms-2.11.8-100-C)
method resolution, [5.4.3.3](jvms-5.html#jvms-5.4.3.3-200-B-A)
methods, [4.6](jvms-4.html#jvms-4.6-100), [4.6](jvms-4.html#jvms-4.6-200-A.5), [4.6](jvms-4.html#jvms-4.6-200-B)
new, [6.5.new](jvms-6.html#jvms-6.5.new.notes-100)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-110)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-300)
static constraints, [4.9.1](jvms-4.html#jvms-4.9.1-120-K)
structural constraints, [4.9.2](jvms-4.html#jvms-4.9.2-120-G)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8-100)
unqualified names, [4.2.2](jvms-4.html#jvms-4.2.2-200)
working with class instances, [3.8](jvms-3.html#jvms-3.8-100)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4)
accessors for Java Virtual Machine artifacts, [4.10.1.1](jvms-4.html#jvms-4.10.1.1-100-Z.1)
type checking load and store instructions, [4.10.1.7](jvms-4.html#jvms-4.10.1.7-110), [4.10.1.7](jvms-4.html#jvms-4.10.1.7-220)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-C)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-120-A)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-210)
startup, [5.2](jvms-5.html#jvms-5.2)
initialization, [5.5](jvms-5.html#jvms-5.5-110-F)
static constraints, [4.9.1](jvms-4.html#jvms-4.9.1)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-I)
structural constraints, [4.9.2](jvms-4.html#jvms-4.9.2)
limitations of the Java Virtual Machine, [4.11](jvms-4.html#jvms-4.11-100-I)
structure of the Java Virtual Machine, [2](jvms-2.html)
swap, [4.10.1.9.swap](jvms-4.html#jvms-4.10.1.9.swap), [6.5.swap](jvms-6.html#jvms-6.5.swap)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-310)
synchronization, [2.11.10](jvms-2.html#jvms-2.11.10), [3.14](jvms-3.html#jvms-3.14)
areturn, [6.5.areturn](jvms-6.html#jvms-6.5.areturn.runtime-100), [6.5.areturn](jvms-6.html#jvms-6.5.areturn.runtime-110)
athrow, [6.5.athrow](jvms-6.html#jvms-6.5.athrow.runtime-110), [6.5.athrow](jvms-6.html#jvms-6.5.athrow.runtime-120)
dreturn, [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn.runtime-100), [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn.runtime-110)
freturn, [6.5.freturn](jvms-6.html#jvms-6.5.freturn.runtime-100), [6.5.freturn](jvms-6.html#jvms-6.5.freturn.runtime-110)
ireturn, [6.5.ireturn](jvms-6.html#jvms-6.5.ireturn.runtime-100), [6.5.ireturn](jvms-6.html#jvms-6.5.ireturn.runtime-110)
lreturn, [6.5.lreturn](jvms-6.html#jvms-6.5.lreturn.runtime-100), [6.5.lreturn](jvms-6.html#jvms-6.5.lreturn.runtime-110)
monitorenter, [6.5.monitorenter](jvms-6.html#jvms-6.5.monitorenter.notes-100)
monitorexit, [6.5.monitorexit](jvms-6.html#jvms-6.5.monitorexit.notes-100), [6.5.monitorexit](jvms-6.html#jvms-6.5.monitorexit.notes-200-B), [6.5.monitorexit](jvms-6.html#jvms-6.5.monitorexit.runtime-120)
return,lass="indexterm" href="jvms-6.html#jvms-6.5.return.runtime-100">6.5.return, [6.5.return](jvms-6.html#jvms-6.5.return.runtime-110)
synchronization, [2.11.10](jvms-2.html#jvms-2.11.10-120), [3.14](jvms-3.html#jvms-3.14-200)
Synthetic attribute, [4.7.8](jvms-4.html#jvms-4.7.8)
methods, [4.6](jvms-4.html#jvms-4.6-200-A.9)

### Index T

tableswitch, [4.10.1.9.tableswitch](jvms-4.html#jvms-4.10.1.9.tableswitch), [6.5.tableswitch](jvms-6.html#jvms-6.5.tableswitch)
instruction set summary, [2.11](jvms-2.html#jvms-2.11-210)
target\_info union, [4.7.20.1](jvms-4.html#jvms-4.7.20.1)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-B.1)
throwing and handling Exceptions, [3.12](jvms-3.html#jvms-3.12)
Exceptions, [2.10](jvms-2.html#jvms-2.10-430)
more control examples, [3.5](jvms-3.html#jvms-3.5-100)
throwing Exceptions, [2.11.9](jvms-2.html#jvms-2.11.9)
type checking abstract and native methods, [4.10.1.5](jvms-4.html#jvms-4.10.1.5)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-D)
type checking for protected members, [4.10.1.8](jvms-4.html#jvms-4.10.1.8)
access control, [5.4.4](jvms-5.html#jvms-5.4.4-210)
getfield, [4.10.1.9.getfield](jvms-4.html#jvms-4.10.1.9.getfield-100)
invokevirtual, [4.10.1.9.invokevirtual](jvms-4.html#jvms-4.10.1.9.invokevirtual-100-E)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-E)
type checking instructions, [4.10.1.9](jvms-4.html#jvms-4.10.1.9)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-600)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-F)
type checking load and store instructions, [4.10.1.7](jvms-4.html#jvms-4.10.1.7)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-400)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-E)
type checking methods with Code, [4.10.1.6](jvms-4.html#jvms-4.10.1.6)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-310)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-410)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-D)
type conversion instructions, [2.11.4](jvms-2.html#jvms-2.11.4)
type support in the Java Virtual Machine instruction set, [2.11.1](jvms-2.html#jvms-2.11.1-220)
types and the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1-200), [2.11.1](jvms-2.html#jvms-2.11.1-210)
use of constants, local variables, and control constructs, [3.2](jvms-3.html#jvms-3.2-500)
type\_path structure, [4.7.20.2](jvms-4.html#jvms-4.7.20.2)
RuntimeVisibleTypeAnnotations attribute, [4.7.20](jvms-4.html#jvms-4.7.20-300-D.3-C.1)
types and the Java Virtual Machine, [2.11.1](jvms-2.html#jvms-2.11.1)
arithmetic instructions, [2.11.3](jvms-2.html#jvms-2.11.3-100)
control transfer instructions, [2.11.7](jvms-2.html#jvms-2.11.7-120)
data types, [2.2](jvms-2.html#jvms-2.2-110)
dup, [6.5.dup](jvms-6.html#jvms-6.5.dup.desc-110)
dup\_x1, [6.5.dup\_x1](jvms-6.html#jvms-6.5.dup_x1.desc-110)
load and store instructions, [2.11.2](jvms-2.html#jvms-2.11.2-200)
operand stack, [6.5.dup2](jvms-6.html#jvms-6.5.dup2.stack-110), [6.5.dup2](jvms-6.html#jvms-6.5.dup2.stack-210), [6.5.dup2\_x1](jvms-6.html#jvms-6.5.dup2_x1.stack-110), [6.5.dup2\_x1](jvms-6.html#jvms-6.5.dup2_x1.stack-210), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2.stack-110), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2.stack-210), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2.stack-310), [6.5.dup2\_x2](jvms-6.html#jvms-6.5.dup2_x2.stack-410), [6.5.dup\_x2](jvms-6.html#jvms-6.5.dup_x2.stack-110), [6.5.dup\_x2](jvms-6.html#jvms-6.5.dup_x2.stack-210), [6.5.pop2](jvms-6.html#jvms-6.5.pop2.stack-110), [6.5.pop2](jvms-6.html#jvms-6.5.pop2.stack-210)
pop, [6.5.pop](jvms-6.html#jvms-6.5.pop.desc-110)
stack map frame representation, [4.10.1.4](jvms-4.html#jvms-4.10.1.4-500)
swap, [6.5.swap](jvms-6.html#jvms-6.5.swap.desc-200)
type conversion instructions, [2.11.4](jvms-2.html#jvms-2.11.4-170)

### Index U

unqualified names, [4.2.2](jvms-4.html#jvms-4.2.2)
binary class and interface names, [4.2.1](jvms-4.html#jvms-4.2.1-200)
CONSTANT\_NameAndType\_info structure, [4.4.6](jvms-4.html#jvms-4.4.6-200-B)
fields, [4.5](jvms-4.html#jvms-4.5-200-B)
LocalVariableTable attribute, [4.7.13](jvms-4.html#jvms-4.7.13-300-D-B)
LocalVariableTypeTable attribute, [4.7.14](jvms-4.html#jvms-4.7.14-300-D-B)
methods, [4.6](jvms-4.html#jvms-4.6-200-B)
signatures, [4.7.9.1](jvms-4.html#jvms-4.7.9.1-210)
use of constants, local variables, and control constructs, [3.2](jvms-3.html#jvms-3.2)
accessing the run-time constant pool, [3.4](jvms-3.html#jvms-3.4-120)
more control examples, [3.5](jvms-3.html#jvms-3.5-100)
user-defined class loaders, [5.3.2](jvms-5.html#jvms-5.3.2)
creation and loading, [5.3](jvms-5.html#jvms-5.3-400-A-B)
loading constraints, [5.3.4](jvms-5.html#jvms-5.3.4-120)

### Index V

value set conversion, [2.8.3](jvms-2.html#jvms-2.8.3)
d2f, [6.5.d2f](jvms-6.html#jvms-6.5.d2f.desc-100)
d2i, [6.5.d2i](jvms-6.html#jvms-6.5.d2i.desc-100)
d2l, [6.5.d2l](jvms-6.html#jvms-6.5.d2l.desc-100)
dadd, [6.5.dadd](jvms-6.html#jvms-6.5.dadd.desc-100)
dastore, [6.5.dastore](jvms-6.html#jvms-6.5.dastore.desc-100)
dcmp<op>, [6.5.dcmp\_op](jvms-6.html#jvms-6.5.dcmp_op.desc-100)
ddiv, [6.5.ddiv](jvms-6.html#jvms-6.5.ddiv.desc-100)
dmul, [6.5.dmul](jvms-6.html#jvms-6.5.dmul.desc-100)
dneg, [6.5.dneg](jvms-6.html#jvms-6.5.dneg.desc-100)
drem, [6.5.drem](jvms-6.html#jvms-6.5.drem.desc-100)
dreturn, [6.5.dreturn](jvms-6.html#jvms-6.5.dreturn.desc-100)
dstore, [6.5.dstore](jvms-6.html#jvms-6.5.dstore.desc-100)
dstore\_<n>, [6.5.dstore\_n](jvms-6.html#jvms-6.5.dstore_n.desc-100)
dsub, [6.5.dsub](jvms-6.html#jvms-6.5.dsub.desc-100)
f2d, [6.5.f2d](jvms-6.html#jvms-6.5.f2d.desc-100)
f2i, [6.5.f2i](jvms-6.html#jvms-6.5.f2i.desc-100)
f2l, [6.5.f2l](jvms-6.html#jvms-6.5.f2l.desc-100)
fadd, [6.5.fadd](jvms-6.html#jvms-6.5.fadd.desc-100)
fastore, [6.5.fastore](jvms-6.html#jvms-6.5.fastore.desc-100)
fcmp<op>, [6.5.fcmp\_op](jvms-6.html#jvms-6.5.fcmp_op.desc-100)
fdiv, [6.5.fdiv](jvms-6.html#jvms-6.5.fdiv.desc-100)
floating-point modes, [2.8.2](jvms-2.html#jvms-2.8.2-300)
fmul, [6.5.fmul](jvms-6.html#jvms-6.5.fmul.desc-100)
fneg, [6.5.fneg](jvms-6.html#jvms-6.5.fneg.desc-100)
frem, [6.5.frem](jvms-6.html#jvms-6.5.frem.desc-100)
freturn, [6.5.freturn](jvms-6.html#jvms-6.5.freturn.desc-100)
fstore, [6.5.fstore](jvms-6.html#jvms-6.5.fstore.desc-100)
fstore\_<n>, [6.5.fstore\_n](jvms-6.html#jvms-6.5.fstore_n.desc-100)
fsub, [6.5.fsub](jvms-6.html#jvms-6.5.fsub.desc-100)
invokeinterface, [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-310), [6.5.invokeinterface](jvms-6.html#jvms-6.5.invokeinterface.desc-320)
invokespecial, [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-410), [6.5.invokespecial](jvms-6.html#jvms-6.5.invokespecial.desc-420)
invokestatic, [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-310), [6.5.invokestatic](jvms-6.html#jvms-6.5.invokestatic.desc-320)
invokevirtual, [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-310), [6.5.invokevirtual](jvms-6.html#jvms-6.5.invokevirtual.desc-320)
putfield, [6.5.putfield](jvms-6.html#jvms-6.5.putfield.desc-200)
putstatic, [6.5.putstatic](jvms-6.html#jvms-6.5.putstatic.desc-400)
values of types long and double, [4.10.2.3](jvms-4.html#jvms-4.10.2.3)
verification, [5.4.1](jvms-5.html#jvms-5.4.1)
creation and loading, [5.3](jvms-5.html#jvms-5.3-510)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1)
StackMapTable attribute, [4.7.4](jvms-4.html#jvms-4.7.4-100), [4.7.4](jvms-4.html#jvms-4.7.4-120)
verification by type inference, [4.10.2](jvms-4.html#jvms-4.10.2)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-110)
verification of class files, [4.10](jvms-4.html#jvms-4.10)
assumptions: the meaning of "must", [6.1](jvms-6.html#jvms-6.1-200)
operand stacks, [2.6.2](jvms-2.html#jvms-2.6.2-310)
verification, [5.4.1](jvms-5.html#jvms-5.4.1-100)
verification type system, [4.10.1.2](jvms-4.html#jvms-4.10.1.2)
accessors for Java Virtual Machine artifacts, [4.10.1.1](jvms-4.html#jvms-4.10.1.1-100-X)
verification by type checking, [4.10.1](jvms-4.html#jvms-4.10.1-400-B)
Virtual Machine errors, [6.3](jvms-6.html#jvms-6.3)
Exceptions, [2.10](jvms-2.html#jvms-2.10-110-C.1)

### Index W

wide, [4.10.1.9.wide](jvms-4.html#jvms-4.10.1.9.wide), [6.5.wide](jvms-6.html#jvms-6.5.wide)
aload, [6.5.aload](jvms-6.html#jvms-6.5.aload.notes-200)
astore, [6.5.astore](jvms-6.html#jvms-6.5.astore.notes-300)
dload, [6.5.dload](jvms-6.html#jvms-6.5.dload.notes-100)
dstore, [6.5.dstore](jvms-6.html#jvms-6.5.dstore.notes-100)
fload, [6.5.fload](jvms-6.html#jvms-6.5.fload.notes-100)
fstore, [6.5.fstore](jvms-6.html#jvms-6.5.fstore.notes-100)
iinc, [6.5.iinc](jvms-6.html#jvms-6.5.iinc.notes-100)
iload, [6.5.iload](jvms-6.html#jvms-6.5.iload.notes-100)
istore, [6.5.istore](jvms-6.html#jvms-6.5.istore.notes-100)
lload, [6.5.lload](jvms-6.html#jvms-6.5.lload.notes-100)
lstore, [6.5.lstore](jvms-6.html#jvms-6.5.lstore.notes-100)
ret, [6.5.ret](jvms-6.html#jvms-6.5.ret.notes-400)
working with class instances, [3.8](jvms-3.html#jvms-3.8)
accessing the run-time constant pool, [3.4](jvms-3.html#jvms-3.4-100)
invoking methods, [3.7](jvms-3.html#jvms-3.7-300)

📜 Appendix A. Limited License Grant
---------------------------------

Specification: JSR-337 Java® SE 8 Release Contents ("Specification")  
Version: 8  
Status: Maintenance Release  
Release: March 2015  
  
Copyright © 1997, 2015, Oracle America, Inc. and/or its affiliates.  
500 Oracle Parkway, Redwood City, California 94065, U.S.A.  
All rights reserved.

LIMITED LICENSE GRANTS

1\. License for Evaluation Purposes. Oracle hereby grants you a fully-paid, non-exclusive, non-transferable, worldwide, limited license (without the right to sublicense), under Oracle's applicable intellectual property rights to view, download, use and reproduce the Specification only for the purpose of internal evaluation. This includes (i) developing applications intended to run on an implementation of the Specification, provided that such applications do not themselves implement any portion(s) of the Specification, and (ii) discussing the Specification with any third party; and (iii) excerpting brief portions of the Specification in oral or written communications which discuss the Specification provided that such excerpts do not in the aggregate constitute a significant portion of the Specification.

2\. License for the Distribution of Compliant Implementations. Oracle also grants you a perpetual, non-exclusive, non-transferable, worldwide, fully paid-up, royalty free, limited license (without the right to sublicense) under any applicable copyrights or, subject to the provisions of subsection 4 below, patent rights it may have covering the Specification to create and/or distribute an Independent Implementation of the Specification that: (a) fully implements the Specification including all its required interfaces and functionality; (b) does not modify, subset, superset or otherwise extend the Licensor Name Space, or include any public or protected packages, classes, Java interfaces, fields or methods within the Licensor Name Space other than those required/authorized by the Specification or Specifications being implemented; and (c) passes the Technology Compatibility Kit (including satisfying the requirements of the applicable TCK Users Guide) for such Specification ("Compliant Implementation"). In addition, the foregoing license is expressly conditioned on your not acting outside its scope. No license is granted hereunder for any other purpose (including, for example, modifying the Specification, other than to the extent of your fair use rights, or distributing the Specification to third parties). Also, no right, title, or interest in or to any trademarks, service marks, or trade names of Oracle or Oracle's licensors is granted hereunder. Java, and Java-related logos, marks and names are trademarks or registered trademarks of Oracle in the U.S. and other countries.

3\. Pass-through Conditions. You need not include limitations (a)-(c) from the previous paragraph or any other particular "pass through" requirements in any license You grant concerning the use of your Independent Implementation or products derived from it. However, except with respect to Independent Implementations (and products derived from them) that satisfy limitations (a)-(c) from the previous paragraph, You may neither: (a) grant or otherwise pass through to your licensees any licenses under Oracle's applicable intellectual property rights; nor (b) authorize your licensees to make any claims concerning their implementation's compliance with the Specification in question.

4\. Reciprocity Concerning Patent Licenses.

a. With respect to any patent claims covered by the license granted under subparagraph 2 above that would be infringed by all technically feasible implementations of the Specification, such license is conditioned upon your offering on fair, reasonable and non-discriminatory terms, to any party seeking it from You, a perpetual, non-exclusive, non-transferable, worldwide license under Your patent rights which are or would be infringed by all technically feasible implementations of the Specification to develop, distribute and use a Compliant Implementation.

b. With respect to any patent claims owned by Oracle and covered by the license granted under subparagraph 2, whether or not their infringement can be avoided in a technically feasible manner when implementing the Specification, such license shall terminate with respect to such claims if You initiate a claim against Oracle that it has, in the course of performing its responsibilities as the Specification Lead, induced any other entity to infringe Your patent rights.

c. Also with respect to any patent claims owned by Oracle and covered by the license granted under subparagraph 2 above, where the infringement of such claims can be avoided in a technically feasible manner when implementing the Specification such license, with respect to such claims, shall terminate if You initiate a claim against Oracle that its making, having made, using, offering to sell, selling or importing a Compliant Implementation infringes Your patent rights.

5\. Definitions. For the purposes of this Agreement: "Independent Implementation" shall mean an implementation of the Specification that neither derives from any of Oracle's source code or binary code materials nor, except with an appropriate and separate license from Oracle, includes any of Oracle's source code or binary code materials; "Licensor Name Space" shall mean the public class or interface declarations whose names begin with "java", "javax", "com.sun" or their equivalents in any subsequent naming convention adopted by Oracle through the Java Community Process, or any recognized successors or replacements thereof; and "Technology Compatibility Kit" or "TCK" shall mean the test suite and accompanying TCK User's Guide provided by Oracle which corresponds to the Specification and that was available either (i) from Oracle 120 days before the first release of Your Independent Implementation that allows its use for commercial purposes, or (ii) more recently than 120 days from such release but against which You elect to test Your implementation of the Specification.

This Agreement will terminate immediately without notice from Oracle if you breach the Agreement or act outside the scope of the licenses granted above.

DISCLAIMER OF WARRANTIES

THE SPECIFICATION IS PROVIDED "AS IS". ORACLE MAKES NO REPRESENTATIONS OR WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT (INCLUDING AS A CONSEQUENCE OF ANY PRACTICE OR IMPLEMENTATION OF THE SPECIFICATION), OR THAT THE CONTENTS OF THE SPECIFICATION ARE SUITABLE FOR ANY PURPOSE. This document does not represent any commitment to release or implement any portion of the Specification in any product. In addition, the Specification could include technical inaccuracies or typographical errors.

LIMITATION OF LIABILITY

TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT WILL ORACLE OR ITS LICENSORS BE LIABLE FOR ANY DAMAGES, INCLUDING WITHOUT LIMITATION, LOST REVENUE, PROFITS OR DATA, OR FOR SPECIAL, INDIRECT, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF OR RELATED IN ANY WAY TO YOUR HAVING, IMPLEMENTING OR OTHERWISE USING THE SPECIFICATION, EVEN IF ORACLE AND/OR ITS LICENSORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

You will indemnify, hold harmless, and defend Oracle and its licensors from any claims arising or resulting from: (i) your use of the Specification; (ii) the use or distribution of your Java application, applet and/or implementation; and/or (iii) any claims that later versions or releases of any Specification furnished to you are incompatible with the Specification provided to you under this license.

RESTRICTED RIGHTS LEGEND

U.S. Government: If this Specification is being acquired by or on behalf of the U.S. Government or by a U.S. Government prime contractor or subcontractor (at any tier), then the Government's rights in the Software and accompanying documentation shall be only as set forth in this license; this is in accordance with 48 C.F.R. 227.7201 through 227.7202-4 (for Department of Defense (DoD) acquisitions) and with 48 C.F.R. 2.101 and 12.212 (for non-DoD acquisitions).

REPORT

If you provide Oracle with any comments or suggestions concerning the Specification ("Feedback"), you hereby: (i) agree that such Feedback is provided on a non-proprietary and non-confidential basis, and (ii) grant Oracle a perpetual, non-exclusive, worldwide, fully paid-up, irrevocable license, with the right to sublicense through multiple levels of sublicensees, to incorporate, disclose, and use without limitation the Feedback for any purpose.

GENERAL TERMS

Any action related to this Agreement will be governed by California law and controlling U.S. federal law. The U.N. Convention for the International Sale of Goods and the choice of law rules of any jurisdiction will not apply.

The Specification is subject to U.S. export control laws and may be subject to export or import regulations in other countries. Licensee agrees to comply strictly with all such laws and regulations and acknowledges that it has the responsibility to obtain such licenses to export, re-export or import as may be required after delivery to Licensee.

This Agreement is the parties' entire agreement relating to its subject matter. It supersedes all prior or contemporaneous oral or written communications, proposals, conditions, representations and warranties and prevails over any conflicting or additional terms of any quote, order, acknowledgment, or other communication between the parties relating to its subject matter during the term of this Agreement. No modification to this Agreement will be binding, unless in writing and signed by an authorized representative of each party.

