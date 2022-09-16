<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Home - Kelompok 3</title>
    <style>
        .welcome {
            width: 300px;
            height: 200px;
            background-color: salmon;
            opacity: .9;
            position: relative;
            margin: 0 auto;
            bottom: 200px;
            border: 2px solid white;
            box-shadow: 0 0 5px 5px crimson;
            padding: 20px;
        }

        .welcome a {
            position: relative;
            bottom: 6px;
            font-size: 22px;
        }

        .welcome h2 {
            text-align: center;
            margin-top: 20px;
        }

        .welcome h5 {
            margin-top: 80px;
            text-align: center;
            font-size: 20px;
        }

        .welcome input,
        button {
            text-align: center;
            font-size: 20px;
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <div class="badan">
        <div class="text-box">
            <h1 class="judul">Project web statis</h1>
        </div>
        <nav class="navigation">
            <div class="wrapper">
                <div class="firstname">
                    <h2>Kelo<span>mpok 3</span></h2>
                </div>
                <h2><a href="index.html" class="computed">Home</h2>
                <h2><a href="profil.html">profil</h2>
                <h2><a href="kegiatan.html">kegiatan</a></h2>
                <h2><a href="foto.html">foto</a></h2>
                <h2><a href="tulisan.html">puisi</a></h2>
                <h2><a href="email.html">email</a></h2>
            </div>
            <div class="container">
                <!-- selamat datang -->
                <!-- selamat datang end -->
                <img src="image/smkn2.png" width="50" class="logo">
                <h2 align="center" class="content">Welcome! </h2>
                <p align="center">Ini adalah project web statis dari kelompok 3,<br>
                    kami beranggotakan 3 orang, yaitu : <br>
                    1.Rizky Yanuar Irawan <br>
                    2.Daffa Nur Ahmad <br>
                    3.Adhlia khairina. <br><br>
                    Kami berharap kalian menyukai web kami, teriimakasih ! :)
                </p>
                <div class="welcome">
                    <a href="index."></a>
                    <form action="index2.php" method="post">
                        <h5>Masukkan Username Anda :</h5>
                        <input type="text" name="nama">
                        <button type="submit">kirim!</button>
                    </form>
                </div>
            </div>
        </nav>
        <script src="script.js"></script>
        <div class="footer">
            <p align="center"> Copyright &copy; 2022. Kelompok 3, All Rights Reserved.</p>
        </div>
        <br>
    </div>
</body>

</html>