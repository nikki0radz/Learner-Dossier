import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';
import {fileURLToPath} from 'node:url';
const outputDir=fileURLToPath(new URL('../dist/',import.meta.url));
const require=createRequire(import.meta.url),{LEVELS,NAMES}=require('../dist/data.js');
for(const [level,data] of Object.entries(LEVELS)){
 const w=Workbook.create();
 for(let group=0;group<4;group++){
  const s=w.worksheets.add('Learners '+(group*3+1)+'-'+(group*3+3)),end=data.topics.length+5;
  s.showGridLines=false;s.freezePanes.freezeRows(5);
  s.getRange(`A1:K${end}`).format.font={name:'Arial',size:10};
  s.getRange('A:A').format.columnWidth=15;s.getRange('B:B').format.columnWidth=53;s.getRange('C:K').format.columnWidth=6;
  s.mergeCells('A1:K1');s.getRange('A1').values=[[data.title]];s.getRange('A1:K1').format.font={bold:true,size:16};s.getRange('A1:K1').format.rowHeight=32;
  s.mergeCells('A2:K2');s.getRange('A2').values=[['{{META}}']];
  s.mergeCells('A3:K3');s.getRange('A3').values=[['Red = needs support    Amber = developing    Green = confident']];s.getRange('A3:K3').format.rowHeight=26;
  s.getRange('A4:A5').merge();s.getRange('A4').values=[['Ref']];s.getRange('B4:B5').merge();s.getRange('B4').values=[['Topic']];
  for(let p=0;p<3;p++){
   let c=String.fromCharCode(67+p*3),last=String.fromCharCode(69+p*3);
   s.mergeCells(`${c}4:${last}4`);s.getRange(`${c}4`).values=[['{{NAME_'+(group*3+p)+'}}']];
   ['R','A','G'].forEach((label,j)=>{let col=String.fromCharCode(67+p*3+j);s.getRange(`${col}5`).values=[[label]];s.getRange(`${col}5`).format.fill=['#FF354F','#FFD329','#00C875'][j];});
  }
  s.getRange('A4:K5').format.font.bold=true;s.getRange('A4:K5').format.horizontalAlignment='center';s.getRange('A4:K5').format.verticalAlignment='center';s.getRange('A4:K4').format.rowHeight=30;
  s.getRange(`A4:K${end}`).format.borders={preset:'all',style:'thin',color:'#777777'};
  data.topics.forEach(([ref,topic],r)=>{let row=r+6;s.getRange(`A${row}:K${row}`).values=[[ref,topic,...Array.from({length:9},(_,i)=>'{{T_'+r+'_'+(group*3+Math.floor(i/3))+'_'+(i%3+1)+'}}')]];});
  s.getRange(`A6:K${end}`).format.rowHeight=42;s.getRange(`A6:B${end}`).format.wrapText=true;s.getRange(`A6:K${end}`).format.verticalAlignment='center';s.getRange(`C6:K${end}`).format.horizontalAlignment='center';s.getRange(`C6:K${end}`).format.font.size=18;
 }
 w.recalculate();
 // Preview uses placeholders cleared in a disposable render copy after export.
 const file=await SpreadsheetFile.exportXlsx(w);await file.save(outputDir+level+'-template.xlsx');
 let s=w.worksheets.getItemAt(0);s.getRange('A2').values=[['Sample class • Assessment date: 29/10/2026']];for(let p=0;p<3;p++)s.getCell(3,2+p*3).values=[[NAMES[p]]];s.getRange(`C6:K${data.topics.length+5}`).clear({applyTo:'contents'});s.getRange('C6').values=[['✓']];s.getRange('H7').values=[['✓']];w.recalculate();
 const preview=await w.render({sheetName:s.name,range:'A1:K10',scale:1.5});await fs.writeFile('/tmp/'+level+'-template.png',new Uint8Array(await preview.arrayBuffer()));
 console.log(level,data.topics.length,'topics, 4 worksheets exported');
}
