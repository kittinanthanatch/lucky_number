<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
            .line-clamp{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .box-info{
                border: 1px solid #c9c9c9;
                padding: 10px;
                border-radius: 6px;
                box-shadow: 2px 5px 0px 1px #88888873;
            }
            th{
                text-align: start;
            }
    </style>

</head>
<body>
    <div>
        <br>
        <div style="margin: 10px;">
        <input id="num_lotto" type="text" placeholder="number..." oninput="validateInput(event)" maxlength="8">
        <button type="button" onclick="sendNumLotto()">compute</button>
        <button type="button" onclick="refreshNumLotto()">refresh</button>
        </div>
        
                
            <div id="tableGoodLuck" style="margin: 10px;"></div>
            <div id="tableLuckyNumber" style="margin: 10px; display: none;"></div>
            <div id="tableCount" style="margin: 10px; display: none;"></div>
            <div id="tableLucky" style="margin: 10px; display: none;"></div>
            <div id="tableLuckySimulation" style="margin: 10px; display: none;"></div>
            <div id="tableMerged" style="margin: 10px;"></div>
            <div id="tableNumMain" style="margin: 10px;"></div>
            <div id="tableNumTry" style="margin: 10px;"></div>
            
    </div>
    <script src="index_lotto.js?v=<?php echo time();?>"></script>

</body>
</html>