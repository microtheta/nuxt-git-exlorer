<script>
import RepoCard from '~/components/RepoCard.vue'
export default {
  components: { RepoCard },
  props: ['id'],
  data() {
    return {
      repos: [],
      loading: true,
      error: '',
    }
  },
  methods: {
    async fetchRepos() {
      try {
        this.repos = await fetch(
          `https://api.github.com/users/${this.id}/repos`
        ).then((data) => data.json())
        this.loading = false
      } catch (e) {
        this.error = e.message || 'Something went wrong.'
        this.loading = false
      }
    },
  },
  mounted() {
    this.fetchRepos()
  },
}
</script>
<template>
  <div>
    <div v-if="this.loading">Loading...</div>
    <div v-else-if="this.error">{{ this.error }}</div>
    <div v-else-if="!this.repos.length">No repositories found.</div>
    <div v-else>
      <b-container>
        <b-row>
          <b-col cols="6" v-for="repo in repos" :key="repo.id" class="my-2">
            <repo-card :repo="repo" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
