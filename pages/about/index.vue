<template>
<h1>About at home </h1>
</template>
<script setup>
import {useSeoMeta} from "#unhead/composables";

useSeoMeta({
  title: "My amazing project",
  ogTitle: "My Amazing project",
  description: "This is a description",
  ogDescription: "This is a description",
  ogImage: "https://example.com/image.png",
  twitterCard:'summery_large_image',
});
</script>