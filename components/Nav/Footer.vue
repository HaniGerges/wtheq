<template>
  <section class="bg-white">
    <div class="max-w-screen-xl p-4 mx-auto overflow-hidden sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <a
            @click="$router.push(localePath('/'))"
            class="text-base leading-6 text-gray-500 hover:text-gray-900 pointer"
          >
            {{ $t(`home.myProfile`) }}
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            @click="$router.push(localePath('payment'))"
            class="text-base leading-6 text-gray-500 hover:text-gray-900 pointer"
          >
            {{ $t(`home.payment`) }}
          </a>
        </div>
      </nav>

      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © 2023 Wtheq, Inc. All rights reserved.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  h6 {
    font-size: 0.8rem !important;
    line-height: 21px;
    text-align: center;
  }
  background: #f8f8f8;
  padding: 30px 0;
  color: #2c4e8e;
  border-bottom: 14px solid #1b76bc;
  a {
    color: #2c4e8e;
    text-align: center;
  }
  .appdown {
    li {
      list-style: none;
      text-align: center;
      img {
      }
    }
  }
  ul {
    text-align: center;
  }
}
</style>
