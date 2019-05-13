/*global jQuery */
//= require jquery/jquery.min.js
//= require jquery-rss/jquery.rss.min.js
//= require_self

jQuery(function ($) {
    'use strict';
    $("#feed").rss(
        "https://www.pinterest.fr/arnaudlevy/feed.rss",
        {
            limit: 100,
            layoutTemplate: "{entries}",
            entryTemplate: "{teaserImage}"
        },
        function () {
            var html = $('#feed').html();
            $('#feed').append(html + html);
        }
    );
});