function extractFile(input) {
    let startIndexSlash = input.lastIndexOf('\\') + 1;
    let endPointIndex = input.lastIndexOf('.') + 1;
    let endIndexName = endPointIndex - 1;

    let fileName = input.substring(startIndexSlash,endIndexName);
    let extension = input.substring(endPointIndex)
    
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.gd.hf.j.ytrrtrtr.txt.js.cs');
