// This is where it all goes :)

document.addEventListener('alpine:init', () => {
  Alpine.store('theme', {
    current: localStorage.getItem('theme') || 'system',

    init() {
      this.applyTheme(this.current);
    },

    toggle() {
      if (this.current === 'system') {
        // If current is system, toggle based on detected system theme
        this.current = this.getSystemTheme() === 'dark' ? 'light' : 'dark';
      } else {
        // Otherwise, toggle between dark/light
        this.current = this.current === 'dark' ? 'light' : 'dark';
      }
      this.applyTheme(this.current);
    },

    applyTheme(theme) {
      if (theme === 'system') {
        theme = this.getSystemTheme(); // Detect system preference
      }

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);

      localStorage.setItem('theme', theme);
    },

    getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
  });
});
