
/. 🚀 Standard Library API Docs
===================================================

[deno_doc.ts](deno_doc.ts) 脚本用于将 Deno Doc 转换 Markdown 格式，图案符号说明：

1.  🟠 Interface 接口符号标记
2.  🟢 Class     类型符号标记
3.  🟡 Class [Abstract] 抽象类型符号标记
4.  🟩 Function  函数符号标记
5.  🟥 Constructor 构建器符号标记
6.  🟨 Method    类成员方法符号标记
7.  🟦 Getter    类属性读取方法符号标记
8.  🟧 Setter    类属性写入方法符号标记


______
/. 🚀 :lib: archive [Unstable] https://deno.land/std@0.207.0/archive
====================================================================

Tar is a utility for collecting multiple files (or any arbitrary data) into one
archive file, while untar is the inverse utility to extract the files from an
archive.  Files are not compressed, only collected into the archive.

### File format and limitations

The ustar file format is used for creating the archive file.
While this format is compatible with most tar readers,
the format has several limitations, including:
* Files must be smaller than 8GiB
* Filenames (including path) must be shorter than 256 characters
* Filenames (including path) cannot contain non-ASCII characters
* Sparse files are not supported
In addition to the ustar format, untar may also read from the pax format.
However, additional features, such as longer filenames, may be ignored.




______
/. 🚀 :class: archive:Tar 🟢
----------------------------


```ts
class Tar { ... }
```

### Overview
A class to create a tar archive.  Tar archives allow for storing multiple files in a
single file (called an archive, or sometimes a tarball).  These archives typically
have the '.tar' extension.

### Usage
The workflow is to create a Tar instance, append files to it, and then write the
tar archive to the filesystem (or other output stream).  See the worked example
below for details.

### Compression
Tar archives are not compressed by default.  If you want to compress the archive,
you may compress the tar archive after creation, but this capability is not provided
here.

### File format and limitations

The ustar file format is used for creating the archive file.
While this format is compatible with most tar readers,
the format has several limitations, including:
* Files must be smaller than 8GiB
* Filenames (including path) must be shorter than 256 characters
* Filenames (including path) cannot contain non-ASCII characters
* Sparse files are not supported



example
-------

```ts
import { Tar } from "https://deno.land/std@$STD_VERSION/archive/tar.ts";
import { Buffer } from "https://deno.land/std@$STD_VERSION/io/buffer.ts";
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";

const tar = new Tar();

// Now that we've created our tar, let's add some files to it:

const content = new TextEncoder().encode("Some arbitrary content");
await tar.append("deno.txt", {
  reader: new Buffer(content),
  contentSize: content.byteLength,
});

// This file is sourced from the filesystem (and renamed in the archive)
await tar.append("filename_in_archive.txt", {
  filePath: "./filename_on_filesystem.txt",
});

// Now let's write the tar (with it's two files) to the filesystem
// use tar.getReader() to read the contents.

const writer = await Deno.open("./out.tar", { write: true, create: true });
await copy(tar.getReader(), writer);
writer.close();
```



______
/. 🚀 Tar constructors
======================



______
/. 🚀 :ctor: Tar 🟥
-------------------


```ts
new Tar()
```



*   data: TarDataWithSource[]

______
/. 🚀 Tar methods
=================



______
/. 🚀 :method: Tar.append 🟨
----------------------------


```ts
function append( filenameInArchive:string, source:TarOptions ): Promise<void>
```

Append a file or reader of arbitrary content to this tar archive. Directories
appended to the archive append only the directory itself to the archive, not
its contents.  To add a directory and its contents, recursively append the
directory's contents.  Directories and subdirectories will be created automatically
in the archive as required.


*   **param**: `filenameInArchive` 

    file name of the content in the archive
    e.g., test.txt; use slash for directory separators

*   **param**: `source` 

    details of the source of the content including the
    reference to the content itself and potentially any
    related metadata.



______
/. 🚀 :method: Tar.getReader 🟨
-------------------------------


```ts
function getReader(  ): Reader
```

Get a Reader instance for this tar archive.



______
/. 🚀 :class: archive:TarEntry 🟢
---------------------------------


```ts
class TarEntry implements Reader { ... }
```




______
/. 🚀 TarEntry constructors
===========================



______
/. 🚀 :ctor: TarEntry 🟥
------------------------


```ts
new TarEntry(meta:TarMetaWithLinkName, header:TarHeader, reader: Reader | (Reader & Deno.Seeker))
```




______
/. 🚀 TarEntry methods
======================



______
/. 🚀 :getter: TarEntry.consumed 🟦
-----------------------------------


```ts
function consumed(  ): boolean
```




______
/. 🚀 :method: TarEntry.read 🟨
-------------------------------


```ts
function read( p:Uint8Array ): Promise< number | null>
```




______
/. 🚀 :method: TarEntry.discard 🟨
----------------------------------


```ts
function discard(  )
```




______
/. 🚀 :class: archive:Untar 🟢
------------------------------


```ts
class Untar { ... }
```

### Overview
A class to extract from a tar archive.  Tar archives allow for storing multiple
files in a single file (called an archive, or sometimes a tarball).  These
archives typically have the '.tar' extension.

### Supported file formats
Only the ustar file format is supported.  This is the most common format. The
pax file format may also be read, but additional features, such as longer
filenames may be ignored.

### Usage
The workflow is to create a Untar instance referencing the source of the tar file.
You can then use the untar reference to extract files one at a time. See the worked
example below for details.

### Understanding compression
A tar archive may be compressed, often identified by the `.tar.gz` extension.
This utility does not support decompression which must be done before extracting
the files.



example
-------

```ts
import { Untar } from "https://deno.land/std@$STD_VERSION/archive/untar.ts";
import { ensureFile } from "https://deno.land/std@$STD_VERSION/fs/ensure_file.ts";
import { ensureDir } from "https://deno.land/std@$STD_VERSION/fs/ensure_dir.ts";
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";

const reader = await Deno.open("./out.tar", { read: true });
const untar = new Untar(reader);

for await (const entry of untar) {
  console.log(entry); // metadata

  if (entry.type === "directory") {
    await ensureDir(entry.fileName);
    continue;
  }

  await ensureFile(entry.fileName);
  const file = await Deno.open(entry.fileName, { write: true });
  // <entry> is a reader.
  await copy(entry, file);
}
reader.close();
```



______
/. 🚀 Untar constructors
========================



______
/. 🚀 :ctor: Untar 🟥
---------------------


```ts
new Untar(reader:Reader)
```



*   reader: Reader
*   block: Uint8Array

______
/. 🚀 Untar methods
===================



______
/. 🚀 :method: Untar.extract 🟨
-------------------------------


```ts
function extract(  ): Promise< TarEntry | null>
```

Extract the next entry of the tar archive.


*   **return**: A TarEntry with header metadata and a reader to the entry's
body, or null if there are no more entries to extract.


______
/. 🚀 :method: Untar.[Symbol.asyncIterator] 🟨
----------------------------------------------


```ts
function [Symbol.asyncIterator](  ): AsyncIterableIterator<TarEntry>
```

Iterate over all entries of the tar archive.

:unsupported: @yields A TarEntry with tar header metadata and a reader to the entry's body.


______
/. 🚀 :interface: TarInfo
-------------------------


    interface TarInfo






Properties

*   fileMode : number
*   mtime : number
*   uid : number
*   gid : number
*   owner : string
*   group : string
*   type : string



______
/. 🚀 :interface: TarMeta
-------------------------


    interface TarMeta extends TarInfo






Properties

*   fileName : string
*   fileSize : number



______
/. 🚀 :interface: TarOptions
----------------------------


    interface TarOptions extends TarInfo






Properties

*   filePath : string

    Filepath of the file to append to the archive
    
*   reader : Reader

    A Reader of any arbitrary content to append to the archive
    
*   contentSize : number

    Size of the content to be appended.  This is only required
    when passing a reader to the archive.
    



______
/. 🚀 :interface: TarData
-------------------------


    interface TarData






Properties

*   fileName : string
*   fileNamePrefix : string
*   fileMode : string
*   uid : string
*   gid : string
*   fileSize : string
*   mtime : string
*   checksum : string
*   type : string
*   ustar : string
*   owner : string
*   group : string



______
/. 🚀 :interface: TarDataWithSource
-----------------------------------


    interface TarDataWithSource extends TarData






Properties

*   filePath : string

    file to read
    
*   reader : Reader

    buffer to read
    



______
/. 🚀 :interface: TarMetaWithLinkName
-------------------------------------


    interface TarMetaWithLinkName extends TarMeta

Extend TarMeta with the `linkName` property so that readers can access
symbolic link values without polluting the world of archive writers.





Properties

*   linkName : string



______
/. 🚀 :interface: TarHeader
---------------------------


    interface TarHeader





Index Signatures

    [key:string] : Uint8Array





______
/. 🚀 :interface: TarEntry
--------------------------


    interface TarEntry extends TarMetaWithLinkName








______
/. 🚀 :lib: json [Stable] https://deno.land/std@0.207.0/json
============================================================

Utilities for parsing streaming JSON data.




______
/. 🚀 :class: json:ConcatenatedJsonParseStream 🟢
-------------------------------------------------


```ts
class ConcatenatedJsonParseStream implements TransformStream<string, JsonValue> { ... }
```

Stream to parse [Concatenated JSON](https://en.wikipedia.org/wiki/JSON_streaming#Concatenated_JSON).



example
-------

```ts
import { ConcatenatedJsonParseStream } from "https://deno.land/std@$STD_VERSION/json/concatenated_json_parse_stream.ts";

const url = "https://deno.land/std@$STD_VERSION/json/testdata/test.concatenated-json";
const { body } = await fetch(url);

const readable = body!
  .pipeThrough(new TextDecoderStream()) // convert Uint8Array to string
  .pipeThrough(new ConcatenatedJsonParseStream()); // parse Concatenated JSON

for await (const data of readable) {
  console.log(data);
}
```



______
/. 🚀 ConcatenatedJsonParseStream constructors
==============================================



______
/. 🚀 :ctor: ConcatenatedJsonParseStream 🟥
-------------------------------------------


```ts
new ConcatenatedJsonParseStream(object:ParseStreamOptions)
```


*   **param**: `options` 

*   **param**: `options.writableStrategy` 

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.

*   **param**: `options.readableStrategy` 

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.


*   readonly writable: WritableStream<string>
*   readonly readable: ReadableStream<JsonValue>

______
/. 🚀 :class: json:JsonParseStream 🟢
-------------------------------------


```ts
class JsonParseStream extends TransformStream<string, JsonValue> { ... }
```

Parse each chunk as JSON.

This can be used to parse [JSON lines](https://jsonlines.org/), [NDJSON](http://ndjson.org/) and [JSON Text Sequences](https://datatracker.ietf.org/doc/html/rfc7464).
Chunks consisting of spaces, tab characters, or newline characters will be ignored.



example
-------

parse JSON lines or NDJSON
```ts
import { TextLineStream } from "https://deno.land/std@$STD_VERSION/streams/text_line_stream.ts";
import { JsonParseStream } from "https://deno.land/std@$STD_VERSION/json/json_parse_stream.ts";

const url = "https://deno.land/std@$STD_VERSION/json/testdata/test.jsonl";
const { body } = await fetch(url);

const readable = body!
  .pipeThrough(new TextDecoderStream())  // convert Uint8Array to string
  .pipeThrough(new TextLineStream()) // transform into a stream where each chunk is divided by a newline
  .pipeThrough(new JsonParseStream()); // parse each chunk as JSON

for await (const data of readable) {
  console.log(data);
}
```



example
-------

parse JSON Text Sequences
```ts
import { TextDelimiterStream } from "https://deno.land/std@$STD_VERSION/streams/text_delimiter_stream.ts";
import { JsonParseStream } from "https://deno.land/std@$STD_VERSION/json/json_parse_stream.ts";

const url =
  "https://deno.land/std@$STD_VERSION/json/testdata/test.json-seq";
const { body } = await fetch(url);

const delimiter = "\x1E";
const readable = body!
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextDelimiterStream(delimiter)) // transform into a stream where each chunk is divided by a delimiter
  .pipeThrough(new JsonParseStream());

for await (const data of readable) {
  console.log(data);
}
```



______
/. 🚀 JsonParseStream constructors
==================================



______
/. 🚀 :ctor: JsonParseStream 🟥
-------------------------------


```ts
new JsonParseStream(object:ParseStreamOptions)
```


*   **param**: `options` 

*   **param**: `options.writableStrategy` 

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.

*   **param**: `options.readableStrategy` 

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.



______
/. 🚀 :class: json:JsonStringifyStream 🟢
-----------------------------------------


```ts
class JsonStringifyStream extends TransformStream<unknown, string> { ... }
```

Convert each chunk to JSON string.

This can be used to stringify [JSON lines](https://jsonlines.org/), [NDJSON](http://ndjson.org/), [JSON Text Sequences](https://datatracker.ietf.org/doc/html/rfc7464), and [Concatenated JSON](https://en.wikipedia.org/wiki/JSON_streaming#Concatenated_JSON).
You can optionally specify a prefix and suffix for each chunk. The default prefix is "" and the default suffix is "\n".



example
-------

```ts
import { JsonStringifyStream } from "https://deno.land/std@$STD_VERSION/json/json_stringify_stream.ts";

const file = await Deno.open("./tmp.jsonl", { create: true, write: true });

ReadableStream.from([{ foo: "bar" }, { baz: 100 }])
  .pipeThrough(new JsonStringifyStream()) // convert to JSON lines (ndjson)
  .pipeThrough(new TextEncoderStream()) // convert a string to a Uint8Array
  .pipeTo(file.writable)
  .then(() => console.log("write success"));
```



example
-------

To convert to [JSON Text Sequences](https://datatracker.ietf.org/doc/html/rfc7464), set the
prefix to the delimiter "\x1E" as options.
```ts
import { JsonStringifyStream } from "https://deno.land/std@$STD_VERSION/json/json_stringify_stream.ts";

const file = await Deno.open("./tmp.jsonl", { create: true, write: true });

ReadableStream.from([{ foo: "bar" }, { baz: 100 }])
  .pipeThrough(new JsonStringifyStream({ prefix: "\x1E", suffix: "\n" })) // convert to JSON Text Sequences
  .pipeThrough(new TextEncoderStream())
  .pipeTo(file.writable)
  .then(() => console.log("write success"));
```



example
-------

If you want to stream [JSON lines](https://jsonlines.org/) from the server:
```ts
import { JsonStringifyStream } from "https://deno.land/std@$STD_VERSION/json/json_stringify_stream.ts";

// A server that streams one line of JSON every second
Deno.serve(() => {
  let intervalId: number | undefined;
  const readable = new ReadableStream({
    start(controller) {
      // enqueue data once per second
      intervalId = setInterval(() => {
        controller.enqueue({ now: new Date() });
      }, 1000);
    },
    cancel() {
      clearInterval(intervalId);
    },
  });

  const body = readable
    .pipeThrough(new JsonStringifyStream()) // convert data to JSON lines
    .pipeThrough(new TextEncoderStream()); // convert a string to a Uint8Array

  return new Response(body);
});
```



______
/. 🚀 JsonStringifyStream constructors
======================================



______
/. 🚀 :ctor: JsonStringifyStream 🟥
-----------------------------------


```ts
new JsonStringifyStream(object:StringifyStreamOptions)
```




______
/. 🚀 :interface: ParseStreamOptions
------------------------------------


    interface ParseStreamOptions

Optional object interface for `JSONParseStream` and `ConcatenatedJsonParseStream`.





Properties

*   readonly writableStrategy : QueuingStrategy<string>

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.
    
*   readonly readableStrategy : QueuingStrategy<JsonValue>

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.
    



______
/. 🚀 :interface: StringifyStreamOptions
----------------------------------------


    interface StringifyStreamOptions

Optional object interface for `JsonStringifyStream`.





Properties

*   readonly prefix : string

    Prefix to be added after stringify.
    
    **default**: ""
    
*   readonly suffix : string

    Suffix to be added after stringify.
    
    **default**: "\n"
    
*   readonly writableStrategy : QueuingStrategy<unknown>

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.
    
*   readonly readableStrategy : QueuingStrategy<string>

    Controls the buffer of the TransformStream used internally. Check https://developer.mozilla.org/en-US/docs/Web/API/TransformStream/TransformStream.
    


______
/. 🚀 :alias: JsonValue
-----------------------

    type JsonValue =  { [key:string]:  JsonValue | undefined } | JsonValue[] | string | number | boolean | null

The type of the result of parsing JSON.


______
/. 🚀 :lib: assert [Stable] https://deno.land/std@0.207.0/assert
================================================================

A library of assertion functions.
If the assertion is false an `AssertionError` will be thrown which will
result in pretty-printed diff of failing assertion.

This module is browser compatible, but do not rely on good formatting of
values for AssertionError messages in browsers.




______
/. 🚀 :class: assert:AssertionError 🟢
--------------------------------------


```ts
class AssertionError extends Error { ... }
```




______
/. 🚀 AssertionError constructors
=================================



______
/. 🚀 :ctor: AssertionError 🟥
------------------------------


```ts
new AssertionError(message:string)
```



*   name: string

______
/. 🚀 :fun: assert:assertAlmostEquals 🟩
----------------------------------------


```ts
function assertAlmostEquals( actual:number, expected:number, tolerance, msg?:string )
```

Make an assertion that `actual` and `expected` are almost equal numbers through
a given tolerance. It can be used to take into account IEEE-754 double-precision
floating-point representation limitations.
If the values are not almost equal then throw.



example
-------

```ts
import { assertAlmostEquals, assertThrows } from "https://deno.land/std@$STD_VERSION/assert/mod.ts";

assertAlmostEquals(0.1, 0.2);

// Using a custom tolerance value
assertAlmostEquals(0.1 + 0.2, 0.3, 1e-16);
assertThrows(() => assertAlmostEquals(0.1 + 0.2, 0.3, 1e-17));
```



______
/. 🚀 :fun: assert:assertArrayIncludes 🟩
-----------------------------------------


```ts
function assertArrayIncludes<<T>>( actual:ArrayLike<T>, expected:ArrayLike<T>, msg?:string )
```

Make an assertion that `actual` includes the `expected` values.
If not then an error will be thrown.

Type parameter can be specified to ensure values under comparison have the same type.



example
-------

```ts
import { assertArrayIncludes } from "https://deno.land/std@$STD_VERSION/assert/assert_array_includes.ts";

assertArrayIncludes<number>([1, 2], [2])
```



______
/. 🚀 :fun: assert:assertEquals 🟩
----------------------------------


```ts
function assertEquals<<T>>( actual:T, expected:T, msg?:string, options:{ formatter?: (value:unknown) => string } )
```

Make an assertion that `actual` and `expected` are equal, deeply. If not
deeply equal, then throw.

Type parameter can be specified to ensure values under comparison have the same type.



example
-------

```ts
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

Deno.test("example", function (): void {
  assertEquals("world", "world");
  assertEquals({ hello: "world" }, { hello: "world" });
});
```

Note: formatter option is experimental and may be removed in the future.



______
/. 🚀 :fun: assert:assertExists 🟩
----------------------------------


```ts
function assertExists<<T>>( actual:T, msg?:string ): asserts actual is NonNullable<T>
```

Make an assertion that actual is not null or undefined.
If not then throw.



______
/. 🚀 :fun: assert:assertFalse 🟩
---------------------------------


```ts
function assertFalse( expr:unknown, msg ): asserts expr is Falsy
```

Make an assertion, error will be thrown if `expr` have truthy value.



______
/. 🚀 :fun: assert:assertGreaterOrEqual 🟩
------------------------------------------


```ts
function assertGreaterOrEqual<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` is greater than or equal to `expected`.
If not then throw.



______
/. 🚀 :fun: assert:assertGreater 🟩
-----------------------------------


```ts
function assertGreater<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` is greater than `expected`.
If not then throw.



______
/. 🚀 :fun: assert:assertInstanceOf 🟩
--------------------------------------


```ts
function assertInstanceOf<T extends AnyConstructor>( actual:unknown, expectedType:T, msg ): asserts actual is GetConstructorType<T>
```

Make an assertion that `obj` is an instance of `type`.
If not then throw.



______
/. 🚀 :fun: assert:assertIsError 🟩
-----------------------------------


```ts
function assertIsError<E extends Error = Error>( error:unknown, ErrorClass?:(...args:any[]) => E, msgIncludes?:string, msg?:string ): asserts error is E
```

Make an assertion that `error` is an `Error`.
If not then an error will be thrown.
An error class and a string that should be included in the
error message can also be asserted.



______
/. 🚀 :fun: assert:assertLessOrEqual 🟩
---------------------------------------


```ts
function assertLessOrEqual<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` is less than or equal to `expected`.
If not then throw.



______
/. 🚀 :fun: assert:assertLess 🟩
--------------------------------


```ts
function assertLess<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` is less than `expected`.
If not then throw.



______
/. 🚀 :fun: assert:assertMatch 🟩
---------------------------------


```ts
function assertMatch( actual:string, expected:RegExp, msg?:string ): void
```

Make an assertion that `actual` match RegExp `expected`. If not
then throw.



______
/. 🚀 :fun: assert:assertNotEquals 🟩
-------------------------------------


```ts
function assertNotEquals<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` and `expected` are not equal, deeply.
If not then throw.

Type parameter can be specified to ensure values under comparison have the same type.



example
-------

```ts
import { assertNotEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_not_equals.ts";

assertNotEquals<number>(1, 2)
```



______
/. 🚀 :fun: assert:assertNotInstanceOf 🟩
-----------------------------------------


```ts
function assertNotInstanceOf<<A, T>>( actual:A, unexpectedType:(...args:any[]) => T, msg?:string ): asserts actual is Exclude<A, T>
```

Make an assertion that `obj` is not an instance of `type`.
If so, then throw.



______
/. 🚀 :fun: assert:assertNotMatch 🟩
------------------------------------


```ts
function assertNotMatch( actual:string, expected:RegExp, msg?:string ): void
```

Make an assertion that `actual` not match RegExp `expected`. If match
then throw.



______
/. 🚀 :fun: assert:assertNotStrictEquals 🟩
-------------------------------------------


```ts
function assertNotStrictEquals<<T>>( actual:T, expected:T, msg?:string )
```

Make an assertion that `actual` and `expected` are not strictly equal.
If the values are strictly equal then throw.

```ts
import { assertNotStrictEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_not_strict_equals.ts";

assertNotStrictEquals(1, 1)
```



______
/. 🚀 :fun: assert:assertObjectMatch 🟩
---------------------------------------


```ts
function assertObjectMatch( actual:Record<PropertyKey, any>, expected:Record<PropertyKey, unknown>, msg?:string )
```

Make an assertion that `actual` object is a subset of `expected` object, deeply.
If not, then throw.



______
/. 🚀 :fun: assert:assertRejects 🟩
-----------------------------------


```ts
function assertRejects( fn:() => PromiseLike<unknown>, msg?:string ): Promise<unknown>
```

Executes a function which returns a promise, expecting it to reject.



example
-------

```ts
import { assertRejects } from "https://deno.land/std@$STD_VERSION/assert/assert_rejects.ts";

Deno.test("doesThrow", async function () {
  await assertRejects(
    async () => {
      throw new TypeError("hello world!");
    },
  );
  await assertRejects(
    async () => {
      return Promise.reject(new Error());
    },
  );
});

// This test will not pass.
Deno.test("fails", async function () {
  await assertRejects(
    async () => {
      console.log("Hello world");
    },
  );
});
```



______
/. 🚀 :fun: assert:assertRejects 🟩
-----------------------------------


```ts
function assertRejects<E extends Error = Error>( fn:() => PromiseLike<unknown>, ErrorClass:(...args:any[]) => E, msgIncludes?:string, msg?:string ): Promise<E>
```

Executes a function which returns a promise, expecting it to reject.
If it does not, then it throws. An error class and a string that should be
included in the error message can also be asserted.



example
-------

```ts
import { assertRejects } from "https://deno.land/std@$STD_VERSION/assert/assert_rejects.ts";

Deno.test("doesThrow", async function () {
  await assertRejects(async () => {
    throw new TypeError("hello world!");
  }, TypeError);
  await assertRejects(
    async () => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
});

// This test will not pass.
Deno.test("fails", async function () {
  await assertRejects(
    async () => {
      console.log("Hello world");
    },
  );
});
```



______
/. 🚀 :fun: assert:assertRejects 🟩
-----------------------------------


```ts
function assertRejects<E extends Error = Error>( fn:() => PromiseLike<unknown>, errorClassOrMsg?: ((...args:any[]) => E) | string, msgIncludesOrMsg?:string, msg?:string ): Promise< E | Error | unknown>
```




______
/. 🚀 :fun: assert:assertStrictEquals 🟩
----------------------------------------


```ts
function assertStrictEquals<<T>>( actual:unknown, expected:T, msg?:string ): asserts actual is T
```

Make an assertion that `actual` and `expected` are strictly equal. If
not then throw.



example
-------

```ts
import { assertStrictEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_strict_equals.ts";

Deno.test("isStrictlyEqual", function (): void {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});

// This test fails
Deno.test("isNotStrictlyEqual", function (): void {
  const a = {};
  const b = {};
  assertStrictEquals(a, b);
});
```



______
/. 🚀 :fun: assert:assertStringIncludes 🟩
------------------------------------------


```ts
function assertStringIncludes( actual:string, expected:string, msg?:string ): void
```

Make an assertion that actual includes expected. If not
then throw.



______
/. 🚀 :fun: assert:assertThrows 🟩
----------------------------------


```ts
function assertThrows( fn:() => unknown, msg?:string ): unknown
```

Executes a function, expecting it to throw. If it does not, then it
throws.



example
-------

```ts
import { assertThrows } from "https://deno.land/std@$STD_VERSION/assert/assert_throws.ts";

Deno.test("doesThrow", function (): void {
  assertThrows((): void => {
    throw new TypeError("hello world!");
  });
});

// This test will not pass.
Deno.test("fails", function (): void {
  assertThrows((): void => {
    console.log("Hello world");
  });
});
```



______
/. 🚀 :fun: assert:assertThrows 🟩
----------------------------------


```ts
function assertThrows<E extends Error = Error>( fn:() => unknown, ErrorClass:(...args:any[]) => E, msgIncludes?:string, msg?:string ): E
```

Executes a function, expecting it to throw. If it does not, then it
throws. An error class and a string that should be included in the
error message can also be asserted.



example
-------

```ts
import { assertThrows } from "https://deno.land/std@$STD_VERSION/assert/assert_throws.ts";

Deno.test("doesThrow", function (): void {
  assertThrows((): void => {
    throw new TypeError("hello world!");
  }, TypeError);
  assertThrows(
    (): void => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
});

// This test will not pass.
Deno.test("fails", function (): void {
  assertThrows((): void => {
    console.log("Hello world");
  });
});
```



______
/. 🚀 :fun: assert:assertThrows 🟩
----------------------------------


```ts
function assertThrows<E extends Error = Error>( fn:() => unknown, errorClassOrMsg?: ((...args:any[]) => E) | string, msgIncludesOrMsg?:string, msg?:string ):  E | Error | unknown
```




______
/. 🚀 :fun: assert:assert 🟩
----------------------------


```ts
function assert( expr:unknown, msg ): asserts expr
```

Make an assertion, error will be thrown if `expr` does not have truthy value.



______
/. 🚀 :fun: assert:equal 🟩
---------------------------


```ts
function equal( c:unknown, d:unknown ): boolean
```

Deep equality comparison used in assertions

*   **param**: `c` 

    actual value

*   **param**: `d` 

    expected value



______
/. 🚀 :fun: assert:fail 🟩
--------------------------


```ts
function fail( msg?:string ): never
```

Forcefully throws a failed assertion



______
/. 🚀 :fun: assert:unimplemented 🟩
-----------------------------------


```ts
function unimplemented( msg?:string ): never
```

Use this to stub out methods that will throw when invoked.



______
/. 🚀 :fun: assert:unreachable 🟩
---------------------------------


```ts
function unreachable(  ): never
```

Use this to assert unreachable code.


______
/. 🚀 :lib: jsonc [Stable] https://deno.land/std@0.207.0/jsonc
==============================================================


______
/. 🚀 :fun: jsonc:parse 🟩
--------------------------


```ts
function parse( text:string, object:ParseOptions ): JsonValue
```

Converts a JSON with Comments (JSONC) string into an object.
If a syntax error is found, throw a SyntaxError.



example
-------

```ts
import * as JSONC from "https://deno.land/std@$STD_VERSION/jsonc/mod.ts";

console.log(JSONC.parse('{"foo": "bar", } // comment')); //=> { foo: "bar" }
console.log(JSONC.parse('{"foo": "bar", } /* comment *\/')); //=> { foo: "bar" }
console.log(JSONC.parse('{"foo": "bar" } // comment', {
  allowTrailingComma: false,
})); //=> { foo: "bar" }
```


*   **param**: `text` 

    A valid JSONC string.



______
/. 🚀 :interface: ParseOptions
------------------------------


    interface ParseOptions






Properties

*   allowTrailingComma : boolean

    Allow trailing commas at the end of arrays and objects.
    
    **default**: true
    


______
/. 🚀 :alias: JsonValue
-----------------------

    type JsonValue =  { [key:string]:  JsonValue | undefined } | JsonValue[] | string | number | boolean | null

The type of the result of parsing JSON.


______
/. 🚀 :lib: async [Stable] https://deno.land/std@0.207.0/async
==============================================================

Provide help with asynchronous tasks like delays, debouncing, deferring, or
pooling.




______
/. 🚀 :class: async:DeadlineError 🟢
------------------------------------


```ts
class DeadlineError extends Error { ... }
```




______
/. 🚀 DeadlineError constructors
================================



______
/. 🚀 :ctor: DeadlineError 🟥
-----------------------------


```ts
new DeadlineError()
```




______
/. 🚀 :class: async:MuxAsyncIterator 🟢
---------------------------------------


```ts
class MuxAsyncIterator<T> implements AsyncIterable<T> { ... }
```

The MuxAsyncIterator class multiplexes multiple async iterators into a single
stream. It currently makes an assumption that the final result (the value
returned and not yielded from the iterator) does not matter; if there is any
result, it is discarded.



example
-------

```typescript
import { MuxAsyncIterator } from "https://deno.land/std@$STD_VERSION/async/mod.ts";

async function* gen123(): AsyncIterableIterator<number> {
  yield 1;
  yield 2;
  yield 3;
}

async function* gen456(): AsyncIterableIterator<number> {
  yield 4;
  yield 5;
  yield 6;
}

const mux = new MuxAsyncIterator<number>();
mux.add(gen123());
mux.add(gen456());
for await (const value of mux) {
  // ...
}
// ..
```



______
/. 🚀 MuxAsyncIterator methods
==============================



______
/. 🚀 :method: MuxAsyncIterator.add 🟨
--------------------------------------


```ts
function add( iterable:AsyncIterable<T> ): void
```




______
/. 🚀 :method: MuxAsyncIterator.iterate 🟨
------------------------------------------


```ts
function iterate(  ): AsyncIterableIterator<T>
```




______
/. 🚀 :method: MuxAsyncIterator.[Symbol.asyncIterator] 🟨
---------------------------------------------------------


```ts
function [Symbol.asyncIterator](  ): AsyncIterator<T>
```




______
/. 🚀 :class: async:RetryError 🟢
---------------------------------


```ts
class RetryError extends Error { ... }
```




______
/. 🚀 RetryError constructors
=============================



______
/. 🚀 :ctor: RetryError 🟥
--------------------------


```ts
new RetryError(cause:unknown, attempts:number)
```




______
/. 🚀 :fun: async:abortable 🟩
------------------------------


```ts
function abortable<<T>>( p:Promise<T>, signal:AbortSignal ): Promise<T>
```

Make Promise abortable with the given signal.



example
-------

```typescript
import { abortable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";

const p = delay(1000);
const c = new AbortController();
setTimeout(() => c.abort(), 100);

// Below throws `DOMException` after 100 ms
await abortable(p, c.signal);
```



______
/. 🚀 :fun: async:abortable 🟩
------------------------------


```ts
function abortable<<T>>( p:AsyncIterable<T>, signal:AbortSignal ): AsyncGenerator<T>
```

Make AsyncIterable abortable with the given signal.



example
-------

```typescript
import { abortable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";

const p = async function* () {
  yield "Hello";
  await delay(1000);
  yield "World";
};
const c = new AbortController();
setTimeout(() => c.abort(), 100);

// Below throws `DOMException` after 100 ms
// and items become `["Hello"]`
const items: string[] = [];
for await (const item of abortable(p(), c.signal)) {
  items.push(item);
}
```



______
/. 🚀 :fun: async:abortable 🟩
------------------------------


```ts
function abortable<<T>>( p: Promise<T> | AsyncIterable<T>, signal:AbortSignal ):  Promise<T> | AsyncIterable<T>
```




______
/. 🚀 :fun: async:abortablePromise 🟩
-------------------------------------


```ts
function abortablePromise<<T>>( p:Promise<T>, signal:AbortSignal ): Promise<T>
```

Make Promise abortable with the given signal.



example
-------

```typescript
import { abortablePromise } from "https://deno.land/std@$STD_VERSION/async/mod.ts";

const request = fetch("https://example.com");

const c = new AbortController();
setTimeout(() => c.abort(), 100);

const p = abortablePromise(request, c.signal);

// The below throws if the request didn't resolve in 100ms
await p;
```



______
/. 🚀 :fun: async:abortableAsyncIterable 🟩
-------------------------------------------


```ts
function abortableAsyncIterable<<T>>( p:AsyncIterable<T>, signal:AbortSignal ): AsyncGenerator<T>
```

Make AsyncIterable abortable with the given signal.



example
-------

```typescript
import { abortableAsyncIterable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";

const p = async function* () {
  yield "Hello";
  await delay(1000);
  yield "World";
};
const c = new AbortController();
setTimeout(() => c.abort(), 100);

// Below throws `DOMException` after 100 ms
// and items become `["Hello"]`
const items: string[] = [];
for await (const item of abortableAsyncIterable(p(), c.signal)) {
  items.push(item);
}
```



______
/. 🚀 :fun: async:deadline 🟩
-----------------------------


```ts
function deadline<<T>>( p:Promise<T>, ms:number, options:DeadlineOptions ): Promise<T>
```

Create a promise which will be rejected with {@linkcode DeadlineError} when a given delay is exceeded.

NOTE: Prefer to use `AbortSignal.timeout` instead for the APIs accept `AbortSignal`.



example
-------

```typescript
import { deadline } from "https://deno.land/std@$STD_VERSION/async/deadline.ts";
import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";

const delayedPromise = delay(1000);
// Below throws `DeadlineError` after 10 ms
const result = await deadline(delayedPromise, 10);
```



______
/. 🚀 :fun: async:debounce 🟩
-----------------------------


```ts
function debounce<T extends Array<any>>( fn:(this:DebouncedFunction<T>, ...args:T) => void, wait:number ): DebouncedFunction<T>
```

Creates a debounced function that delays the given `func`
by a given `wait` time in milliseconds. If the method is called
again before the timeout expires, the previous call will be
aborted.



example
-------

```
import { debounce } from "https://deno.land/std@$STD_VERSION/async/debounce.ts";

const log = debounce(
  (event: Deno.FsEvent) =>
    console.log("[%s] %s", event.kind, event.paths[0]),
  200,
);

for await (const event of Deno.watchFs("./")) {
  log(event);
}
// wait 200ms ...
// output: Function debounced after 200ms with baz
```


*   **param**: `fn` 

    The function to debounce.

*   **param**: `wait` 

    The time in milliseconds to delay the function.



______
/. 🚀 :fun: async:deferred 🟩
-----------------------------


```ts
function deferred<<T>>(  ): Deferred<T>
```



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode Promise.withResolvers} instead.

Creates a Promise with the `reject` and `resolve` functions placed as methods
on the promise object itself.



example
-------

```typescript
import { deferred } from "https://deno.land/std@$STD_VERSION/async/deferred.ts";

const p = deferred<number>();
// ...
p.resolve(42);
```



______
/. 🚀 :fun: async:delay 🟩
--------------------------


```ts
function delay( ms:number, options:DelayOptions ): Promise<void>
```

Resolve a Promise after a given amount of milliseconds.



example
-------

```typescript
import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";

// ...
const delayedPromise = delay(100);
const result = await delayedPromise;
// ...
```

To allow the process to continue to run as long as the timer exists. Requires
`--unstable` flag.

```typescript
import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";

// ...
await delay(100, { persistent: false });
// ...
```



______
/. 🚀 :fun: async:pooledMap 🟩
------------------------------


```ts
function pooledMap<<T, R>>( poolLimit:number, array: Iterable<T> | AsyncIterable<T>, iteratorFn:(data:T) => Promise<R> ): AsyncIterableIterator<R>
```

pooledMap transforms values from an (async) iterable into another async
iterable. The transforms are done concurrently, with a max concurrency
defined by the poolLimit.

If an error is thrown from `iterableFn`, no new transformations will begin.
All currently executing transformations are allowed to finish and still
yielded on success. After that, the rejections among them are gathered and
thrown by the iterator in an `AggregateError`.



example
-------

```typescript
import { pooledMap } from "https://deno.land/std@$STD_VERSION/async/pool.ts";

const results = pooledMap(
  2,
  [1, 2, 3],
  (i) => new Promise((r) => setTimeout(() => r(i), 1000)),
);

for await (const value of results) {
  // ...
}
```


*   **param**: `poolLimit` 

    The maximum count of items being processed concurrently.

*   **param**: `array` 

    The input array for mapping.

*   **param**: `iteratorFn` 

    The function to call for every item of the array.



______
/. 🚀 :fun: async:tee 🟩
------------------------


```ts
function tee<T, N extends number = 2>( iterable:AsyncIterable<T>, n:N ): Tuple<AsyncIterable<T>, N>
```

Branches the given async iterable into the n branches.



example
-------

```ts
import { tee } from "https://deno.land/std@$STD_VERSION/async/tee.ts";

const gen = async function* gen() {
  yield 1;
  yield 2;
  yield 3;
};

const [branch1, branch2] = tee(gen());

for await (const n of branch1) {
  console.log(n); // => 1, 2, 3
}

for await (const n of branch2) {
  console.log(n); // => 1, 2, 3
}
```



______
/. 🚀 :fun: async:retry 🟩
--------------------------


```ts
function retry<<T>>( fn: (() => Promise<T>) | (() => T), opts?:RetryOptions )
```

Calls the given (possibly asynchronous) function up to `maxAttempts` times.
Retries as long as the given function throws.
If the attempts are exhausted, throws an `RetryError` with `cause` set to the inner exception.

The backoff is calculated by multiplying `minTimeout` with `multiplier` to the power of the current attempt counter (starting at 0 up to `maxAttempts - 1`). It is capped at `maxTimeout` however.
How long the actual delay is, depends on `jitter`.

When `jitter` is the default value of `1`, waits between two attempts for a randomized amount between 0 and the backoff time.
With the default options the maximal delay will be `15s = 1s + 2s + 4s + 8s`. If all five attempts are exhausted the mean delay will be `9.5s = ½(4s + 15s)`.

When `jitter` is `0`, waits the full backoff time.



example
-------

```typescript
import { retry } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
const req = async () => {
 // some function that throws sometimes
};

// Below resolves to the first non-error result of `req`
const retryPromise = await retry(req, {
 multiplier: 2,
 maxTimeout: 60000,
 maxAttempts: 5,
 minTimeout: 100,
 jitter: 1,
});
```



example
-------

```typescript
import { retry } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
const req = async () => {
 // some function that throws sometimes
};

// Make sure we wait at least 1 minute, but at most 2 minutes
const retryPromise = await retry(req, {
 multiplier: 2.34,
 maxTimeout: 80000,
 maxAttempts: 7,
 minTimeout: 1000,
 jitter: 0.5,
});
```



______
/. 🚀 :interface: DeadlineOptions
---------------------------------


    interface DeadlineOptions






Properties

*   signal : AbortSignal

    Signal used to abort the deadline.
    



______
/. 🚀 :interface: DebouncedFunction
-----------------------------------


    interface DebouncedFunction

A debounced function that will be delayed by a given `wait`
time in milliseconds. If the method is called again before
the timeout expires, the previous call will be aborted.


Type Params

    T : Array<unknown>


Call Signatures

    (...args:T) : void



Properties

*   readonly pending : boolean

    Returns a boolean whether a debounce call is pending or not.
    

Methods

*   `clear() : void`

    Clears the debounce timeout and omits calling the debounced function.
    

*   `flush() : void`

    Clears the debounce timeout and calls the debounced function immediately.
    



______
/. 🚀 :interface: Deferred
--------------------------


    interface Deferred extends Promise<T>



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode Promise.withResolvers} instead.


Type Params

    <T>




Properties

*   readonly state :  "pending" | "fulfilled" | "rejected"

Methods

*   `resolve() : void`

    

*   `reject() : void`

    



______
/. 🚀 :interface: DelayOptions
------------------------------


    interface DelayOptions






Properties

*   signal : AbortSignal

    Signal used to abort the delay.
    
*   persistent : boolean

    Indicates whether the process should continue to run as long as the timer exists.
    
    **default**: true
    



______
/. 🚀 :interface: RetryOptions
------------------------------


    interface RetryOptions






Properties

*   multiplier : number

    How much to backoff after each retry. This is `2` by default.
    
*   maxTimeout : number

    The maximum milliseconds between attempts. This is `60000` by default.
    
*   maxAttempts : number

    The maximum amount of attempts until failure. This is `5` by default.
    
*   minTimeout : number

    The initial and minimum amount of milliseconds between attempts. This is `1000` by default.
    
*   jitter : number

    Amount of jitter to introduce to the time between attempts. This is `1` for full jitter by default.
    


______
/. 🚀 :variable: ERROR_WHILE_MAPPING_MESSAGE
--------------------------------------------

    const ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping."



______
/. 🚀 :lib: log [Unstable] https://deno.land/std@0.207.0/log
============================================================

Logging library with the support for terminal and file outputs. Also provides
interfaces for building custom loggers.

## Loggers

Loggers are objects that you interact with. When you use a logger method it
constructs a `LogRecord` and passes it down to its handlers for output. To
create custom loggers, specify them in `loggers` when calling `log.setup`.

## Custom message format

If you want to override default format of message you can define `formatter`
option for handler. It can be either simple string-based format that uses
`LogRecord` fields or more complicated function-based one that takes `LogRecord`
as argument and outputs string.

The default log format is `{levelName} {msg}`.

## Inline Logging

Log functions return the data passed in the `msg` parameter. Data is returned
regardless if the logger actually logs it.

## Lazy Log Evaluation

Some log statements are expensive to compute. In these cases, you can use
lazy log evaluation to prevent the computation taking place if the logger
won't log the message.

> NOTE: When using lazy log evaluation, `undefined` will be returned if the
> resolver function is not called because the logger won't log it. It is an
> antipattern use lazy evaluation with inline logging because the return value
> depends on the current log level.

## For module authors

The authors of public modules can let the users display the internal logs of the
module by using a custom logger:

```ts
import { getLogger } from "https://deno.land/std@$STD_VERSION/log/mod.ts";

function logger() {
  return getLogger("my-awesome-module");
}

export function sum(a: number, b: number) {
  logger().debug(`running ${a} + ${b}`);
  return a + b;
}

export function mult(a: number, b: number) {
  logger().debug(`running ${a} * ${b}`);
  return a * b;
}
```

The user of the module can then display the internal logs with:

```ts, ignore
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";
import { sum } from "<the-awesome-module>/mod.ts";

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },

  loggers: {
    "my-awesome-module": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

sum(1, 2); // prints "running 1 + 2" to the console
```

Please note that, due to the order of initialization of the loggers, the
following won't work:

```ts
import { getLogger } from "https://deno.land/std@$STD_VERSION/log/mod.ts";

const logger = getLogger("my-awesome-module");

export function sum(a: number, b: number) {
  logger.debug(`running ${a} + ${b}`); // no message will be logged, because getLogger() was called before log.setup()
  return a + b;
}
```



example
-------

```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations. You can log any data type.
log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");

// custom configuration with 2 loggers (the default and `tasks` loggers).
log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`.
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

let logger;

// get default logger.
logger = log.getLogger();
logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level.
logger.warning(41256); // logs to both `console` and `file` handlers.

// get custom logger
logger = log.getLogger("tasks");
logger.debug("fizz"); // won't get output because this logger has "ERROR" level.
logger.error({ productType: "book", value: "126.11" }); // log to `console`.

// if you try to use a logger that hasn't been configured
// you're good to go, it gets created automatically with level set to 0
// so no message is logged.
const unknownLogger = log.getLogger("mystery");
unknownLogger.info("foobar"); // no-op
```



example
-------

Custom message format example
```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

log.setup({
  handlers: {
    stringFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{levelName}] {msg}",
    }),

    functionFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: (logRecord) => {
        let msg = `${logRecord.level} ${logRecord.msg}`;

        logRecord.args.forEach((arg, index) => {
          msg += `, arg${index}: ${arg}`;
        });

        return msg;
      },
    }),

    anotherFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{loggerName}] - {levelName} {msg}",
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["stringFmt", "functionFmt"],
    },
    dataLogger: {
      level: "INFO",
      handlers: ["anotherFmt"],
    },
  },
});

// calling:
log.debug("Hello, world!", 1, "two", [3, 4, 5]);
// results in: [DEBUG] Hello, world!
// output from "stringFmt" handler.
// 10 Hello, world!, arg0: 1, arg1: two, arg3: [3, 4, 5] // output from "functionFmt" formatter.

// calling:
log.getLogger("dataLogger").error("oh no!");
// results in:
// [dataLogger] - ERROR oh no! // output from anotherFmt handler.
```



example
-------

Inline Logging
```ts
import * as logger from "https://deno.land/std@$STD_VERSION/log/mod.ts";

const stringData: string = logger.debug("hello world");
const booleanData: boolean = logger.debug(true, 1, "abc");
const fn = (): number => {
  return 123;
};
const resolvedFunctionData: number = logger.debug(fn());
console.log(stringData); // 'hello world'
console.log(booleanData); // true
console.log(resolvedFunctionData); // 123
```



example
-------

Lazy Log Evaluation
```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },

  loggers: {
    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

function someExpensiveFn(num: number, bool: boolean) {
  // do some expensive computation
}

// not logged, as debug < error.
const data = log.debug(() => someExpensiveFn(5, true));
console.log(data); // undefined
```



    import { LevelName } from "https://deno.land/std@0.207.0/log/levels.ts"


    import { assert } from "https://deno.land/std@0.207.0/assert/assert.ts"


    import { WriterHandler } from "https://deno.land/std@0.207.0/log/handlers.ts"


    import { RotatingFileHandler } from "https://deno.land/std@0.207.0/log/handlers.ts"


    import { FileHandler } from "https://deno.land/std@0.207.0/log/handlers.ts"


    import { ConsoleHandler } from "https://deno.land/std@0.207.0/log/handlers.ts"


    import { BaseHandler } from "https://deno.land/std@0.207.0/log/handlers.ts"


    import { GenericFunction } from "https://deno.land/std@0.207.0/log/logger.ts"


    import { Logger } from "https://deno.land/std@0.207.0/log/logger.ts"

Logging library with the support for terminal and file outputs. Also provides
interfaces for building custom loggers.

## Loggers

Loggers are objects that you interact with. When you use a logger method it
constructs a `LogRecord` and passes it down to its handlers for output. To
create custom loggers, specify them in `loggers` when calling `log.setup`.

## Custom message format

If you want to override default format of message you can define `formatter`
option for handler. It can be either simple string-based format that uses
`LogRecord` fields or more complicated function-based one that takes `LogRecord`
as argument and outputs string.

The default log format is `{levelName} {msg}`.

## Inline Logging

Log functions return the data passed in the `msg` parameter. Data is returned
regardless if the logger actually logs it.

## Lazy Log Evaluation

Some log statements are expensive to compute. In these cases, you can use
lazy log evaluation to prevent the computation taking place if the logger
won't log the message.

> NOTE: When using lazy log evaluation, `undefined` will be returned if the
> resolver function is not called because the logger won't log it. It is an
> antipattern use lazy evaluation with inline logging because the return value
> depends on the current log level.

## For module authors

The authors of public modules can let the users display the internal logs of the
module by using a custom logger:

```ts
import { getLogger } from "https://deno.land/std@$STD_VERSION/log/mod.ts";

function logger() {
  return getLogger("my-awesome-module");
}

export function sum(a: number, b: number) {
  logger().debug(`running ${a} + ${b}`);
  return a + b;
}

export function mult(a: number, b: number) {
  logger().debug(`running ${a} * ${b}`);
  return a * b;
}
```

The user of the module can then display the internal logs with:

```ts, ignore
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";
import { sum } from "<the-awesome-module>/mod.ts";

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },

  loggers: {
    "my-awesome-module": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

sum(1, 2); // prints "running 1 + 2" to the console
```

Please note that, due to the order of initialization of the loggers, the
following won't work:

```ts
import { getLogger } from "https://deno.land/std@$STD_VERSION/log/mod.ts";

const logger = getLogger("my-awesome-module");

export function sum(a: number, b: number) {
  logger.debug(`running ${a} + ${b}`); // no message will be logged, because getLogger() was called before log.setup()
  return a + b;
}
```



example
-------

```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations. You can log any data type.
log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");

// custom configuration with 2 loggers (the default and `tasks` loggers).
log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`.
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

let logger;

// get default logger.
logger = log.getLogger();
logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level.
logger.warning(41256); // logs to both `console` and `file` handlers.

// get custom logger
logger = log.getLogger("tasks");
logger.debug("fizz"); // won't get output because this logger has "ERROR" level.
logger.error({ productType: "book", value: "126.11" }); // log to `console`.

// if you try to use a logger that hasn't been configured
// you're good to go, it gets created automatically with level set to 0
// so no message is logged.
const unknownLogger = log.getLogger("mystery");
unknownLogger.info("foobar"); // no-op
```



example
-------

Custom message format example
```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

log.setup({
  handlers: {
    stringFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{levelName}] {msg}",
    }),

    functionFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: (logRecord) => {
        let msg = `${logRecord.level} ${logRecord.msg}`;

        logRecord.args.forEach((arg, index) => {
          msg += `, arg${index}: ${arg}`;
        });

        return msg;
      },
    }),

    anotherFmt: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{loggerName}] - {levelName} {msg}",
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["stringFmt", "functionFmt"],
    },
    dataLogger: {
      level: "INFO",
      handlers: ["anotherFmt"],
    },
  },
});

// calling:
log.debug("Hello, world!", 1, "two", [3, 4, 5]);
// results in: [DEBUG] Hello, world!
// output from "stringFmt" handler.
// 10 Hello, world!, arg0: 1, arg1: two, arg3: [3, 4, 5] // output from "functionFmt" formatter.

// calling:
log.getLogger("dataLogger").error("oh no!");
// results in:
// [dataLogger] - ERROR oh no! // output from anotherFmt handler.
```



example
-------

Inline Logging
```ts
import * as logger from "https://deno.land/std@$STD_VERSION/log/mod.ts";

const stringData: string = logger.debug("hello world");
const booleanData: boolean = logger.debug(true, 1, "abc");
const fn = (): number => {
  return 123;
};
const resolvedFunctionData: number = logger.debug(fn());
console.log(stringData); // 'hello world'
console.log(booleanData); // true
console.log(resolvedFunctionData); // 123
```



example
-------

Lazy Log Evaluation
```ts
import * as log from "https://deno.land/std@$STD_VERSION/log/mod.ts";

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },

  loggers: {
    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

function someExpensiveFn(num: number, bool: boolean) {
  // do some expensive computation
}

// not logged, as debug < error.
const data = log.debug(() => someExpensiveFn(5, true));
console.log(data); // undefined
```



______
/. 🚀 :class: log:Logger 🟢
---------------------------


```ts
class Logger { ... }
```




______
/. 🚀 Logger constructors
=========================



______
/. 🚀 :ctor: Logger 🟥
----------------------


```ts
new Logger(loggerName:string, levelName:LevelName, options:LoggerOptions)
```




______
/. 🚀 Logger methods
====================



______
/. 🚀 :getter: Logger.level 🟦
------------------------------


```ts
function level(  ): LogLevels
```




______
/. 🚀 :setter: Logger.level 🟧
------------------------------


```ts
function level( level:LogLevels ): void
```




______
/. 🚀 :getter: Logger.levelName 🟦
----------------------------------


```ts
function levelName(  ): LevelName
```




______
/. 🚀 :setter: Logger.levelName 🟧
----------------------------------


```ts
function levelName( levelName:LevelName ): void
```




______
/. 🚀 :getter: Logger.loggerName 🟦
-----------------------------------


```ts
function loggerName(  ): string
```




______
/. 🚀 :setter: Logger.handlers 🟧
---------------------------------


```ts
function handlers( hndls:BaseHandler[] ): void
```




______
/. 🚀 :getter: Logger.handlers 🟦
---------------------------------


```ts
function handlers(  ): BaseHandler[]
```




______
/. 🚀 :method: Logger.asString 🟨
---------------------------------


```ts
function asString( data:unknown, isProperty ): string
```




______
/. 🚀 :method: Logger.debug 🟨
------------------------------


```ts
function debug<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.debug 🟨
------------------------------


```ts
function debug<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :method: Logger.debug 🟨
------------------------------


```ts
function debug<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.info 🟨
-----------------------------


```ts
function info<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.info 🟨
-----------------------------


```ts
function info<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :method: Logger.info 🟨
-----------------------------


```ts
function info<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.warning 🟨
--------------------------------


```ts
function warning<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.warning 🟨
--------------------------------


```ts
function warning<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :method: Logger.warning 🟨
--------------------------------


```ts
function warning<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.error 🟨
------------------------------


```ts
function error<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.error 🟨
------------------------------


```ts
function error<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :method: Logger.error 🟨
------------------------------


```ts
function error<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.critical 🟨
---------------------------------


```ts
function critical<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :method: Logger.critical 🟨
---------------------------------


```ts
function critical<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :method: Logger.critical 🟨
---------------------------------


```ts
function critical<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :class: log:LogRecord 🟢
------------------------------


```ts
class LogRecord { ... }
```

An object that encapsulates provided message and arguments as well some
metadata that can be later used when formatting a message.



______
/. 🚀 LogRecord constructors
============================



______
/. 🚀 :ctor: LogRecord 🟥
-------------------------


```ts
new LogRecord(options:LogRecordOptions)
```



*   readonly msg: string
*   readonly level: number
*   readonly levelName: string
*   readonly loggerName: string

______
/. 🚀 LogRecord methods
=======================



______
/. 🚀 :getter: LogRecord.args 🟦
--------------------------------


```ts
function args(  ): unknown[]
```




______
/. 🚀 :getter: LogRecord.datetime 🟦
------------------------------------


```ts
function datetime(  ): Date
```




______
/. 🚀 :class: log:LoggerConfig 🟢
---------------------------------


```ts
class LoggerConfig { ... }
```



*   level: LevelName
*   handlers: string[]
______
/. 🚀 :enum: LogLevels
----------------------

Get log level numeric values through enum constants.
Defaults to INFO.


*   NOTSET: 0
*   DEBUG: 10
*   INFO: 20
*   WARNING: 30
*   ERROR: 40
*   CRITICAL: 50


______
/. 🚀 :fun: log:getLogger 🟩
----------------------------


```ts
function getLogger( name?:string ): Logger
```

Get a logger instance. If not specified `name`, get the default logger.



______
/. 🚀 :fun: log:debug 🟩
------------------------


```ts
function debug<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```

Log with debug level, using default logger.



______
/. 🚀 :fun: log:debug 🟩
------------------------


```ts
function debug<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :fun: log:debug 🟩
------------------------


```ts
function debug<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :fun: log:info 🟩
-----------------------


```ts
function info<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```

Log with info level, using default logger.



______
/. 🚀 :fun: log:info 🟩
-----------------------


```ts
function info<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :fun: log:info 🟩
-----------------------


```ts
function info<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :fun: log:warning 🟩
--------------------------


```ts
function warning<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```

Log with warning level, using default logger.



______
/. 🚀 :fun: log:warning 🟩
--------------------------


```ts
function warning<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :fun: log:warning 🟩
--------------------------


```ts
function warning<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :fun: log:error 🟩
------------------------


```ts
function error<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```

Log with error level, using default logger.



______
/. 🚀 :fun: log:error 🟩
------------------------


```ts
function error<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :fun: log:error 🟩
------------------------


```ts
function error<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :fun: log:critical 🟩
---------------------------


```ts
function critical<<T>>( msg:() => T, ...args:unknown[] ):  T | undefined
```

Log with critical level, using default logger.



______
/. 🚀 :fun: log:critical 🟩
---------------------------


```ts
function critical<<T>>( msg:()=>T, ...args:unknown[] ): T
```




______
/. 🚀 :fun: log:critical 🟩
---------------------------


```ts
function critical<<T>>( msg: (()=>T) | (() => T), ...args:unknown[] ):  T | undefined
```




______
/. 🚀 :fun: log:setup 🟩
------------------------


```ts
function setup( config:LogConfig ): void
```

Setup logger config.



______
/. 🚀 :interface: HandlerOptions
--------------------------------


    interface HandlerOptions






Properties

*   formatter :  string | FormatterFunction



______
/. 🚀 :interface: LogConfig
---------------------------


    interface LogConfig






Properties

*   handlers : { [name:string]: BaseHandler }
*   loggers : { [name:string]: LoggerConfig }


______
/. 🚀 :alias: LevelName
-----------------------

    type LevelName = keyof LogLevels

Union of valid log level strings


______
/. 🚀 :alias: FormatterFunction
-------------------------------

    type FormatterFunction = (logRecord:LogRecord) => string



______
/. 🚀 :alias: LogMode
---------------------

    type LogMode =  "a" | "w" | "x"



______
/. 🚀 :variable: handlers
-------------------------

    const handlers = { BaseHandler; ConsoleHandler; WriterHandler; FileHandler; RotatingFileHandler }

Handlers are responsible for actual output of log messages. When a handler is
called by a logger, it firstly checks that {@linkcode LogRecord}'s level is
not lower than level of the handler. If level check passes, handlers formats
log record into string and outputs it to target.

## Custom handlers

Custom handlers can be implemented by subclassing {@linkcode BaseHandler} or
{@linkcode WriterHandler}.

{@linkcode BaseHandler} is bare-bones handler that has no output logic at all,

{@linkcode WriterHandler} is an abstract class that supports any target with
`Writer` interface.

During setup async hooks `setup` and `destroy` are called, you can use them
to open and close file/HTTP connection or any other action you might need.

For examples check source code of {@linkcode FileHandler}`
and {@linkcode TestHandler}.


______
/. 🚀 :lib: bytes [Stable] https://deno.land/std@0.207.0/bytes
==============================================================

Provides helper functions to manipulate `Uint8Array` byte slices that are not
included on the `Uint8Array` prototype.




______
/. 🚀 :fun: bytes:concat 🟩
---------------------------


```ts
function concat( buf:Uint8Array[] ): Uint8Array
```

Concatenate an array of {@linkcode Uint8Array}s.



example
-------

```ts
import { concat } from "https://deno.land/std@$STD_VERSION/bytes/concat.ts";

const a = new Uint8Array([0, 1, 2]);
const b = new Uint8Array([3, 4, 5]);
concat([a, b]); // Uint8Array(6) [ 0, 1, 2, 3, 4, 5 ]
```



______
/. 🚀 :fun: bytes:concat 🟩
---------------------------


```ts
function concat( ...buf:Uint8Array[] ): Uint8Array
```



deprecated
----------

(will be removed in 0.209.0) Pass in an array instead of a
spread of arguments.

Concatenate an array of {@linkcode Uint8Array}s.



example
-------

```ts
import { concat } from "https://deno.land/std@$STD_VERSION/bytes/concat.ts";

const a = new Uint8Array([0, 1, 2]);
const b = new Uint8Array([3, 4, 5]);
concat(a, b); // Uint8Array(6) [ 0, 1, 2, 3, 4, 5 ]
```



______
/. 🚀 :fun: bytes:concat 🟩
---------------------------


```ts
function concat( ...buf:[] ): Uint8Array
```




______
/. 🚀 :fun: bytes:copy 🟩
-------------------------


```ts
function copy( src:Uint8Array, dst:Uint8Array, off ): number
```

Copy bytes from the `src` array to the `dst` array. Returns the number of
bytes copied.

If the `src` array is larger than what the `dst` array can hold, only the
amount of bytes that fit in the `dst` array are copied.

An offset can be specified as the third argument that begins the copy at
that given index in the `dst` array. The offset defaults to the beginning of
the array.

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/bytes/copy.ts";
const src = new Uint8Array([9, 8, 7]);
const dst = new Uint8Array([0, 1, 2, 3, 4, 5]);
console.log(copy(src, dst)); // 3
console.log(dst); // [9, 8, 7, 3, 4, 5]
```

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/bytes/copy.ts";
const src = new Uint8Array([1, 1, 1, 1]);
const dst = new Uint8Array([0, 0, 0, 0]);
console.log(copy(src, dst, 1)); // 3
console.log(dst); // [0, 1, 1, 1]
```



______
/. 🚀 :fun: bytes:endsWith 🟩
-----------------------------


```ts
function endsWith( source:Uint8Array, suffix:Uint8Array ): boolean
```

Returns true if the suffix array appears at the end of the source array,
false otherwise.

The complexity of this function is O(suffix.length).

```ts
import { endsWith } from "https://deno.land/std@$STD_VERSION/bytes/ends_with.ts";
const source = new Uint8Array([0, 1, 2, 1, 2, 1, 2, 3]);
const suffix = new Uint8Array([1, 2, 3]);
console.log(endsWith(source, suffix)); // true
```



______
/. 🚀 :fun: bytes:equals 🟩
---------------------------


```ts
function equals( a:Uint8Array, b:Uint8Array ): boolean
```

Check whether binary arrays are equal to each other.

*   **param**: `a` 

    first array to check equality

*   **param**: `b` 

    second array to check equality



______
/. 🚀 :fun: bytes:includesNeedle 🟩
-----------------------------------


```ts
function includesNeedle( source:Uint8Array, needle:Uint8Array, start ): boolean
```

Returns true if the source array contains the needle array, false otherwise.

A start index can be specified as the third argument that begins the search
at that given index. The start index defaults to the beginning of the array.

The complexity of this function is O(source.length * needle.length).

```ts
import { includesNeedle } from "https://deno.land/std@$STD_VERSION/bytes/includes_needle.ts";
const source = new Uint8Array([0, 1, 2, 1, 2, 1, 2, 3]);
const needle = new Uint8Array([1, 2]);
console.log(includesNeedle(source, needle)); // true
console.log(includesNeedle(source, needle, 6)); // false
```



______
/. 🚀 :fun: bytes:indexOfNeedle 🟩
----------------------------------


```ts
function indexOfNeedle( source:Uint8Array, needle:Uint8Array, start ): number
```

Returns the index of the first occurrence of the needle array in the source
array, or -1 if it is not present.

A start index can be specified as the third argument that begins the search
at that given index. The start index defaults to the start of the array.

The complexity of this function is O(source.length * needle.length).

```ts
import { indexOfNeedle } from "https://deno.land/std@$STD_VERSION/bytes/index_of_needle.ts";
const source = new Uint8Array([0, 1, 2, 1, 2, 1, 2, 3]);
const needle = new Uint8Array([1, 2]);
console.log(indexOfNeedle(source, needle)); // 1
console.log(indexOfNeedle(source, needle, 2)); // 3
```



______
/. 🚀 :fun: bytes:lastIndexOfNeedle 🟩
--------------------------------------


```ts
function lastIndexOfNeedle( source:Uint8Array, needle:Uint8Array, start ): number
```

Returns the index of the last occurrence of the needle array in the source
array, or -1 if it is not present.

A start index can be specified as the third argument that begins the search
at that given index. The start index defaults to the end of the array.

The complexity of this function is O(source.length * needle.length).

```ts
import { lastIndexOfNeedle } from "https://deno.land/std@$STD_VERSION/bytes/last_index_of_needle.ts";
const source = new Uint8Array([0, 1, 2, 1, 2, 1, 2, 3]);
const needle = new Uint8Array([1, 2]);
console.log(lastIndexOfNeedle(source, needle)); // 5
console.log(lastIndexOfNeedle(source, needle, 4)); // 3
```



______
/. 🚀 :fun: bytes:repeat 🟩
---------------------------


```ts
function repeat( source:Uint8Array, count:number ): Uint8Array
```

Returns a new Uint8Array composed of `count` repetitions of the `source`
array.

If `count` is negative, a `RangeError` is thrown.

```ts
import { repeat } from "https://deno.land/std@$STD_VERSION/bytes/repeat.ts";
const source = new Uint8Array([0, 1, 2]);
console.log(repeat(source, 3)); // [0, 1, 2, 0, 1, 2, 0, 1, 2]
console.log(repeat(source, 0)); // []
console.log(repeat(source, -1)); // RangeError
```



______
/. 🚀 :fun: bytes:startsWith 🟩
-------------------------------


```ts
function startsWith( source:Uint8Array, prefix:Uint8Array ): boolean
```

Returns true if the prefix array appears at the start of the source array,
false otherwise.

The complexity of this function is O(prefix.length).

```ts
import { startsWith } from "https://deno.land/std@$STD_VERSION/bytes/starts_with.ts";
const source = new Uint8Array([0, 1, 2, 1, 2, 1, 2, 3]);
const prefix = new Uint8Array([0, 1, 2]);
console.log(startsWith(source, prefix)); // true
```


______
/. 🚀 :lib: media_types [Stable] https://deno.land/std@0.207.0/media_types
==========================================================================

Utility functions for media types (MIME types).

This API is inspired by the GoLang [`mime`](https://pkg.go.dev/mime) package
and [jshttp/mime-types](https://github.com/jshttp/mime-types), and is
designed to integrate and improve the APIs from
[deno.land/x/media_types](https://deno.land/x/media_types).

The `vendor` folder contains copy of the
[jshttp/mime-db](https://github.com/jshttp/mime-types) `db.json` file along
with its license.




______
/. 🚀 :fun: media_types:contentType 🟩
--------------------------------------


```ts
function contentType<T extends  (string & ) | KnownExtensionOrType>( extensionOrType:T ): ()=>Lowercase
```

Given an extension or media type, return a full `Content-Type` or
`Content-Disposition` header value.

The function will treat the `extensionOrType` as a media type when it
contains a `/`, otherwise it will process it as an extension, with or without
the leading `.`.

Returns `undefined` if unable to resolve the media type.

> Note: a side effect of `deno/x/media_types` was that you could pass a file
> name (e.g. `file.json`) and it would return the content type. This behavior
> is intentionally not supported here. If you want to get an extension for a
> file name, use `extname()` from `std/path/mod.ts` to determine the
> extension and pass it here.



example
-------

```ts
import { contentType } from "https://deno.land/std@$STD_VERSION/media_types/content_type.ts";

contentType(".json"); // `application/json; charset=UTF-8`
contentType("text/html"); // `text/html; charset=UTF-8`
contentType("text/html; charset=UTF-8"); // `text/html; charset=UTF-8`
contentType("txt"); // `text/plain; charset=UTF-8`
contentType("foo"); // undefined
contentType("file.json"); // undefined
```



______
/. 🚀 :fun: media_types:extension 🟩
------------------------------------


```ts
function extension( type:string ):  string | undefined
```

For a given media type, return the most relevant extension, or `undefined`
if no extension can be found.

Extensions are returned without a leading `.`.



example
-------

```ts
import { extension } from "https://deno.land/std@$STD_VERSION/media_types/extension.ts";

extension("text/plain"); // `txt`
extension("application/json"); // `json`
extension("text/html; charset=UTF-8"); // `html`
extension("application/foo"); // undefined
```



______
/. 🚀 :fun: media_types:extensionsByType 🟩
-------------------------------------------


```ts
function extensionsByType( type:string ):  string[] | undefined
```

Returns the extensions known to be associated with the media type `type`.
The returned extensions will each begin with a leading dot, as in `.html`.

When `type` has no associated extensions, the function returns `undefined`.

Extensions are returned without a leading `.`.



example
-------

```ts
import { extensionsByType } from "https://deno.land/std@$STD_VERSION/media_types/extensions_by_type.ts";

extensionsByType("application/json"); // ["json", "map"]
extensionsByType("text/html; charset=UTF-8"); // ["html", "htm", "shtml"]
extensionsByType("application/foo"); // undefined
```



______
/. 🚀 :fun: media_types:formatMediaType 🟩
------------------------------------------


```ts
function formatMediaType( type:string, param?: Record<string, string> | Iterable<[string, string]> ): string
```

Serializes the media type and the optional parameters as a media type
conforming to RFC 2045 and RFC 2616.

The type and parameter names are written in lower-case.

When any of the arguments results in a standard violation then the return
value will be an empty string (`""`).



example
-------

```ts
import { formatMediaType } from "https://deno.land/std@$STD_VERSION/media_types/format_media_type.ts";

formatMediaType("text/plain", { charset: "UTF-8" }); // `text/plain; charset=UTF-8`
```



______
/. 🚀 :fun: media_types:getCharset 🟩
-------------------------------------


```ts
function getCharset( type:string ):  string | undefined
```

Given a media type or header value, identify the encoding charset. If the
charset cannot be determined, the function returns `undefined`.



example
-------

```ts
import { getCharset } from "https://deno.land/std@$STD_VERSION/media_types/get_charset.ts";

getCharset("text/plain"); // `UTF-8`
getCharset("application/foo"); // undefined
getCharset("application/news-checkgroups"); // `US-ASCII`
getCharset("application/news-checkgroups; charset=UTF-8"); // `UTF-8`
```



______
/. 🚀 :fun: media_types:parseMediaType 🟩
-----------------------------------------


```ts
function parseMediaType( v:string ): [string,  Record<string, string> | undefined]
```

Parses the media type and any optional parameters, per
[RFC 1521](https://datatracker.ietf.org/doc/html/rfc1521). Media types are
the values in `Content-Type` and `Content-Disposition` headers. On success
the function returns a tuple where the first element is the media type and
the second element is the optional parameters or `undefined` if there are
none.

The function will throw if the parsed value is invalid.

The returned media type will be normalized to be lower case, and returned
params keys will be normalized to lower case, but preserves the casing of
the value.



example
-------

```ts
import { parseMediaType } from "https://deno.land/std@$STD_VERSION/media_types/parse_media_type.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

assertEquals(
  parseMediaType("application/JSON"),
  [
    "application/json",
    undefined
  ]
);

assertEquals(
  parseMediaType("text/html; charset=UTF-8"),
  [
    "text/html",
    { charset: "UTF-8" },
  ]
);
```



______
/. 🚀 :fun: media_types:typeByExtension 🟩
------------------------------------------


```ts
function typeByExtension( extension:string ):  string | undefined
```



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode import("./content_type.ts").contentType} instead.

Returns the media type associated with the file extension. Values are
normalized to lower case and matched irrespective of a leading `.`.

When `extension` has no associated type, the function returns `undefined`.



example
-------

```ts
import { typeByExtension } from "https://deno.land/std@$STD_VERSION/media_types/type_by_extension.ts";

typeByExtension("js"); // `application/json`
typeByExtension(".HTML"); // `text/html`
typeByExtension("foo"); // undefined
typeByExtension("file.json"); // undefined
```


______
/. 🚀 :variable: extensions
---------------------------

    const extensions : Map<string, string[]>

A map of extensions for a given media type.


______
/. 🚀 :lib: collections [Stable] https://deno.land/std@0.207.0/collections
==========================================================================

Functions for specific common tasks around collection types like `Array` and
`Record`. This module is heavily inspired by `kotlin`s stdlib.

- All provided functions are **pure**, which also means that they do **not
  mutate** your inputs, **returning a new value** instead.
- All functions are importable on their own by referencing their snake_case
  named file (e.g. `collections/sort_by.ts`)

This module re-exports several modules, and importing this module directly
will likely include a lot of code that you might not use.

Consider importing the function directly. For example to import
{@linkcode groupBy} import the module using the snake cased version of the
module:

```ts
import { groupBy } from "https://deno.land/std@$STD_VERSION/collections/group_by.ts";
```




______
/. 🚀 :class: collections:BinaryHeap 🟢
---------------------------------------


```ts
class BinaryHeap<T> implements Iterable<T> { ... }
```

A priority queue implemented with a binary heap. The heap is in descending
order by default, using JavaScript's built-in comparison operators to sort
the values.

| Method      | Average Case | Worst Case |
| ----------- | ------------ | ---------- |
| peek()      | O(1)         | O(1)       |
| pop()       | O(log n)     | O(log n)   |
| push(value) | O(1)         | O(log n)   |



example
-------

```ts
import {
  ascend,
  BinaryHeap,
  descend,
} from "https://deno.land/std@$STD_VERSION/data_structures/mod.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const maxHeap = new BinaryHeap<number>();
maxHeap.push(4, 1, 3, 5, 2);
assertEquals(maxHeap.peek(), 5);
assertEquals(maxHeap.pop(), 5);
assertEquals([...maxHeap], [4, 3, 2, 1]);
assertEquals([...maxHeap], []);

const minHeap = new BinaryHeap<number>(ascend);
minHeap.push(4, 1, 3, 5, 2);
assertEquals(minHeap.peek(), 1);
assertEquals(minHeap.pop(), 1);
assertEquals([...minHeap], [2, 3, 4, 5]);
assertEquals([...minHeap], []);

const words = new BinaryHeap<string>((a, b) => descend(a.length, b.length));
words.push("truck", "car", "helicopter", "tank");
assertEquals(words.peek(), "helicopter");
assertEquals(words.pop(), "helicopter");
assertEquals([...words], ["truck", "tank", "car"]);
assertEquals([...words], []);
```



______
/. 🚀 BinaryHeap constructors
=============================



______
/. 🚀 :ctor: BinaryHeap 🟥
--------------------------


```ts
new BinaryHeap(compare:(a:T, b:T) => number)
```




______
/. 🚀 BinaryHeap methods
========================



______
/. 🚀 :method: BinaryHeap.toArray 🟨
------------------------------------


```ts
function toArray(  )
```

Returns the underlying cloned array in arbitrary order without sorting



______
/. 🚀 :method: BinaryHeap.from 🟨
---------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T> ): BinaryHeap<T>
```

Creates a new binary heap from an array like or iterable object.



______
/. 🚀 :method: BinaryHeap.from 🟨
---------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>, options:{ compare?: (a:T, b:T) => number } ): BinaryHeap<T>
```




______
/. 🚀 :method: BinaryHeap.from 🟨
---------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>, options:{ compare?: (a:U, b:U) => number; map: (value:T, index:number) => U; thisArg?: V } ): BinaryHeap<U>
```




______
/. 🚀 :method: BinaryHeap.from 🟨
---------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>, options?:{ compare?: (a:U, b:U) => number; map?: (value:T, index:number) => U; thisArg?: V } ): BinaryHeap<U>
```




______
/. 🚀 :getter: BinaryHeap.length 🟦
-----------------------------------


```ts
function length(  ): number
```

The amount of values stored in the binary heap.



______
/. 🚀 :method: BinaryHeap.peek 🟨
---------------------------------


```ts
function peek(  ):  T | undefined
```

Returns the greatest value in the binary heap, or undefined if it is empty.



______
/. 🚀 :method: BinaryHeap.pop 🟨
--------------------------------


```ts
function pop(  ):  T | undefined
```

Removes the greatest value from the binary heap and returns it, or null if it is empty.



______
/. 🚀 :method: BinaryHeap.push 🟨
---------------------------------


```ts
function push( ...values:T[] ): number
```

Adds values to the binary heap.



______
/. 🚀 :method: BinaryHeap.clear 🟨
----------------------------------


```ts
function clear(  ): void
```

Removes all values from the binary heap.



______
/. 🚀 :method: BinaryHeap.isEmpty 🟨
------------------------------------


```ts
function isEmpty(  ): boolean
```

Checks if the binary heap is empty.



______
/. 🚀 :method: BinaryHeap.drain 🟨
----------------------------------


```ts
function drain(  ): IterableIterator<T>
```

Returns an iterator for retrieving and removing values from the binary heap.



______
/. 🚀 :method: BinaryHeap.[Symbol.iterator] 🟨
----------------------------------------------


```ts
function [Symbol.iterator](  ): IterableIterator<T>
```




______
/. 🚀 :class: collections:BinarySearchTree 🟢
---------------------------------------------


```ts
class BinarySearchTree<T> implements Iterable<T> { ... }
```

An unbalanced binary search tree. The values are in ascending order by default,
using JavaScript's built-in comparison operators to sort the values.

For performance, it's recommended that you use a self-balancing binary search
tree instead of this one unless you are extending this to create a
self-balancing tree. See RedBlackTree for an example of how BinarySearchTree
 can be extended to create a self-balancing binary search tree.

| Method        | Average Case | Worst Case |
| ------------- | ------------ | ---------- |
| find(value)   | O(log n)     | O(n)       |
| insert(value) | O(log n)     | O(n)       |
| remove(value) | O(log n)     | O(n)       |
| min()         | O(log n)     | O(n)       |
| max()         | O(log n)     | O(n)       |



example
-------

```ts
import {
  BinarySearchTree,
  ascend,
  descend,
} from "https://deno.land/std@$STD_VERSION/data_structures/mod.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const values = [3, 10, 13, 4, 6, 7, 1, 14];
const tree = new BinarySearchTree<number>();
values.forEach((value) => tree.insert(value));
assertEquals([...tree], [1, 3, 4, 6, 7, 10, 13, 14]);
assertEquals(tree.min(), 1);
assertEquals(tree.max(), 14);
assertEquals(tree.find(42), null);
assertEquals(tree.find(7), 7);
assertEquals(tree.remove(42), false);
assertEquals(tree.remove(7), true);
assertEquals([...tree], [1, 3, 4, 6, 10, 13, 14]);

const invertedTree = new BinarySearchTree<number>(descend);
values.forEach((value) => invertedTree.insert(value));
assertEquals([...invertedTree], [14, 13, 10, 7, 6, 4, 3, 1]);
assertEquals(invertedTree.min(), 14);
assertEquals(invertedTree.max(), 1);
assertEquals(invertedTree.find(42), null);
assertEquals(invertedTree.find(7), 7);
assertEquals(invertedTree.remove(42), false);
assertEquals(invertedTree.remove(7), true);
assertEquals([...invertedTree], [14, 13, 10, 6, 4, 3, 1]);

const words = new BinarySearchTree<string>((a, b) =>
  ascend(a.length, b.length) || ascend(a, b)
);
["truck", "car", "helicopter", "tank", "train", "suv", "semi", "van"]
  .forEach((value) => words.insert(value));
assertEquals([...words], [
  "car",
  "suv",
  "van",
  "semi",
  "tank",
  "train",
  "truck",
  "helicopter",
]);
assertEquals(words.min(), "car");
assertEquals(words.max(), "helicopter");
assertEquals(words.find("scooter"), null);
assertEquals(words.find("tank"), "tank");
assertEquals(words.remove("scooter"), false);
assertEquals(words.remove("tank"), true);
assertEquals([...words], [
  "car",
  "suv",
  "van",
  "semi",
  "train",
  "truck",
  "helicopter",
]);
```



______
/. 🚀 BinarySearchTree constructors
===================================



______
/. 🚀 :ctor: BinarySearchTree 🟥
--------------------------------


```ts
new BinarySearchTree(compare:(a:T, b:T) => number)
```



*   root:  BinarySearchNode<T> | null
*   _size: number

______
/. 🚀 BinarySearchTree methods
==============================



______
/. 🚀 :method: BinarySearchTree.from 🟨
---------------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | BinarySearchTree<T> ): BinarySearchTree<T>
```

Creates a new binary search tree from an array like or iterable object.



______
/. 🚀 :method: BinarySearchTree.from 🟨
---------------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | BinarySearchTree<T>, options:{ compare?: (a:T, b:T) => number } ): BinarySearchTree<T>
```




______
/. 🚀 :method: BinarySearchTree.from 🟨
---------------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | BinarySearchTree<T>, options:{ compare?: (a:U, b:U) => number; map: (value:T, index:number) => U; thisArg?: V } ): BinarySearchTree<U>
```




______
/. 🚀 :method: BinarySearchTree.from 🟨
---------------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | BinarySearchTree<T>, options?:{ compare?: (a:U, b:U) => number; map?: (value:T, index:number) => U; thisArg?: V } ): BinarySearchTree<U>
```




______
/. 🚀 :getter: BinarySearchTree.size 🟦
---------------------------------------


```ts
function size(  ): number
```

The amount of values stored in the binary search tree.



______
/. 🚀 :method: BinarySearchTree.findNode 🟨
-------------------------------------------


```ts
function findNode( value:T ):  BinarySearchNode<T> | null
```




______
/. 🚀 :method: BinarySearchTree.rotateNode 🟨
---------------------------------------------


```ts
function rotateNode( node:BinarySearchNode<T>, direction:Direction ): void
```




______
/. 🚀 :method: BinarySearchTree.insertNode 🟨
---------------------------------------------


```ts
function insertNode( Node:BinarySearchNode, value:T ):  BinarySearchNode<T> | null
```




______
/. 🚀 :method: BinarySearchTree.removeNode 🟨
---------------------------------------------


```ts
function removeNode( node:BinarySearchNode<T> ):  BinarySearchNode<T> | null
```

Removes the given node, and returns the node that was physically removed from the tree.



______
/. 🚀 :method: BinarySearchTree.insert 🟨
-----------------------------------------


```ts
function insert( value:T ): boolean
```

Adds the value to the binary search tree if it does not already exist in it.
Returns true if successful.



______
/. 🚀 :method: BinarySearchTree.remove 🟨
-----------------------------------------


```ts
function remove( value:T ): boolean
```

Removes node value from the binary search tree if found.
Returns true if found and removed.



______
/. 🚀 :method: BinarySearchTree.find 🟨
---------------------------------------


```ts
function find( value:T ):  T | null
```

Returns node value if found in the binary search tree.



______
/. 🚀 :method: BinarySearchTree.min 🟨
--------------------------------------


```ts
function min(  ):  T | null
```

Returns the minimum value in the binary search tree or null if empty.



______
/. 🚀 :method: BinarySearchTree.max 🟨
--------------------------------------


```ts
function max(  ):  T | null
```

Returns the maximum value in the binary search tree or null if empty.



______
/. 🚀 :method: BinarySearchTree.clear 🟨
----------------------------------------


```ts
function clear(  ): void
```

Removes all values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.isEmpty 🟨
------------------------------------------


```ts
function isEmpty(  ): boolean
```

Checks if the binary search tree is empty.



______
/. 🚀 :method: BinarySearchTree.lnrValues 🟨
--------------------------------------------


```ts
function lnrValues(  ): IterableIterator<T>
```

Returns an iterator that uses in-order (LNR) tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.rnlValues 🟨
--------------------------------------------


```ts
function rnlValues(  ): IterableIterator<T>
```

Returns an iterator that uses reverse in-order (RNL) tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.nlrValues 🟨
--------------------------------------------


```ts
function nlrValues(  ): IterableIterator<T>
```

Returns an iterator that uses pre-order (NLR) tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.lrnValues 🟨
--------------------------------------------


```ts
function lrnValues(  ): IterableIterator<T>
```

Returns an iterator that uses post-order (LRN) tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.lvlValues 🟨
--------------------------------------------


```ts
function lvlValues(  ): IterableIterator<T>
```

Returns an iterator that uses level order tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :method: BinarySearchTree.[Symbol.iterator] 🟨
----------------------------------------------------


```ts
function [Symbol.iterator](  ): IterableIterator<T>
```

Returns an iterator that uses in-order (LNR) tree traversal for
retrieving values from the binary search tree.



______
/. 🚀 :class: collections:RedBlackTree 🟢
-----------------------------------------


```ts
class RedBlackTree<T> extends BinarySearchTree<T> { ... }
```

A red-black tree. This is a kind of self-balancing binary search tree. The
values are in ascending order by default, using JavaScript's built-in
comparison operators to sort the values.

Red-Black Trees require fewer rotations than AVL Trees, so they can provide
faster insertions and removal operations. If you need faster lookups, you
should use an AVL Tree instead. AVL Trees are more strictly balanced than
Red-Black Trees, so they can provide faster lookups.

| Method        | Average Case | Worst Case |
| ------------- | ------------ | ---------- |
| find(value)   | O(log n)     | O(log n)   |
| insert(value) | O(log n)     | O(log n)   |
| remove(value) | O(log n)     | O(log n)   |
| min()         | O(log n)     | O(log n)   |
| max()         | O(log n)     | O(log n)   |



example
-------

```ts
import {
  ascend,
  descend,
  RedBlackTree,
} from "https://deno.land/std@$STD_VERSION/data_structures/mod.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const values = [3, 10, 13, 4, 6, 7, 1, 14];
const tree = new RedBlackTree<number>();
values.forEach((value) => tree.insert(value));
assertEquals([...tree], [1, 3, 4, 6, 7, 10, 13, 14]);
assertEquals(tree.min(), 1);
assertEquals(tree.max(), 14);
assertEquals(tree.find(42), null);
assertEquals(tree.find(7), 7);
assertEquals(tree.remove(42), false);
assertEquals(tree.remove(7), true);
assertEquals([...tree], [1, 3, 4, 6, 10, 13, 14]);

const invertedTree = new RedBlackTree<number>(descend);
values.forEach((value) => invertedTree.insert(value));
assertEquals([...invertedTree], [14, 13, 10, 7, 6, 4, 3, 1]);
assertEquals(invertedTree.min(), 14);
assertEquals(invertedTree.max(), 1);
assertEquals(invertedTree.find(42), null);
assertEquals(invertedTree.find(7), 7);
assertEquals(invertedTree.remove(42), false);
assertEquals(invertedTree.remove(7), true);
assertEquals([...invertedTree], [14, 13, 10, 6, 4, 3, 1]);

const words = new RedBlackTree<string>((a, b) =>
  ascend(a.length, b.length) || ascend(a, b)
);
["truck", "car", "helicopter", "tank", "train", "suv", "semi", "van"]
  .forEach((value) => words.insert(value));
assertEquals([...words], [
  "car",
  "suv",
  "van",
  "semi",
  "tank",
  "train",
  "truck",
  "helicopter",
]);
assertEquals(words.min(), "car");
assertEquals(words.max(), "helicopter");
assertEquals(words.find("scooter"), null);
assertEquals(words.find("tank"), "tank");
assertEquals(words.remove("scooter"), false);
assertEquals(words.remove("tank"), true);
assertEquals([...words], [
  "car",
  "suv",
  "van",
  "semi",
  "train",
  "truck",
  "helicopter",
]);
```



______
/. 🚀 RedBlackTree constructors
===============================



______
/. 🚀 :ctor: RedBlackTree 🟥
----------------------------


```ts
new RedBlackTree(compare:(a:T, b:T) => number)
```



*   root:  RedBlackNode<T> | null

______
/. 🚀 RedBlackTree methods
==========================



______
/. 🚀 :method: RedBlackTree.from 🟨
-----------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | RedBlackTree<T> ): RedBlackTree<T>
```

Creates a new red-black tree from an array like or iterable object.



______
/. 🚀 :method: RedBlackTree.from 🟨
-----------------------------------


```ts
function static from<<T>>( collection: ArrayLike<T> | Iterable<T> | RedBlackTree<T>, options:{ Node?: RedBlackNode; compare?: (a:T, b:T) => number } ): RedBlackTree<T>
```




______
/. 🚀 :method: RedBlackTree.from 🟨
-----------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | RedBlackTree<T>, options:{ compare?: (a:U, b:U) => number; map: (value:T, index:number) => U; thisArg?: V } ): RedBlackTree<U>
```




______
/. 🚀 :method: RedBlackTree.from 🟨
-----------------------------------


```ts
function static from<<T, U, V>>( collection: ArrayLike<T> | Iterable<T> | RedBlackTree<T>, options?:{ compare?: (a:U, b:U) => number; map?: (value:T, index:number) => U; thisArg?: V } ): RedBlackTree<U>
```




______
/. 🚀 :method: RedBlackTree.removeFixup 🟨
------------------------------------------


```ts
function removeFixup( parent: RedBlackNode<T> | null, current: RedBlackNode<T> | null ): void
```




______
/. 🚀 :method: RedBlackTree.insert 🟨
-------------------------------------


```ts
function insert( value:T ): boolean
```

Adds the value to the binary search tree if it does not already exist in it.
Returns true if successful.



______
/. 🚀 :method: RedBlackTree.remove 🟨
-------------------------------------


```ts
function remove( value:T ): boolean
```

Removes node value from the binary search tree if found.
Returns true if found and removed.



______
/. 🚀 :fun: collections:aggregateGroups 🟩
------------------------------------------


```ts
function aggregateGroups<<T, A>>( record:Readonly<Record<string, ReadonlyArray<T>>>, aggregator:(current:T, key:string, first:boolean, accumulator?:A) => A ): Record<string, A>
```

Applies the given aggregator to each group in the given grouping, returning the
results together with the respective group keys

TODO:JsDocTagNamed: aggregateGroups {"kind":"template","name":"T","doc":"input type of an item in a group in the given grouping."}
TODO:JsDocTagNamed: aggregateGroups {"kind":"template","name":"A","doc":"type of the accumulator value, which will match the returned record's values."}


example
-------

```ts
import { aggregateGroups } from "https://deno.land/std@$STD_VERSION/collections/aggregate_groups.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const foodProperties = {
  "Curry": ["spicy", "vegan"],
  "Omelette": ["creamy", "vegetarian"],
};
const descriptions = aggregateGroups(
  foodProperties,
  (current, key, first, acc) => {
    if (first) {
      return `${key} is ${current}`;
    }

    return `${acc} and ${current}`;
  },
);

assertEquals(descriptions, {
  "Curry": "Curry is spicy and vegan",
  "Omelette": "Omelette is creamy and vegetarian",
});
```



______
/. 🚀 :fun: collections:associateBy 🟩
--------------------------------------


```ts
function associateBy<<T>>( array:Iterable<T>, selector:(el:T) => string ): Record<string, T>
```

Transforms the given array into a Record, extracting the key of each element
using the given selector. If the selector produces the same key for multiple
elements, the latest one will be used (overriding the ones before it).



example
-------

```ts
import { associateBy } from "https://deno.land/std@$STD_VERSION/collections/associate_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const users = [
  { id: "a2e", userName: "Anna" },
  { id: "5f8", userName: "Arnold" },
  { id: "d2c", userName: "Kim" },
];
const usersById = associateBy(users, (it) => it.id);

assertEquals(usersById, {
  "a2e": { id: "a2e", userName: "Anna" },
  "5f8": { id: "5f8", userName: "Arnold" },
  "d2c": { id: "d2c", userName: "Kim" },
});
```



______
/. 🚀 :fun: collections:associateWith 🟩
----------------------------------------


```ts
function associateWith<<T>>( array:Iterable<string>, selector:(key:string) => T ): Record<string, T>
```

Builds a new Record using the given array as keys and choosing a value for
each key using the given selector. If any of two pairs would have the same
value the latest on will be used (overriding the ones before it).



example
-------

```ts
import { associateWith } from "https://deno.land/std@$STD_VERSION/collections/associate_with.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const names = ["Kim", "Lara", "Jonathan"];
const namesToLength = associateWith(names, (it) => it.length);

assertEquals(namesToLength, {
  "Kim": 3,
  "Lara": 4,
  "Jonathan": 8,
});
```



______
/. 🚀 :fun: collections:chunk 🟩
--------------------------------


```ts
function chunk<<T>>( array:readonly T[], size:number ): []
```

Splits the given array into chunks of the given size and returns them.



example
-------

```ts
import { chunk } from "https://deno.land/std@$STD_VERSION/collections/chunk.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const words = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consetetur",
  "sadipscing",
];
const chunks = chunk(words, 3);

assertEquals(
  chunks,
  [
    ["lorem", "ipsum", "dolor"],
    ["sit", "amet", "consetetur"],
    ["sadipscing"],
  ],
);
```



______
/. 🚀 :fun: collections:deepMerge 🟩
------------------------------------


```ts
function deepMerge<T extends Record<PropertyKey, unknown>>( record:Partial<Readonly<T>>, other:Partial<Readonly<T>>, options?:Readonly<DeepMergeOptions> ): T
```

Merges the two given Records, recursively merging any nested Records with the
second collection overriding the first in case of conflict

For arrays, maps and sets, a merging strategy can be specified to either
`replace` values, or `merge` them instead. Use `includeNonEnumerable` option
to include non-enumerable properties too.



example
-------

```ts
import { deepMerge } from "https://deno.land/std@$STD_VERSION/collections/deep_merge.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const a = { foo: true };
const b = { foo: { bar: true } };

assertEquals(deepMerge(a, b), { foo: { bar: true } });
```



______
/. 🚀 :fun: collections:deepMerge 🟩
------------------------------------


```ts
function deepMerge<T extends Record<PropertyKey, unknown>, U extends Record<PropertyKey, unknown>, Options extends DeepMergeOptions>( record:Readonly<T>, other:Readonly<U>, options?:Readonly<Options> ): DeepMerge<T, U, Options>
```




______
/. 🚀 :fun: collections:deepMerge 🟩
------------------------------------


```ts
function deepMerge<T extends Record<PropertyKey, unknown>, U extends Record<PropertyKey, unknown>, Options extends DeepMergeOptions>( record:Readonly<T>, other:Readonly<U>, options?:Readonly<Options> ): DeepMerge<T, U, Options>
```




______
/. 🚀 :fun: collections:distinct 🟩
-----------------------------------


```ts
function distinct<<T>>( array:Iterable<T> ): T[]
```

Returns all distinct elements in the given array, preserving order by first
occurrence.



example
-------

```ts
import { distinct } from "https://deno.land/std@$STD_VERSION/collections/distinct.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [3, 2, 5, 2, 5];
const distinctNumbers = distinct(numbers);

assertEquals(distinctNumbers, [3, 2, 5]);
```



______
/. 🚀 :fun: collections:distinctBy 🟩
-------------------------------------


```ts
function distinctBy<<T, D>>( array:Iterable<T>, selector:(el:T) => D ): T[]
```

Returns all elements in the given array that produce a distinct value using
the given selector, preserving order by first occurrence.



example
-------

```ts
import { distinctBy } from "https://deno.land/std@$STD_VERSION/collections/distinct_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const names = ["Anna", "Kim", "Arnold", "Kate"];
const exampleNamesByFirstLetter = distinctBy(names, (it) => it.charAt(0));

assertEquals(exampleNamesByFirstLetter, ["Anna", "Kim"]);
```



______
/. 🚀 :fun: collections:dropWhile 🟩
------------------------------------


```ts
function dropWhile<<T>>( array:readonly T[], predicate:(el:T) => boolean ): T[]
```

Returns a new array that drops all elements in the given collection until the
first element that does not match the given predicate.



example
-------

```ts
import { dropWhile } from "https://deno.land/std@$STD_VERSION/collections/drop_while.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [3, 2, 5, 2, 5];
const dropWhileNumbers = dropWhile(numbers, (i) => i !== 2);

assertEquals(dropWhileNumbers, [2, 5, 2, 5]);
```



______
/. 🚀 :fun: collections:filterEntries 🟩
----------------------------------------


```ts
function filterEntries<<T>>( record:Readonly<Record<string, T>>, predicate:(entry:[string, T]) => boolean ): Record<string, T>
```

Returns a new record with all entries of the given record except the ones
that do not match the given predicate.



example
-------

```ts
import { filterEntries } from "https://deno.land/std@$STD_VERSION/collections/filter_entries.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const menu = {
  "Salad": 11,
  "Soup": 8,
  "Pasta": 13,
} as const;
const myOptions = filterEntries(
  menu,
  ([item, price]) => item !== "Pasta" && price < 10,
);

assertEquals(
  myOptions,
  {
    "Soup": 8,
  },
);
```



______
/. 🚀 :fun: collections:filterKeys 🟩
-------------------------------------


```ts
function filterKeys<<T>>( record:Readonly<Record<string, T>>, predicate:(key:string) => boolean ): Record<string, T>
```

Returns a new record with all entries of the given record except the ones that
have a key that does not match the given predicate.



example
-------

```ts
import { filterKeys } from "https://deno.land/std@$STD_VERSION/collections/filter_keys.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const menu = {
  "Salad": 11,
  "Soup": 8,
  "Pasta": 13,
};
const menuWithoutSalad = filterKeys(menu, (it) => it !== "Salad");

assertEquals(
  menuWithoutSalad,
  {
    "Soup": 8,
    "Pasta": 13,
  },
);
```



______
/. 🚀 :fun: collections:filterValues 🟩
---------------------------------------


```ts
function filterValues<<T>>( record:Readonly<Record<string, T>>, predicate:(value:T) => boolean ): Record<string, T>
```

Returns a new record with all entries of the given record except the ones
that have a value that does not match the given predicate.



example
-------

```ts
import { filterValues } from "https://deno.land/std@$STD_VERSION/collections/filter_values.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = {
  "Arnold": 37,
  "Sarah": 7,
  "Kim": 23,
};
const adults = filterValues(people, (it) => it >= 18);

assertEquals(
  adults,
  {
    "Arnold": 37,
    "Kim": 23,
  },
);
```



______
/. 🚀 :fun: collections:groupBy 🟩
----------------------------------


```ts
function groupBy<T, K extends PropertyKey>( iterable:Iterable<T>, selector:(element:T, index:number) => K ): Partial<Record<K, T[]>>
```

Applies the given selector to each element in the given array, returning a
Record containing the results as keys and all values that produced that key
as values.



example
-------

```ts
import { groupBy } from "https://deno.land/std@$STD_VERSION/collections/group_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { name: "Anna" },
  { name: "Arnold" },
  { name: "Kim" },
];
const peopleByFirstLetter = groupBy(people, (it) => it.name.charAt(0));

assertEquals(
  peopleByFirstLetter,
  {
    "A": [{ name: "Anna" }, { name: "Arnold" }],
    "K": [{ name: "Kim" }],
  },
);
```



______
/. 🚀 :fun: collections:intersect 🟩
------------------------------------


```ts
function intersect<<T>>( ...arrays:[] ): T[]
```

Returns all distinct elements that appear at least once in each of the given
arrays.



example
-------

```ts
import { intersect } from "https://deno.land/std@$STD_VERSION/collections/intersect.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const lisaInterests = ["Cooking", "Music", "Hiking"];
const kimInterests = ["Music", "Tennis", "Cooking"];
const commonInterests = intersect(lisaInterests, kimInterests);

assertEquals(commonInterests, ["Cooking", "Music"]);
```



______
/. 🚀 :fun: collections:mapEntries 🟩
-------------------------------------


```ts
function mapEntries<<T, O>>( record:Readonly<Record<string, T>>, transformer:(entry:[string, T]) => [string, O] ): Record<string, O>
```

Applies the given transformer to all entries in the given record and returns
a new record containing the results.



example
-------

```ts
import { mapEntries } from "https://deno.land/std@$STD_VERSION/collections/map_entries.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const usersById = {
  "a2e": { name: "Kim", age: 22 },
  "dfe": { name: "Anna", age: 31 },
  "34b": { name: "Tim", age: 58 },
} as const;
const agesByNames = mapEntries(usersById, ([id, { name, age }]) => [name, age]);

assertEquals(
  agesByNames,
  {
    "Kim": 22,
    "Anna": 31,
    "Tim": 58,
  },
);
```



______
/. 🚀 :fun: collections:mapKeys 🟩
----------------------------------


```ts
function mapKeys<<T>>( record:Readonly<Record<string, T>>, transformer:(key:string) => string ): Record<string, T>
```

Applies the given transformer to all keys in the given record's entries and
returns a new record containing the transformed entries.

If the transformed entries contain the same key multiple times, only the last
one will appear in the returned record.



example
-------

```ts
import { mapKeys } from "https://deno.land/std@$STD_VERSION/collections/map_keys.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const counts = { a: 5, b: 3, c: 8 };

assertEquals(
  mapKeys(counts, (it) => it.toUpperCase()),
  {
    A: 5,
    B: 3,
    C: 8,
  },
);
```



______
/. 🚀 :fun: collections:mapNotNullish 🟩
----------------------------------------


```ts
function mapNotNullish<<T, O>>( array:Iterable<T>, transformer:(el:T) => O ): NonNullable[]
```

Returns a new array, containing all elements in the given array transformed
using the given transformer, except the ones that were transformed to `null`
or `undefined`.



example
-------

```ts
import { mapNotNullish } from "https://deno.land/std@$STD_VERSION/collections/map_not_nullish.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { middleName: null },
  { middleName: "William" },
  { middleName: undefined },
  { middleName: "Martha" },
];
const foundMiddleNames = mapNotNullish(people, (it) => it.middleName);

assertEquals(foundMiddleNames, ["William", "Martha"]);
```



______
/. 🚀 :fun: collections:mapValues 🟩
------------------------------------


```ts
function mapValues<<T, O>>( record:Readonly<Record<string, T>>, transformer:(value:T) => O ): Record<string, O>
```

Applies the given transformer to all values in the given record and returns a
new record containing the resulting keys associated to the last value that
produced them.



example
-------

```ts
import { mapValues } from "https://deno.land/std@$STD_VERSION/collections/map_values.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const usersById = {
  "a5ec": { name: "Mischa" },
  "de4f": { name: "Kim" },
};
const namesById = mapValues(usersById, (it) => it.name);

assertEquals(
  namesById,
  {
    "a5ec": "Mischa",
    "de4f": "Kim",
  },
);
```



______
/. 🚀 :fun: collections:partition 🟩
------------------------------------


```ts
function partition<T, U extends T>( array:Iterable<T>, predicate:(el:T) => el is U ): [U[], Exclude[]]
```

Returns a tuple of two arrays with the first one containing all elements in
the given array that match the given predicate and the second one containing
all that do not.



example
-------

```ts
import { partition } from "https://deno.land/std@$STD_VERSION/collections/partition.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [5, 6, 7, 8, 9];
const [even, odd] = partition(numbers, (it) => it % 2 === 0);

assertEquals(even, [6, 8]);
assertEquals(odd, [5, 7, 9]);
```



______
/. 🚀 :fun: collections:partition 🟩
------------------------------------


```ts
function partition<<T>>( array:Iterable<T>, predicate:(el:T) => boolean ): [T[], T[]]
```




______
/. 🚀 :fun: collections:partition 🟩
------------------------------------


```ts
function partition( array:Iterable<unknown>, predicate:(el:unknown) => boolean ): [unknown[], unknown[]]
```




______
/. 🚀 :fun: collections:partitionEntries 🟩
-------------------------------------------


```ts
function partitionEntries<<T>>( record:Readonly<Record<string, T>>, predicate:(entry:[string, T]) => boolean ): [Record<string, T>, Record<string, T>]
```

Returns a tuple of two records with the first one containing all entries of
the given record that match the given predicate and the second one containing
all that do not.



example
-------

```ts
import { partitionEntries } from "https://deno.land/std@$STD_VERSION/collections/partition_entries.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const menu = {
  "Salad": 11,
  "Soup": 8,
  "Pasta": 13,
} as const;
const myOptions = partitionEntries(
  menu,
  ([item, price]) => item !== "Pasta" && price < 10,
);

assertEquals(
  myOptions,
  [
    { "Soup": 8 },
    { "Salad": 11, "Pasta": 13 },
  ],
);
```



______
/. 🚀 :fun: collections:permutations 🟩
---------------------------------------


```ts
function permutations<<T>>( inputArray:Iterable<T> ): []
```

Builds all possible orders of all elements in the given array
Ignores equality of elements, meaning this will always return the same
number of permutations for a given length of input.



example
-------

```ts
import { permutations } from "https://deno.land/std@$STD_VERSION/collections/permutations.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [ 1, 2 ];
const windows = permutations(numbers);

assertEquals(windows, [
  [ 1, 2 ],
  [ 2, 1 ],
]);
```



______
/. 🚀 :fun: collections:findSingle 🟩
-------------------------------------


```ts
function findSingle<<T>>( array:Iterable<T>, predicate:(el:T) => boolean ):  T | undefined
```

Returns an element if and only if that element is the only one matching the
given condition. Returns `undefined` otherwise.



example
-------

```ts
import { findSingle } from "https://deno.land/std@$STD_VERSION/collections/find_single.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const bookings = [
  { month: "January", active: false },
  { month: "March", active: false },
  { month: "June", active: true },
];
const activeBooking = findSingle(bookings, (it) => it.active);
const inactiveBooking = findSingle(bookings, (it) => !it.active);

assertEquals(activeBooking, { month: "June", active: true });
assertEquals(inactiveBooking, undefined); // there are two applicable items
```



______
/. 🚀 :fun: collections:slidingWindows 🟩
-----------------------------------------


```ts
function slidingWindows<<T>>( array:readonly T[], size:number, object: ): []
```

Generates sliding views of the given array of the given size and returns a
new array containing all of them.

If step is set, each window will start that many elements after the last
window's start. (Default: 1)

If partial is set, windows will be generated for the last elements of the
collection, resulting in some undefined values if size is greater than 1.



example
-------

```ts
import { slidingWindows } from "https://deno.land/std@$STD_VERSION/collections/sliding_windows.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";
const numbers = [1, 2, 3, 4, 5];

const windows = slidingWindows(numbers, 3);
assertEquals(windows, [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
]);

const windowsWithStep = slidingWindows(numbers, 3, { step: 2 });
assertEquals(windowsWithStep, [
  [1, 2, 3],
  [3, 4, 5],
]);

const windowsWithPartial = slidingWindows(numbers, 3, { partial: true });
assertEquals(windowsWithPartial, [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
  [4, 5],
  [5],
]);
```



______
/. 🚀 :fun: collections:sumOf 🟩
--------------------------------


```ts
function sumOf<<T>>( array:Iterable<T>, selector:(el:T) => number ): number
```

Applies the given selector to all elements in the given collection and
calculates the sum of the results.



example
-------

```ts
import { sumOf } from "https://deno.land/std@$STD_VERSION/collections/sum_of.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { name: "Anna", age: 34 },
  { name: "Kim", age: 42 },
  { name: "John", age: 23 },
];
const totalAge = sumOf(people, (i) => i.age);

assertEquals(totalAge, 99);
```



______
/. 🚀 :fun: collections:maxBy 🟩
--------------------------------


```ts
function maxBy<<T>>( array:Iterable<T>, selector:(el:T) => number ):  T | undefined
```

Returns the first element that is the largest value of the given function or
undefined if there are no elements.



example
-------

```ts
import { maxBy } from "https://deno.land/std@$STD_VERSION/collections/max_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { name: "Anna", age: 34 },
  { name: "Kim", age: 42 },
  { name: "John", age: 23 },
];

const personWithMaxAge = maxBy(people, (i) => i.age);

assertEquals(personWithMaxAge, { name: "Kim", age: 42 });
```



______
/. 🚀 :fun: collections:maxBy 🟩
--------------------------------


```ts
function maxBy<<T>>( array:Iterable<T>, selector:(el:T) => string ):  T | undefined
```




______
/. 🚀 :fun: collections:maxBy 🟩
--------------------------------


```ts
function maxBy<<T>>( array:Iterable<T>, selector:(el:T) => bigint ):  T | undefined
```




______
/. 🚀 :fun: collections:maxBy 🟩
--------------------------------


```ts
function maxBy<<T>>( array:Iterable<T>, selector:(el:T) => Date ):  T | undefined
```




______
/. 🚀 :fun: collections:maxBy 🟩
--------------------------------


```ts
function maxBy<<T>>( array:Iterable<T>, selector: ((el:T) => number) | ((el:T) => string) | ((el:T) => bigint) | ((el:T) => Date) ):  T | undefined
```




______
/. 🚀 :fun: collections:maxOf 🟩
--------------------------------


```ts
function maxOf<<T>>( array:Iterable<T>, selector:(el:T) => number ):  number | undefined
```

Applies the given selector to all elements of the provided collection and
returns the max value of all elements. If an empty array is provided the
function will return undefined



example
-------

```ts
import { maxOf } from "https://deno.land/std@$STD_VERSION/collections/max_of.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const inventory = [
  { name: "mustard", count: 2 },
  { name: "soy", count: 4 },
  { name: "tomato", count: 32 },
];

const maxCount = maxOf(inventory, (i) => i.count);

assertEquals(maxCount, 32);
```



______
/. 🚀 :fun: collections:maxOf 🟩
--------------------------------


```ts
function maxOf<<T>>( array:Iterable<T>, selector:(el:T) => bigint ):  bigint | undefined
```




______
/. 🚀 :fun: collections:maxOf 🟩
--------------------------------


```ts
function maxOf<T, S extends  ((elextendsT) => number) | ((elextendsT) => bigint)>( array:Iterable<T>, selector:S ):  ReturnType<S> | undefined
```




______
/. 🚀 :fun: collections:minBy 🟩
--------------------------------


```ts
function minBy<<T>>( array:Iterable<T>, selector:(el:T) => number ):  T | undefined
```

Returns the first element that is the smallest value of the given function or
undefined if there are no elements



example
-------

```ts
import { minBy } from "https://deno.land/std@$STD_VERSION/collections/min_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { name: "Anna", age: 34 },
  { name: "Kim", age: 42 },
  { name: "John", age: 23 },
];

const personWithMinAge = minBy(people, (i) => i.age);

assertEquals(personWithMinAge, { name: "John", age: 23 });
```



______
/. 🚀 :fun: collections:minBy 🟩
--------------------------------


```ts
function minBy<<T>>( array:Iterable<T>, selector:(el:T) => string ):  T | undefined
```




______
/. 🚀 :fun: collections:minBy 🟩
--------------------------------


```ts
function minBy<<T>>( array:Iterable<T>, selector:(el:T) => bigint ):  T | undefined
```




______
/. 🚀 :fun: collections:minBy 🟩
--------------------------------


```ts
function minBy<<T>>( array:Iterable<T>, selector:(el:T) => Date ):  T | undefined
```




______
/. 🚀 :fun: collections:minBy 🟩
--------------------------------


```ts
function minBy<<T>>( array:Iterable<T>, selector: ((el:T) => number) | ((el:T) => string) | ((el:T) => bigint) | ((el:T) => Date) ):  T | undefined
```




______
/. 🚀 :fun: collections:minOf 🟩
--------------------------------


```ts
function minOf<<T>>( array:Iterable<T>, selector:(el:T) => number ):  number | undefined
```

Applies the given selector to all elements of the given collection and
returns the min value of all elements. If an empty array is provided the
function will return undefined.



example
-------

```ts
import { minOf } from "https://deno.land/std@$STD_VERSION/collections/min_of.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const inventory = [
  { name: "mustard", count: 2 },
  { name: "soy", count: 4 },
  { name: "tomato", count: 32 },
];
const minCount = minOf(inventory, (i) => i.count);

assertEquals(minCount, 2);
```



______
/. 🚀 :fun: collections:minOf 🟩
--------------------------------


```ts
function minOf<<T>>( array:Iterable<T>, selector:(el:T) => bigint ):  bigint | undefined
```




______
/. 🚀 :fun: collections:minOf 🟩
--------------------------------


```ts
function minOf<T, S extends  ((elextendsT) => number) | ((elextendsT) => bigint)>( array:Iterable<T>, selector:S ):  ReturnType<S> | undefined
```




______
/. 🚀 :fun: collections:sortBy 🟩
---------------------------------


```ts
function sortBy<<T>>( array:readonly T[], selector:(el:T) => number, options?:SortByOptions ): T[]
```

Returns all elements in the given collection, sorted by their result using
the given selector. The selector function is called only once for each
element. Ascending or descending order can be specified.



example
-------

```ts
import { sortBy } from "https://deno.land/std@$STD_VERSION/collections/sort_by.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = [
  { name: "Anna", age: 34 },
  { name: "Kim", age: 42 },
  { name: "John", age: 23 },
];
const sortedByAge = sortBy(people, (it) => it.age);

assertEquals(sortedByAge, [
  { name: "John", age: 23 },
  { name: "Anna", age: 34 },
  { name: "Kim", age: 42 },
]);

const sortedByAgeDesc = sortBy(people, (it) => it.age, { order: "desc" });

assertEquals(sortedByAgeDesc, [
  { name: "Kim", age: 42 },
  { name: "Anna", age: 34 },
  { name: "John", age: 23 },
]);
```



______
/. 🚀 :fun: collections:sortBy 🟩
---------------------------------


```ts
function sortBy<<T>>( array:readonly T[], selector:(el:T) => string, options?:SortByOptions ): T[]
```




______
/. 🚀 :fun: collections:sortBy 🟩
---------------------------------


```ts
function sortBy<<T>>( array:readonly T[], selector:(el:T) => bigint, options?:SortByOptions ): T[]
```




______
/. 🚀 :fun: collections:sortBy 🟩
---------------------------------


```ts
function sortBy<<T>>( array:readonly T[], selector:(el:T) => Date, options?:SortByOptions ): T[]
```




______
/. 🚀 :fun: collections:sortBy 🟩
---------------------------------


```ts
function sortBy<<T>>( array:readonly T[], selector: ((el:T) => number) | ((el:T) => string) | ((el:T) => bigint) | ((el:T) => Date), options?:SortByOptions ): T[]
```




______
/. 🚀 :fun: collections:union 🟩
--------------------------------


```ts
function union<<T>>( ...arrays:Iterable[] ): T[]
```

Returns all distinct elements that appear in any of the given arrays



example
-------

```ts
import { union } from "https://deno.land/std@$STD_VERSION/collections/union.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const soupIngredients = ["Pepper", "Carrots", "Leek"];
const saladIngredients = ["Carrots", "Radicchio", "Pepper"];
const shoppingList = union(soupIngredients, saladIngredients);

assertEquals(shoppingList, ["Pepper", "Carrots", "Leek", "Radicchio"]);
```



______
/. 🚀 :fun: collections:withoutAll 🟩
-------------------------------------


```ts
function withoutAll<<T>>( array:readonly T[], values:readonly T[] ): T[]
```

Returns an array excluding all given values.



example
-------

```ts
import { withoutAll } from "https://deno.land/std@$STD_VERSION/collections/without_all.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const withoutList = withoutAll([2, 1, 2, 3], [1, 2]);

assertEquals(withoutList, [3]);
```



______
/. 🚀 :fun: collections:unzip 🟩
--------------------------------


```ts
function unzip<<T, U>>( pairs:readonly [] ): [T[], U[]]
```

Builds two separate arrays from the given array of 2-tuples, with the first
returned array holding all first tuple elements and the second one holding
all the second elements.

```ts
import { unzip } from "https://deno.land/std@$STD_VERSION/collections/unzip.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const parents = [
  ["Maria", "Jeff"],
  ["Anna", "Kim"],
  ["John", "Leroy"],
] as [string, string][];

const [moms, dads] = unzip(parents);

assertEquals(moms, ["Maria", "Anna", "John"]);
assertEquals(dads, ["Jeff", "Kim", "Leroy"]);
```



______
/. 🚀 :fun: collections:zip 🟩
------------------------------


```ts
function zip<T extends unknown[]>( ...arrays:[K in keyof T]: ReadonlyArray<T[K]> ): T[]
```




______
/. 🚀 :fun: collections:joinToString 🟩
---------------------------------------


```ts
function joinToString<<T>>( array:Iterable<T>, selector:(el:T) => string, object:Readonly ): string
```

Transforms the elements in the given array to strings using the given
selector. Joins the produced strings into one using the given `separator`
and applying the given `prefix` and `suffix` to the whole string afterwards.
If the array could be huge, you can specify a non-negative value of `limit`,
in which case only the first `limit` elements will be appended, followed by
the `truncated` string. Returns the resulting string.



example
-------

```ts
import { joinToString } from "https://deno.land/std@$STD_VERSION/collections/join_to_string.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const users = [
  { name: "Kim" },
  { name: "Anna" },
  { name: "Tim" },
];

const message = joinToString(users, (it) => it.name, {
  suffix: " are winners",
  prefix: "result: ",
  separator: " and ",
  limit: 1,
  truncated: "others",
});

assertEquals(message, "result: Kim and others are winners");
```



______
/. 🚀 :fun: collections:maxWith 🟩
----------------------------------


```ts
function maxWith<<T>>( array:Iterable<T>, comparator:(a:T, b:T) => number ):  T | undefined
```

Returns the first element having the largest value according to the provided
comparator or undefined if there are no elements.

The comparator is expected to work exactly like one passed to `Array.sort`,
which means that `comparator(a, b)` should return a negative number if `a < b`,
a positive number if `a > b` and `0` if `a === b`.



example
-------

```ts
import { maxWith } from "https://deno.land/std@$STD_VERSION/collections/max_with.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = ["Kim", "Anna", "John", "Arthur"];
const largestName = maxWith(people, (a, b) => a.length - b.length);

assertEquals(largestName, "Arthur");
```



______
/. 🚀 :fun: collections:minWith 🟩
----------------------------------


```ts
function minWith<<T>>( array:Iterable<T>, comparator:(a:T, b:T) => number ):  T | undefined
```

Returns the first element having the smallest value according to the provided
comparator or undefined if there are no elements



example
-------

```ts
import { minWith } from "https://deno.land/std@$STD_VERSION/collections/min_with.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const people = ["Kim", "Anna", "John"];
const smallestName = minWith(people, (a, b) => a.length - b.length);

assertEquals(smallestName, "Kim");
```



______
/. 🚀 :fun: collections:includesValue 🟩
----------------------------------------


```ts
function includesValue<<T>>( record:Readonly<Record<string, T>>, value:T ): boolean
```

If the given value is part of the given object it returns true, otherwise it
returns false. Doesn't work with non-primitive values: includesValue({x: {}},
{}) returns false.



example
-------

```ts
import { includesValue } from "https://deno.land/std@$STD_VERSION/collections/includes_value.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const input = {
  first: 33,
  second: 34,
};

assertEquals(includesValue(input, 34), true);
```



______
/. 🚀 :fun: collections:takeLastWhile 🟩
----------------------------------------


```ts
function takeLastWhile<<T>>( array:readonly T[], predicate:(el:T) => boolean ): T[]
```

Returns all elements in the given array after the last element that does not
match the given predicate.



example
-------

```ts
import { takeLastWhile } from "https://deno.land/std@$STD_VERSION/collections/take_last_while.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const arr = [1, 2, 3, 4, 5, 6];

assertEquals(
  takeLastWhile(arr, (i) => i > 4),
  [5, 6],
);
```



______
/. 🚀 :fun: collections:takeWhile 🟩
------------------------------------


```ts
function takeWhile<<T>>( array:readonly T[], predicate:(el:T) => boolean ): T[]
```

Returns all elements in the given collection until the first element that
does not match the given predicate.



example
-------

```ts
import { takeWhile } from "https://deno.land/std@$STD_VERSION/collections/take_while.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const arr = [1, 2, 3, 4, 5, 6];

assertEquals(
  takeWhile(arr, (i) => i !== 4),
  [1, 2, 3],
);
```



______
/. 🚀 :fun: collections:firstNotNullishOf 🟩
--------------------------------------------


```ts
function firstNotNullishOf<<T, O>>( array:Iterable<T>, selector:(item:T) =>  O | undefined | null ):  NonNullable<O> | undefined
```

Applies the given selector to elements in the given array until a value is
produced that is neither `null` nor `undefined` and returns that value.
Returns `undefined` if no such value is produced.



example
-------

```ts
import { firstNotNullishOf } from "https://deno.land/std@$STD_VERSION/collections/first_not_nullish_of.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const tables = [
  { number: 11, order: null },
  { number: 12, order: "Soup" },
  { number: 13, order: "Salad" },
];
const nextOrder = firstNotNullishOf(tables, (it) => it.order);

assertEquals(nextOrder, "Soup");
```



______
/. 🚀 :fun: collections:dropLastWhile 🟩
----------------------------------------


```ts
function dropLastWhile<<T>>( array:readonly T[], predicate:(el:T) => boolean ): T[]
```

Returns a new array that drops all elements in the given collection until the
last element that does not match the given predicate



example
-------

```ts
import { dropLastWhile } from "https://deno.land/std@$STD_VERSION/collections/drop_last_while.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [22, 30, 44];

const notFortyFour = dropLastWhile(numbers, (i) => i !== 44);

assertEquals(
  notFortyFour,
  [22, 30],
);
```



______
/. 🚀 :fun: collections:reduceGroups 🟩
---------------------------------------


```ts
function reduceGroups<<T, A>>( record:Readonly<Record<string, ReadonlyArray<T>>>, reducer:(accumulator:A, current:T) => A, initialValue:A ): Record<string, A>
```

Applies the given reducer to each group in the given grouping, returning the
results together with the respective group keys.

TODO:JsDocTagNamed: reduceGroups {"kind":"template","name":"T","doc":"input type of an item in a group in the given grouping."}
TODO:JsDocTagNamed: reduceGroups {"kind":"template","name":"A","doc":"type of the accumulator value, which will match the returned record's values."}


example
-------

```ts
import { reduceGroups } from "https://deno.land/std@$STD_VERSION/collections/reduce_groups.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const votes = {
  "Woody": [2, 3, 1, 4],
  "Buzz": [5, 9],
};

const totalVotes = reduceGroups(votes, (sum, it) => sum + it, 0);

assertEquals(totalVotes, {
  "Woody": 10,
  "Buzz": 14,
});
```



______
/. 🚀 :fun: collections:sample 🟩
---------------------------------


```ts
function sample<<T>>( array:readonly T[] ):  T | undefined
```

Returns a random element from the given array



example
-------

```ts
import { sample } from "https://deno.land/std@$STD_VERSION/collections/sample.ts";
import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts";

const numbers = [1, 2, 3, 4];
const random = sample(numbers);

assert(numbers.includes(random as number));
```



______
/. 🚀 :fun: collections:runningReduce 🟩
----------------------------------------


```ts
function runningReduce<<T, O>>( array:readonly T[], reducer:(accumulator:O, current:T, currentIndex:number) => O, initialValue:O ): O[]
```

Calls the given reducer on each element of the given collection, passing its
result as the accumulator to the next respective call, starting with the
given initialValue. Returns all intermediate accumulator results.



example
-------

```ts
import { runningReduce } from "https://deno.land/std@$STD_VERSION/collections/running_reduce.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

const numbers = [1, 2, 3, 4, 5];
const sumSteps = runningReduce(numbers, (sum, current) => sum + current, 0);

assertEquals(sumSteps, [1, 3, 6, 10, 15]);
```



______
/. 🚀 :fun: collections:ascend 🟩
---------------------------------


```ts
function ascend<<T>>( a:T, b:T )
```

Compares its two arguments for ascending order using JavaScript's built in comparison operators.



______
/. 🚀 :fun: collections:descend 🟩
----------------------------------


```ts
function descend<<T>>( a:T, b:T )
```

Compares its two arguments for descending order using JavaScript's built in comparison operators.


______
/. 🚀 :alias: MergingStrategy
-----------------------------

    type MergingStrategy =  "replace" | "merge"

Merging strategy


______
/. 🚀 :alias: DeepMergeOptions
------------------------------

    type DeepMergeOptions = { arrays?: MergingStrategy; maps?: MergingStrategy; sets?: MergingStrategy }

Deep merge options


______
/. 🚀 :alias: DeepMerge
-----------------------

    type DeepMerge = ()=>

Merge deeply two objects


______
/. 🚀 :alias: Order
-------------------

    type Order =  "asc" | "desc"

Order


______
/. 🚀 :alias: SortByOptions
---------------------------

    type SortByOptions = { order: Order }

Options for sortBy


______
/. 🚀 :alias: JoinToStringOptions
---------------------------------

    type JoinToStringOptions = { separator?: string; prefix?: string; suffix?: string; limit?: number; truncated?: string }

Options for joinToString


______
/. 🚀 :lib: msgpack [Unstable] https://deno.land/std@0.207.0/msgpack
====================================================================


______
/. 🚀 :fun: msgpack:decode 🟩
-----------------------------


```ts
function decode( uint8:Uint8Array )
```

Decode a value from the MessagePack binary format.



example
-------

```ts
import { decode } from "https://deno.land/std@$STD_VERSION/msgpack/decode.ts";

const encoded = Uint8Array.of(1, 2, 3)

console.log(decode(encoded))
```



______
/. 🚀 :fun: msgpack:encode 🟩
-----------------------------


```ts
function encode( object:ValueType )
```

Encode a value to MessagePack binary format.



example
-------

```ts
import { encode } from "https://deno.land/std@$STD_VERSION/msgpack/encode.ts";

const obj = {
  str: "deno",
  arr: [1, 2, 3],
  map: {
    foo: "bar"
  }
}

console.log(encode(obj))
```


______
/. 🚀 :alias: ValueType
-----------------------

    type ValueType =  number | bigint | string | boolean | null | Uint8Array | ValueType[] | ValueMap



______
/. 🚀 :lib: console [Unstable] https://deno.land/std@0.207.0/console
====================================================================

Functions for console-related tasks such as TTY text layout




______
/. 🚀 :fun: console:unicodeWidth 🟩
-----------------------------------


```ts
function unicodeWidth( str:string )
```

Get the width of a string's constituent characters in columns in TTY-like
environments.

Combine with `stripColor` from `fmt/colors.ts` to get the expected physical
width of a string in the console.



example
-------

```ts
import { unicodeWidth } from "https://deno.land/std@$STD_VERSION/console/unicode_width.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";
import { stripColor } from "https://deno.land/std@$STD_VERSION/fmt/colors.ts";

assertEquals(unicodeWidth("hello world"), 11);
assertEquals(unicodeWidth("天地玄黃宇宙洪荒"), 16);
assertEquals(unicodeWidth("ｆｕｌｌｗｉｄｔｈ"), 18);
assertEquals(unicodeWidth(stripColor("\x1b[36mголубой\x1b[39m")), 7);
assertEquals(unicodeWidth(stripColor("\x1b[31m紅色\x1b[39m")), 4);
assertEquals(unicodeWidth(stripColor("\x1B]8;;https://deno.land\x07🦕\x1B]8;;\x07")), 2);
```


______
/. 🚀 :lib: path [Unstable] https://deno.land/std@0.207.0/path
==============================================================

Utilities for working with OS-specific file paths.

Functions from this module will automatically switch to support the path style
of the current OS, either `windows` for Microsoft Windows, or `posix` for
every other operating system, eg. Linux, MacOS, BSD etc.

To use functions for a specific path style regardless of the current OS
import the modules from the platform sub directory instead.

Example, for `posix`:

```ts
import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/posix/from_file_url.ts";
const p = fromFileUrl("file:///home/foo");
console.log(p); // "/home/foo"
```

or, for `windows`:

```ts
import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/windows/from_file_url.ts";
const p = fromFileUrl("file:///home/foo");
console.log(p); // "\\home\\foo"
```

This module is browser compatible.



    import { _posix } from "https://deno.land/std@0.207.0/path/posix/mod.ts"


    import { _windows } from "https://deno.land/std@0.207.0/path/windows/mod.ts"


    import { isWindows } from "https://deno.land/std@0.207.0/path/_os.ts"

Utilities for working with OS-specific file paths.

Functions from this module will automatically switch to support the path style
of the current OS, either `windows` for Microsoft Windows, or `posix` for
every other operating system, eg. Linux, MacOS, BSD etc.

To use functions for a specific path style regardless of the current OS
import the modules from the platform sub directory instead.

Example, for `posix`:

```ts
import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/posix/from_file_url.ts";
const p = fromFileUrl("file:///home/foo");
console.log(p); // "/home/foo"
```

or, for `windows`:

```ts
import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/windows/from_file_url.ts";
const p = fromFileUrl("file:///home/foo");
console.log(p); // "\\home\\foo"
```

This module is browser compatible.



______
/. 🚀 :fun: path:basename 🟩
----------------------------


```ts
function basename( path:string, suffix ): string
```

Return the last portion of a `path`.
Trailing directory separators are ignored, and optional suffix is removed.


*   **param**: `path` 

    - path to extract the name from.

*   **param**: `suffix` 

    - suffix to remove from extracted name.



______
/. 🚀 :fun: path:dirname 🟩
---------------------------


```ts
function dirname( path:string ): string
```

Return the directory path of a `path`.

*   **param**: `path` 

    - path to extract the directory from.



______
/. 🚀 :fun: path:extname 🟩
---------------------------


```ts
function extname( path:string ): string
```

Return the extension of the `path` with leading period.

*   **param**: `path` 

    with extension

*   **return**: extension (ex. for `file.ts` returns `.ts`)


______
/. 🚀 :fun: path:format 🟩
--------------------------


```ts
function format( pathObject:FormatInputPathObject ): string
```

Generate a path from `FormatInputPathObject` object.

*   **param**: `pathObject` 

    with path



______
/. 🚀 :fun: path:fromFileUrl 🟩
-------------------------------


```ts
function fromFileUrl( url: string | URL ): string
```

Converts a file URL to a path string.

```ts
import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/from_file_url.ts";

// posix
fromFileUrl("file:///home/foo"); // "/home/foo"

// win32
fromFileUrl("file:///home/foo"); // "\\home\\foo"
fromFileUrl("file:///C:/Users/foo"); // "C:\\Users\\foo"
fromFileUrl("file://localhost/home/foo"); // "\\\\localhost\\home\\foo"
```

*   **param**: `url` 

    of a file URL



______
/. 🚀 :fun: path:isAbsolute 🟩
------------------------------


```ts
function isAbsolute( path:string ): boolean
```

Verifies whether provided path is absolute

*   **param**: `path` 

    to be verified as absolute



______
/. 🚀 :fun: path:join 🟩
------------------------


```ts
function join( ...paths:string[] )
```

Join all given a sequence of `paths`,then normalizes the resulting path.

*   **param**: `paths` 

    to be joined and normalized



______
/. 🚀 :fun: path:normalize 🟩
-----------------------------


```ts
function normalize( path:string ): string
```

Normalize the `path`, resolving `'..'` and `'.'` segments.
Note that resolving these segments does not necessarily mean that all will be eliminated.
A `'..'` at the top-level will be preserved, and an empty path is canonically `'.'`.

*   **param**: `path` 

    to be normalized



______
/. 🚀 :fun: path:parse 🟩
-------------------------


```ts
function parse( path:string ): ParsedPath
```

Return a `ParsedPath` object of the `path`.

*   **param**: `path` 

    to process



______
/. 🚀 :fun: path:relative 🟩
----------------------------


```ts
function relative( from:string, to:string ): string
```

Return the relative path from `from` to `to` based on current working directory.

An example in windws, for instance:
 from = 'C:\\orandea\\test\\aaa'
 to = 'C:\\orandea\\impl\\bbb'
The output of the function should be: '..\\..\\impl\\bbb'


*   **param**: `from` 

    path in current working directory

*   **param**: `to` 

    path in current working directory



______
/. 🚀 :fun: path:resolve 🟩
---------------------------


```ts
function resolve( ...pathSegments:string[] ): string
```

Resolves path segments into a `path`

*   **param**: `pathSegments` 

    to process to path



______
/. 🚀 :fun: path:toFileUrl 🟩
-----------------------------


```ts
function toFileUrl( path:string ): URL
```

Converts a path string to a file URL.

```ts
import { toFileUrl } from "https://deno.land/std@$STD_VERSION/path/to_file_url.ts";

// posix
toFileUrl("/home/foo"); // new URL("file:///home/foo")

// win32
toFileUrl("\\home\\foo"); // new URL("file:///home/foo")
toFileUrl("C:\\Users\\foo"); // new URL("file:///C:/Users/foo")
toFileUrl("\\\\127.0.0.1\\home\\foo"); // new URL("file://127.0.0.1/home/foo")
```

*   **param**: `path` 

    to convert to file URL



______
/. 🚀 :fun: path:toNamespacedPath 🟩
------------------------------------


```ts
function toNamespacedPath( path:string ): string
```

Resolves path to a namespace path

*   **param**: `path` 

    to resolve to namespace



______
/. 🚀 :fun: path:common 🟩
--------------------------


```ts
function common( paths:string[], sep ): string
```

Determines the common path from a set of paths, using an optional separator,
which defaults to the OS default separator.

```ts
      import { common } from "https://deno.land/std@$STD_VERSION/path/mod.ts";
      const p = common([
        "./deno/std/path/mod.ts",
        "./deno/std/fs/mod.ts",
      ]);
      console.log(p); // "./deno/std/"
```



______
/. 🚀 :fun: path:globToRegExp 🟩
--------------------------------


```ts
function globToRegExp( glob:string, options:GlobToRegExpOptions ): RegExp
```

Convert a glob string to a regular expression.

Tries to match bash glob expansion as closely as possible.

Basic glob syntax:
- `*` - Matches everything without leaving the path segment.
- `?` - Matches any single character.
- `{foo,bar}` - Matches `foo` or `bar`.
- `[abcd]` - Matches `a`, `b`, `c` or `d`.
- `[a-d]` - Matches `a`, `b`, `c` or `d`.
- `[!abcd]` - Matches any single character besides `a`, `b`, `c` or `d`.
- `[[:<class>:]]` - Matches any character belonging to `<class>`.
    - `[[:alnum:]]` - Matches any digit or letter.
    - `[[:digit:]abc]` - Matches any digit, `a`, `b` or `c`.
    - See https://facelessuser.github.io/wcmatch/glob/#posix-character-classes
      for a complete list of supported character classes.
- `\` - Escapes the next character for an `os` other than `"windows"`.
- \` - Escapes the next character for `os` set to `"windows"`.
- `/` - Path separator.
- `\` - Additional path separator only for `os` set to `"windows"`.

Extended syntax:
- Requires `{ extended: true }`.
- `?(foo|bar)` - Matches 0 or 1 instance of `{foo,bar}`.
- `@(foo|bar)` - Matches 1 instance of `{foo,bar}`. They behave the same.
- `*(foo|bar)` - Matches _n_ instances of `{foo,bar}`.
- `+(foo|bar)` - Matches _n > 0_ instances of `{foo,bar}`.
- `!(foo|bar)` - Matches anything other than `{foo,bar}`.
- See https://www.linuxjournal.com/content/bash-extended-globbing.

Globstar syntax:
- Requires `{ globstar: true }`.
- `**` - Matches any number of any path segments.
    - Must comprise its entire path segment in the provided glob.
- See https://www.linuxjournal.com/content/globstar-new-bash-globbing-option.

Note the following properties:
- The generated `RegExp` is anchored at both start and end.
- Repeating and trailing separators are tolerated. Trailing separators in the
  provided glob have no meaning and are discarded.
- Absolute globs will only match absolute paths, etc.
- Empty globs will match nothing.
- Any special glob syntax must be contained to one path segment. For example,
  `?(foo|bar/baz)` is invalid. The separator will take precedence and the
  first segment ends with an unclosed group.
- If a path segment ends with unclosed groups or a dangling escape prefix, a
  parse error has occurred. Every character for that segment is taken
  literally in this event.

Limitations:
- A negative group like `!(foo|bar)` will wrongly be converted to a negative
  look-ahead followed by a wildcard. This means that `!(foo).js` will wrongly
  fail to match `foobar.js`, even though `foobar` is not `foo`. Effectively,
  `!(foo|bar)` is treated like `!(@(foo|bar)*)`. This will work correctly if
  the group occurs not nested at the end of the segment.



______
/. 🚀 :fun: path:isGlob 🟩
--------------------------


```ts
function isGlob( str:string ): boolean
```

Test whether the given string is a glob



______
/. 🚀 :fun: path:joinGlobs 🟩
-----------------------------


```ts
function joinGlobs( globs:string[], options:GlobOptions ): string
```

Like join(), but doesn't collapse "**\/.." when `globstar` is true.



______
/. 🚀 :fun: path:normalizeGlob 🟩
---------------------------------


```ts
function normalizeGlob( glob:string, options:GlobOptions ): string
```

Like normalize(), but doesn't collapse "**\/.." when `globstar` is true.



______
/. 🚀 :interface: ParsedPath
----------------------------


    interface ParsedPath

A parsed path object generated by path.parse() or consumed by path.format().





Properties

*   root : string

    The root of the path such as '/' or 'c:\'
    
*   dir : string

    The full directory path such as '/home/user/dir' or 'c:\path\dir'
    
*   base : string

    The file name including extension (if any) such as 'index.html'
    
*   ext : string

    The file extension (if any) such as '.html'
    
*   name : string

    The file name without extension (if any) such as 'index'
    


______
/. 🚀 :alias: FormatInputPathObject
-----------------------------------

    type FormatInputPathObject = Partial<ParsedPath>



______
/. 🚀 :alias: GlobToRegExpOptions
---------------------------------

    type GlobToRegExpOptions = GlobOptions & { os?: OSType }



______
/. 🚀 :variable: SEP
--------------------

    const SEP



______
/. 🚀 :variable: SEP_PATTERN
----------------------------

    const SEP_PATTERN



______
/. 🚀 :variable: win32
----------------------

    const win32



deprecated
----------

(will be removed after 1.0.0) Import from {@link https://deno.land/std/path/windows/mod.ts} instead.


______
/. 🚀 :variable: posix
----------------------

    const posix



deprecated
----------

(will be removed after 1.0.0) Import from {@link https://deno.land/std/posix/mod.ts} instead.


______
/. 🚀 :variable: sep
--------------------

    const sep



______
/. 🚀 :variable: delimiter
--------------------------

    const delimiter



______
/. 🚀 :lib: csv [Stable] https://deno.land/std@0.207.0/csv
==========================================================

Reads and writes comma-separated values (CSV) files.

There are many kinds of CSV files; this module supports the format described
in [RFC 4180](https://www.rfc-editor.org/rfc/rfc4180.html).

A csv file contains zero or more records of one or more fields per record.
Each record is separated by the newline character. The final record may
optionally be followed by a newline character.

```csv
field1,field2,field3
```

White space is considered part of a field.

Carriage returns before newline characters are silently removed.

Blank lines are ignored. A line with only whitespace characters (excluding
the ending newline character) is not considered a blank line.

Fields which start and stop with the quote character " are called
quoted-fields. The beginning and ending quote are not part of the field.

The source:

```csv
normal string,"quoted-field"
```

results in the fields

```ts
[`normal string`, `quoted-field`]
```

Within a quoted-field a quote character followed by a second quote character is considered a single quote.

```csv
"the ""word"" is true","a ""quoted-field"""
```

results in

[`the "word" is true`, `a "quoted-field"`]

Newlines and commas may be included in a quoted-field

```csv
"Multi-line
field","comma is ,"
```

results in

```ts
[`Multi-line
field`, `comma is ,`]
```




______
/. 🚀 :class: csv:StringifyError 🟢
-----------------------------------


```ts
class StringifyError extends Error { ... }
```



*   readonly name: string

______
/. 🚀 :class: csv:ParseError 🟢
-------------------------------


```ts
class ParseError extends SyntaxError { ... }
```

A ParseError is returned for parsing errors.
Line numbers are 1-indexed and columns are 0-indexed.



______
/. 🚀 ParseError constructors
=============================



______
/. 🚀 :ctor: ParseError 🟥
--------------------------


```ts
new ParseError(start:number, line:number, column: number | null, message:string)
```



*   startLine: number

    Line where the record starts
    
*   line: number

    Line where the error occurred
    
*   column:  number | null

    Column (rune index) where the error occurred
    

______
/. 🚀 :class: csv:CsvParseStream 🟢
-----------------------------------


```ts
class CsvParseStreamT :  CsvParseStreamOptions | undefined = undefined implements TransformStream<string, RowType<T>> { ... }
```

Read data from a CSV-encoded stream or file.
Provides an auto/custom mapper for columns.

A `CsvParseStream` expects input conforming to
[RFC 4180](https://rfc-editor.org/rfc/rfc4180.html).



example
-------

```ts
import { CsvParseStream } from "https://deno.land/std@$STD_VERSION/csv/csv_parse_stream.ts";
const res = await fetch("https://example.com/data.csv");
const parts = res.body!
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new CsvParseStream());
```



______
/. 🚀 CsvParseStream constructors
=================================



______
/. 🚀 :ctor: CsvParseStream 🟥
------------------------------


```ts
new CsvParseStream(options?:T)
```




______
/. 🚀 CsvParseStream methods
============================



______
/. 🚀 :getter: CsvParseStream.readable 🟦
-----------------------------------------


```ts
function readable(  )
```




______
/. 🚀 :getter: CsvParseStream.writable 🟦
-----------------------------------------


```ts
function writable(  ): WritableStream<string>
```




______
/. 🚀 :class: csv:CsvStringifyStream 🟢
---------------------------------------


```ts
class CsvStringifyStreamTOptions : CsvStringifyStreamOptions extends TransformStream<()=>, string> { ... }
```

Convert each chunk to a CSV record.



example
-------

```ts
import { CsvStringifyStream } from "https://deno.land/std@$STD_VERSION/csv/csv_stringify_stream.ts";

const file = await Deno.open("data.csv", { create: true, write: true });
const readable = ReadableStream.from([
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
]);

await readable
  .pipeThrough(new CsvStringifyStream({ columns: ["id", "name"] }))
  .pipeThrough(new TextEncoderStream())
  .pipeTo(file.writable);
````



______
/. 🚀 CsvStringifyStream constructors
=====================================



______
/. 🚀 :ctor: CsvStringifyStream 🟥
----------------------------------


```ts
new CsvStringifyStream(options?:TOptions)
```




______
/. 🚀 :fun: csv:stringify 🟩
----------------------------


```ts
function stringify( data:DataItem[], object:StringifyOptions ): string
```

Write data using CSV encoding.


*   **param**: `data` 

    The source data to stringify. It's an array of items which are
    plain objects or arrays.
    
    `DataItem: Record<string, unknown> | unknown[]`
    
    ```ts
    const data = [
    {
    name: "Deno",
    repo: { org: "denoland", name: "deno" },
    runsOn: ["Rust", "TypeScript"],
    },
    ];
    ```
    


example
-------

```ts
import {
  Column,
  stringify,
} from "https://deno.land/std@$STD_VERSION/csv/stringify.ts";

type Character = {
  age: number;
  name: {
    first: string;
    last: string;
  };
};

const data: Character[] = [
  {
    age: 70,
    name: {
      first: "Rick",
      last: "Sanchez",
    },
  },
  {
    age: 14,
    name: {
      first: "Morty",
      last: "Smith",
    },
  },
];

let columns: Column[] = [
  ["name", "first"],
  "age",
];

console.log(stringify(data, { columns }));
// first,age
// Rick,70
// Morty,14
```


*   **param**: `options` 

    Output formatting options



______
/. 🚀 :fun: csv:parse 🟩
------------------------


```ts
function parse( input:string, opt?:undefined ): []
```

Csv parse helper to manipulate data.
Provides an auto/custom mapper for columns.



example
-------

```ts
import { parse } from "https://deno.land/std@$STD_VERSION/csv/parse.ts";
const string = "a,b,c\nd,e,f";

console.log(
  await parse(string, {
    skipFirstRow: false,
  }),
);
// output:
// [["a", "b", "c"], ["d", "e", "f"]]
```


*   **param**: `input` 

    Input to parse.

*   **param**: `opt` 

    options of the parser.

*   **return**: If you don't provide `opt.skipFirstRow` and `opt.columns`, it returns `string[][]`.
If you provide `opt.skipFirstRow` or `opt.columns`, it returns `Record<string, unknown>[]`.


______
/. 🚀 :fun: csv:parse 🟩
------------------------


```ts
function parse<T extends ParseOptions>( input:string, opt:T ): ParseResult<ParseOptions, T>
```




______
/. 🚀 :fun: csv:parse 🟩
------------------------


```ts
function parse<T extends ParseOptions>( input:string, opt:T ): ParseResult<ParseOptions, T>
```




______
/. 🚀 :interface: ReadOptions
-----------------------------


    interface ReadOptions






Properties

*   separator : string

    Character which separates values.
    
    **default**: ","
    
*   comment : string

    Character to start a comment.
    
    Lines beginning with the comment character without preceding whitespace
    are ignored. With leading whitespace the comment character becomes part of
    the field, even you provide `trimLeadingSpace: true`.
    
    **default**: "#"
    
*   trimLeadingSpace : boolean

    Flag to trim the leading space of the value.
    
    This is done even if the field delimiter, `separator`, is white space.
    
    **default**: false
    
*   lazyQuotes : boolean

    Allow unquoted quote in a quoted field or non-double-quoted quotes in
    quoted field.
    
    **default**: false
    
*   fieldsPerRecord : number

    Enabling checking number of expected fields for each row.
    
    If positive, each record is required to have the given number of fields.
    If === 0, it will be set to the number of fields in the first row, so that
    future rows must have the same field count.
    If negative, no check is made and records may have a variable number of
    fields.
    
    If the wrong number of fields is in a row, a `ParseError` is thrown.
    



______
/. 🚀 :interface: ParseOptions
------------------------------


    interface ParseOptions extends ReadOptions






Properties

*   skipFirstRow : boolean

    If you provide `skipFirstRow: true` and `columns`, the first line will be
    skipped.
    If you provide `skipFirstRow: true` but not `columns`, the first line will
    be skipped and used as header definitions.
    
*   columns : readonly string[]

    List of names used for header definition.
    



______
/. 🚀 :interface: CsvParseStreamOptions
---------------------------------------


    interface CsvParseStreamOptions extends ReadOptions






Properties

*   skipFirstRow : boolean

    If you provide `skipFirstRow: true` and `columns`, the first line will be
    skipped.
    If you provide `skipFirstRow: true` but not `columns`, the first line will
    be skipped and used as header definitions.
    
*   columns : readonly string[]

    List of names used for header definition.
    



______
/. 🚀 :interface: CsvStringifyStreamOptions
-------------------------------------------


    interface CsvStringifyStreamOptions






Properties

*   readonly separator : string

    Delimiter used to separate values.
    
    **default**: ","
    
*   readonly columns : Array<string>

    A list of columns to be included in the output.
    
    If you want to stream objects, this option is required.
    


______
/. 🚀 :alias: ColumnDetails
---------------------------

    type ColumnDetails = { header?: string; prop:  PropertyAccessor | PropertyAccessor[] }


*   **param**: `header` 

    Explicit column header name. If omitted,
    the (final) property accessor is used for this value.
    

*   **param**: `prop` 

    Property accessor(s) used to access the value on the object


______
/. 🚀 :alias: Column
--------------------

    type Column =  ColumnDetails | PropertyAccessor | PropertyAccessor[]

The most essential aspect of a column is accessing the property holding the
data for that column on each object in the data array. If that member is at
the top level, `Column` can simply be a property accessor, which is either a
`string` (if it's a plain object) or a `number` (if it's an array).

```ts
const columns = [
  "name",
];
```

Each property accessor will be used as the header for the column:

| name |
| :--: |
| Deno |

- If the required data is not at the top level (it's nested in other
  objects/arrays), then a simple property accessor won't work, so an array of
  them will be required.

  ```ts
  const columns = [
    ["repo", "name"],
    ["repo", "org"],
  ];
  ```

  When using arrays of property accessors, the header names inherit the value
  of the last accessor in each array:

  | name |   org    |
  | :--: | :------: |
  | deno | denoland |

 - If a different column header is desired, then a `ColumnDetails` object type
    can be used for each column:

  - **`header?: string`** is the optional value to use for the column header
    name

  - **`prop: PropertyAccessor | PropertyAccessor[]`** is the property accessor
    (`string` or `number`) or array of property accessors used to access the
    data on each object

  ```ts
  const columns = [
    "name",
    {
      prop: ["runsOn", 0],
      header: "language 1",
    },
    {
      prop: ["runsOn", 1],
      header: "language 2",
    },
  ];
  ```

  | name | language 1 | language 2 |
  | :--: | :--------: | :--------: |
  | Deno |    Rust    | TypeScript |


______
/. 🚀 :alias: DataItem
----------------------

    type DataItem =  ObjectWithStringPropertyKeys | unknown[]

An object (plain or array)


______
/. 🚀 :alias: StringifyOptions
------------------------------

    type StringifyOptions = { headers?: boolean; separator?: string; columns?: Column[]; bom?: boolean }



______
/. 🚀 :lib: permissions [Deprecated] https://deno.land/std@0.207.0/permissions
==============================================================================

Helpers for interacting with Deno's permissions system.


deprecated
----------

(will be removed in 1.0.0) Use the [Deno Permissions API]{@link https://deno.land/api?s=Deno.Permissions} directly instead.



______
/. 🚀 :fun: permissions:grant 🟩
--------------------------------


```ts
function grant( ...descriptors:Deno.PermissionDescriptor[] ): Promise< void | Deno.PermissionDescriptor[]>
```

Attempts to grant a set of permissions, resolving with the descriptors of
the permissions that are granted.

```ts
     import { grant } from "https://deno.land/std@$STD_VERSION/permissions/mod.ts";
     const perms = await grant({ name: "net" }, { name: "read" });
     if (perms && perms.length === 2) {
       // do something cool that connects to the net and reads files
     } else {
       // notify user of missing permissions
     }
```

If one of the permissions requires a prompt, the function will attempt to
prompt for it.  The function resolves with all of the granted permissions.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Permissions API]{@link https://deno.land/api?s=Deno.Permissions} directly instead.



______
/. 🚀 :fun: permissions:grant 🟩
--------------------------------


```ts
function grant( descriptors:Deno.PermissionDescriptor[] ): Promise< void | Deno.PermissionDescriptor[]>
```

Attempts to grant a set of permissions, resolving with the descriptors of
the permissions that are granted.

```ts
     import { grant } from "https://deno.land/std@$STD_VERSION/permissions/mod.ts";
     const perms = await grant([{ name: "net" }, { name: "read" }]);
     if (perms && perms.length === 2) {
       // do something cool that connects to the net and reads files
     } else {
       // notify user of missing permissions
     }
```

If one of the permissions requires a prompt, the function will attempt to
prompt for it.  The function resolves with all of the granted permissions.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Permissions API]{@link https://deno.land/api?s=Deno.Permissions} directly instead.



______
/. 🚀 :fun: permissions:grant 🟩
--------------------------------


```ts
function grant( descriptor: Deno.PermissionDescriptor[] | Deno.PermissionDescriptor, ...descriptors:Deno.PermissionDescriptor[] ): Promise< void | Deno.PermissionDescriptor[]>
```




______
/. 🚀 :fun: permissions:grantOrThrow 🟩
---------------------------------------


```ts
function grantOrThrow( ...descriptors:Deno.PermissionDescriptor[] ): Promise<void>
```

Attempts to grant a set of permissions or rejects.

```ts
     import { grantOrThrow } from "https://deno.land/std@$STD_VERSION/permissions/mod.ts";
     await grantOrThrow({ name: "env" }, { name: "net" });
```

If the permission can be prompted for, the function will attempt to prompt.
If any of the permissions are denied, the function will reject for the first
permission that is denied.  If all permissions are granted, the function
will resolve.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Permissions API]{@link https://deno.land/api?s=Deno.Permissions} directly instead.



______
/. 🚀 :fun: permissions:grantOrThrow 🟩
---------------------------------------


```ts
function grantOrThrow( descriptors:Deno.PermissionDescriptor[] ): Promise<void>
```

Attempts to grant a set of permissions or rejects.

```ts
     import { grantOrThrow } from "https://deno.land/std@$STD_VERSION/permissions/mod.ts";
     await grantOrThrow([{ name: "env" }, { name: "net" }]);
```

If the permission can be prompted for, the function will attempt to prompt.
If any of the permissions are denied, the function will reject mentioning the
the denied permissions.  If all permissions are granted, the function will
resolve.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Permissions API]{@link https://deno.land/api?s=Deno.Permissions} directly instead.



______
/. 🚀 :fun: permissions:grantOrThrow 🟩
---------------------------------------


```ts
function grantOrThrow( descriptor: Deno.PermissionDescriptor[] | Deno.PermissionDescriptor, ...descriptors:Deno.PermissionDescriptor[] ): Promise<void>
```



______
/. 🚀 :lib: datetime [Unstable] https://deno.land/std@0.207.0/datetime
======================================================================

Utilities for dealing with {@linkcode Date} objects.

The following symbols from
[unicode LDML](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)
are supported:

- `yyyy` - numeric year.
- `yy` - 2-digit year.
- `M` - numeric month.
- `MM` - 2-digit month.
- `d` - numeric day.
- `dd` - 2-digit day.

- `H` - numeric hour (0-23 hours).
- `HH` - 2-digit hour (00-23 hours).
- `h` - numeric hour (1-12 hours).
- `hh` - 2-digit hour (01-12 hours).
- `m` - numeric minute.
- `mm` - 2-digit minute.
- `s` - numeric second.
- `ss` - 2-digit second.
- `S` - 1-digit fractionalSecond.
- `SS` - 2-digit fractionalSecond.
- `SSS` - 3-digit fractionalSecond.

- `a` - dayPeriod, either `AM` or `PM`.

- `'foo'` - quoted literal.
- `./-` - unquoted literal.

This module is browser compatible.




______
/. 🚀 :fun: datetime:dayOfYear 🟩
---------------------------------


```ts
function dayOfYear( date:Date ): number
```

Returns the number of the day in the year in the local time zone.



example
-------

```ts
import { dayOfYear } from "https://deno.land/std@$STD_VERSION/datetime/mod.ts";

dayOfYear(new Date("2019-03-11T03:24:00")); // output: 70
```


*   **return**: Number of the day in the year in the local time zone


______
/. 🚀 :fun: datetime:dayOfYearUtc 🟩
------------------------------------


```ts
function dayOfYearUtc( date:Date ): number
```

Returns the number of the day in the year in UTC time.



example
-------

```ts
import { dayOfYearUtc } from "https://deno.land/std@$STD_VERSION/datetime/mod.ts";

dayOfYearUtc(new Date("2019-03-11T03:24:00.000Z")) // output 70
```


*   **return**: Number of the day in the year in UTC time


______
/. 🚀 :fun: datetime:difference 🟩
----------------------------------


```ts
function difference( from:Date, to:Date, options?:DifferenceOptions ): DifferenceFormat
```

Returns the difference of the 2 given dates in the given units. If the units
are omitted, it returns the difference in the all available units.



example
-------

```ts
import { difference } from "https://deno.land/std@$STD_VERSION/datetime/difference.ts";

const date0 = new Date("2018-05-14");
const date1 = new Date("2020-05-13");

difference(date0, date1, { units: ["days", "months", "years"] });
// => returns { days: 730, months: 23, years: 1 }

difference(date0, date1);
// => returns {
//   milliseconds: 63072000000,
//   seconds: 63072000,
//   minutes: 1051200,
//   hours: 17520,
//   days: 730,
//   weeks: 104,
//   months: 23,
//   quarters: 7,
//   years: 1
// }
```


*   **param**: `from` 

    Year to calculate difference

*   **param**: `to` 

    Year to calculate difference with

*   **param**: `options` 

    Options for determining how to respond



______
/. 🚀 :fun: datetime:format 🟩
------------------------------


```ts
function format( date:Date, formatString:string ): string
```

Takes an input `date` and a `formatString` to format to a `string`.



example
-------

```ts
import { format } from "https://deno.land/std@$STD_VERSION/datetime/format.ts";

format(new Date(2019, 0, 20), "dd-MM-yyyy"); // output : "20-01-2019"
format(new Date(2019, 0, 20), "yyyy-MM-dd"); // output : "2019-01-20"
format(new Date(2019, 0, 20), "dd.MM.yyyy"); // output : "20.01.2019"
format(new Date(2019, 0, 20, 16, 34), "MM-dd-yyyy HH:mm"); // output : "01-20-2019 16:34"
format(new Date(2019, 0, 20, 16, 34), "MM-dd-yyyy hh:mm a"); // output : "01-20-2019 04:34 PM"
format(new Date(2019, 0, 20, 16, 34), "HH:mm MM-dd-yyyy"); // output : "16:34 01-20-2019"
format(new Date(2019, 0, 20, 16, 34, 23, 123), "MM-dd-yyyy HH:mm:ss.SSS"); // output : "01-20-2019 16:34:23.123"
format(new Date(2019, 0, 20), "'today:' yyyy-MM-dd"); // output : "today: 2019-01-20"
```


*   **param**: `date` 

    Date

*   **param**: `formatString` 

    Format string

*   **return**: formatted date string


______
/. 🚀 :fun: datetime:isLeap 🟩
------------------------------


```ts
function isLeap( year: Date | number ): boolean
```

Returns whether the given date or year (in number) is a leap year or not in the local time zone.
based on: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year



example
-------

```ts
import { isLeap } from "https://deno.land/std@$STD_VERSION/datetime/is_leap.ts";

isLeap(new Date("1970-01-02")); // => returns false
isLeap(new Date("1972-01-02")); // => returns true
isLeap(new Date("2000-01-02")); // => returns true
isLeap(new Date("2100-01-02")); // => returns false
isLeap(1972); // => returns true
```

Some dates may return different values depending on your timezone.



example
-------

```ts
import { isLeap } from "https://deno.land/std@$STD_VERSION/datetime/is_leap.ts";

isLeap(new Date("2000-01-01")); // => returns true if the local timezone is GMT+0, returns false if the local timezone is GMT-1
isLeap(2000); // => returns true regardless of the local timezone
```


*   **param**: `year` 

    year in number or Date format



______
/. 🚀 :fun: datetime:isUtcLeap 🟩
---------------------------------


```ts
function isUtcLeap( year: Date | number ): boolean
```

Returns whether the given date or year (in number) is a leap year or not in UTC time. This always returns the same value regardless of the local timezone.
based on: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year



example
-------

```ts
import { isUtcLeap } from "https://deno.land/std@$STD_VERSION/datetime/is_leap.ts";

isUtcLeap(2000); // => returns true regardless of the local timezone
isUtcLeap(new Date("2000-01-01")); // => returns true regardless of the local timezone
isUtcLeap(new Date("January 1, 2000 00:00:00 GMT+00:00")); // => returns true regardless of the local timezone
isUtcLeap(new Date("December 31, 2000 23:59:59 GMT+00:00")); // => returns true regardless of the local timezone
isUtcLeap(new Date("January 1, 2000 00:00:00 GMT+01:00")); // => returns false regardless of the local timezone
isUtcLeap(new Date("December 31, 2000 23:59:59 GMT-01:00")); // => returns false regardless of the local timezone
isUtcLeap(new Date("January 1, 2001 00:00:00 GMT+01:00")); // => returns true regardless of the local timezone
isUtcLeap(new Date("December 31, 1999 23:59:59 GMT-01:00")); // => returns true regardless of the local timezone
```


*   **param**: `year` 

    year in number or Date format



______
/. 🚀 :fun: datetime:parse 🟩
-----------------------------


```ts
function parse( dateString:string, formatString:string ): Date
```

Takes an input `string` and a `formatString` to parse to a `date`.



example
-------

```ts
import { parse } from "https://deno.land/std@$STD_VERSION/datetime/parse.ts";

parse("20-01-2019", "dd-MM-yyyy"); // output : new Date(2019, 0, 20)
parse("2019-01-20", "yyyy-MM-dd"); // output : new Date(2019, 0, 20)
parse("20.01.2019", "dd.MM.yyyy"); // output : new Date(2019, 0, 20)
parse("01-20-2019 16:34", "MM-dd-yyyy HH:mm"); // output : new Date(2019, 0, 20, 16, 34)
parse("01-20-2019 04:34 PM", "MM-dd-yyyy hh:mm a"); // output : new Date(2019, 0, 20, 16, 34)
parse("16:34 01-20-2019", "HH:mm MM-dd-yyyy"); // output : new Date(2019, 0, 20, 16, 34)
parse("01-20-2019 16:34:23.123", "MM-dd-yyyy HH:mm:ss.SSS"); // output : new Date(2019, 0, 20, 16, 34, 23, 123)
```


*   **param**: `dateString` 

    Date string

*   **param**: `formatString` 

    Format string

*   **return**: Parsed date


______
/. 🚀 :fun: datetime:toIMF 🟩
-----------------------------


```ts
function toIMF( date:Date ): string
```



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode Date.toUTCString} instead.

Formats the given date to IMF date time format. (Reference:
https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
IMF is the time format to use when generating times in HTTP
headers. The time being formatted must be in UTC for Format to
generate the correct format.



example
-------

```ts
import { toIMF } from "https://deno.land/std@$STD_VERSION/datetime/to_imf.ts";

toIMF(new Date(0)); // => returns "Thu, 01 Jan 1970 00:00:00 GMT"
```

*   **param**: `date` 

    Date to parse

*   **return**: IMF date formatted string


______
/. 🚀 :fun: datetime:weekOfYear 🟩
----------------------------------


```ts
function weekOfYear( date:Date ): number
```

Returns the ISO week number of the provided date (1-53).



example
-------

```ts
import { weekOfYear } from "https://deno.land/std@$STD_VERSION/datetime/week_of_year.ts";

weekOfYear(new Date("2020-12-28T03:24:00")); // Returns 53
```


*   **return**: Number of the week in year

______
/. 🚀 :alias: Unit
------------------

    type Unit =  "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years"



______
/. 🚀 :alias: DifferenceFormat
------------------------------

    type DifferenceFormat = Partial<Record<Unit, number>>



______
/. 🚀 :alias: DifferenceOptions
-------------------------------

    type DifferenceOptions = { units?: Unit[] }



______
/. 🚀 :variable: SECOND
-----------------------

    const SECOND = 1000

The number of milliseconds in a second.



example
-------

```ts
import { SECOND } from "https://deno.land/std@$STD_VERSION/datetime/constants.ts";

console.log(SECOND); // => 1000
```


______
/. 🚀 :variable: MINUTE
-----------------------

    const MINUTE

The number of milliseconds in a minute.



example
-------

```ts
import { MINUTE } from "https://deno.land/std@$STD_VERSION/datetime/constants.ts";

console.log(MINUTE); // => 60000 (60 * 1000)
```


______
/. 🚀 :variable: HOUR
---------------------

    const HOUR

The number of milliseconds in an hour.



example
-------

```ts
import { HOUR } from "https://deno.land/std@$STD_VERSION/datetime/constants.ts";

console.log(HOUR); // => 3600000 (60 * 60 * 1000)
```


______
/. 🚀 :variable: DAY
--------------------

    const DAY

The number of milliseconds in a day.



example
-------

```ts
import { DAY } from "https://deno.land/std@$STD_VERSION/datetime/constants.ts";

console.log(DAY); // => 86400000 (24 * 60 * 60 * 1000)
```


______
/. 🚀 :variable: WEEK
---------------------

    const WEEK

The number of milliseconds in a week.



example
-------

```ts
import { WEEK } from "https://deno.land/std@$STD_VERSION/datetime/constants.ts";

console.log(WEEK); // => 604800000 (7 * 24 * 60 * 60 * 1000)
```


______
/. 🚀 :lib: regexp [Unstable] https://deno.land/std@0.207.0/regexp
==================================================================

Functions for tasks related to regular expression (regexps), such as
escaping text for interpolation into a regexp




______
/. 🚀 :fun: regexp:escape 🟩
----------------------------


```ts
function escape( str:string )
```

Escapes arbitrary text for interpolation into a regexp, such that it will
match exactly that text and nothing else.



example
-------

```ts
import { escape } from "https://deno.land/std@$STD_VERSION/regexp/mod.ts";
import { assertEquals, assertMatch, assertNotMatch } from "https://deno.land/std@$STD_VERSION/assert/mod.ts";

const re = new RegExp(`^${escape(".")}$`, "u");

assertEquals("^\\.$", re.source);
assertMatch(".", re);
assertNotMatch("a", re);
```


______
/. 🚀 :lib: dotenv [Unstable] https://deno.land/std@0.207.0/dotenv
==================================================================

Load environment variables from a `.env` file.  Loaded variables are accessible
in a configuration object returned by the `load()` function, as well as optionally
exporting them to the process environment using the `export` option.

Inspired by the node modules [`dotenv`](https://github.com/motdotla/dotenv)
and [`dotenv-expand`](https://github.com/motdotla/dotenv-expand).

## Basic usage
```sh
# .env
GREETING=hello world
```

Then import the environment variables using the `load` function.

```ts
// app.ts
import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";

console.log(await load({export: true})); // { GREETING: "hello world" }
console.log(Deno.env.get("GREETING")); // hello world
```

Run this with `deno run --allow-read --allow-env app.ts`.

.env files support blank lines, comments, multi-line values and more.
See Parsing Rules below for more detail.

## Auto loading
Import the `load.ts` module to auto-import from the `.env` file and into
the process environment.

```ts
// app.ts
import "https://deno.land/std@$STD_VERSION/dotenv/load.ts";

console.log(Deno.env.get("GREETING")); // hello world
```

Run this with `deno run --allow-read --allow-env app.ts`.

## Files
Dotenv supports a number of different files, all of which are optional.
File names and paths are configurable.

|File|Purpose|
|----|-------|
|.env|primary file for storing key-value environment entries
|.env.example|this file does not set any values, but specifies env variables which must be present in the configuration object or process environment after loading dotenv
|.env.defaults|specify default values for env variables to be used when there is no entry in the `.env` file

### Example file

The purpose of the example file is to provide a list of environment
variables which must be set or already present in the process environment
or an exception will be thrown.  These
variables may be set externally or loaded via the `.env` or
`.env.defaults` files.  A description may also be provided to help
understand the purpose of the env variable. The values in this file
are for documentation only and are not set in the environment. Example:

```sh
# .env.example

# With optional description (this is not set in the environment)
DATA_KEY=API key for the api.data.com service.

# Without description
DATA_URL=
```

When the above file is present, after dotenv is loaded, if either
DATA_KEY or DATA_URL is not present in the environment an exception
is thrown.

### Defaults

This file is used to provide a list of default environment variables
which will be used if there is no overriding variable in the `.env`
file.

```sh
# .env.defaults
KEY_1=DEFAULT_VALUE
KEY_2=ANOTHER_DEFAULT_VALUE
```
```sh
# .env
KEY_1=ABCD
```
The environment variables set after dotenv loads are:
```sh
KEY_1=ABCD
KEY_2=ANOTHER_DEFAULT_VALUE
```

## Configuration

Loading environment files comes with a number of options passed into
the `load()` function, all of which are optional.

|Option|Default|Description
|------|-------|-----------
|envPath|./.env|Path and filename of the `.env` file.  Use null to prevent the .env file from being loaded.
|defaultsPath|./.env.defaults|Path and filename of the `.env.defaults` file. Use null to prevent the .env.defaults file from being loaded.
|examplePath|./.env.example|Path and filename of the `.env.example` file. Use null to prevent the .env.example file from being loaded.
|export|false|When true, this will export all environment variables in the `.env` and `.env.default` files to the process environment (e.g. for use by `Deno.env.get()`) but only if they are not already set.  If a variable is already in the process, the `.env` value is ignored.
|allowEmptyValues|false|Allows empty values for specified env variables (throws otherwise)

### Example configuration
```ts
import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";

const conf = await load({
    envPath: "./.env_prod",
    examplePath: "./.env_required",
    export: true,
    allowEmptyValues: true,
  });
```

## Permissions

At a minimum, loading the `.env` related files requires the `--allow-read` permission.  Additionally, if
you access the process environment, either through exporting your configuration or expanding variables
in your `.env` file, you will need the `--allow-env` permission.  E.g.

```sh
deno run --allow-read=.env,.env.defaults,.env.example --allow-env=ENV1,ENV2 app.ts
```

## Parsing Rules

The parsing engine currently supports the following rules:

- Variables that already exist in the environment are not overridden with
  `export: true`
- `BASIC=basic` becomes `{ BASIC: "basic" }`
- empty lines are skipped
- lines beginning with `#` are treated as comments
- empty values become empty strings (`EMPTY=` becomes `{ EMPTY: "" }`)
- single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes
  `{ SINGLE_QUOTE: "quoted" }`)
- new lines are expanded in double quoted values (`MULTILINE="new\nline"`
  becomes

```
{ MULTILINE: "new\nline" }
```

- inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes
  `{ JSON: "{\"foo\": \"bar\"}" }`)
- whitespace is removed from both ends of unquoted values (see more on
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim))
  (`FOO= some value` becomes `{ FOO: "some value" }`)
- whitespace is preserved on both ends of quoted values (`FOO=" some value "`
  becomes `{ FOO: " some value " }`)
- dollar sign with an environment key in or without curly braces in unquoted
  values will expand the environment key (`KEY=$KEY` or `KEY=${KEY}` becomes
  `{ KEY: "<KEY_VALUE_FROM_ENV>" }`)
- escaped dollar sign with an environment key in unquoted values will escape the
  environment key rather than expand (`KEY=\$KEY` becomes `{ KEY: "\\$KEY" }`)
- colon and a minus sign with a default value(which can also be another expand
  value) in expanding construction in unquoted values will first attempt to
  expand the environment key. If it’s not found, then it will return the default
  value (`KEY=${KEY:-default}` If KEY exists it becomes
  `{ KEY: "<KEY_VALUE_FROM_ENV>" }` If not, then it becomes
  `{ KEY: "default" }`. Also there is possible to do this case
  `KEY=${NO_SUCH_KEY:-${EXISTING_KEY:-default}}` which becomes
  `{ KEY: "<EXISTING_KEY_VALUE_FROM_ENV>" }`)




______
/. 🚀 :class: dotenv:MissingEnvVarsError 🟢
-------------------------------------------


```ts
class MissingEnvVarsError extends Error { ... }
```




______
/. 🚀 MissingEnvVarsError constructors
======================================



______
/. 🚀 :ctor: MissingEnvVarsError 🟥
-----------------------------------


```ts
new MissingEnvVarsError(message:string, missing:string[])
```



*   missing: string[]

______
/. 🚀 :fun: dotenv:parse 🟩
---------------------------


```ts
function parse( rawDotenv:string ): Record<string, string>
```




______
/. 🚀 :fun: dotenv:loadSync 🟩
------------------------------


```ts
function loadSync( object:LoadOptions ): Record<string, string>
```




______
/. 🚀 :fun: dotenv:load 🟩
--------------------------


```ts
function load( object:LoadOptions ): Promise<Record<string, string>>
```




______
/. 🚀 :fun: dotenv:stringify 🟩
-------------------------------


```ts
function stringify( object:Record<string, string> )
```



example
-------

```ts
import { stringify } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";

const object = { GREETING: "hello world" };
const string = stringify(object); // GREETING='hello world'
```


*   **param**: `object` 

    object to be stringified

*   **return**: string of object


______
/. 🚀 :interface: LoadOptions
-----------------------------


    interface LoadOptions

Load environment variables from a `.env` file.  Loaded variables are accessible
in a configuration object returned by the `load()` function, as well as optionally
exporting them to the process environment using the `export` option.

Inspired by the node modules [`dotenv`](https://github.com/motdotla/dotenv)
and [`dotenv-expand`](https://github.com/motdotla/dotenv-expand).

## Basic usage
```sh
# .env
GREETING=hello world
```

Then import the environment variables using the `load` function.

```ts
// app.ts
import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";

console.log(await load({export: true})); // { GREETING: "hello world" }
console.log(Deno.env.get("GREETING")); // hello world
```

Run this with `deno run --allow-read --allow-env app.ts`.

.env files support blank lines, comments, multi-line values and more.
See Parsing Rules below for more detail.

## Auto loading
Import the `load.ts` module to auto-import from the `.env` file and into
the process environment.

```ts
// app.ts
import "https://deno.land/std@$STD_VERSION/dotenv/load.ts";

console.log(Deno.env.get("GREETING")); // hello world
```

Run this with `deno run --allow-read --allow-env app.ts`.

## Files
Dotenv supports a number of different files, all of which are optional.
File names and paths are configurable.

|File|Purpose|
|----|-------|
|.env|primary file for storing key-value environment entries
|.env.example|this file does not set any values, but specifies env variables which must be present in the configuration object or process environment after loading dotenv
|.env.defaults|specify default values for env variables to be used when there is no entry in the `.env` file

### Example file

The purpose of the example file is to provide a list of environment
variables which must be set or already present in the process environment
or an exception will be thrown.  These
variables may be set externally or loaded via the `.env` or
`.env.defaults` files.  A description may also be provided to help
understand the purpose of the env variable. The values in this file
are for documentation only and are not set in the environment. Example:

```sh
# .env.example

# With optional description (this is not set in the environment)
DATA_KEY=API key for the api.data.com service.

# Without description
DATA_URL=
```

When the above file is present, after dotenv is loaded, if either
DATA_KEY or DATA_URL is not present in the environment an exception
is thrown.

### Defaults

This file is used to provide a list of default environment variables
which will be used if there is no overriding variable in the `.env`
file.

```sh
# .env.defaults
KEY_1=DEFAULT_VALUE
KEY_2=ANOTHER_DEFAULT_VALUE
```
```sh
# .env
KEY_1=ABCD
```
The environment variables set after dotenv loads are:
```sh
KEY_1=ABCD
KEY_2=ANOTHER_DEFAULT_VALUE
```

## Configuration

Loading environment files comes with a number of options passed into
the `load()` function, all of which are optional.

|Option|Default|Description
|------|-------|-----------
|envPath|./.env|Path and filename of the `.env` file.  Use null to prevent the .env file from being loaded.
|defaultsPath|./.env.defaults|Path and filename of the `.env.defaults` file. Use null to prevent the .env.defaults file from being loaded.
|examplePath|./.env.example|Path and filename of the `.env.example` file. Use null to prevent the .env.example file from being loaded.
|export|false|When true, this will export all environment variables in the `.env` and `.env.default` files to the process environment (e.g. for use by `Deno.env.get()`) but only if they are not already set.  If a variable is already in the process, the `.env` value is ignored.
|allowEmptyValues|false|Allows empty values for specified env variables (throws otherwise)

### Example configuration
```ts
import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";

const conf = await load({
    envPath: "./.env_prod",
    examplePath: "./.env_required",
    export: true,
    allowEmptyValues: true,
  });
```

## Permissions

At a minimum, loading the `.env` related files requires the `--allow-read` permission.  Additionally, if
you access the process environment, either through exporting your configuration or expanding variables
in your `.env` file, you will need the `--allow-env` permission.  E.g.

```sh
deno run --allow-read=.env,.env.defaults,.env.example --allow-env=ENV1,ENV2 app.ts
```

## Parsing Rules

The parsing engine currently supports the following rules:

- Variables that already exist in the environment are not overridden with
  `export: true`
- `BASIC=basic` becomes `{ BASIC: "basic" }`
- empty lines are skipped
- lines beginning with `#` are treated as comments
- empty values become empty strings (`EMPTY=` becomes `{ EMPTY: "" }`)
- single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes
  `{ SINGLE_QUOTE: "quoted" }`)
- new lines are expanded in double quoted values (`MULTILINE="new\nline"`
  becomes

```
{ MULTILINE: "new\nline" }
```

- inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes
  `{ JSON: "{\"foo\": \"bar\"}" }`)
- whitespace is removed from both ends of unquoted values (see more on
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim))
  (`FOO= some value` becomes `{ FOO: "some value" }`)
- whitespace is preserved on both ends of quoted values (`FOO=" some value "`
  becomes `{ FOO: " some value " }`)
- dollar sign with an environment key in or without curly braces in unquoted
  values will expand the environment key (`KEY=$KEY` or `KEY=${KEY}` becomes
  `{ KEY: "<KEY_VALUE_FROM_ENV>" }`)
- escaped dollar sign with an environment key in unquoted values will escape the
  environment key rather than expand (`KEY=\$KEY` becomes `{ KEY: "\\$KEY" }`)
- colon and a minus sign with a default value(which can also be another expand
  value) in expanding construction in unquoted values will first attempt to
  expand the environment key. If it’s not found, then it will return the default
  value (`KEY=${KEY:-default}` If KEY exists it becomes
  `{ KEY: "<KEY_VALUE_FROM_ENV>" }` If not, then it becomes
  `{ KEY: "default" }`. Also there is possible to do this case
  `KEY=${NO_SUCH_KEY:-${EXISTING_KEY:-default}}` which becomes
  `{ KEY: "<EXISTING_KEY_VALUE_FROM_ENV>" }`)






Properties

*   envPath :  string | null

    Optional path to `.env` file. To prevent the default value from being
    used, set to `null`.
    
    **default**: "./.env"
    
*   export : boolean

    Set to `true` to export all `.env` variables to the current processes
    environment. Variables are then accessible via `Deno.env.get(<key>)`.
    
    **default**: false
    
*   examplePath :  string | null

    Optional path to `.env.example` file which is used for validation.
    To prevent the default value from being used, set to `null`.
    
    **default**: "./.env.example"
    
*   allowEmptyValues : boolean

    Set to `true` to allow required env variables to be empty. Otherwise, it
    will throw an error if any variable is empty.
    
    **default**: false
    
*   defaultsPath :  string | null

    Optional path to `.env.defaults` file which is used to define default
    (fallback) values. To prevent the default value from being used,
    set to `null`.
    
    ```sh
    # .env.defaults
    # Will not be set if GREETING is set in base .env file
    GREETING="a secret to everybody"
    ```
    
    **default**: "./.env.defaults"
    


______
/. 🚀 :lib: semver [Unstable] https://deno.land/std@0.207.0/semver
==================================================================

The semantic version parser.

Adapted directly from [semver](https://github.com/npm/node-semver).

## Versions

A "version" is described by the `v2.0.0` specification found at
<https://semver.org>.

A leading `"="` or `"v"` character is stripped off and ignored.

## Format

Semantic versions can be formatted as strings, by default they
are formatted as `full`. Below is a diagram showing the various
formatting options.

```
          ┌───── full
      ┌───┴───┐
      ├───────── release
  ┌───┴───┐   │
  ├───────────── primary
┌─┴─┐     │   │
1.2.3-pre.1+b.1
│ │ │ └─┬─┘ └┬┘
│ │ │   │    └── build
│ │ │   └─────── pre
│ │ └─────────── patch
│ └───────────── minor
└─────────────── major
```

## Ranges

A `version range` is a set of `comparators` which specify versions that satisfy
the range.

A `comparator` is composed of an `operator` and a `version`. The set of
primitive `operators` is:

- `<` Less than
- `<=` Less than or equal to
- `>` Greater than
- `>=` Greater than or equal to
- `=` Equal. If no operator is specified, then equality is assumed, so this
  operator is optional, but MAY be included.

For example, the comparator `>=1.2.7` would match the versions `1.2.7`, `1.2.8`,
`2.5.3`, and `1.3.9`, but not the versions `1.2.6` or `1.1.0`.

Comparators can be joined by whitespace to form a `comparator set`, which is
satisfied by the **intersection** of all of the comparators it includes.

A range is composed of one or more comparator sets, joined by `||`. A version
matches a range if and only if every comparator in at least one of the
`||`-separated comparator sets is satisfied by the version.

For example, the range `>=1.2.7 <1.3.0` would match the versions `1.2.7`,
`1.2.8`, and `1.2.99`, but not the versions `1.2.6`, `1.3.0`, or `1.1.0`.

The range `1.2.7 || >=1.2.9 <2.0.0` would match the versions `1.2.7`, `1.2.9`,
and `1.4.6`, but not the versions `1.2.8` or `2.0.0`.

### Prerelease Tags

If a version has a prerelease tag (for example, `1.2.3-alpha.3`) then it will
only be allowed to satisfy comparator sets if at least one comparator with the
same `[major, minor, patch]` tuple also has a prerelease tag.

For example, the range `>1.2.3-alpha.3` would be allowed to match the version
`1.2.3-alpha.7`, but it would _not_ be satisfied by `3.4.5-alpha.9`, even though
`3.4.5-alpha.9` is technically "greater than" `1.2.3-alpha.3` according to the
SemVer sort rules. The version range only accepts prerelease tags on the `1.2.3`
version. The version `3.4.5` _would_ satisfy the range, because it does not have
a prerelease flag, and `3.4.5` is greater than `1.2.3-alpha.7`.

The purpose for this behavior is twofold. First, prerelease versions frequently
are updated very quickly, and contain many breaking changes that are (by the
author"s design) not yet fit for public consumption. Therefore, by default, they
are excluded from range matching semantics.

Second, a user who has opted into using a prerelease version has clearly
indicated the intent to use _that specific_ set of alpha/beta/rc versions. By
including a prerelease tag in the range, the user is indicating that they are
aware of the risk. However, it is still not appropriate to assume that they have
opted into taking a similar risk on the _next_ set of prerelease versions.

Note that this behavior can be suppressed (treating all prerelease versions as
if they were normal versions, for the purpose of range matching) by setting the
`includePrerelease` flag on the options object to any [functions](#functions)
that do range matching.

#### Prerelease Identifiers

The method `.increment` takes an additional `identifier` string argument that
will append the value of the string as a prerelease identifier:

```javascript
semver.increment(parse("1.2.3"), "prerelease", "beta");
// "1.2.4-beta.0"
```

### Build Metadata

Build metadata is `.` delimited alpha-numeric string.
When parsing a version it is retained on the `build: string[]` field
of the semver instance. When incrementing there is an additional parameter that
can set the build metadata on the semver instance.

### Advanced Range Syntax

Advanced range syntax desugars to primitive comparators in deterministic ways.

Advanced ranges may be combined in the same way as primitive comparators using
white space or `||`.

#### Hyphen Ranges `X.Y.Z - A.B.C`

Specifies an inclusive set.

- `1.2.3 - 2.3.4` := `>=1.2.3 <=2.3.4`

If a partial version is provided as the first version in the inclusive range,
then the missing pieces are replaced with zeroes.

- `1.2 - 2.3.4` := `>=1.2.0 <=2.3.4`

If a partial version is provided as the second version in the inclusive range,
then all versions that start with the supplied parts of the tuple are accepted,
but nothing that would be greater than the provided tuple parts.

- `1.2.3 - 2.3` := `>=1.2.3 <2.4.0`
- `1.2.3 - 2` := `>=1.2.3 <3.0.0`

#### X-Ranges `1.2.x` `1.X` `1.2.*` `*`

Any of `X`, `x`, or `*` may be used to "stand in" for one of the numeric values
in the `[major, minor, patch]` tuple.

- `*` := `>=0.0.0` (Any version satisfies)
- `1.x` := `>=1.0.0 <2.0.0` (Matching major version)
- `1.2.x` := `>=1.2.0 <1.3.0` (Matching major and minor versions)

A partial version range is treated as an X-Range, so the special character is in
fact optional.

- `""` (empty string) := `*` := `>=0.0.0`
- `1` := `1.x.x` := `>=1.0.0 <2.0.0`
- `1.2` := `1.2.x` := `>=1.2.0 <1.3.0`

#### Tilde Ranges `~1.2.3` `~1.2` `~1`

Allows patch-level changes if a minor version is specified on the comparator.
Allows minor-level changes if not.

- `~1.2.3` := `>=1.2.3 <1.(2+1).0` := `>=1.2.3 <1.3.0`
- `~1.2` := `>=1.2.0 <1.(2+1).0` := `>=1.2.0 <1.3.0` (Same as `1.2.x`)
- `~1` := `>=1.0.0 <(1+1).0.0` := `>=1.0.0 <2.0.0` (Same as `1.x`)
- `~0.2.3` := `>=0.2.3 <0.(2+1).0` := `>=0.2.3 <0.3.0`
- `~0.2` := `>=0.2.0 <0.(2+1).0` := `>=0.2.0 <0.3.0` (Same as `0.2.x`)
- `~0` := `>=0.0.0 <(0+1).0.0` := `>=0.0.0 <1.0.0` (Same as `0.x`)
- `~1.2.3-beta.2` := `>=1.2.3-beta.2 <1.3.0` Note that prereleases in the
  `1.2.3` version will be allowed, if they are greater than or equal to
  `beta.2`. So, `1.2.3-beta.4` would be allowed, but `1.2.4-beta.2` would not,
  because it is a prerelease of a different `[major, minor, patch]` tuple.

#### Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`

Allows changes that do not modify the left-most non-zero element in the
`[major, minor, patch]` tuple. In other words, this allows patch and minor
updates for versions `1.0.0` and above, patch updates for versions
`0.X >=0.1.0`, and _no_ updates for versions `0.0.X`.

Many authors treat a `0.x` version as if the `x` were the major
"breaking-change" indicator.

Caret ranges are ideal when an author may make breaking changes between `0.2.4`
and `0.3.0` releases, which is a common practice. However, it presumes that
there will _not_ be breaking changes between `0.2.4` and `0.2.5`. It allows for
changes that are presumed to be additive (but non-breaking), according to
commonly observed practices.

- `^1.2.3` := `>=1.2.3 <2.0.0`
- `^0.2.3` := `>=0.2.3 <0.3.0`
- `^0.0.3` := `>=0.0.3 <0.0.4`
- `^1.2.3-beta.2` := `>=1.2.3-beta.2 <2.0.0` Note that prereleases in the
  `1.2.3` version will be allowed, if they are greater than or equal to
  `beta.2`. So, `1.2.3-beta.4` would be allowed, but `1.2.4-beta.2` would not,
  because it is a prerelease of a different `[major, minor, patch]` tuple.
- `^0.0.3-beta` := `>=0.0.3-beta <0.0.4` Note that prereleases in the `0.0.3`
  version _only_ will be allowed, if they are greater than or equal to `beta`.
  So, `0.0.3-pr.2` would be allowed.

When parsing caret ranges, a missing `patch` value desugars to the number `0`,
but will allow flexibility within that value, even if the major and minor
versions are both `0`.

- `^1.2.x` := `>=1.2.0 <2.0.0`
- `^0.0.x` := `>=0.0.0 <0.1.0`
- `^0.0` := `>=0.0.0 <0.1.0`

A missing `minor` and `patch` values will desugar to zero, but also allow
flexibility within those values, even if the major version is zero.

- `^1.x` := `>=1.0.0 <2.0.0`
- `^0.x` := `>=0.0.0 <1.0.0`

### Range Grammar

Putting all this together, here is a Backus-Naur grammar for ranges, for the
benefit of parser authors:

```bnf
range-set  ::= range ( logical-or range ) *
logical-or ::= ( " " ) * "||" ( " " ) *
range      ::= hyphen | simple ( " " simple ) * | ""
hyphen     ::= partial " - " partial
simple     ::= primitive | partial | tilde | caret
primitive  ::= ( "<" | ">" | ">=" | "<=" | "=" ) partial
partial    ::= xr ( "." xr ( "." xr qualifier ? )? )?
xr         ::= "x" | "X" | "*" | nr
nr         ::= "0" | ["1"-"9"] ( ["0"-"9"] ) *
tilde      ::= "~" partial
caret      ::= "^" partial
qualifier  ::= ( "-" pre )? ( "+" build )?
pre        ::= parts
build      ::= parts
parts      ::= part ( "." part ) *
part       ::= nr | [-0-9A-Za-z]+
```

Note that, since ranges may be non-contiguous, a version might not be greater
than a range, less than a range, _or_ satisfy a range! For example, the range
`1.2 <1.2.9 || >2.0.0` would have a hole from `1.2.9` until `2.0.0`, so the
version `1.2.10` would not be greater than the range (because `2.0.1` satisfies,
which is higher), nor less than the range (since `1.2.8` satisfies, which is
lower), and it also does not satisfy the range.

If you want to know if a version satisfies or does not satisfy a range, use the
{@linkcode satisfies} function.

This module is browser compatible.



example
-------

```ts
import {
  parse,
  parseComparator,
  parseRange,
  gt,
  lt,
  format
} from "https://deno.land/std@$STD_VERSION/semver/mod.ts";

const semver = parse("1.2.3");
const range = parseRange("1.x || >=2.5.0 || 5.0.0 - 7.2.3");

const s0 = parse("1.2.3");
const s1 = parse("9.8.7");
gt(s0, s1); // false
lt(s0, s1); // true

format(semver) // "1.2.3"
```




______
/. 🚀 :fun: semver:cmp 🟩
-------------------------


```ts
function cmp( s0:SemVer, operator:Operator, s1:SemVer ): boolean
```

Do a comparison of two semantic version objects based on the given operator

*   **param**: `s0` 

    The left side of the comparison

*   **param**: `operator` 

    The operator to use for the comparison

*   **param**: `s1` 

    The right side of the comparison

*   **return**: True or false based on the operator


______
/. 🚀 :fun: semver:comparatorFormat 🟩
--------------------------------------


```ts
function comparatorFormat( comparator:SemVerComparator )
```

Formats the comparator into a string


example
-------

>=0.0.0

*   **param**: `comparator` 

*   **return**: A string representation of the comparator


______
/. 🚀 :fun: semver:comparatorIntersects 🟩
------------------------------------------


```ts
function comparatorIntersects( c0:SemVerComparator, c1:SemVerComparator ): boolean
```

Returns true if the range of possible versions intersects with the other comparators set of possible versions

*   **param**: `c0` 

    The left side comparator

*   **param**: `c1` 

    The right side comparator

*   **return**: True if any part of the comparators intersect


______
/. 🚀 :fun: semver:comparatorMax 🟩
-----------------------------------


```ts
function comparatorMax( semver:SemVer, operator:Operator ): SemVer
```

The maximum version that could match this comparator.

If an invalid comparator is given such as <0.0.0 then
an out of range semver will be returned.

*   **return**: the version, the MAX version or the next smallest patch version


______
/. 🚀 :fun: semver:comparatorMin 🟩
-----------------------------------


```ts
function comparatorMin( semver:SemVer, operator:Operator ): SemVer
```

The minimum semantic version that could match this comparator

*   **param**: `semver` 

    The semantic version of the comparator

*   **param**: `operator` 

    The operator of the comparator

*   **return**: The minimum valid semantic version


______
/. 🚀 :fun: semver:compareBuild 🟩
----------------------------------


```ts
function compareBuild( s0:SemVer, s1:SemVer ):  1 | 0 | -1
```

Compare two semantic version objects including build metadata.

Returns `0` if `v1 === v2`, or `1` if `v1` is greater, or `-1` if `v2` is
greater.

Sorts in ascending order if passed to `Array.sort()`,

*   **param**: `s0` 

*   **param**: `s1` 

*   **return**: undefined


______
/. 🚀 :fun: semver:compare 🟩
-----------------------------


```ts
function compare( s0:SemVer, s1:SemVer ):  1 | 0 | -1
```

Compare two semantic version objects.

Returns `0` if `v1 === v2`, or `1` if `v1` is greater, or `-1` if `v2` is
greater.

Sorts in ascending order if passed to `Array.sort()`,



______
/. 🚀 :fun: semver:difference 🟩
--------------------------------


```ts
function difference( s0:SemVer, s1:SemVer ):  ReleaseType | undefined
```

Returns difference between two versions by the release type, or
`undefined` if the versions are the same.



______
/. 🚀 :fun: semver:eq 🟩
------------------------


```ts
function eq( s0:SemVer, s1:SemVer ): boolean
```

Returns `true` if they're logically equivalent, even if they're not the exact
same version object.



______
/. 🚀 :fun: semver:format 🟩
----------------------------


```ts
function format( semver:SemVer, style:FormatStyle )
```

Format a SemVer object into a string.

If any number is NaN then NaN will be printed.

If any number is positive or negative infinity then '∞' or '⧞' will be printed instead.


*   **param**: `semver` 

    The semantic version to format

*   **return**: The string representation of a semantic version.


______
/. 🚀 :fun: semver:gt 🟩
------------------------


```ts
function gt( s0:SemVer, s1:SemVer ): boolean
```

Greater than comparison



______
/. 🚀 :fun: semver:gte 🟩
-------------------------


```ts
function gte( s0:SemVer, s1:SemVer ): boolean
```

Greater than or equal to comparison



______
/. 🚀 :fun: semver:gtr 🟩
-------------------------


```ts
function gtr( version:SemVer, range:SemVerRange ): boolean
```

Checks to see if the version is greater than all possible versions of the range.



______
/. 🚀 :fun: semver:testComparator 🟩
------------------------------------


```ts
function testComparator( version:SemVer, comparator:SemVerComparator ): boolean
```

Test to see if a semantic version falls within the range of the comparator.

*   **param**: `version` 

    The version to compare

*   **param**: `comparator` 

    The comparator

*   **return**: True if the version is within the comparators set otherwise false


______
/. 🚀 :fun: semver:testRange 🟩
-------------------------------


```ts
function testRange( version:SemVer, range:SemVerRange ): boolean
```

Test to see if the version satisfies the range.

*   **param**: `version` 

    The version to test

*   **param**: `range` 

    The range to check

*   **return**: true if the version is in the range


______
/. 🚀 :fun: semver:increment 🟩
-------------------------------


```ts
function increment( version:SemVer, release:ReleaseType, prerelease?:string, build?:string ): SemVer
```

Returns the new version resulting from an increment by release type.

`premajor`, `preminor` and `prepatch` will bump the version up to the next version,
based on the type, and will also add prerelease metadata.

If called from a non-prerelease version, the `prerelease` will work the same as
`prepatch`. The patch version is incremented and then is made into a prerelease. If
the input version is already a prerelease it will simply increment the prerelease
metadata.

If a prerelease identifier is specified without a number then a number will be added.
For example `pre` will result in `pre.0`. If the existing version already has a
prerelease with a number and its the same prerelease identifier then the number
will be incremented. If the identifier differs from the new identifier then the new
identifier is applied and the number is reset to `0`.

If the input version has build metadata it will be preserved on the resulting version
unless a new build parameter is specified. Specifying `""` will unset existing build
metadata.

*   **param**: `version` 

    The version to increment

*   **param**: `release` 

    The type of increment to perform

*   **param**: `prerelease` 

    The pre-release metadata of the new version

*   **param**: `build` 

    The build metadata of the new version

*   **return**: undefined


______
/. 🚀 :fun: semver:isSemVerComparator 🟩
----------------------------------------


```ts
function isSemVerComparator( value:unknown ): value is SemVerComparator
```

Does a deep check on the value to see if it is a valid SemVerComparator object.

Objects with extra fields are still considered valid if they have at
least the correct fields.

Adds a type assertion if true.

*   **param**: `value` 

    The value to check if its a SemVerComparator

*   **return**: True if the object is a SemVerComparator otherwise false


______
/. 🚀 :fun: semver:isSemVerRange 🟩
-----------------------------------


```ts
function isSemVerRange( value:unknown ): value is SemVerRange
```

Does a deep check on the object to determine if its a valid range.

Objects with extra fields are still considered valid if they have at
least the correct fields.

Adds a type assertion if true.

*   **param**: `value` 

    The value to check if its a valid SemVerRange

*   **return**: True if its a valid SemVerRange otherwise false.


______
/. 🚀 :fun: semver:isSemVer 🟩
------------------------------


```ts
function isSemVer( value:unknown ): value is SemVer
```

Checks to see if value is a valid SemVer object. It does a check
into each field including prerelease and build.

Some invalid SemVer sentinels can still return true such as ANY and INVALID.
An object which has the same value as a sentinel but isn't reference equal
will still fail.

Objects which are valid SemVer objects but have _extra_ fields are still
considered SemVer objects and this will return true.

A type assertion is added to the value.

*   **param**: `value` 

    The value to check to see if its a valid SemVer object

*   **return**: True if value is a valid SemVer otherwise false


______
/. 🚀 :fun: semver:lt 🟩
------------------------


```ts
function lt( s0:SemVer, s1:SemVer ): boolean
```

Less than comparison



______
/. 🚀 :fun: semver:lte 🟩
-------------------------


```ts
function lte( s0:SemVer, s1:SemVer ): boolean
```

Less than or equal to comparison



______
/. 🚀 :fun: semver:ltr 🟩
-------------------------


```ts
function ltr( version:SemVer, range:SemVerRange ): boolean
```

Greater than range comparison



______
/. 🚀 :fun: semver:maxSatisfying 🟩
-----------------------------------


```ts
function maxSatisfying( versions:SemVer[], range:SemVerRange ):  SemVer | undefined
```

Returns the highest version in the list that satisfies the range, or `undefined`
if none of them do.

*   **param**: `versions` 

    The versions to check.

*   **param**: `range` 

    The range of possible versions to compare to.

*   **return**: The highest version in versions that satisfies the range.


______
/. 🚀 :fun: semver:minSatisfying 🟩
-----------------------------------


```ts
function minSatisfying( versions:SemVer[], range:SemVerRange ):  SemVer | undefined
```

Returns the lowest version in the list that satisfies the range, or `undefined` if
none of them do.

*   **param**: `versions` 

    The versions to check.

*   **param**: `range` 

    The range of possible versions to compare to.

*   **return**: The lowest version in versions that satisfies the range.


______
/. 🚀 :fun: semver:neq 🟩
-------------------------


```ts
function neq( s0:SemVer, s1:SemVer ): boolean
```

Not equal comparison



______
/. 🚀 :fun: semver:outside 🟩
-----------------------------


```ts
function outside( version:SemVer, range:SemVerRange, hilo?: ">" | "<" ): boolean
```

Returns true if the version is outside the bounds of the range in either the
high or low direction. The hilo argument must be either the string '>' or
'<'. (This is the function called by {@linkcode gtr} and {@linkcode ltr}.)

*   **param**: `version` 

    The version to compare to the range

*   **param**: `range` 

    The range of possible versions

*   **param**: `hilo` 

    The operator for the comparison or both if undefined.

*   **return**: True if the version is outside of the range based on the operator


______
/. 🚀 :fun: semver:parseComparator 🟩
-------------------------------------


```ts
function parseComparator( comparator:string ): SemVerComparator
```

Parses a comparator string into a valid SemVerComparator.

*   **param**: `comparator` 

*   **return**: A valid SemVerComparator


______
/. 🚀 :fun: semver:parseRange 🟩
--------------------------------


```ts
function parseRange( range:string ): SemVerRange
```

Parses a range string into a SemVerRange object or throws a TypeError.

*   **param**: `range` 

    The range string

*   **return**: A valid semantic version range


______
/. 🚀 :fun: semver:parse 🟩
---------------------------


```ts
function parse( version: string | SemVer ): SemVer
```

Attempt to parse a string as a semantic version, returning either a `SemVer`
object or throws a TypeError.

*   **param**: `version` 

    The version string to parse

*   **return**: A valid SemVer


______
/. 🚀 :fun: semver:rangeFormat 🟩
---------------------------------


```ts
function rangeFormat( range:SemVerRange )
```

Formats the range into a string


example
-------

>=0.0.0 || <1.0.0

*   **param**: `range` 

    The range to format

*   **return**: A string representation of the range


______
/. 🚀 :fun: semver:rangeIntersects 🟩
-------------------------------------


```ts
function rangeIntersects( r0:SemVerRange, r1:SemVerRange ): boolean
```

The ranges intersect every range of AND comparators intersects with a least one range of OR ranges.

*   **param**: `r0` 

    range 0

*   **param**: `r1` 

    range 1

*   **return**: returns true if any


______
/. 🚀 :fun: semver:rangeMax 🟩
------------------------------


```ts
function rangeMax( range:SemVerRange ):  SemVer | undefined
```

The maximum valid SemVer for a given range or INVALID

*   **param**: `range` 

    The range to calculate the max for

*   **return**: A valid SemVer or INVALID


______
/. 🚀 :fun: semver:rangeMin 🟩
------------------------------


```ts
function rangeMin( range:SemVerRange ): SemVer
```

The minimum valid SemVer for a given range or INVALID

*   **param**: `range` 

    The range to calculate the min for

*   **return**: A valid SemVer or INVALID


______
/. 🚀 :fun: semver:rcompare 🟩
------------------------------


```ts
function rcompare( s0:SemVer, s1:SemVer ):  1 | 0 | -1
```

A reverse comparison of two versions. Same as compare but
`1` and `-1` are inverted.

Sorts in descending order if passed to `Array.sort()`,



______
/. 🚀 :fun: semver:rsort 🟩
---------------------------


```ts
function rsort( list:SemVer[] ): SemVer[]
```

Sorts a list of semantic versions in descending order.



______
/. 🚀 :fun: semver:sort 🟩
--------------------------


```ts
function sort( list:SemVer[] ): SemVer[]
```

Sorts a list of semantic versions in ascending order.



______
/. 🚀 :interface: SemVerComparator
----------------------------------


    interface SemVerComparator

The shape of a valid semantic version comparator


example
-------

>=0.0.0





Properties

*   operator : Operator
*   semver : SemVer
*   min : SemVer
*   max : SemVer



______
/. 🚀 :interface: SemVer
------------------------


    interface SemVer

A SemVer object parsed into its constituent parts.





Properties

*   major : number
*   minor : number
*   patch : number
*   prerelease : []
*   build : string[]



______
/. 🚀 :interface: SemVerRange
-----------------------------


    interface SemVerRange

A type representing a semantic version range. The ranges consist of
a nested array, which represents a set of OR comparisons while the
inner array represents AND comparisons.





Properties

*   ranges : SemVerRangeOr


______
/. 🚀 :alias: ReleaseType
-------------------------

    type ReleaseType =  "pre" | "major" | "premajor" | "minor" | "preminor" | "patch" | "prepatch" | "prerelease"

The possible release types are used as an operator for the
increment function and as a result of the difference function.


______
/. 🚀 :alias: Operator
----------------------

    type Operator =  "" | "=" | "==" | "===" | "!==" | "!=" | ">" | ">=" | "<" | "<="

SemVer comparison operators.


______
/. 🚀 :alias: FormatStyle
-------------------------

    type FormatStyle =  "full" | "release" | "primary" | "build" | "pre" | "patch" | "minor" | "major"

The style to use when formatting a SemVer object into a string


______
/. 🚀 :variable: MAX
--------------------

    const MAX : SemVer

MAX is a sentinel value used by some range calculations.
It is equivalent to `∞.∞.∞`.


______
/. 🚀 :variable: MIN
--------------------

    const MIN : SemVer

The minimum valid SemVer object. Equivalent to `0.0.0`.


______
/. 🚀 :variable: INVALID
------------------------

    const INVALID : SemVer

A sentinel value used to denote an invalid SemVer object
which may be the result of impossible ranges or comparator operations.


example
-------

```ts
import { eq } from "https://deno.land/std@$STD_VERSION/semver/eq.ts";
import { parse } from "https://deno.land/std@$STD_VERSION/semver/parse.ts";
import { INVALID } from "https://deno.land/std@$STD_VERSION/semver/constants.ts"
eq(parse("1.2.3"), INVALID);
```


______
/. 🚀 :variable: ANY
--------------------

    const ANY : SemVer

ANY is a sentinel value used by some range calculations. It is not a valid
SemVer object and should not be used directly.


example
-------

```ts
import { eq } from "https://deno.land/std@$STD_VERSION/semver/eq.ts";
import { parse } from "https://deno.land/std@$STD_VERSION/semver/parse.ts";
import { ANY } from "https://deno.land/std@$STD_VERSION/semver/constants.ts"
eq(parse("1.2.3"), ANY); // false
```


______
/. 🚀 :variable: ALL
--------------------

    const ALL : SemVerComparator

A comparator which will span all valid semantic versions


______
/. 🚀 :variable: NONE
---------------------

    const NONE : SemVerComparator

A comparator which will not span any semantic versions


______
/. 🚀 :variable: SEMVER_SPEC_VERSION
------------------------------------

    const SEMVER_SPEC_VERSION = "2.0.0"



______
/. 🚀 :lib: encoding [Unstable] https://deno.land/std@0.207.0/encoding
======================================================================

______
/. 🚀 :lib: signal [Deprecated] https://deno.land/std@0.207.0/signal
====================================================================

Higher level API for dealing with OS signals.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Signals API]{@link https://docs.deno.com/runtime/tutorials/os_signals} directly instead.


    import { MuxAsyncIterator } from "https://deno.land/std@0.207.0/async/mux_async_iterator.ts"

Higher level API for dealing with OS signals.



deprecated
----------

(will be removed in 1.0.0) Use the [Deno Signals API]{@link https://docs.deno.com/runtime/tutorials/os_signals} directly instead.


______
/. 🚀 :fun: signal:signal 🟩
----------------------------


```ts
function signal( ...signals:[Deno.Signal, ...Deno.Signal[] ] ): AsyncIterable<void> & Disposable
```

Generates an AsyncIterable which can be awaited on for one or more signals.
`dispose()` can be called when you are finished waiting on the events.

Example:

```ts
import { signal } from "https://deno.land/std@$STD_VERSION/signal/mod.ts";

const sig = signal("SIGUSR1", "SIGINT");
setTimeout(() => {}, 5000); // Prevents exiting immediately

for await (const _ of sig) {
  // ..
}

// At some other point in your code when finished listening:
sig.dispose();
```


*   **param**: `signals` 

    - one or more signals to listen to
    


deprecated
----------

(will be removed in 1.0.0) Use the [Deno Signals API]{@link https://docs.deno.com/runtime/tutorials/os_signals} directly instead.


______
/. 🚀 :alias: Disposable
------------------------

    type Disposable = { dispose: () => void }



______
/. 🚀 :lib: flags [Unstable] https://deno.land/std@0.207.0/flags
================================================================



deprecated
----------

(will be removed in 1.0.0) Import from `std/cli/parse_args.ts` instead

Command line arguments parser based on
[minimist](https://github.com/minimistjs/minimist).

This module is browser compatible.



example
-------

```ts
import { parse } from "https://deno.land/std@$STD_VERSION/flags/mod.ts";

console.dir(parse(Deno.args));
```




______
/. 🚀 :fun: flags:parse 🟩
--------------------------


```ts
function parse<TArgs extends Values<TBooleans, TStrings, TCollectable, TNegatable, TDefaults, TAliases>, TDoubleDash extends  boolean | undefined = undefined, TBooleans extends BooleanType = undefined, TStrings extends StringType = undefined, TCollectable extends Collectable = undefined, TNegatable extends Negatable = undefined, TDefaults extends  Record<string, unknown> | undefined = undefined, TAliases extends  Aliases<TAliasArgNames, TAliasNames> | undefined = undefined, TAliasArgNames extends string = string, TAliasNames extends string = string>( args:string[], object:ParseOptions ): Args<TArgs, TDoubleDash>
```

Take a set of command line arguments, optionally with a set of options, and
return an object representing the flags found in the passed arguments.

By default, any arguments starting with `-` or `--` are considered boolean
flags. If the argument name is followed by an equal sign (`=`) it is
considered a key-value pair. Any arguments which could not be parsed are
available in the `_` property of the returned object.

By default, the flags module tries to determine the type of all arguments
automatically and the return type of the `parseArgs` method will have an index
signature with `any` as value (`{ [x: string]: any }`).

If the `string`, `boolean` or `collect` option is set, the return value of
the `parseArgs` method will be fully typed and the index signature of the return
type will change to `{ [x: string]: unknown }`.

Any arguments after `'--'` will not be parsed and will end up in `parsedArgs._`.

Numeric-looking arguments will be returned as numbers unless `options.string`
or `options.boolean` is set for that argument name.



example
-------

```ts
import { parseArgs } from "https://deno.land/std@$STD_VERSION/cli/parse_args.ts";
const parsedArgs = parseArgs(Deno.args);
```



example
-------

```ts
import { parseArgs } from "https://deno.land/std@$STD_VERSION/cli/parse_args.ts";
const parsedArgs = parseArgs(["--foo", "--bar=baz", "./quux.txt"]);
// parsedArgs: { foo: true, bar: "baz", _: ["./quux.txt"] }
```



______
/. 🚀 :interface: ParseOptions
------------------------------


    interface ParseOptions

The options for the `parseArgs` call.


Type Params

    TBooleans : BooleanType = BooleanType, TStrings : StringType = StringType, TCollectable : Collectable = Collectable, TNegatable : Negatable = Negatable, TDefault :  Record<string, unknown> | undefined, TAliases :  Aliases | undefined, TDoubleDash :  boolean | undefined




Properties

*   -- : TDoubleDash

    When `true`, populate the result `_` with everything before the `--` and
    the result `['--']` with everything after the `--`.
    
    **default**: false
    
    
    example
    -------
    
    ```ts
    // $ deno run example.ts -- a arg1
    import { parseArgs } from "https://deno.land/std@$STD_VERSION/cli/parse_args.ts";
    console.dir(parseArgs(Deno.args, { "--": false }));
    // output: { _: [ "a", "arg1" ] }
    console.dir(parseArgs(Deno.args, { "--": true }));
    // output: { _: [], --: [ "a", "arg1" ] }
    ```
    
*   alias : TAliases

    An object mapping string names to strings or arrays of string argument
    names to use as aliases.
    
*   boolean :  TBooleans | ReadonlyArray<Extract<TBooleans, string>>

    A boolean, string or array of strings to always treat as booleans. If
    `true` will treat all double hyphenated arguments without equal signs as
    `boolean` (e.g. affects `--foo`, not `-f` or `--foo=bar`).
     All `boolean` arguments will be set to `false` by default.
    
*   default : TDefault & Defaults<TBooleans, TStrings>

    An object mapping string argument names to default values.
    
*   stopEarly : boolean

    When `true`, populate the result `_` with everything after the first
    non-option.
    
*   string :  TStrings | ReadonlyArray<Extract<TStrings, string>>

    A string or array of strings argument names to always treat as strings.
    
*   collect :  TCollectable | ReadonlyArray<Extract<TCollectable, string>>

    A string or array of strings argument names to always treat as arrays.
    Collectable options can be used multiple times. All values will be
    collected into one array. If a non-collectable option is used multiple
    times, the last value is used.
    All Collectable arguments will be set to `[]` by default.
    
*   negatable :  TNegatable | ReadonlyArray<Extract<TNegatable, string>>

    A string or array of strings argument names which can be negated
    by prefixing them with `--no-`, like `--no-config`.
    
*   unknown : (arg:string, key?:string, value?:unknown) => unknown

    A function which is invoked with a command line parameter not defined in
    the `options` configuration object. If the function returns `false`, the
    unknown option is not added to `parsedArgs`.
    


______
/. 🚀 :alias: Args
------------------

    type Args = Id<TArgs & { _: Array< string | number> } & (()=>boolean)>

The value returned from `parseArgs`.


______
/. 🚀 :lib: streams [Unstable] https://deno.land/std@0.207.0/streams
====================================================================

Utilities for working with the
[Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API).

Includes buffering and conversion.




______
/. 🚀 :class: streams:Buffer 🟢
-------------------------------


```ts
class Buffer { ... }
```

A variable-sized buffer of bytes with `read()` and `write()` methods.

Buffer is almost always used with some I/O like files and sockets. It allows
one to buffer up a download from a socket. Buffer grows and shrinks as
necessary.

Buffer is NOT the same thing as Node's Buffer. Node's Buffer was created in
2009 before JavaScript had the concept of ArrayBuffers. It's simply a
non-standard ArrayBuffer.

ArrayBuffer is a fixed memory allocation. Buffer is implemented on top of
ArrayBuffer.

Based on [Go Buffer](https://golang.org/pkg/bytes/#Buffer).



______
/. 🚀 Buffer constructors
=========================



______
/. 🚀 :ctor: Buffer 🟥
----------------------


```ts
new Buffer(ab?: ArrayBufferLike | ArrayLike<number>)
```




______
/. 🚀 Buffer methods
====================



______
/. 🚀 :getter: Buffer.readable 🟦
---------------------------------


```ts
function readable(  )
```




______
/. 🚀 :getter: Buffer.writable 🟦
---------------------------------


```ts
function writable(  )
```




______
/. 🚀 :method: Buffer.bytes 🟨
------------------------------


```ts
function bytes( options ): Uint8Array
```

Returns a slice holding the unread portion of the buffer.

The slice is valid for use only until the next buffer modification (that
is, only until the next call to a method like `read()`, `write()`,
`reset()`, or `truncate()`). If `options.copy` is false the slice aliases
the buffer content at least until the next buffer modification, so
immediate changes to the slice will affect the result of future reads.



______
/. 🚀 :method: Buffer.empty 🟨
------------------------------


```ts
function empty(  ): boolean
```

Returns whether the unread portion of the buffer is empty.



______
/. 🚀 :getter: Buffer.length 🟦
-------------------------------


```ts
function length(  ): number
```

A read only number of bytes of the unread portion of the buffer.



______
/. 🚀 :getter: Buffer.capacity 🟦
---------------------------------


```ts
function capacity(  ): number
```

The read only capacity of the buffer's underlying byte slice, that is,
the total space allocated for the buffer's data.



______
/. 🚀 :method: Buffer.truncate 🟨
---------------------------------


```ts
function truncate( n:number )
```

Discards all but the first `n` unread bytes from the buffer but
continues to use the same allocated storage. It throws if `n` is
negative or greater than the length of the buffer.



______
/. 🚀 :method: Buffer.reset 🟨
------------------------------


```ts
function reset(  ): void
```




______
/. 🚀 :method: Buffer.grow 🟨
-----------------------------


```ts
function grow( n:number ): void
```

Grows the buffer's capacity, if necessary, to guarantee space for
another `n` bytes. After `.grow(n)`, at least `n` bytes can be written to
the buffer without another allocation. If `n` is negative, `.grow()` will
throw. If the buffer can't grow it will throw an error.

Based on Go Lang's
[Buffer.Grow](https://golang.org/pkg/bytes/#Buffer.Grow).



______
/. 🚀 :class: streams:ByteSliceStream 🟢
----------------------------------------


```ts
class ByteSliceStream extends TransformStream<Uint8Array, Uint8Array> { ... }
```

A transform stream that only transforms from the zero-indexed `start` and `end` bytes (both inclusive).



example
-------

```ts
import { ByteSliceStream } from "https://deno.land/std@$STD_VERSION/streams/byte_slice_stream.ts";
const response = await fetch("https://example.com");
const rangedStream = response.body!
  .pipeThrough(new ByteSliceStream(3, 8));
```



______
/. 🚀 ByteSliceStream constructors
==================================



______
/. 🚀 :ctor: ByteSliceStream 🟥
-------------------------------


```ts
new ByteSliceStream(start, end)
```




______
/. 🚀 :class: streams:DelimiterStream 🟢
----------------------------------------


```ts
class DelimiterStream extends TransformStream<Uint8Array, Uint8Array> { ... }
```

Divide a stream into chunks delimited by a given byte sequence.



example
-------

Divide a CSV stream by commas, discarding the commas:
```ts
import { DelimiterStream } from "https://deno.land/std@$STD_VERSION/streams/delimiter_stream.ts";
const res = await fetch("https://example.com/data.csv");
const parts = res.body!
  .pipeThrough(new DelimiterStream(new TextEncoder().encode(",")))
  .pipeThrough(new TextDecoderStream());
```



example
-------

Divide a stream after semi-colons, keeping the semi-colons in the output:
```ts
import { DelimiterStream } from "https://deno.land/std@$STD_VERSION/streams/delimiter_stream.ts";
const res = await fetch("https://example.com/file.js");
const parts = res.body!
  .pipeThrough(
    new DelimiterStream(
      new TextEncoder().encode(";"),
      { disposition: "suffix" },
    )
  )
  .pipeThrough(new TextDecoderStream());
```


*   **param**: `delimiter` 

    Delimiter byte sequence

*   **param**: `options` 

    Options for the transform stream

*   **return**: Transform stream


______
/. 🚀 DelimiterStream constructors
==================================



______
/. 🚀 :ctor: DelimiterStream 🟥
-------------------------------


```ts
new DelimiterStream(delimiter:Uint8Array, options?:DelimiterStreamOptions)
```




______
/. 🚀 :class: streams:LimitedBytesTransformStream 🟢
----------------------------------------------------


```ts
class LimitedBytesTransformStream extends TransformStream<Uint8Array, Uint8Array> { ... }
```

A TransformStream that will only read & enqueue `size` amount of bytes.
This operation is chunk based and not BYOB based,
and as such will read more than needed.

if options.error is set, then instead of terminating the stream,
an error will be thrown.

```ts
import { LimitedBytesTransformStream } from "https://deno.land/std@$STD_VERSION/streams/limited_bytes_transform_stream.ts";
const res = await fetch("https://example.com");
const parts = res.body!
  .pipeThrough(new LimitedBytesTransformStream(512 * 1024));
```



______
/. 🚀 LimitedBytesTransformStream constructors
==============================================



______
/. 🚀 :ctor: LimitedBytesTransformStream 🟥
-------------------------------------------


```ts
new LimitedBytesTransformStream(size:number, options:{ error?: boolean })
```




______
/. 🚀 :class: streams:LimitedTransformStream 🟢
-----------------------------------------------


```ts
class LimitedTransformStream<T> extends TransformStream<T, T> { ... }
```

A TransformStream that will only read & enqueue `size` amount of chunks.

if options.error is set, then instead of terminating the stream,
an error will be thrown.

```ts
import { LimitedTransformStream } from "https://deno.land/std@$STD_VERSION/streams/limited_transform_stream.ts";
const res = await fetch("https://example.com");
const parts = res.body!.pipeThrough(new LimitedTransformStream(50));
```



______
/. 🚀 LimitedTransformStream constructors
=========================================



______
/. 🚀 :ctor: LimitedTransformStream 🟥
--------------------------------------


```ts
new LimitedTransformStream(size:number, options:{ error?: boolean })
```




______
/. 🚀 :class: streams:TextDelimiterStream 🟢
--------------------------------------------


```ts
class TextDelimiterStream extends TransformStream<string, string> { ... }
```

Transform a stream into a stream where each chunk is divided by a given delimiter.

```ts
import { TextDelimiterStream } from "https://deno.land/std@$STD_VERSION/streams/text_delimiter_stream.ts";
const res = await fetch("https://example.com");
const parts = res.body!
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextDelimiterStream("foo"));
```



______
/. 🚀 TextDelimiterStream constructors
======================================



______
/. 🚀 :ctor: TextDelimiterStream 🟥
-----------------------------------


```ts
new TextDelimiterStream(delimiter:string, options?:DelimiterStreamOptions)
```




______
/. 🚀 :class: streams:TextLineStream 🟢
---------------------------------------


```ts
class TextLineStream extends TransformStream<string, string> { ... }
```

Transform a stream into a stream where each chunk is divided by a newline,
be it `\n` or `\r\n`. `\r` can be enabled via the `allowCR` option.



example
-------

```ts
import { TextLineStream } from "https://deno.land/std@$STD_VERSION/streams/text_line_stream.ts";
const res = await fetch("https://example.com");
const lines = res.body!
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream());
```



______
/. 🚀 TextLineStream constructors
=================================



______
/. 🚀 :ctor: TextLineStream 🟥
------------------------------


```ts
new TextLineStream(options:TextLineStreamOptions)
```




______
/. 🚀 :fun: streams:copy 🟩
---------------------------


```ts
function copy( src:Reader, dst:Writer, options?:{ bufSize?: number } ): Promise<number>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream.pipeTo} instead.

Copies from `src` to `dst` until either EOF (`null`) is read from `src` or
an error occurs. It resolves to the number of bytes copied or rejects with
the first error encountered while copying.

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";

const source = await Deno.open("my_file.txt");
const bytesCopied1 = await copy(source, Deno.stdout);
const destination = await Deno.create("my_file_2.txt");
const bytesCopied2 = await copy(source, destination);
```


*   **param**: `src` 

    The source to copy from

*   **param**: `dst` 

    The destination to copy to

*   **param**: `options` 

    Can be used to tune size of the buffer. Default size is 32kB



______
/. 🚀 :fun: streams:earlyZipReadableStreams 🟩
----------------------------------------------


```ts
function earlyZipReadableStreams<<T>>( ...streams:ReadableStream[] ): ReadableStream<T>
```

Merge multiple streams into a single one, taking order into account, and each stream
will wait for a chunk to enqueue before the next stream can append another chunk.
If a stream ends before other ones, the others will be cancelled.



______
/. 🚀 :fun: streams:iterateReader 🟩
------------------------------------


```ts
function iterateReader( r:Reader, options?:{ bufSize?: number } ): AsyncIterableIterator<Uint8Array>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} instead.

Turns a Reader, `r`, into an async iterator.

```ts
import { iterateReader } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";

let f = await Deno.open("/etc/passwd");
for await (const chunk of iterateReader(f)) {
console.log(chunk);
}
f.close();
```

Second argument can be used to tune size of a buffer.
Default size of the buffer is 32kB.

```ts
import { iterateReader } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";

let f = await Deno.open("/etc/passwd");
const it = iterateReader(f, {
bufSize: 1024 * 1024
});
for await (const chunk of it) {
console.log(chunk);
}
f.close();
```



______
/. 🚀 :fun: streams:iterateReaderSync 🟩
----------------------------------------


```ts
function iterateReaderSync( r:ReaderSync, options?:{ bufSize?: number } ): IterableIterator<Uint8Array>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} instead.

Turns a ReaderSync, `r`, into an iterator.

```ts
import { iterateReaderSync } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";

let f = Deno.openSync("/etc/passwd");
for (const chunk of iterateReaderSync(f)) {
console.log(chunk);
}
f.close();
```

Second argument can be used to tune size of a buffer.
Default size of the buffer is 32kB.

```ts
import { iterateReaderSync } from "https://deno.land/std@$STD_VERSION/streams/iterate_reader.ts";

let f = await Deno.open("/etc/passwd");
const iter = iterateReaderSync(f, {
bufSize: 1024 * 1024
});
for (const chunk of iter) {
console.log(chunk);
}
f.close();
```

Iterator uses an internal buffer of fixed size for efficiency; it returns
a view on that buffer on each iteration. It is therefore caller's
responsibility to copy contents of the buffer if needed; otherwise the
next iteration will overwrite contents of previously returned chunk.



______
/. 🚀 :fun: streams:mergeReadableStreams 🟩
-------------------------------------------


```ts
function mergeReadableStreams<<T>>( ...streams:ReadableStream[] ): ReadableStream<T>
```

Merge multiple streams into a single one, not taking order into account.
If a stream ends before other ones, the other will continue adding data,
and the finished one will not add any more data.



______
/. 🚀 :fun: streams:readAll 🟩
------------------------------


```ts
function readAll( r:Reader ): Promise<Uint8Array>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} and {@linkcode import("./to_array_buffer.ts").toArrayBuffer} instead.

Read Reader `r` until EOF (`null`) and resolve to the content as
Uint8Array`.

```ts
import { Buffer } from "https://deno.land/std@$STD_VERSION/io/buffer.ts";
import { readAll } from "https://deno.land/std@$STD_VERSION/streams/read_all.ts";

// Example from stdin
const stdinContent = await readAll(Deno.stdin);

// Example from file
const file = await Deno.open("my_file.txt", {read: true});
const myFileContent = await readAll(file);
file.close();

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Buffer(myData.buffer);
const bufferContent = await readAll(reader);
```



______
/. 🚀 :fun: streams:readAllSync 🟩
----------------------------------


```ts
function readAllSync( r:ReaderSync ): Uint8Array
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} and {@linkcode import("./to_array_buffer.ts").toArrayBuffer} instead.

Synchronously reads Reader `r` until EOF (`null`) and returns the content
as `Uint8Array`.

```ts
import { Buffer } from "https://deno.land/std@$STD_VERSION/io/buffer.ts";
import { readAllSync } from "https://deno.land/std@$STD_VERSION/streams/read_all.ts";

// Example from stdin
const stdinContent = readAllSync(Deno.stdin);

// Example from file
const file = Deno.openSync("my_file.txt", {read: true});
const myFileContent = readAllSync(file);
file.close();

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Buffer(myData.buffer);
const bufferContent = readAllSync(reader);
```



______
/. 🚀 :fun: streams:readableStreamFromReader 🟩
-----------------------------------------------


```ts
function readableStreamFromReader( reader: Reader | (Reader & Closer), options:ReadableStreamFromReaderOptions ): ReadableStream<Uint8Array>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} directly instead.

Create a `ReadableStream<Uint8Array>` from a `Reader`.

When the pull algorithm is called on the stream, a chunk from the reader
will be read.  When `null` is returned from the reader, the stream will be
closed along with the reader (if it is also a `Closer`).

An example converting a `Deno.FsFile` into a readable stream:

```ts
import { readableStreamFromReader } from "https://deno.land/std@$STD_VERSION/streams/readable_stream_from_reader.ts";

const file = await Deno.open("./file.txt", { read: true });
const fileStream = readableStreamFromReader(file);
```



______
/. 🚀 :fun: streams:readerFromIterable 🟩
-----------------------------------------


```ts
function readerFromIterable( iterable: Iterable<Uint8Array> | AsyncIterable<Uint8Array> ): Reader
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream.from} instead.

Create a `Reader` from an iterable of `Uint8Array`s.

```ts
import { readerFromIterable } from "https://deno.land/std@$STD_VERSION/streams/reader_from_iterable.ts";
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";

const file = await Deno.open("metrics.txt", { write: true });
const reader = readerFromIterable((async function* () {
while (true) {
await new Promise((r) => setTimeout(r, 1000));
const message = `data: ${JSON.stringify(Deno.metrics())}\n\n`;
yield new TextEncoder().encode(message);
}
})());
await copy(reader, file);
```



______
/. 🚀 :fun: streams:readerFromStreamReader 🟩
---------------------------------------------


```ts
function readerFromStreamReader( streamReader:ReadableStreamDefaultReader<Uint8Array> ): Reader
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStreamDefaultReader} directly.

Create a `Reader` from a `ReadableStreamDefaultReader`.



example
-------

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";
import { readerFromStreamReader } from "https://deno.land/std@$STD_VERSION/streams/reader_from_stream_reader.ts";

const res = await fetch("https://deno.land");
const file = await Deno.open("./deno.land.html", { create: true, write: true });

const reader = readerFromStreamReader(res.body!.getReader());
await copy(reader, file);
file.close();
```



______
/. 🚀 :fun: streams:toArrayBuffer 🟩
------------------------------------


```ts
function toArrayBuffer( readableStream:ReadableStream<Uint8Array> ): Promise<ArrayBuffer>
```




______
/. 🚀 :fun: streams:toBlob 🟩
-----------------------------


```ts
function toBlob( readableStream:ReadableStream ): Promise<Blob>
```




______
/. 🚀 :fun: streams:toJson 🟩
-----------------------------


```ts
function toJson( readableStream:ReadableStream ): Promise<unknown>
```




______
/. 🚀 :fun: streams:toText 🟩
-----------------------------


```ts
function toText( readableStream:ReadableStream ): Promise<string>
```




______
/. 🚀 :fun: streams:toTransformStream 🟩
----------------------------------------


```ts
function toTransformStream<<I, O>>( transformer:(src:ReadableStream<I>) =>  Iterable<O> | AsyncIterable<O>, writableStrategy?:QueuingStrategy<I>, readableStrategy?:QueuingStrategy<O> ): TransformStream<I, O>
```

Convert the generator function into a TransformStream.

```ts
import { toTransformStream } from "https://deno.land/std@$STD_VERSION/streams/to_transform_stream.ts";

const readable = ReadableStream.from([0, 1, 2])
  .pipeThrough(toTransformStream(async function* (src) {
    for await (const chunk of src) {
      yield chunk * 100;
    }
  }));

for await (const chunk of readable) {
  console.log(chunk);
}
// output: 0, 100, 200
```


*   **param**: `transformer` 

    A function to transform.

*   **param**: `writableStrategy` 

    An object that optionally defines a queuing strategy for the stream.

*   **param**: `readableStrategy` 

    An object that optionally defines a queuing strategy for the stream.



______
/. 🚀 :fun: streams:writableStreamFromWriter 🟩
-----------------------------------------------


```ts
function writableStreamFromWriter( writer:Writer, options:WritableStreamFromWriterOptions ): WritableStream<Uint8Array>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode WritableStream} directly.

Create a `WritableStream` from a `Writer`.



______
/. 🚀 :fun: streams:writeAll 🟩
-------------------------------


```ts
function writeAll( w:Writer, arr:Uint8Array ): Promise<void>
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode WritableStream}, {@linkcode ReadableStream.from} and {@linkcode ReadableStream.pipeTo} instead.

Write all the content of the array buffer (`arr`) to the writer (`w`).

```ts
import { Buffer } from "https://deno.land/std@$STD_VERSION/io/buffer.ts";
import { writeAll } from "https://deno.land/std@$STD_VERSION/streams/write_all.ts";

// Example writing to stdout
let contentBytes = new TextEncoder().encode("Hello World");
await writeAll(Deno.stdout, contentBytes);

// Example writing to file
contentBytes = new TextEncoder().encode("Hello World");
const file = await Deno.open('test.file', {write: true});
await writeAll(file, contentBytes);
file.close();

// Example writing to buffer
contentBytes = new TextEncoder().encode("Hello World");
const writer = new Buffer();
await writeAll(writer, contentBytes);
console.log(writer.bytes().length);  // 11
```



______
/. 🚀 :fun: streams:writeAllSync 🟩
-----------------------------------


```ts
function writeAllSync( w:WriterSync, arr:Uint8Array ): void
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode WritableStream}, {@linkcode ReadableStream.from} and {@linkcode ReadableStream.pipeTo} instead.

Synchronously write all the content of the array buffer (`arr`) to the
writer (`w`).

```ts
import { Buffer } from "https://deno.land/std@$STD_VERSION/io/buffer.ts";
import { writeAllSync } from "https://deno.land/std@$STD_VERSION/streams/write_all.ts";

// Example writing to stdout
let contentBytes = new TextEncoder().encode("Hello World");
writeAllSync(Deno.stdout, contentBytes);

// Example writing to file
contentBytes = new TextEncoder().encode("Hello World");
const file = Deno.openSync('test.file', {write: true});
writeAllSync(file, contentBytes);
file.close();

// Example writing to buffer
contentBytes = new TextEncoder().encode("Hello World");
const writer = new Buffer();
writeAllSync(writer, contentBytes);
console.log(writer.bytes().length);  // 11
```



______
/. 🚀 :fun: streams:writerFromStreamWriter 🟩
---------------------------------------------


```ts
function writerFromStreamWriter( streamWriter:WritableStreamDefaultWriter<Uint8Array> ): Writer
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode WritableStreamDefaultWriter} directly.

Create a `Writer` from a `WritableStreamDefaultWriter`.



example
-------

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";
import { writerFromStreamWriter } from "https://deno.land/std@$STD_VERSION/streams/writer_from_stream_writer.ts";

const file = await Deno.open("./deno.land.html", { read: true });

const writableStream = new WritableStream({
  write(chunk): void {
    console.log(chunk);
  },
});
const writer = writerFromStreamWriter(writableStream.getWriter());
await copy(file, writer);
file.close();
```



______
/. 🚀 :fun: streams:zipReadableStreams 🟩
-----------------------------------------


```ts
function zipReadableStreams<<T>>( ...streams:ReadableStream[] ): ReadableStream<T>
```

Merge multiple streams into a single one, taking order into account, and each stream
will wait for a chunk to enqueue before the next stream can append another chunk.
If a stream ends before other ones, the others will continue adding data in order,
and the finished one will not add any more data.



______
/. 🚀 :interface: DelimiterStreamOptions
----------------------------------------


    interface DelimiterStreamOptions






Properties

*   disposition : DelimiterDisposition

    Disposition of the delimiter.
    



______
/. 🚀 :interface: ReadableStreamFromReaderOptions
-------------------------------------------------


    interface ReadableStreamFromReaderOptions



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode ReadableStream} directly instead.





Properties

*   autoClose : boolean

    If the `reader` is also a `Closer`, automatically close the `reader`
    when `EOF` is encountered, or a read error occurs.
    
    **default**: true
    
*   chunkSize : number

    The size of chunks to allocate to read, the default is ~16KiB, which is
    the maximum size that Deno operations can currently support.
    
*   strategy : { highWaterMark?:  number | undefined; size?: undefined }

    The queuing strategy to create the `ReadableStream` with.
    



______
/. 🚀 :interface: TextLineStreamOptions
---------------------------------------


    interface TextLineStreamOptions






Properties

*   allowCR : boolean

    Allow splitting by `\r`.
    
    **default**: false
    



______
/. 🚀 :interface: WritableStreamFromWriterOptions
-------------------------------------------------


    interface WritableStreamFromWriterOptions



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode WritableStream} directly.





Properties

*   autoClose : boolean

    If the `writer` is also a `Closer`, automatically close the `writer`
    when the stream is closed, aborted, or a write error occurs.
    
    **default**: true
    


______
/. 🚀 :alias: DelimiterDisposition
----------------------------------

    type DelimiterDisposition =  "suffix" | "prefix" | "discard"

Disposition of the delimiter.


______
/. 🚀 :lib: fmt [Stable] https://deno.land/std@0.207.0/fmt
==========================================================

______
/. 🚀 :lib: testing [Stable] https://deno.land/std@0.207.0/testing
==================================================================

______
/. 🚀 :lib: front_matter [Unstable] https://deno.land/std@0.207.0/front_matter
==============================================================================

Extracts
[front matter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/)
from strings.

{@linkcode createExtractor} and {@linkcode test} functions
to handle many forms of front matter.

Adapted from
[jxson/front-matter](https://github.com/jxson/front-matter/blob/36f139ef797bd9e5196a9ede03ef481d7fbca18e/index.js).

Supported formats:

- [`YAML`](./front_matter/yaml.ts)
- [`TOML`](./front_matter/toml.ts)
- [`JSON`](./front_matter/json.ts)

### Basic usage

example.md

```markdown
---
module: front_matter
tags:
  - yaml
  - toml
  - json
---

deno is awesome
```

example.ts

```ts
import {
  extract,
  test,
} from "https://deno.land/std@$STD_VERSION/front_matter/any.ts";

const str = await Deno.readTextFile("./example.md");

if (test(str)) {
  console.log(extract(str));
} else {
  console.log("document doesn't contain front matter");
}
```

```sh
$ deno run ./example.ts
{
  frontMatter: "module: front_matter\ntags:\n  - yaml\n  - toml\n  - json",
  body: "deno is awesome",
  attrs: { module: "front_matter", tags: [ "yaml", "toml", "json" ] }
}
```

The above example recognizes any of the supported formats, extracts metadata and
parses accordingly. Please note that in this case both the [YAML](#yaml) and
[TOML](#toml) parsers will be imported as dependencies.

If you need only one specific format then you can import the file named
respectively from [here](./front_matter).

### Advanced usage

```ts
import {
  createExtractor,
  Format,
  Parser,
  test as _test,
} from "https://deno.land/std@$STD_VERSION/front_matter/mod.ts";
import { parse } from "https://deno.land/std@$STD_VERSION/toml/parse.ts";

const extract = createExtractor({
  [Format.TOML]: parse as Parser,
  [Format.JSON]: JSON.parse as Parser,
});

export function test(str: string): boolean {
  return _test(str, [Format.TOML, Format.JSON]);
}
```

In this setup `extract()` and `test()` will work with TOML and JSON and only.
This way the YAML parser is not loaded if not needed. You can cherry-pick which
combination of formats are you supporting based on your needs.

### Delimiters

#### YAML

```markdown
---
these: are
---
```

```markdown
---yaml
all: recognized
---
```

```markdown
= yaml =
as: yaml
= yaml =
```

#### TOML

```markdown
---toml
this = 'is'
---
```

```markdown
= toml =
parsed = 'as'
toml = 'data'
= toml =
```

```markdown
+++
is = 'that'
not = 'cool?'
+++
```

#### JSON

```markdown
---json
{
  "and": "this"
}
---
```

```markdown
{
  "is": "JSON"
}
```



______
/. 🚀 :enum: Format
-------------------



deprecated
----------

(will be removed after 1.0.0) Use literal types `"yaml" | "toml" | "json" | "unknown"`.


*   YAML: "yaml"
*   TOML: "toml"
*   JSON: "json"
*   UNKNOWN: "unknown"


______
/. 🚀 :fun: front_matter:createExtractor 🟩
-------------------------------------------


```ts
function createExtractor( formats:Partial<Record< "yaml" | "toml" | "json" | "unknown", Parser>> ): Extractor
```

Factory that creates a function that extracts front matter from a string with the given parsers.
Supports YAML, TOML and JSON.


*   **param**: `formats` 

    A descriptor containing Format-parser pairs to use for each format.

*   **return**: A function that extracts front matter from a string with the given parsers.

```ts
import { createExtractor, Parser } from "https://deno.land/std@$STD_VERSION/front_matter/mod.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";
import { parse as parseYAML } from "https://deno.land/std@$STD_VERSION/yaml/parse.ts";
import { parse as parseTOML } from "https://deno.land/std@$STD_VERSION/toml/parse.ts";
const extractYAML = createExtractor({ yaml: parseYAML as Parser });
const extractTOML = createExtractor({ toml: parseTOML as Parser });
const extractJSON = createExtractor({ json: JSON.parse as Parser });
const extractYAMLOrJSON = createExtractor({
yaml: parseYAML as Parser,
json: JSON.parse as Parser,
});

let { attrs, body, frontMatter } = extractYAML<{ title: string }>("---\ntitle: Three dashes marks the spot\n---\nferret");
assertEquals(attrs.title, "Three dashes marks the spot");
assertEquals(body, "ferret");
assertEquals(frontMatter, "title: Three dashes marks the spot");

({ attrs, body, frontMatter } = extractTOML<{ title: string }>("---toml\ntitle = 'Three dashes followed by format marks the spot'\n---\n"));
assertEquals(attrs.title, "Three dashes followed by format marks the spot");
assertEquals(body, "");
assertEquals(frontMatter, "title = 'Three dashes followed by format marks the spot'");

({ attrs, body, frontMatter } = extractJSON<{ title: string }>("---json\n{\"title\": \"Three dashes followed by format marks the spot\"}\n---\ngoat"));
assertEquals(attrs.title, "Three dashes followed by format marks the spot");
assertEquals(body, "goat");
assertEquals(frontMatter, "{\"title\": \"Three dashes followed by format marks the spot\"}");

({ attrs, body, frontMatter } = extractYAMLOrJSON<{ title: string }>("---\ntitle: Three dashes marks the spot\n---\nferret"));
assertEquals(attrs.title, "Three dashes marks the spot");
assertEquals(body, "ferret");
assertEquals(frontMatter, "title: Three dashes marks the spot");

({ attrs, body, frontMatter } = extractYAMLOrJSON<{ title: string }>("---json\n{\"title\": \"Three dashes followed by format marks the spot\"}\n---\ngoat"));
assertEquals(attrs.title, "Three dashes followed by format marks the spot");
assertEquals(body, "goat");
assertEquals(frontMatter, "{\"title\": \"Three dashes followed by format marks the spot\"}");
```


______
/. 🚀 :fun: front_matter:test 🟩
--------------------------------


```ts
function test( str:string, formats?:[] ): boolean
```

Tests if a string has valid front matter. Supports YAML, TOML and JSON.


*   **param**: `str` 

    String to test.

*   **param**: `formats` 

    A list of formats to test for. Defaults to all supported formats.
    
    ```ts
    import { test, Format } from "https://deno.land/std@$STD_VERSION/front_matter/mod.ts";
    import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts";
    
    assert(test("---\ntitle: Three dashes marks the spot\n---\n"));
    assert(test("---toml\ntitle = 'Three dashes followed by format marks the spot'\n---\n"));
    assert(test("---json\n{\"title\": \"Three dashes followed by format marks the spot\"}\n---\n"));
    
    assert(!test("---json\n{\"title\": \"Three dashes followed by format marks the spot\"}\n---\n", [Format.YAML]));
    ```


______
/. 🚀 :alias: Extract
---------------------

    type Extract = { frontMatter: string; body: string; attrs: T }



______
/. 🚀 :alias: Extractor
-----------------------

    type Extractor = (str:string) => Extract<T>



______
/. 🚀 :alias: Parser
--------------------

    type Parser = (str:string) => T



______
/. 🚀 :lib: toml [Stable] https://deno.land/std@0.207.0/toml
============================================================

{@linkcode parse} and {@linkcode stringify} for handling
[TOML](https://toml.io/en/latest) encoded data. Be sure to read the supported
types as not every spec is supported at the moment and the handling in
TypeScript side is a bit different.

## Supported types and handling

- :heavy_check_mark: [Keys](https://toml.io/en/latest#keys)
- :exclamation: [String](https://toml.io/en/latest#string)
- :heavy_check_mark: [Multiline String](https://toml.io/en/latest#string)
- :heavy_check_mark: [Literal String](https://toml.io/en/latest#string)
- :exclamation: [Integer](https://toml.io/en/latest#integer)
- :heavy_check_mark: [Float](https://toml.io/en/latest#float)
- :heavy_check_mark: [Boolean](https://toml.io/en/latest#boolean)
- :heavy_check_mark:
  [Offset Date-time](https://toml.io/en/latest#offset-date-time)
- :heavy_check_mark:
  [Local Date-time](https://toml.io/en/latest#local-date-time)
- :heavy_check_mark: [Local Date](https://toml.io/en/latest#local-date)
- :exclamation: [Local Time](https://toml.io/en/latest#local-time)
- :heavy_check_mark: [Table](https://toml.io/en/latest#table)
- :heavy_check_mark: [Inline Table](https://toml.io/en/latest#inline-table)
- :exclamation: [Array of Tables](https://toml.io/en/latest#array-of-tables)

:exclamation: _Supported with warnings see [Warning](#Warning)._

### :warning: Warning

#### String

- Regex : Due to the spec, there is no flag to detect regex properly in a TOML
  declaration. So the regex is stored as string.

#### Integer

For **Binary** / **Octal** / **Hexadecimal** numbers, they are stored as string
to be not interpreted as Decimal.

#### Local Time

Because local time does not exist in JavaScript, the local time is stored as a
string.

#### Inline Table

Inline tables are supported. See below:

```toml
animal = { type = { name = "pug" } }
## Output { animal: { type: { name: "pug" } } }
animal = { type.name = "pug" }
## Output { animal: { type : { name : "pug" } }
animal.as.leaders = "tosin"
## Output { animal: { as: { leaders: "tosin" } } }
"tosin.abasi" = "guitarist"
## Output { tosin.abasi: "guitarist" }
```

#### Array of Tables

At the moment only simple declarations like below are supported:

```toml
[[bin]]
name = "deno"
path = "cli/main.rs"

[[bin]]
name = "deno_core"
path = "src/foo.rs"

[[nib]]
name = "node"
path = "not_found"
```

will output:

```json
{
  "bin": [
    { "name": "deno", "path": "cli/main.rs" },
    { "name": "deno_core", "path": "src/foo.rs" }
  ],
  "nib": [{ "name": "node", "path": "not_found" }]
}
```

This module is browser compatible.



example
-------

```ts
import {
  parse,
  stringify,
} from "https://deno.land/std@$STD_VERSION/toml/mod.ts";
const obj = {
  bin: [
    { name: "deno", path: "cli/main.rs" },
    { name: "deno_core", path: "src/foo.rs" },
  ],
  nib: [{ name: "node", path: "not_found" }],
};
const tomlString = stringify(obj);
console.log(tomlString);

// =>
// [[bin]]
// name = "deno"
// path = "cli/main.rs"

// [[bin]]
// name = "deno_core"
// path = "src/foo.rs"

// [[nib]]
// name = "node"
// path = "not_found"

const tomlObject = parse(tomlString);
console.log(tomlObject);

// =>
// {
//   bin: [
//     { name: "deno", path: "cli/main.rs" },
//     { name: "deno_core", path: "src/foo.rs" }
//   ],
//   nib: [ { name: "node", path: "not_found" } ]
// }
```




______
/. 🚀 :fun: toml:stringify 🟩
-----------------------------


```ts
function stringify( srcObj:Record<string, unknown>, fmtOptions?:FormatOptions ): string
```

Stringify dumps source object into TOML string and returns it.

*   **param**: `srcObj` 

*   **param**: `fmtOptions` 

    format options

*   **param**: `fmtOptions.keyAlignment` 

    whether to algin key



______
/. 🚀 :interface: FormatOptions
-------------------------------


    interface FormatOptions






Properties

*   keyAlignment : boolean


______
/. 🚀 :variable: parse
----------------------

    const parse

Parse parses TOML string into an object.

*   **param**: `tomlString` 


______
/. 🚀 :lib: fs [Stable] https://deno.land/std@0.207.0/fs
========================================================

Helpers for working with the filesystem.




______
/. 🚀 :class: fs:SubdirectoryMoveError 🟢
-----------------------------------------


```ts
class SubdirectoryMoveError extends Error { ... }
```




______
/. 🚀 SubdirectoryMoveError constructors
========================================



______
/. 🚀 :ctor: SubdirectoryMoveError 🟥
-------------------------------------


```ts
new SubdirectoryMoveError(src: string | URL, dest: string | URL)
```




______
/. 🚀 :class: fs:WalkError 🟢
-----------------------------


```ts
class WalkError extends Error { ... }
```




______
/. 🚀 WalkError constructors
============================



______
/. 🚀 :ctor: WalkError 🟥
-------------------------


```ts
new WalkError(cause:unknown, path:string)
```



*   cause: unknown
*   name: string
*   path: string
______
/. 🚀 :enum: EOL
----------------

Platform-specific conventions for the line ending format (i.e., the "end-of-line").



deprecated
----------

(will be removed in 0.209.0) This will be replaced by an
OS-dependent `EOL` constant.


*   LF: "
"
*   CRLF: "
"


______
/. 🚀 :fun: fs:emptyDir 🟩
--------------------------


```ts
function emptyDir( dir: string | URL ): Promise<void>
```

Ensures that a directory is empty.
Deletes directory contents if the directory is not empty.
If the directory does not exist, it is created.
The directory itself is not deleted.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { emptyDir } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

emptyDir("./foo"); // returns a promise
```



______
/. 🚀 :fun: fs:emptyDirSync 🟩
------------------------------


```ts
function emptyDirSync( dir: string | URL ): void
```

Ensures that a directory is empty.
Deletes directory contents if the directory is not empty.
If the directory does not exist, it is created.
The directory itself is not deleted.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { emptyDirSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

emptyDirSync("./foo"); // void
```



______
/. 🚀 :fun: fs:ensureDir 🟩
---------------------------


```ts
function ensureDir( dir: string | URL ): Promise<void>
```

Ensures that the directory exists.
If the directory structure does not exist, it is created. Like mkdir -p.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { ensureDir } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureDir("./bar"); // returns a promise
```



______
/. 🚀 :fun: fs:ensureDirSync 🟩
-------------------------------


```ts
function ensureDirSync( dir: string | URL ): void
```

Ensures that the directory exists.
If the directory structure does not exist, it is created. Like mkdir -p.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { ensureDirSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureDirSync("./ensureDirSync"); // void
```



______
/. 🚀 :fun: fs:ensureFile 🟩
----------------------------


```ts
function ensureFile( filePath: string | URL )
```

Ensures that the file exists.
If the file that is requested to be created is in directories that do not
exist.
these directories are created. If the file already exists,
it is NOTMODIFIED.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { ensureFile } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureFile("./folder/targetFile.dat"); // returns promise
```



______
/. 🚀 :fun: fs:ensureFileSync 🟩
--------------------------------


```ts
function ensureFileSync( filePath: string | URL )
```

Ensures that the file exists.
If the file that is requested to be created is in directories that do not
exist,
these directories are created. If the file already exists,
it is NOT MODIFIED.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { ensureFileSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureFileSync("./folder/targetFile.dat"); // void
```



______
/. 🚀 :fun: fs:ensureLink 🟩
----------------------------


```ts
function ensureLink( src: string | URL, dest: string | URL ): Promise<void>
```

Ensures that the hard link exists.
If the directory structure does not exist, it is created.



example
-------

```ts
import { ensureSymlink } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureSymlink("./folder/targetFile.dat", "./folder/targetFile.link.dat"); // returns promise
```


*   **param**: `src` 

    the source file path. Directory hard links are not allowed.

*   **param**: `dest` 

    the destination link path



______
/. 🚀 :fun: fs:ensureLinkSync 🟩
--------------------------------


```ts
function ensureLinkSync( src: string | URL, dest: string | URL ): void
```

Ensures that the hard link exists.
If the directory structure does not exist, it is created.



example
-------

```ts
import { ensureSymlinkSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

ensureSymlinkSync("./folder/targetFile.dat", "./folder/targetFile.link.dat"); // void
```


*   **param**: `src` 

    the source file path. Directory hard links are not allowed.

*   **param**: `dest` 

    the destination link path



______
/. 🚀 :fun: fs:ensureSymlink 🟩
-------------------------------


```ts
function ensureSymlink( target: string | URL, linkName: string | URL ): Promise<void>
```

Ensures that the link exists, and points to a valid file.
If the directory structure does not exist, it is created.


*   **param**: `target` 

    the source file path

*   **param**: `linkName` 

    the destination link path



______
/. 🚀 :fun: fs:ensureSymlinkSync 🟩
-----------------------------------


```ts
function ensureSymlinkSync( target: string | URL, linkName: string | URL ): void
```

Ensures that the link exists, and points to a valid file.
If the directory structure does not exist, it is created.


*   **param**: `target` 

    the source file path

*   **param**: `linkName` 

    the destination link path



______
/. 🚀 :fun: fs:exists 🟩
------------------------


```ts
function exists( path: string | URL, options?:ExistsOptions ): Promise<boolean>
```

Test whether or not the given path exists by checking with the file system. Please consider to check if the path is readable and either a file or a directory by providing additional `options`:

```ts
import { exists } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
const isReadableDir = await exists("./foo", {
  isReadable: true,
  isDirectory: true
});
const isReadableFile = await exists("./bar", {
  isReadable: true,
  isFile: true
});
```

Note: Do not use this function if performing a check before another operation on that file. Doing so creates a race condition. Instead, perform the actual file operation directly.

Bad:
```ts
import { exists } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

if (await exists("./foo")) {
  await Deno.remove("./foo");
}
```

Good:
```ts
// Notice no use of exists
try {
  await Deno.remove("./foo", { recursive: true });
} catch (error) {
  if (!(error instanceof Deno.errors.NotFound)) {
    throw error;
  }
  // Do nothing...
}
```
:unsupported: @see https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use


______
/. 🚀 :fun: fs:existsSync 🟩
----------------------------


```ts
function existsSync( path: string | URL, options?:ExistsOptions ): boolean
```

Test whether or not the given path exists by checking with the file system. Please consider to check if the path is readable and either a file or a directory by providing additional `options`:

```ts
import { existsSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
const isReadableDir = existsSync("./foo", {
  isReadable: true,
  isDirectory: true
});
const isReadableFile = existsSync("./bar", {
  isReadable: true,
  isFile: true
});
```

Note: do not use this function if performing a check before another operation on that file. Doing so creates a race condition. Instead, perform the actual file operation directly.

Bad:
```ts
import { existsSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

if (existsSync("./foo")) {
  Deno.removeSync("./foo");
}
```

Good:
```ts
// Notice no use of existsSync
try {
  Deno.removeSync("./foo", { recursive: true });
} catch (error) {
  if (!(error instanceof Deno.errors.NotFound)) {
    throw error;
  }
  // Do nothing...
}
```
:unsupported: @see https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use


______
/. 🚀 :fun: fs:expandGlob 🟩
----------------------------


```ts
function expandGlob( glob: string | URL, object:ExpandGlobOptions ): AsyncIterableIterator<WalkEntry>
```

Expand the glob string from the specified `root` directory and yield each
result as a `WalkEntry` object.

See [`globToRegExp()`](../path/glob.ts#globToRegExp) for details on supported
syntax.



example
-------

```ts
import { expandGlob } from "https://deno.land/std@$STD_VERSION/fs/expand_glob.ts";
for await (const file of expandGlob("**\/*.ts")) {
  console.log(file);
}
```



______
/. 🚀 :fun: fs:expandGlobSync 🟩
--------------------------------


```ts
function expandGlobSync( glob: string | URL, object:ExpandGlobOptions ): IterableIterator<WalkEntry>
```

Synchronous version of `expandGlob()`.



example
-------

```ts
import { expandGlobSync } from "https://deno.land/std@$STD_VERSION/fs/expand_glob.ts";
for (const file of expandGlobSync("**\/*.ts")) {
  console.log(file);
}
```



______
/. 🚀 :fun: fs:move 🟩
----------------------


```ts
function move( src: string | URL, dest: string | URL, object:MoveOptions )
```

Moves a file or directory.



example
-------

```ts
import { move } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

move("./foo", "./bar"); // returns a promise
```



______
/. 🚀 :fun: fs:moveSync 🟩
--------------------------


```ts
function moveSync( src: string | URL, dest: string | URL, object:MoveOptions )
```

Moves a file or directory synchronously.


example
-------

```ts
import { moveSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

moveSync("./foo", "./bar"); // void
```



______
/. 🚀 :fun: fs:copy 🟩
----------------------


```ts
function copy( src: string | URL, dest: string | URL, options:CopyOptions ): Promise<void>
```

Copy a file or directory. The directory can have contents. Like `cp -r`.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/fs/copy.ts";
copy("./foo", "./bar"); // returns a promise
```


*   **param**: `src` 

    the file/directory path.
    Note that if `src` is a directory it will copy everything inside
    of this directory, not the entire directory itself

*   **param**: `dest` 

    the destination path. Note that if `src` is a file, `dest` cannot
    be a directory

*   **param**: `options` 



______
/. 🚀 :fun: fs:copySync 🟩
--------------------------


```ts
function copySync( src: string | URL, dest: string | URL, options:CopyOptions ): void
```

Copy a file or directory. The directory can have contents. Like `cp -r`.
Requires the `--allow-read` and `--allow-write` flag.



example
-------

```ts
import { copySync } from "https://deno.land/std@$STD_VERSION/fs/copy.ts";
copySync("./foo", "./bar"); // void
```

*   **param**: `src` 

    the file/directory path.
    Note that if `src` is a directory it will copy everything inside
    of this directory, not the entire directory itself

*   **param**: `dest` 

    the destination path. Note that if `src` is a file, `dest` cannot
    be a directory

*   **param**: `options` 



______
/. 🚀 :fun: fs:walk 🟩
----------------------


```ts
function walk( root: string | URL, object:WalkOptions ): AsyncIterableIterator<WalkEntry>
```

Walks the file tree rooted at root, yielding each file or directory in the
tree filtered according to the given options.



example
-------

```ts
import { walk } from "https://deno.land/std@$STD_VERSION/fs/walk.ts";
import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts";

for await (const entry of walk(".")) {
  console.log(entry.path);
  assert(entry.isFile);
}
```



______
/. 🚀 :fun: fs:walkSync 🟩
--------------------------


```ts
function walkSync( root: string | URL, object:WalkOptions ): IterableIterator<WalkEntry>
```

Same as walk() but uses synchronous ops



______
/. 🚀 :fun: fs:detect 🟩
------------------------


```ts
function detect( content:string ):  EOL | null
```

Detect the EOL character for string input.
returns null if no newline.



example
-------

```ts
import { detect, EOL } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

const CRLFinput = "deno\r\nis not\r\nnode";
const Mixedinput = "deno\nis not\r\nnode";
const LFinput = "deno\nis not\nnode";
const NoNLinput = "deno is not node";

detect(LFinput); // output EOL.LF
detect(CRLFinput); // output EOL.CRLF
detect(Mixedinput); // output EOL.CRLF
detect(NoNLinput); // output null
```



______
/. 🚀 :fun: fs:format 🟩
------------------------


```ts
function format( content:string, eol:EOL ): string
```

Format the file to the targeted EOL.



example
-------

```ts
import { EOL, format } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";

const CRLFinput = "deno\r\nis not\r\nnode";

format(CRLFinput, EOL.LF); // output "deno\nis not\nnode"
```



______
/. 🚀 :interface: ExistsOptions
-------------------------------


    interface ExistsOptions






Properties

*   isReadable : boolean

    When `true`, will check if the path is readable by the user as well.
    **default**: false
    
*   isDirectory : boolean

    When `true`, will check if the path is a directory as well.
    Directory symlinks are included.
    **default**: false
    
*   isFile : boolean

    When `true`, will check if the path is a file as well.
    File symlinks are included.
    **default**: false
    



______
/. 🚀 :interface: ExpandGlobOptions
-----------------------------------


    interface ExpandGlobOptions extends Omit<GlobOptions, "os">






Properties

*   root : string
*   exclude : string[]
*   includeDirs : boolean
*   followSymlinks : boolean
*   canonicalize : boolean

    Indicates whether the followed symlink's path should be canonicalized.
    This option works only if `followSymlinks` is not `false`.
    **default**: true
    



______
/. 🚀 :interface: CopyOptions
-----------------------------


    interface CopyOptions






Properties

*   overwrite : boolean

    overwrite existing file or directory.
    **default**: false
    
*   preserveTimestamps : boolean

    When `true`, will set last modification and access times to the ones of the
    original source files.
    When `false`, timestamp behavior is OS-dependent.
    
    **default**: false
    



______
/. 🚀 :interface: WalkOptions
-----------------------------


    interface WalkOptions






Properties

*   maxDepth : number

    The maximum depth of the file tree to be walked recursively.
    **default**: Infinity
    
*   includeFiles : boolean

    Indicates whether file entries should be included or not.
    **default**: true
    
*   includeDirs : boolean

    Indicates whether directory entries should be included or not.
    **default**: true
    
*   includeSymlinks : boolean

    Indicates whether symlink entries should be included or not.
    This option is meaningful only if `followSymlinks` is set to `false`.
    **default**: true
    
*   followSymlinks : boolean

    Indicates whether symlinks should be resolved or not.
    **default**: false
    
*   canonicalize : boolean

    Indicates whether the followed symlink's path should be canonicalized.
    This option works only if `followSymlinks` is not `false`.
    **default**: true
    
*   exts : string[]

    List of file extensions used to filter entries.
    If specified, entries without the file extension specified by this option are excluded.
    **default**: undefined
    
*   match : RegExp[]

    List of regular expression patterns used to filter entries.
    If specified, entries that do not match the patterns specified by this option are excluded.
    **default**: undefined
    
*   skip : RegExp[]

    List of regular expression patterns used to filter entries.
    If specified, entries matching the patterns specified by this option are excluded.
    **default**: undefined
    



______
/. 🚀 :interface: WalkEntry
---------------------------


    interface WalkEntry extends [Deno.DirEntry]






Properties

*   path : string


______
/. 🚀 :variable: LF
-------------------

    const LF = "\n"



______
/. 🚀 :variable: CRLF
---------------------

    const CRLF = "\r\n"

End-of-line character for Windows platforms.


______
/. 🚀 :lib: ulid [Unstable] https://deno.land/std@0.207.0/ulid
==============================================================



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```


    import { TIME_MAX } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { TIME_LEN } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { RANDOM_LEN } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { monotonicFactory } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { ENCODING_LEN } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { ENCODING } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { encodeTime } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

    import { encodeRandom } from "https://deno.land/std@0.207.0/ulid/_util.ts"



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV
```


______
/. 🚀 :fun: ulid:decodeTime 🟩
------------------------------


```ts
function decodeTime( id:string ): number
```

Extracts the timestamp given a ULID



______
/. 🚀 :fun: ulid:ulid 🟩
------------------------


```ts
function ulid( seedTime:number ): string
```



example
-------

```ts
import { ulid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";
ulid(); // 01ARZ3NDEKTSV4RRFFQ69G5FAV

// You can also input a seed time which will consistently give you the same string for the time component
ulid(1469918176385); // 01ARYZ6S41TSV4RRFFQ69G5FAV
```


______
/. 🚀 :variable: monotonicUlid
------------------------------

    const monotonicUlid



example
-------

```ts
import { monotonicUlid } from "https://deno.land/std@$STD_VERSION/ulid/mod.ts";

// Strict ordering for the same timestamp, by incrementing the least-significant random bit by 1
monotonicUlid(150000); // 000XAL6S41ACTAV9WEVGEMMVR8
monotonicUlid(150000); // 000XAL6S41ACTAV9WEVGEMMVR9
monotonicUlid(150000); // 000XAL6S41ACTAV9WEVGEMMVRA
monotonicUlid(150000); // 000XAL6S41ACTAV9WEVGEMMVRB
monotonicUlid(150000); // 000XAL6S41ACTAV9WEVGEMMVRC

// Even if a lower timestamp is passed (or generated), it will preserve sort order
monotonicUlid(100000); // 000XAL6S41ACTAV9WEVGEMMVRD
```


______
/. 🚀 :lib: html [Unstable] https://deno.land/std@0.207.0/html
==============================================================

Functions for HTML tasks such as escaping or unescaping HTML entities




______
/. 🚀 :fun: html:escape 🟩
--------------------------


```ts
function escape( str:string )
```

Escapes text for safe interpolation into HTML text content and quoted attributes



example
-------

```ts
import { escape } from "https://deno.land/std@$STD_VERSION/html/entities.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

assertEquals(escape("<>'&AA"), "&lt;&gt;&#39;&amp;AA");

// characters that don't need to be escaped will be left alone,
// even if named HTML entities exist for them
assertEquals(escape("þð"), "þð");
```



______
/. 🚀 :fun: html:unescape 🟩
----------------------------


```ts
function unescape( str:string, options:Partial<UnescapeOptions> )
```

Unescapes HTML entities in text



example
-------

```ts
import { unescape } from "https://deno.land/std@$STD_VERSION/html/entities.ts";
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";

// default options (only handles &<>'" and numeric entities)
assertEquals(unescape("&lt;&gt;&apos;&amp;&#65;&#x41;"), "<>'&AA");
assertEquals(unescape("&thorn;&eth;"), "&thorn;&eth;");

// using the full named entity list from the HTML spec (~47K unminified)
import entityList from "https://deno.land/std@$STD_VERSION/html/named_entity_list.json" assert { type: "json" };
assertEquals(unescape("&thorn;&eth;", { entityList }), "þð");
```


______
/. 🚀 :alias: EntityList
------------------------

    type EntityList = Record<string, string>



______
/. 🚀 :alias: UnescapeOptions
-----------------------------

    type UnescapeOptions = { entityList: EntityList }



______
/. 🚀 :lib: url [Unstable] https://deno.land/std@0.207.0/url
============================================================

Utilities for working with URL paths.

This module is browser compatible.




______
/. 🚀 :fun: url:basename 🟩
---------------------------


```ts
function basename( url: string | URL, suffix?:string ): string
```

Return the last portion of a `URL`, or the host name if there is no path.
Trailing `/`s are ignored, and optional suffix is removed.



example
-------

```ts
import { basename } from "https://deno.land/std@$STD_VERSION/url/basename.ts";

// basename accepts a string or URL
console.log(basename("https://deno.land/std/assert/mod.ts"));  // "mod.ts"
console.log(basename(new URL("https://deno.land/std/assert/mod.ts"))); // "mod.ts"

// basename accepts an optional suffix to remove
console.log(basename(new URL("https://deno.land/std/assert/mod.ts"), ".ts")); // "mod"

// basename does not include query parameters or hash fragments
console.log(basename(new URL("https://deno.land/std/assert/mod.ts?a=b"))); // "mod.ts"
console.log(basename(new URL("https://deno.land/std/assert/mod.ts#header"))); // "mod.ts"

// If no path is present, the host name is returned
console.log(basename(new URL("https://deno.land/"))); // "deno.land"
```


*   **param**: `url` 

    - url to extract the final path segment from.

*   **param**: `suffix` 

    - optional suffix to remove from extracted name.

*   **return**: the last portion of the URL `path`, or the URL origin if there is no path.


______
/. 🚀 :fun: url:dirname 🟩
--------------------------


```ts
function dirname( url: string | URL ): URL
```

Return the directory path of a `URL`.  A directory path is the portion of a
`URL` up to but excluding the final path segment.  The final path segment,
along with any query or hash values are removed. If there is no path segment
then the URL origin is returned. Example, for the URL
`https://deno.land/std/path/mod.ts`, the directory path is
`https://deno.land/std/path`.



example
-------

```ts
import { dirname } from "https://deno.land/std@$STD_VERSION/url/dirname.ts";

console.log(dirname("https://deno.land/std/path/mod.ts?a=b").href); // "https://deno.land/std/path"
console.log(dirname("https://deno.land/").href); // "https://deno.land"
```


*   **param**: `url` 

    - url to extract the directory from.

*   **return**: a new URL containing the directory path of the URL.


______
/. 🚀 :fun: url:extname 🟩
--------------------------


```ts
function extname( url: string | URL ): string
```

Return the extension of the `URL` with leading period. The extension is
sourced from the path portion of the `URL`.  If there is no extension,
an empty string is returned.



example
-------

```ts
import { extname } from "https://deno.land/std@$STD_VERSION/url/extname.ts";

console.log(extname("https://deno.land/std/path/mod.ts")); // ".ts"
console.log(extname("https://deno.land/std/path/mod")); // ""
console.log(extname("https://deno.land/std/path/mod.ts?a=b")); // ".ts"
console.log(extname("https://deno.land/")); // ""
```


*   **param**: `url` 

    with extension

*   **return**: extension (e.g. for url ending with `index.html` returns `.html`)


______
/. 🚀 :fun: url:join 🟩
-----------------------


```ts
function join( url: string | URL, ...paths:string[] ): URL
```

Join a base `URL` and a series of `paths`, then normalizes the resulting URL.



example
-------

```ts
import { join } from "https://deno.land/std@$STD_VERSION/url/join.ts";

console.log(join("https://deno.land/", "std", "path", "mod.ts").href);
// Outputs: "https://deno.land/std/path/mod.ts"

console.log(join("https://deno.land", "//std", "path/", "/mod.ts").href);
// Outputs: "https://deno.land/path/mod.ts"
```


*   **param**: `url` 

    the base URL to be joined with the paths and normalized

*   **param**: `paths` 

    array of path segments to be joined to the base URL

*   **return**: a complete URL string containing the base URL joined with the paths


______
/. 🚀 :fun: url:normalize 🟩
----------------------------


```ts
function normalize( url: string | URL ): URL
```

Normalize the `URL`, resolving `'..'` and `'.'` segments and multiple
`'/'`s into `'//'` after protocol and remaining into `'/'`.



example
-------

```ts
import { normalize } from "https://deno.land/std@$STD_VERSION/url/normalize.ts";

console.log(normalize("https:///deno.land///std//assert//.//mod.ts").href);
// Outputs: "https://deno.land/std/path/mod.ts"

console.log(normalize("https://deno.land/std/assert/../async/retry.ts").href);
// Outputs: "https://deno.land/std/async/retry.ts"
```


*   **param**: `url` 

    to be normalized

*   **return**: normalized URL

______
/. 🚀 :lib: http [Unstable] https://deno.land/std@0.207.0/http
==============================================================

Provides user-friendly {@linkcode serve} on top of Deno's native HTTP server
and other utilities for creating HTTP servers and clients.

## File Server

A small program for serving local files over HTTP.

```sh
deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts
> HTTP server listening on http://localhost:4507/
```

## HTTP Status Code and Status Text

Helper for processing status code and status text.

## HTTP errors

Provides error classes for each HTTP error status code as well as utility
functions for handling HTTP errors in a structured way.

## Methods

Provides helper functions and types to work with HTTP method strings safely.

## Negotiation

A set of functions which can be used to negotiate content types, encodings and
languages when responding to requests.

> Note: some libraries include accept charset functionality by analyzing the
> `Accept-Charset` header. This is a legacy header that
> [clients omit and servers should ignore](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset)
> therefore is not provided.

## Cookie maps

An alternative to `cookie.ts` is `cookie_map.ts` which provides `CookieMap`,
`SecureCookieMap`, and `mergeHeaders` to manage request and response cookies
with the familiar `Map` interface.

## User agent handling

The {@linkcode UserAgent} class provides user agent string parsing, allowing
a user agent flag to be semantically understood.

For example to integrate the user agent provided in the header `User-Agent`
in an http request would look like this:

```ts
import { UserAgent } from "https://deno.land/std@$STD_VERSION/http/user_agent.ts";

Deno.serve((req) => {
  const userAgent = new UserAgent(req.headers.get("user-agent") ?? "");
  return new Response(`Hello, ${userAgent.browser.name}
    on ${userAgent.os.name} ${userAgent.os.version}!`);
});
```




______
/. 🚀 :class: http:Server 🟢
----------------------------


```ts
class Server { ... }
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.serve} instead.

Used to construct an HTTP server.



______
/. 🚀 Server constructors
=========================



______
/. 🚀 :ctor: Server 🟥
----------------------


```ts
new Server(serverInit:ServerInit)
```

Constructs a new HTTP Server instance.

```ts
import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const port = 4505;
const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
   "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });
```


*   **param**: `serverInit` 

    Options for running an HTTP server.



______
/. 🚀 Server methods
====================



______
/. 🚀 :method: Server.serve 🟨
------------------------------


```ts
function serve( listener:Deno.Listener )
```

Accept incoming connections on the given listener, and handle requests on
these connections with the given handler.

HTTP/2 support is only enabled if the provided Deno.Listener returns TLS
connections and was configured with "h2" in the ALPN protocols.

Throws a server closed error if called after the server has been closed.

Will always close the created listener.

```ts
import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
   "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ handler });
const listener = Deno.listen({ port: 4505 });

console.log("server listening on http://localhost:4505");

await server.serve(listener);
```


*   **param**: `listener` 

    The listener to accept connections from.



______
/. 🚀 :method: Server.listenAndServe 🟨
---------------------------------------


```ts
function listenAndServe(  )
```

Create a listener on the server, accept incoming connections, and handle
requests on these connections with the given handler.

If the server was constructed without a specified port, 80 is used.

If the server was constructed with the hostname omitted from the options, the
non-routable meta-address `0.0.0.0` is used.

Throws a server closed error if the server has been closed.

```ts
import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const port = 4505;
const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
   "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });

console.log("server listening on http://localhost:4505");

await server.listenAndServe();
```



______
/. 🚀 :method: Server.listenAndServeTls 🟨
------------------------------------------


```ts
function listenAndServeTls( certFile:string, keyFile:string )
```

Create a listener on the server, accept incoming connections, upgrade them
to TLS, and handle requests on these connections with the given handler.

If the server was constructed without a specified port, 443 is used.

If the server was constructed with the hostname omitted from the options, the
non-routable meta-address `0.0.0.0` is used.

Throws a server closed error if the server has been closed.

```ts
import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const port = 4505;
const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
   "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });

const certFile = "/path/to/certFile.crt";
const keyFile = "/path/to/keyFile.key";

console.log("server listening on https://localhost:4505");

await server.listenAndServeTls(certFile, keyFile);
```


*   **param**: `certFile` 

    The path to the file containing the TLS certificate.

*   **param**: `keyFile` 

    The path to the file containing the TLS private key.



______
/. 🚀 :method: Server.close 🟨
------------------------------


```ts
function close(  ): void
```

Immediately close the server listeners and associated HTTP connections.

Throws a server closed error if called after the server has been closed.



______
/. 🚀 :getter: Server.closed 🟦
-------------------------------


```ts
function closed(  ): boolean
```

Get whether the server is closed.



______
/. 🚀 :getter: Server.addrs 🟦
------------------------------


```ts
function addrs(  ): Deno.Addr[]
```

Get the list of network addresses the server is listening on.



______
/. 🚀 :class: http:ServerSentEventStream 🟢
-------------------------------------------


```ts
class ServerSentEventStream extends TransformStream<ServerSentEventMessage, Uint8Array> { ... }
```

Transforms server-sent message objects into strings for the client.

:unsupported: @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events}


example
-------

```ts
import {
  type ServerSentEventMessage,
  ServerSentEventStream,
} from "https://deno.land/std@$STD_VERSION/http/server_sent_event_stream.ts";

const stream = ReadableStream.from<ServerSentEventMessage>([
  { data: "hello there" }
]).pipeThrough(new ServerSentEventStream());
new Response(stream, {
  headers: {
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
  },
});
```



______
/. 🚀 ServerSentEventStream constructors
========================================



______
/. 🚀 :ctor: ServerSentEventStream 🟥
-------------------------------------


```ts
new ServerSentEventStream()
```




______
/. 🚀 :class: http:UserAgent 🟢
-------------------------------


```ts
class UserAgent { ... }
```




______
/. 🚀 UserAgent constructors
============================



______
/. 🚀 :ctor: UserAgent 🟥
-------------------------


```ts
new UserAgent(ua: string | null)
```

A representation of user agent string, which can be used to determine
environmental information represented by the string. All properties are
determined lazily.

```ts
import { UserAgent } from "https://deno.land/std@$STD_VERSION/http/user_agent.ts";

Deno.serve((req) => {
  const userAgent = new UserAgent(req.headers.get("user-agent") ?? "");
  return new Response(`Hello, ${userAgent.browser.name}
    on ${userAgent.os.name} ${userAgent.os.version}!`);
});
```



______
/. 🚀 UserAgent methods
=======================



______
/. 🚀 :getter: UserAgent.browser 🟦
-----------------------------------


```ts
function browser(  ): Browser
```

The name and version of the browser extracted from the user agent
string.



______
/. 🚀 :getter: UserAgent.cpu 🟦
-------------------------------


```ts
function cpu(  ): Cpu
```

The architecture of the CPU extracted from the user agent string.



______
/. 🚀 :getter: UserAgent.device 🟦
----------------------------------


```ts
function device(  ): Device
```

The model, type, and vendor of a device if present in a user agent
string.



______
/. 🚀 :getter: UserAgent.engine 🟦
----------------------------------


```ts
function engine(  ): Engine
```

The name and version of the browser engine in a user agent string.



______
/. 🚀 :getter: UserAgent.os 🟦
------------------------------


```ts
function os(  ): Os
```

The name and version of the operating system in a user agent string.



______
/. 🚀 :getter: UserAgent.ua 🟦
------------------------------


```ts
function ua(  ): string
```

A read only version of the user agent string related to the instance.



______
/. 🚀 :method: UserAgent.toJSON 🟨
----------------------------------


```ts
function toJSON(  )
```




______
/. 🚀 :method: UserAgent.toString 🟨
------------------------------------


```ts
function toString(  ): string
```




______
/. 🚀 :method: UserAgent.[Symbol.for("Deno.customInspect")] 🟨
--------------------------------------------------------------


```ts
function [Symbol.for("Deno.customInspect")]( inspect:(value:unknown) => string ): string
```




______
/. 🚀 :method: UserAgent.[Symbol.for("nodejs.util.inspect.custom")] 🟨
----------------------------------------------------------------------


```ts
function [Symbol.for("nodejs.util.inspect.custom")]( depth:number, options:any, inspect:(value:unknown, options?:unknown) => string ): string
```




______
/. 🚀 :fun: http:getCookies 🟩
------------------------------


```ts
function getCookies( headers:Headers ): Record<string, string>
```

Parse cookies of a header



example
-------

```ts
import { getCookies } from "https://deno.land/std@$STD_VERSION/http/cookie.ts";

const headers = new Headers();
headers.set("Cookie", "full=of; tasty=chocolate");

const cookies = getCookies(headers);
console.log(cookies); // { full: "of", tasty: "chocolate" }
```


*   **param**: `headers` 

    The headers instance to get cookies from

*   **return**: Object with cookie names as keys


______
/. 🚀 :fun: http:setCookie 🟩
-----------------------------


```ts
function setCookie( headers:Headers, cookie:Cookie ): void
```

Set the cookie header properly in the headers



example
-------

```ts
import {
  Cookie,
  setCookie,
} from "https://deno.land/std@$STD_VERSION/http/cookie.ts";

const headers = new Headers();
const cookie: Cookie = { name: "Space", value: "Cat" };
setCookie(headers, cookie);

const cookieHeader = headers.get("set-cookie");
console.log(cookieHeader); // Space=Cat
```


*   **param**: `headers` 

    The headers instance to set the cookie to

*   **param**: `cookie` 

    Cookie to set



______
/. 🚀 :fun: http:deleteCookie 🟩
--------------------------------


```ts
function deleteCookie( headers:Headers, name:string, attributes?:{ path?: string; domain?: string } ): void
```

Set the cookie header with empty value in the headers to delete it

> Note: Deleting a `Cookie` will set its expiration date before now. Forcing
> the browser to delete it.



example
-------

```ts
import { deleteCookie } from "https://deno.land/std@$STD_VERSION/http/cookie.ts";

const headers = new Headers();
deleteCookie(headers, "deno");

const cookieHeader = headers.get("set-cookie");
console.log(cookieHeader); // deno=; Expires=Thus, 01 Jan 1970 00:00:00 GMT
```


*   **param**: `headers` 

    The headers instance to delete the cookie from

*   **param**: `name` 

    Name of cookie

*   **param**: `attributes` 

    Additional cookie attributes



______
/. 🚀 :fun: http:getSetCookies 🟩
---------------------------------


```ts
function getSetCookies( headers:Headers ): Cookie[]
```

Parse set-cookies of a header



example
-------

```ts
import { getSetCookies } from "https://deno.land/std@$STD_VERSION/http/cookie.ts";

const headers = new Headers([
  ["Set-Cookie", "lulu=meow; Secure; Max-Age=3600"],
  ["Set-Cookie", "booya=kasha; HttpOnly; Path=/"],
]);

const cookies = getSetCookies(headers);
console.log(cookies); // [{ name: "lulu", value: "meow", secure: true, maxAge: 3600 }, { name: "booya", value: "kahsa", httpOnly: true, path: "/ }]
```


*   **param**: `headers` 

    The headers instance to get set-cookies from

*   **return**: List of cookies


______
/. 🚀 :fun: http:calculate 🟩
-----------------------------


```ts
function calculate( entity:Entity, options:ETagOptions ): Promise< string | undefined>
```

Calculate an ETag for an entity. When the entity is a specific set of data
it will be fingerprinted as a "strong" tag, otherwise if it is just file
information, it will be calculated as a weak tag.

```ts
import { calculate } from "https://deno.land/std@$STD_VERSION/http/etag.ts";
import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts"

const body = "hello deno!";

const etag = await calculate(body);
assert(etag);

const res = new Response(body, { headers: { etag } });
```



______
/. 🚀 :fun: http:ifMatch 🟩
---------------------------


```ts
function ifMatch( value: string | null, etag: string | undefined ): boolean
```

A helper function that takes the value from the `If-Match` header and a
calculated etag for the target. By using strong comparison, return `true` if
the values match, otherwise `false`.

See MDN's [`If-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)
article for more information on how to use this function.

```ts
import {
  calculate,
  ifMatch,
} from "https://deno.land/std@$STD_VERSION/http/etag.ts";
import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts"

const body = "hello deno!";

Deno.serve(async (req) => {
  const ifMatchValue = req.headers.get("if-match");
  const etag = await calculate(body);
  assert(etag);
  if (!ifMatchValue || ifMatch(ifMatchValue, etag)) {
    return new Response(body, { status: 200, headers: { etag } });
  } else {
    return new Response(null, { status: 412, statusText: "Precondition Failed"});
  }
});
```



______
/. 🚀 :fun: http:ifNoneMatch 🟩
-------------------------------


```ts
function ifNoneMatch( value: string | null, etag: string | undefined ): boolean
```

A helper function that takes the value from the `If-None-Match` header and
a calculated etag for the target entity and returns `false` if the etag for
the entity matches the supplied value, otherwise `true`.

See MDN's [`If-None-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)
article for more information on how to use this function.

```ts
import {
  calculate,
  ifNoneMatch,
} from "https://deno.land/std@$STD_VERSION/http/etag.ts";
import { assert } from "https://deno.land/std@$STD_VERSION/assert/assert.ts"

const body = "hello deno!";

Deno.serve(async (req) => {
  const ifNoneMatchValue = req.headers.get("if-none-match");
  const etag = await calculate(body);
  assert(etag);
  if (!ifNoneMatch(ifNoneMatchValue, etag)) {
    return new Response(null, { status: 304, headers: { etag } });
  } else {
    return new Response(body, { status: 200, headers: { etag } });
  }
});
```



______
/. 🚀 :fun: http:accepts 🟩
---------------------------


```ts
function accepts( request:Request ): string[]
```

Returns an array of media types accepted by the request, in order of
preference. If there are no media types supplied in the request, then any
media type selector will be returned.



example
-------

```ts
import { accepts } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: {
    "accept":
      "text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, *\/*;q=0.8",
  },
});

console.log(accepts(req));
// [
//   "text/html",
//   "application/xhtml+xml",
//   "image/webp",
//   "application/xml",
//   "*\/*",
// ]
```



______
/. 🚀 :fun: http:accepts 🟩
---------------------------


```ts
function accepts( request:Request, ...types:string[] ):  string | undefined
```

For a given set of media types, return the best match accepted in the
request. If no media type matches, then the function returns `undefined`.



example
-------

```ts
import { accepts } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: {
    "accept":
      "text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, *\/*;q=0.8",
  },
});

accepts(req, "text/html", "image/webp"); // "text/html";
```



______
/. 🚀 :fun: http:accepts 🟩
---------------------------


```ts
function accepts( request:Request, ...types:string[] ):  string | string[] | undefined
```




______
/. 🚀 :fun: http:acceptsEncodings 🟩
------------------------------------


```ts
function acceptsEncodings( request:Request ): string[]
```

Returns an array of content encodings accepted by the request, in order of
preference. If there are no encoding supplied in the request, then `["*"]`
is returned, implying any encoding is accepted.



example
-------

```ts
import { acceptsEncodings } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: { "accept-encoding": "deflate, gzip;q=1.0, *;q=0.5" },
});

acceptsEncodings(req); // ["deflate", "gzip", "*"]
```



______
/. 🚀 :fun: http:acceptsEncodings 🟩
------------------------------------


```ts
function acceptsEncodings( request:Request, ...encodings:string[] ):  string | undefined
```

For a given set of content encodings, return the best match accepted in the
request. If no content encodings match, then the function returns
`undefined`.

**NOTE:** You should always supply `identity` as one of the encodings
to ensure that there is a match when the `Accept-Encoding` header is part
of the request.



example
-------

```ts
import { acceptsEncodings } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: { "accept-encoding": "deflate, gzip;q=1.0, *;q=0.5" },
});

acceptsEncodings(req, "gzip", "identity"); // "gzip"
```



______
/. 🚀 :fun: http:acceptsEncodings 🟩
------------------------------------


```ts
function acceptsEncodings( request:Request, ...encodings:string[] ):  string | string[] | undefined
```




______
/. 🚀 :fun: http:acceptsLanguages 🟩
------------------------------------


```ts
function acceptsLanguages( request:Request ): string[]
```

Returns an array of languages accepted by the request, in order of
preference. If there are no languages supplied in the request, then `["*"]`
is returned, imply any language is accepted.



example
-------

```ts
import { acceptsLanguages } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: {
    "accept-language": "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5",
  },
});

acceptsLanguages(req); // ["fr-CH", "fr", "en", "de", "*"]
```



______
/. 🚀 :fun: http:acceptsLanguages 🟩
------------------------------------


```ts
function acceptsLanguages( request:Request, ...langs:string[] ):  string | undefined
```

For a given set of languages, return the best match accepted in the request.
If no languages match, then the function returns `undefined`.



example
-------

```ts
import { acceptsLanguages } from "https://deno.land/std@$STD_VERSION/http/negotiation.ts";

const req = new Request("https://example.com/", {
  headers: {
    "accept-language": "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5",
  },
});

acceptsLanguages(req, "en-gb", "en-us", "en"); // "en"
```



______
/. 🚀 :fun: http:acceptsLanguages 🟩
------------------------------------


```ts
function acceptsLanguages( request:Request, ...langs:string[] ):  string | string[] | undefined
```




______
/. 🚀 :fun: http:serveListener 🟩
---------------------------------


```ts
function serveListener( listener:Deno.Listener, handler:Handler, options?:ServeListenerOptions )
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.serve} instead.

Constructs a server, accepts incoming connections on the given listener, and
handles requests on these connections with the given handler.

```ts
import { serveListener } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const listener = Deno.listen({ port: 4505 });

console.log("server listening on http://localhost:4505");

await serveListener(listener, (request) => {
const body = `Your user-agent is:\n\n${request.headers.get(
"user-agent",
) ?? "Unknown"}`;

return new Response(body, { status: 200 });
});
```


*   **param**: `listener` 

    The listener to accept connections from.

*   **param**: `handler` 

    The handler for individual HTTP requests.

*   **param**: `options` 

    Optional serve options.



______
/. 🚀 :fun: http:serve 🟩
-------------------------


```ts
function serve( handler:Handler, options:ServeInit )
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.serve} instead.

Serves HTTP requests with the given handler.

You can specify an object with a port and hostname option, which is the
address to listen on. The default is port 8000 on hostname "0.0.0.0".

The below example serves with the port 8000.

```ts
import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
serve((_req) => new Response("Hello, world"));
```

You can change the listening address by the `hostname` and `port` options.
The below example serves with the port 3000.

```ts
import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
serve((_req) => new Response("Hello, world"), { port: 3000 });
```

`serve` function prints the message `Listening on http://<hostname>:<port>/`
on start-up by default. If you like to change this message, you can specify
`onListen` option to override it.

```ts
import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
serve((_req) => new Response("Hello, world"), {
onListen({ port, hostname }) {
console.log(`Server started at http://${hostname}:${port}`);
// ... more info specific to your server ..
},
});
```

You can also specify `undefined` or `null` to stop the logging behavior.

```ts
import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
serve((_req) => new Response("Hello, world"), { onListen: undefined });
```


*   **param**: `handler` 

    The handler for individual HTTP requests.

*   **param**: `options` 

    The options. See `ServeInit` documentation for details.



______
/. 🚀 :fun: http:serveTls 🟩
----------------------------


```ts
function serveTls( handler:Handler, options:ServeTlsInit )
```



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.serve} instead.

Serves HTTPS requests with the given handler.

You must specify `key` or `keyFile` and `cert` or `certFile` options.

You can specify an object with a port and hostname option, which is the
address to listen on. The default is port 8443 on hostname "0.0.0.0".

The below example serves with the default port 8443.

```ts
import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";

const cert = "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n";
const key = "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n";
serveTls((_req) => new Response("Hello, world"), { cert, key });

// Or

const certFile = "/path/to/certFile.crt";
const keyFile = "/path/to/keyFile.key";
serveTls((_req) => new Response("Hello, world"), { certFile, keyFile });
```

`serveTls` function prints the message `Listening on https://<hostname>:<port>/`
on start-up by default. If you like to change this message, you can specify
`onListen` option to override it.

```ts
import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
const certFile = "/path/to/certFile.crt";
const keyFile = "/path/to/keyFile.key";
serveTls((_req) => new Response("Hello, world"), {
certFile,
keyFile,
onListen({ port, hostname }) {
console.log(`Server started at https://${hostname}:${port}`);
// ... more info specific to your server ..
},
});
```

You can also specify `undefined` or `null` to stop the logging behavior.

```ts
import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
const certFile = "/path/to/certFile.crt";
const keyFile = "/path/to/keyFile.key";
serveTls((_req) => new Response("Hello, world"), {
certFile,
keyFile,
onListen: undefined,
});
```


*   **param**: `handler` 

    The handler for individual HTTPS requests.

*   **param**: `options` 

    The options. See `ServeTlsInit` documentation for details.

*   **return**: undefined


______
/. 🚀 :interface: Cookie
------------------------


    interface Cookie






Properties

*   name : string

    Name of the cookie.
    
*   value : string

    Value of the cookie.
    
*   expires :  Date | number

    The cookie's `Expires` attribute, either as an explicit date or UTC milliseconds.
    
    
    example
    -------
    
    <caption>Explicit date:</caption>
    
    ```ts
    import { Cookie } from "https://deno.land/std@$STD_VERSION/http/cookie.ts";
    const cookie: Cookie = {
      name: 'name',
      value: 'value',
      // expires on Fri Dec 30 2022
      expires: new Date('2022-12-31')
    }
    ```
    
    
    
    example
    -------
    
    <caption>UTC milliseconds</caption>
    
    ```ts
    import { Cookie } from "https://deno.land/std@$STD_VERSION/http/cookie.ts";
    const cookie: Cookie = {
      name: 'name',
      value: 'value',
      // expires 10 seconds from now
      expires: Date.now() + 10000
    }
    ```
    
*   maxAge : number

    The cookie's `Max-Age` attribute, in seconds. Must be a non-negative integer. A cookie with a `maxAge` of `0` expires immediately.
    
*   domain : string

    The cookie's `Domain` attribute. Specifies those hosts to which the cookie will be sent.
    
*   path : string

    The cookie's `Path` attribute. A cookie with a path will only be included in the `Cookie` request header if the requested URL matches that path.
    
*   secure : boolean

    The cookie's `Secure` attribute. If `true`, the cookie will only be included in the `Cookie` request header if the connection uses SSL and HTTPS.
    
*   httpOnly : boolean

    The cookie's `HTTPOnly` attribute. If `true`, the cookie cannot be accessed via JavaScript.
    
*   sameSite :  "Strict" | "Lax" | "None"

    Allows servers to assert that a cookie ought not to
    be sent along with cross-site requests.
    
*   unparsed : string[]

    Additional key value pairs with the form "key=value"
    



______
/. 🚀 :interface: FileInfo
--------------------------


    interface FileInfo

Just the part of `Deno.FileInfo` that is required to calculate an `ETag`,
so partial or user generated file information can be passed.





Properties

*   mtime :  Date | null
*   size : number



______
/. 🚀 :interface: ETagOptions
-----------------------------


    interface ETagOptions






Properties

*   algorithm : AlgorithmIdentifier

    A digest algorithm to use to calculate the etag. Defaults to
    `"FNV32A"`.
    
*   weak : boolean

    Override the default behavior of calculating the `ETag`, either forcing
    a tag to be labelled weak or not.
    



______
/. 🚀 :interface: ConnInfo
--------------------------


    interface ConnInfo



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeHandlerInfo} instead.

Information about the connection a request arrived on.





Properties

*   readonly localAddr : Deno.Addr

    The local address of the connection.
    
*   readonly remoteAddr : Deno.Addr

    The remote address of the connection.
    



______
/. 🚀 :interface: ServerInit
----------------------------


    interface ServerInit extends Partial<Deno.ListenOptions>



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeInit} instead.

Options for running an HTTP server.





Properties

*   handler : Handler

    The handler to invoke for individual HTTP requests.
    
*   onError : (error:unknown) =>  Response | Promise<Response>

    The handler to invoke when route handlers throw an error.
    
    The default error handler logs and returns the error in JSON format.
    



______
/. 🚀 :interface: ServeInit
---------------------------


    interface ServeInit extends Partial<Deno.ListenOptions>



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeInit} instead.

Additional serve options.





Properties

*   signal : AbortSignal

    An AbortSignal to close the server and all connections.
    
*   onError : (error:unknown) =>  Response | Promise<Response>

    The handler to invoke when route handlers throw an error.
    
*   onListen : (params:{ hostname: string; port: number }) => void

    The callback which is called when the server started listening
    



______
/. 🚀 :interface: ServeListenerOptions
--------------------------------------


    interface ServeListenerOptions



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeOptions} instead.

Additional serve listener options.





Properties

*   signal : AbortSignal

    An AbortSignal to close the server and all connections.
    
*   onError : (error:unknown) =>  Response | Promise<Response>

    The handler to invoke when route handlers throw an error.
    
*   onListen : (params:{ hostname: string; port: number }) => void

    The callback which is called when the server started listening
    



______
/. 🚀 :interface: ServeTlsInit
------------------------------


    interface ServeTlsInit extends ServeInit



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeTlsOptions} instead.





Properties

*   key : string

    Server private key in PEM format
    
*   cert : string

    Cert chain in PEM format
    
*   keyFile : string

    The path to the file containing the TLS private key.
    
*   certFile : string

    The path to the file containing the TLS certificate
    



______
/. 🚀 :interface: ServerSentEventMessage
----------------------------------------


    interface ServerSentEventMessage

:unsupported: @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#fields}




Properties

*   comment : string

    Ignored by the client.
    
*   event : string

    A string identifying the type of event described.
    
*   data : string

    The data field for the message. Split by new lines.
    
*   id :  string | number

    The event ID to set the {@linkcode EventSource} object's last event ID value.
    
*   retry : number

    The reconnection time.
    



______
/. 🚀 :interface: Browser
-------------------------


    interface Browser






Properties

*   readonly major :  string | undefined

    The major version of a browser as represented by a user agent string.
    
*   readonly name :  string | undefined

    The name of a browser as represented by a user agent string.
    
*   readonly version :  string | undefined

    The version of a browser as represented by a user agent string.
    



______
/. 🚀 :interface: Device
------------------------


    interface Device






Properties

*   readonly model :  string | undefined

    The model of a device as represented by a user agent string.
    
*   readonly type :  "console" | "mobile" | "table" | "smartv" | "wearable" | "embedded" | undefined

    The type of device as represented by a user agent string.
    
*   readonly vendor :  string | undefined

    The vendor of a device as represented by a user agent string.
    



______
/. 🚀 :interface: Engine
------------------------


    interface Engine






Properties

*   readonly name :  string | undefined
*   readonly version :  string | undefined



______
/. 🚀 :interface: Os
--------------------


    interface Os






Properties

*   readonly name :  string | undefined
*   readonly version :  string | undefined



______
/. 🚀 :interface: Cpu
---------------------


    interface Cpu






Properties

*   readonly architecture :  string | undefined


______
/. 🚀 :alias: CookieMapOptions
------------------------------

    type CookieMapOptions = CookieMapOptions_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: CookieMapSetDeleteOptions
---------------------------------------

    type CookieMapSetDeleteOptions = CookieMapSetDeleteOptions_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: Headered
----------------------

    type Headered = Headered_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: Mergeable
-----------------------

    type Mergeable = Mergeable_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: SecureCookieMapGetOptions
---------------------------------------

    type SecureCookieMapGetOptions = SecureCookieMapGetOptions_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: SecureCookieMapOptions
------------------------------------

    type SecureCookieMapOptions = SecureCookieMapOptions_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: SecureCookieMapSetDeleteOptions
---------------------------------------------

    type SecureCookieMapSetDeleteOptions = SecureCookieMapSetDeleteOptions_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.


______
/. 🚀 :alias: Data
------------------

    type Data = Data_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.
Types of data that can be signed cryptographically.


______
/. 🚀 :alias: KeyRing
---------------------

    type KeyRing = KeyRing_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.

An interface which describes the methods that {@linkcode SecureCookieMap} uses to sign and verify cookies.


______
/. 🚀 :alias: Status
--------------------

    type Status = status.Status



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: InformationalStatus
---------------------------------

    type InformationalStatus = status.InformationalStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: SuccessfulStatus
------------------------------

    type SuccessfulStatus = status.SuccessfulStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: RedirectStatus
----------------------------

    type RedirectStatus = status.RedirectStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: ClientErrorStatus
-------------------------------

    type ClientErrorStatus = status.ClientErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: ServerErrorStatus
-------------------------------

    type ServerErrorStatus = status.ServerErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: ErrorStatus
-------------------------

    type ErrorStatus = status.ErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :alias: HttpMethod
------------------------

    type HttpMethod = HttpMethod_



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/unstable_method.ts} instead.

A type representing string literals of each of the common HTTP method.


______
/. 🚀 :alias: Request
---------------------

    type Request = { headers: : { get(key:string):  string | null };  }



______
/. 🚀 :alias: Handler
---------------------

    type Handler = (request:Request, connInfo:ConnInfo) =>  Response | Promise<Response>



deprecated
----------

(will be removed after 1.0.0) Use {@linkcode Deno.ServeHandler} instead.

A handler for HTTP requests. Consumes a request and connection information
and returns a response.

If a handler throws, the server calling the handler will assume the impact
of the error is isolated to the individual request. It will catch the error
and close the underlying connection.


______
/. 🚀 :alias: ServerSentEventInit
---------------------------------

    type ServerSentEventInit = ServerSentEventInit_



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode ServerSentEventStream} from {@link https://deno.land/std/http/server_sent_event_stream.ts} instead.


______
/. 🚀 :alias: ServerSentEventTarget
-----------------------------------

    type ServerSentEventTarget = ServerSentEventTarget_



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode ServerSentEventStream} from {@link https://deno.land/std/http/server_sent_event_stream.ts} instead.


______
/. 🚀 :alias: ServerSentEventTargetOptions
------------------------------------------

    type ServerSentEventTargetOptions = ServerSentEventTargetOptions_



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode ServerSentEventStream} from {@link https://deno.land/std/http/server_sent_event_stream.ts} instead.


______
/. 🚀 :variable: cookieMapHeadersInitSymbol
-------------------------------------------

    const cookieMapHeadersInitSymbol



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.

Symbol which is used in {@link mergeHeaders} to extract a
`[string | string][]` from an instance to generate the final set of
headers.


______
/. 🚀 :variable: mergeHeaders
-----------------------------

    const mergeHeaders



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.

Allows merging of various sources of headers into a final set of headers
which can be used in a {@linkcode Response}.

Note, that unlike when passing a `Response` or {@linkcode Headers} used in a
response to {@linkcode CookieMap} or {@linkcode SecureCookieMap}, merging
will not ensure that there are no other `Set-Cookie` headers from other
sources, it will simply append the various headers together.


______
/. 🚀 :variable: CookieMap
--------------------------

    const CookieMap



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.

Provides a way to manage cookies in a request and response on the server
as a single iterable collection.

The methods and properties align to {@linkcode Map}. When constructing a
{@linkcode Request} or {@linkcode Headers} from the request need to be
provided, as well as optionally the {@linkcode Response} or `Headers` for the
response can be provided. Alternatively the {@linkcode mergeHeaders}
function can be used to generate a final set of headers for sending in the
response.


______
/. 🚀 :variable: SecureCookieMap
--------------------------------

    const SecureCookieMap



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/crypto/unstable_cookie_map.ts} instead.

Provides an way to manage cookies in a request and response on the server
as a single iterable collection, as well as the ability to sign and verify
cookies to prevent tampering.

The methods and properties align to {@linkcode Map}, but due to the need to
support asynchronous cryptographic keys, all the APIs operate async. When
constructing a {@linkcode Request} or {@linkcode Headers} from the request
need to be provided, as well as optionally the {@linkcode Response} or
`Headers` for the response can be provided. Alternatively the
{@linkcode mergeHeaders} function can be used to generate a final set
of headers for sending in the response.

On construction, the optional set of keys implementing the
{@linkcode KeyRing} interface. While it is optional, if you don't plan to use
keys, you might want to consider using just the {@linkcode CookieMap}.



example
-------




______
/. 🚀 :variable: Status
-----------------------

    const Status



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: STATUS_TEXT
----------------------------

    const STATUS_TEXT



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isInformationalStatus
--------------------------------------

    const isInformationalStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isSuccessfulStatus
-----------------------------------

    const isSuccessfulStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isRedirectStatus
---------------------------------

    const isRedirectStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isClientErrorStatus
------------------------------------

    const isClientErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isServerErrorStatus
------------------------------------

    const isServerErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: isErrorStatus
------------------------------

    const isErrorStatus



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/status.ts} instead.


______
/. 🚀 :variable: HTTP_METHODS
-----------------------------

    const HTTP_METHODS



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/unstable_method.ts} instead.

A constant array of common HTTP methods.

This list is compatible with Node.js `http` module.


______
/. 🚀 :variable: isHttpMethod
-----------------------------

    const isHttpMethod



deprecated
----------

(will be removed after 0.210.0) Import from {@link https://deno.land/std/http/unstable_method.ts} instead.

A type guard that determines if a value is a valid HTTP method.


______
/. 🚀 :variable: ServerSentEvent
--------------------------------

    const ServerSentEvent



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode ServerSentEventStream} from {@link https://deno.land/std/http/server_sent_event_stream.ts} instead.

An event which contains information which will be sent to the remote
connection and be made available in an `EventSource` as an event. A server
creates new events and dispatches them on the target which will then be
sent to a client.

See more about Server-sent events on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)

### Example

```ts
import {
ServerSentEvent,
ServerSentEventStreamTarget,
} from "https://deno.land/std@$STD_VERSION/http/server_sent_event.ts";

Deno.serve({ port: 8000 }, (request) => {
const target = new ServerSentEventStreamTarget();
const evt = new ServerSentEvent("message", {
data: { hello: "world" },
id: 1
});
target.dispatchEvent(evt);
return target.asResponse();
});
```


______
/. 🚀 :variable: ServerSentEventStreamTarget
--------------------------------------------

    const ServerSentEventStreamTarget



deprecated
----------

(will be removed in 0.209.0) Use {@linkcode ServerSentEventStream} from {@link https://deno.land/std/http/server_sent_event_stream.ts} instead.

An implementation of {@linkcode ServerSentEventTarget} that provides a
readable stream as a body of a response to establish a connection to a
client.


______
/. 🚀 :lib: uuid [Stable] https://deno.land/std@0.207.0/uuid
============================================================

Generators and validators for UUIDs for versions v1, v3, v4 and v5.

Consider using the web platform
[`crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
for v4 UUIDs instead.

Based on https://github.com/kelektiv/node-uuid -> https://www.ietf.org/rfc/rfc4122.txt

Support for RFC4122 version 1, 3, 4, and 5 UUIDs

This module is browser compatible.



    import { v5 } from "https://deno.land/std@0.207.0/uuid/v5.ts"


    import { v4 } from "https://deno.land/std@0.207.0/uuid/v4.ts"


    import { v3 } from "https://deno.land/std@0.207.0/uuid/v3.ts"


    import { v1 } from "https://deno.land/std@0.207.0/uuid/v1.ts"



______
/. 🚀 :fun: uuid:isNil 🟩
-------------------------


```ts
function isNil( id:string ): boolean
```

Check if the passed UUID is the nil UUID.

```js
import { isNil } from "https://deno.land/std@$STD_VERSION/uuid/mod.ts";

isNil("00000000-0000-0000-0000-000000000000") // true
isNil(crypto.randomUUID()) // false
```



______
/. 🚀 :fun: uuid:validate 🟩
----------------------------


```ts
function validate( uuid:string ): boolean
```

Test a string to see if it is a valid UUID.

```js
import { validate } from "https://deno.land/std@$STD_VERSION/uuid/mod.ts"

validate("not a UUID") // false
validate("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b") // true
```



______
/. 🚀 :fun: uuid:version 🟩
---------------------------


```ts
function version( uuid:string ): number
```

Detect RFC version of a UUID.

```js
import { version } from "https://deno.land/std@$STD_VERSION/uuid/mod.ts"

version("d9428888-122b-11e1-b85c-61cd3cbb3210") // 1
version("109156be-c4fb-41ea-b1b4-efe1671c5836") // 4
```



______
/. 🚀 :ns: v1
-------------



    import { bytesToUuid } from "https://deno.land/std@0.207.0/uuid/_common.ts"



______
/. 🚀 :fun: v1:validate 🟩
--------------------------


```ts
function validate( id:string ): boolean
```

Validates the UUID v1.

*   **param**: `id` 

    UUID value.



______
/. 🚀 :interface: V1Options
---------------------------


    interface V1Options

The options used for generating a v1 UUID.





Properties

*   node : number[]
*   clockseq : number
*   msecs : number
*   nsecs : number
*   random : number[]
*   rng : () => number[]



______
/. 🚀 :fun: v1:generate 🟩
--------------------------


```ts
function generate( options?: V1Options | null, buf?:number[], offset?:number ):  string | number[]
```

Generates a RFC4122 v1 UUID (time-based).

*   **param**: `options` 

    Can use RFC time sequence values as overwrites.

*   **param**: `buf` 

    Can allow the UUID to be written in byte-form starting at the offset.

*   **param**: `offset` 

    Index to start writing on the UUID bytes in buffer.




______
/. 🚀 :ns: v3
-------------



    import { crypto } from "https://deno.land/std@0.207.0/crypto/crypto.ts"


    import { assert } from "https://deno.land/std@0.207.0/assert/assert.ts"


    import { concat } from "https://deno.land/std@0.207.0/bytes/concat.ts"


    import { uuidToBytes } from "https://deno.land/std@0.207.0/uuid/_common.ts"


    import { bytesToUuid } from "https://deno.land/std@0.207.0/uuid/_common.ts"



______
/. 🚀 :fun: v3:validate 🟩
--------------------------


```ts
function validate( id:string ): boolean
```

Validate that the passed UUID is an RFC4122 v3 UUID.



example
-------

```ts
import { generate as generateV3, validate } from "https://deno.land/std@$STD_VERSION/uuid/v3.ts";

validate(await generateV3("6ba7b811-9dad-11d1-80b4-00c04fd430c8", new Uint8Array())); // true
validate(crypto.randomUUID()); // false
validate("this-is-not-a-uuid"); // false
```



______
/. 🚀 :fun: v3:generate 🟩
--------------------------


```ts
function generate( namespace:string, data:Uint8Array ): Promise<string>
```

Generate a RFC4122 v3 UUID (MD5 namespace).



example
-------

```js
import { generate } from "https://deno.land/std@$STD_VERSION/uuid/v3.ts";

const NAMESPACE_URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

const uuid = await generate(NAMESPACE_URL, new TextEncoder().encode("python.org"));
uuid === "22fe6191-c161-3d86-a432-a81f343eda08" // true
```


*   **param**: `namespace` 

    The namespace to use, encoded as a UUID.

*   **param**: `data` 

    The data to hash to calculate the MD5 digest for the UUID.




______
/. 🚀 :ns: v4
-------------




______
/. 🚀 :fun: v4:validate 🟩
--------------------------


```ts
function validate( id:string ): boolean
```

Validate that the passed UUID is an RFC4122 v4 UUID.



example
-------

```ts
import { validate } from "https://deno.land/std@$STD_VERSION/uuid/v4.ts";
import { generate as generateV1 } from "https://deno.land/std@$STD_VERSION/uuid/v1.ts";

validate(crypto.randomUUID()); // true
validate(generateV1() as string); // false
validate("this-is-not-a-uuid"); // false
```




______
/. 🚀 :ns: v5
-------------



    import { assert } from "https://deno.land/std@0.207.0/assert/assert.ts"


    import { concat } from "https://deno.land/std@0.207.0/bytes/concat.ts"


    import { uuidToBytes } from "https://deno.land/std@0.207.0/uuid/_common.ts"


    import { bytesToUuid } from "https://deno.land/std@0.207.0/uuid/_common.ts"



______
/. 🚀 :fun: v5:validate 🟩
--------------------------


```ts
function validate( id:string ): boolean
```

Validate that the passed UUID is an RFC4122 v5 UUID.



example
-------

```ts
import { generate as generateV5, validate } from "https://deno.land/std@$STD_VERSION/uuid/v5.ts";

validate(await generateV5("6ba7b811-9dad-11d1-80b4-00c04fd430c8", new Uint8Array())); // true
validate(crypto.randomUUID()); // false
validate("this-is-not-a-uuid"); // false
```



______
/. 🚀 :fun: v5:generate 🟩
--------------------------


```ts
function generate( namespace:string, data:Uint8Array ): Promise<string>
```

Generate a RFC4122 v5 UUID (SHA-1 namespace).



example
-------

```js
import { generate } from "https://deno.land/std@$STD_VERSION/uuid/v5.ts";

const NAMESPACE_URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

const uuid = await generate(NAMESPACE_URL, new TextEncoder().encode("python.org"));
uuid === "7af94e2b-4dd9-50f0-9c9a-8a48519bdef0" // true
```


*   **param**: `namespace` 

    The namespace to use, encoded as a UUID.

*   **param**: `data` 

    The data to hash to calculate the SHA-1 digest for the UUID.



______
/. 🚀 :variable: NAMESPACE_DNS
------------------------------

    const NAMESPACE_DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"

Name string is a fully-qualified domain name.



example
-------

```ts
import { NAMESPACE_DNS } from "https://deno.land/std@$STD_VERSION/uuid/constants.ts";

console.log(NAMESPACE_DNS); // => 6ba7b810-9dad-11d1-80b4-00c04fd430c8
```


______
/. 🚀 :variable: NAMESPACE_URL
------------------------------

    const NAMESPACE_URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"

Name string is a URL.



example
-------

```ts
import { NAMESPACE_URL } from "https://deno.land/std@$STD_VERSION/uuid/constants.ts";

console.log(NAMESPACE_URL); // => 6ba7b811-9dad-11d1-80b4-00c04fd430c8
```


______
/. 🚀 :variable: NAMESPACE_OID
------------------------------

    const NAMESPACE_OID = "6ba7b812-9dad-11d1-80b4-00c04fd430c8"

Name string is an ISO OID.



example
-------

```ts
import { NAMESPACE_OID } from "https://deno.land/std@$STD_VERSION/uuid/constants.ts";

console.log(NAMESPACE_OID); // => 6ba7b812-9dad-11d1-80b4-00c04fd430c8
```


______
/. 🚀 :variable: NAMESPACE_X500
-------------------------------

    const NAMESPACE_X500 = "6ba7b814-9dad-11d1-80b4-00c04fd430c8"

Name string is an X.500 DN (in DER or a text output format).



example
-------

```ts
import { NAMESPACE_X500 } from "https://deno.land/std@$STD_VERSION/uuid/constants.ts";

console.log(NAMESPACE_X500); // => 6ba7b814-9dad-11d1-80b4-00c04fd430c8
```


______
/. 🚀 :variable: NIL_UUID
-------------------------

    const NIL_UUID = "00000000-0000-0000-0000-000000000000"



______
/. 🚀 :lib: io [Deprecated] https://deno.land/std@0.207.0/io
============================================================

Utilities for working with Deno's readers, writers, and web streams.

`Reader` and `Writer` interfaces are deprecated in Deno, and so many of these
utilities are also deprecated. Consider using web streams instead.



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :class: io:BufferFullError 🟢
-----------------------------------


```ts
class BufferFullError extends Error { ... }
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 BufferFullError constructors
==================================



______
/. 🚀 :ctor: BufferFullError 🟥
-------------------------------


```ts
new BufferFullError(partial:Uint8Array)
```



*   name: string

______
/. 🚀 :class: io:PartialReadError 🟢
------------------------------------


```ts
class PartialReadError extends Error { ... }
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 PartialReadError constructors
===================================



______
/. 🚀 :ctor: PartialReadError 🟥
--------------------------------


```ts
new PartialReadError()
```



*   name: string
*   partial: Uint8Array

______
/. 🚀 :class: io:BufReader 🟢
-----------------------------


```ts
class BufReader implements Reader { ... }
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 BufReader constructors
============================



______
/. 🚀 :ctor: BufReader 🟥
-------------------------


```ts
new BufReader(rd:Reader, size:number)
```




______
/. 🚀 BufReader methods
=======================



______
/. 🚀 :method: BufReader.create 🟨
----------------------------------


```ts
function static create( r:Reader, size:number ): BufReader
```

return new BufReader unless r is BufReader



______
/. 🚀 :method: BufReader.size 🟨
--------------------------------


```ts
function size(  ): number
```

Returns the size of the underlying buffer in bytes.



______
/. 🚀 :method: BufReader.buffered 🟨
------------------------------------


```ts
function buffered(  ): number
```




______
/. 🚀 :method: BufReader.reset 🟨
---------------------------------


```ts
function reset( r:Reader ): void
```

Discards any buffered data, resets all state, and switches
the buffered reader to read from r.



______
/. 🚀 :method: BufReader.read 🟨
--------------------------------


```ts
function read( p:Uint8Array ): Promise< number | null>
```

reads data into p.
It returns the number of bytes read into p.
The bytes are taken from at most one Read on the underlying Reader,
hence n may be less than len(p).
To read exactly len(p) bytes, use io.ReadFull(b, p).



______
/. 🚀 :method: BufReader.readFull 🟨
------------------------------------


```ts
function readFull( p:Uint8Array ): Promise< Uint8Array | null>
```

reads exactly `p.length` bytes into `p`.

If successful, `p` is returned.

If the end of the underlying stream has been reached, and there are no more
bytes available in the buffer, `readFull()` returns `null` instead.

An error is thrown if some bytes could be read, but not enough to fill `p`
entirely before the underlying stream reported an error or EOF. Any error
thrown will have a `partial` property that indicates the slice of the
buffer that has been successfully filled with data.

Ported from https://golang.org/pkg/io/#ReadFull



______
/. 🚀 :method: BufReader.readByte 🟨
------------------------------------


```ts
function readByte(  ): Promise< number | null>
```

Returns the next byte [0, 255] or `null`.



______
/. 🚀 :method: BufReader.readString 🟨
--------------------------------------


```ts
function readString( delim:string ): Promise< string | null>
```

readString() reads until the first occurrence of delim in the input,
returning a string containing the data up to and including the delimiter.
If ReadString encounters an error before finding a delimiter,
it returns the data read before the error and the error itself
(often `null`).
ReadString returns err !== null if and only if the returned data does not end
in delim.
For simple uses, a Scanner may be more convenient.



______
/. 🚀 :method: BufReader.readLine 🟨
------------------------------------


```ts
function readLine(  ): Promise< ReadLineResult | null>
```

`readLine()` is a low-level line-reading primitive. Most callers should
use `readString('\n')` instead or use a Scanner.

`readLine()` tries to return a single line, not including the end-of-line
bytes. If the line was too long for the buffer then `more` is set and the
beginning of the line is returned. The rest of the line will be returned
from future calls. `more` will be false when returning the last fragment
of the line. The returned buffer is only valid until the next call to
`readLine()`.

The text returned from ReadLine does not include the line end ("\r\n" or
"\n").

When the end of the underlying stream is reached, the final bytes in the
stream are returned. No indication or error is given if the input ends
without a final line end. When there are no more trailing bytes to read,
`readLine()` returns `null`.

Calling `unreadByte()` after `readLine()` will always unread the last byte
read (possibly a character belonging to the line end) even if that byte is
not part of the line returned by `readLine()`.



______
/. 🚀 :method: BufReader.readSlice 🟨
-------------------------------------


```ts
function readSlice( delim:number ): Promise< Uint8Array | null>
```

`readSlice()` reads until the first occurrence of `delim` in the input,
returning a slice pointing at the bytes in the buffer. The bytes stop
being valid at the next read.

If `readSlice()` encounters an error before finding a delimiter, or the
buffer fills without finding a delimiter, it throws an error with a
`partial` property that contains the entire buffer.

If `readSlice()` encounters the end of the underlying stream and there are
any bytes left in the buffer, the rest of the buffer is returned. In other
words, EOF is always treated as a delimiter. Once the buffer is empty,
it returns `null`.

Because the data returned from `readSlice()` will be overwritten by the
next I/O operation, most clients should use `readString()` instead.



______
/. 🚀 :method: BufReader.peek 🟨
--------------------------------


```ts
function peek( n:number ): Promise< Uint8Array | null>
```

`peek()` returns the next `n` bytes without advancing the reader. The
bytes stop being valid at the next read call.

When the end of the underlying stream is reached, but there are unread
bytes left in the buffer, those bytes are returned. If there are no bytes
left in the buffer, it returns `null`.

If an error is encountered before `n` bytes are available, `peek()` throws
an error with the `partial` property set to a slice of the buffer that
contains the bytes that were available before the error occurred.



______
/. 🚀 :class: io:BufWriter 🟢
-----------------------------


```ts
class BufWriter extends AbstractBufBase implements Writer { ... }
```

BufWriter implements buffering for an deno.Writer object.
If an error occurs writing to a Writer, no more data will be
accepted and all subsequent writes, and flush(), will return the error.
After all data has been written, the client should call the
flush() method to guarantee all data has been forwarded to
the underlying deno.Writer.



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 BufWriter constructors
============================



______
/. 🚀 :ctor: BufWriter 🟥
-------------------------


```ts
new BufWriter(writer:Writer, size:number)
```




______
/. 🚀 BufWriter methods
=======================



______
/. 🚀 :method: BufWriter.create 🟨
----------------------------------


```ts
function static create( writer:Writer, size:number ): BufWriter
```

return new BufWriter unless writer is BufWriter



______
/. 🚀 :method: BufWriter.reset 🟨
---------------------------------


```ts
function reset( w:Writer ): void
```

Discards any unflushed buffered data, clears any error, and
resets buffer to write its output to w.



______
/. 🚀 :method: BufWriter.flush 🟨
---------------------------------


```ts
function flush(  )
```

Flush writes any buffered data to the underlying io.Writer.



______
/. 🚀 :method: BufWriter.write 🟨
---------------------------------


```ts
function write( data:Uint8Array ): Promise<number>
```

Writes the contents of `data` into the buffer. If the contents won't fully
fit into the buffer, those bytes that are copied into the buffer will be flushed
to the writer and the remaining bytes are then copied into the now empty buffer.


*   **return**: the number of bytes written to the buffer.


______
/. 🚀 :class: io:BufWriterSync 🟢
---------------------------------


```ts
class BufWriterSync extends AbstractBufBase implements WriterSync { ... }
```

BufWriterSync implements buffering for a deno.WriterSync object.
If an error occurs writing to a WriterSync, no more data will be
accepted and all subsequent writes, and flush(), will return the error.
After all data has been written, the client should call the
flush() method to guarantee all data has been forwarded to
the underlying deno.WriterSync.



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 BufWriterSync constructors
================================



______
/. 🚀 :ctor: BufWriterSync 🟥
-----------------------------


```ts
new BufWriterSync(writer:WriterSync, size:number)
```




______
/. 🚀 BufWriterSync methods
===========================



______
/. 🚀 :method: BufWriterSync.create 🟨
--------------------------------------


```ts
function static create( writer:WriterSync, size:number ): BufWriterSync
```

return new BufWriterSync unless writer is BufWriterSync



______
/. 🚀 :method: BufWriterSync.reset 🟨
-------------------------------------


```ts
function reset( w:WriterSync ): void
```

Discards any unflushed buffered data, clears any error, and
resets buffer to write its output to w.



______
/. 🚀 :method: BufWriterSync.flush 🟨
-------------------------------------


```ts
function flush(  )
```

Flush writes any buffered data to the underlying io.WriterSync.



______
/. 🚀 :method: BufWriterSync.writeSync 🟨
-----------------------------------------


```ts
function writeSync( data:Uint8Array ): number
```

Writes the contents of `data` into the buffer.  If the contents won't fully
fit into the buffer, those bytes that can are copied into the buffer, the
buffer is the flushed to the writer and the remaining bytes are copied into
the now empty buffer.


*   **return**: the number of bytes written to the buffer.


______
/. 🚀 :class: io:Buffer 🟢
--------------------------


```ts
class Buffer { ... }
```

A variable-sized buffer of bytes with `read()` and `write()` methods.

Buffer is almost always used with some I/O like files and sockets. It allows
one to buffer up a download from a socket. Buffer grows and shrinks as
necessary.

Buffer is NOT the same thing as Node's Buffer. Node's Buffer was created in
2009 before JavaScript had the concept of ArrayBuffers. It's simply a
non-standard ArrayBuffer.

ArrayBuffer is a fixed memory allocation. Buffer is implemented on top of
ArrayBuffer.

Based on [Go Buffer](https://golang.org/pkg/bytes/#Buffer).



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 Buffer constructors
=========================



______
/. 🚀 :ctor: Buffer 🟥
----------------------


```ts
new Buffer(ab?: ArrayBufferLike | ArrayLike<number>)
```




______
/. 🚀 Buffer methods
====================



______
/. 🚀 :method: Buffer.bytes 🟨
------------------------------


```ts
function bytes( options ): Uint8Array
```

Returns a slice holding the unread portion of the buffer.

The slice is valid for use only until the next buffer modification (that
is, only until the next call to a method like `read()`, `write()`,
`reset()`, or `truncate()`). If `options.copy` is false the slice aliases the buffer content at
least until the next buffer modification, so immediate changes to the
slice will affect the result of future reads.

*   **param**: `options` 



______
/. 🚀 :method: Buffer.empty 🟨
------------------------------


```ts
function empty(  ): boolean
```

Returns whether the unread portion of the buffer is empty.



______
/. 🚀 :getter: Buffer.length 🟦
-------------------------------


```ts
function length(  ): number
```

A read only number of bytes of the unread portion of the buffer.



______
/. 🚀 :getter: Buffer.capacity 🟦
---------------------------------


```ts
function capacity(  ): number
```

The read only capacity of the buffer's underlying byte slice, that is,
the total space allocated for the buffer's data.



______
/. 🚀 :method: Buffer.truncate 🟨
---------------------------------


```ts
function truncate( n:number )
```

Discards all but the first `n` unread bytes from the buffer but
continues to use the same allocated storage. It throws if `n` is
negative or greater than the length of the buffer.



______
/. 🚀 :method: Buffer.reset 🟨
------------------------------


```ts
function reset(  ): void
```




______
/. 🚀 :method: Buffer.readSync 🟨
---------------------------------


```ts
function readSync( p:Uint8Array ):  number | null
```

Reads the next `p.length` bytes from the buffer or until the buffer is
drained. Returns the number of bytes read. If the buffer has no data to
return, the return is EOF (`null`).



______
/. 🚀 :method: Buffer.read 🟨
-----------------------------


```ts
function read( p:Uint8Array ): Promise< number | null>
```

Reads the next `p.length` bytes from the buffer or until the buffer is
drained. Resolves to the number of bytes read. If the buffer has no
data to return, resolves to EOF (`null`).

NOTE: This methods reads bytes synchronously; it's provided for
compatibility with `Reader` interfaces.



______
/. 🚀 :method: Buffer.writeSync 🟨
----------------------------------


```ts
function writeSync( p:Uint8Array ): number
```




______
/. 🚀 :method: Buffer.write 🟨
------------------------------


```ts
function write( p:Uint8Array ): Promise<number>
```

NOTE: This methods writes bytes synchronously; it's provided for
compatibility with `Writer` interface.



______
/. 🚀 :method: Buffer.grow 🟨
-----------------------------


```ts
function grow( n:number ): void
```

Grows the buffer's capacity, if necessary, to guarantee space for
another `n` bytes. After `.grow(n)`, at least `n` bytes can be written to
the buffer without another allocation. If `n` is negative, `.grow()` will
throw. If the buffer can't grow it will throw an error.

Based on Go Lang's
[Buffer.Grow](https://golang.org/pkg/bytes/#Buffer.Grow).



______
/. 🚀 :method: Buffer.readFrom 🟨
---------------------------------


```ts
function readFrom( r:Reader ): Promise<number>
```

Reads data from `r` until EOF (`null`) and appends it to the buffer,
growing the buffer as needed. It resolves to the number of bytes read.
If the buffer becomes too large, `.readFrom()` will reject with an error.

Based on Go Lang's
[Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom).



______
/. 🚀 :method: Buffer.readFromSync 🟨
-------------------------------------


```ts
function readFromSync( r:ReaderSync ): number
```

Reads data from `r` until EOF (`null`) and appends it to the buffer,
growing the buffer as needed. It returns the number of bytes read. If the
buffer becomes too large, `.readFromSync()` will throw an error.

Based on Go Lang's
[Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom).



______
/. 🚀 :class: io:LimitedReader 🟢
---------------------------------


```ts
class LimitedReader implements Reader { ... }
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 LimitedReader constructors
================================



______
/. 🚀 :ctor: LimitedReader 🟥
-----------------------------


```ts
new LimitedReader(reader:Reader, limit:number)
```




______
/. 🚀 LimitedReader methods
===========================



______
/. 🚀 :method: LimitedReader.read 🟨
------------------------------------


```ts
function read( p:Uint8Array ): Promise< number | null>
```




______
/. 🚀 :class: io:MultiReader 🟢
-------------------------------


```ts
class MultiReader implements Reader { ... }
```

Reader utility for combining multiple readers



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 MultiReader constructors
==============================



______
/. 🚀 :ctor: MultiReader 🟥
---------------------------


```ts
new MultiReader(readers:Reader[])
```




______
/. 🚀 MultiReader methods
=========================



______
/. 🚀 :method: MultiReader.read 🟨
----------------------------------


```ts
function read( p:Uint8Array ): Promise< number | null>
```




______
/. 🚀 :class: io:StringReader 🟢
--------------------------------


```ts
class StringReader extends Buffer { ... }
```

Reader utility for strings.



example
-------

```ts
import { StringReader } from "https://deno.land/std@$STD_VERSION/io/string_reader.ts";

const data = new Uint8Array(6);
const r = new StringReader("abcdef");
const res0 = await r.read(data);
const res1 = await r.read(new Uint8Array(6));

// Number of bytes read
console.log(res0); // 6
console.log(res1); // null, no byte left to read. EOL

// text

console.log(new TextDecoder().decode(data)); // abcdef
```

**Output:**

```text
6
null
abcdef
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 StringReader constructors
===============================



______
/. 🚀 :ctor: StringReader 🟥
----------------------------


```ts
new StringReader(s:string)
```




______
/. 🚀 :class: io:StringWriter 🟢
--------------------------------


```ts
class StringWriter implements Writer, WriterSync { ... }
```

Writer utility for buffering string chunks.



example
-------

```ts
import {
  copyN,
  StringReader,
  StringWriter,
} from "https://deno.land/std@$STD_VERSION/io/mod.ts";
import { copy } from "https://deno.land/std@$STD_VERSION/streams/copy.ts";

const w = new StringWriter("base");
const r = new StringReader("0123456789");
await copyN(r, w, 4); // copy 4 bytes

// Number of bytes read
console.log(w.toString()); //base0123

await copy(r, w); // copy all
console.log(w.toString()); // base0123456789
```

**Output:**

```text
base0123
base0123456789
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 StringWriter constructors
===============================



______
/. 🚀 :ctor: StringWriter 🟥
----------------------------


```ts
new StringWriter(base:string)
```




______
/. 🚀 StringWriter methods
==========================



______
/. 🚀 :method: StringWriter.write 🟨
------------------------------------


```ts
function write( p:Uint8Array ): Promise<number>
```




______
/. 🚀 :method: StringWriter.writeSync 🟨
----------------------------------------


```ts
function writeSync( p:Uint8Array ): number
```




______
/. 🚀 :method: StringWriter.toString 🟨
---------------------------------------


```ts
function toString(  ): string
```




______
/. 🚀 :fun: io:copyN 🟩
-----------------------


```ts
function copyN( r:Reader, dest:Writer, size:number ): Promise<number>
```

Copy N size at the most. If read size is lesser than N, then returns nread

*   **param**: `r` 

    Reader

*   **param**: `dest` 

    Writer

*   **param**: `size` 

    Read size
    


deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readDelim 🟩
---------------------------


```ts
function readDelim( reader:Reader, delim:Uint8Array ): AsyncIterableIterator<Uint8Array>
```

Read delimited bytes from a Reader.



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readInt 🟩
-------------------------


```ts
function readInt( buf:BufReader ): Promise< number | null>
```

Read big endian 32bit integer from BufReader

*   **param**: `buf` 


deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readLines 🟩
---------------------------


```ts
function readLines( reader:Reader, decoderOpts?:{ encoding?: string; fatal?: boolean; ignoreBOM?: boolean } ): AsyncIterableIterator<string>
```

Read strings line-by-line from a Reader.



example
-------

```ts
import { readLines } from "https://deno.land/std@$STD_VERSION/io/read_lines.ts";
import * as path from "https://deno.land/std@$STD_VERSION/path/mod.ts";

const filename = path.join(Deno.cwd(), "std/io/README.md");
let fileReader = await Deno.open(filename);

for await (let line of readLines(fileReader)) {
  console.log(line);
}
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readLong 🟩
--------------------------


```ts
function readLong( buf:BufReader ): Promise< number | null>
```

Read big endian 64bit long from BufReader

*   **param**: `buf` 


deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readRange 🟩
---------------------------


```ts
function readRange( r:Reader & Deno.Seeker, range:ByteRange ): Promise<Uint8Array>
```

Read a range of bytes from a file or other resource that is readable and
seekable.  The range start and end are inclusive of the bytes within that
range.

```ts
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";
import { readRange } from "https://deno.land/std@$STD_VERSION/io/read_range.ts";

// Read the first 10 bytes of a file
const file = await Deno.open("example.txt", { read: true });
const bytes = await readRange(file, { start: 0, end: 9 });
assertEquals(bytes.length, 10);
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readRangeSync 🟩
-------------------------------


```ts
function readRangeSync( r:ReaderSync & Deno.SeekerSync, range:ByteRange ): Uint8Array
```

Read a range of bytes synchronously from a file or other resource that is
readable and seekable.  The range start and end are inclusive of the bytes
within that range.

```ts
import { assertEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_equals.ts";
import { readRangeSync } from "https://deno.land/std@$STD_VERSION/io/read_range.ts";

// Read the first 10 bytes of a file
const file = Deno.openSync("example.txt", { read: true });
const bytes = readRangeSync(file, { start: 0, end: 9 });
assertEquals(bytes.length, 10);
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readShort 🟩
---------------------------


```ts
function readShort( buf:BufReader ): Promise< number | null>
```

Read big endian 16bit short from BufReader

*   **param**: `buf` 


deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:readStringDelim 🟩
---------------------------------


```ts
function readStringDelim( reader:Reader, delim:string, decoderOpts?:{ encoding?: string; fatal?: boolean; ignoreBOM?: boolean } ): AsyncIterableIterator<string>
```

Read Reader chunk by chunk, splitting based on delimiter.



example
-------

```ts
import { readStringDelim } from "https://deno.land/std@$STD_VERSION/io/read_string_delim.ts";
import * as path from "https://deno.land/std@$STD_VERSION/path/mod.ts";

const filename = path.join(Deno.cwd(), "std/io/README.md");
let fileReader = await Deno.open(filename);

for await (let line of readStringDelim(fileReader, "\n")) {
  console.log(line);
}
```



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :fun: io:sliceLongToBytes 🟩
----------------------------------


```ts
function sliceLongToBytes( d:number, dest ): number[]
```

Slice number into 64bit big endian byte array

*   **param**: `d` 

    The number to be sliced

*   **param**: `dest` 

    The sliced array
    


deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.



______
/. 🚀 :interface: ReadLineResult
--------------------------------


    interface ReadLineResult

Result type returned by of BufReader.readLine().



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.





Properties

*   line : Uint8Array
*   more : boolean



______
/. 🚀 :interface: ByteRange
---------------------------


    interface ByteRange



deprecated
----------

(will be removed after 1.0.0) Use the [Web Streams API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Streams_API} instead.





Properties

*   start : number

    The 0 based index of the start byte for a range.
    
*   end : number

    The 0 based index of the end byte for a range, which is inclusive.
    


______
/. 🚀 :lib: yaml [Stable] https://deno.land/std@0.207.0/yaml
============================================================

{@linkcode parse} and {@linkcode stringify} for handling
[YAML](https://yaml.org/) encoded data.

Ported from
[js-yaml v3.13.1](https://github.com/nodeca/js-yaml/commit/665aadda42349dcae869f12040d9b10ef18d12da)

If your YAML contains multiple documents in it, you can use {@linkcode parseAll} for
handling it.

To handle `regexp`, and `undefined` types, use {@linkcode EXTENDED_SCHEMA}.
You can also use custom types by extending schemas.

## :warning: Limitations
- `binary` type is currently not stable.

For further examples see https://github.com/nodeca/js-yaml/tree/master/examples.


example
-------

```ts
import {
  parse,
  stringify,
} from "https://deno.land/std@$STD_VERSION/yaml/mod.ts";

const data = parse(`
foo: bar
baz:
  - qux
  - quux
`);
console.log(data);
// => { foo: "bar", baz: [ "qux", "quux" ] }

const yaml = stringify({ foo: "bar", baz: ["qux", "quux"] });
console.log(yaml);
// =>
// foo: bar
// baz:
//   - qux
//   - quux
```




______
/. 🚀 :class: yaml:Type 🟢
--------------------------


```ts
class Type { ... }
```




______
/. 🚀 Type constructors
=======================



______
/. 🚀 :ctor: Type 🟥
--------------------


```ts
new Type(tag:string, options?:TypeOptions)
```



*   tag: string
*   kind:  KindType | null
*   instanceOf: Any
*   predicate: (data:Record<string, unknown>) => boolean
*   represent:  RepresentFn | ArrayObject<RepresentFn>
*   defaultStyle: StyleVariant
*   styleAliases: ArrayObject
*   loadKind: KindType
*   resolve: (data?:Any) => boolean
*   construct: (data?:Any) => Any

______
/. 🚀 :fun: yaml:parse 🟩
-------------------------


```ts
function parse( content:string, options?:ParseOptions ): unknown
```

Parses `content` as single YAML document.

Returns a JavaScript object or throws `YAMLError` on error.
By default, does not support regexps, functions and undefined. This method is safe for untrusted data.



______
/. 🚀 :fun: yaml:parseAll 🟩
----------------------------


```ts
function parseAll( content:string, iterator:CbFunction, options?:ParseOptions ): void
```

Same as `parse()`, but understands multi-document sources.
Applies iterator to each document if specified, or returns array of documents.



example
-------

```ts
import { parseAll } from "https://deno.land/std@$STD_VERSION/yaml/parse.ts";

const data = parseAll(`
---
id: 1
name: Alice
---
id: 2
name: Bob
---
id: 3
name: Eve
`);
console.log(data);
// => [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Eve" } ]
```



______
/. 🚀 :fun: yaml:parseAll 🟩
----------------------------


```ts
function parseAll( content:string, options?:ParseOptions ): unknown
```




______
/. 🚀 :fun: yaml:parseAll 🟩
----------------------------


```ts
function parseAll( content:string, iterator?: CbFunction | ParseOptions, options?:ParseOptions ): unknown
```




______
/. 🚀 :fun: yaml:stringify 🟩
-----------------------------


```ts
function stringify( obj:Record<string, unknown>, options?:DumpOptions ): string
```

Serializes `object` as a YAML document.

You can disable exceptions by setting the skipInvalid option to true.


______
/. 🚀 :alias: ParseOptions
--------------------------

    type ParseOptions = LoaderStateOptions



______
/. 🚀 :alias: DumpOptions
-------------------------

    type DumpOptions = DumperStateOptions



______
/. 🚀 :alias: KindType
----------------------

    type KindType =  "sequence" | "scalar" | "mapping"



______
/. 🚀 :alias: StyleVariant
--------------------------

    type StyleVariant =  "lowercase" | "uppercase" | "camelcase" | "decimal"



______
/. 🚀 :alias: RepresentFn
-------------------------

    type RepresentFn = (data:Any, style?:StyleVariant) => Any



______
/. 🚀 :variable: CORE_SCHEMA
----------------------------

    const CORE_SCHEMA : Schema



______
/. 🚀 :variable: DEFAULT_SCHEMA
-------------------------------

    const DEFAULT_SCHEMA : Schema



______
/. 🚀 :variable: EXTENDED_SCHEMA
--------------------------------

    const EXTENDED_SCHEMA : Schema

*
Extends JS-YAML default schema with additional JavaScript types
It is not described in the YAML specification.
Functions are no longer supported for security reasons.



example
-------

```ts
import {
  EXTENDED_SCHEMA,
  parse,
} from "https://deno.land/std@$STD_VERSION/yaml/mod.ts";

const data = parse(
  `
  regexp:
    simple: !!js/regexp foobar
    modifiers: !!js/regexp /foobar/mi
  undefined: !!js/undefined ~
# Disabled, see: https://github.com/denoland/deno_std/pull/1275
#  function: !!js/function >
#    function foobar() {
#      return 'hello world!';
#    }
`,
  { schema: EXTENDED_SCHEMA },
);
```


______
/. 🚀 :variable: FAILSAFE_SCHEMA
--------------------------------

    const FAILSAFE_SCHEMA : Schema



______
/. 🚀 :variable: JSON_SCHEMA
----------------------------

    const JSON_SCHEMA : Schema


