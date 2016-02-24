System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "FortAwesome/Font-Awesome": "github:FortAwesome/Font-Awesome@4.5.0",
    "TheCodeDestroyer/jquery-nicescroll-plus": "github:TheCodeDestroyer/jquery-nicescroll-plus@1.0.0",
    "aFarkas/html5shiv": "github:aFarkas/html5shiv@3.7.3",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "crucifyer/css-browser-selector": "github:crucifyer/css-browser-selector@master",
    "daneden/animate.css": "github:daneden/animate.css@3.5.1",
    "gdsmith/jquery.easing": "github:gdsmith/jquery.easing@1.3.2",
    "gilbitron/Nivo-Lightbox": "github:gilbitron/Nivo-Lightbox@1.2.0",
    "imakewebthings/jquery-waypoints": "github:imakewebthings/jquery-waypoints@2.0.5",
    "inuyaksa/jquery.nicescroll": "github:inuyaksa/jquery.nicescroll@3.6.7",
    "jamesallardice/Placeholders.js": "github:jamesallardice/Placeholders.js@4.0.1",
    "jquery/jquery": "github:jquery/jquery@1.11.1",
    "jquery/jquery-mousewheel": "github:jquery/jquery-mousewheel@3.1.13",
    "scottjehl/Respond": "github:scottjehl/Respond@1.4.2",
    "stevenwanderski/bxslider-4": "github:stevenwanderski/bxslider-4@4.2.5",
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
