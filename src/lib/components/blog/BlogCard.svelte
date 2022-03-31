<script>
    export let directory = "blog";
	export let data = { title: '', date: '', imgSrc: '', imgAlt: '', imgDark: '' };
	export let invertClasses = 'dark:invert invert-0 brightness-100 dark:brightness-[.6] contrast-100 dark:contrast-[3] hue-rotate-0 dark:hue-rotate-180';
	const _invertClasses = data.imgDark ? invertClasses : '';
	export const handleClick = (e) => {};
</script>

<a
	href="/{directory}/{data.id}"
	class="
    text-xs
    h-40
    md:w-54
    g bg-p3-2 dark:bg-transparent
    border-transparent
    overflow-hidden
    rounded-[8px]
    hover:scale-[.98]
    scale-100
    group
    cursor-pointer
"
>
	<div
		class="
h-[80px]
relative
w-full
max-w-md
mx-auto
rounded-[8px] overflow-hidden
"
	>
		<img
			class="
absolute
w-full
-translate-y-1/4
scale-100 group-hover:scale-[1.01] origin-center
{_invertClasses}
"
			src={`/src/routes/${directory}/${data.id}/${data.imgSrc}` }
			alt={data.imgAlt}
		/>
	</div>
	<h3 class="font-mono text-sm px-1 py-1 text-p3-6 dark:text-p3-1 duration-500 transition-colors">
		{data.title}
	</h3>
	<h4 class="text-xs px-1 text-p3-4 dark:text-p3-3 duration-500 transition-colors">
		Published: {data.date}
	</h4>
</a>

<style>
	div,
	img {
		transition: transform 100ms, filter 500ms, background 500ms, border 500ms;
	}
</style>
