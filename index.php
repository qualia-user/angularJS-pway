<!DOCTYPE html>

<?php $rand = str_pad(mt_rand(0, 9999999), 7, '0', STR_PAD_LEFT); ?>

<html>
    <head>
        <meta charset="UTF-8">
        <!--<title>Ciklopea ERP</title>-->
        <title>Orchestrum</title>
        <!--        <link rel="shortcut icon" type="image/png" href="res/assets/favicon.ico"/>-->

        <link rel="shortcut icon" href="favicon.png"  type="image/png"/>
        <link rel="icon" href="favicon.png"  type="image/png"/>

        <!--        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Oxygen:400,300,700%7CSquada+One' type='text/css' media='all'/>
                <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900'  type='text/css' media='all'>-->

        <!--    Styles -->

        <!--    Third Party Libraries -->
        <script src="lib/jquery-2.1.3.min.js" type="text/javascript"></script>
        <script src="lib/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
        <script src="lib/angular1.3.15.min.js" type="text/javascript"></script>
        <script src="lib/angular-animate1.3.15.min.js" type="text/javascript"></script>
        <script src="lib/angular-sanitize1.3.15.min.js" type="text/javascript"></script>
        <script src="lib/angular-ui-router-0.2.13.js" type="text/javascript"></script>
        <script src="lib/dx16.1.5/Lib/js/jszip.js" type="text/javascript"></script>
        <script src="lib/dx16.1.5/Lib/js/dx.viz-web.js" type="text/javascript"></script>
        <!--<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/16.2.3/js/dx.viz-web.js"></script>-->

        <!--    Angular config -->
        <script src="app.js" type="text/javascript"></script>
        <script src="routing.js" type="text/javascript"></script>

        <!--    Services -->

        <script src="services/svc_api.js" type="text/javascript"></script>

        <!--    Q Framework -->
        <script src="framework/ng-common.js" type="text/javascript"></script>



        <!--        DIRECTIVES-->

        <!--    Pages -->
        <script src="pages/welcome/welcome.js" type="text/javascript"></script>




        
    </head>

    <body ng-app="app" ng-controller="mainCtrl as main">

        <header ng-if="showHeader" id="app-header">
            <div id="logo-header" ui-sref="welcome"></div>


           
            
        </header>



        <div ui-view class="root-ui-view"></div>

    </div>

</body>
</html>
