<script>
	import '../styles/prism.css';
	import Prism from 'prismjs';
	let language = 'javascript';
	import { marked } from 'marked';
	export let markdown;
	// const parsedMarkdown = Prism.highlight(marked.parse(markdown), Prism.languages[language]);
	const parsedMarkdown = marked.parse(markdown);
</script>

<div>
	{@html parsedMarkdown}
</div>
