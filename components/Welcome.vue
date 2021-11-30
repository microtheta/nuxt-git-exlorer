<script>
export default {
  methods: {
    navigateToProfile({ name }) {
      if (!name) {
        return
      }
      this.$router.push({ path: `/user/${name}` })
    },
  },
}
</script>

<template>
  <div class="relative flex items-top justify-center sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:p-6 lg:px-8">
      <h2 class="mb-2">Welcome to nuxt application!</h2>
      <user-search :onSelect="navigateToProfile" />
    </div>
  </div>
</template>
