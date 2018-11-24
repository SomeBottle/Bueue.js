var $bueue = {
    c: function(z) {
        /*顺序增加*/
        var o = this;
        o.qs[o.ids] = z;
        if (o.debug) {
            console.log('[Bueue]Added new , id:' + o.ids);
        }
        o.ids = Number(o.ids) + 1;
        return o.ids - 1;
    },
    e: function(i, z) {
        /*插入增加*/
        var o = this;
        if (typeof o.qs[i] == 'undefined') {
            if (i <= o.ids) {
                o.qs[i] = z;
                if (o.debug) {
                    console.log('[Bueue]Inserted new , id:' + i);
                }
            } else {
                o.c(z);
            }
        } else {
            if (o.debug) {
                console.log('[Bueue]Place Exists.');
            }
        }
    },
    d: function(i) {
        /*删除项*/
        if (typeof this.qs[i] !== 'undefined') {
            delete this.qs[i];
            if (this.debug) {
                console.log('[Bueue]Deleted id:' + i);
            }
        }
    },
    jump: function(i) {
        /*跳跃执行*/
        var o = this;
        if (typeof o.qs[i] !== 'undefined') {
            o.onque = i;
            if (o.debug) {
                console.log('[Bueue]Jump to id:' + i);
            }
        }
    },
    start: function() {
        /*开始*/
        this.next();
        if (this.debug) {
            console.log('[Bueue]Started.');
        }
    },
    re: function(b) {
        /*重置*/
        if (b) {
            this.qs = {};
            this.ids = 0;
        }
        this.onque = 0;
        this.state = 1;
        if (this.debug) {
            console.log('[Bueue]Reseted.');
        }
    },
    next: function() {
        /*下一个*/
        var o = this;
        while (o.onque <= o.ids && typeof o.qs[o.onque] == 'undefined') {
            o.onque = o.onque + 1;
        }
		setTimeout(function(){/*防止死递归*/
        if (o.onque <= o.ids) {
            o.qs[o.onque]();
            o.state = 2;
            o.onque = o.onque + 1;
            if (o.onque == o.ids || typeof o.qs[o.onque] == 'undefined') {
                o.state = 3;
                if (o.debug) {
                    console.log('[Bueue]Finished.');
                }
            }
        } else {
            if (o.debug) {
                console.log('[Bueue]Already finished.');
            }
        }
		},10);
    },
    de: function(b) {
        /*调试输出*/
        if (b) {
            this.debug = true;
        } else {
            this.debug = false;
        }
    },
    state: 1,
    ids: 0,
    onque: 0,
    qs: {},
    debug: false
}
/*Bueue.js -SomeBottle*/