<template>
  <div class="flex flex-col justify-center w-full h-full mx-auto items-center">
    <div class="flex-row mb-10">
      <button
        type="button"
        class="m-2 max-w-fit rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="onCtaClick('CTA1')"
      >
        CTA 1
      </button>

      <button
        type="button"
        class="m-2 max-w-fit rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="onCtaClick('CTA2')"
      >
        CTA 2
      </button>

      <button
        type="button"
        class="m-2 max-w-fit rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="onCtaClick('CTA3')"
      >
        CTA 3
      </button>
    </div>
    <form @submit.prevent="handleFormSubmit">
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              Personal Information
            </h3>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >First name</label
                >
                <input
                  id="first-name"
                  v-model="formData.firstName"
                  type="text"
                  name="first-name"
                  autocomplete="given-name"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Last name</label
                >
                <input
                  id="last-name"
                  v-model="formData.lastName"
                  type="text"
                  name="last-name"
                  autocomplete="family-name"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email-address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <input
                  id="email-address"
                  v-model="formData.email"
                  type="text"
                  name="email-address"
                  autocomplete="email"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Username</label
                >
                <input
                  id="username"
                  v-model="formData.username"
                  type="text"
                  name="username"
                  autocomplete="username"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div class="col-end-1">
                <button
                  type="submit"
                  class="max-w-fit rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const $gtm = useGTM();

interface form {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

const formData: form = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
};
function handleFormSubmit() {
  $gtm.trackEvent({
    event: null, // Event type [default = 'interaction'] (Optional)
    category: "Form",
    action: "Submit",
    label: `User form`,
    value: formData,
  });
}
function onCtaClick(buttonName: string) {
  $gtm.trackEvent({
    event: null, // Event type [default = 'interaction'] (Optional)
    category: "Button",
    action: "click",
    label: `${buttonName} clicked`,
  });
}
</script>

<style scoped></style>
