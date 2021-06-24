const { token } = require('./token.js'); // token 값을 따로 js파일을 만들어주고 module.exports를 사용하여 token이 코드에 노출되는 것을 조금이라도 방지합니다.
const discord = require('discord.js'); // discord.js를 import 해줍니다.
const app = new discord.Client(); // discord.Client 인스턴스 생성


app.on('ready', () => { // 여기서 사용되는 Arrow Function은 콜백함수입니다.
    console.log(`I am Ready ${app.user.tag}`); // Bot이 준비가 되면 실행할 콜백함수입니다.
});

app.on('message', msg => {
    if(msg.content.indexOf('ㅋㅋ') !== -1) msg.channel.send(`ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ`); 
    // 채팅에서 메세지가 들어왔을 때 실행할 콜백함수입니다.
    // indexOf('') !== -1을 이용해서 메세지 속에 단어가 있는지 확인
});



app.on('voiceStateUpdate', member => {
    // let oldUserChannel = oldMember.member;
    // let newUserChannel = newMember.member.displayName;
    let memberName = member.member.displayName;
    // console.log(oldUserChannel);
    // console.log(newUserChannel);
    console.log(memberName);

    if(memberName === 'BRORY') {
        // console.log(app.channels.resolveID);
        // app.getChannel.get('856786875917533187');
        // app.channels.resolveID.send("ddd");
        // get("856786875917533187").
        // app.channels.find(channel => channel.name == "channel name here");
        // let channel = app.channels.cache.find(channel => channel.name === "ㄱㄱ");
        // message.channel.send("Sdfs");
    }


})


app.login(token); // Bot의 토큰을 받아주세요. 0편에서 받은 봇의 토큰으로 로그인하는 코드입니다.