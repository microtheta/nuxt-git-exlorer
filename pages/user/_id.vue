<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">
          <div class="m-4">
            <user-profile :id="id" />
          </div>
        </b-col>
        <b-col>
          <repositories :id="id" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
