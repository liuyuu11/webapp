<?php
	$apiurl = "http://apis.juhe.cn/cnoil/oil_city?key=01249bf4a48a09b563a081f2de757370";
	header("Content-type:text/html;charset=utf-8");
	$res = file_get_contents($apiurl);
	//$response = json_decode($res);
	echo $res;
	//echo $_GET['callback'].'('.$res.')';
?>
<?php
/*    $ch = curl_init();
    $url = 'http://apis.baidu.com/showapi_open_bus/oil_price/find?prov=%E5%8C%97%E4%BA%AC';
    $header = array(
        'apikey: afcbd4ca5a7888ecb45aebadfab3cd0c',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    var_dump(json_decode($res));*/
?>