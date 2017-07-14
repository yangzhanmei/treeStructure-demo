function renderMenu(menu, parent) {
    var el = $('<a href="#">' + menu.name + '</a>');
    parent.append(el);
    if (!menu.hasOwnProperty("contents")) {
        return parent;
    }

    var ul = $('<ul/>');
    for (var i = 0; i < menu.contents.length; ++i) {
        var li = $('<li/>');
        renderMenu(menu.contents[i], li);
        ul.append(li);
    }

    parent.append(ul);
    return parent;
}

function render(data) {
    var div = $('<div/>');
    return renderMenu(data, div);
}

$(function () {

    var data = {
        "type": "directory", "name": "haha", "contents": [
            {"type": "file", "name": "2848"},
            {
                "type": "directory", "name": "_2848.extracted", "contents": [
                {"type": "file", "name": "3A03FC.xz"}
            ]
            }]
    };
    var menu = render(data);

    $("#div").append(menu);
    $("#div ul").css("display", "none");
    $("#div a").on("click", function () {
        $(this).next().toggle();
    });
});
