<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

include('_db.php');

  try {
      $dbh = getDatabaseHandle();
  } catch( PDOException $e ) {
      echo $e->getMessage();
  }


if( $dbh ) {

	$worker = $_REQUEST['workerId'];
	
	$sql1 = "SELECT strftime('%s',endTime)-strftime('%s',startTime) AS timeDiff FROM workers WHERE wid=:wid ORDER BY id DESC LIMIT 1";
	$sth1 = $dbh->prepare($sql1); 
	$sth1->execute(array(':wid' => $worker));
	$result = $sth1->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT);
	$timeWaited = $result['timeDiff'];
	
	echo($timeWaited);
	
}

?>
