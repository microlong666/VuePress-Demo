module.exports = {
    base: '/VuePress-Demo/',
    title: 'VuePress',
    description: 'Vue 驱动的静态网站生成器',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            { text: '指南', link: 'https://vuepress.vuejs.org/zh/guide/' },
            { text: '配置', link: 'https://vuepress.vuejs.org/zh/config/' },
            { text: '插件', link: 'https://vuepress.vuejs.org/zh/plugin/' },
            { text: '主题', link: 'https://vuepress.vuejs.org/zh/theme/' },
            {
                text: '了解更多',
                items: [
                    { text: 'API', link: '/' },
                    { text: '开发指南', link: '/' },
                    { text: '其他', link: '/' }
                ]
            },
            {
                text: '选择语言',
                items: [
                    { text: 'English', link: 'https://vuepress.vuejs.org/' },
                    { text: '简体中文', link: '/' }
                ]
            },
            { text: '0.x', link: 'https://v0.vuepress.vuejs.org/' },
            { text: 'GitHub', link: 'https://github.com/microlong666' },
        ]
    }
}