export default {
  editor: {
    label: {
      en: "Percentage Circle",
      fr: "Cercle de Pourcentage"
    },
    icon: "fas fa-chart-pie",
    bubble: {
      icon: "fas fa-chart-pie"
    }
  },
  properties: {
    percentage: {
      label: {
        en: "Percentage",
        fr: "Pourcentage"
      },
      type: "Number",
      defaultValue: 70,
      options: {
        min: 0,
        max: 100,
        step: 1
      },
      bindable: true,
      section: "settings"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "Number",
      defaultValue: 120,
      options: {
        min: 60,
        max: 300,
        step: 10
      },
      bindable: true,
      section: "settings"
    },
    primaryColor: {
      label: {
        en: "Progress Color",
        fr: "Couleur de Progression"
      },
      type: "Color",
      defaultValue: "#FF6B6B",
      bindable: true,
      section: "design"
    },
    backgroundColor: {
      label: {
        en: "Background Color",
        fr: "Couleur de Fond"
      },
      type: "Color",
      defaultValue: "#F5F5F5",
      bindable: true,
      section: "design"
    },
    strokeWidth: {
      label: {
        en: "Stroke Width",
        fr: "Épaisseur du Trait"
      },
      type: "Number",
      defaultValue: 8,
      options: {
        min: 2,
        max: 20,
        step: 1
      },
      bindable: true,
      section: "design"
    },
    showPercentageText: {
      label: {
        en: "Show Percentage Text",
        fr: "Afficher le Texte du Pourcentage"
      },
      type: "OnOff",
      defaultValue: true,
      bindable: true,
      section: "design"
    }
  }
};