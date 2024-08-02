<?php

namespace App\Services\GraphQL;

use GuzzleHttp\Client;

class GraphQLService {
  public static function get($query) {
    $client = new Client();
    $response = $client->request('POST' , 'https://wp.silmo.jp/graphql' ,[
      'headers' => [
        'Content-Type' => 'application/json',
      ],
      'json' => [
        'query' => $query
      ]
    ]);

    $result = $response->getBody()->getContents();

    return $result;
  }
}
