<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <NuxtLink to="/">
        <b-navbar-brand>
          <NuxtLogo />
        </b-navbar-brand>
      </NuxtLink>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://github.com/microtheta/nuxt-git-exlorer"
            target="_blank"
          >
            <GitLogo />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
