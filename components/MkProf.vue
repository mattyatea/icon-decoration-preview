<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['userId','file']);
const url = useState('url', () => 'https://prismisskey.space/twemoji/1f974.svg')
const decoration = useState('decoration', () => props.file)
const bannerUrl = useState('bannerUrl', () => '')
const name = useState('name', () => 'ほげほげほにゃにゃー')
const bio = useState('bio', () => "てすとゆーざー\nおごご")
const username = useState('username', () => "testuser")


watch([props], async () => {
    if (props.file){
        decoration.value = props.file
    }

    let tmpId = props.userId;

    if (props.userId && props.userId.charAt(0) === '@') {
        tmpId = props.userId.slice(1);
    }

    const parts = tmpId.split('@');
    const _username = parts[0];
    const host = parts[1];

    if (!host && !_username ){
        toDefault()
    }

    if (host !== undefined && _username !== undefined && isDomain(host)){

        url.value = `https://${host}/avatar/@${_username}@${host}`

        fetch('https://' + host + '/api/users/search-by-username-and-host', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({limit: 1, username:_username, host})
        }).then((res)=>res.json())
            .then((data)=>{
                if (data[0].username === _username){
                    bannerUrl.value = data[0].bannerUrl
                    name.value = data[0].name
                    bio.value = data[0].description
                    username.value = data[0].username
                    if (data[0].avatarDecorations){
                        decoration.value = data[0].avatarDecorations.length !== 0 && !props.file ? data[0].avatarDecorations[0].url : props.file ? props.file : null
                    }
                }
            })
            .catch(()=>{
                toDefault()
            })
    }
})
function isDomain(str:string) {
    // ドメインを正確にチェックするための正規表現
    const domainRegex = /^(?:https?:\/\/)?(?:[\w-]+\.)*([\w-]+\.[a-z]{2,}(?:\.[a-z]{2,})?)$/i;
    return domainRegex.test(str);
}

function toDefault() {
    url.value = 'https://prismisskey.space/twemoji/1f974.svg'
    name.value = 'ほげほげほにゃにゃー'
    bio.value = "てすとゆーざー\nおごご"
    username.value = "testuser"
    bannerUrl.value = ''
}
</script>

<template>
    <div style="background-color:#282d2d;" class="rounded-2xl h-auto w-auto lg:w-80 flex flex-col relative mb-4 mx-2">
        <div class="w-full bg-center bg-cover rounded-t-2xl" :style="{ height: '84px', backgroundImage: 'url(' + bannerUrl + ')' }" />

        <span class="absolute iconspn">
            <img class="rounded-full object-cover icon" :src=url alt="">
            <img class="rounded-full deco" :src=decoration alt="">
        </span>

        <div class="name">
            <p class="usrname">{{name}}</p>
            <small>@{{username}}</small>
        </div>
        <div class="border-top p-4">
            <pre>{{bio}}</pre>
        </div>
    </div>
</template>

<style scoped>
    .iconspn{
        top: 62px;
        left: 13px;
        width: 58px;
        height: 58px;
        margin: 4px;
    }
    .icon{
        position: absolute;
        inset: 0;
        border-radius: 100%;
        z-index: 1;
        overflow: clip;
        object-fit: cover;
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border: 3px solid #282d2d;
    }
    .deco{
        position: absolute;
        z-index: 1;
        top: -50%;
        left: -50%;
        width: 200%;
        pointer-events: none;
    }
    img{
        max-width: 200% !important;
    }
    .usrname{
        display: inline-block;
        margin: 0;
        font-weight: 700;
        line-height: 16px;
        word-break: break-all;
    }

    .name{
        display: block;
        padding: 10px 0 10px 88px;
    }

    small{
        display: block;
        margin: 0;
        line-height: 16px;
        font-size: .8em;
        opacity: .7;
    }

    .border-top{
        border-top: solid 0.5px #ffffff1a;
    }

    pre{
        font-family: 'M PLUS Rounded 1c', sans-serif !important;
    }
</style>