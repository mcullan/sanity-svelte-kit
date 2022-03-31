<script>
      import { marked } from 'marked';
    import '$lib/../styles/prism.css'
    export let markdown;

    const parsedMarkdown = marked.parse(markdown)
</script>

  <div>
    {@html parsedMarkdown}
  </div>
