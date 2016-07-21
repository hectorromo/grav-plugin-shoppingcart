# v1.1.0
## xx-07-2016

1. [](#new)
    * "Add to cart"-button functionality on products list page. Updated [#35](https://github.com/flaviocopes/grav-plugin-shoppingcart/issues/35)
1. [](#bugfix)
    * Remove the default checkout form fields to workaround a Grav bug [#33](https://github.com/flaviocopes/grav-plugin-shoppingcart/issues/33)

# v1.1.0-beta.8
## 15-05-2016

1. [](#new)
    * If no checkout plugin is installed, alert the site owner. Currently alerting in the frontend since this alert is likely to be encountered just when building the site
1. [](#improved)
    * Add a ShoppingCart.provinceIsRequired() utility function
1. [](#bugfix)
    * Fix #24 "All countries without specific rule" not working as expected. And also cleanup some useless methods
    * Only require province is required, fix #25
    * Fix #27 only execute controller tasks if available
    * Fix labels in blueprint

# v1.1.0-beta.7
## 07-05-2016

1. [](#new)
    * Product image in cart, optional
    * Added option to set the product image size in the product page
    * Added option to set the product image size in the cart
    * Add option to remove cents if .00
1. [](#improved)
    * Add support for Grav 1.0.x and Form 1.2.x in the 1.1 release
    * Extracted the Add to Cart code in a separate partial for easier override
    * Default to ignore some checkout information
    * Move onBeforeAddProductToCart and  onAfterAddProductToCart events inside ShoppingCart.addProduct
1. [](#bugfix)
    * Fix saving the cart when no shipping methods are entered. Also add payment info when there's a single shipping method, instead of omitting it

# v1.1.0-beta.6
## 07-05-2016

1. [](#improved)
    * Improved rendering of cart on mobile devices
    * Added support for shortcodes addon
    * Translate quantity string
    * Added first acceptance tests

# v1.1.0-beta.5
## 01-05-2016

1. [](#bugfix)
    * Fixed error in version number

# v1.1.0-beta.4
## 30-04-2016

1. [](#improved)
    * Add wrapper div in order confirmation
1. [](#bugfix)
    * Fixed error in namespace

# v1.1.0-beta.3
## 30-04-2016

1. [](#bugfix)
    * Fixed issue with price > 999 and NaN shown when adding it to the cart

# v1.1.0-beta.2
## 30-04-2016

1. [](#new)
    * Ability to configure the plugin options via the Admin interface
    * Ability to edit the product through the Admin Pages view. Can currently set the price and set the default picture from the page media
    * Added more events to support more addons features. Documented in the Plugin documentation site
    * Added the ability to show the cart widget on pages not directly managed by the plugin (e.g. default pages, blog or any other page). Documented in the Plugin documentation site
1. [](#improved)
    * Changed structure of the Twig files: `shoppingcart` has been removed in favor of `shoppingcart_categories`, `shoppingcart_section` is now `shoppingcart_categories`, `shoppingcart_category` is now `shoppingcart_products`. `shoppingcart_product` is the product page. Please rename your markdown pages accordingly. There's backwards compatibility, so at this point things will continue to work fine, but the old filenames are deprecated.
    * Core reorganization
    * More testing
1. [](#bugfix)
    * Various bug fixes and improvements

# v1.0.7
## 21-04-2016

1. [](#bugfix)
    * Fix issue in multilanguage sites and Grav < 1.1

# v1.0.6
## 21-04-2016

1. [](#bugfix)
    * Fix issue in JS settings build, backported from 1.1
    * Fix issue in payment URL task fetch

# v1.0.5
## 13-03-2016

1. [](#bugfix)
    * Fix JS settings bug introduced in 1.0.4 affecting checkout

# v1.0.4
## 13-03-2016

1. [](#bugfix)
    * Correctly remove private settings from the frontend

# v1.0.3
## 02-03-2016

1. [](#bugfix)
    * Correctly show currency symbol instead of currency code

# v1.0.2
## 01-03-2016

1. [](#bugfix)
    * Move Stripe checkout JS to Stripe plugin

# v1.0.1
## 28-02-2016

1. [](#bugfix)
    * Fix the image title
    * Fixed double `;`
    * Fix currency symbol and positioning

# v1.0.0
## 16-02-2016

1. [](#new)
    * Separated Stripe to own plugin
    * Added PayPal Express checkout
    * Added a new Admin panel to visualize orders
1. [](#improved)
    * Stores orders as YAML instead of .txt files

# v0.2.0
## 28-12-2015

1. [](#new)
    * Use the Form plugin to render and validate the checkout form. Dropped custom validation
    * Use Omnipay to handle the payment
    * Added base ShoppingCartGateway and Order classes

# v0.1.5
## 24-11-2015

1. [](#bugfix)
    * Fixed a bug in the products and categories list on smaller screens

# v0.1.4
## 24-11-2015

1. [](#bugfix)
    * Fixed a bug in the Admin plugin `shoppingcart/templates/admin" directory does not exist`

# v0.1.3
## 02-11-2015

1. [](#improved)
    * Improved code
    * Added cart to all pages
1. [](#feature)
    * Quantity chooser

# v0.1.2
## 29-10-2015

1. [](#bugfix)
    * Fix loading jQuery
1. [](#improved)
    * Improve readme
    * When image is not present, avoid overlap of price and add button

# v0.1.1
## 04-10-2015

1. [](#new)
    * Drop baseURL config, get from Uri class

# v0.1.0
## 03-10-2015

1. [](#new)
    * First public release

# v0.0.1
## 24-08-2015

1. [](#new)
    * ChangeLog started...
