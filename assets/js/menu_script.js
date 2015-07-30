$(window).ready(function() {
    $('.treeview a').on('click', function() {
        $(this).parent().find('.treeview-menu').toggleClass('active');
        $(this).parent().find('.treeview-menu').slideToggle('fast').toggleClass('show');
    });
});