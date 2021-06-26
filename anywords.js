function anyWords(dictionary, keyword) {
    const result = [];
    const match = [];
    
    

    const keys = Object.keys(dictionary);
    for(let key of keys) {
        if (key.startsWith(keyword)) {
            match.push(key); 
        }
        
    }

    const krd = Math.floor(Math.random() * match.length);
    keyword = match[krd];
    result.push(keyword);
    
    for(let i = 0; i < Math.floor(Math.random() * 10) + 10 ; i++) {
        const talk = dictionary[keyword];
        if(!talk) break; 
        const rd = Math.floor(Math.random() * talk.length); 
        keyword = talk[rd];
        result.push(keyword);        
        
    }
    

    return result.join(" "); 
}

module.exports = anyWords;