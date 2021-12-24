window.addEventListener('load', function () {
    revealBody(() => {
          // Remove the transition class
          const flecks = Array.from(document.querySelectorAll('.observable'));
          flecks.forEach(fleck => {
              fleck.classList.remove('fleck-transition');
          })

          // Create the observer, same as before:
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('observable-transition');
                if (entry.target.classList.contains('end')) {
                    confetti({
                        particleCount: 1500,
                        startVelocity: 200,
                        spread: 100,
                        ticks: 10 * 1000,
                        gravity: 0.5,
                        origin: {
                            y: 1
                          }
                      });
                };

                return;
              }

              entry.target.classList.remove('observable-transition');
            });
          });
          flecks.forEach(fleck => {
              observer.observe(fleck);
          })
    });
});

const revealBody = callback => {
    document.body.className = 'visible';
    callback();
};