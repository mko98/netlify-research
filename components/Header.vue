<template>
  <header class="bg-white">
    <nav
      class="flex items-center justify-end lg:justify-center p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div v-for="item in navigation" :key="item.name">
          <NuxtLink
            :to="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
            prefetch
            >{{ item.name }}</NuxtLink
          >
        </div>
      </div>
    </nav>
    <HeadlessDialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-10" />
      <HeadlessDialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-end">
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div v-for="item in navigation" :key="item.name">
                <NuxtLink
                  :to="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  prefetch
                  >{{ item.name }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </HeadlessDialogPanel>
    </HeadlessDialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Call To Action", href: "/cta" },
];

const mobileMenuOpen = ref(false);
</script>
