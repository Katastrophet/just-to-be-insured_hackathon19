<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
	    <!--- Bootstrap CSS --->
	    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
        <link rel="stylesheet" href="resources/ext/bootstrap-4.3.1-dist/css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="resources/ext/bootstrap-4.3.1-dist/css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="resources/ext/bootstrap-4.3.1-dist/css/bootstrap.min.css">
        <!--- Eigenes CSS --->
        <link rel="stylesheet" href="resources/css/main_style.css">
        <link rel="stylesheet" href="resources/css/name_container.css">
        <link rel="stylesheet" href="resources/css/select_container.css">
        <link rel="stylesheet" href="resources/css/dropdown_container.css">
        <!--- Font Awesome --->
	    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    </head>
    <body>
	    
	    <!-- name container-->
	    
	    <?php include("resources/assets/name_container.php"); ?>
		<?php include("resources/assets/select_container.php"); ?>
		<?php include ("resources/assets/dropdown.php"); ?>
	    <!-- name container ende -->
	    <script src="resources/js/jtbiApp.js"></script>
        <script src="resources/js/jtbiModel.js"></script>
		<script src="resources/js/jtbiView.js"></script>
		<script src="resources/js/jtbiController.js"></script>
       <div id="footer">Just to be insured.</div>
        <script>
            jtbiApp.init();
        </script>
    </body>
</html>