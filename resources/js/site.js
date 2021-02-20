// Alpine.js handles the show/hide of the mobile nav
import 'alpinejs'

// make sure we can go to urls without slash at the end
// https://flaviocopes.com/netlify-fix-trailing-slash-rewrite/
(function() {
    if (!location.href.endsWith('/')) {
        window.location = location.href + '/'
    }
}());