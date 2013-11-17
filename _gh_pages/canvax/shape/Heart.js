KISSY.add("canvax/shape/Heart" , function(S , Shape , Base){

   var Heart = function(opt){
       var self = this;
       this.type = "Heart";
       opt.context || (opt.context = {});
       self._style = {
           //x             : 0,//{number},  // 必须，心形内部尖端横坐标
           //y             : 0,//{number},  // 必须，心形内部尖端纵坐标
           hr : opt.context.hr || 0,//{number},  // 必须，心形横宽（中轴线到水平边缘最宽处距离）
           vr : opt.context.vr || 0 //{number},  // 必须，心形纵高（内尖到外尖距离）
       }
       arguments.callee.superclass.constructor.apply(this , arguments);

   };



   Base.creatClass(Heart , Shape , {
       draw : function(ctx, style) {
           ctx.moveTo(0,0 );
           ctx.bezierCurveTo(
               style.hr / 2,
               - style.vr * 2 / 3,
               style.hr * 2,
               style.vr / 3,
               0,
               style.vr
               );
           ctx.bezierCurveTo(
               - style.hr *  2,
               style.vr / 3,
               - style.hr / 2,
               - style.vr * 2 / 3,
               0,
               0
               );
           return;
       },
       getRect : function(style){
           var lineWidth;
           if (style.fillStyle || style.strokeStyle ) {
               lineWidth = style.lineWidth || 1;
           } else {
               lineWidth = 0;
           }
           return {
                 x : Math.round(0 - style.hr - lineWidth / 2),
                 y : Math.round(0 - style.vr / 4 - lineWidth / 2),
                 width : style.hr * 2 + lineWidth,
                 height : style.vr * 5 / 4 + lineWidth
           };

       }
   });

   return Heart;


} , {
   requires : [
     "canvax/display/Shape",
     "canvax/core/Base"
   ]
})