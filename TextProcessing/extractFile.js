function extractFile(input) {
    
    let fileNameStart = input.lastIndexOf("\\") + 1 ;
    let fileNameEnd = input.lastIndexOf(".")

    let fileName = input.substring(fileNameStart, fileNameEnd);
    let fileExtension = input.substring(fileNameEnd + 1)

    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
    

}
extractFile(
    'C:\\Internal\\training-internal\\Template.pptx'
)