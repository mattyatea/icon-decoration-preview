<script setup lang="ts">
import {defineProps, ref, defineEmits} from 'vue';
defineProps(['type']);

const uploadedImage = ref(null);
const inputValue = ref<string>('');
const inputnumValue = ref<string>('0');
const emit = defineEmits(['update-image', 'update-input']);

function onFileChange(event: { target: any; }) {
    const target = event.target;
    if (target && target.files) {
        createImage(target.files[0]);
    }
}

function createImage(file: Blob) {
    const reader = new FileReader();
    reader.onload = e => {
        uploadedImage.value = e.target.result;
        emit('update-image', uploadedImage.value);
    };
    reader.readAsDataURL(file);
}

const updateInput = (value: string) => {
    inputValue.value = value;
    emit('update-input', inputValue.value);
};

</script>

<template>
    <div class="file mb-4" v-if="type === 'file'">
        <label class="w-full h-11 block">
        <input type="file" @change="onFileChange" accept="image/*" /><p class="text-center pt-2.5 "> デコレーションをアップロード</p>
        </label>
    </div>
    <input v-else-if="type === 'range'" type="range" class="mb-4" minname="range" min="0" max="360" v-model="inputnumValue" @input="updateInput($event.target.value)"  />
    <input v-else placeholder="@mattyatea@prismisskey.space" class="text mb-4" type="text" v-model="inputValue" @input="updateInput($event.target.value)" />
</template>

<style scoped>
    input[type="text"] {
        font-size: 16px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #234;
        color: #fff;
        width: 20em;
    }
    input[type="text"]:focus{
        outline: none;
        border: 1px solid #123;
    }
    input[type="range"]{
        -webkit-appearance: none;
        width: 20em;
        height: 12px;
        border-radius: 10px;
        border: solid 1px #ffffff;
        background-color: #223344;
        outline: 0;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: #012;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
            border: 2px solid #234;
        }
        &::-moz-range-thumb {
            background: #012;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
            border: 2px solid #234;
        }
        &::-moz-focus-outer {
            border: 0;
        }
    }
    input[type="file"] {
        display: none;
    }
    .file {
        font-size: 16px;

        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #234;
        color: #fff;
        width: 20em;
    }
    .file:hover{
        border: 1px solid #123;
        cursor: pointer;
    }
    label:hover{
        cursor: pointer;
    }
</style>