<script lang="ts">
	import { href, site } from '#lib/site.js';

	const image = site.hero.image!;
	const { alt, width, height } = image;
</script>

<div class="scratch-hero">
	<div class="scratch-media scratch-hero-media">
		<img class="scratch-light" src={href(image.src)} {alt} {width} {height} decoding="async" />
		<img class="scratch-dark" src={href('/docs/hero-dark.webp')} {alt} {width} {height} decoding="async" />
	</div>
	<details class="scratch-hero-clip">
		<summary>Watch the total come together</summary>
		<div class="scratch-media">
			<video class="scratch-light" controls muted loop playsinline preload="none" aria-label="Formula suggestion accepted and total calculated" poster={href('/docs/hero-light.webp')} width="1000" height="720">
				<source src={href('/docs/hero-demo-light.mp4')} type="video/mp4" />
			</video>
			<video class="scratch-dark" controls muted loop playsinline preload="none" aria-label="Formula suggestion accepted and total calculated" poster={href('/docs/hero-dark.webp')} width="1000" height="720">
				<source src={href('/docs/hero-demo-dark.mp4')} type="video/mp4" />
			</video>
			<img class="scratch-light scratch-poster" src={href('/docs/hero-light.webp')} {alt} width="1000" height="720" loading="lazy" />
			<img class="scratch-dark scratch-poster" src={href('/docs/hero-dark.webp')} {alt} width="1000" height="720" loading="lazy" />
		</div>
	</details>
</div>
