/*global jQuery, window, YT*/
/*jslint this */
(function ($) {

    'use strict';

    $.fn.heightEqualizer = function (options) {
        var items = $(this);

        function setOptions() {
            options = options || {};
            if (typeof options.autoRefresh !== 'boolean' && typeof options.autoRefresh !== 'number') {
                options.autoRefresh = true;
            }
            options.queryOfElements = options.queryOfElements || [];
            options.onResized = options.onResized || null;
        }

        function resetElements(item) {
            items.removeAttr('data-line data-offset-top');
            $.each(options.queryOfElements, function (i, queryOfElement) {
                item.find(queryOfElement).innerHeight('initial');
                return i;
            });
        }

        function getAutoHeightOfElements(item) {
            var obj = {};
            $.each(options.queryOfElements, function (i, queryOfElement) {
                obj[queryOfElement] = item.find(queryOfElement).innerHeight();
                return i;
            });
            return obj;
        }

        function getMoreLargerSizes(obj1, obj2) {
            var obj = {};
            $.each(options.queryOfElements, function (i, queryOfElement) {
                if (obj1[queryOfElement] > obj2[queryOfElement]) {
                    obj[queryOfElement] = obj1[queryOfElement];
                } else {
                    obj[queryOfElement] = obj2[queryOfElement];
                }
                return i;
            });
            return obj;
        }

        function changeHeight(obj, line) {
            var itemsOfLine = items.filter('[data-line=' + line + ']');
            if (itemsOfLine.length > 0) {
                $.each(options.queryOfElements, function (i, queryOfElement) {
                    itemsOfLine.find(queryOfElement).innerHeight(obj[queryOfElement]);
                    return i;
                });
            }
        }

        function getLineName(line) {
            return 'line-' + String(line).split('.').join('_');
        }

        function refresh() {
            var currOffset,
                objectForLines = {},
                lineNumber = 0;
            resetElements(items);
            $.each(items, function (i, item) {
                item = $(item);
                if (item.is(':visible')) {
                    if (!currOffset || currOffset !== item.offset().top) {
                        if (lineNumber) {
                            changeHeight(objectForLines[getLineName(lineNumber)], lineNumber);
                        }
                        lineNumber = lineNumber + 1;
                        currOffset = item.offset().top;
                        objectForLines[getLineName(lineNumber)] = objectForLines[getLineName(lineNumber)] || getAutoHeightOfElements(item);
                    } else {
                        changeHeight(objectForLines[getLineName(lineNumber)], lineNumber);
                        objectForLines[getLineName(lineNumber)] = getMoreLargerSizes(objectForLines[getLineName(lineNumber)], getAutoHeightOfElements(item));
                    }
                    item.attr('data-line', lineNumber);
                    item.attr('data-offset-top', currOffset);
                }
                return i;
            });
            changeHeight(objectForLines[getLineName(lineNumber)], lineNumber);
            if (typeof options.onResized === 'function') {
                options.onResized();
            }
        }

        function init() {
            setOptions();
            refresh();

            if (options.autoRefresh) {
                $(window).on('resize', refresh);
            }
        }

        init();

        return {
            refresh: (function () {
                return refresh;
            }()).bind(this)
        };

    };

}(jQuery));