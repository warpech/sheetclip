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
declare class SheetClip {
    parse(str: string): string[];
    stringify(input: string[]): string;
}

export { SheetClip };
