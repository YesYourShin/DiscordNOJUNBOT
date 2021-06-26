function anyWords(dictionary, keyword) { // 아무말 커맨드 사용 시 호출, 사전과 키워드가 들어온다
    const match = []; // 키워드로 시작하는 단어를 모을 배열
    const keys = Object.keys(dictionary); // key:value에서 key만 가져옴
    for(let key of keys) { // 모든 키들에 대하여 
        if (key.startsWith(keyword)) { // 사용자가 사용한 키워드로 시작하는지 검사
            match.push(key); // 배열에 저장
        }
    }

    const result = []; // 완성될 문장을 저장하는 배열
    
    const krd = Math.floor(Math.random() * match.length); // 키워드로 시작하는 단어 중에서 랜덤 선택
    keyword = match[krd]; // 처음 키워드 설정
    result.push(keyword); // 처음 키워드 배열에 저장

    const length = Math.floor(Math.random() * 10) + 10; // 문장 길이 선택(기본 10개의 단어 + 랜덤 최대 10개 추가)
    for(let i = 0; i < length ; i++) { // 만들 문장 길이만큼 반복
        const talk = dictionary[keyword]; // 사전에서 현재 단어의 다음 단어를 검색
        if(!talk) break; // 다음 단어가 없을 경우 끝
        const rd = Math.floor(Math.random() * talk.length); // 다음에 올 단어 중 랜덤 선택
        keyword = talk[rd]; // 선택한 단어를 다음 키워드로 사용
        result.push(keyword); // 문장 뒤에 선택한 단어를 추가
        
    }
    
    return result.join(" "); // 배열을 공백을 간격으로 이어붙이기
}

module.exports = anyWords;