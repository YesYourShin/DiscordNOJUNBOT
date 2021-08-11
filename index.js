require('dotenv').config();
const token  = process.env.TOKEN;
const dictionary = require('./dictionary');
const anyWords = require('./anywords');
const discord = require('discord.js'); // discord.js를 import 해줍니다.
const app = new discord.Client(); // discord.Client 인스턴스 생성
const queue = require('block-queue');

// const {getVoiceStream} = require("d-tts");
// const say = require('say')

const sejongDict = dictionary.makeDictionary(process.env.DICTIONARY);

// const prism = require('prism-media');
// const fs = require('fs');

app.on('ready', () => { // 여기서 사용되는 Arrow Function은 콜백함수입니다.
    console.log(`I am Ready ${app.user.tag}`); // Bot이 준비가 되면 실행할 콜백함수입니다.
});


app.on('message', msg => {
    if(msg.author.bot) { // 메세지를 보낸 사용자가 봇일 경우 중단
        return;
    }

    if(msg.content.indexOf('노준') !== -1) {
        msg.channel.send(`ㄷㅊ!`);
    }
        // 채팅에서 메세지가 들어왔을 때 실행할 콜백함수입니다.
    // indexOf('') !== -1을 이용해서 메세지 속에 단어가 있는지 확인

    if(msg.content.includes('아무말')) {
        const words = msg.content.replace('아무말', "").split(' ').filter(word => word != '');

        const rd = Math.floor(Math.random() * words.length);

        const keyword = words[rd];

        const text = anyWords.generate(sejongDict, keyword);
        msg.channel.send(text);
        
    }

    // https://stackoverflow.com/questions/50710598/using-discord-js-to-detect-image-and-respond
    if (msg.attachments.size > 0) { // 채팅창에 올라온 첨부파일(이미지)이 있을 때
        if (msg.attachments.every(attachIsImage)){ // 함수에 일치하는 확장자가 있을 경우
            if(msg.member.id === "277448740682465280") { // 파일(이미지)을 보낸 사람의 아이디가 코드에 적힌 아이디와 일치할 경우
                msg.channel.send("노꼴!"); // 메세지가 왔던 채널에 메세지를 보냄
            } else { // 아이디가 일치하지 않을 경우
                const talk = ["머꼴", "대꼴", "노꼴"]; // 모아둔 메세지
                const rd = Math.floor(Math.random() * talk.length); // 모아둔 메세지 수 안에서 랜덤하게수를 뽑아
                msg.channel.send(talk[rd]); // 그 숫자 위치에 해당하는 메세지를 채팅창에 보냄
            }
        }
    }

    function attachIsImage(msgAttach) { 
        var url = msgAttach.url; // 첨부파일 주소를 가져옴
        //True if this url is a png image.
        const fileName = ["png", "jpg", "gif", "webp", "jpeg"] // 파일 확장자

        // 올라온 파일 확장자와 fileName의 확장자에서 일치하는게 있는지 골라 일치할 경우 true 반환
        for (let i = 0 ; i < fileName.length ; i++) { 
            if (url.indexOf(fileName[i], url.length - fileName[i].length /*or 3*/) !== -1) {
                console.log(fileName[i] + i);
                return true;
            }
            
        }
        
    }

});

const userJoin = queue(1, function(voiceChannel, done) {
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('res/nojunhello.mp3', {volume: 1});
        dispatcher.on('finish', end => {
            console.log('nojunhello.mp3 is now playing!');
            done();
        })
    }).catch(err => console.log(err));
});

const userLeave = queue(1, function(voiceChannel, done) {
    console.log('here userLeave');
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('res/nojunbye.mp3', {volume: 1});
        dispatcher.on('finish', end => {
            console.log('nojunbye.mp3 is now playing!');
            done();
        })
    }).catch(err => console.log(err));
});

// const userDeaf = queue(1, function(voiceChannel, done) {
//     voiceChannel.join().then(connection => {
//         const dispatcher = connection.play('res/nojundeaf.mp3', {volume: 1});
//         dispatcher.on('finish', end => {
//             console.log('nojundeaf.mp3 is now playing!');
//             done();
//         })
//     }).catch(err => console.log(err));
// });

const userMute = queue(1, function(voiceChannel, done) {
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('res/nojunmute.mp3', {volume: 1});
        dispatcher.on('finish', end => {
            console.log('nojunmute.mp3 is now playing!');
            done();
        })
    }).catch(err => console.log(err));
});

const userVideo = queue(1, function(voiceChannel, done) {
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('res/nojunvideo.mp3', {volume: 1});
        dispatcher.on('finish', end => {
            console.log('nojunvideo.mp3 is now playing!');
            done();
        })
    }).catch(err => console.log(err));
});

const userStreaming = queue(1, function(voiceChannel, done) {
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('res/nojunstreaming.mp3', {volume: 1});
        dispatcher.on('finish', end => {
            console.log('nojunstreaming.mp3 is now playing!');
            done();
        })
    }).catch(err => console.log(err));
});

app.on('voiceStateUpdate', (oldState, newState) => {
    if(newState.member.user.bot) { // 메세지를 보낸 사용자가 봇일 경우 중단
        return;
    } 
    let voiceChannel = newState.member.voice.channel;

    // https://discordjs.github.io/voice/

    console.log('newState.channelID: ' + Boolean(newState.channelID));
    console.log('oldState.channelID: ' + Boolean(oldState.channelID));
    console.log('newState.selfVideo: ' + Boolean(newState.selfVideo));
    console.log('oldState.selfVideo: ' + Boolean(oldState.selfVideo));

    // 유저가 음성 채널에 들어왔을 때 실행
    if(oldState.channelID != newState.channelID) {
        if(! Boolean(newState.channelID)) {
            console.log('userLeave');
            userLeave.push(voiceChannel);
        } else {
            userJoin.push(voiceChannel);
        }
    }

    // 유저가 음성 채널에서 나갔을 때 실행
    // if(Boolean(oldState.channelID) == true && Boolean(newState.channelID) == false) {
    //     userLeave.push(voiceChannel);
    // }

    // // 유저가 헤드셋 음소거를 했을 때 실행
    // if(oldState.selfDeaf != newState.selfDeaf) {
    //     if(Boolean(oldState.selfDeaf) == true && Boolean(newState.selfDeaf) == false) {
    //         return;
    //     }
    //     userDeaf.push(voiceChannel);
    // }

    // 유저가 음소거를 했을 때 실행
    if(oldState.selfMute != newState.selfMute) {
        if(Boolean(oldState.selfMute) == true && Boolean(newState.selfMute) == false) {
            return;
        }
        userMute.push(voiceChannel);
    }

    // 유저가 영상 통화를 했을 때
    if(oldState.selfVideo != newState.selfVideo) {
        if(Boolean(oldState.selfVideo) == true && Boolean(newState.selfVideo) == false) {
            return;
        }
        userVideo.push(voiceChannel);
    }

    // 유저가 스트리밍을 했을 때
    if(oldState.streaming != newState.streaming) {
        if(Boolean(oldState.streaming) == true && Boolean(newState.streaming) == false) {
            return;
        }
        userStreaming.push(voiceChannel);
    }
})


app.login(token); // Bot의 토큰을 받아주세요. 0편에서 받은 봇의 토큰으로 로그인하는 코드입니다.