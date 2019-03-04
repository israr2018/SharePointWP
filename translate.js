<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./jquery.translate.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
        alert("document");
        var dict = {
            "Home": {
                pt: "Início",
                en:"Home"
            },
            "Download plugin": {
                pt: "Descarregar plugin",
                en: "Download plugin"
            }
        }
        var translator = $('body').translate({lang: "en", t: dict});
    });
    </script>
</head>
<body>
    <span class="trn">Home</span>
</body>
</html>
