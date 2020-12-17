<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html lang=en>
	<head>
		<title>.:|Curriculum Vitae|:.</title>
		<meta charset="UTF-8">
		<meta name="title" content="Curriculum Vitae Cristian Cuervo">
		<meta name="description" content="this is my resume as a systems engineer">
		<!-- Own style -->
		<link href="css/styleCV.css" rel="stylesheet" type="text/css"/>
		<!-- Device mobile -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<!-- Popper JS -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	</head>
	<body class="body">		
		<header class="header">
			<nav class="navbar fixed-top navbar-expand-sm navbar-dark" style="background-color: #880000" id="nav-bar">
				<a href="#" class="navbar-brand" id="navSideOpen">Curriculum Vitae</a>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><a href="?p=profile#" class="nav-link" id="linkProfile">Profile</a></li>
					<li class="nav-item"><a href="?p=education#" class="nav-link" id="linkEducation">Education</a></li>
					<li class="nav-item"><a href="?p=work#" class="nav-link" id="linkWork">Work Experience</a></li>
					<li class="nav-item"><a href="?p=contact#" class="nav-link" id="linkContact">Contact</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<aside class="vertical-nav bg-light" id="my-nav-side">
				<?php 
					require_once 'pages/navSide.php';
				?>				
			</aside>
			<div class="page-content p-4" id="main-content">				
				<section>
					<?php 
						$page = isset($_GET['p']) ? strtolower($_GET['p']) : 'profile';
						require_once 'pages/'.$page.'.php';
					?>
				</section>
			</div>			
		</main>
		<footer class="page-footer font-small pt-4" id="footer">
			<?php
				require_once 'pages/footer.php';
			?>
		</footer>
	</body>
</html>
