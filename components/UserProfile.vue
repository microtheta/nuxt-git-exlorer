<script>
import mapProfileToStats from '../helpers/mapProfileToStats'

export default {
  props: ['id'],
  data() {
    return {
      stats: [],
      user: {},
      error: '',
    }
  },
  methods: {
    async fetchProfile()  {
      try {
        this.user = await fetch(
          `https://api.github.com/users/${this.id}`
        ).then((data) => data.json())

        this.stats = mapProfileToStats(this.user)
      } catch (e) {
        this.error = e.message || 'Something went wrong.'
        alert(e.message)
      }
    }
  },
  mounted() {
    this.fetchProfile()
  }
}
</script>
<template>
  <div>
    <div v-if="this.error">{{this.error}}</div>
    <div v-else-if="!this.user.id">Loading...</div>
    <div v-else>
    <b-img
      class="mx-auto"
      :src="this.user.avatar_url"
      style="height: 20rem; width: 20rem"
      rounded="circle"
      alt="Circle image"
    ></b-img>

    <b-card no-body class="mx-auto mt-2" style="max-width: 20rem">
      <b-card-text>
        <div class="p-3">
          <h2 class="text-2xl leading-7 font-semibold">{{this.user.name}}</h2>
          <h3 class="text-xl leading-7 font-light">{{this.user.login}}</h3>
        </div>
      </b-card-text>
      <b-list-group flush>
        <b-list-group-item
          :key="stat.title"
          v-for="stat in stats"
          class="d-flex justify-content-between align-items-center py-2"
        >
          <span>
            <b-icon
              class="mr-2"
              :icon="stat.icon"
              scale="1"
              variant="secondary"
            ></b-icon>
            {{ stat.title }}
          </span>
          <b-badge variant="primary" pill v-if="stat.badge">{{
            stat.badge
          }}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
    </div>
  </div>
</template>
