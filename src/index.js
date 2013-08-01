require("./core")
require("./login");
require("./floorplanner");

angular.module('opentable', ['templates-development', 'core', 'login', 'floorplanner']);
