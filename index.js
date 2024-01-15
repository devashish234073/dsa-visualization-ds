let fs = require("fs");
const path = require('path');

function scanFolders(currentPath) {
    try {
        const entries = fs.readdirSync(currentPath);
        const folders = entries.filter(entry =>
            fs.statSync(path.join(currentPath, entry)).isDirectory()
        ).filter(f => f.indexOf(".") != 0);
        if(folders.length>0) {
            let indexContent = (String)(fs.readFileSync("index.html_"));
            const indexSplitLiteral = "[A_TAGS]";
            let indexContentSplit = indexContent.split(indexSplitLiteral);
            if(indexContentSplit.length==2) {
                let prefix = indexContentSplit[0];
                let mid = "";
                let suffix = indexContentSplit[1];
                if(prefix && suffix) {
                    for(let i=0;i<folders.length;i++) {
                        let folder = folders[i];
                        const parts = folder.split(/(?=[A-Z])/);
                        let html = parts.map((item, index) => (index === 0 ? item.toLowerCase() : item)).join('')+".html";
                        let linkName = parts.join(" ");
                        mid+="<li><a href=\""+html+"\">"+linkName+"</a></li>\r\n";
                    }
                    console.log(mid);
                }
                if(mid!="") {
                    let content = prefix+mid+suffix;
                    console.log("updated content",content);
                    fs.writeFileSync("index.html",content);
                }
            }
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const currentPath = process.cwd();
scanFolders(currentPath);