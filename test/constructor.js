(function() {
    test("creating player by id-string", function() {
        var player = new vipl('videoPlayer');
        notStrictEqual(player.getPlayerElement(), null);
        equal(document.getElementById('videoPlayer'), player.getPlayerElement(), 'video element was found');
    });
    test("creating player by object", function() {
        var player = new vipl(document.getElementById('videoPlayer'));
        notStrictEqual(player.getPlayerElement(), null);
        equal(document.getElementById('videoPlayer'), player.getPlayerElement(), 'video element was found');
    });
})();