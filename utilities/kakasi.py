#!/usr/bin/env python
import io
import sys
import pykakasi
kks = pykakasi.kakasi()
text = "日本語を勉強します"
macro = "ruby" if "ruby" in sys.argv else "oo"
sin = sys.stdin.readlines()
result = kks.convert((text if len(sin)==0 else "".join(sin)).strip())
print("".join([f"{macro}:{it['orig']}[{it['hira']}]" 
                 if it['orig'] != it['hira'] 
                 else it['orig'] for it in result]))
