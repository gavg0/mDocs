import { c as create_ssr_component, d as add_attribute } from "../../chunks/index2.js";
import "marked";
const myImage = "/_app/immutable/assets/tailwing.973e44a4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rb59d9_START -->${$$result.title = `<title>mDocs</title>`, ""}<meta name="description" content="Write your Documentation once, export it for every purpose"><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- HEAD_svelte-rb59d9_END -->`, ""}
<body class="dark:bg-black bg-slate-100"><div class="mx-auto my-auto pt-48 relative"><h1 class="text-center dark:text-white text-6xl font-bold">Effortless Code Documentation: <br>
            <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Build, Export,</span> 
            and Showcase with Ease!</h1></div>
        <div class="flex flex-col lg:flex-row pt-12 pb-24 max-w-9xl mx-auto"><div class="w-screen lg:w-1/2 relative my-auto"><p class="text-4xl text-white px-6"><span class="text-6xl font-bold">Write your Docs once,<br>
                use it everywhere.
                </span><br>
                Write it in Markdown and <br> 
                export it as a stunning HTML Markdown page, <br>
                a GitHub documentation, or a PDF file.
            </p>
            <p class="relative mx-auto bg-blue p-6 rounded-lg drop-shadow-sm">Try it now!
            </p></div>
            <div class="w-screen lg:w-1/2 max-w-7xl"><img${add_attribute("src", myImage, 0)} alt="MockUp" class="relative w-full mx-auto"></div></div>
          
    <div class="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-700 border-gray-100 shadow-2xl max-w-7xl mx-auto rounded-3xl p-6 relative"><p class="py-6 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-black dark:bg-gradient-to-r dark:from-textGradient1 dark:to-textGradient2">Short description</p>
        <span class="text-3xl dark:text-white select-auto">Streamline your code documentation process with our powerful online tool! <br>
            Build your own comprehensive documentation effortlessly, 
            export it as a stunning HTML Tailwind Markdown page, or create a visually appealing GitHub documentation. <br>
            Take advantage of our AI-powered auto-summarization feature to simplify your code summaries. Experience seamless documentation creation like never before!  
        </span></div>
    <div class="h-screen rounded-3xl"></div></body>`;
});
export {
  Page as default
};
