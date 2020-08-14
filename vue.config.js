module.exports = {
	configureWebpack:{
		resolve:{
			alias:{
				'@':resolve('src'),
				'components':resolve('src/components'),
				'assets':resolve('src/assets'),
				'views':resolve('src/views'),
				'network':resolve('src/network'),
				'common':resolve('src/common')
			}
		}
	}
}