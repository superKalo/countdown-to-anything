<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <![endif]-->
    <title>Countdown to Anything</title>

    <link rel="stylesheet" href="style.css" />

    <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script src="//css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
</head>

<body>
    <section class="main-container">
        <div id="countdown"></div>
    </section>

    <?php require('config.php'); ?>

    <script>
        // set the date we're counting down to
        var targetDateFromConfig = '<?= $deadline ?>';
    </script>

    <script src="script.js"></script>

</body>
</html>
