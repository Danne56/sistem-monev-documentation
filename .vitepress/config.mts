import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sistem Monev API",
  description: "Backend Untuk Sistem Monev Desa Wisata",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Endpoints', link: '/endpoints/auth-register' },
      { text: 'Schemas', link: '/schemas/users' }
    ],

    sidebar: {
      "/endpoints/": [
        {
          text: 'Account',
          collapsed: false,
          items: [
            { text: "/register", link: "/endpoints/auth-register" },
            { text: "/login", link: "/endpoints/auth-login" },
            { text: "/verify", link: "/endpoints/auth-verify-user" },
            { text: "/forgot-password", link: "/endpoints/auth-forgot-password" },
            { text: "/reset-password", link: "/endpoints/auth-reset-password" },
            { text: "/logout", link: "/endpoints/auth-logout" }
          ]
        },
        {
          text: "Manajemen Desa Wisata",
          collapsed: false,
          items: [
            { text: "/desa-wisata", link: "/endpoints/api-desa-wisata" },
            { text: "/kategori", link: "/endpoints/api-kategori" },
            { text: "/status-desa", link: "/endpoints/api-status-desa" },
            { text: "/deskripsi-wisata", link: "/endpoints/api-deskripsi-wisata" },
            { text: "/permintaan", link: "/endpoints/api-permintaan" },
          ],
        },
      ],
      "/schemas/": [
        {
          text: "Schemas",
          items: [
            { text: "Users", link: "/schemas/users" },
            { text: "Kategori", link: "/schemas/kategori" },
            { text: "Status Desa", link: "/schemas/status-desa" },
            { text: "Desa Wisata", link: "/schemas/desa-wisata" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Danne56/sistem-monev-api' }
    ]
  }
})
