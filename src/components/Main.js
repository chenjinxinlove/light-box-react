require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//湖图片相关的数组
var imageDatas = require("../data/imageDatas.json");
//利用自执行函数，
imageDatas = (function genImageURL(imageDatasArr){
	for (var i = 0, j = imageDatasArr.length ; i < j; i++) {
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	 <section className="img-sec">

      	 </section>

      	 <nav className="controller-nav">

      	 </nav>

      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
