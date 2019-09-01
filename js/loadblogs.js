function getDirectories(path){ 
    return fs.readdirSync(path).filter(function (file){ 
    return fs.statSync(path+'/'+file).isDirectory(); 
    }); 
} 
getDirectories("../blogs")