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
<body class="dark:bg-black bg-slate-100">
    <svg width="100%"height="1100" viewBox="0 0 264 234" fill="none" xmlns="http://www.w3.org/2000/svg"  class="absolute top-0 right-0 mx-auto">
        <g filter="url(#filter0_f_9_6)">
        <ellipse cx="94" cy="97" rx="43" ry="32" fill="#03FFF0"/>
        </g>
        <g filter="url(#filter1_f_9_6)">
        <path d="M143 117.5C143 127.428 142.14 137.233 140.482 146.217C138.824 155.202 136.408 163.144 133.407 169.478C130.406 175.811 126.893 180.381 123.119 182.861C119.345 185.34 115.403 185.669 111.573 183.823C107.744 181.977 104.121 178.003 100.964 172.183C97.8063 166.362 95.1918 158.839 93.3065 150.151C91.4212 141.462 90.3116 131.82 90.0567 121.914C89.8018 112.008 90.408 102.08 91.8319 92.8389L116.5 117.5H143Z" fill="#EB00FF"/>
        </g>
        <g filter="url(#filter2_f_9_6)">
        <ellipse cx="159.5" cy="92.5" rx="51.5" ry="39.5" fill="#804BF0"/>
        </g>
        <defs>
        <filter id="filter0_f_9_6" x="0" y="14" width="188" height="166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_9_6"/>
        </filter>
        <filter id="filter1_f_9_6" x="41" y="43.8389" width="151" height="190.161" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="24.5" result="effect1_foregroundBlur_9_6"/>
        </filter>
        <filter id="filter2_f_9_6" x="55" y="0" width="209" height="185" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_9_6"/>
        </filter>
        </defs>
        </svg>
        
    <div class="mx-auto my-auto pt-48 relative">
        <h1 class="text-center dark:text-white text-6xl font-bold">
            Effortless Code Documentation: <br>
            <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Build, Export,</span> 
            and Showcase with Ease!</h1>
    </div>
        <div class="flex flex-col lg:flex-row  pt-12 pb-24 max-w-9xl mx-auto">
            <div class="w-screen lg:w-1/2 relative my-auto">
                <p class="text-4xl text-white px-6">
                <span class="text-6xl font-bold">Write your Docs once,<br>
                use it everywhere.
                </span><br>
                Write it in Markdown and <br> 
                export it as a stunning HTML Markdown page, <br>
                a GitHub documentation, or a PDF file.
            </p>
            <p class="relative mx-auto bg-blue p-6 rounded-lg drop-shadow-sm">
            Try it now!
            </p>
            </div>
            <div class="w-screen lg:w-1/2 max-w-7xl">
                <img src={myImage} alt="MockUp" class="relative w-full  mx-auto"/>
            </div>
          </div>
          
    <div class="  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border dark:border-gray-700 border-gray-100 shadow-2xl max-w-7xl mx-auto rounded-3xl p-6 relative">
        <p class="py-6 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-black dark:bg-gradient-to-r dark:from-textGradient1 dark:to-textGradient2">Short description</p>
        <span class="text-3xl dark:text-white  select-auto">
            Streamline your code documentation process with our powerful online tool! <br>
            Build your own comprehensive documentation effortlessly, 
            export it as a stunning HTML Tailwind Markdown page, or create a visually appealing GitHub documentation. <br>
            Take advantage of our AI-powered auto-summarization feature to simplify your code summaries. Experience seamless documentation creation like never before!  
        </span>
    </div>
    <div class="h-screen rounded-3xl">
        
    </div>

</body> 