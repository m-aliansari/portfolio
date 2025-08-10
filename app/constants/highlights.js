export const HIGHLIGHTS_DATA = [
    {
        id: 1,
        title: 'Search Engine Development',
        description: 'Engineered a custom full-text and faceted search engine using Vue (Nuxt), Tailwind, PostgreSQL, Redis, Python (Sanic) supporting 55,000+ searchable items with 8+ dynamic filters.',
        images: [
            {
                path: '/images/screenshots/awards-search-engine/Crime_company-bbc.PNG',
                description: 'Example of Faceted Search built with Vue (Nuxt), TailwindCSS as frontend, and PostgreSQL, Redis and Python (Sanic) as backend, showing results for crime shows produced by BBC'
            }, {
                path: '/images/screenshots/awards-search-engine/Daytime-Emmy_sort-awards-count-desc.PNG',
                description: 'Example of Faceted Search built with Vue (Nuxt), TailwindCSS as frontend, and PostgreSQL, Redis and Python (Sanic) as backend, showing results for Daytime Emmy awards tv shows sorted by most awards won'
            }, {
                path: '/images/screenshots/awards-search-engine/British-Best-Visual-Effects.PNG',
                description: 'Example of Faceted Search built with Vue (Nuxt), TailwindCSS as frontend, and PostgreSQL, Redis and Python (Sanic) as backend, showing results for British Best Visual Effects awards shows'
            }

        ],
        stats: {
            Items: '55,000+',
            Filters: '8+',
            'Response Time': '150-200ms'
        },
        skills: ["Nuxt", "Faceted Search", "PostgreSQL", "Python", "Redis"]
    },
    {
        id: 2,
        title: 'GPT-4o Chatbot Assistant',
        description: 'Created a OpenAI GPT-4o powered chatbot for interpreting user questions, generating and running SQL (PostgreSQL) queries, and returning live results through a seamless chat interface build with Vue (Nuxt).',
        images: [{
            path: '/images/screenshots/awards-gpt-chatbot/which-amazon-prime-shows-won-emmy-awards.PNG',
            description: 'Example of OpenAI GPT-4o chatbot answering the question "which amazon prime shows won emmy awards?" by fetching data from live PostgreSQL database using Faceted Search'
        }, {
            path: '/images/screenshots/awards-gpt-chatbot/show-me-HBO-award-winning-tv-shows.PNG',
            description: 'Example of OpenAI GPT-4o chatbot answering the prompt "show me HBO award winning tv shows" by fetching data from live PostgreSQL database using Faceted Search'
        }, {
            path: '/images/screenshots/awards-gpt-chatbot/which-movies-won-venice-awards.PNG',
            description: 'Example of OpenAI GPT-4o chatbot answering the question "which movies won venice awards?" by fetching data from live PostgreSQL database using Faceted Search'
        }
        ],
        stats: {
            Accuracy: '90%+',
            'SQL Queries': 'From Natural Language',
            Interface: 'AI Chatbot'
        },
        skills: ["OpenAI", "GPT-4o", "PostgreSQL", "Faceted Search", "LLM", "Nuxt"]
    },
    {
        id: 3,
        title: 'Memory Leak Prevention',
        description: 'Diagnosed and eliminated memory leaks in Vue (Nuxt) SSR application, reducing memory usage from 90%+ to ~30% and CPU usage from 90%+ to ~15%.',
        images: [
            {
                path: '/images/screenshots/awards-memory-leak-prevention/all-metrics-charts-before-after-solution.PNG',
                description: 'Shows performance optimization of Cloud Run with metrics (CPU utilization, Billable time, container instances(auto-scale enabled), memory utilization) before and after my deployment of solutions on Aug 6'

            }, {
                path: '/images/screenshots/awards-memory-leak-prevention/memory-utilization-chart-before-after-solution.PNG',
                description: 'Shows performance optimization of Cloud Run by significant drop in memory utilization after my deployment of solutions on Aug 6'
            }, {
                path: '/images/screenshots/awards-memory-leak-prevention/CPU-utilization-chart-before-after-solution.PNG',
                description: 'Shows performance optimization of Cloud Run by significant drop in CPU utilization after my deployment of solutions on Aug 6'

            }

        ],
        stats: {
            Memory: '90% → 30%',
            CPU: '90% → 15%',
            Cost: '-$60/month'
        },
        skills: ["Google Cloud Platform (GCP)", "Performance Optimization", "Cloud Run", "Backend"]
    }
] 