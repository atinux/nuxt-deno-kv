<script setup>
const { loggedIn, clear } = useUserSession()

useSeoMeta({
  title: 'Nuxt Guestbook',
  description:
    'A Nuxt demo hosted with Edge-side rendering, authentication and queyring a SQLite database',
  ogSiteName: 'Nuxt Guestbook',
  ogType: 'website',
  ogImage: 'https://nuxt-guestbook.pages.dev/social-image.png',
  twitterImage: 'https://nuxt-guestbook.pages.dev/social-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UHeader class="border-none md:pt-4" :ui="{ container: 'bg-gray-400/5 md:rounded-full border-b md:border dark:border-gray-800' }">
    <template #logo>
      Nuxt Guestbook
    </template>
    <template #right>
      <UColorModeButton />
      <UButton v-if="loggedIn" color="gray" @click="clear">
        Logout
      </UButton>
      <UButton v-else icon="i-simple-icons-github" color="gray" to="/auth/github" external>
        Login with GitHub
      </UButton>
    </template>
  </UHeader>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <UFooter class="md:pb-4" :ui="{ bottom: { container: 'bg-gray-400/5 md:rounded-full border-t md:border dark:border-gray-800' } }">
    <template #left>
      Published under MIT License.
    </template>
    <template #right>
      <UButton to="https://x.com/Atinux" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" />
      <UButton to="https://github.com/atinux/nuxt-guestbook" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
  </UFooter>
  <UNotifications />
</template>
