<template>
  <div class="percentage-circle" :style="{ width: `${content.size}px`, height: `${content.size}px` }">
    <svg 
      :width="content.size" 
      :height="content.size" 
      class="circle-svg"
      role="img"
      :aria-label="`${content.percentage}% progress`"
    >
      <!-- Cercle de fond -->
      <circle
        :cx="content.size / 2"
        :cy="content.size / 2"
        :r="radius"
        :stroke="content.backgroundColor"
        :stroke-width="content.strokeWidth"
        fill="none"
        class="background-circle"
      />
      
      <!-- Cercle de progression -->
      <circle
        :cx="content.size / 2"
        :cy="content.size / 2"
        :r="radius"
        :stroke="content.primaryColor"
        :stroke-width="content.strokeWidth"
        fill="none"
        class="progress-circle"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        stroke-linecap="round"
        transform-origin="center"
        style="transform: rotate(-90deg)"
      />
    </svg>
    
    <!-- Texte du pourcentage -->
    <div 
      v-if="content.showPercentageText"
      class="percentage-text"
      :style="{ fontSize: `${content.size * 0.25}px` }"
    >
      {{ animatedPercentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

interface Content {
  percentage: number
  size: number
  primaryColor: string
  backgroundColor: string
  strokeWidth: number
  showPercentageText: boolean
}

const props = defineProps<{
  content: Content
}>()

const animatedPercentage = ref(0)

const radius = computed(() => {
  return (props.content.size - props.content.strokeWidth) / 2
})

const circumference = computed(() => {
  return 2 * Math.PI * radius.value
})

const strokeDashoffset = computed(() => {
  const progress = animatedPercentage.value / 100
  return circumference.value - (progress * circumference.value)
})

const animateProgress = () => {
  const duration = 1000 // 1 seconde
  const startTime = performance.now()
  const startValue = 0
  const endValue = props.content.percentage

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function pour une animation plus fluide
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    
    animatedPercentage.value = Math.round(startValue + (endValue - startValue) * easeProgress)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
}

onMounted(() => {
  animateProgress()
})

watch(() => props.content.percentage, () => {
  animateProgress()
})
</script>

<style scoped>
.percentage-circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  min-height: 60px;
}

.circle-svg {
  width: 100%;
  height: 100%;
}

.background-circle {
  opacity: 0.2;
}

.progress-circle {
  transition: stroke-dashoffset 0.1s ease-out;
  filter: drop-shadow(0 2px 4px rgba(255, 107, 107, 0.2));
}

.percentage-text {
  position: absolute;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #2D3748;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.02em;
  user-select: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .percentage-circle {
    min-width: 50px;
    min-height: 50px;
  }
}

/* Animation au hover pour plus d'interactivité */
.percentage-circle:hover .progress-circle {
  filter: drop-shadow(0 4px 8px rgba(255, 107, 107, 0.3));
  transition: filter 0.3s ease;
}
</style>