<template>
    <div>
        <button class="mt-4" @click="ToggleColorMode()">ライト、ダークを切り替える</button>
    </div>
</template>
<script setup>
function ToggleColorMode() {
    useColorMode().preference = useColorMode().preference === 'light'? 'dark' : 'light';
    useState('isDark', () => useColorMode().preference)
}
</script>
<style scoped>
button {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #234;
    color: #fff;
    width: 20em;
}
</style>