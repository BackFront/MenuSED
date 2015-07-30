$(window).ready(function() {
    $('.treeview a').on('click', function() {
        $(this).parent().toggleClass('active');
        $(this).parent().find('.treeview-menu').slideToggle('fast').toggleClass('show');
    });
});