$(function () {
    $("#button-1").on("click", function () {
        $('#myNav .nav-third').tab('show');
    });

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        console.log("[show.bs.tab] Tab da visualizzare tra poco: " + $(e.target).html());
        console.log("[show.bs.tab] Tab ora visibile: " + $(e.relatedTarget).html());
    })
});

$(function () {
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});