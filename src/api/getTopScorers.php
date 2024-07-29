<?php

    ini_set('display_errors', 'on');
    error_reporting(E_ALL);

    $executionTime = microtime(true);

    $season = $_GET['season'];
    $leagueID = $_GET['id'];

    if (!$season || !$leagueID) {
        echo json_encode([
            'status' => [
                'code' => '400',
                'name' => 'error',
                'description' => 'Invalid parameters',
                'returnTime' => intval((microtime(true) - $executionTime))
            ]
        ]);
        exit;
    }

    $apiKey = "01058054494548bba8346396848d37d8";

    $url = 'https://api.football-data.org/v4/competitions/' . $leagueID . '/scorers?season=' . $season;

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-Auth-Token: ' . $apiKey
    ]);

    $response = curl_exec($ch);

    if ($response === false) {
        $output = [
            'status' => [
                'code' => '500',
                'name' => 'error',
                'description' => 'CURL_ERROR: ' . curl_error($ch),
                'returnTime' => intval((microtime(true) - $executionTime))
            ]
            ];
    } else {
        $decode = json_decode($response, true);

        if ($decode === null) {
            $output = [
                'status' => [
                    'code' => '500',
                    'name' => 'error',
                    'description' => 'Curl_Error: ' . curl_error($ch),
                    'returnTime' => intval((microtime(true) - $executionTime))
                ]
            ];
        } else {
            $output = [
                'status' => [
                    'code' => '200',
                    'name' => 'success',
                    'description' => 'ok',
                    'returnTime' => intval((microtime(true) - $executionTime))
                ],
                'data' => $decode
                ];
        }
    }

    curl_close($ch);

    header('Content-Type: application/json; charset=UTF-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    echo json_encode($output);

