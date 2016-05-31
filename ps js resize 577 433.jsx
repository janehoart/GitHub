//resize document to be the size (2000px * 1500px)
if(app.activeDocument.width>app.activeDocument.height){
    var w1 =app.activeDocument.width;
    var h1 =app.activeDocument.height;
    var w2 =new UnitValue(577,"px");
    app.activeDocument.resizeImage(w2,null,72,ResampleMethod.BICUBICSHARPER);
}

else {
    var w1 =app.activeDocument.width;
    var h1  =app.activeDocument.height;
    var h2 =new UnitValue(433,"px");
    app.activeDocument.resizeImage(null,h2,72,ResampleMethod.BICUBICSHARPER);
    };

var newSizew =new UnitValue(577,"px");
var newSizeh =new UnitValue(433,"px");
app.activeDocument.resizeCanvas(newSizew,newSizeh,AnchorPosition.MIDDLECENTER)
