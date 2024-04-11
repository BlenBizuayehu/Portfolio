document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    timelineItems.forEach(item => {
      item.classList.add("hidden");
    });
  
    function checkVisible() {
      timelineItems.forEach(item => {
        if (isElementVisible(item) && item.classList.contains("hidden")) {
          item.classList.remove("hidden");
          item.classList.add("visible");
        }
      });
    }
  
    function isElementVisible(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      return (
        rect.top >= 0 &&
        rect.bottom <= windowHeight
      );
    }
  
    document.addEventListener("scroll", checkVisible);
  });
  