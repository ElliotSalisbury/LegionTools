<?php


//uncomment and comment as neccesary to determine sandbox usage
//$SANDBOX=false;
$SANDBOX=true;

//if a URL parameter is preset, override the previous variable

if(isset($_REQUEST['useSandbox']))
{
	if($_REQUEST['useSandbox'] == "true") $SANDBOX = 1;
	else if ($_REQUEST['useSandbox'] == "false") $SANDBOX = 0;
}

?>
