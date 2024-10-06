document.addEventListener('DOMContentLoaded', () => {
    // Theme Variables
    let isDarkTheme = false;

    const root = document.documentElement;
    const themeButton = document.getElementById('toggle-theme');
    
    // Set default colors
    setThemeColors();

    // Toggle Theme on Button Click
    themeButton.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        setThemeColors();
    });

    // Function to switch between themes
    function setThemeColors() {
        if (isDarkTheme) {
            root.style.setProperty('--bg-color', '#121212');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--primary-color', '#0fbc8c');
            root.style.setProperty('--primary-color-dark', '#0a7958');
        } else {
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--text-color', '#000000');
            root.style.setProperty('--primary-color', '#28a745');
            root.style.setProperty('--primary-color-dark', '#1e7e34');
        }
    }

    // Form Handling
    const form = document.getElementById('user-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Example action: send data to server
        console.log(`User Info: Name: ${name}, Email: ${email}`);

        // Clear the form
        form.reset();
    });
});
