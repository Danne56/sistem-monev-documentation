import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  title: "Sistem Monev API",
  description: "Backend Untuk Sistem Monev Desa Wisata",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: nav(),

    sidebar: {
      "/endpoints/": { base: "/endpoints/", items: sidebarEndpoints() },
      "/schemas/": { base: "/schemas/", items: sidebarSchemas() },
    },

    editLink: {
      pattern:
        "https://github.com/Danne56/sistem-monev-documentation/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Danne56/sistem-monev-documentation",
      },
    ],
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Endpoints",
      link: "/endpoints/auth-register",
      activeMatch: "/endpoints/",
    },
    {
      text: "Schemas",
      link: "/schemas/users",
      activeMatch: "/schemas/",
    },
  ];
}

function sidebarEndpoints(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Authentication",
      collapsed: false,
      base: "/endpoints/auth-",
      items: [
        { text: "/register", link: "register" },
        { text: "/login", link: "login" },
        { text: "/verify", link: "verify-user" },
        { text: "/password", link: "password-reset" },
        { text: "/logout", link: "logout" },
      ],
    },
    {
      text: "Manajemen Desa Wisata",
      collapsed: false,
      base: "/endpoints/api-",
      items: [
        { text: "/desa-wisata", link: "desa-wisata" },
        { text: "/deskripsi-wisata", link: "deskripsi-wisata" },
        { text: "/deskripsi-desa", link: "deskripsi-desa" },
        { text: "/status-desa", link: "status-desa" },
        { text: "/permintaan", link: "permintaan" },
        { text: "/skor", link: "skor" },
      ],
    },
    {
      text: "User Management",
      collapsed: false,
      items: [{ text: "/users", link: "api-users" }],
    },
  ];
}

function sidebarSchemas(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Schemas",
      items: [
        { text: "Desa Wisata", link: "desa_wisata" },
        { text: "Deskripsi Wisata", link: "deskripsi_wisata" },
        { text: "Deskripsi Desa", link: "deskripsi_desa" },
        { text: "Permintaan", link: "permintaan" },
        { text: "Skor", link: "skor_desa_wisata" },
        { text: "Status Desa", link: "status_desa" },
        { text: "Token Blacklist", link: "token_blacklist" },
        { text: "Users", link: "users" },
      ],
    },
  ];
}
