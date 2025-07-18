<template>
  <div class="demo-container">
    <div class="header">
      <h1>🎯 WeWeb Percentage Circle Component</h1>
      <p>Composant de cercle de progression avec animation fluide</p>
    </div>

    <div class="demo-grid">
      <!-- Exemple 1: Style par défaut -->
      <div class="demo-card">
        <h3>Style par défaut</h3>
        <PercentageCircle :content="defaultConfig" />
        <p class="description">Configuration standard avec 70%</p>
      </div>

      <!-- Exemple 2: Petit cercle -->
      <div class="demo-card">
        <h3>Petit format</h3>
        <PercentageCircle :content="smallConfig" />
        <p class="description">Cercle compact pour interfaces denses</p>
      </div>

      <!-- Exemple 3: Grand cercle -->
      <div class="demo-card">
        <h3>Grand format</h3>
        <PercentageCircle :content="largeConfig" />
        <p class="description">Format large pour mise en valeur</p>
      </div>

      <!-- Exemple 4: Couleur personnalisée -->
      <div class="demo-card">
        <h3>Couleur personnalisée</h3>
        <PercentageCircle :content="customColorConfig" />
        <p class="description">Couleur bleue alternative</p>
      </div>

      <!-- Exemple 5: Sans texte -->
      <div class="demo-card">
        <h3>Sans pourcentage</h3>
        <PercentageCircle :content="noTextConfig" />
        <p class="description">Cercle de progression seul</p>
      </div>

      <!-- Exemple 6: Trait fin -->
      <div class="demo-card">
        <h3>Trait fin</h3>
        <PercentageCircle :content="thinStrokeConfig" />
        <p class="description">Style minimaliste avec trait fin</p>
      </div>
    </div>

    <!-- Section interactive -->
    <div class="interactive-section">
      <h2>🎮 Test interactif</h2>
      <div class="controls">
        <div class="control-group">
          <label>Pourcentage: {{ interactiveConfig.percentage }}%</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="interactiveConfig.percentage"
            class="slider"
          />
        </div>
        <div class="control-group">
          <label>Taille: {{ interactiveConfig.size }}px</label>
          <input 
            type="range" 
            min="60" 
            max="200" 
            step="10"
            v-model="interactiveConfig.size"
            class="slider"
          />
        </div>
        <div class="control-group">
          <label>Épaisseur: {{ interactiveConfig.strokeWidth }}px</label>
          <input 
            type="range" 
            min="2" 
            max="20" 
            v-model="interactiveConfig.strokeWidth"
            class="slider"
          />
        </div>
      </div>
      
      <div class="interactive-demo">
        <PercentageCircle :content="interactiveConfig" />
      </div>
    </div>

    <!-- Simulation du streak comme dans votre image -->
    <div class="streak-simulation">
      <h2>🔥 Simulation avec Streak (comme votre design)</h2>
      <div class="streak-container">
        <PercentageCircle :content="streakConfig" />
        <div class="streak-badge">
          <span class="streak-icon">🔥</span>
          <span class="streak-number">45</span>
          <span class="streak-text">DAY STREAK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import PercentageCircle from './wwElement.vue'

// Configurations de démonstration
const defaultConfig = reactive({
  percentage: 70,
  size: 120,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 8,
  showPercentageText: true
})

const smallConfig = reactive({
  percentage: 45,
  size: 80,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 6,
  showPercentageText: true
})

const largeConfig = reactive({
  percentage: 90,
  size: 160,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 10,
  showPercentageText: true
})

const customColorConfig = reactive({
  percentage: 65,
  size: 120,
  primaryColor: '#4F46E5',
  backgroundColor: '#E0E7FF',
  strokeWidth: 8,
  showPercentageText: true
})

const noTextConfig = reactive({
  percentage: 80,
  size: 100,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 8,
  showPercentageText: false
})

const thinStrokeConfig = reactive({
  percentage: 55,
  size: 120,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 3,
  showPercentageText: true
})

// Configuration interactive
const interactiveConfig = reactive({
  percentage: 75,
  size: 140,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 8,
  showPercentageText: true
})

// Configuration pour simulation streak
const streakConfig = reactive({
  percentage: 70,
  size: 60,
  primaryColor: '#FF6B6B',
  backgroundColor: '#F5F5F5',
  strokeWidth: 6,
  showPercentageText: true
})
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.1rem;
  color: #64748b;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.demo-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.15);
}

.demo-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1.5rem;
}

.demo-card .description {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.interactive-section {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
}

.interactive-section h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e5e7eb;
  outline: none;
  -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FF6B6B;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FF6B6B;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.interactive-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
}

.streak-simulation {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
}

.streak-simulation h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
}

.streak-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  max-width: 300px;
  margin: 0 auto;
}

.streak-badge {
  background: linear-gradient(135deg, #FF6B6B, #FF5A5F);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

.streak-icon {
  font-size: 1.2rem;
}

.streak-number {
  font-size: 1.1rem;
}

.streak-text {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .demo-container {
    padding: 1rem;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    grid-template-columns: 1fr;
  }
  
  .streak-container {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
</template>