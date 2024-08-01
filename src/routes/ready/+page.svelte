<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
</script>

<div class="mx-auto flex min-h-fit max-w-sm grow flex-col items-center justify-center">
	<div class="mb-8 flex items-center justify-center text-[#715ec2]">
		<svg height="5rem" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M49.555 3.465L78.845 32.755C83.465 37.375 83.465 44.865 78.845 49.485L49.495 78.845C44.875 83.465 37.385 83.465 32.765 78.845L3.465 49.555C-1.155 44.935 -1.155 37.445 3.465 32.825L32.825 3.465C37.445 -1.155 44.935 -1.155 49.555 3.465ZM39.205 10.895L39.085 11.005L11.015 39.075C9.895 40.195 9.865 41.975 10.905 43.145L11.015 43.265L39.045 71.295C40.165 72.415 41.945 72.445 43.105 71.405L43.225 71.295L71.295 43.225C72.445 42.075 72.445 40.205 71.295 39.045L43.265 11.015C42.145 9.895 40.365 9.865 39.205 10.905V10.895ZM41.695 23.245L59.055 40.615C59.345 40.905 59.345 41.365 59.055 41.665L41.665 59.055C41.375 59.345 40.905 59.345 40.615 59.055L23.255 41.685C22.965 41.395 22.965 40.935 23.255 40.635L40.645 23.245C40.935 22.955 41.405 22.955 41.695 23.245Z"
				fill="currentColor"
			/>
		</svg>
	</div>

	<h1 class="mb-8 text-center font-['Space_Grotesk'] text-3xl font-bold">Ready to go!</h1>

	<p class="mb-8 text-center text-sm text-gray-500">
		You're all set. Now you have a wallet that <br /> only you control - directly, without middlemen
		or bankers.
	</p>

	<div class="mb-28"></div>

	<div class="grid w-full items-center justify-center gap-2">
		<Button size="lg" class="w-56 font-bold" href="/wallet">View My Wallet</Button>
	</div>
</div>
