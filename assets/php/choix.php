<?php

$handle=fopen("../csv/sauvegarde.csv",'r');

$listJoueur = array();
while(true){
    $player=fgetcsv($handle);
    if($player==false){
    break;
    }

    $listJoueur[] =$player;

}

echo json_encode($listJoueur);
?>