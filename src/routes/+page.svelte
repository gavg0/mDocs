<script>
  import SvelteMarkdown from 'svelte-markdown'
  import myImage from './tailwing.png';
  import randomSVG from './random.svg';
  

</script>
<svelte:head>
    <title>mDocs</title>
    <meta name="description" content="Write your Documentation once, export it for every purpose">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"> 
</svelte:head>
<body class="dark:bg-bgblack bg-slate-100 w-screen h-screen"> 
    <nav class="flex fixed z-50 top-2 lg:top-5 items-center justify-between flex-wrap bg-clip-padding backdrop-filter bg-slate-200 backdrop-blur-sm bg-opacity-10 border dark:border-gray-700 w-screen rounded-2xl p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="index.html" class="font-semibold text-xl text-black dark:text-white tracking-tight">mDocs</a>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 dark:border-teal-400 hover:text-white hover:border-white" id="menu-button">
            <svg class="fill-black dark:fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full hidden lg:block lg:flex-grow lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow lg:text-right">
            <a href="aboutUs.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
              Über uns
            </a>
            <a href="aboutUs.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
                Mehr erfahren
            </a>
            <a href="article.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
              Artikel finden/erstellen
            </a>
            <a href="404.html" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100">
              Anmelden  
            </a>
          </div>
        </div>
      </nav> 
    <div class="mx-auto my-auto mt-24 lg:mt-28 pt-12 max-w-9xl rounded-3xl relative shadow-2xl lmao">
      
        <h1 class="text-center text-white text-4xl lg:text-6xl font-bold">
            Effortless Code Documentation: <br>
            <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-textGradient5 to-textGradient6">Build, Export,</span> 
            and Showcase with Ease!</h1>
        <div class="flex flex-col lg:flex-row  pt-12 pb-12 max-w-8xl mx-auto ">
            <div class="w-screen lg:w-1/2 relative text-center lg:text-left my-auto">
                <p class="text-2xl text-white px-6">
                <span class="text-4xl lg:text-5xl font-bold">Write your Docs once,<br>
                use it everywhere.
                </span><br>
                Write it in Markdown and export it <br>
                as a stunning HTML Markdown page, <br>
                a GitHub documentation, or a PDF file.
              </p>
            </div>
            <div class="w-screen lg:w-1/2 max-w-7xl">
                <img src={myImage} alt="MockUp" class="relative w-full  mx-auto"/>
            </div>
            </div>
          </div>            
            <span class="w-1/4 text-center mx-auto text-white">
              Write once in
            </span>
          
          <div class="h-screen bg-slate-900 mt-12">
          <div class="flex max-w-9xl mx-auto">
            <div class="w-1/2">
              <p class="py-6 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-black bg-gradient-to-r from-textGradient1 to-textGradient2">Short description</p>
              <span class="text-2xl lg:text-3xl dark:text-white  select-auto">
               Build your own comprehensive documentation effortlessly, 
               export it as a stunning HTML Tailwind Markdown page, or create a visually appealing GitHub documentation. <br>
               Take advantage of our AI-powered auto-summarization feature to simplify your code summaries. Experience seamless documentation creation like never before!  
              </span>
              <div class="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 bg-slate-800  bg-clip-padding backdrop-filter p-6 backdrop-blur-sm bg-opacity-10 rounded-lg">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    
                  <p>lmao</p>
        </div>
        <div class="w-1/2">
        
        </div>
        </div>
        </div>
    <div class="h-screen rounded-3xl">
        
    </div>

</body> 