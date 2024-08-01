<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		InfoIcon,
		LockIcon,
		LogOut,
		LogOutIcon,
		MenuIcon,
		MenuSquareIcon,
		RefreshCcwIcon,
		SaveIcon,
		SquareArrowDownLeftIcon,
		SquareArrowUpRightIcon
	} from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { onMount } from 'svelte';
	import Time from 'svelte-time';

	export let data;

	console.log(data.transactions.rows?.at(0));
</script>

<div
	class="pointer-events-none absolute left-0 top-0 h-96 w-full grow-0 bg-gradient-to-t from-[#eeedf1] to-[#e2e2ff]"
></div>

<div class="absolute left-10 right-10 top-10 flex justify-between text-center">
	<div>
		<Button variant="outline" size="icon">
			<RefreshCcwIcon size="1rem" />
		</Button>
	</div>
	<div class="flex items-center justify-center text-center text-sm">updated just now</div>
	<div class="text-right">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="outline" size="icon">
					<MenuIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<InfoIcon size="1rem" class="mr-2" />
						About</DropdownMenu.Item
					>
					<DropdownMenu.Item>
						<LockIcon size="1rem" class="mr-2" />

						Change password</DropdownMenu.Item
					>
					<DropdownMenu.Item>
						<SaveIcon size="1rem" class="mr-2" />

						Back up wallet
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<LogOutIcon size="1rem" class="mr-2" />

						Logout
					</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>

