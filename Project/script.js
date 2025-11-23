let cart = [];
        const product = {
            name: 'Luxury Chronograph Watch',
            price: 1299,
            image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=100'
        };

        // Elements
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeModal = document.getElementById('closeModal');
        const addToCartBtn = document.getElementById('addToCartBtn');
        const buyNowBtn = document.getElementById('buyNowBtn');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const toast = document.getElementById('toast');
        const subscribeBtn = document.getElementById('subscribeBtn');
        const emailInput = document.getElementById('emailInput');
        const header = document.getElementById('header');

        // Show toast notification
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Update cart count
        function updateCartCount() {
            cartCount.textContent = cart.length;
        }

        // Render cart items
        function renderCart() {
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
                cartTotal.style.display = 'none';
                checkoutBtn.style.display = 'none';
                return;
            }

            let html = '';
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;
                html += `
                    <div class="cart-item">
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <img src="${item.image}" alt="${item.name}" style="width: 60px; border-radius: 8px;">
                            <div>
                                <div style="font-weight: 600;">${item.name}</div>
                                <div style="color: #6B7280;">$${item.price.toFixed(2)}</div>
                            </div>
                        </div>
                        <button onclick="removeFromCart(${index})" style="background: #EF4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Remove</button>
                    </div>
                `;
            });

            cartItems.innerHTML = html;
            cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
            cartTotal.style.display = 'block';
            checkoutBtn.style.display = 'block';
        }

        // Add to cart
        addToCartBtn.addEventListener('click', () => {
            cart.push({...product});
            updateCartCount();
            renderCart();
            showToast('Added to cart!');
        });

        // Buy now
        buyNowBtn.addEventListener('click', () => {
            cart.push({...product});
            updateCartCount();
            renderCart();
            cartModal.classList.add('active');
            showToast('Ready to checkout!');
        });

        // Remove from cart
        window.removeFromCart = function(index) {
            cart.splice(index, 1);
            updateCartCount();
            renderCart();
            showToast('Item removed from cart');
        };

        // Open cart modal
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
        });

        // Close cart modal
        closeModal.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });

        // Checkout
        checkoutBtn.addEventListener('click', () => {
            showToast('Proceeding to checkout...');
            setTimeout(() => {
                alert('Thank you for your order! This is a demo, so no actual payment will be processed.');
                cart = [];
                updateCartCount();
                renderCart();
                cartModal.classList.remove('active');
            }, 1000);
        });

        // Newsletter subscription
        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email && email.includes('@')) {
                showToast('Successfully subscribed!');
                emailInput.value = '';
            } else {
                showToast('Please enter a valid email');
                toast.style.background = '#EF4444';
                setTimeout(() => {
                    toast.style.background = '#10B981';
                }, 3000);
            }
        });

        // Image gallery
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumbnail');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.src = thumb.dataset.image;
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Feature cards animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });