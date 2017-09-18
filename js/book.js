(function() {
    var $book, $next, $pageContainer, $pages, $pagesLength, $pagesResponsive, $prev, bookClass, currentPage, flipping, mouseX, nextPage, pageClass, pagesClass, pagesResponsiveClass, prevPage, seekPage, slidePage, slideposition, slidestart;

    bookClass = '.book';

    pagesClass = '.pages';

    pageClass = '.page';

    pagesResponsiveClass = '.pages-responsive';

    $pagesResponsive = $(pagesResponsiveClass);

    $book = $(bookClass);

    $pageContainer = $book.find(pagesClass);

    $pages = $book.find(pageClass);

    $prev = $('.prev');

    $next = $('.next');

    flipping = false;

    mouseX = 0;

    slideposition = 0;

    slidestart = false;

    currentPage = 0;

    $pagesLength = $pages.length;

    $pages.each(function(idx) {
        if (idx % 2 === 0) {
            return $(this).css('z-index', "" + ($pagesLength - idx));
        }
    });

    $pageContainer.on('click', pageClass, function() {
        var $el;
        $el = $(this);
        if (($el.index() + 1) % 2 === 1) {
            return nextPage();
        } else {
            return prevPage();
        }
    });

    $pages.eq(currentPage).addClass('page--is-hoverable');

    slidePage = function(page) {
        var containerWidth, position;
        if (page == null) {
            page = 1;
        }
        containerWidth = $pagesResponsive.width();
        position = page * containerWidth;
        return $pagesResponsive.animate({
            scrollLeft: position
        });
    };

    nextPage = function(duration) {
        var $currentPage;
        if (duration == null) {
            duration = 500;
        }
        if (flipping) {
            return false;
        }
        $pages.css('transition-duration', duration + "ms");
        if (currentPage < $pagesLength - 1) {
            $currentPage = $pages.eq(currentPage);
            $currentPage.addClass('page--flipped');
            $pages.eq(currentPage + 1).addClass('page--flipped');
            $currentPage.removeClass('page--is-hoverable');
            if (currentPage !== 0) {
                $pages.eq(currentPage - 1).removeClass('page--is-hoverable');
            }
            flipping = true;
            slidePage(currentPage + 2);
            return setTimeout(function() {
                flipping = false;
                $pages.eq(currentPage + 1).addClass('page--is-hoverable');
                $pages.eq(currentPage + 2).addClass('page--is-hoverable');
                currentPage += 2;
                return $pages.css('transition-duration', (duration * 1.2) + "ms");
            }, duration);
        }
    };

    prevPage = function(duration) {
        var $currentPage;
        if (duration == null) {
            duration = 500;
        }
        if (flipping) {
            return false;
        }
        $pages.css('transition-duration', duration + "ms");
        if (currentPage > 0) {
            $currentPage = $pages.eq(currentPage - 1);
            $currentPage.removeClass('page--flipped');
            $pages.eq(currentPage - 2).removeClass('page--flipped');
            $pages.eq(currentPage).removeClass('page--is-hoverable');
            $currentPage.removeClass('page--is-hoverable');
            flipping = true;
            slidePage(currentPage - 2);
            return setTimeout(function() {
                flipping = false;
                $pages.eq(currentPage - 2).addClass('page--is-hoverable');
                if (currentPage > 2) {
                    $pages.eq(currentPage - 3).addClass('page--is-hoverable');
                }
                currentPage -= 2;
                return $pages.css('transition-duration', "duration*1.2ms");
            }, duration);
        }
    };

    seekPage = function(page, duration) {
        if (duration == null) {
            duration = 200;
        }
        if (page !== currentPage) {
            slidePage(page);
        }
        if (page % 2 !== 0) {
            page++;
        }
        if (Math.abs(currentPage - page) < 3) {
            duration *= 2.5;
        }
        if (currentPage > page) {
            prevPage(duration);
            return setTimeout(function() {
                return seekPage(page, duration);
            }, duration);
        } else if (currentPage < page) {
            nextPage(duration);
            return setTimeout(function() {
                return seekPage(page, duration);
            }, duration);
        } else {
            return clearInterval(seekPage);
        }
    };

    $('.pager').on('click', 'a', function(ev) {
        var $el, page;
        ev.preventDefault();
        $el = $(this);
        page = $el.data('page');
        return seekPage(page);
    });

    $prev.on('click', function() {
        return prevPage(500);
    });

    $next.on('click', function() {
        return nextPage(500);
    });

    $pagesResponsive.on('mouseup touchend', function(ev) {
        var containerWidth, currentPosition, page;
        currentPosition = $pagesResponsive.scrollLeft();
        containerWidth = $pagesResponsive.width();
        page = Math.round(currentPosition / containerWidth) * containerWidth;
        $pagesResponsive.animate({
            scrollLeft: page
        });
        return slidestart = false;
    });

    $pagesResponsive.on('touchstart', function() {
        return console.log('touchstart');
    });

    $pagesResponsive.on('touchmove', function() {
        return console.log('touchmove');
    });

    $pagesResponsive.on('scroll', function(ev) {
        return ev.preventDefault();
    });

    $pagesResponsive.on('mousedown touchstart', function(ev) {
        var ref, touch;
        ev.preventDefault();
        slideposition = $(this).scrollLeft();
        touch = (ref = ev.originalEvent.touches) != null ? ref[0] : void 0;
        if (touch != null) {
            mouseX = touch.pageX;
        } else {
            mouseX = ev.pageX;
        }
        return slidestart = true;
    });

    $pagesResponsive.on('mousemove touchmove', function(ev) {
        var offsetX, ref, touch;
        if (slidestart) {
            ev.preventDefault();
            touch = (ref = ev.originalEvent.touches) != null ? ref[0] : void 0;
            if (touch != null) {
                offsetX = touch.pageX - mouseX;
            } else {
                offsetX = ev.pageX - mouseX;
            }
            return $(this).scrollLeft(slideposition - offsetX);
        }
    });

}).call(this);
(function() {
    var $book, $next, $pageContainer, $pages, $pagesLength, $pagesResponsive, $prev, bookClass, currentPage, flipping, mouseX, nextPage, pageClass, pagesClass, pagesResponsiveClass, prevPage, seekPage, slidePage, slideposition, slidestart;

    bookClass = '.book';

    pagesClass = '.pages';

    pageClass = '.page';

    pagesResponsiveClass = '.pages-responsive';

    $pagesResponsive = $(pagesResponsiveClass);

    $book = $(bookClass);

    $pageContainer = $book.find(pagesClass);

    $pages = $book.find(pageClass);

    $prev = $('.prev');

    $next = $('.next');

    flipping = false;

    mouseX = 0;

    slideposition = 0;

    slidestart = false;

    currentPage = 0;

    $pagesLength = $pages.length;

    $pages.each(function(idx) {
        if (idx % 2 === 0) {
            return $(this).css('z-index', "" + ($pagesLength - idx));
        }
    });

    $pageContainer.on('click', pageClass, function() {
        var $el;
        $el = $(this);
        if (($el.index() + 1) % 2 === 1) {
            return nextPage();
        } else {
            return prevPage();
        }
    });

    $pages.eq(currentPage).addClass('page--is-hoverable');

    slidePage = function(page) {
        var containerWidth, position;
        if (page == null) {
            page = 1;
        }
        containerWidth = $pagesResponsive.width();
        position = page * containerWidth;
        return $pagesResponsive.animate({
            scrollLeft: position
        });
    };

    nextPage = function(duration) {
        var $currentPage;
        if (duration == null) {
            duration = 500;
        }
        if (flipping) {
            return false;
        }
        $pages.css('transition-duration', duration + "ms");
        if (currentPage < $pagesLength - 1) {
            $currentPage = $pages.eq(currentPage);
            $currentPage.addClass('page--flipped');
            $pages.eq(currentPage + 1).addClass('page--flipped');
            $currentPage.removeClass('page--is-hoverable');
            if (currentPage !== 0) {
                $pages.eq(currentPage - 1).removeClass('page--is-hoverable');
            }
            flipping = true;
            slidePage(currentPage + 2);
            return setTimeout(function() {
                flipping = false;
                $pages.eq(currentPage + 1).addClass('page--is-hoverable');
                $pages.eq(currentPage + 2).addClass('page--is-hoverable');
                currentPage += 2;
                return $pages.css('transition-duration', (duration * 1.2) + "ms");
            }, duration);
        }
    };

    prevPage = function(duration) {
        var $currentPage;
        if (duration == null) {
            duration = 500;
        }
        if (flipping) {
            return false;
        }
        $pages.css('transition-duration', duration + "ms");
        if (currentPage > 0) {
            $currentPage = $pages.eq(currentPage - 1);
            $currentPage.removeClass('page--flipped');
            $pages.eq(currentPage - 2).removeClass('page--flipped');
            $pages.eq(currentPage).removeClass('page--is-hoverable');
            $currentPage.removeClass('page--is-hoverable');
            flipping = true;
            slidePage(currentPage - 2);
            return setTimeout(function() {
                flipping = false;
                $pages.eq(currentPage - 2).addClass('page--is-hoverable');
                if (currentPage > 2) {
                    $pages.eq(currentPage - 3).addClass('page--is-hoverable');
                }
                currentPage -= 2;
                return $pages.css('transition-duration', "duration*1.2ms");
            }, duration);
        }
    };

    seekPage = function(page, duration) {
        if (duration == null) {
            duration = 200;
        }
        if (page !== currentPage) {
            slidePage(page);
        }
        if (page % 2 !== 0) {
            page++;
        }
        if (Math.abs(currentPage - page) < 3) {
            duration *= 2.5;
        }
        if (currentPage > page) {
            prevPage(duration);
            return setTimeout(function() {
                return seekPage(page, duration);
            }, duration);
        } else if (currentPage < page) {
            nextPage(duration);
            return setTimeout(function() {
                return seekPage(page, duration);
            }, duration);
        } else {
            return clearInterval(seekPage);
        }
    };

    $('.pager').on('click', 'a', function(ev) {
        var $el, page;
        ev.preventDefault();
        $el = $(this);
        page = $el.data('page');
        return seekPage(page);
    });

    $prev.on('click', function() {
        return prevPage(500);
    });

    $next.on('click', function() {
        return nextPage(500);
    });

    $pagesResponsive.on('mouseup touchend', function(ev) {
        var containerWidth, currentPosition, page;
        currentPosition = $pagesResponsive.scrollLeft();
        containerWidth = $pagesResponsive.width();
        page = Math.round(currentPosition / containerWidth) * containerWidth;
        $pagesResponsive.animate({
            scrollLeft: page
        });
        return slidestart = false;
    });

    $pagesResponsive.on('touchstart', function() {
        return console.log('touchstart');
    });

    $pagesResponsive.on('touchmove', function() {
        return console.log('touchmove');
    });

    $pagesResponsive.on('scroll', function(ev) {
        return ev.preventDefault();
    });

    $pagesResponsive.on('mousedown touchstart', function(ev) {
        var ref, touch;
        ev.preventDefault();
        slideposition = $(this).scrollLeft();
        touch = (ref = ev.originalEvent.touches) != null ? ref[0] : void 0;
        if (touch != null) {
            mouseX = touch.pageX;
        } else {
            mouseX = ev.pageX;
        }
        return slidestart = true;
    });

    $pagesResponsive.on('mousemove touchmove', function(ev) {
        var offsetX, ref, touch;
        if (slidestart) {
            ev.preventDefault();
            touch = (ref = ev.originalEvent.touches) != null ? ref[0] : void 0;
            if (touch != null) {
                offsetX = touch.pageX - mouseX;
            } else {
                offsetX = ev.pageX - mouseX;
            }
            return $(this).scrollLeft(slideposition - offsetX);
        }
    });

}).call(this);
