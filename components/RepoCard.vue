<script>
export default {
  props: ['repo'],
}
</script>
<style>
.repo-card .card-body {
  height: 160px;
  overflow: auto;
}
</style>
<template>
  <div class="repo-card">
    <b-card :title="repo.description" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0 font-semibold">{{ repo.name }}</h6>
      </template>
      <b-card-text>
        <b-link :href="repo.html_url" target="_blank"
          >{{ repo.full_name }}
          <b-icon icon="link" class="ml-1" />
        </b-link>

        <div>
          <b-badge
            class="mr-1"
            variant="light"
            :key="topic"
            v-for="topic in repo.topics"
            >{{ topic }}</b-badge
          >
        </div>
      </b-card-text>
      <template #footer>
        <span class="my-2"
          ><span class="my-1">Stars: </span> {{ repo.stargazers_count }}</span
        >
        &bull;
        <span class="my-2"
          ><span class="my-1">Forks: </span> {{ repo.forks }}</span
        >
        &bull;
        <span class="my-2"
          ><span class="my-1">Issues:</span> {{ repo.open_issues }}</span
        >
      </template>
    </b-card>
  </div>
</template>
