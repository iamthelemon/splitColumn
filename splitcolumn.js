(function($){
    $.fn.splitColumn = function(){
        $(this).each(function(){
            $(this).children().wrapAll("<div class='leftcol'></div>");
            $(this).append("<div class='rightcol'></div>");
            
            var elements = [];
            var elements = $(this).find(".leftcol>*").toArray();   //all elements
            var itemNo = elements.length;               //number of elements
            var itemHalf = itemNo/2;                  //half the number of elements

            itemHalf = Math.ceil(itemHalf);             //half the number of elements (rounded down)
            
            if (itemNo > 2){
                var r = itemNo-1;
                while (r > itemHalf-1){
                    $(this).children(".rightcol").prepend(elements[r]);
                    r--;
                }

                var l = 0;
                while (l <= itemHalf-1){
                    $(this).children(".leftcol").append(elements[l]);
                    l++;
                }
            }
        });
        return this;
    };
}(jQuery));
