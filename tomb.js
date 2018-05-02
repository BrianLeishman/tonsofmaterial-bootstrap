/*
 * File: c:\Users\Brian Leishman\go\src\github.com\BrianLeishman\tonsofdamage.gg\server\node_modules\tonsofmaterial-bootstrap\tomb.js
 * Project: c:\Users\Brian Leishman\go\src\github.com\BrianLeishman\tonsofdamage.gg\server\node_modules\tonsofmaterial-bootstrap
 * Created Date: Saturday April 28th 2018
 * Author: Brian Leishman
 * -----
 * Last Modified: Tue May 01 2018
 * Modified By: Brian Leishman
 * -----
 * Copyright (c) 2018 Stumpyinc, LLC
 */

window['Tombs'] = {};

$(document).on('mousedown', '.btn', function (e) {
    var $this = $(this);
    var ID;
    if ($this.is('[data-tomb-id]')) {
        ID = $this.attr('data-tomb-id');
    } else {
        $this.attr({
            'data-tomb-id': ID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            })
        });
    }

    if (typeof window['Tombs'][ID] !== 'object' || window['Tombs'][ID] === null) {
        window['Tombs'][ID] = {};
    }

    clearTimeout(window['Tombs'][ID]['Timeout']);
    if (typeof window['Tombs'][ID]['$Style'] === 'object' && window['Tombs'][ID]['$Style'] !== null && window['Tombs'][ID]['$Style'].length !== 0) {
        window['Tombs'][ID]['$Style'].remove();
    }
    if ($this.hasClass('ripple')) {
        $this.removeClass('ripple');
    }
    setTimeout(function () {
        $this.addClass('ripple');
    });

    window['Tombs'][ID]['$Style'] = $('<style>.btn[data-tomb-id="' + ID + '"]::before{top:' + (e.pageY - $this.offset().top).toString() + 'px;left:' + (e.pageX - $this.offset().left).toString() + 'px}</style>');
    $('head').append(window['Tombs'][ID]['$Style']);

    window['Tombs'][ID]['Timeout'] = setTimeout(function () {
        $this.removeClass('ripple');
        window['Tombs'][ID]['$Style'].remove();
    }, 1000);
});

$(document).on('focus', '.form-group .form-control', function () {
    var $this = $(this);
    var $FormGroup = $this.closest('.form-group');
    var $TombFormControlBorder = $FormGroup.find('.tomb-form-control-border');
    var Position = $this.position();

    $FormGroup.addClass('focus');

    if ($TombFormControlBorder.length !== 0) {
        $TombFormControlBorder.remove();
    }

    $this.after($TombFormControlBorder = $('<div class="tomb-form-control-border"></div>'));
    setTimeout(function () {
        $TombFormControlBorder.css({
            top: (Position.top + 24).toString() + 'px',
            left: Position.left.toString() + 'px'
        }).addClass('ripple');
    });
});

$(document).on('blur', '.form-group .form-control', function () {
    var $this = $(this);
    var $FormGroup = $this.closest('.form-group');
    var $TombFormControlBorder = $FormGroup.find('.tomb-form-control-border');

    $this.closest('.form-group').removeClass('focus');

    if ($TombFormControlBorder.length !== 0) {
        $TombFormControlBorder.remove();
    }
});

$(document).on('input', '.form-group .form-control', function () {
    var $this = $(this);
    if ($this.val() === '') {
        $this.closest('.form-group').removeClass('not-empty');
    } else {
        $this.closest('.form-group').addClass('not-empty');
    }
});

