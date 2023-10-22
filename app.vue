<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
      <div class="preview flex">
          <MkProf :userId="userId" :file="decoImage" />
          <MkNote :userId="userId" :file="decoImage" />
      </div>

    <PrInput @update-input="handleInputImage" />
    <PrInput type="file" @update-image="handleUpdateImage" />
  </div>
</template>

<script setup lang="ts">
const userId = ref();
const decoImage = ref();
const handleUpdateImage = (newImage: any) => {
    decoImage.value = newImage;
};
const handleInputImage = (newText: any) => {
    userId.value = newText;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=M+PLUS+Rounded+1c&display=swap');
html{
  background-color: #012;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif !important;
  rotate: 0.03deg;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
    .preview{
        width: 100vw;
        flex-direction: column;
    }
}
</style>