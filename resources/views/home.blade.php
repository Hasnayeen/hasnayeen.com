<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        @vite(['resources/css/app.css'])
    </head>
    <body class="antialiased bg-indigo-50 text-gray-800">
        <div class="mx-auto max-w-4xl py-8 space-y-4">
            <x-navigation></x-navigation>
            <main class="bg-white shadow rounded-xl p-8 space-y-4">
                <div class="flex justify-between">
                    <h2 class="font-medium text-gray-700">Full-stack Developer</h2>
                    <div></div>
                </div>
                <h1 class="text-3xl">Nehal Hasnayeen</h1>
                <p class="text-lg text-gray-700">
                    Full-stack developer working remotely from Bangladesh.
                </p>
                <p>
                    Current stack: <a href="">Filament</a>, <a href="">Laravel</a>, <a href="">Livewire</a>, <a href="">AlpineJS</a>, <a href="">TailwindCSS</a>.
                </p>
                <section class="pt-8">
                    <div class="bg-indigo-50 p-8 rounded-xl">
                        <h3 class="text-gray-600 font-semibold">Projects</h3>
                        <ul class="pt-8 space-y-4">
                            <li class="bg-white shadow rounded-xl px-8 py-4 space-y-2">
                                <div class="flex items-center">
                                    <h3 class="text-xl font-medium">Invobook</h3>
                                    <span
                                        class="bg-purple-100 text-purple-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Active</span>
                                </div>
                                {{-- <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>
                                        1.9k
                                    </span>
                                </div> --}}
                                <p class="text-gray-600">Self-hosted app for Time Tracking, Invoice Generation, Project & Client Management, built with Laravel &
                                    Filament.</p>
                                {{-- <div>
                                    <a href="https://github.com/Hasnayeen/invobook" class="text-blue-300">
                                        Project Source
                                    </a>
                                </div> --}}
                            </li>
                            <li class="bg-white shadow rounded-xl px-8 py-4 space-y-2">
                                <div class="flex items-center">
                                    <h3 class="text-xl font-medium">Zucart</h3>
                                    <span
                                        class="bg-purple-100 text-purple-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Active</span>
                                </div>
                                {{-- <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>
                                        4
                                    </span>
                                </div> --}}
                                <p class="text-gray-600">Open source self-hosted single/multi vendor ecommerce marketplace built with Filament (Laravel, Livewire,
                                    Alpine, TailwindCSS).</p>
                                {{-- <div>
                                    <a href="https://github.com/Hasnayeen/zucart" class="text-blue-300">
                                        Project Source
                                    </a>
                                </div> --}}
                            </li>
                            <li class="bg-white shadow rounded-xl px-8 py-4 space-y-2">
                                <h3 class="text-xl font-medium">Goodwork</h3>
                                {{-- <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>
                                        42
                                    </span>
                                </div> --}}
                                <p class="text-gray-600">Self hosted project management and collaboration tool built with Laravel & VueJS</p>
                                {{-- <div>
                                    <a href="https://github.com/Hasnayeen/goodwork" class="text-blue-300">
                                        Project Source
                                    </a>
                                </div> --}}
                            </li>
                            <li class="bg-white shadow rounded-xl px-8 py-4 space-y-2">
                                <h3 class="text-xl font-medium">Laravel Developer Roadmap</h3>
                                {{-- <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>
                                        624
                                    </span>
                                </div> --}}
                                <p class="text-gray-600">Roadmap to becoming a Laravel developer</p>
                                {{-- <div>
                                    <a href="https://github.com/Hasnayeen/laravel-developer-roadmap" class="text-blue-300">
                                        Project Source
                                    </a>
                                </div> --}}
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    </body>
</html>
