<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta name="robots" content="noindex,nofollow" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <![endif]-->
    <title>Countdown to Anything</title>

    <link rel="stylesheet" href="style.css" />

    <?php require('config.php'); ?>

    <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
    <section class="container">
        <?php if ($image): ?>
            <img src="<?= $image ?>" class="container__img" width="200" height="200" alt="Event Image" />
        <?php endif; ?>

        <pre class="container__msg">

<?= $message ?> <span id="countdown" class="container__countdown"></span>

        </pre>

    </section>


    <script>
        // set the date we're counting down to
        var targetDateFromConfig = '<?= $deadline ?>';

        <?php if ($lang): ?>
            // set the default language
            var defaultLang = '<?= $lang ?>';
        <?php endif; ?>
    </script>

    <script src="script.js"></script>

</body>
</html>
