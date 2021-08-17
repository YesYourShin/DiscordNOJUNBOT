Discord.js 공식 가이드 - 게이트웨이 인텐트
https://discordjs.guide/popular-topics/intents.html#enabling-intents

Discord 개발자 문서 - 게이트웨이 인텐트
https://discord.com/developers/docs/topics/gateway

게이트웨이 업데이트 FAQ
https://support-dev.discord.com/hc/en-us/articles/360056426994

Discord APi Github - 문제 1363 - 권한 있는 인텐트
https://github.com/discord/discord-api-docs/issues/1363

Discord 블로그 - Discord에서 봇의 미래
https://blog.discord.com/the-future-of-bots-on-discord-4e6e050ab52e


노준 봇 기능


취소선이 그어진 부분은 구성이 끝난 부분


1. 아무말 키워드에 아무말이나 하기
    - ~~'아무말' 입력 후 뒤에 키워드를 붙이면 아무말 데이터에서 해당 키워드가 포함된 단어로 시작되는 단어를 찾아 최소 단어 5개 이상이 나와 문장이 끝나면 그 문장을 채팅으로 보냄~~

    - ~~'아무말'만으로 끝나거나 키워드가 없을경우 데이터에서 랜덤으로 시작값을 뽑아내서 문장 만듦~~

    - 키워드의 앞으로도 단어를 찾아나가 문장 만들기


2. 보이스 채팅에 사람이 들어오면 인사하기
    - ~~들어온 사람이 있을 경우 채팅방에 들어가 인사가 녹음된 음원파일을 재생함~~

    - ~~마이크를 껐을 때, 영상통화를 켰을 때, 화면공유를 했을 때 음원파일을 재생함~~

    - 파일 재생이 끝난 후 자동으로 채팅방을 나감

    - TTS로 채팅방에 들어온 사람 이름을 말하며 인사하기

    - 음원 파일 재생을 1초 지연시키고 재생시키기 


3. 사진이 올라오면 반응해서 몇가지 말 중 하나를 랜덤으로 채팅 보내기

    - ~~사진이 올라오면 '노꼴', '머꼴', '대꼴' 셋 중 하나를 랜덤으로 채팅으로 보냄~~

    - ~~사진으로 판단하는 기준 "png", "jpg", "gif", "webp", "jpeg"로 끝나는 첨부 파일~~
    
    - ~~특정 유저가 올리는 사진에는 무조건 '노꼴' 채팅만 보냄~~


4. 다른 유저가 노준 이라고 채팅을 하면 거기에 반응해서 채팅 보내기

    - ~~채팅을 했을 때 문장 안에 '노준'이 들어가 있으면 'ㄷㅊ!'라고 채팅함~~


노준 봇 사용 법

 - git clone (git 주소)

 - git 