// This is where it all goes :)

document.addEventListener('alpine:init', () => {
  Alpine.store('theme', {
    current: localStorage.getItem('theme') || 'system',
    
    init() {
      this.applyTheme(this.current);
    },

    toggle() {
      const next = this.current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      this.current = next;
    },

    applyTheme(theme) {
      if (theme === 'system') {
        document.documentElement.classList.remove('light', 'dark');
      } else {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      }
      localStorage.setItem('theme', theme);
    }
  });
});