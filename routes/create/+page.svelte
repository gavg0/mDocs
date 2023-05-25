<script>

    import SvelteMarkdown from 'svelte-markdown'
    var source = `
    # This is a header
  
  This is a paragraph.
  
  * This is a list
  * With two items
    1. And a sublist
    2. That is ordered
      * With another
      * Sublist inside
  
  | And this is | A table |
  |-------------|---------|
  | With two    | columns |
  `
  
  </script>
  <head>
    
  </head>
  <div class="bg-bgDark">
    <div class="flex">
      <div class="w-1/2 h-screen">
        <!-- Content for the left side -->
        <!-- Text input that gets converted from markdown to html-->
          <textarea bind:value={source} class="w-full min-h-screen mx-auto focus:outline-none p-2 bg-black text-white"/>
      </div>
      <div class="w-1/2 min-h-screen">
        <!-- Content for the right side -->
          <article class="prose prose-lg text-white">
              <SvelteMarkdown {source}/>
            </article>
      </div>
    </div>
  </div>    
    
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
    
  </style>

  