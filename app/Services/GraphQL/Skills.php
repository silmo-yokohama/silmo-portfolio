<?php

namespace App\Services\GraphQL;

class Skills {
  private const BOTTOM_LAYER_QUERY = <<<QUERY
query getSkillBySlug {
  allSkill(where: {childless: true}, first: 30) {
    edges {
      node {
        slug
        skillId
        name
        skillACF {
          logo {
            node {
              sourceUrl
            }
          }
          rate
        }
      }
    }
  }
}
QUERY;

  private const GET_ALL_QUERY = <<<QUERY
query getSkills {
  allSkill(first: 100) {
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

  public static function get() {
    $c = get_called_class();
    $result = GraphQLService::get($c::GET_ALL_QUERY);

    return $result;
  }

  public static function getBottomLayer() {
    $c = get_called_class();
    $result = GraphQLService::get($c::BOTTOM_LAYER_QUERY);

    return $result;
  }
}
