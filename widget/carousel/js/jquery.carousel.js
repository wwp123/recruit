;(function($,window,document,undefined){
    var Carousel = function(ele,opt){
        this.$element = ele,
        this.defaults = {
            'step':3,
            'leftId':'',//默认左右按钮在组件内，可在组件外自定义左右按钮并提供对应id
            'rightId':''
        },
        this.options = $.extend({},this.defaults,opt);

        var _this = this,
            btnLeft = _this.options.leftId?$('#'+_this.options.leftId):_this.$element.children('.carousel-prev').eq(0),
            btnRight = _this.options.rightId?$('#'+_this.options.rightId):_this.$element.children('.carousel-next').eq(0),
            carouselList = _this.$element.children(".carousel-clip-region").children(".carousel-list"),
            carouselListLeft,
            carouselItemsLength = carouselList.children('li').length,
            itemWidth = carouselList.children('li').outerWidth(true),
            itemVisibleNum = parseInt(_this.$element.children(".carousel-clip-region").css("width"))/itemWidth,
            step = _this.options.step>itemVisibleNum?itemVisibleNum:_this.options.step,
            temp;


        btnLeft.addClass('disabled');

        btnLeft.on('click',function(){
            carouselListLeft=carouselList.css("left");
            if(btnRight.is(".disabled")) {
                btnRight.removeClass("disabled");
            }
            temp=Math.floor(parseInt(carouselListLeft)/itemWidth)*itemWidth+step*itemWidth;
            if(temp>=0) {
                carouselList.stop(true).animate({left:0},500);
                $(this).addClass("disabled");
            }
            else carouselList.stop(true).animate({left:temp+"px"},500);
        });
        btnRight.on('click',function(){
            carouselListLeft=carouselList.css("left");
            if(btnLeft.is(".disabled")) {
                btnLeft.removeClass("disabled");
            }
            temp=Math.floor(parseInt(carouselListLeft)/itemWidth)*itemWidth;
            if(Math.abs(temp-itemVisibleNum*itemWidth)>=carouselItemsLength*itemWidth) {
                $(this).addClass("disabled");
                return;
            } else {
                temp=Math.floor(parseInt(carouselListLeft)/itemWidth)*itemWidth-step*itemWidth;
                if(Math.abs(temp-itemVisibleNum*itemWidth)>=carouselItemsLength*itemWidth) {
                    carouselList.stop(true).animate({
                        left:"-"+(carouselItemsLength-itemVisibleNum)*itemWidth+"px"
                    },500);
                    $(this).addClass("disabled");
                } else {
                    carouselList.stop(true).animate({left:temp+"px"},500);
                }
                return;
            }
        });

        $.extend(this,{
            alertInfo:function(){
                console.log(this);
            },
            init:function(){
                itemVisibleNum = parseInt(_this.$element.children(".carousel-clip-region").css("width"))/itemWidth;
                step = _this.options.step>itemVisibleNum?itemVisibleNum:_this.options.step;
            }
        });
    }

    $.fn.carousel = function(options){
        return this.each(function(){
            var ele = $(this),carouselApi = ele.data('carousel');
            if(carouselApi) {
                //do something
            } else {
                carouselApi = new Carousel(ele,options);
                ele.data('carousel',carouselApi);
            }
        })
    }
})(jQuery,window,document);

;(function($,window,document,undefined){
    var CarouselV = function(ele,opt){
        this.$element = ele,
        this.defaults = {
            'step':3,
            'prevbtnId':'',//默认左右按钮在组件内，可在组件外自定义左右按钮并提供对应id
            'nextbtnId':''
        },
        this.options = $.extend({},this.defaults,opt);

        var _this = this,
            btnPrev = _this.options.prevbtnId?$('#'+_this.options.prevbtnId):_this.$element.children('.carousel-prev').eq(0),
            btnNext = _this.options.nextbtnId?$('#'+_this.options.nextbtnId):_this.$element.children('.carousel-next').eq(0),
            carouselList = _this.$element.children(".carousel-clip-region").children(".carousel-list"),
            carouselListTop,
            carouselItemsLength = carouselList.children('li').length,
            itemHeight = carouselList.children('li').outerHeight(true),
            itemVisibleNum = Math.ceil(parseInt(_this.$element.children(".carousel-clip-region").css("height"))/itemHeight),
            step = _this.options.step>itemVisibleNum?itemVisibleNum:_this.options.step,
            temp;


        btnPrev.addClass('disabled');

        btnPrev.on('click',function(){
            carouselListTop=carouselList.css("top");
            if(btnNext.is(".disabled")) {
                btnNext.removeClass("disabled");
            }
            temp=Math.floor(parseInt(carouselListTop)/itemHeight)*itemHeight+step*itemHeight;
            if(temp>=0) {
                carouselList.stop(true).animate({top:0},500);
                $(this).addClass("disabled");
            }
            else carouselList.stop(true).animate({top:temp+"px"},500);
        });
        btnNext.on('click',function(){
            carouselListTop=carouselList.css("top");
            if(btnPrev.is(".disabled")) {
                btnPrev.removeClass("disabled");
            }
            temp=Math.floor(parseInt(carouselListTop)/itemHeight)*itemHeight;
            if(Math.abs(temp-itemVisibleNum*itemHeight)>=carouselItemsLength*itemHeight) {
                $(this).addClass("disabled");
                return;
            } else {
                temp=Math.floor(parseInt(carouselListTop)/itemHeight)*itemHeight-step*itemHeight;
                if(Math.abs(temp-itemVisibleNum*itemHeight)>=carouselItemsLength*itemHeight) {
                    carouselList.stop(true).animate({
                        top:"-"+(carouselItemsLength-itemVisibleNum)*itemHeight+"px"
                    },500);
                    $(this).addClass("disabled");
                } else {
                    carouselList.stop(true).animate({top:temp+"px"},500);
                }
                return;
            }
        });

        $.extend(this,{
            alertInfo:function(){
                console.log(this);
            },
            init:function(){
                itemVisibleNum = parseInt(_this.$element.children(".carousel-clip-region").css("height"))/itemHeight;
                step = _this.options.step>itemVisibleNum?itemVisibleNum:_this.options.step;
            }
        });
    }

    $.fn.carouselV = function(options){
        return this.each(function(){
            var ele = $(this),carouselVApi = ele.data('carouselV');
            if(carouselVApi) {
                //do something
            } else {
                carouselVApi = new CarouselV(ele,options);
                ele.data('carouselV',carouselVApi);
            }
        })
    }
})(jQuery,window,document);