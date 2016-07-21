(function(ShoppingCart) {

    /***********************************************************/
    /* Generate the selected shipping price
    /* #event
    /***********************************************************/
    jQuery(document).on('change', '.js__shipping__method', function(event) {
        ShoppingCart.generateShippingPrice();
    });

    /***********************************************************/
    /* Store order in localstorage and proceed to payment
    /* #event
    /***********************************************************/
    jQuery(document).on('submit', 'form[name=checkout]', function(event) {
        event.preventDefault();

        // ******* CUSTOM ******* //
        // Prevents multiple submits of checkout form
        var submitButton =  $(this).find('[type=submit]');
        submitButton.attr('disabled', true);
        setTimeout(function() {
            submitButton.attr('disabled', false);
        }, 2000);
        // ******* END CUSTOM ******* //
        
        ShoppingCart.processCheckoutFormSubmission();
    });

    /***********************************************************/
    /* The country selector changed
    /* #event
    /***********************************************************/
    jQuery(document).on('change', '.js__billing__country', function() {
        ShoppingCart.countryChanged();
    });

    /***********************************************************/
    /* The state selector changed
    /* #event
    /***********************************************************/
    jQuery(document).on('change', '.js__billing__state', function() {
        ShoppingCart.stateChanged();
    });

    /***********************************************************/
    /* Initialize the checkout at page load
    /* #event
    /***********************************************************/
    jQuery(function() {
        //Query('.js__checkout__block').hide();
        ShoppingCart.setupCheckout();
        ShoppingCart.populateShippingOptions();
    });

})(window.ShoppingCart);
