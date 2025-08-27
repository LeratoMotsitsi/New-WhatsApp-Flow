let selectedItem = '';
        let selectedPrice = '';
        let currentCategory = '';

        function showArtboard(artboardId) {
            // Hide all artboards
            const artboards = document.querySelectorAll('.artboard');
            artboards.forEach(artboard => artboard.classList.remove('active'));
            
            // Show selected artboard
            const targetArtboard = document.getElementById(artboardId);
            if (targetArtboard) {
                targetArtboard.classList.add('active');
            }
        }

        function toggleOptions(containerId) {
            const container = document.getElementById(containerId);
            const button = container.querySelector('.view-options-btn');
            const hiddenOptions = container.querySelectorAll('.hidden-option');
            
            // Show all options and hide the "View Options" button
            hiddenOptions.forEach(option => {
                option.style.display = 'block';
            });
            button.style.display = 'none';
        }

        function showMoreOption(containerId) {
            const container = document.getElementById(containerId);
            const viewMoreBtn = container.querySelector('.view-more-btn');
            const hiddenOption = container.querySelector('.hidden-option');
            const backBtn = container.querySelector('.back-more-btn');
            
            // Show the hidden option and back button, hide view more button
            if (hiddenOption) hiddenOption.style.display = 'block';
            if (backBtn) backBtn.style.display = 'block';
            if (viewMoreBtn) viewMoreBtn.style.display = 'none';
        }

        function hideMoreOption(containerId) {
            const container = document.getElementById(containerId);
            const viewMoreBtn = container.querySelector('.view-more-btn');
            const hiddenOption = container.querySelector('.hidden-option');
            const backBtn = container.querySelector('.back-more-btn');
            
            // Hide the hidden option and back button, show view more button
            if (hiddenOption) hiddenOption.style.display = 'none';
            if (backBtn) backBtn.style.display = 'none';
            if (viewMoreBtn) viewMoreBtn.style.display = 'block';
        }

        function selectItem(itemName, price, imageUrl = null) {
            selectedItem = itemName;
            selectedPrice = price;
            
            // Update the item detail display
            const selectedItemDisplay = document.getElementById('selected-item-display');
            const itemDescription = document.getElementById('item-description');
            if (selectedItemDisplay) selectedItemDisplay.textContent = itemName + ' - ' + price;
            if (itemDescription) itemDescription.textContent = itemName + ' — ' + price + '. Add to cart?';
            
            // Update phone detail display
            const selectedPhoneDisplay = document.getElementById('selected-phone-display');
            const phoneDescription = document.getElementById('phone-description');
            if (selectedPhoneDisplay) selectedPhoneDisplay.textContent = itemName + ' - ' + price;
            if (phoneDescription) phoneDescription.textContent = itemName + ' 128GB — ' + price + '. Rent-to-own over 12 months.';
            
            // Update product image if provided
            const productImageContainer = document.getElementById('product-image-container');
            const phoneImageContainer = document.getElementById('phone-image-container');
            
            const imageHTML = imageUrl ? `
                <div class="product-container">
                    <img src="${imageUrl}" alt="${itemName}" class="product-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div style="display: none; padding: 20px; background: #f0f0f0; border-radius: 12px; margin: 10px 0;">
                        📷 Product image not available
                    </div>
                </div>
            ` : '';
            
            if (productImageContainer) {
                productImageContainer.innerHTML = imageHTML;
            }
            if (phoneImageContainer) {
                phoneImageContainer.innerHTML = imageHTML;
            }
        }

        function addToCart() {
            // Update cart display
            document.getElementById('cart-item-name').textContent = selectedItem;
            document.getElementById('cart-item-price').textContent = selectedPrice;
            document.getElementById('cart-subtotal').textContent = selectedPrice;
            
            // Update payment options display
            document.getElementById('payment-item-name').textContent = selectedItem;
            document.getElementById('payment-item-price').textContent = selectedPrice;
            
            showArtboard('store-cart');
        }

        function goBackToCategory() {
            // Determine which category to go back to based on current selection
            if (selectedItem.includes('Sony') || selectedItem.includes('AirPods') || selectedItem.includes('JBL') || selectedItem.includes('Bose') || selectedItem.includes('Marshall') || selectedItem.includes('Samsung Galaxy Buds') || selectedItem.includes('Ultimate Ears') || selectedItem.includes('Beats')) {
                showArtboard('store-items-audio');
            } else if (selectedItem.includes('Premium Meat') || selectedItem.includes('Vegetable') || selectedItem.includes('Fruit') || selectedItem.includes('Bread') || selectedItem.includes('Dairy') || selectedItem.includes('Pantry') || selectedItem.includes('Frozen') || selectedItem.includes('Coffee')) {
                showArtboard('store-items-food');
            } else if (selectedItem.includes('Bed') || selectedItem.includes('Sofa') || selectedItem.includes('Dining') || selectedItem.includes('Bookshelf') || selectedItem.includes('Mattress') || selectedItem.includes('Mirror') || selectedItem.includes('Wardrobe') || selectedItem.includes('Recliner')) {
                showArtboard('store-items-home-furniture');
            } else if (selectedItem.includes('Washing Machine') || selectedItem.includes('Vacuum') || selectedItem.includes('Dryer') || selectedItem.includes('Dishwasher') || selectedItem.includes('Air Conditioner') || selectedItem.includes('Heater') || selectedItem.includes('Water Heater') || selectedItem.includes('Fan')) {
                showArtboard('store-items-household-appliances');
            } else if (selectedItem.includes('Stove') || selectedItem.includes('Microwave') || selectedItem.includes('Nespresso') || selectedItem.includes('Toaster') || selectedItem.includes('Blender') || selectedItem.includes('Air Fryer') || selectedItem.includes('Slow Cooker') || selectedItem.includes('Ice Maker')) {
                showArtboard('store-items-kitchen-appliances');
            } else if (selectedItem.includes('Executive Desk') || selectedItem.includes('Office Chair') || selectedItem.includes('Filing') || selectedItem.includes('Conference') || selectedItem.includes('Storage Cabinet') || selectedItem.includes('Reception') || selectedItem.includes('Standing Desk') || selectedItem.includes('Shelving')) {
                showArtboard('store-items-office-furniture');
            } else if (selectedItem.includes('Fridge') || selectedItem.includes('Freezer') || selectedItem.includes('Wine Cooler') || selectedItem.includes('Mini Fridge')) {
                showArtboard('store-items-refrigeration');
            } else if (selectedItem.includes('iPhone') || selectedItem.includes('Samsung Galaxy') || selectedItem.includes('Google Pixel') || selectedItem.includes('Huawei') || selectedItem.includes('Xiaomi') || selectedItem.includes('OnePlus')) {
                showArtboard('store-items-smartphones');
            } else if (selectedItem.includes('Samsung 75') || selectedItem.includes('LG 65') || selectedItem.includes('Sony 55') || selectedItem.includes('Hisense') || selectedItem.includes('TCL') || selectedItem.includes('Samsung 32') || selectedItem.includes('LG 85') || selectedItem.includes('Philips')) {
                showArtboard('store-items-television');
            } else if (selectedItem.includes('PlayStation') || selectedItem.includes('Xbox') || selectedItem.includes('Nintendo') || selectedItem.includes('Gaming') || selectedItem.includes('VR') || selectedItem.includes('Steam')) {
                showArtboard('store-items-gaming');
            } else if (selectedItem.includes('Nike') || selectedItem.includes('Adidas') || selectedItem.includes('T-Shirt') || selectedItem.includes('Jeans') || selectedItem.includes('Jacket') || selectedItem.includes('Handbag') || selectedItem.includes('Dress') || selectedItem.includes('Sunglasses') || selectedItem.includes('Watch') || selectedItem.includes('Cap') || selectedItem.includes('Scarf') || selectedItem.includes('Heels') || selectedItem.includes('Backpack')) {
                showArtboard('store-items-fashion');
            } else {
                showArtboard('store-categories');
            }
        }

        function updatePlanSummaries() {
            const basePrice = parseFloat(selectedPrice.replace('R', '').replace(',', ''));
            
            // Check if this is a grocery hamper (food item)
            const isGroceryHamper = selectedItem.includes('Grocery Hamper');
            
            // Hide 90 and 180 day options for grocery hampers
            const plan90Btn = document.getElementById('plan-90-btn');
            const plan180Btn = document.getElementById('plan-180-btn');
            
            if (isGroceryHamper) {
                if (plan90Btn) plan90Btn.style.display = 'none';
                if (plan180Btn) plan180Btn.style.display = 'none';
            } else {
                if (plan90Btn) plan90Btn.style.display = 'block';
                if (plan180Btn) plan180Btn.style.display = 'block';
            }
            
            // 30 day plan
            const total30 = basePrice + 50;
            document.getElementById('plan-item-price-30').textContent = selectedPrice;
            document.getElementById('plan-total-30').textContent = 'R' + total30.toLocaleString();
            document.getElementById('plan-payment-30').textContent = 'R' + total30.toLocaleString();
            document.getElementById('plan-balance-30').textContent = 'R0 (insufficient)';
            
            // 60 day plan
            const total60 = basePrice + 75;
            const payment60 = Math.round(total60 / 2);
            document.getElementById('plan-item-price-60').textContent = selectedPrice;
            document.getElementById('plan-total-60').textContent = 'R' + total60.toLocaleString();
            document.getElementById('plan-payment-60').textContent = 'R' + payment60.toLocaleString();
            document.getElementById('plan-balance-60').textContent = 'R' + (10000 - payment60).toLocaleString();
            
            // 90 day plan
            const serviceFee90 = Math.round(basePrice * 0.035);
            const total90 = basePrice + 150 + serviceFee90;
            const payment90 = Math.round(total90 / 3);
            document.getElementById('plan-item-price-90').textContent = selectedPrice;
            document.getElementById('plan-service-fee-90').textContent = 'R' + serviceFee90.toLocaleString();
            document.getElementById('plan-total-90').textContent = 'R' + total90.toLocaleString();
            document.getElementById('plan-payment-90').textContent = 'R' + payment90.toLocaleString();
            document.getElementById('plan-balance-90').textContent = 'R' + (10000 - payment90).toLocaleString();
            
            // 120 day plan
            const serviceFee120 = Math.round(basePrice * 0.035);
            const total120 = basePrice + 200 + serviceFee120;
            const payment120 = Math.round(total120 / 4);
            document.getElementById('plan-item-price-120').textContent = selectedPrice;
            document.getElementById('plan-service-fee-120').textContent = 'R' + serviceFee120.toLocaleString();
            document.getElementById('plan-total-120').textContent = 'R' + total120.toLocaleString();
            document.getElementById('plan-payment-120').textContent = 'R' + payment120.toLocaleString();
            document.getElementById('plan-balance-120').textContent = 'R' + (10000 - payment120).toLocaleString();
            
            // 150 day plan
            const serviceFee150 = Math.round(basePrice * 0.035);
            const total150 = basePrice + 250 + serviceFee150;
            const payment150 = Math.round(total150 / 5);
            document.getElementById('plan-item-price-150').textContent = selectedPrice;
            document.getElementById('plan-service-fee-150').textContent = 'R' + serviceFee150.toLocaleString();
            document.getElementById('plan-total-150').textContent = 'R' + total150.toLocaleString();
            document.getElementById('plan-payment-150').textContent = 'R' + payment150.toLocaleString();
            document.getElementById('plan-balance-150').textContent = 'R' + (10000 - payment150).toLocaleString();
            
            // 180 day plan
            const serviceFee180 = Math.round(basePrice * 0.035);
            const total180 = basePrice + 300 + serviceFee180;
            const payment180 = Math.round(total180 / 6);
            document.getElementById('plan-item-price-180').textContent = selectedPrice;
            document.getElementById('plan-service-fee-180').textContent = 'R' + serviceFee180.toLocaleString();
            document.getElementById('plan-total-180').textContent = 'R' + total180.toLocaleString();
            document.getElementById('plan-payment-180').textContent = 'R' + payment180.toLocaleString();
            document.getElementById('plan-balance-180').textContent = 'R' + (10000 - payment180).toLocaleString();
            
            // Update order summaries
            document.getElementById('order-item-30').textContent = selectedItem;
            document.getElementById('order-total-30').textContent = 'R' + total30.toLocaleString();
            document.getElementById('order-item-60').textContent = selectedItem;
            document.getElementById('order-total-60').textContent = 'R' + total60.toLocaleString();
            document.getElementById('order-item-90').textContent = selectedItem;
            document.getElementById('order-total-90').textContent = 'R' + total90.toLocaleString();
            document.getElementById('order-item-120').textContent = selectedItem;
            document.getElementById('order-total-120').textContent = 'R' + total120.toLocaleString();
            document.getElementById('order-item-150').textContent = selectedItem;
            document.getElementById('order-total-150').textContent = 'R' + total150.toLocaleString();
            document.getElementById('order-item-180').textContent = selectedItem;
            document.getElementById('order-total-180').textContent = 'R' + total180.toLocaleString();
        }

        // Update plan summaries when payment options are shown
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const target = mutation.target;
                        if (target.id === 'store-payment-options' && target.classList.contains('active')) {
                            updatePlanSummaries();
                        }
                    }
                });
            });
            
            observer.observe(document.body, {
                attributes: true,
                subtree: true,
                attributeFilter: ['class']
            });
        });

        function validateSavingsAmount() {
            const input = document.getElementById('savings-amount-input');
            const amount = parseFloat(input.value);
            
            if (!amount || isNaN(amount)) {
                alert('Please enter a valid amount');
                return;
            }
            
            if (amount < 100) {
                alert('Minimum savings amount is R100');
                return;
            }
            
            if (amount > 10000) {
                alert('Maximum savings amount is R10,000');
                return;
            }
            
            // Calculate draws (1 draw per R100)
            const draws = Math.floor(amount / 100);
            
            // Store the amount and draws
            window.selectedSavingsAmount = amount;
            window.selectedDraws = draws;
            
            // Update the displays
            document.getElementById('savings-amount-display').textContent = `R${amount}`;
            document.getElementById('draws-count').textContent = draws;
            
            showArtboard('savings-club-draws');
        }

        function submitNumbers() {
            const input = document.getElementById('numbers-input');
            const numbers = input.value.trim();
            
            if (numbers) {
                // Update the confirmation display with the saved amounts
                const amount = window.selectedSavingsAmount || 300;
                const draws = window.selectedDraws || 3;
                
                document.querySelector('#savings-club-confirmation .user-message').textContent = numbers;
                document.getElementById('confirmation-amount').textContent = `R${amount}`;
                document.getElementById('confirmation-draws').textContent = draws;
                
                showArtboard('savings-club-confirmation');
            } else {
                alert('Please enter 6 numbers between 1 and 49');
            }
        }

        function confirmDataNumber() {
            const input = document.getElementById('mobile-number');
            const number = input.value.trim();
            
            if (number && number.length >= 10) {
                // Format the number for display
                const formatted = number.substring(0, 3) + ' ' + number.substring(3, 6) + ' ' + number.substring(6);
                document.getElementById('data-number-display').textContent = formatted;
                document.getElementById('confirm-mobile').textContent = formatted;
                showArtboard('ascend-data-details');
            } else {
                alert('Please enter a valid mobile number');
            }
        }

        function validateAdvanceAmount() {
            const input = document.getElementById('advance-amount-input');
            const amount = parseFloat(input.value);
            const walletBalance = 10000;
            
            if (!amount || isNaN(amount)) {
                alert('Please enter a valid amount');
                return;
            }
            
            if (amount < 50) {
                alert('Minimum advance amount is R50');
                return;
            }
            
            // Calculate maximum possible advance (considering fees)
            // Transaction fee is 3% + either R7.50 (normal) or R15 (immediate)
            // We'll check against the higher fee to be safe
            const transactionFee = amount * 0.03;
            const immediateFee = 15;
            const totalWithFees = amount + transactionFee + immediateFee;
            
            if (totalWithFees > walletBalance) {
                const maxPossibleAdvance = Math.floor((walletBalance - immediateFee) / 1.03);
                alert(`Amount too high. Maximum advance (including fees) is R${maxPossibleAdvance}`);
                return;
            }
            
            // Store the amount and proceed
            window.selectedAdvanceAmount = amount;
            
            // Update the user message display
            const userMessage = document.querySelector('#advance-fee-disclosure .user-message');
            if (userMessage) {
                userMessage.textContent = `R${amount}`;
            }
            
            showArtboard('advance-fee-disclosure');
        }

        function calculateAndShowNormalPayout() {
            const amount = window.selectedAdvanceAmount || 500;
            const transactionFee = amount * 0.03;
            const normalFee = 7.50;
            const totalRepay = amount + transactionFee + normalFee;
            const walletAfter = 10000 - totalRepay;
            
            // Update the normal payout display
            document.getElementById('normal-amount').textContent = `R${amount}`;
            document.getElementById('normal-transaction-fee').textContent = `R${transactionFee.toFixed(2)}`;
            document.getElementById('normal-total-repay').textContent = `R${totalRepay.toFixed(2)}`;
            document.getElementById('normal-wallet-after').textContent = `R${walletAfter.toFixed(2)}`;
            
            showArtboard('advance-payout-normal');
        }

        function calculateAndShowImmediatePayout() {
            const amount = window.selectedAdvanceAmount || 500;
            const transactionFee = amount * 0.03;
            const immediateFee = 15.00;
            const totalRepay = amount + transactionFee + immediateFee;
            const walletAfter = 10000 - totalRepay;
            
            // Update the immediate payout display
            document.getElementById('immediate-amount').textContent = `R${amount}`;
            document.getElementById('immediate-transaction-fee').textContent = `R${transactionFee.toFixed(2)}`;
            document.getElementById('immediate-total-repay').textContent = `R${totalRepay.toFixed(2)}`;
            document.getElementById('immediate-wallet-after').textContent = `R${walletAfter.toFixed(2)}`;
            
            showArtboard('advance-payout-immediate');
        }

        function updateNormalConfirmation() {
            const amount = window.selectedAdvanceAmount || 500;
            const transactionFee = amount * 0.03;
            const normalFee = 7.50;
            const totalRepay = amount + transactionFee + normalFee;
            const walletAfter = 10000 - totalRepay;
            
            // Update the normal confirmation display
            document.getElementById('normal-confirm-amount').textContent = `R${amount}`;
            document.getElementById('normal-confirm-transaction-fee').textContent = `R${transactionFee.toFixed(2)}`;
            document.getElementById('normal-confirm-total').textContent = `R${totalRepay.toFixed(2)}`;
            document.getElementById('normal-confirm-wallet-after').textContent = `R${walletAfter.toFixed(2)}`;
            
            showArtboard('advance-confirmation-normal');
        }

        function updateImmediateConfirmation() {
            const amount = window.selectedAdvanceAmount || 500;
            const transactionFee = amount * 0.03;
            const immediateFee = 15.00;
            const totalRepay = amount + transactionFee + immediateFee;
            const walletAfter = 10000 - totalRepay;
            
            // Update the immediate confirmation display
            document.getElementById('immediate-confirm-amount').textContent = `R${amount}`;
            document.getElementById('immediate-confirm-transaction-fee').textContent = `R${transactionFee.toFixed(2)}`;
            document.getElementById('immediate-confirm-total').textContent = `R${totalRepay.toFixed(2)}`;
            document.getElementById('immediate-confirm-wallet-after').textContent = `R${walletAfter.toFixed(2)}`;
            
            showArtboard('advance-confirmation-immediate');
        }

        function confirmNormalAdvance() {
            const amount = window.selectedAdvanceAmount || 500;
            document.getElementById('normal-success-amount').textContent = `R${amount}`;
            showArtboard('advance-success-normal');
        }

        function confirmImmediateAdvance() {
            const amount = window.selectedAdvanceAmount || 500;
            document.getElementById('immediate-success-amount').textContent = `R${amount}`;
            showArtboard('advance-success-immediate');
        }

        function playVoiceNote(element) {
            const playButton = element.querySelector('.voice-note-play');
            const progressBar = element.querySelector('.voice-note-progress-bar');
            
            if (playButton.textContent === '▶️') {
                // Start playing
                playButton.textContent = '⏸️';
                
                // Animate progress bar
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 1.67; // 60 seconds / 100% = 1.67% per second
                    progressBar.style.width = progress + '%';
                    
                    if (progress >= 100) {
                        clearInterval(interval);
                        playButton.textContent = '▶️';
                        progressBar.style.width = '0%';
                    }
                }, 1000);
                
                // Store interval for pause functionality
                element.dataset.interval = interval;
            } else {
                // Pause
                playButton.textContent = '▶️';
                clearInterval(element.dataset.interval);
                progressBar.style.width = '0%';
            }
        }

        function selectFlexClubCar(carName, monthlyPrice) {
            // Update the car selection display
            const selectedCarDisplay = document.getElementById('flexclub-selected-car');
            const carDescription = document.getElementById('flexclub-car-description');
            
            if (selectedCarDisplay) selectedCarDisplay.textContent = `🚗 ${carName}`;
            if (carDescription) carDescription.textContent = `${carName} – From ${monthlyPrice} / month`;
            
            // Store the selected car details
            window.selectedFlexClubCar = carName;
            window.selectedFlexClubPrice = monthlyPrice;
            
            showArtboard('flexclub-form');
        }