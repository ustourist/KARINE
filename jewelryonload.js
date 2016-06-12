	window.onload = function(){
		var preImg = "data:image/jpg;base64";

		var needLoadImgs = function(loads){
			var needLoadImgs = function(){
				var that = this;
				this._imgs = [];
				this.initImgs = function(){
					var l = document.images.length,
						i = 0;
						imgs = document.images,
						_i = null;

					if( l > 0 ){
						for(; i < 1 ; i++){
							_i = imgs[i];
							this._imgs[i] = _i;
							if(_i.src === undefined || _i.src === false){
								_i.src = preImg;
							}
						}
						that.updateImg();
						that.initEvent();
					}
				}
			}

			needLoadImgs.prototype.initEvent = function(){
				var that = this;
				window.onscroll = function(){
					that.updateImg();
				}
			}

			needLoadImgs.prototype.updateImg = function(){
				var i = 0,
					l = this._imgs.length,
					cimg = "",
					_i = null;
					windowHeight = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight,
					scrollY = document.documentElement.scrollTop || document.body.scrollTop;

				for(; i < l ; i++){
					_i = imgs[i];
					cimg = _i.getAttribute("data-source");

					if(cimg){
						if(getAbsoluteTop(_i)+_i.offsetHeight/4 < windowHeight + scrollY){
							_i.src = cimg;
							imgs.splice(i,l);
							l = this._imgs.length;
						}
					}
				}
			}	
		return new needLoadImgs(loads);

	}();

	function getAbsoluteTop(_e){
		var _top = _e.offsetTop;
			_current = _e.offsetParent;

		while( _current !== null ){
			_top += _current.offsetTop;
			_current = _current.offsetParent;
		}
		return _top;

	}

	needLoadImgs.initImgs();


	};
