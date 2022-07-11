const fs = require('fs')


// 1. file ko read kese karey(Reading a file)

// let content = fs.readFileSync('f1.text')
// // console.log(content) //buffer data not required
// console.log(content.toString())

// console.log('Data is -> '+content) 


// 2. File ko write kese karey (Writing a file)
//writeFileSync

// fs.writeFileSync('f2.txt','this data will be written on f2 file')

// fs.writeFileSync('f3.txt', "this is a new file and text on it")

// 3. append (update) a file
//appendFileSync

// fs.appendFileSync('f3.txt', '. this is a update line using append')

// 4. delete a file

// unlinkSync method

// fs.unlinkSync('f1.text')


//Directories

// 5. creating a directory 
//mkdirSyn()

// fs.mkdirSync('NodesJs')
// fs.mkdirSync('NodeJs')

// 6. Delete a directory
//rmdirSync()

// fs.rmdirSync('NodesJS')

// 7. to check existence od a file or a folder
// existsSync

// this returns true or false based on whether the passed directory or file  exists or not

// let doesExist = fs.existsSync('f3.txt')
// console.log(doesExist)

// 8. Read a dir 
//readdirSync

// let folderContent = fs.readdirSync("NodeJS") // if dir is in same location

// let folderContent = fs.readdirSync('E:\\pepcoding FJP 8 Web dev\\10 may\\node js')




// console.log(folderContent)


// Copying a file from one dir to another dir

let srcFilePath = 'D:\\Batches\\FJP-8\\3_NodeJS\\nodePackages\\myDirectory2\\f1.txt'

let destinationFolderPath = 'D:\\Batches\\FJP-8\\2_JavaScript\\'


let toBeCopiedFileBaseName = path.basename(srcFilePath)

console.log(toBeCopiedFileBaseName) // f1.txt

let destPathComplete = path.join(destinationFolderPath , toBeCopiedFileBaseName)
console.log(destPathComplete)


fs.copyFileSync(srcFilePath , destPathComplete )
console.log('File Copied')

fs.unlinkSync(srcFilePath)


