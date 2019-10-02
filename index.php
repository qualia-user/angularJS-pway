<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Template</title>
        <link rel="shortcut icon" href="favicon.png"  type="image/png"/>
        <link rel="icon" href="favicon.png"  type="image/png"/>
        <link href="res/css/template.css" rel="stylesheet" type="text/css"/>

        <!-- Styles -->
        <link href="lib/dx19.1.6/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>
        <link href="lib/dx19.1.6/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>

        <!-- Third Party Libraries -->
        <script src="lib/jquery-3.4.1.min.js" type="text/javascript"></script>
        <script src="lib/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
        <script src="lib/angular1.7.8.min.js" type="text/javascript"></script>
        <script src="lib/angular-ui-router-1.0.7.min.js" type="text/javascript"></script>
        <script src="lib/dx19.1.6/Lib/js/jszip.js" type="text/javascript"></script>
        <script src="lib/dx19.1.6/Lib/js/dx.viz-web.js" type="text/javascript"></script>

        <!-- Angular config -->
        <script src="app.js" type="text/javascript"></script>
        <script src="routing.js" type="text/javascript"></script>

        <!-- Services -->
        <script src="services/svc_api.js" type="text/javascript"></script>

        <!-- Q Framework -->
        <script src="framework/ng-common.js" type="text/javascript"></script>
        <script src="framework/custom-list/custom-list.js" type="text/javascript"></script>

        <!-- Directives -->

        <!-- Pages -->
        <script src="pages/welcome/welcome.js" type="text/javascript"></script>
    </head>
    <body ng-app="app" ng-controller="mainCtrl as main">

        <header>
            <div id="logo-header" ui-sref="welcome"></div>
        </header>

        <div ui-view class="root-ui-view"></div>

    </body>
</html>
