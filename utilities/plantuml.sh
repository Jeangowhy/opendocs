# export LANG=en_US.UTF-8
# export LC_CTYPE=en_US.UTF-8
# alias puml='java -jar "C:/tools/plantuml.jar" -charset UTF-8 $*'
# java -jar C:/tools/plantuml.jar -picoweb:8080:127.0.0.1 &
# curl -i http://127.0.0.1:8080/plantuml/svg/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000
# curl -i https://www.plantuml.com/plantuml/svg/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000
# curl -i https://kroki.io/plantuml/svg/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000

java -jar "C:/tools/plantuml.jar" -charset UTF-8 -tutxt -pipe << EOF #| clip
@startuml
Alice -> Bob  : Hi!
Bob   -> Alice: How are you today!
@enduml
EOF

# PlantUML 支持绘制多种类型的图表，但是 -ttxt 和 -tutxt 选项主要用于为序列图生成文本艺术表示。

exit

out=/tmp/preview.svg
url=$( java -jar "C:/tools/plantuml.jar" -charset UTF-8 -encodeurl -pipe << EOF
@startuml
[View]        -left[#red]->  [User]       : Displays to
[User]       -right[#red]->  [Controller] : Users
[Controller]    -up[#red]->  [View]       : Manipulates
[Controller]    -up[#red]->  [Model]      : Manipulates
[Model]       -left[#red]->  [View]       : Updates
@enduml
EOF
)

echo curl -o $out https://www.plantuml.com/plantuml/svg/$url
curl -o $out https://www.plantuml.com/plantuml/svg/$url
java -jar "C:/tools/plantuml.jar" -metadata /tmp/preview.svg
ls -lh $out

exit 


libdeflate-gzip -c -12 << EOF | tail -c+11 | head -c-8 |  base64 | tr -d '\n' | tr '+/' '-_' 
@startuml
Bob -> Alice : hello
@enduml
EOF

puml -decodeurl SyfFKj2rKt3CoKnELR1Io4ZDoSa70000

# 使用 gzip 但移除头尾，只保留 DEFLATE 数据
echo "ABC" | gzip -c | tail -c+11 | head -c-8 | base64

https://plantuml.com/zh/text-encoding

To achieve such encoding, the text diagram is:

1. Encoded in UTF-8
2. Compressed using Deflate algorithm
3. Reencoded in ASCII using a transformation close to base64

Why not use Base64?

The main reason is historic: this format was not created to be public at first. Now, it's too late to change it. However, the only difference is in character order.

Where in base64 the mapping array for values 0-63 is:
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/

For PlantUML, the mapping array for values 0-63 is:
0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_


J. Ziv 和 A. Lempel 在 1977 发表了一篇名为 A Universal Algorithm for Sequential Data Compression 的论文，提出了一种顺序数据的通用压缩算法，通过短的字典项目来标记更长的重复内容实现压缩，这个算法后来被称为 LZ77 算法。DEFLATE 算法结合了 LZ77 算法和 Huffman 编码, 由 Phil Katz 设计。参考 RFC1951/RFC1952 标准化文档 
https://www.rfc-editor.org/rfc/rfc1952.txt [GZIP file format specification version 4.3]
https://tools.ietf.org/html/RFC1951 [DEFLATE Compressed Data Format Specification version 1.3]

PlantUML URL 地址编码中只能使用 DEFLATE 编码，如果使用 gzip 等混合 HUFFMAN 编码的数据将报错：

    The plugin you are using seems to generated a bad URL.
    This URL does not look like DEFLATE data.
    It looks like your plugin is using HUFFMAN encoding.

尝试使用 MSYS2 提供的 libdeflate-gzip.exe，不一定兼容：

    pacman -S mingw-w64-ucrt-x86_64-libdeflate

注意，AsciiDoc 集成的 Kroki 中使用的 URL 编码与 PlantUML 似乎也不相同。