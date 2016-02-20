JojofyJS
=========

Install
-------

First make sure you have installed the latest version of [node.js](http://nodejs.org/)
(You may need to restart your computer after this step).

From NPM for use as a command line app:

    npm install jojofy-js -g

From NPM for programmatic use:

    npm install jojofy-js

From Git:

    git clone git://github.com/khit9/JojofyJS.git
    cd JojofyJS
    npm link .

Usage
-----

    jojofyjs [input files] [options]

JojofyJS can take multiple input files.  It's recommended that you pass the
input files first, then pass the options.  JojofyJS will parse input files
in sequence and apply any compression options.  The files are parsed in the
same global scope, that is, a reference from a file to some
variable/function declared in another file will be matched properly.

If you want to read from STDIN instead, pass a single dash instead of input
files.

If you wish to pass your options before the input files, separate the two with
a double dash to prevent input files being used as option arguments:

    jojofyjs --compress --mangle -- input.js

The available options are:

```
  --source-map                  Specify an output file where to generate source
                                map.
  --source-map-root             The path to the original source to be included
                                in the source map.
  --source-map-url              The path to the source map to be added in //#
                                sourceMappingURL.  Defaults to the value passed
                                with --source-map.
  --source-map-include-sources  Pass this flag if you want to include the
                                content of source files in the source map as
                                sourcesContent property.
  --in-source-map               Input source map, useful if you're compressing
                                JS that was generated from some other original
                                code.
  --screw-ie8                   Pass this flag if you don't care about full
                                compliance with Internet Explorer 6-8 quirks
                                (by default UglifyJS will try to be IE-proof).
  --expr                        Parse a single expression, rather than a
                                program (for parsing JSON)
  -p, --prefix                  Skip prefix for original filenames that appear
                                in source maps. For example -p 3 will drop 3
                                directories from file names and ensure they are
                                relative paths. You can also specify -p
                                relative, which will make UglifyJS figure out
                                itself the relative paths between original
                                sources, the source map and the output file.
  -o, --output                  Output file (default STDOUT).
  -b, --beautify                Beautify output/specify output options.
  -m, --mangle                  Mangle names/pass mangler options.
  -r, --reserved                Reserved names to exclude from mangling.
  -c, --compress                Enable compressor/pass compressor options. Pass
                                options like -c
                                hoist_vars=false,if_return=false. Use -c with
                                no argument to use the default compression
                                options.
  -d, --define                  Global definitions
  -e, --enclose                 Embed everything in a big function, with a
                                configurable parameter/argument list.
  --comments                    Preserve copyright comments in the output. By
                                default this works like Google Closure, keeping
                                JSDoc-style comments that contain "@license" or
                                "@preserve". You can optionally pass one of the
                                following arguments to this flag:
                                - "all" to keep all comments
                                - a valid JS regexp (needs to start with a
                                slash) to keep only comments that match.
                                Note that currently not *all* comments can be
                                kept when compression is on, because of dead
                                code removal or cascading statements into
                                sequences.
  --preamble                    Preamble to prepend to the output.  You can use
                                this to insert a comment, for example for
                                licensing information.  This will not be
                                parsed, but the source map will adjust for its
                                presence.
  --stats                       Display operations run time on STDERR.
  --acorn                       Use Acorn for parsing.
  --spidermonkey                Assume input files are SpiderMonkey AST format
                                (as JSON).
  --self                        Build itself (UglifyJS2) as a library (implies
                                --wrap=UglifyJS --export-all)
  --wrap                        Embed everything in a big function, making the
                                “exports” and “global” variables available. You
                                need to pass an argument to this option to
                                specify the name that your module will take
                                when included in, say, a browser.
  --export-all                  Only used when --wrap, this tells UglifyJS to
                                add code to automatically export all globals.
  --lint                        Display some scope warnings
  -v, --verbose                 Verbose
  -V, --version                 Print version number and exit.
  --noerr                       Don't throw an error for unknown options in -c,
                                -b or -m.
  --bare-returns                Allow return outside of functions.  Useful when
                                minifying CommonJS modules.
  --keep-fnames                 Do not mangle/drop function names.  Useful for
                                code relying on Function.prototype.name.
  --reserved-file               File containing reserved names
  --reserve-domprops            Make (most?) DOM properties reserved for
                                --mangle-props
  --mangle-props                Mangle property names
  --mangle-regex                Only mangle property names matching the regex
  --name-cache                  File to hold mangled names mappings
  --pure-funcs                  List of functions that can be safely removed if
                                their return value is not used           [array]
  --dio --world                 Add Dio Worl*d AA
  --exactly                     Add Te**nce Da*by AA
  --pol                         Add Jean Pie*re Polna**ff AA
  --letitgo                     Add Jean Pie*re Polna**ff AA 2
  --kimi                        Add Kaky*in AA
```

Specify `--output` (`-o`) to declare the output file.  Otherwise the output
goes to STDOUT.
