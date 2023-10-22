<script setup lang="ts">
const rotate = useState('rotate')
import 'assets/css/icons-webfont/tabler-icons.min.css'
function isDomain(str:string) {
    // ドメインを正確にチェックするための正規表現
    const domainRegex = /^(?:https?:\/\/)?(?:[\w-]+\.)*([\w-]+\.[a-z]{2,}(?:\.[a-z]{2,})?)$/i;
    return domainRegex.test(str);
}
const url = useState('url', () => 'https://prismisskey.space/twemoji/1f974.svg')
const decoration = useState('decoration')
const name = useState('name')
const username = useState('username')

</script>

<template>
    <article style="background-color: var(--bg-color); transition: all 0.5s ease-in-out;" class="rounded-2xl h-32 w-auto flex relative mb-4 mx-2">
        <span class="absolute iconspn">
            <img class="rounded-full object-cover icon" :src=url alt="">
            <img :style="'transform: rotate('+rotate+'deg);'" class="deco" :src=decoration alt="">
        </span>
        <div class="flex-1">
            <header >
            <p class="name">{{name}}</p>
                <p class="id">@{{username}}</p>
            </header>
            <div style="container-type: inline-size;">
                ほにゃほにゃほにゃーーー
            </div>
            <footer>
                <i class="ti ti-arrow-back-up"></i>
                <i class="ti ti-repeat"></i>
                <i class="ti ti-plus"></i>
                <i class="ti ti-dots"></i>
            </footer>
        </div>

    </article>
</template>

<style scoped>
    article {
        padding: 28px 32px;
    }
    .icon{
        position: absolute;
        inset: 0;
        border-radius: 100%;
        z-index: 1;
        overflow: clip;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .deco{
        position: absolute;
        z-index: 1;
        top: -50%;
        left: -50%;
        width: 200%;
        pointer-events: none;
        transform: rotate(var(--rotate));
    }
    img{
        max-width: 200% !important;
    }
    .iconspn{
        flex-shrink: 0;
        display: block!important;
        margin: 0 14px 0 0;
        width: 58px;
        height: 58px;
        position: sticky!important;
        top: 22px ;
        left: 0;
    }
    header{
        display: flex;
        align-items: baseline;
        white-space: nowrap;
    }
    .name{
        flex-shrink: 1;
        display: block;
        margin: 0 0.5em 0 0;
        padding: 0;
        overflow: hidden;
        font-size: 1em;
        font-weight: 700;
        text-decoration: none;
        text-overflow: ellipsis;
    }
    .id{
        flex-shrink: 9999999;
        margin: 0 0.5em 0 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    footer{
        position: relative;
        display: flex;
        z-index: 1;
        padding-left:0 !important;
        padding-bottom: 8px;
        padding-top: 8px;
        padding-right: 8px;
    }
    i{
        opacity: .7;
        vertical-align: -12%;
        line-height: 1em;
        margin-right: 28px;
    }
</style>