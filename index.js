

//jQuery出让了$符号的使用权限 （也就是说，从这里开始 $ 将不是jQuery，只能 jQuery）
jQuery.noConflict()
//jQuery('.zy-slide'):轮播图的根标签,再调API zySlide()
//zySlide()，只要轮播图的根标签 （任何选择器都可以）
jQuery('.zy-slide').zySlide()

