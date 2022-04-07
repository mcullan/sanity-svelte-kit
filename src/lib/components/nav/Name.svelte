<script>
	export let name = 'Michael Cullan';

	let _class = "\
    text-p3-5 \
    group-hover:text-p3-3 \
    group-active:text-p3-4  \
    dark:text-p3-2 \
    dark:group-hover:text-p3-4 \
    dark:group-active:text-gray-400  \
    group-hover:scale-[1.001] \
    group-active:scale-[.9999] \
    whitespace-nowrap \
    font-mono \
    text-2xl \
    font-light\
    transition-colors\
    duration-500 \
    hover:duration-150 \
    group-active:duration-150 \
    origin-left \
    ";

</script>

<input class="hidden" type="checkbox" name="btnControl" id="btnControl" />
<label for="btnControl" class="group cursor-pointer">
    <a href="/">
        <h1 class={_class}>{name}</h1>
    </a>
</label>
    