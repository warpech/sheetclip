# SheetClip.js

### Copy/paste from your HTML5 web app to a spreadsheet

Tiny library that transforms JavaScript 2-dimensional arrays to clipboard strings compatible with spreadsheets such as Microsoft Excel, Google Docs, LibreOffice and OpenOffice

## Usage

### Convert array to string (to copy it to Excel)

    var str = SheetClip.stringify(arr);

The above line will convert a 2-dimensional array:

    var arr = [
      ['A', 'B', 'C'],
      ['D', 'Some\nlong\ntext', 'F'],
      ['G', 'H', 'I']
    ];

To a string:

    A/tB/tC/nD/t"Some/nlong/ntext"/tF/nG/tH/tI/n

Which, pasted from clipboard to an Excel sheet will render as:

<table>
<tr><td>A</td><td>B</td><td>C</td></tr>
<tr><td>D</td><td>Some<br>long<br>text</td><td>F</td></tr>
<tr><td>G</td><td>H</td><td>I</td></tr>
</table>

### Convert string to array (to paste it from Excel)

    var arr = SheetClip.parse(str);

The above line parses a string:

    A/tB/tC/nD/t"Some/nlong/ntext"/tF/nG/tH/tI/n

that was copied to clipboard from Excel sheet:

<table>
<tr><td>A</td><td>B</td><td>C</td></tr>
<tr><td>D</td><td>Some<br>long<br>text</td><td>F</td></tr>
<tr><td>G</td><td>H</td><td>I</td></tr>
</table>

to a 2-dimensional array:

    [
      ['A', 'B', 'C'],
      ['D', 'Some\nlong\ntext', 'F'],
      ['G', 'H', 'I']
    ]

## Notes

This library was created with the intention to be used in <a href="http://handsontable.com/">Handsontable</a>. I decided to make it a separate project in case somebody else needs it.

It **does not** provide you with clipboard access in JavaScript. That part still needs to be figured out by you. There are various ways to achieve it but none of them is perfect. Probably the most compatible with all the browsers is to keep a hidden `<textarea>` on the page that is always focused. Then, you can fill it with value that can will be automatically copied to clipboard when the user presses CTRL+C. Analogously, Pressing CTRL+V will will the focused textarea with value from clipboard.

At least this is the way how Handsontable does it.

## License

(The MIT License)

Copyright (c) 2012 Marcin Warpechowski &lt;marcin@nextgen.pl&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.