# SheetClip - Spreadsheet Clipboard Parser

Version 0.1

This tiny library transforms JavaScript 2-dimensional arrays to strings that are pasteable by LibreOffice, OpenOffice, Google Docs and Microsoft Excel (and the other way round)

## Usage

    var arr = SheetClip.parse(str);
    var str = SheetClip.stringify(arr);