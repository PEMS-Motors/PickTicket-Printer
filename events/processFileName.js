const fs = require('fs');
const pattern = / \(.+\)\.pdf/gi;

module.exports = {

    process: function(fileName, destination){
        var name = fileName;
        var fulldestinationfilename = `${destination}\\${name}`;
        console.log({fulldestinationfilename});
        var exists = fs.existsSync(fulldestinationfilename);
        //if destination does not include an identical filename, return with no modification
        if( ! exists ) return name;
        // name.match(pattern) returns an array of matches.
        // if this array length is 0, then there is no "copy" pattern and (1).pdf needs to be appended
        if( ! name.match(pattern)?.length > 0) name = name.replace('.pdf', ' (1).pdf');
        //if destination does include an identical filename, append a "copy" modificiation. example : `name.pdf` = `name (1).pdf`
        let i = 0;
        while( exists ) {
            name = name.replace(pattern, ` (${++i}).pdf`);
            fulldestinationfilename = `${destination}\\${name}`;
            exists = fs.existsSync(fulldestinationfilename);
            console.log({ event : 'incrementing', exists, fulldestinationfilename });
        }
        return name;
    }
}