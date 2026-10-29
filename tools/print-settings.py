from zipfile import ZipFile,ZIP_DEFLATED
import xml.etree.ElementTree as E
from pathlib import Path
ns='http://schemas.openxmlformats.org/spreadsheetml/2006/main'
E.register_namespace('x',ns);E.register_namespace('r','http://schemas.openxmlformats.org/officeDocument/2006/relationships')
def tag(t):return '{'+ns+'}'+t
for l,n in [('E1',22),('E3',37),('L1',40),('L2',45)]:
 path=Path(__file__).resolve().parent.parent / 'dist' / (l+'-template.xlsx')
 with ZipFile(path) as z:files={p:z.read(p) for p in z.namelist()}
 for i in range(1,5):
  p=f'xl/worksheets/sheet{i}.xml';root=E.fromstring(files[p])
  for t in ['sheetPr','pageMargins','pageSetup']:
   for el in root.findall(tag(t)):root.remove(el)
  prop=E.Element(tag('sheetPr'));E.SubElement(prop,tag('pageSetUpPr'),fitToPage='1');root.insert(0,prop)
  E.SubElement(root,tag('pageMargins'),left='0.25',right='0.25',top='0.4',bottom='0.4',header='0.15',footer='0.15')
  E.SubElement(root,tag('pageSetup'),paperSize='9',orientation='landscape',fitToWidth='1',fitToHeight='0')
  files[p]=E.tostring(root,encoding='utf-8',xml_declaration=True)
 root=E.fromstring(files['xl/workbook.xml'])
 defs=root.find(tag('definedNames'))
 if defs is None:defs=E.SubElement(root,tag('definedNames'))
 for el in list(defs):
  if el.get('name') in ['_xlnm.Print_Titles','_xlnm.Print_Area']:defs.remove(el)
 for i in range(4):
  for name,area in [('Print_Titles','$1:$5'),('Print_Area',f'$A$1:$K${n+5}')]:E.SubElement(defs,tag('definedName'),name='_xlnm.'+name,localSheetId=str(i)).text=f"'Learners {i*3+1}-{i*3+3}'!{area}"
 files['xl/workbook.xml']=E.tostring(root,encoding='utf-8',xml_declaration=True)
 with ZipFile(path,'w',ZIP_DEFLATED) as z:
  for p,b in files.items():z.writestr(p,b)
