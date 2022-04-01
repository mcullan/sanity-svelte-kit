<script>
	import '../styles/dracula.css';
	import Prism from 'prismjs';
	import { marked } from 'marked';
	import { browser } from '$app/env';
	
	const highlight = (err, result) => {
		if (browser) {
			const codeBlocks = document.querySelectorAll('.code');
			Prism.highlight(codeBlocks);
		}
		return result;
	};
	
	export let markdown;
	const parsedMarkdown = marked.parse(markdown, highlight);
</script>

<div>
	<!-- {@html parsedMarkdown} -->
	{@html parsedMarkdown}
</div>
