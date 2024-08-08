<?php

namespace App\Services\GraphQL;

class Works {
  private const TOP_WORKS = <<<QUERY
query getTopWorks {
  works(first: 3) {
    nodes {
      date
      content
      title
      workACF {
        eyecatch {
          node {
            sourceUrl
          }
        }
        eyecatch_sp {
          node {
            sourceUrl
          }
        }
        github
        targetUrl
      }
      workCategory {
        nodes {
          name
        }
      }
      skill {
        nodes {
          skillId
          name
        }
      }
      workId
    }
  }
}
QUERY;

  public static function getNewWorks() {
    $c = get_called_class();
    $result = GraphQLService::get($c::TOP_WORKS);

    return $result;
  }
}
