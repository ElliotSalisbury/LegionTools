<?php
function getDatabaseHandle() {
  //The database with tables for the retainer tool
	$dbh = new PDO('pgsql:host=localhost;port=5432;dbname=retainer;user=postgres;password=poopoo');
	// $dbh->setAttribute(PDO::ATTR_TIMEOUT, 10);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, 
	                            PDO::ERRMODE_EXCEPTION); 
	return $dbh;
}
?>
