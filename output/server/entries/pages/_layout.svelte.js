import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}
  <nav class="flex fixed z-50 top-5 items-center justify-between flex-wrap bg-clip-padding backdrop-filter bg-slate-200 backdrop-blur-sm bg-opacity-10 border dark:border-gray-700 w-screen rounded-2xl mx-auto p-6"><div class="flex items-center flex-shrink-0 text-white mr-6"><a href="index.html" class="font-semibold text-xl text-black dark:text-white tracking-tight">mDocs</a></div>
    <div class="block lg:hidden"><button class="flex items-center px-3 py-2 border rounded text-teal-200 dark:border-teal-400 hover:text-white hover:border-white" id="menu-button"><svg class="fill-black dark:fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div>
    <div class="w-full hidden lg:block lg:flex-grow lg:items-center lg:w-auto"><div class="text-sm lg:flex-grow lg:text-right"><a href="aboutUs.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">Über uns
        </a>
        <a href="aboutUs.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">Mehr erfahren
        </a>
        <a href="article.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">Artikel finden/erstellen
        </a>
        <a href="404.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100">Anmelden
        </a></div></div></nav>`;
});
export {
  Layout as default
};
