// Template only for easy reference //

var template = `
<div class="item">
    <img src="image-url" />
    <p class="itemTitle">item-title</p>
    <p class="sellerName">seller-name</p>
    <p class="itemPrice">currency-symbol price</p>
</div>
`

//----------------------------------//

var singleItemContainer = document.querySelector("#itemsListContainer");

var htmlString = items.map(function(item) {
    var currencySymbol = '';
    if (item.currency_code === 'USD') {
        currencySymbol = '$';
    }
    else if (item.currency_code === 'EUR') {
        currencySymbol = '&euro;';
    }
    else if (item.currency_code === 'GBP') {
        currencySymbol = '&pound;';
    }

    return `
    <div class="item">
        <img src="${item.Images[0].url_fullxfull}" />
        <p class="itemTitle textTruncate">${item.title}</p>
        <p class="sellerName">${item.Shop.shop_name}</p>
        <p class="itemPrice">${currencySymbol}${item.price}</p>
        <i class="far fa-heart heartIcon"></i>
    </div>`
}).join('');

console.log(htmlString);

singleItemContainer.innerHTML = htmlString;