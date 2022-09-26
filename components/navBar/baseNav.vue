<template>
	<div class="bg-local bg-clip-border bg-no-repeat bg-center md:bg-clip-padding" style="height: 16rem; background-color: rgba(40,42,44,.6);background-image: url('https://pic.rmb.bdstatic.com/bjh/30cf6d2919e00aadde0adffe89d436b1.jpeg')">
<Disclosure as="nav" class="bg-gray-700 bg-opacity-25 "  v-slot="{ open }">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-local md:bg-fixed bg-clip-padding" style="">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
					<span class="sr-only">打开菜单</span>
					<Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
					<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
				</DisclosureButton>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img class="block h-8 w-auto lg:hidden" src="/logo.png" alt="Your Company" />
					<img class="hidden h-8 w-auto lg:block" src="/logo.png" alt="Your Company" />
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
					</div>
				</div>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
					<span class="sr-only">View notifications</span>
					<BellIcon class="h-6 w-6" aria-hidden="true" />
				</button>

				<!-- Profile dropdown -->
				<Menu as="div" class="relative ml-3">
					<div>
						<MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
							<span class="sr-only">Open user menu</span>
							<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
						</MenuButton>
					</div>
					<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
						<MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<MenuItem v-slot="{ active }">
								<a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">个人主页</a>
							</MenuItem>
							<MenuItem v-slot="{ active }">
								<a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">设置</a>
							</MenuItem>
							<MenuItem v-slot="{ active }">
								<a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">退出</a>
							</MenuItem>
						</MenuItems>
					</transition>
				</Menu>
			</div>
		</div>
	</div>

	<DisclosurePanel class="sm:hidden">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-black' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
		</div>
	</DisclosurePanel>
</Disclosure>
</div>
	
</template>
<script setup>
	import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
	import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
	
	const navigation = [
		{ name: '首页', href: '/', current: true },
		{ name: '游戏列表', href: '/games', current: false },
		{ name: '语音列表', href: '/audio', current: false },
	]
	</script>