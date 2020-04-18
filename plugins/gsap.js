import { gsap } from 'gsap'

// wait until DOM is ready
document.addEventListener('DOMContentLoaded', function(event) {
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function() {
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function() {
      const tl = gsap.timeline()
      tl.set('#left', { x: -80 })
        .set('#right', { x: 80 })
        .set('#gap', {
          strokeDasharray: [0, 105],
          strokeDashoffset: 52,
          stroke: 'url(#paint0_linear)'
        })
        .set('.bg-noise', { opacity: 1 })
        .set('#glowflood', { floodOpacity: 0 })
        .add('crack')
        .to(
          '#gap',
          {
            duration: 1.5,
            strokeDasharray: [100, 0],
            strokeDashoffset: 52,
            strokeWidth: 8,
            stroke: 'white',
            ease:
              "rough ({ template:sine.out,strength:1,points:20,taper:'out',randomize:true,clamp:true})"
          },
          'crack'
        )
        .to(
          '#glowflood',
          {
            duration: 1.5,
            floodOpacity: 0.7,
            ease: 'slow (0.3, 0.7, false)'
          },
          'crack'
        )
        .to('.bg-noise', { duration: 1.5, opacity: 0 }, 'crack')
        .add('open')
        .to('#gap', { duration: 0.01, strokeWidth: 0 }, 'open')
        .to('#right', { duration: 2.15, x: -1350, ease: 'power2.out' }, 'open')
        .to('#left', { duration: 2.15, x: 1350, ease: 'power2.out' }, 'open')
        .to('.bg-noise', { duration: 0.01, zIndex: -1 }, 'open')
        .to('#bgsvg', { duration: 0.01, zIndex: -100 }, 'open+=1.5')
    })
  }
})
