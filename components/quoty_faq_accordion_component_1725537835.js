<!--
INSTRUCTION: Summary: Contains a section with:
INSTRUCTION: 1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
INSTRUCTION: 2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
-->

<template>
  <section class="py-8 bg-white pl-4">
    <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About BlockchainInsight</h2>
    <!-- Accordion -->
    <div class="space-y-3">
      <!-- Accordion item -->
      <div
        v-for="(term, index) in terms"
        :key="index"
        :class="['text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900', { 'expanded': term.expanded }]"
      >
        <h3>
          <button
            type="button"
            class="flex items-center justify-between w-full text-left font-medium px-5 py-3"
            @click="toggle(index)"
            :aria-expanded="term.expanded"
            :aria-controls="'terms-text-' + index"
          >
            <span>{{ term.title }}</span>
            <svg
              class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
            </svg>
          </button>
        </h3>
        <div
          :id="'terms-text-' + index"
          role="region"
          :aria-labelledby="'terms-title-' + index"
          class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out"
          :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]"
        >
          <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
            <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
              {{ term.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuotyFaqAccordionComponent",
  data() {
    return {
      terms: [
        { title: "What is BlockchainInsight?", description: "BlockchainInsight is an innovative app designed to help users discover and explore new blockchain information. It provides real-time updates, analysis, and insights into various blockchain networks, projects, and cryptocurrencies.", expanded: false },
        { title: "How does BlockchainInsight find new blockchain information?", description: "Our app uses advanced algorithms and data aggregation techniques to scan multiple sources, including blockchain networks, news outlets, social media, and developer forums. This ensures you always have access to the latest and most relevant blockchain information.", expanded: false },
        { title: "What types of blockchain information can I find using this app?", description: "BlockchainInsight covers a wide range of blockchain-related information, including new project launches, technological advancements, market trends, regulatory updates, and emerging use cases across various industries.", expanded: false },
        { title: "Is BlockchainInsight suitable for both beginners and experienced blockchain enthusiasts?", description: "Absolutely! Our app is designed to cater to users of all experience levels. Beginners can use it to learn about blockchain basics and stay informed, while experienced users can leverage its advanced features for deep analysis and research.", expanded: false }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.terms[index].expanded = !this.terms[index].expanded;
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
