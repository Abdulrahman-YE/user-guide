<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        خذني إلى الصفحة الرئيسية.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `لا يوجد شيء هنا.`,
  `كيف وصلنا إلى هنا؟`,
  `هذه صفحة غير موجودة (أربعة-أربعة).`,
  `يبدو أن لدينا بعض الروابط المعطلة.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>