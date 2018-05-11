# tonsofmaterial-bootstrap
Just another material skin for Bootstrap

To compile yourself, use the Google Closure Compiler like this

```bash
google-closure-compiler --warning_level=VERBOSE --jscomp_warning=reportUnknownTypes --js tomb.js --js_output_file dist/tomb.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs/jquery-3.3.js --output_wrapper "(function() {%output%}).call(window);"
```