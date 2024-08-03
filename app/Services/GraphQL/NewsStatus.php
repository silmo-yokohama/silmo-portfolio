<?php

namespace App\Services\GraphQL;

class NewsStatus
{
  public static function get()
  {
    $query = <<<QUERY
query getNews {
  allNewsStatus(first: 5, where: {}) {
    nodes {
      title
      date
    }
  }
}
QUERY;

    $result = GraphQLService::get($query);

    return $result;
  }
}
