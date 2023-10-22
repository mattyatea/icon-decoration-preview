<script setup lang="ts">
import {defineProps, ref, defineEmits} from 'vue';
defineProps(['type']);

const uploadedImage = ref(null);
const inputValue = ref<string>('');

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
    <div class="file mt-4" v-if="type === 'file'">
        <label class="w-full h-11 block">
        <input type="file" @change="onFileChange" accept="image/*" /><p class="text-center pt-2.5 "> デコレーションをアップロード</p>
        </label>
    </div>
    <input v-else placeholder="@mattyatea@prismisskey.space" class="text" type="text" v-model="inputValue" @input="updateInput($event.target.value)" />
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