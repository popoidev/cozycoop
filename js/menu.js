/**
 * Cozy Coop Menu - Simple Tab Navigation with Portrait Toggle
 */

let currentView = 'list';

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.menu-section').forEach(sec => {
        sec.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(section + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // Add active class to clicked tab
        if (event && event.target) {
            event.target.classList.add('active');
        }
        
        // Apply current view mode to the visible section
        applyViewMode(currentView);
    }
}

function toggleView(viewType) {
    console.log('🔄 Toggle view called with:', viewType);
    currentView = viewType;
    
    // Update toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(viewType + '-btn').classList.add('active');
    console.log('✅ Toggle buttons updated');
    
    // Apply view mode
    applyViewMode(viewType);
}

function applyViewMode(viewType) {
    console.log('🎨 Apply view mode:', viewType);
    
    const allMenuItems = document.querySelectorAll('.menu-item');
    const allMenuSections = document.querySelectorAll('.menu-section');
    const allMenuItemsContainers = document.querySelectorAll('.menu-items');
    
    console.log('📊 Found elements:', {
        menuItems: allMenuItems.length,
        menuSections: allMenuSections.length,
        menuContainers: allMenuItemsContainers.length
    });
    
    if (viewType === 'slider') {
        console.log('🎠 Applying slider view...');
        
        // Add slider classes
        allMenuSections.forEach(section => {
            section.classList.add('slider-view');
            console.log('✅ Added slider-view to section:', section.id);
        });
        
        allMenuItemsContainers.forEach(container => {
            container.classList.add('slider-view');
            console.log('✅ Added slider-view to container');
        });
        
        allMenuItems.forEach((item, index) => {
            item.classList.add('slider-card');
            console.log(`✅ Added slider-card to item ${index + 1}`);
        });
        
        // Initialize Swiper for visible section
        const visibleSection = document.querySelector('.menu-section[style*="block"]');
        console.log('👀 Visible section found:', visibleSection ? visibleSection.id : 'none');
        
        if (visibleSection) {
            initializeSwiper(visibleSection);
        } else {
            console.warn('⚠️ No visible section found for Swiper initialization');
        }
    } else {
        console.log('📋 Applying list view...');
        
        // Destroy any existing swipers first
        if (window.currentSwiper) {
            console.log('🗑️ Destroying existing Swiper');
            window.currentSwiper.destroy(true, true);
            window.currentSwiper = null;
        }
        
        // Restore original menu structure
        allMenuSections.forEach(section => {
            section.classList.remove('slider-view');
            
            const menuItems = section.querySelector('.menu-items');
            if (menuItems) {
                // Remove any swiper structure and restore original items
                const swiperWrapper = menuItems.querySelector('.swiper-wrapper');
                if (swiperWrapper) {
                    console.log('🔄 Restoring original structure for section:', section.id);
                    
                    // Get all slides and extract the original menu items
                    const slides = swiperWrapper.querySelectorAll('.swiper-slide');
                    const originalItems = [];
                    
                    slides.forEach(slide => {
                        const menuItem = slide.querySelector('.menu-item');
                        if (menuItem) {
                            // Remove all slider-related classes
                            menuItem.classList.remove('slider-card', 'no-image');
                            
                            // Remove all price circles (from any location)
                            const allPriceCircles = menuItem.querySelectorAll('.price-circle');
                            allPriceCircles.forEach(circle => circle.remove());
                            
                            // Handle image wrappers
                            const imageWrapper = menuItem.querySelector('.image-wrapper');
                            if (imageWrapper) {
                                const image = imageWrapper.querySelector('.item-image');
                                
                                // Move image back to its original parent
                                if (image) {
                                    imageWrapper.parentNode.insertBefore(image, imageWrapper);
                                }
                                imageWrapper.remove();
                            }
                            
                            // Remove image placeholders and restore original images if they exist
                            const imagePlaceholder = menuItem.querySelector('.image-placeholder');
                            if (imagePlaceholder) {
                                imagePlaceholder.remove();
                            }
                            
                            originalItems.push(menuItem);
                        }
                    });
                    
                    // Clear menu items container and add back original items
                    menuItems.innerHTML = '';
                    originalItems.forEach(item => {
                        menuItems.appendChild(item);
                    });
                }
            }
        });
        
        // Remove slider classes from containers and items
        allMenuItemsContainers.forEach(container => {
            container.classList.remove('slider-view');
        });
        
        allMenuItems.forEach(item => {
            item.classList.remove('slider-card');
        });
        
        console.log('✅ List view applied successfully - original structure restored');
    }
}

