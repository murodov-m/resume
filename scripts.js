$(document).ready(function() {
    // Add any custom jQuery scripts here for animations or transitions
    $('.list-inline-item').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});
