# Learner Dossier — demo

Interactive learner assessment demo with fictional learners and sample marks. Includes Entry 1, Entry 3, Level 1 and Level 2 topic lists.

## Run locally

No build step, account or API key is needed. With Python installed, run from this repository:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. Use an HTTP server rather than opening index.html directly, because Excel export fetches the workbook templates.

## Features

- Compact traffic-light grid and official three-column tick view.
- Editable sample names, search, assessment date, undo and reset.
- Real Excel exports with fixed layouts for printing and sharing.
- Local browser saving; no shared accounts, server storage or backup.

## Excel exports

Each level has a bundled XLSX template with four worksheets, three learners per worksheet. Export replaces names, date and tick placeholders while preserving colours, borders, widths and print settings. The layout uses A4 landscape, one page wide, automatic vertical pagination and repeating heading rows 1–5. Exports include the full selected level regardless of the search filter. Excel files are snapshots; edits in Excel do not sync back to the demo.

## Files

- `dist/`: complete static app, sample data, JSZip and the four Excel templates. This is the directory to serve on a static host.
- `tools/`: original template generation scripts. These require the OpenAI `@oai/artifact-tool` runtime and `jszip`; they are not required to run the demo. Run `build-templates.mjs` then `print-settings.py` when regenerating templates.

Topic references preserve duplicates from the supplied source. Row order identifies assessments in this fixed demo; changing the topic list requires a storage migration or reset.

This is a demo, not an official record system. Browser data can be lost if site storage is cleared, and it does not transfer between devices. Names and marks in the source are fictional. JSZip retains its bundled licence notice.