<div class="relative z-10 mx-auto mt-32 flex w-fit max-w-sm grow flex-col items-center">
	<div class="mb-11 flex flex-col">
		<div class="flex items-center font-['Space_Grotesk'] text-4xl font-bold">
			<span class="relative -top-[5px] text-6xl"> 0</span>.00 AZTEC
		</div>
		<div class="text-center text-xs text-gray-600">Your testnet balance</div>
	</div>

	<div class="mb-8 flex gap-4">
		<Button size="lg" class="w-48 shrink-0 grow-0 gap-2">
			<SquareArrowDownLeftIcon size="1rem" class="shrink-0 grow-0" />
			Recieve
		</Button>

		<Button size="lg" class="w-48 shrink-0 grow-0 gap-2">
			<SquareArrowUpRightIcon size="1rem" class="shrink-0 grow-0" />
			Send
		</Button>
	</div>
	<div
		class="flex h-full grow flex-col items-center overflow-auto text-xs"
		class:justify-center={data.transactions.rows.length === 0}
	>
		{#each data.transactions.rows as item}
			<div class="border-b py-4">
				<div class="mb-4 flex justify-between">
					<Time timestamp={new Date()} class="font-bold" />
					<Time timestamp={new Date()} format="h:mm A " />
				</div>

				{item.hash}

				<div class="text-gray-600">
					blockchain fees:
					{item.transactionFee}
				</div>
			</div>
		{:else}
			<svg width="200" viewBox="0 0 440 498" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="207" cy="207" r="207" fill="#715EC2" />
				<mask
					id="mask0_3_79"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="76"
					y="153"
					width="364"
					height="345"
				>
					<rect
						x="322.233"
						y="153.047"
						width="232.057"
						height="285.236"
						transform="rotate(59.503 322.233 153.047)"
						fill="#D9D9D9"
					/>
				</mask>
				<g mask="url(#mask0_3_79)">
					<circle cx="207" cy="207" r="207" fill="#3B2D76" />
				</g>
				<rect x="75" y="138.299" width="238.951" height="148.501" rx="9" fill="#D9D9D9" />
				<path
					d="M79.0508 148.544C79.0508 143.631 83.0328 139.649 87.9449 139.649H305.952C310.37 139.649 313.952 143.231 313.952 147.649V149.099H79.6067C79.2997 149.099 79.0508 148.851 79.0508 148.544V148.544Z"
					fill="#479E8D"
				/>
				<path
					d="M75 153.099C75 150.89 76.7909 149.099 79 149.099H314.751C320.274 149.099 324.751 153.576 324.751 159.099V295C324.751 299.418 321.17 303 316.751 303H83C78.5817 303 75 299.418 75 295V153.099Z"
					fill="#D9D9D9"
				/>
				<path
					d="M75 151.799H316.751C321.17 151.799 324.751 155.381 324.751 159.799V295C324.751 299.418 321.17 303 316.751 303H83C78.5817 303 75 299.418 75 295V151.799Z"
					fill="#90CDC1"
				/>
				<path
					d="M258.601 204.4C258.601 202.19 260.392 200.4 262.601 200.4H324.802C327.011 200.4 328.802 202.19 328.802 204.4V245C328.802 247.209 327.011 249 324.802 249H262.601C260.392 249 258.601 247.209 258.601 245V204.4Z"
					fill="#D9D9D9"
				/>
				<mask
					id="path-9-outside-1_3_79"
					maskUnits="userSpaceOnUse"
					x="263.001"
					y="203.45"
					width="66"
					height="43"
					fill="black"
				>
					<rect fill="white" x="263.001" y="203.45" width="66" height="43" />
					<path
						d="M264.001 208.45C264.001 206.24 265.791 204.45 268.001 204.45H328.801V244.95H268.001C265.791 244.95 264.001 243.159 264.001 240.95V208.45Z"
					/>
				</mask>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M263.001 208.45C263.001 207.773 263.135 207.126 263.38 206.535L263.4 206.489C263.526 206.194 263.679 205.913 263.857 205.65L265.611 206.378L265.228 207.301C265.082 207.654 265.001 208.041 265.001 208.45V211.158V212.158H263.001V211.158V208.45ZM263.001 215.575V216.575V221.991V222.991H265.001V221.991V216.575V215.575H263.001ZM265.001 226.408H263.001V227.408V232.825V233.825H265.001V232.825V227.408V226.408ZM265.001 237.241H263.001V238.241V240.95C263.001 240.992 263.001 241.034 263.002 241.076C263.018 241.707 263.151 242.31 263.38 242.864L263.4 242.911C263.526 243.206 263.679 243.486 263.857 243.749L265.611 243.022L265.228 242.098C265.103 241.797 265.026 241.47 265.006 241.127C265.002 241.068 265.001 241.009 265.001 240.95V238.241V237.241ZM266.04 245.551C265.745 245.425 265.464 245.271 265.201 245.093L265.929 243.339L266.853 243.722C267.161 243.85 267.496 243.928 267.848 243.946C267.899 243.948 267.95 243.95 268.001 243.95M266.04 245.551L266.086 245.57C266.593 245.78 267.14 245.909 267.712 245.941C267.766 245.945 267.82 245.947 267.874 245.948C267.916 245.949 267.958 245.95 268.001 245.95H270.534H271.534V243.95H270.534H268.001M274.601 243.95V245.95H275.601H280.667H281.667V243.95H280.667H275.601H274.601ZM284.734 243.95V245.95H285.734H290.801H291.801V243.95H290.801H285.734H284.734ZM294.867 243.95V245.95H295.867H300.934H301.934V243.95H300.934H295.867H294.867ZM305.001 243.95V245.95H306.001H311.068H312.068V243.95H311.068H306.001H305.001ZM315.134 243.95V245.95H316.134H321.201H322.201V243.95H321.201H316.134H315.134ZM325.268 243.95V245.95H326.268H328.801V245.45V244.95V244.45V243.95H326.268H325.268ZM265.201 204.306L265.929 206.06L266.853 205.677C267.205 205.531 267.592 205.45 268.001 205.45H270.534H271.534V203.45H270.534H268.001C267.324 203.45 266.677 203.584 266.086 203.829L266.04 203.849C265.745 203.975 265.464 204.128 265.201 204.306ZM274.601 203.45H275.601H280.667H281.667V205.45H280.667H275.601H274.601V203.45ZM284.734 205.45H285.734H290.801H291.801V203.45H290.801H285.734H284.734V205.45ZM294.867 203.45H295.867H300.934H301.934V205.45H300.934H295.867H294.867V203.45ZM305.001 205.45H306.001H311.068H312.068V203.45H311.068H306.001H305.001V205.45ZM315.134 203.45H316.134H321.201H322.201V205.45H321.201H316.134H315.134V203.45ZM325.268 205.45H326.268H328.801V204.95V204.45V203.95V203.45H326.268H325.268V205.45Z"
					fill="#90CDC1"
					mask="url(#path-9-outside-1_3_79)"
				/>
				<ellipse
					cx="311.251"
					cy="224.7"
					rx="10.8001"
					ry="10.8001"
					fill="#C66C59"
					fill-opacity="0.3"
				/>
				<circle cx="311.252" cy="224.7" r="8.10005" fill="#C66C59" />
				<mask
					id="mask1_3_79"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="75"
					y="0"
					width="253"
					height="150"
				>
					<rect x="75" width="252.282" height="149.165" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask1_3_79)">
					<path
						d="M99.3163 170.096L253.91 66.8699L301.632 138.34L147.039 241.566L99.3163 170.096Z"
						fill="#3E2A6F"
					/>
					<rect
						x="100.836"
						y="163.517"
						width="185.889"
						height="85.9387"
						transform="rotate(-31.3268 100.836 163.517)"
						fill="#583C9F"
					/>
					<rect
						x="105.395"
						y="159.862"
						width="185.889"
						height="85.9387"
						transform="rotate(-30 105.395 159.862)"
						fill="#876DC8"
					/>
					<rect
						x="114.459"
						y="163.403"
						width="173.254"
						height="71.4292"
						transform="rotate(-30 114.459 163.403)"
						fill="#D9D9D9"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M238.014 103.079L265.609 110.473C269.962 111.639 272.544 116.113 271.378 120.465L263.972 148.123C262.806 152.476 258.332 155.059 253.98 153.892L226.379 146.502C222.026 145.335 219.443 140.862 220.609 136.509L228.021 108.848C229.187 104.495 233.661 101.912 238.014 103.079ZM234.394 111.086L234.36 111.193L227.274 137.639C226.991 138.694 227.587 139.767 228.612 140.107L228.719 140.141L255.127 147.217C256.182 147.5 257.256 146.904 257.59 145.883L257.624 145.776L264.71 119.33C265 118.247 264.355 117.13 263.268 116.833L236.86 109.757C235.805 109.475 234.732 110.07 234.397 111.092L234.394 111.086ZM240.14 117.604L256.499 121.992C256.772 122.065 256.931 122.34 256.861 122.619L252.471 139.003C252.398 139.276 252.117 139.438 251.844 139.365L235.485 134.977C235.212 134.903 235.053 134.629 235.123 134.349L239.513 117.966C239.586 117.692 239.867 117.53 240.14 117.604Z"
						fill="white"
					/>
				</g>
			</svg>

			<h1 class="text-center font-['Space_Grotesk'] text-5xl font-bold">Wallet Created!</h1>
		{/each}
	</div>
</div>
