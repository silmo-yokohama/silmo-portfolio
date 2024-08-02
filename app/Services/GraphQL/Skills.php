<?php

namespace App\Services\GraphQL;

class Skills {
  public static function get() {
    $query = <<<QUERY
query getSkills {
  allSkill {
    edges {
      node {
        name
        slug
        skillId
        parentId
        skillACF {
          rate
          logo {
            node {
              slug
              sourceUrl
            }
          }
        }
        id
      }
    }
  }
}
QUERY;

    $result = GraphQLService::get($query);

    return $result;
  }
}
