module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'دليل مستخدم Bagisto',
    description: 'استثمر الإمكانيات الكاملة لـ Bagisto مع دليل المستخدم المفصل لدينا. هذه الوثائق خطوة بخطوة مثالية للمبتدئين، تغطي التثبيت، التكوين، والميزات المتقدمة لمساعدتك في إتقان منصة التجارة الإلكترونية الخاصة بك.',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
        ['script', { src: 'https://vikastiwari-webkul.github.io/ai-chatbot/chatbot.js', async: true}]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'آخر تحديث',
        repo: 'bagisto/bagisto',
        repoLabel: 'ساهم في Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'ساعدنا في تحسين هذه الصفحة على Github.',

        logo: '/logo.png',
        nav: [
            { text: 'الرئيسية', link: '/' },
            { text: 'الإضافات', link: 'https://bagisto.com/en/extensions/' },
            { text: 'منتدى المجتمع', link: 'https://forums.bagisto.com/' }
        ],

        contactUs: { text: 'اتصل بنا', link: 'https://bagisto.com/en/contacts/' },

        sidebar: {
            '/2.2.0/': require('./version-configs/2.2.0'),
            '/2.1.0/': require('./version-configs/2.1.0'),   
            '/2.0/': require('./version-configs/2.0')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};