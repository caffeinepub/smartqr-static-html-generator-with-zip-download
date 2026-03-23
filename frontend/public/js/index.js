/**
 * SmartQR Static Homepage JavaScript
 * Provides animations, navigation toggle, and smooth scrolling functionality
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  function initMobileNav() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const header = document.querySelector('header');

    if (mobileMenuToggle && mobileNav) {
      mobileMenuToggle.addEventListener('click', function() {
        const isOpen = mobileNav.classList.contains('active');
        
        if (isOpen) {
          mobileNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          mobileNav.classList.add('active');
          mobileMenuToggle.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });

      // Close mobile menu when clicking on a link
      const mobileNavLinks = mobileNav.querySelectorAll('a');
      mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          mobileNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(event) {
        const isClickInsideNav = mobileNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // Header scroll effect
    if (header) {
      let lastScroll = 0;
      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
      });
    }
  }

  // Smooth Scrolling for Internal Links
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal anchor links
        if (href === '#' || href.length <= 1) return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Fade-in Animations on Scroll
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with fade-in classes
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay, .hero-content, .product-card, .features-header, .feature-card, .showcase-image, .showcase-content, .cta-content');
    fadeElements.forEach(function(element) {
      observer.observe(element);
    });
  }

  // Button Hover Effects
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(function(button) {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Card Hover Effects
  function initCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Gradient Background Animation
  function initGradientAnimation() {
    const gradients = document.querySelectorAll('.gradient-bg-1, .gradient-bg-2, .gradient-bg-3');
    
    if (gradients.length > 0) {
      let animationFrame;
      let time = 0;
      
      function animate() {
        time += 0.001;
        
        gradients.forEach(function(gradient, index) {
          const offset = index * 2;
          const x = Math.sin(time + offset) * 10;
          const y = Math.cos(time + offset) * 10;
          gradient.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        });
        
        animationFrame = requestAnimationFrame(animate);
      }
      
      animate();
      
      // Pause animation when page is not visible
      document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          cancelAnimationFrame(animationFrame);
        } else {
          animate();
        }
      });
    }
  }

  // Initialize all features when DOM is ready
  function init() {
    initMobileNav();
    initSmoothScroll();
    initScrollAnimations();
    initButtonEffects();
    initCardEffects();
    initGradientAnimation();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
