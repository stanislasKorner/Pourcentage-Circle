<template>
  <div class="percentage-circle" :style="containerStyle">
    <svg 
      :width="content.size" 
      :height="content.size" 
      class="circle-svg"
      role="img"
      :aria-label="`${content.percentage}% progress`"
    >
      <!-- Background circle -->
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke="content.backgroundColor"
        :stroke-width="content.strokeWidth"
        fill="none"
        class="background-circle"
      />
      
      <!-- Progress circle -->
      <circle
        :cx="center"
        :cy="center"
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
    
    <!-- Percentage text -->
    <div 
      v-if="content.showPercentageText"
      class="percentage-text"
      :style="textStyle"
    >
      {{ animatedPercentage }}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercentageCircle',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        percentage: 70,
        size: 120,
        primaryColor: '#FF6B6B',
        backgroundColor: '#F5F5F5',
        strokeWidth: 8,
        showPercentageText: true
      })
    }
  },
  data() {
    return {
      animatedPercentage: 0
    }
  },
  computed: {
    containerStyle() {
      return {
        width: `${this.content.size}px`,
        height: `${this.content.size}px`
      }
    },
    center() {
      return this.content.size / 2
    },
    radius() {
      return (this.content.size - this.content.strokeWidth) / 2
    },
    circumference() {
      return 2 * Math.PI * this.radius
    },
    strokeDashoffset() {
      const progress = this.animatedPercentage / 100
      return this.circumference - (progress * this.circumference)
    },
    textStyle() {
      return {
        fontSize: `${this.content.size * 0.25}px`
      }
    }
  },
  mounted() {
    this.animateProgress()
  },
  watch: {
    'content.percentage'() {
      this.animateProgress()
    }
  },
  methods: {
    animateProgress() {
      const duration = 1000
      const startTime = performance.now()
      const startValue = 0
      const endValue = this.content.percentage

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        this.animatedPercentage = Math.round(startValue + (endValue - startValue) * easeProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }
}
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

.percentage-circle:hover .progress-circle {
  filter: drop-shadow(0 4px 8px rgba(255, 107, 107, 0.3));
  transition: filter 0.3s ease;
}

@media (max-width: 768px) {
  .percentage-circle {
    min-width: 50px;
    min-height: 50px;
  }
}
</style>