function initializeSwiper(section) {
    console.log('🎠 Initialize Swiper for section:', section.id);
    
    // Destroy existing swiper if any
    if (window.currentSwiper) {
        console.log('🗑️ Destroying existing Swiper before creating new one');
        window.currentSwiper.destroy(true, true);
    }
    
    const menuItems = section.querySelector('.menu-items');
    if (!menuItems) {
        console.error('❌ No .menu-items found in section:', section.id);
        return;
    }
    
    console.log('📦 Menu items container found:', menuItems);
    
    // Check if Swiper library is loaded
    if (typeof Swiper === 'undefined') {
        console.error('❌ Swiper library not loaded!');
        return;
    }
    
    console.log('✅ Swiper library is loaded');
    
    // Add swiper structure to the menu-items container
    menuItems.classList.add('swiper');
    console.log('✅ Added swiper class to menu-items');
    
    // Clean up any existing price circles and wrappers before creating new ones
    const existingPriceCircles = menuItems.querySelectorAll('.price-circle');
    const existingWrappers = menuItems.querySelectorAll('.image-wrapper');
    const existingPlaceholders = menuItems.querySelectorAll('.image-placeholder');
    
    console.log('🧹 Cleaning up existing elements:', {
        priceCircles: existingPriceCircles.length,
        wrappers: existingWrappers.length,
        placeholders: existingPlaceholders.length
    });
    
    existingPriceCircles.forEach(circle => circle.remove());
    existingWrappers.forEach(wrapper => {
        const image = wrapper.querySelector('.item-image');
        if (image) {
            wrapper.parentNode.insertBefore(image, wrapper);
        }
        wrapper.remove();
    });
    existingPlaceholders.forEach(placeholder => placeholder.remove());
    
    // Remove no-image classes from all items
    const allItems = menuItems.querySelectorAll('.menu-item');
    allItems.forEach(item => item.classList.remove('no-image'));
    
    // Get existing menu items
    const existingItems = menuItems.querySelectorAll('.menu-item');
    console.log('📋 Found existing menu items:', existingItems.length);
    
    // Create swiper structure
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    
    // Move each menu item into a swiper slide
    existingItems.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        // Clone the item
        const clonedItem = item.cloneNode(true);
        
        // Extract price from the original item
        const priceElement = clonedItem.querySelector('.item-price');
        const priceText = priceElement ? priceElement.textContent : '';
        
        // Handle images and price circles
        const itemImage = clonedItem.querySelector('.item-image');
        console.log(`🔍 Item ${index + 1}: Image found:`, !!itemImage, 'Price:', priceText);
        
        if (itemImage) {
            // Check if image is broken or missing src
            const imageSrc = itemImage.src;
            const hasValidSrc = imageSrc && imageSrc !== '' && !imageSrc.includes('undefined');
            
            if (hasValidSrc && priceText) {
                // Create a wrapper div for the image
                const imageWrapper = document.createElement('div');
                imageWrapper.className = 'image-wrapper';
                imageWrapper.style.position = 'relative';
                imageWrapper.style.display = 'inline-block';
                
                // Move the image into the wrapper
                const parent = itemImage.parentNode;
                parent.insertBefore(imageWrapper, itemImage);
                imageWrapper.appendChild(itemImage);
                
                // Create and add the price circle
                const priceCircle = document.createElement('div');
                priceCircle.className = 'price-circle';
                priceCircle.textContent = priceText;
                imageWrapper.appendChild(priceCircle);
                
                console.log(`✅ Added price circle to item ${index + 1}`);
            } else if (!hasValidSrc) {
                // Replace broken image with placeholder
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '🍗';
                
                // Add price circle to placeholder if price exists
                if (priceText) {
                    placeholder.style.position = 'relative';
                    const priceCircle = document.createElement('div');
                    priceCircle.className = 'price-circle';
                    priceCircle.textContent = priceText;
                    placeholder.appendChild(priceCircle);
                }
                
                itemImage.parentNode.replaceChild(placeholder, itemImage);
                console.log(`🖼️ Replaced broken image with placeholder for item ${index + 1}`);
            }
        } else {
            // No image at all - add no-image class and create placeholder
            clonedItem.classList.add('no-image');
            
            // Create placeholder at the beginning of the item
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = '🍗';
            
            // Add price circle to placeholder if price exists
            if (priceText) {
                placeholder.style.position = 'relative';
                const priceCircle = document.createElement('div');
                priceCircle.className = 'price-circle';
                priceCircle.textContent = priceText;
                placeholder.appendChild(priceCircle);
            }
            
            // Insert placeholder before item details
            const itemDetails = clonedItem.querySelector('.item-details');
            if (itemDetails) {
                clonedItem.insertBefore(placeholder, itemDetails);
            }
            
            console.log(`📦 Added placeholder for item without image ${index + 1}`);
        }
        
        slide.appendChild(clonedItem);
        swiperWrapper.appendChild(slide);
        console.log(`✅ Created slide ${index + 1} with price circle`);
    });
    
    // Clear menu items and add swiper structure
    menuItems.innerHTML = '';
    menuItems.appendChild(swiperWrapper);
    
    // Add navigation
    const nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    const prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    const pagination = document.createElement('div');
    pagination.className = 'swiper-pagination';
    
    menuItems.appendChild(nextBtn);
    menuItems.appendChild(prevBtn);
    menuItems.appendChild(pagination);
    
    console.log('✅ Swiper DOM structure created');
    
    // Initialize Swiper
    setTimeout(() => {
        console.log('🚀 Initializing Swiper...');
        
        try {
            window.currentSwiper = new Swiper(menuItems, {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
                
                breakpoints: {
                    640: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    }
                },
                
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
     
                
                grabCursor: true,
             
            });
            
            console.log('✅ Swiper instance created:', window.currentSwiper);
        } catch (error) {
            console.error('❌ Error initializing Swiper:', error);
        }
    }, 200);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍗 Cozy Coop Menu loaded successfully!');
    
    // Make sure wings section is visible by default
    const wingsSection = document.getElementById('wings-section');
    if (wingsSection) {
        wingsSection.style.display = 'block';
    }
    
    // Hide other sections
    document.querySelectorAll('.menu-section:not(#wings-section)').forEach(section => {
        section.style.display = 'none';
    });
    
    // Set initial view
    applyViewMode('list');
});