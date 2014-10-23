<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

include('_db.php');
include("../../isSandbox.php");

  try {
      $dbh = getDatabaseHandle();
  } catch( PDOException $e ) {
      echo $e->getMessage();
  }


if( $dbh ) {
	$task = $_REQUEST['task'];

	$sql = "SELECT COUNT(hit_id) as count FROM hits WHERE task = :task AND sandbox = :sandbox AND assignable = 1";
	$sth = $dbh->prepare($sql);
	$sth->execute(array(':task' => $task, ':sandbox' => $SANDBOX));
	$result = $sth->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT);
	$count = $result['count'];
	
	echo $count;
}

?>
