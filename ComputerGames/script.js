const PRODUCTS = [
		{id: 1, name: 'Call Of Duty', price: 21, pname: 'COD', gType: 'Action',  description: 'Call of Duty is a first-person shooter video game based on id Tech 3. ', imagePath: 'images/callofduty.jpg'},
		{id: 2, name: 'Boxing', price: 41, pname: 'Boxing', gType: 'Sports', description: '', imagePath: 'images/boxing.jpg'},
		{id: 3, name: 'Cricket', price: 221, pname: 'Cricket', gType: 'Sports', description: '', imagePath: 'images/cricket.jpg'},
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', description: '', imagePath: 'images/football.jpg'},
		{id: 5, name: 'GTA 5', price: 222, pname: 'GTA Five', gType: 'Action', description: '', imagePath: 'images/gta5.jpg'},
		{id: 6, name: 'Mario', price: 210, pname: 'Mario', gType: 'Others', description: '', imagePath: 'images/mario.jpg'},
		{id: 7, name: 'Need For Speed', price: 1, pname: 'NFS', gType: 'Others', description: '', imagePath: 'images/Needforspeed.jpg'},
		{id: 8, name: 'Wrestling', price: 51, pname: 'Wrestling', gType: 'Sports', description: '', imagePath: 'images/wrestling.jpg'},
		{id: 9, name: 'Hit Man', price: 91, pname: 'HitMan', gType: 'Action', description: '', imagePath: 'images/hitmanaction.jpg'},
		{id: 10, name: 'Mortal', price: 101, pname: 'Mortal', gType: 'Action', description: '', imagePath: 'images/mortal.jpg'},
		{id: 11, name: 'Cyber Pink', price: 6, pname: 'CP', gType: 'Action', description: '', imagePath: 'images/cyberpinkaction.jpg'},
		{id: 12, name: 'NBA', price: 27, pname: 'Basketball', gType: 'Sports', description: '', imagePath: 'images/nba.jpg'},
		{id: 13, name: 'Splash Art', price: 29, pname: 'Splash Art', gType: 'Kids', description: '', imagePath: 'images/splashart.jpg'},
		{id: 14, name: 'Spiderman', price: 34, pname: 'Spiderman', gType: 'Other', description: '', imagePath: 'images/spiderman.jpg'},
		{id: 15, name: 'Golf', price: 56, pname: 'Golf', gType: 'Sports', description: '', imagePath: 'images/golf.jpg'},
		{id: 16, name: 'Football', price: 76, pname: 'Rugby', gType: 'Sports', description: '', imagePath: 'images/rugby.jpg'},
		{id: 17, name: 'CTR', price: 40, pname: 'CTR', gType: 'Action', description: '', imagePath: 'images/ctr.jpg'},
		{id: 18, name: 'Mine Craft', price: 500, pname: 'Mine Craft', gType: 'Kids', description: '', imagePath: 'images/minecraft.jpg'},
		{id: 19, name: 'Bike Race', price: 9, pname: 'Bike Racing', gType: 'Others', description: '', imagePath: 'images/bikerace.jpg'},
		{id: 20, name: 'Dead Space', price: 87, pname: 'DS', gType: 'Action', description: '', imagePath: 'images/deadspace.jpg'},
		{id: 21, name: 'Brain', price: 87, pname: 'Brain Game', gType: 'Kids', description: '', imagePath: 'images/brainkids.jpg'},
		{id: 22, name: 'Archer', price: 87, pname: 'Archer', gType: 'Sports', description: '', imagePath: 'images/archer.jpg'},
		{id: 23, name: 'T Product', price: 87, pname: 'B ', gType: 'Others', description: '', imagePath: 'images/brainkids.jpg'}
	];
	
	const smallImgForId1 = [
		{id: 101, name: 'Call Of Duty', price: 21, pname: 'COD', gType: 'Action', imagePath: 'images/callofduty.jpg'},
		{id: 102, name: 'Boxing', price: 41, pname: 'Boxing', gType: 'Sports', imagePath: 'images/callofdutyversion2.jpg'},
		{id: 103, name: 'Cricket', price: 221, pname: 'Cricket', gType: 'Sports', imagePath: 'images/callofduty3.jpg'},
		{id: 104, name: 'Cricket', price: 221, pname: 'Cricket', gType: 'Sports', imagePath: 'images/callOfDutyModernLatest.jpg'}
	];
		
	const smallImgForId2 = [
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'},
		{id: 5, name: 'GTA 5', price: 222, pname: 'GTA Five', gType: 'Action', imagePath: 'images/gta5.jpg'},
		{id: 6, name: 'Mario', price: 210, pname: 'Mario', gType: 'Others', imagePath: 'images/mario.jpg'},
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'}
	];
	
	const smallImgForId3 = [
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'},
		{id: 5, name: 'GTA 5', price: 222, pname: 'GTA Five', gType: 'Action', imagePath: 'images/gta5.jpg'},
		{id: 6, name: 'Mario', price: 210, pname: 'Mario', gType: 'Others', imagePath: 'images/mario.jpg'},
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'}
	];
	
	const smallImgForId4 = [
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'},
		{id: 5, name: 'GTA 5', price: 222, pname: 'GTA Five', gType: 'Action', imagePath: 'images/gta5.jpg'},
		{id: 6, name: 'Mario', price: 210, pname: 'Mario', gType: 'Others', imagePath: 'images/mario.jpg'},
		{id: 4, name: 'Soccer', price: 211, pname: 'Soccer', gType: 'Sports', imagePath: 'images/football.jpg'}
	];
	

const itemsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);	
	
$(document).ready(function () {
    const cart = [];
	
    function renderProducts(products) {
		$('#productsContainer').html(''); // Clear previous products
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const currentProducts = products.slice(startIndex, endIndex);

        for (let i = 0; i < currentProducts.length; i++) {
            const product = currentProducts[i];

            const productCard = $('<div class="col-3 product-card"></div>');

            productCard.html(`
                <div class="pro">
                    <img src="${product.imagePath}" class="img-design" onclick="viewProductDetails(${product.id})"/>
                    <div class="descrip" onclick="viewProductDetails(${product.id})">
                        <h3>${product.name}</h3>
                        <div class="product-desc">${product.pname} ${product.gType}</div>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="pro-price">${product.price} CAD</div>
                    </div>
                    <a href="#" class="add-to-cart" data-index="${i}"><i class="fas fa-shopping-cart cart"></i></a>
                </div>
            `);

            $('#productsContainer').append(productCard);
        }

        // Attach click event to "Add to Cart" buttons
        $('.add-to-cart').click(function () {
            const index = $(this).data('index');
            const product = currentProducts[index];
            cart.push(product);
            updateCart();
        });
		
		renderPagination();
		
    }

    function updateCart() {
        $('#cartItems').html(''); // Clear previous cart items
        cart.forEach((item, index) => {
            $('#cartItems').append(`<li>${item.name} - ${item.price} CAD</li>`);
        });
    }
	
	// Initial rendering of products on page load
    renderProducts(PRODUCTS);
	
    $(function () {
        $('#clear').click(function () {
            // Clear filters
            $('.gtype').prop('checked', false);
            $('#pname').val('');
            $('#fromPrice').val('');
            $('#toPrice').val('');
            $('#searchInput').val('');
            renderProducts(PRODUCTS);
        });

        $('#filter').click(function () {
            // Filter logic here
            const selectedTypeElements = $('.gtype:checked');
            const selectedTypes = [];
            for (let i = 0; i < selectedTypeElements.length; i++) {
                selectedTypes.push(selectedTypeElements[i].value);
            }

            const pname = $('#pname').val();
            const fromPrice = parseFloat($('#fromPrice').val());
            const toPrice = parseFloat($('#toPrice').val());

            let filteredProducts = PRODUCTS;

            if (selectedTypes.length > 0) {
                filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.gType));
            }

            if (pname) {
                filteredProducts = filteredProducts.filter(product => product.pname === pname);
            }

            if (!isNaN(fromPrice)) {
                filteredProducts = filteredProducts.filter(product => product.price >= fromPrice);
            }

            if (!isNaN(toPrice)) {
                filteredProducts = filteredProducts.filter(product => product.price <= toPrice);
            }
            renderProducts(filteredProducts);
        });

        $('#searchButton').click(function () {
            const searchTerm = $('#searchInput').val().toLowerCase();
            const searchResults = PRODUCTS.filter(product => product.name.toLowerCase().includes(searchTerm));
            renderProducts(searchResults);
        });
    });

    /* Sorting */
    $('#select').change(function () {
        sortProducts();
    });

    function sortProducts() {
        const selectedSort = $('#select').val();

        switch (selectedSort) {
            case 'nameAsc':
                sortByNameAsc();
                break;
            case 'nameDesc':
                sortByNameDesc();
                break;
            case 'priceAsc':
                sortByPriceAsc();
                break;
            case 'priceDesc':
                sortByPriceDesc();
                break;
            default:
                 renderProducts(PRODUCTS);
                break;
        }
    }

    // Name Ascending Sorting
    function sortByNameAsc() {
        PRODUCTS.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return nameA.localeCompare(nameB);
        });
        renderProducts(PRODUCTS);
    }

    // Name Descending Sorting
    function sortByNameDesc() {
        PRODUCTS.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return nameB.localeCompare(nameA);
        });
        renderProducts(PRODUCTS);
    }

    // Price Ascending Sorting
    function sortByPriceAsc() {
        PRODUCTS.sort(function (a, b) {
            return a.price - b.price;
        });
        renderProducts(PRODUCTS);
    }

    // Price Descending Sorting
    function sortByPriceDesc() {
        PRODUCTS.sort(function (a, b) {
            return b.price - a.price;
        });
        renderProducts(PRODUCTS);
    }
	
	
	//pagination
	function renderPagination() {
		const paginationContainer = $('#pagination');
		paginationContainer.html('');

		for (let i = 1; i <= totalPages; i++) {
			const link = $('<a href="#" class="pagination-link"></a>');
			link.text(i);
			if (i === currentPage) {
				link.addClass('active');
			}
			link.click(function () {
				currentPage = i;
				renderProducts(PRODUCTS);
			});
			paginationContainer.append(link);
		}
	}
	

    // Product Rendering in Product Detail page
    var mainImg = document.getElementById("MainImg");
    var smallImg = document.getElementsByClassName("small-img");

    smallImg[0].onclick = function () {
        mainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function () {
        mainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function () {
        mainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function () {
        mainImg.src = smallImg[3].src;
    }
});

// fetchDataAndDisplay to fetch the correct products based on the current page
function fetchDataAndDisplay() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = PRODUCTS.slice(startIndex, endIndex);
    renderProducts(currentProducts);
}

// viewProductDetails to ensure the correct number of small images are displayed
function viewProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const smallImages = getSmallImagesForProduct(productId);

    if (product && smallImages) {
        // Store the selected product and small images in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        localStorage.setItem('smallImages', JSON.stringify(smallImages));
        // Navigate to the product details page
        window.location.href = 'productdetails.html?productId=' + productId;
    } else {
        console.error('Product details not found');
    }
}

// Function to retrieve the selected product from localStorage
function getSelectedProduct() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    return selectedProduct ? JSON.parse(selectedProduct) : null;
}


// Function to retrieve small images based on the product ID
function getSmallImagesForProduct(productId) {
    switch (productId) {
        case 1:
            return smallImgForId1;
        case 2:
            return smallImgForId2;
        // Add cases for other product IDs as needed
        default:
            return null;
    }
}
