<script>
      import { marked } from 'marked';

    export let markdown;

    const parsedMarkdown = marked.parse(markdown)
</script>

    {@html parsedMarkdown}