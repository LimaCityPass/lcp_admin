const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
	config = injectBabelPlugin(
		["import", { libraryName: "antd", style: true }],
		config
	);
	config = rewireLess.withLoaderOptions({
		modifyVars: {
			"@primary-color": "#5259F6"
			// "@layout-footer-background": "#1F2135"
		}
	})(config, env);
	return config;
};
