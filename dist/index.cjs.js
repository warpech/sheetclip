'use strict';

/**
 * SheetClip - Spreadsheet Clipboard Parser
 * version 0.3
 *
 * This tiny library transforms JavaScript arrays to strings that are pasteable by LibreOffice, OpenOffice,
 * Google Docs and Microsoft Excel.
 *
 * Copyright 2012, Marcin Warpechowski
 * Licensed under the MIT license.
 * http://github.com/warpech/sheetclip/
 */
// Class Definition
class SheetClip {
    parse(str) {
        const result = [];
        let a = 0;
        let multiline;
        let last;
        const rows = str.split('\n');
        if (rows.length > 1 && rows[rows.length - 1] === '')
            rows.pop();
        for (let r = 0; r < rows.length; r++) {
            const row = rows[r].split('\t');
            for (let c = 0; c < row.length; c++) {
                if (!result[a])
                    result[a] = [];
                if (multiline && c === 0) {
                    last = result[a].length - 1;
                    result[a][last] = result[a][last] + '\n' + row[0];
                    if (multiline && (countQuotes(row[0]) & 1)) { //& 1 is a bitwise way of performing mod 2
                        multiline = false;
                        result[a][last] = result[a][last].substring(0, result[a][last].length - 1).replace(/""/g, '"');
                    }
                }
                else {
                    if (c === row.length - 1 && row[c].indexOf('"') === 0 && (countQuotes(row[c]) & 1)) {
                        result[a].push(row[c].substring(1).replace(/""/g, '"'));
                        multiline = true;
                    }
                    else {
                        result[a].push(row[c].replace(/""/g, '"'));
                        multiline = false;
                    }
                }
            }
            if (!multiline)
                a++;
        }
        return result;
    }
    stringify(input) {
        let result = "";
        for (let r = 0; r < input.length; r++) {
            const row = input[r];
            for (let c = 0; c < row.length; c++) {
                if (c > 0)
                    result += '\t';
                const val = row[c];
                if (typeof val === 'string') {
                    if (val.indexOf('\n') > -1) {
                        result += '"' + val.replace(/"/g, '""') + '"';
                    }
                    else {
                        result += val;
                    }
                }
                else if (val === null || val === undefined) {
                    result += '';
                }
                else {
                    result += val;
                }
            }
            result += '\n';
        }
        return result;
    }
}
// Private Static Functions
function countQuotes(str) {
    return str.split('"').length - 1;
}

exports.SheetClip = SheetClip;
