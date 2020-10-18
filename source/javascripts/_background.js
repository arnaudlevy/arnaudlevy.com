
jQuery(function ($) {
    'use strict';

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

    $("#feed").rss(
        "https://www.pinterest.fr/arnaudlevy/feed.rss",
        {
            ssl: true,
            limit: 100,
            layoutTemplate: "{entries}",
            entryTemplate: "<img data-src=\"{teaserImageUrl}\" class=\"lazyload\" alt=\"\">"
        },
        function () {
            var html = $('#feed').html();
            $('#feed').append(html + html);
            $('#feed img').shuffle();
        }
    );
});
