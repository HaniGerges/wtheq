<template>
  <div
    class="sidebar min-h-screen w-14 md:w-12 overflow-hidden hover:w-56 hover:bg-white hover:shadow-lg"
    :class="$i18n.locale === 'ar' ? 'border-l' : 'border-r'"
  >
    <div class="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>
        <div class="w-full mx-auto p-2.5">
          <img src="@/assets/logo/logo.png" class="w-36" alt="" />
        </div>
        <ul class="mt-6 space-y-4 tracking-wide">
          <li class="min-w-max ">
            <NuxtLink
              :to="localePath('/')"
              class="relative flex items-center space-x-4 px-4 py-3"
            >
              <font-awesome-icon :icon="['fa', 'user']" class="px-auto" />

              <span class="px-4 group-hover:text-gray-700">{{$t(`home.myProfile`)}}</span>
            </NuxtLink>
          </li>

          <li class="min-w-max ">
            <NuxtLink
              :to="localePath('payment')"
              class="relative flex items-center space-x-4 px-4 py-3"
            >
              <font-awesome-icon :icon="['fas', 'credit-card']" class="px-auto" />

              <span class="px-4 group-hover:text-gray-700">{{$t(`home.payment`)}}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- <div class="w-max -mb-3">
        <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
          
          <span class="group-hover:text-gray-700">Logout</span>
        </a>
      </div> -->
    </div>
  </div>
</template>
