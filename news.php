<?php
	$apikey = "e664f2927ae8c9151a272bdfabba4b18";
	$apiurl = "http://v.juhe.cn/toutiao/index?key=KEY&type=INFO";
	header("Content-type:text/html;charset=utf-8");
	$reqInfo =$_GET["q"];
	/*$_GET["q"];*/
	$url = str_replace("INFO", $reqInfo, str_replace("KEY", $apikey, $apiurl));
	$res = file_get_contents($url);
	//$response = json_decode($res);
	//echo $res;
	echo $_GET['callback'].'('.$res.')';
?>