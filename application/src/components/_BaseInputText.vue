<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["email", "password", "search", "tel", "text", "url"].includes(value);
      }
    },
    modelValue: {}
  }
};
</script>

<template>
  <input :type="type" :value="modelValue" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" />
</template>
