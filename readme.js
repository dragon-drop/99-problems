const fs = require('fs')

fs.readdir('./', function (error, fileNames) {
    if (error) throw error

    let success = true;

    let README = 'Run `node readme` to update this file.\n\n';

    fileNames
        // make sure it's a number.js like 20.js
        .filter((fileName) => fileName.match(/[0-9]+.js/))
        // sort it numerically rather than alphabetically
        .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
        // loop, and read each fileName
        .forEach((fileName) => {
            const file = fs.readFileSync(fileName, 'utf8')

            try {
                const name = file.match(/const name = '(.+)'/)

                if (!name || name.length === 1)  throw new Error('Missing name constant')

                const parts = name[1].split(/([0-9]+\. )/)

                if (!parts || parts.length === 1) throw new Error('Name doesn\'t contain number. e.g. \'1. The name\'')

                README += `${parts[1]}[${parts[2]}](${fileName})\n`
            } catch (e) {
                success = false;
                console.error('\nERROR:', fileName, e.message, '\n')
            }
        })

    if (success) {
        fs.writeFileSync('README.md', README)

        console.log('\nSUCCESS: Readme updated\n')
    }
})