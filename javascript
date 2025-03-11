document.addEventListener('DOMContentLoaded', function() {
    const stateSelect = document.getElementById('state');
    
    stateSelect.addEventListener('wheel', function(event) {
        event.preventDefault();
        
        const options = this.options;
        const currentIndex = this.selectedIndex;
        
        // Scroll down (increase index)
        if (event.deltaY > 0 && currentIndex < options.length - 1) {
            this.selectedIndex = currentIndex + 1;
        }
        // Scroll up (decrease index)
        else if (event.deltaY < 0 && currentIndex > 0) {
            this.selectedIndex = currentIndex - 1;
        }
    });
});