(function () {
  'use strict';
  //https://api.github.com/repos/angular/angular/tags
  angular
    .module('angularSeed.github')
    .factory('githubMocks', GithubMocks);

  GithubMocks.$inject = [
    '$q'
  ];

  function GithubMocks(
    $q
  ) {

    var service = {
      compareCommitsMock: compareCommitsMock,
      getTagsMock: getTagsMock
    }

    return service;

    //////////////////////////

    function compareCommitsMock() {
      var response = {};

      response.data = _commitsMockData();

      return $q.when(response);
    }

    function getTagsMock() {
      var response = {};

      response.data = _getTagsMockData();

      return $q.when(response);
    }

    function _commitsMockData() {
      return {
        "url": "https://api.github.com/repos/angular/angular/compare/4.0.1...4.0.2",
        "html_url": "https://github.com/angular/angular/compare/4.0.1...4.0.2",
        "permalink_url": "https://github.com/angular/angular/compare/angular:6b79ab5...angular:14a2d1a",
        "diff_url": "https://github.com/angular/angular/compare/4.0.1...4.0.2.diff",
        "patch_url": "https://github.com/angular/angular/compare/4.0.1...4.0.2.patch",
        "base_commit": {
          "sha": "6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "commit": {
            "author": {
              "name": "Victor Berchet",
              "email": "victor@suumit.com",
              "date": "2017-03-29T23:27:26Z"
            },
            "committer": {
              "name": "Victor Berchet",
              "email": "victor@suumit.com",
              "date": "2017-03-29T23:27:40Z"
            },
            "message": "docs: add changelog for 4.0.1",
            "tree": {
              "sha": "af0c1fd3e15140bf14a8978b54e117e6d12400a5",
              "url": "https://api.github.com/repos/angular/angular/git/trees/af0c1fd3e15140bf14a8978b54e117e6d12400a5"
            },
            "url": "https://api.github.com/repos/angular/angular/git/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
            "comment_count": 0
          },
          "url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "html_url": "https://github.com/angular/angular/commit/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "comments_url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc/comments",
          "author": {
            "login": "vicb",
            "id": 248818,
            "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vicb",
            "html_url": "https://github.com/vicb",
            "followers_url": "https://api.github.com/users/vicb/followers",
            "following_url": "https://api.github.com/users/vicb/following{/other_user}",
            "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
            "organizations_url": "https://api.github.com/users/vicb/orgs",
            "repos_url": "https://api.github.com/users/vicb/repos",
            "events_url": "https://api.github.com/users/vicb/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vicb/received_events",
            "type": "User",
            "site_admin": false
          },
          "committer": {
            "login": "vicb",
            "id": 248818,
            "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vicb",
            "html_url": "https://github.com/vicb",
            "followers_url": "https://api.github.com/users/vicb/followers",
            "following_url": "https://api.github.com/users/vicb/following{/other_user}",
            "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
            "organizations_url": "https://api.github.com/users/vicb/orgs",
            "repos_url": "https://api.github.com/users/vicb/repos",
            "events_url": "https://api.github.com/users/vicb/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vicb/received_events",
            "type": "User",
            "site_admin": false
          },
          "parents": [
            {
              "sha": "53c12a84dc625c486b94bf2c95a50f3a0fe4effc",
              "url": "https://api.github.com/repos/angular/angular/commits/53c12a84dc625c486b94bf2c95a50f3a0fe4effc",
              "html_url": "https://github.com/angular/angular/commit/53c12a84dc625c486b94bf2c95a50f3a0fe4effc"
            }
          ]
        },
        "merge_base_commit": {
          "sha": "6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "commit": {
            "author": {
              "name": "Victor Berchet",
              "email": "victor@suumit.com",
              "date": "2017-03-29T23:27:26Z"
            },
            "committer": {
              "name": "Victor Berchet",
              "email": "victor@suumit.com",
              "date": "2017-03-29T23:27:40Z"
            },
            "message": "docs: add changelog for 4.0.1",
            "tree": {
              "sha": "af0c1fd3e15140bf14a8978b54e117e6d12400a5",
              "url": "https://api.github.com/repos/angular/angular/git/trees/af0c1fd3e15140bf14a8978b54e117e6d12400a5"
            },
            "url": "https://api.github.com/repos/angular/angular/git/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
            "comment_count": 0
          },
          "url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "html_url": "https://github.com/angular/angular/commit/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
          "comments_url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc/comments",
          "author": {
            "login": "vicb",
            "id": 248818,
            "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vicb",
            "html_url": "https://github.com/vicb",
            "followers_url": "https://api.github.com/users/vicb/followers",
            "following_url": "https://api.github.com/users/vicb/following{/other_user}",
            "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
            "organizations_url": "https://api.github.com/users/vicb/orgs",
            "repos_url": "https://api.github.com/users/vicb/repos",
            "events_url": "https://api.github.com/users/vicb/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vicb/received_events",
            "type": "User",
            "site_admin": false
          },
          "committer": {
            "login": "vicb",
            "id": 248818,
            "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vicb",
            "html_url": "https://github.com/vicb",
            "followers_url": "https://api.github.com/users/vicb/followers",
            "following_url": "https://api.github.com/users/vicb/following{/other_user}",
            "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
            "organizations_url": "https://api.github.com/users/vicb/orgs",
            "repos_url": "https://api.github.com/users/vicb/repos",
            "events_url": "https://api.github.com/users/vicb/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vicb/received_events",
            "type": "User",
            "site_admin": false
          },
          "parents": [
            {
              "sha": "53c12a84dc625c486b94bf2c95a50f3a0fe4effc",
              "url": "https://api.github.com/repos/angular/angular/commits/53c12a84dc625c486b94bf2c95a50f3a0fe4effc",
              "html_url": "https://github.com/angular/angular/commit/53c12a84dc625c486b94bf2c95a50f3a0fe4effc"
            }
          ]
        },
        "status": "ahead",
        "ahead_by": 17,
        "behind_by": 0,
        "total_commits": 17,
        "commits": [
          {
            "sha": "1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
            "commit": {
              "author": {
                "name": "Tobias Bosch",
                "email": "tbosch1009@gmail.com",
                "date": "2017-03-30T21:51:29Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:11Z"
              },
              "message": "fix(compiler): fix inheritance for AOT with summaries (#15583)\n\nAllows to inherit ctor args, lifecycle hooks and statics from a class\r\nin another compilation unit. \r\nWill error if trying to inherit from a class in another compilation unit \r\nthat has an `@Component` / `@Directive` / `@Pipe` / `@NgModule`.",
              "tree": {
                "sha": "b015b9645deb8095675ebbdbd129cd7ea9108515",
                "url": "https://api.github.com/repos/angular/angular/git/trees/b015b9645deb8095675ebbdbd129cd7ea9108515"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
            "html_url": "https://github.com/angular/angular/commit/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9/comments",
            "author": {
              "login": "tbosch",
              "id": 690815,
              "avatar_url": "https://avatars2.githubusercontent.com/u/690815?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/tbosch",
              "html_url": "https://github.com/tbosch",
              "followers_url": "https://api.github.com/users/tbosch/followers",
              "following_url": "https://api.github.com/users/tbosch/following{/other_user}",
              "gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
              "organizations_url": "https://api.github.com/users/tbosch/orgs",
              "repos_url": "https://api.github.com/users/tbosch/repos",
              "events_url": "https://api.github.com/users/tbosch/events{/privacy}",
              "received_events_url": "https://api.github.com/users/tbosch/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
                "url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
                "html_url": "https://github.com/angular/angular/commit/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc"
              }
            ]
          },
          {
            "sha": "e4277a086939fb085e1b03771b3c55a147a555c0",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-03-30T17:44:20Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:12Z"
              },
              "message": "fix(language-service): improve resilience to incomplete information",
              "tree": {
                "sha": "4171340ef5c42ece0edf5a084ab9e58ef350cf28",
                "url": "https://api.github.com/repos/angular/angular/git/trees/4171340ef5c42ece0edf5a084ab9e58ef350cf28"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/e4277a086939fb085e1b03771b3c55a147a555c0",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/e4277a086939fb085e1b03771b3c55a147a555c0",
            "html_url": "https://github.com/angular/angular/commit/e4277a086939fb085e1b03771b3c55a147a555c0",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/e4277a086939fb085e1b03771b3c55a147a555c0/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
                "url": "https://api.github.com/repos/angular/angular/commits/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9",
                "html_url": "https://github.com/angular/angular/commit/1864ccb3dd5a61ba89cd8b92a583fbcf105886e9"
              }
            ]
          },
          {
            "sha": "feae7b6059cea9f0a70875c0e47dd7a382b40c33",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-03-31T00:33:47Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:12Z"
              },
              "message": "fix(language-service): resolve any parameter types to any result",
              "tree": {
                "sha": "a10987a3133b11be405f7e7ae06a9b06e9e41acc",
                "url": "https://api.github.com/repos/angular/angular/git/trees/a10987a3133b11be405f7e7ae06a9b06e9e41acc"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/feae7b6059cea9f0a70875c0e47dd7a382b40c33",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/feae7b6059cea9f0a70875c0e47dd7a382b40c33",
            "html_url": "https://github.com/angular/angular/commit/feae7b6059cea9f0a70875c0e47dd7a382b40c33",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/feae7b6059cea9f0a70875c0e47dd7a382b40c33/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "e4277a086939fb085e1b03771b3c55a147a555c0",
                "url": "https://api.github.com/repos/angular/angular/commits/e4277a086939fb085e1b03771b3c55a147a555c0",
                "html_url": "https://github.com/angular/angular/commit/e4277a086939fb085e1b03771b3c55a147a555c0"
              }
            ]
          },
          {
            "sha": "0861fda69c84bb7033e133c93ec171022efa8a24",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-04-04T15:30:38Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:13Z"
              },
              "message": "fix(language-service): avoid throwing exceptions when reporting metadata errors",
              "tree": {
                "sha": "4c8398ffa5b6d1f6a1ebc0defb7b1809f784b59a",
                "url": "https://api.github.com/repos/angular/angular/git/trees/4c8398ffa5b6d1f6a1ebc0defb7b1809f784b59a"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/0861fda69c84bb7033e133c93ec171022efa8a24",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/0861fda69c84bb7033e133c93ec171022efa8a24",
            "html_url": "https://github.com/angular/angular/commit/0861fda69c84bb7033e133c93ec171022efa8a24",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/0861fda69c84bb7033e133c93ec171022efa8a24/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "feae7b6059cea9f0a70875c0e47dd7a382b40c33",
                "url": "https://api.github.com/repos/angular/angular/commits/feae7b6059cea9f0a70875c0e47dd7a382b40c33",
                "html_url": "https://github.com/angular/angular/commit/feae7b6059cea9f0a70875c0e47dd7a382b40c33"
              }
            ]
          },
          {
            "sha": "037805b741a804073458333d06f2e8a3c18efbdc",
            "commit": {
              "author": {
                "name": "Ethan Veres",
                "email": "ethanveres@gmail.com",
                "date": "2017-04-03T18:23:17Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:14Z"
              },
              "message": "style(router): fix typo in router preloader method",
              "tree": {
                "sha": "0d0f5470f794bc2ac19ac8a393a137350ea85cfb",
                "url": "https://api.github.com/repos/angular/angular/git/trees/0d0f5470f794bc2ac19ac8a393a137350ea85cfb"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/037805b741a804073458333d06f2e8a3c18efbdc",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/037805b741a804073458333d06f2e8a3c18efbdc",
            "html_url": "https://github.com/angular/angular/commit/037805b741a804073458333d06f2e8a3c18efbdc",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/037805b741a804073458333d06f2e8a3c18efbdc/comments",
            "author": {
              "login": "ethanve",
              "id": 3869312,
              "avatar_url": "https://avatars0.githubusercontent.com/u/3869312?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/ethanve",
              "html_url": "https://github.com/ethanve",
              "followers_url": "https://api.github.com/users/ethanve/followers",
              "following_url": "https://api.github.com/users/ethanve/following{/other_user}",
              "gists_url": "https://api.github.com/users/ethanve/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/ethanve/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/ethanve/subscriptions",
              "organizations_url": "https://api.github.com/users/ethanve/orgs",
              "repos_url": "https://api.github.com/users/ethanve/repos",
              "events_url": "https://api.github.com/users/ethanve/events{/privacy}",
              "received_events_url": "https://api.github.com/users/ethanve/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "0861fda69c84bb7033e133c93ec171022efa8a24",
                "url": "https://api.github.com/repos/angular/angular/commits/0861fda69c84bb7033e133c93ec171022efa8a24",
                "html_url": "https://github.com/angular/angular/commit/0861fda69c84bb7033e133c93ec171022efa8a24"
              }
            ]
          },
          {
            "sha": "5b99533315569d294a592d62805ff5ffd3b1409b",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-04-04T18:37:06Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:14Z"
              },
              "message": "fix(language-service): initialize static reflector correctly\n\nFixes #15768",
              "tree": {
                "sha": "3b030ae32a3a5ec06eb4e7758275a8f21b1a4222",
                "url": "https://api.github.com/repos/angular/angular/git/trees/3b030ae32a3a5ec06eb4e7758275a8f21b1a4222"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/5b99533315569d294a592d62805ff5ffd3b1409b",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/5b99533315569d294a592d62805ff5ffd3b1409b",
            "html_url": "https://github.com/angular/angular/commit/5b99533315569d294a592d62805ff5ffd3b1409b",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/5b99533315569d294a592d62805ff5ffd3b1409b/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "037805b741a804073458333d06f2e8a3c18efbdc",
                "url": "https://api.github.com/repos/angular/angular/commits/037805b741a804073458333d06f2e8a3c18efbdc",
                "html_url": "https://github.com/angular/angular/commit/037805b741a804073458333d06f2e8a3c18efbdc"
              }
            ]
          },
          {
            "sha": "c9c7acd484ccef11d4359f0b767b7d6f90457153",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-04-04T17:31:01Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:34:15Z"
              },
              "message": "fix(language-service): parse extended i18n forms",
              "tree": {
                "sha": "f1663ba8ac90437d4f0a5926010c87112a033a3e",
                "url": "https://api.github.com/repos/angular/angular/git/trees/f1663ba8ac90437d4f0a5926010c87112a033a3e"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/c9c7acd484ccef11d4359f0b767b7d6f90457153",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/c9c7acd484ccef11d4359f0b767b7d6f90457153",
            "html_url": "https://github.com/angular/angular/commit/c9c7acd484ccef11d4359f0b767b7d6f90457153",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/c9c7acd484ccef11d4359f0b767b7d6f90457153/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "5b99533315569d294a592d62805ff5ffd3b1409b",
                "url": "https://api.github.com/repos/angular/angular/commits/5b99533315569d294a592d62805ff5ffd3b1409b",
                "html_url": "https://github.com/angular/angular/commit/5b99533315569d294a592d62805ff5ffd3b1409b"
              }
            ]
          },
          {
            "sha": "168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
            "commit": {
              "author": {
                "name": "Chuck Jazdzewski",
                "email": "chuckj@google.com",
                "date": "2017-04-10T18:23:40Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:44Z"
              },
              "message": "fix(language-service): detect when there isn't a tsconfig.json\n\nFixes #15874",
              "tree": {
                "sha": "8d979e1a97710f9027d586981168a5c0cc1d4a50",
                "url": "https://api.github.com/repos/angular/angular/git/trees/8d979e1a97710f9027d586981168a5c0cc1d4a50"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
            "html_url": "https://github.com/angular/angular/commit/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8/comments",
            "author": {
              "login": "chuckjaz",
              "id": 372013,
              "avatar_url": "https://avatars2.githubusercontent.com/u/372013?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/chuckjaz",
              "html_url": "https://github.com/chuckjaz",
              "followers_url": "https://api.github.com/users/chuckjaz/followers",
              "following_url": "https://api.github.com/users/chuckjaz/following{/other_user}",
              "gists_url": "https://api.github.com/users/chuckjaz/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/chuckjaz/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/chuckjaz/subscriptions",
              "organizations_url": "https://api.github.com/users/chuckjaz/orgs",
              "repos_url": "https://api.github.com/users/chuckjaz/repos",
              "events_url": "https://api.github.com/users/chuckjaz/events{/privacy}",
              "received_events_url": "https://api.github.com/users/chuckjaz/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "c9c7acd484ccef11d4359f0b767b7d6f90457153",
                "url": "https://api.github.com/repos/angular/angular/commits/c9c7acd484ccef11d4359f0b767b7d6f90457153",
                "html_url": "https://github.com/angular/angular/commit/c9c7acd484ccef11d4359f0b767b7d6f90457153"
              }
            ]
          },
          {
            "sha": "c10e50cf38c206adf7930b34b153d57329b95e49",
            "commit": {
              "author": {
                "name": "Paul Gschwendtner",
                "email": "paulgschwendtner@gmail.com",
                "date": "2017-03-30T21:31:22Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:45Z"
              },
              "message": "fix(tsc-wrapped): ensure valid path separators in metadata\n\n* Fixes that `tsc-wrapped` stores invalid path separators in the bundled metadata files. Previous errors could have been: `Cannot find module '.corecoordinationnique-selection-dispatcher'.` (See https://github.com/angular/material2/issues/3834)\n* Fixes failing tests on Windows. Now all tooling tests are green on Windows.\n\nRelated to #15403",
              "tree": {
                "sha": "0ce7d772d6982e65b10e5994baa8cfde3b6c1d75",
                "url": "https://api.github.com/repos/angular/angular/git/trees/0ce7d772d6982e65b10e5994baa8cfde3b6c1d75"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/c10e50cf38c206adf7930b34b153d57329b95e49",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/c10e50cf38c206adf7930b34b153d57329b95e49",
            "html_url": "https://github.com/angular/angular/commit/c10e50cf38c206adf7930b34b153d57329b95e49",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/c10e50cf38c206adf7930b34b153d57329b95e49/comments",
            "author": {
              "login": "DevVersion",
              "id": 4987015,
              "avatar_url": "https://avatars0.githubusercontent.com/u/4987015?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/DevVersion",
              "html_url": "https://github.com/DevVersion",
              "followers_url": "https://api.github.com/users/DevVersion/followers",
              "following_url": "https://api.github.com/users/DevVersion/following{/other_user}",
              "gists_url": "https://api.github.com/users/DevVersion/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/DevVersion/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/DevVersion/subscriptions",
              "organizations_url": "https://api.github.com/users/DevVersion/orgs",
              "repos_url": "https://api.github.com/users/DevVersion/repos",
              "events_url": "https://api.github.com/users/DevVersion/events{/privacy}",
              "received_events_url": "https://api.github.com/users/DevVersion/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
                "url": "https://api.github.com/repos/angular/angular/commits/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8",
                "html_url": "https://github.com/angular/angular/commit/168a2eb5bfb51bb363d6c1d11e2bcb13d14d48d8"
              }
            ]
          },
          {
            "sha": "978f80985ce43528868206d47a4bcbe10d422fbf",
            "commit": {
              "author": {
                "name": "Dzmitry Shylovich",
                "email": "DzmitryShylovich@users.noreply.github.com",
                "date": "2017-04-05T04:45:53Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:45Z"
              },
              "message": "fix(router): the preloader use the module from the loaded config",
              "tree": {
                "sha": "e5baaf28741f610c0e3e19889b76003037d5ee5c",
                "url": "https://api.github.com/repos/angular/angular/git/trees/e5baaf28741f610c0e3e19889b76003037d5ee5c"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/978f80985ce43528868206d47a4bcbe10d422fbf",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/978f80985ce43528868206d47a4bcbe10d422fbf",
            "html_url": "https://github.com/angular/angular/commit/978f80985ce43528868206d47a4bcbe10d422fbf",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/978f80985ce43528868206d47a4bcbe10d422fbf/comments",
            "author": {
              "login": "DzmitryShylovich",
              "id": 9335533,
              "avatar_url": "https://avatars2.githubusercontent.com/u/9335533?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/DzmitryShylovich",
              "html_url": "https://github.com/DzmitryShylovich",
              "followers_url": "https://api.github.com/users/DzmitryShylovich/followers",
              "following_url": "https://api.github.com/users/DzmitryShylovich/following{/other_user}",
              "gists_url": "https://api.github.com/users/DzmitryShylovich/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/DzmitryShylovich/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/DzmitryShylovich/subscriptions",
              "organizations_url": "https://api.github.com/users/DzmitryShylovich/orgs",
              "repos_url": "https://api.github.com/users/DzmitryShylovich/repos",
              "events_url": "https://api.github.com/users/DzmitryShylovich/events{/privacy}",
              "received_events_url": "https://api.github.com/users/DzmitryShylovich/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "c10e50cf38c206adf7930b34b153d57329b95e49",
                "url": "https://api.github.com/repos/angular/angular/commits/c10e50cf38c206adf7930b34b153d57329b95e49",
                "html_url": "https://github.com/angular/angular/commit/c10e50cf38c206adf7930b34b153d57329b95e49"
              }
            ]
          },
          {
            "sha": "b44b983c1f33d51c10fd97d24814df13fbc59f0c",
            "commit": {
              "author": {
                "name": "Victor Berchet",
                "email": "victor@suumit.com",
                "date": "2017-04-05T04:43:51Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:45Z"
              },
              "message": "test(router): test preloading when a module is already loaded",
              "tree": {
                "sha": "252030a4950ffb7f573f55cc4414f9363847c631",
                "url": "https://api.github.com/repos/angular/angular/git/trees/252030a4950ffb7f573f55cc4414f9363847c631"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/b44b983c1f33d51c10fd97d24814df13fbc59f0c",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/b44b983c1f33d51c10fd97d24814df13fbc59f0c",
            "html_url": "https://github.com/angular/angular/commit/b44b983c1f33d51c10fd97d24814df13fbc59f0c",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/b44b983c1f33d51c10fd97d24814df13fbc59f0c/comments",
            "author": {
              "login": "vicb",
              "id": 248818,
              "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/vicb",
              "html_url": "https://github.com/vicb",
              "followers_url": "https://api.github.com/users/vicb/followers",
              "following_url": "https://api.github.com/users/vicb/following{/other_user}",
              "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
              "organizations_url": "https://api.github.com/users/vicb/orgs",
              "repos_url": "https://api.github.com/users/vicb/repos",
              "events_url": "https://api.github.com/users/vicb/events{/privacy}",
              "received_events_url": "https://api.github.com/users/vicb/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "978f80985ce43528868206d47a4bcbe10d422fbf",
                "url": "https://api.github.com/repos/angular/angular/commits/978f80985ce43528868206d47a4bcbe10d422fbf",
                "html_url": "https://github.com/angular/angular/commit/978f80985ce43528868206d47a4bcbe10d422fbf"
              }
            ]
          },
          {
            "sha": "9c9f4093648ed573d29cd2fde92de8e2da02e913",
            "commit": {
              "author": {
                "name": "Marc Laval",
                "email": "mlaval@amadeus.com",
                "date": "2017-04-06T12:11:58Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:45Z"
              },
              "message": "test(router): enable running the campaign in non-ES6 browsers\n\nCloses #15806.",
              "tree": {
                "sha": "0f346790aaf9a2cc70a67c1637f792b6acab1d3c",
                "url": "https://api.github.com/repos/angular/angular/git/trees/0f346790aaf9a2cc70a67c1637f792b6acab1d3c"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/9c9f4093648ed573d29cd2fde92de8e2da02e913",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/9c9f4093648ed573d29cd2fde92de8e2da02e913",
            "html_url": "https://github.com/angular/angular/commit/9c9f4093648ed573d29cd2fde92de8e2da02e913",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/9c9f4093648ed573d29cd2fde92de8e2da02e913/comments",
            "author": {
              "login": "mlaval",
              "id": 2316643,
              "avatar_url": "https://avatars2.githubusercontent.com/u/2316643?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/mlaval",
              "html_url": "https://github.com/mlaval",
              "followers_url": "https://api.github.com/users/mlaval/followers",
              "following_url": "https://api.github.com/users/mlaval/following{/other_user}",
              "gists_url": "https://api.github.com/users/mlaval/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/mlaval/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/mlaval/subscriptions",
              "organizations_url": "https://api.github.com/users/mlaval/orgs",
              "repos_url": "https://api.github.com/users/mlaval/repos",
              "events_url": "https://api.github.com/users/mlaval/events{/privacy}",
              "received_events_url": "https://api.github.com/users/mlaval/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "b44b983c1f33d51c10fd97d24814df13fbc59f0c",
                "url": "https://api.github.com/repos/angular/angular/commits/b44b983c1f33d51c10fd97d24814df13fbc59f0c",
                "html_url": "https://github.com/angular/angular/commit/b44b983c1f33d51c10fd97d24814df13fbc59f0c"
              }
            ]
          },
          {
            "sha": "dcf60da16d35ac806592768c21892e21a3e3f3d9",
            "commit": {
              "author": {
                "name": "Victor Berchet",
                "email": "victor@suumit.com",
                "date": "2017-04-03T00:21:56Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:45Z"
              },
              "message": "refactor(router): cleanup & simplifications",
              "tree": {
                "sha": "13adce83407ca4b12eea7d2f543ebe4f427b9683",
                "url": "https://api.github.com/repos/angular/angular/git/trees/13adce83407ca4b12eea7d2f543ebe4f427b9683"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/dcf60da16d35ac806592768c21892e21a3e3f3d9",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/dcf60da16d35ac806592768c21892e21a3e3f3d9",
            "html_url": "https://github.com/angular/angular/commit/dcf60da16d35ac806592768c21892e21a3e3f3d9",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/dcf60da16d35ac806592768c21892e21a3e3f3d9/comments",
            "author": {
              "login": "vicb",
              "id": 248818,
              "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/vicb",
              "html_url": "https://github.com/vicb",
              "followers_url": "https://api.github.com/users/vicb/followers",
              "following_url": "https://api.github.com/users/vicb/following{/other_user}",
              "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
              "organizations_url": "https://api.github.com/users/vicb/orgs",
              "repos_url": "https://api.github.com/users/vicb/repos",
              "events_url": "https://api.github.com/users/vicb/events{/privacy}",
              "received_events_url": "https://api.github.com/users/vicb/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "9c9f4093648ed573d29cd2fde92de8e2da02e913",
                "url": "https://api.github.com/repos/angular/angular/commits/9c9f4093648ed573d29cd2fde92de8e2da02e913",
                "html_url": "https://github.com/angular/angular/commit/9c9f4093648ed573d29cd2fde92de8e2da02e913"
              }
            ]
          },
          {
            "sha": "2f41b52e784c65684aa0553e5175bfebf9530c79",
            "commit": {
              "author": {
                "name": "Victor Berchet",
                "email": "victor@suumit.com",
                "date": "2017-04-04T16:01:39Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:46Z"
              },
              "message": "fix(router): fix query param parsing",
              "tree": {
                "sha": "e977cb883a809d256569e25268a6c3c2e8370d7c",
                "url": "https://api.github.com/repos/angular/angular/git/trees/e977cb883a809d256569e25268a6c3c2e8370d7c"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/2f41b52e784c65684aa0553e5175bfebf9530c79",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/2f41b52e784c65684aa0553e5175bfebf9530c79",
            "html_url": "https://github.com/angular/angular/commit/2f41b52e784c65684aa0553e5175bfebf9530c79",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/2f41b52e784c65684aa0553e5175bfebf9530c79/comments",
            "author": {
              "login": "vicb",
              "id": 248818,
              "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/vicb",
              "html_url": "https://github.com/vicb",
              "followers_url": "https://api.github.com/users/vicb/followers",
              "following_url": "https://api.github.com/users/vicb/following{/other_user}",
              "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
              "organizations_url": "https://api.github.com/users/vicb/orgs",
              "repos_url": "https://api.github.com/users/vicb/repos",
              "events_url": "https://api.github.com/users/vicb/events{/privacy}",
              "received_events_url": "https://api.github.com/users/vicb/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "dcf60da16d35ac806592768c21892e21a3e3f3d9",
                "url": "https://api.github.com/repos/angular/angular/commits/dcf60da16d35ac806592768c21892e21a3e3f3d9",
                "html_url": "https://github.com/angular/angular/commit/dcf60da16d35ac806592768c21892e21a3e3f3d9"
              }
            ]
          },
          {
            "sha": "cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
            "commit": {
              "author": {
                "name": "Victor Berchet",
                "email": "victor@suumit.com",
                "date": "2017-04-10T22:49:14Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:38:46Z"
              },
              "message": "ci: add jasonaden to the router",
              "tree": {
                "sha": "6913354fed1fc48f9c7da8cb38a88c7f21bb5624",
                "url": "https://api.github.com/repos/angular/angular/git/trees/6913354fed1fc48f9c7da8cb38a88c7f21bb5624"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
            "html_url": "https://github.com/angular/angular/commit/cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/cbf30cb1019420ac6ddd038070f1cc486feb2ad1/comments",
            "author": {
              "login": "vicb",
              "id": 248818,
              "avatar_url": "https://avatars3.githubusercontent.com/u/248818?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/vicb",
              "html_url": "https://github.com/vicb",
              "followers_url": "https://api.github.com/users/vicb/followers",
              "following_url": "https://api.github.com/users/vicb/following{/other_user}",
              "gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
              "organizations_url": "https://api.github.com/users/vicb/orgs",
              "repos_url": "https://api.github.com/users/vicb/repos",
              "events_url": "https://api.github.com/users/vicb/events{/privacy}",
              "received_events_url": "https://api.github.com/users/vicb/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "2f41b52e784c65684aa0553e5175bfebf9530c79",
                "url": "https://api.github.com/repos/angular/angular/commits/2f41b52e784c65684aa0553e5175bfebf9530c79",
                "html_url": "https://github.com/angular/angular/commit/2f41b52e784c65684aa0553e5175bfebf9530c79"
              }
            ]
          },
          {
            "sha": "61e089931fd2793b023bb1880f5855f2d03881df",
            "commit": {
              "author": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:50:12Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:50:12Z"
              },
              "message": "release: cut the 4.0.2 release",
              "tree": {
                "sha": "295f8154c75d36e190a6aae7cbb299b09cee09de",
                "url": "https://api.github.com/repos/angular/angular/git/trees/295f8154c75d36e190a6aae7cbb299b09cee09de"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/61e089931fd2793b023bb1880f5855f2d03881df",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/61e089931fd2793b023bb1880f5855f2d03881df",
            "html_url": "https://github.com/angular/angular/commit/61e089931fd2793b023bb1880f5855f2d03881df",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/61e089931fd2793b023bb1880f5855f2d03881df/comments",
            "author": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
                "url": "https://api.github.com/repos/angular/angular/commits/cbf30cb1019420ac6ddd038070f1cc486feb2ad1",
                "html_url": "https://github.com/angular/angular/commit/cbf30cb1019420ac6ddd038070f1cc486feb2ad1"
              }
            ]
          },
          {
            "sha": "14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "commit": {
              "author": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:56:13Z"
              },
              "committer": {
                "name": "Hans Larsen",
                "email": "hans@hansl.ca",
                "date": "2017-04-11T21:56:13Z"
              },
              "message": "docs: add changelog for 4.0.2",
              "tree": {
                "sha": "a261ce9c2ea5a2637ce299f7033a440801453948",
                "url": "https://api.github.com/repos/angular/angular/git/trees/a261ce9c2ea5a2637ce299f7033a440801453948"
              },
              "url": "https://api.github.com/repos/angular/angular/git/commits/14a2d1a6f7528c672c15244399ee7188cd2b10d3",
              "comment_count": 0
            },
            "url": "https://api.github.com/repos/angular/angular/commits/14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "html_url": "https://github.com/angular/angular/commit/14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "comments_url": "https://api.github.com/repos/angular/angular/commits/14a2d1a6f7528c672c15244399ee7188cd2b10d3/comments",
            "author": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "committer": {
              "login": "hansl",
              "id": 681969,
              "avatar_url": "https://avatars2.githubusercontent.com/u/681969?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/hansl",
              "html_url": "https://github.com/hansl",
              "followers_url": "https://api.github.com/users/hansl/followers",
              "following_url": "https://api.github.com/users/hansl/following{/other_user}",
              "gists_url": "https://api.github.com/users/hansl/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/hansl/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/hansl/subscriptions",
              "organizations_url": "https://api.github.com/users/hansl/orgs",
              "repos_url": "https://api.github.com/users/hansl/repos",
              "events_url": "https://api.github.com/users/hansl/events{/privacy}",
              "received_events_url": "https://api.github.com/users/hansl/received_events",
              "type": "User",
              "site_admin": false
            },
            "parents": [
              {
                "sha": "61e089931fd2793b023bb1880f5855f2d03881df",
                "url": "https://api.github.com/repos/angular/angular/commits/61e089931fd2793b023bb1880f5855f2d03881df",
                "html_url": "https://github.com/angular/angular/commit/61e089931fd2793b023bb1880f5855f2d03881df"
              }
            ]
          }
        ],
        "files": [
          {
            "sha": "9a14cbbc35fc44b449222cd8ca9dea979c837d8c",
            "filename": ".pullapprove.yml",
            "status": "modified",
            "additions": 2,
            "deletions": 2,
            "changes": 4,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/.pullapprove.yml",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/.pullapprove.yml",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/.pullapprove.yml?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -186,8 +186,8 @@ groups:\n       files:\n         - \"packages/router/*\"\n     users:\n-      - vicb #primary\n-      # needs secondary\n+      - jasonaden\n+      - vicb\n       - IgorMinar #fallback\n       - mhevery #fallback\n "
          },
          {
            "sha": "b466c62f0f221e13f275d125992e1f92de82200e",
            "filename": "CHANGELOG.md",
            "status": "modified",
            "additions": 19,
            "deletions": 0,
            "changes": 19,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/CHANGELOG.md",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/CHANGELOG.md",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/CHANGELOG.md?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -1,3 +1,22 @@\n+<a name=\"4.0.2\"></a>\n+## [4.0.2](https://github.com/angular/angular/compare/4.0.1...4.0.2) (2017-04-11)\n+\n+\n+### Bug Fixes\n+\n+* **compiler:** fix inheritance for AOT with summaries ([#15583](https://github.com/angular/angular/issues/15583)) ([1864ccb](https://github.com/angular/angular/commit/1864ccb))\n+* **language-service:** avoid throwing exceptions when reporting metadata errors ([0861fda](https://github.com/angular/angular/commit/0861fda))\n+* **language-service:** detect when there isn't a tsconfig.json ([168a2eb](https://github.com/angular/angular/commit/168a2eb)), closes [#15874](https://github.com/angular/angular/issues/15874)\n+* **language-service:** improve resilience to incomplete information ([e4277a0](https://github.com/angular/angular/commit/e4277a0))\n+* **language-service:** initialize static reflector correctly ([5b99533](https://github.com/angular/angular/commit/5b99533)), closes [#15768](https://github.com/angular/angular/issues/15768)\n+* **language-service:** parse extended i18n forms ([c9c7acd](https://github.com/angular/angular/commit/c9c7acd))\n+* **language-service:** resolve any parameter types to any result ([feae7b6](https://github.com/angular/angular/commit/feae7b6))\n+* **router:** fix query param parsing ([2f41b52](https://github.com/angular/angular/commit/2f41b52))\n+* **router:** the preloader use the module from the loaded config ([978f809](https://github.com/angular/angular/commit/978f809))\n+* **tsc-wrapped:** ensure valid path separators in metadata ([c10e50c](https://github.com/angular/angular/commit/c10e50c))\n+\n+\n+\n <a name=\"4.0.1\"></a>\n ## [4.0.1](https://github.com/angular/angular/compare/4.0.0...4.0.1) (2017-03-29)\n "
          },
          {
            "sha": "bde3fcf3cd0c2d579951ba285be13b9e77cd0332",
            "filename": "package.json",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/package.json",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/package.json",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/package.json?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -1,6 +1,6 @@\n {\n   \"name\": \"angular-srcs\",\n-  \"version\": \"4.0.1\",\n+  \"version\": \"4.0.2\",\n   \"private\": true,\n   \"branchPattern\": \"2.0.*\",\n   \"description\": \"Angular - a web framework for modern web apps\","
          },
          {
            "sha": "4f23c8f2bdad2f73cbd91718a432402a29f0ebc4",
            "filename": "packages/compiler-cli/package.json",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler-cli/package.json",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler-cli/package.json",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler-cli/package.json?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -9,7 +9,7 @@\n     \"ng-xi18n\": \"./src/extract_i18n.js\"\n   },\n   \"dependencies\": {\n-    \"@angular/tsc-wrapped\": \"4.0.1\",\n+    \"@angular/tsc-wrapped\": \"4.0.2\",\n     \"reflect-metadata\": \"^0.1.2\",\n     \"minimist\": \"^1.2.0\"\n   },"
          },
          {
            "sha": "d602f6843ababb24bebfd4d5c3e2a4f7fadafdf5",
            "filename": "packages/compiler-cli/src/ngtools_api.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler-cli/src/ngtools_api.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler-cli/src/ngtools_api.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler-cli/src/ngtools_api.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -124,7 +124,7 @@ export class NgTools_InternalApi_NG_2 {\n     const symbolCache = new StaticSymbolCache();\n     const summaryResolver = new AotSummaryResolver(ngCompilerHost, symbolCache);\n     const symbolResolver = new StaticSymbolResolver(ngCompilerHost, symbolCache, summaryResolver);\n-    const staticReflector = new StaticReflector(symbolResolver);\n+    const staticReflector = new StaticReflector(summaryResolver, symbolResolver);\n     const routeMap = listLazyRoutesOfModule(options.entryModule, ngCompilerHost, staticReflector);\n \n     return Object.keys(routeMap).reduce("
          },
          {
            "sha": "56b799041600a1508ac92a9f325f00ab05e6f0e3",
            "filename": "packages/compiler/src/aot/compiler_factory.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/compiler_factory.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/compiler_factory.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/aot/compiler_factory.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -47,7 +47,7 @@ export function createAotCompiler(compilerHost: AotCompilerHost, options: AotCom\n   const symbolCache = new StaticSymbolCache();\n   const summaryResolver = new AotSummaryResolver(compilerHost, symbolCache);\n   const symbolResolver = new StaticSymbolResolver(compilerHost, symbolCache, summaryResolver);\n-  const staticReflector = new StaticReflector(symbolResolver);\n+  const staticReflector = new StaticReflector(summaryResolver, symbolResolver);\n   StaticAndDynamicReflectionCapabilities.install(staticReflector);\n   const console = new Console();\n   const htmlParser = new I18NHtmlParser("
          },
          {
            "sha": "513252b8d531def6c1e18d1b002b0bb689eb213b",
            "filename": "packages/compiler/src/aot/static_reflector.ts",
            "status": "modified",
            "additions": 63,
            "deletions": 28,
            "changes": 91,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/static_reflector.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/static_reflector.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/aot/static_reflector.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -7,7 +7,11 @@\n  */\n \n import {Attribute, Component, ContentChild, ContentChildren, Directive, Host, HostBinding, HostListener, Inject, Injectable, Input, NgModule, Optional, Output, Pipe, Self, SkipSelf, ViewChild, ViewChildren, animate, group, keyframes, sequence, state, style, transition, trigger, ɵReflectorReader} from '@angular/core';\n+\n+import {CompileSummaryKind} from '../compile_metadata';\n+import {SummaryResolver} from '../summary_resolver';\n import {syntaxError} from '../util';\n+\n import {StaticSymbol} from './static_symbol';\n import {StaticSymbolResolver} from './static_symbol_resolver';\n \n@@ -35,8 +39,11 @@ export class StaticReflector implements ɵReflectorReader {\n   private conversionMap = new Map<StaticSymbol, (context: StaticSymbol, args: any[]) => any>();\n   private injectionToken: StaticSymbol;\n   private opaqueToken: StaticSymbol;\n+  private annotationForParentClassWithSummaryKind = new Map<CompileSummaryKind, any[]>();\n+  private annotationNames = new Map<any, string>();\n \n   constructor(\n+      private summaryResolver: SummaryResolver<StaticSymbol>,\n       private symbolResolver: StaticSymbolResolver,\n       knownMetadataClasses: {name: string, filePath: string, ctor: any}[] = [],\n       knownMetadataFunctions: {name: string, filePath: string, fn: any}[] = [],\n@@ -47,6 +54,17 @@ export class StaticReflector implements ɵReflectorReader {\n             this.getStaticSymbol(kc.filePath, kc.name), kc.ctor));\n     knownMetadataFunctions.forEach(\n         (kf) => this._registerFunction(this.getStaticSymbol(kf.filePath, kf.name), kf.fn));\n+    this.annotationForParentClassWithSummaryKind.set(\n+        CompileSummaryKind.Directive, [Directive, Component]);\n+    this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.Pipe, [Pipe]);\n+    this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.NgModule, [NgModule]);\n+    this.annotationForParentClassWithSummaryKind.set(\n+        CompileSummaryKind.Injectable, [Injectable, Pipe, Directive, Component, NgModule]);\n+    this.annotationNames.set(Directive, 'Directive');\n+    this.annotationNames.set(Component, 'Component');\n+    this.annotationNames.set(Pipe, 'Pipe');\n+    this.annotationNames.set(NgModule, 'NgModule');\n+    this.annotationNames.set(Injectable, 'Injectable');\n   }\n \n   importUri(typeOrFunc: StaticSymbol): string {\n@@ -96,17 +114,33 @@ export class StaticReflector implements ɵReflectorReader {\n     if (!annotations) {\n       annotations = [];\n       const classMetadata = this.getTypeMetadata(type);\n-      if (classMetadata['extends']) {\n-        const parentType = this.trySimplify(type, classMetadata['extends']);\n-        if (parentType && (parentType instanceof StaticSymbol)) {\n-          const parentAnnotations = this.annotations(parentType);\n-          annotations.push(...parentAnnotations);\n-        }\n+      const parentType = this.findParentType(type, classMetadata);\n+      if (parentType) {\n+        const parentAnnotations = this.annotations(parentType);\n+        annotations.push(...parentAnnotations);\n       }\n+      let ownAnnotations: any[] = [];\n       if (classMetadata['decorators']) {\n-        const ownAnnotations: any[] = this.simplify(type, classMetadata['decorators']);\n+        ownAnnotations = this.simplify(type, classMetadata['decorators']);\n         annotations.push(...ownAnnotations);\n       }\n+      if (parentType && !this.summaryResolver.isLibraryFile(type.filePath) &&\n+          this.summaryResolver.isLibraryFile(parentType.filePath)) {\n+        const summary = this.summaryResolver.resolveSummary(parentType);\n+        if (summary && summary.type) {\n+          const requiredAnnotationTypes =\n+              this.annotationForParentClassWithSummaryKind.get(summary.type.summaryKind);\n+          const typeHasRequiredAnnotation = requiredAnnotationTypes.some(\n+              requiredType => ownAnnotations.some(ann => ann instanceof requiredType));\n+          if (!typeHasRequiredAnnotation) {\n+            this.reportError(\n+                syntaxError(\n+                    `Class ${type.name} in ${type.filePath} extends from a ${CompileSummaryKind[summary.type.summaryKind]} in another compilation unit without duplicating the decorator. ` +\n+                    `Please add a ${requiredAnnotationTypes.map(type => this.annotationNames.get(type)).join(' or ')} decorator to the class.`),\n+                type);\n+          }\n+        }\n+      }\n       this.annotationCache.set(type, annotations.filter(ann => !!ann));\n     }\n     return annotations;\n@@ -117,14 +151,12 @@ export class StaticReflector implements ɵReflectorReader {\n     if (!propMetadata) {\n       const classMetadata = this.getTypeMetadata(type);\n       propMetadata = {};\n-      if (classMetadata['extends']) {\n-        const parentType = this.trySimplify(type, classMetadata['extends']);\n-        if (parentType instanceof StaticSymbol) {\n-          const parentPropMetadata = this.propMetadata(parentType);\n-          Object.keys(parentPropMetadata).forEach((parentProp) => {\n-            propMetadata[parentProp] = parentPropMetadata[parentProp];\n-          });\n-        }\n+      const parentType = this.findParentType(type, classMetadata);\n+      if (parentType) {\n+        const parentPropMetadata = this.propMetadata(parentType);\n+        Object.keys(parentPropMetadata).forEach((parentProp) => {\n+          propMetadata[parentProp] = parentPropMetadata[parentProp];\n+        });\n       }\n \n       const members = classMetadata['members'] || {};\n@@ -157,6 +189,7 @@ export class StaticReflector implements ɵReflectorReader {\n       let parameters = this.parameterCache.get(type);\n       if (!parameters) {\n         const classMetadata = this.getTypeMetadata(type);\n+        const parentType = this.findParentType(type, classMetadata);\n         const members = classMetadata ? classMetadata['members'] : null;\n         const ctorData = members ? members['__ctor__'] : null;\n         if (ctorData) {\n@@ -175,11 +208,8 @@ export class StaticReflector implements ɵReflectorReader {\n             }\n             parameters.push(nestedResult);\n           });\n-        } else if (classMetadata['extends']) {\n-          const parentType = this.trySimplify(type, classMetadata['extends']);\n-          if (parentType instanceof StaticSymbol) {\n-            parameters = this.parameters(parentType);\n-          }\n+        } else if (parentType) {\n+          parameters = this.parameters(parentType);\n         }\n         if (!parameters) {\n           parameters = [];\n@@ -198,14 +228,12 @@ export class StaticReflector implements ɵReflectorReader {\n     if (!methodNames) {\n       const classMetadata = this.getTypeMetadata(type);\n       methodNames = {};\n-      if (classMetadata['extends']) {\n-        const parentType = this.trySimplify(type, classMetadata['extends']);\n-        if (parentType instanceof StaticSymbol) {\n-          const parentMethodNames = this._methodNames(parentType);\n-          Object.keys(parentMethodNames).forEach((parentProp) => {\n-            methodNames[parentProp] = parentMethodNames[parentProp];\n-          });\n-        }\n+      const parentType = this.findParentType(type, classMetadata);\n+      if (parentType) {\n+        const parentMethodNames = this._methodNames(parentType);\n+        Object.keys(parentMethodNames).forEach((parentProp) => {\n+          methodNames[parentProp] = parentMethodNames[parentProp];\n+        });\n       }\n \n       const members = classMetadata['members'] || {};\n@@ -219,6 +247,13 @@ export class StaticReflector implements ɵReflectorReader {\n     return methodNames;\n   }\n \n+  private findParentType(type: StaticSymbol, classMetadata: any): StaticSymbol|null {\n+    const parentType = this.trySimplify(type, classMetadata['extends']);\n+    if (parentType instanceof StaticSymbol) {\n+      return parentType;\n+    }\n+  }\n+\n   hasLifecycleHook(type: any, lcProperty: string): boolean {\n     if (!(type instanceof StaticSymbol)) {\n       this.reportError("
          },
          {
            "sha": "7135f6f7447d6071cd04e28bd55a6075c1783a3c",
            "filename": "packages/compiler/src/aot/static_symbol_resolver.ts",
            "status": "modified",
            "additions": 11,
            "deletions": 0,
            "changes": 11,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/static_symbol_resolver.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/static_symbol_resolver.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/aot/static_symbol_resolver.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -307,6 +307,17 @@ export class StaticSymbolResolver {\n   private createResolvedSymbol(\n       sourceSymbol: StaticSymbol, topLevelPath: string, topLevelSymbolNames: Set<string>,\n       metadata: any): ResolvedStaticSymbol {\n+    // For classes that don't have Angular summaries / metadata,\n+    // we only keep their arity, but nothing else\n+    // (e.g. their constructor parameters).\n+    // We do this to prevent introducing deep imports\n+    // as we didn't generate .ngfactory.ts files with proper reexports.\n+    if (this.summaryResolver.isLibraryFile(sourceSymbol.filePath) && metadata &&\n+        metadata['__symbolic'] === 'class') {\n+      const transformedMeta = {__symbolic: 'class', arity: metadata.arity};\n+      return new ResolvedStaticSymbol(sourceSymbol, transformedMeta);\n+    }\n+\n     const self = this;\n \n     class ReferenceTransformer extends ValueTransformer {"
          },
          {
            "sha": "81bcae1458a65f3177ecc8a6716e0f2c58685701",
            "filename": "packages/compiler/src/aot/summary_serializer.ts",
            "status": "modified",
            "additions": 16,
            "deletions": 5,
            "changes": 21,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/summary_serializer.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/aot/summary_serializer.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/aot/summary_serializer.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -53,7 +53,7 @@ export function serializeSummaries(\n   // (in a minimal way).\n   types.forEach((typeSummary) => {\n     serializer.addOrMergeSummary(\n-        {symbol: typeSummary.type.reference, metadata: {__symbolic: 'class'}, type: typeSummary});\n+        {symbol: typeSummary.type.reference, metadata: null, type: typeSummary});\n     if (typeSummary.summaryKind === CompileSummaryKind.NgModule) {\n       const ngModuleSummary = <CompileNgModuleSummary>typeSummary;\n       ngModuleSummary.exportedDirectives.concat(ngModuleSummary.exportedPipes).forEach((id) => {\n@@ -94,10 +94,21 @@ class Serializer extends ValueTransformer {\n   addOrMergeSummary(summary: Summary<StaticSymbol>) {\n     let symbolMeta = summary.metadata;\n     if (symbolMeta && symbolMeta.__symbolic === 'class') {\n-      // For classes, we only keep their statics and arity, but not the metadata\n-      // of the class itself as that has been captured already via other summaries\n-      // (e.g. DirectiveSummary, ...).\n-      symbolMeta = {__symbolic: 'class', statics: symbolMeta.statics, arity: symbolMeta.arity};\n+      // For classes, we keep everything except their class decorators.\n+      // We need to keep e.g. the ctor args, method names, method decorators\n+      // so that the class can be extended in another compilation unit.\n+      // We don't keep the class decorators as\n+      // 1) they refer to data\n+      //   that should not cause a rebuild of downstream compilation units\n+      //   (e.g. inline templates of @Component, or @NgModule.declarations)\n+      // 2) their data is already captured in TypeSummaries, e.g. DirectiveSummary.\n+      const clone: {[key: string]: any} = {};\n+      Object.keys(symbolMeta).forEach((propName) => {\n+        if (propName !== 'decorators') {\n+          clone[propName] = symbolMeta[propName];\n+        }\n+      });\n+      symbolMeta = clone;\n     }\n \n     let processedSummary = this.processedSummaryBySymbol.get(summary.symbol);"
          },
          {
            "sha": "104841ef43fe1c42d67cfb7b8ae6714f6cd560e0",
            "filename": "packages/compiler/src/i18n/extractor.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/i18n/extractor.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/i18n/extractor.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/i18n/extractor.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -94,7 +94,7 @@ export class Extractor {\n     const symbolCache = new StaticSymbolCache();\n     const summaryResolver = new AotSummaryResolver(host, symbolCache);\n     const staticSymbolResolver = new StaticSymbolResolver(host, symbolCache, summaryResolver);\n-    const staticReflector = new StaticReflector(staticSymbolResolver);\n+    const staticReflector = new StaticReflector(summaryResolver, staticSymbolResolver);\n     StaticAndDynamicReflectionCapabilities.install(staticReflector);\n \n     const config ="
          },
          {
            "sha": "b1dfbb132f0772a6d5a59e06664efd54a34a6a5b",
            "filename": "packages/compiler/src/metadata_resolver.ts",
            "status": "modified",
            "additions": 12,
            "deletions": 8,
            "changes": 20,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/metadata_resolver.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/src/metadata_resolver.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/src/metadata_resolver.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -529,6 +529,7 @@ export class CompileMetadataResolver {\n             syntaxError(\n                 `Can't export ${this._getTypeDescriptor(exportedId.reference)} ${stringifyType(exportedId.reference)} from ${stringifyType(moduleType)} as it was neither declared nor imported!`),\n             moduleType);\n+        return;\n       }\n     });\n \n@@ -627,6 +628,7 @@ export class CompileMetadataResolver {\n               `Please consider moving ${stringifyType(type)} to a higher module that imports ${stringifyType(oldModule)} and ${stringifyType(moduleType)}. ` +\n               `You can also create a new NgModule that exports and includes ${stringifyType(type)} then import that NgModule in ${stringifyType(oldModule)} and ${stringifyType(moduleType)}.`),\n           moduleType);\n+      return;\n     }\n     this._ngModuleOfTypes.set(type, moduleType);\n   }\n@@ -860,6 +862,7 @@ export class CompileMetadataResolver {\n         } else if (provider === void 0) {\n           this._reportError(syntaxError(\n               `Encountered undefined provider! Usually this means you have a circular dependencies (might be caused by using 'barrel' index.ts files.`));\n+          return;\n         } else {\n           const providersInfo =\n               (<string[]>providers.reduce(\n@@ -879,6 +882,7 @@ export class CompileMetadataResolver {\n               syntaxError(\n                   `Invalid ${debugInfo ? debugInfo : 'provider'} - only instances of Provider and Type are allowed, got: [${providersInfo}]`),\n               type);\n+          return;\n         }\n         if (providerMeta.token === resolveIdentifier(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS)) {\n           targetEntryComponents.push(...this._getEntryComponentsFromProvider(providerMeta, type));\n@@ -933,14 +937,12 @@ export class CompileMetadataResolver {\n     const dirMeta = this.getNonNormalizedDirectiveMetadata(dirType);\n     if (dirMeta && dirMeta.metadata.isComponent) {\n       return {componentType: dirType, componentFactory: dirMeta.metadata.componentFactory};\n-    } else {\n-      const dirSummary =\n-          <cpl.CompileDirectiveSummary>this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);\n-      if (dirSummary && dirSummary.isComponent) {\n-        return {componentType: dirType, componentFactory: dirSummary.componentFactory};\n-      }\n     }\n-\n+    const dirSummary =\n+        <cpl.CompileDirectiveSummary>this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);\n+    if (dirSummary && dirSummary.isComponent) {\n+      return {componentType: dirType, componentFactory: dirSummary.componentFactory};\n+    }\n     if (throwIfNotFound) {\n       throw syntaxError(`${dirType.name} cannot be used as an entry component.`);\n     }\n@@ -1004,8 +1006,10 @@ export class CompileMetadataResolver {\n             syntaxError(\n                 `Can't construct a query for the property \"${propertyName}\" of \"${stringifyType(typeOrFunc)}\" since the query selector wasn't defined.`),\n             typeOrFunc);\n+        selectors = [];\n+      } else {\n+        selectors = [this._getTokenMetadata(q.selector)];\n       }\n-      selectors = [this._getTokenMetadata(q.selector)];\n     }\n \n     return {"
          },
          {
            "sha": "c35017754a80987043f50be54a1c6f08afc23682",
            "filename": "packages/compiler/test/aot/compiler_spec.ts",
            "status": "modified",
            "additions": 294,
            "deletions": 1,
            "changes": 295,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/compiler_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/compiler_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/test/aot/compiler_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -8,6 +8,7 @@\n \n import {AotCompiler, AotCompilerHost, AotCompilerOptions, GeneratedFile, createAotCompiler} from '@angular/compiler';\n import {RenderComponentType, ɵReflectionCapabilities as ReflectionCapabilities, ɵreflector as reflector} from '@angular/core';\n+import {NodeFlags} from '@angular/core/src/view/index';\n import {async} from '@angular/core/testing';\n import {MetadataBundler, MetadataCollector, ModuleMetadata, privateEntriesToIndex} from '@angular/tsc-wrapped';\n import * as ts from 'typescript';\n@@ -368,6 +369,293 @@ describe('compiler (unbundled Angular)', () => {\n \n        }));\n   });\n+\n+  describe('inheritance with summaries', () => {\n+    function compileWithSummaries(\n+        libInput: MockData, appInput: MockData): Promise<GeneratedFile[]> {\n+      const libHost = new MockCompilerHost(['/lib/base.ts'], libInput, angularFiles);\n+      const libAotHost = new MockAotCompilerHost(libHost);\n+      libAotHost.tsFilesOnly();\n+      const appHost = new MockCompilerHost(['/app/main.ts'], appInput, angularFiles);\n+      const appAotHost = new MockAotCompilerHost(appHost);\n+      appAotHost.tsFilesOnly();\n+      return compile(libHost, libAotHost, expectNoDiagnostics, expectNoDiagnosticsAndEmit)\n+          .then(() => {\n+            libHost.writtenFiles.forEach((value, key) => appHost.writeFile(key, value, false));\n+            libHost.overrides.forEach((value, key) => appHost.override(key, value));\n+\n+            return compile(appHost, appAotHost, expectNoDiagnostics, expectNoDiagnosticsAndEmit);\n+          });\n+    }\n+\n+    function compileParentAndChild(\n+        {parentClassDecorator, parentModuleDecorator, childClassDecorator, childModuleDecorator}: {\n+          parentClassDecorator: string,\n+          parentModuleDecorator: string,\n+          childClassDecorator: string,\n+          childModuleDecorator: string\n+        }) {\n+      const libInput: MockData = {\n+        'lib': {\n+          'base.ts': `\n+              import {Injectable, Pipe, Directive, Component, NgModule} from '@angular/core';\n+\n+              ${parentClassDecorator}\n+              export class Base {}\n+\n+              ${parentModuleDecorator}\n+              export class BaseModule {}\n+            `\n+        }\n+      };\n+      const appInput: MockData = {\n+        'app': {\n+          'main.ts': `\n+              import {Injectable, Pipe, Directive, Component, NgModule} from '@angular/core';\n+              import {Base} from '../lib/base';\n+\n+              ${childClassDecorator}\n+              export class Extends extends Base {}\n+\n+              ${childModuleDecorator}\n+              export class MyModule {}\n+            `\n+        }\n+      };\n+\n+      return compileWithSummaries(libInput, appInput)\n+          .then((generatedFiles) => generatedFiles.find(gf => gf.srcFileUrl === '/app/main.ts'));\n+    }\n+\n+    it('should inherit ctor and lifecycle hooks from classes in other compilation units',\n+       async(() => {\n+         const libInput: MockData = {\n+           'lib': {\n+             'base.ts': `\n+            export class AParam {}\n+\n+            export class Base {\n+              constructor(a: AParam) {}\n+              ngOnDestroy() {}\n+            }\n+          `\n+           }\n+         };\n+         const appInput: MockData = {\n+           'app': {\n+             'main.ts': `\n+            import {NgModule, Component} from '@angular/core';\n+            import {Base} from '../lib/base';\n+\n+            @Component({template: ''})\n+            export class Extends extends Base {}\n+\n+            @NgModule({\n+              declarations: [Extends]\n+            })\n+            export class MyModule {}\n+          `\n+           }\n+         };\n+\n+         compileWithSummaries(libInput, appInput).then((generatedFiles) => {\n+           const mainNgFactory = generatedFiles.find(gf => gf.srcFileUrl === '/app/main.ts');\n+           const flags = NodeFlags.TypeDirective | NodeFlags.Component | NodeFlags.OnDestroy;\n+           expect(mainNgFactory.source)\n+               .toContain(`${flags},(null as any),0,import1.Extends,[import2.AParam]`);\n+         });\n+       }));\n+\n+    it('should inherit ctor and lifecycle hooks from classes in other compilation units over 2 levels',\n+       async(() => {\n+         const lib1Input: MockData = {\n+           'lib1': {\n+             'base.ts': `\n+            export class AParam {}\n+\n+            export class Base {\n+              constructor(a: AParam) {}\n+              ngOnDestroy() {}\n+            }\n+          `\n+           }\n+         };\n+\n+         const lib2Input: MockData = {\n+           'lib2': {\n+             'middle.ts': `\n+            import {Base} from '../lib1/base';\n+            export class Middle extends Base {}\n+          `\n+           }\n+         };\n+\n+\n+         const appInput: MockData = {\n+           'app': {\n+             'main.ts': `\n+            import {NgModule, Component} from '@angular/core';\n+            import {Middle} from '../lib2/middle';\n+\n+            @Component({template: ''})\n+            export class Extends extends Middle {}\n+\n+            @NgModule({\n+              declarations: [Extends]\n+            })\n+            export class MyModule {}\n+          `\n+           }\n+         };\n+         const lib1Host = new MockCompilerHost(['/lib1/base.ts'], lib1Input, angularFiles);\n+         const lib1AotHost = new MockAotCompilerHost(lib1Host);\n+         lib1AotHost.tsFilesOnly();\n+         const lib2Host = new MockCompilerHost(['/lib2/middle.ts'], lib2Input, angularFiles);\n+         const lib2AotHost = new MockAotCompilerHost(lib2Host);\n+         lib2AotHost.tsFilesOnly();\n+         const appHost = new MockCompilerHost(['/app/main.ts'], appInput, angularFiles);\n+         const appAotHost = new MockAotCompilerHost(appHost);\n+         appAotHost.tsFilesOnly();\n+         compile(lib1Host, lib1AotHost, expectNoDiagnostics, expectNoDiagnosticsAndEmit)\n+             .then(() => {\n+               lib1Host.writtenFiles.forEach((value, key) => lib2Host.writeFile(key, value, false));\n+               lib1Host.overrides.forEach((value, key) => lib2Host.override(key, value));\n+               return compile(\n+                   lib2Host, lib2AotHost, expectNoDiagnostics, expectNoDiagnosticsAndEmit);\n+             })\n+             .then(() => {\n+               lib2Host.writtenFiles.forEach((value, key) => appHost.writeFile(key, value, false));\n+               lib2Host.overrides.forEach((value, key) => appHost.override(key, value));\n+               return compile(appHost, appAotHost, expectNoDiagnostics, expectNoDiagnosticsAndEmit);\n+             })\n+             .then((generatedFiles) => {\n+               const mainNgFactory = generatedFiles.find(gf => gf.srcFileUrl === '/app/main.ts');\n+               const flags = NodeFlags.TypeDirective | NodeFlags.Component | NodeFlags.OnDestroy;\n+               expect(mainNgFactory.source)\n+                   .toContain(`${flags},(null as any),0,import1.Extends,[import2.AParam_2]`);\n+             });\n+       }));\n+\n+    describe('Injectable', () => {\n+      it('should allow to inherit', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: '@Injectable()',\n+             parentModuleDecorator: '@NgModule({providers: [Base]})',\n+             childClassDecorator: '@Injectable()',\n+             childModuleDecorator: '@NgModule({providers: [Extends]})',\n+           }).then((mainNgFactory) => { expect(mainNgFactory).toBeTruthy(); });\n+         }));\n+\n+      it('should error if the child class has no matching decorator', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: '@Injectable()',\n+             parentModuleDecorator: '@NgModule({providers: [Base]})',\n+             childClassDecorator: '',\n+             childModuleDecorator: '@NgModule({providers: [Extends]})',\n+           }).then(fail, (e) => {\n+             expect(e.message).toContain(\n+                 'Class Extends in /app/main.ts extends from a Injectable in another compilation unit without duplicating the decorator. ' +\n+                 'Please add a Injectable or Pipe or Directive or Component or NgModule decorator to the class.');\n+           });\n+         }));\n+    });\n+\n+    describe('Component', () => {\n+      it('should allow to inherit', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Component({template: ''})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: `@Component({template: ''})`,\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then((mainNgFactory) => { expect(mainNgFactory).toBeTruthy(); });\n+         }));\n+\n+      it('should error if the child class has no matching decorator', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Component({template: ''})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: '',\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then(fail, (e) => {\n+             expect(e.message).toContain(\n+                 'Class Extends in /app/main.ts extends from a Directive in another compilation unit without duplicating the decorator. ' +\n+                 'Please add a Directive or Component decorator to the class.');\n+           });\n+         }));\n+    });\n+\n+    describe('Directive', () => {\n+      it('should allow to inherit', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Directive({selector: '[someDir]'})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: `@Directive({selector: '[someDir]'})`,\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then((mainNgFactory) => { expect(mainNgFactory).toBeTruthy(); });\n+         }));\n+\n+      it('should error if the child class has no matching decorator', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Directive({selector: '[someDir]'})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: '',\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then(fail, (e) => {\n+             expect(e.message).toContain(\n+                 'Class Extends in /app/main.ts extends from a Directive in another compilation unit without duplicating the decorator. ' +\n+                 'Please add a Directive or Component decorator to the class.');\n+           });\n+         }));\n+    });\n+\n+    describe('Pipe', () => {\n+      it('should allow to inherit', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Pipe({name: 'somePipe'})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: `@Pipe({name: 'somePipe'})`,\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then((mainNgFactory) => { expect(mainNgFactory).toBeTruthy(); });\n+         }));\n+\n+      it('should error if the child class has no matching decorator', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@Pipe({name: 'somePipe'})`,\n+             parentModuleDecorator: '@NgModule({declarations: [Base]})',\n+             childClassDecorator: '',\n+             childModuleDecorator: '@NgModule({declarations: [Extends]})',\n+           }).then(fail, (e) => {\n+             expect(e.message).toContain(\n+                 'Class Extends in /app/main.ts extends from a Pipe in another compilation unit without duplicating the decorator. ' +\n+                 'Please add a Pipe decorator to the class.');\n+           });\n+         }));\n+    });\n+\n+    describe('NgModule', () => {\n+      it('should allow to inherit', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@NgModule()`,\n+             parentModuleDecorator: '',\n+             childClassDecorator: `@NgModule()`,\n+             childModuleDecorator: '',\n+           }).then((mainNgFactory) => { expect(mainNgFactory).toBeTruthy(); });\n+         }));\n+\n+      it('should error if the child class has no matching decorator', async(() => {\n+           compileParentAndChild({\n+             parentClassDecorator: `@NgModule()`,\n+             parentModuleDecorator: '',\n+             childClassDecorator: '',\n+             childModuleDecorator: '',\n+           }).then(fail, (e) => {\n+             expect(e.message).toContain(\n+                 'Class Extends in /app/main.ts extends from a NgModule in another compilation unit without duplicating the decorator. ' +\n+                 'Please add a NgModule decorator to the class.');\n+           });\n+         }));\n+    });\n+  });\n });\n \n describe('compiler (bundled Angular)', () => {\n@@ -513,6 +801,11 @@ function expectNoDiagnostics(program: ts.Program) {\n   expectNoDiagnostics(program.getSemanticDiagnostics());\n }\n \n+function expectNoDiagnosticsAndEmit(program: ts.Program) {\n+  expectNoDiagnostics(program);\n+  program.emit();\n+}\n+\n function isDTS(fileName: string): boolean {\n   return /\\.d\\.ts$/.test(fileName);\n }\n@@ -544,7 +837,7 @@ function summaryCompile(\n function compile(\n     host: MockCompilerHost, aotHost: AotCompilerHost, preCompile?: (program: ts.Program) => void,\n     postCompile: (program: ts.Program) => void = expectNoDiagnostics,\n-    options: AotCompilerOptions = {}) {\n+    options: AotCompilerOptions = {}): Promise<GeneratedFile[]> {\n   const scripts = host.scriptNames.slice(0);\n   const program = ts.createProgram(scripts, settings, host);\n   if (preCompile) preCompile(program);"
          },
          {
            "sha": "fd651d0a4e22f623ab6c1c27d10e1995bf68565b",
            "filename": "packages/compiler/test/aot/static_reflector_spec.ts",
            "status": "modified",
            "additions": 4,
            "deletions": 3,
            "changes": 7,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/static_reflector_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/static_reflector_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/test/aot/static_reflector_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -24,9 +24,10 @@ describe('StaticReflector', () => {\n       errorRecorder?: (error: any, fileName: string) => void, collectorOptions?: CollectorOptions) {\n     const symbolCache = new StaticSymbolCache();\n     host = new MockStaticSymbolResolverHost(testData, collectorOptions);\n-    symbolResolver =\n-        new StaticSymbolResolver(host, symbolCache, new MockSummaryResolver([]), errorRecorder);\n-    reflector = new StaticReflector(symbolResolver, decorators, [], errorRecorder);\n+    const summaryResolver = new MockSummaryResolver([]);\n+    spyOn(summaryResolver, 'isLibraryFile').and.returnValue(false);\n+    symbolResolver = new StaticSymbolResolver(host, symbolCache, summaryResolver, errorRecorder);\n+    reflector = new StaticReflector(summaryResolver, symbolResolver, decorators, [], errorRecorder);\n     noContext = reflector.getStaticSymbol('', '');\n   }\n "
          },
          {
            "sha": "c9b71b0f6cf54a79f94623914c9cfb7e32a8a375",
            "filename": "packages/compiler/test/aot/static_symbol_resolver_spec.ts",
            "status": "modified",
            "additions": 25,
            "deletions": 0,
            "changes": 25,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/static_symbol_resolver_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/static_symbol_resolver_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/test/aot/static_symbol_resolver_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -283,6 +283,31 @@ describe('StaticSymbolResolver', () => {\n     ]);\n   });\n \n+  it('should only use the arity for classes from libraries without summaries', () => {\n+    init({\n+      '/test.d.ts': [{\n+        '__symbolic': 'module',\n+        'version': 3,\n+        'metadata': {\n+          'AParam': {__symbolic: 'class'},\n+          'AClass': {\n+            __symbolic: 'class',\n+            arity: 1,\n+            members: {\n+              __ctor__: [{\n+                __symbolic: 'constructor',\n+                parameters: [symbolCache.get('/test.d.ts', 'AParam')]\n+              }]\n+            }\n+          }\n+        }\n+      }]\n+    });\n+\n+    expect(symbolResolver.resolveSymbol(symbolCache.get('/test.d.ts', 'AClass')).metadata)\n+        .toEqual({__symbolic: 'class', arity: 1});\n+  });\n+\n   it('should be able to trace a named export', () => {\n     const symbol = symbolResolver\n                        .resolveSymbol(symbolResolver.getSymbolByModule("
          },
          {
            "sha": "0dc18332dd6ab719a22b7b3eb3ff041d76dd304a",
            "filename": "packages/compiler/test/aot/summary_serializer_spec.ts",
            "status": "modified",
            "additions": 8,
            "deletions": 3,
            "changes": 11,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/summary_serializer_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/summary_serializer_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/test/aot/summary_serializer_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -61,7 +61,8 @@ export function main() {\n               metadata: {\n                 __symbolic: 'class',\n                 members: {'aMethod': {__symbolic: 'function'}},\n-                statics: {aStatic: true}\n+                statics: {aStatic: true},\n+                decorators: ['aDecoratorData']\n               }\n             }\n           ],\n@@ -88,8 +89,12 @@ export function main() {\n       });\n \n       expect(summaries[1].symbol).toBe(symbolCache.get('/tmp/some_service.d.ts', 'SomeService'));\n-      // serialization should only keep the statics...\n-      expect(summaries[1].metadata).toEqual({__symbolic: 'class', statics: {aStatic: true}});\n+      // serialization should drop class decorators\n+      expect(summaries[1].metadata).toEqual({\n+        __symbolic: 'class',\n+        members: {aMethod: {__symbolic: 'function'}},\n+        statics: {aStatic: true}\n+      });\n       expect(summaries[1].type.type.reference)\n           .toBe(symbolCache.get('/tmp/some_service.d.ts', 'SomeService'));\n     });"
          },
          {
            "sha": "12da1b67aa8922f50e68aec7f130c4c39926fb57",
            "filename": "packages/compiler/test/aot/test_util.ts",
            "status": "modified",
            "additions": 2,
            "deletions": 2,
            "changes": 4,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/test_util.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/compiler/test/aot/test_util.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/compiler/test/aot/test_util.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -177,8 +177,8 @@ export class MockCompilerHost implements ts.CompilerHost {\n \n   private angularSourcePath: string|undefined;\n   private nodeModulesPath: string|undefined;\n-  private overrides = new Map<string, string>();\n-  private writtenFiles = new Map<string, string>();\n+  public overrides = new Map<string, string>();\n+  public writtenFiles = new Map<string, string>();\n   private sourceFiles = new Map<string, ts.SourceFile>();\n   private assumeExists = new Set<string>();\n   private traces: string[] = [];"
          },
          {
            "sha": "27efd4a84b3cde07bc5efe973c5ee60d475a9158",
            "filename": "packages/language-service/src/diagnostics.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/diagnostics.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/diagnostics.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/src/diagnostics.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -155,7 +155,7 @@ class ExpressionDiagnosticsVisitor extends TemplateAstChildVisitor {\n     const directive = this.directiveSummary;\n     if (directive && ast.value) {\n       const context = this.info.template.query.getTemplateContext(directive.type.reference);\n-      if (!context.has(ast.value)) {\n+      if (context && !context.has(ast.value)) {\n         if (ast.value === '$implicit') {\n           this.reportError(\n               'The template context does not have an implicit value', spanOf(ast.sourceSpan));"
          },
          {
            "sha": "1219f2a818b7c9dd8f8e6072fff48f3a40f64958",
            "filename": "packages/language-service/src/language_service.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/language_service.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/language_service.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/src/language_service.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -110,7 +110,7 @@ class LanguageServiceImpl implements LanguageService {\n         const config = new CompilerConfig();\n         const parser = new TemplateParser(\n             config, expressionParser, new DomElementSchemaRegistry(), htmlParser, null, []);\n-        const htmlResult = htmlParser.parse(template.source, '');\n+        const htmlResult = htmlParser.parse(template.source, '', true);\n         const analyzedModules = this.host.getAnalyzedModules();\n         let errors: Diagnostic[] = undefined;\n         let ngModule = analyzedModules.ngModuleByPipeOrDirective.get(template.type);"
          },
          {
            "sha": "4eb60a6eb6e747210e02d7aeee784c7350794254",
            "filename": "packages/language-service/src/typescript_host.ts",
            "status": "modified",
            "additions": 25,
            "deletions": 11,
            "changes": 36,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/typescript_host.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/src/typescript_host.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/src/typescript_host.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -6,7 +6,7 @@\n  * found in the LICENSE file at https://angular.io/license\n  */\n \n-import {AotSummaryResolver, CompileDirectiveMetadata, CompileMetadataResolver, CompilerConfig, DEFAULT_INTERPOLATION_CONFIG, DirectiveNormalizer, DirectiveResolver, DomElementSchemaRegistry, HtmlParser, InterpolationConfig, NgAnalyzedModules, NgModuleResolver, ParseTreeResult, Parser, PipeResolver, ResourceLoader, StaticReflector, StaticSymbol, StaticSymbolCache, StaticSymbolResolver, SummaryResolver, UrlResolver, analyzeNgModules, componentModuleUrl, createOfflineCompileUrlResolver, extractProgramSymbols} from '@angular/compiler';\n+import {AotSummaryResolver, CompileDirectiveMetadata, CompileMetadataResolver, CompilerConfig, DEFAULT_INTERPOLATION_CONFIG, DirectiveNormalizer, DirectiveResolver, DomElementSchemaRegistry, HtmlParser, InterpolationConfig, NgAnalyzedModules, NgModuleResolver, ParseTreeResult, Parser, PipeResolver, ResourceLoader, StaticAndDynamicReflectionCapabilities, StaticReflector, StaticSymbol, StaticSymbolCache, StaticSymbolResolver, SummaryResolver, UrlResolver, analyzeNgModules, componentModuleUrl, createOfflineCompileUrlResolver, extractProgramSymbols} from '@angular/compiler';\n import {Type, ViewEncapsulation, ɵConsole as Console} from '@angular/core';\n import * as fs from 'fs';\n import * as path from 'path';\n@@ -74,6 +74,7 @@ export class DummyResourceLoader extends ResourceLoader {\n export class TypeScriptServiceHost implements LanguageServiceHost {\n   private _resolver: CompileMetadataResolver;\n   private _staticSymbolCache = new StaticSymbolCache();\n+  private _summaryResolver: AotSummaryResolver;\n   private _staticSymbolResolver: StaticSymbolResolver;\n   private _reflector: StaticReflector;\n   private _reflectorHost: ReflectorHost;\n@@ -407,15 +408,15 @@ export class TypeScriptServiceHost implements LanguageServiceHost {\n   private get staticSymbolResolver(): StaticSymbolResolver {\n     let result = this._staticSymbolResolver;\n     if (!result) {\n-      const summaryResolver = new AotSummaryResolver(\n+      this._summaryResolver = new AotSummaryResolver(\n           {\n             loadSummary(filePath: string) { return null; },\n             isSourceFile(sourceFilePath: string) { return true; },\n             getOutputFileName(sourceFilePath: string) { return null; }\n           },\n           this._staticSymbolCache);\n       result = this._staticSymbolResolver = new StaticSymbolResolver(\n-          this.reflectorHost, this._staticSymbolCache, summaryResolver,\n+          this.reflectorHost, this._staticSymbolCache, this._summaryResolver,\n           (e, filePath) => this.collectError(e, filePath));\n     }\n     return result;\n@@ -424,8 +425,10 @@ export class TypeScriptServiceHost implements LanguageServiceHost {\n   private get reflector(): StaticReflector {\n     let result = this._reflector;\n     if (!result) {\n+      const ssr = this.staticSymbolResolver;\n       result = this._reflector = new StaticReflector(\n-          this.staticSymbolResolver, [], [], (e, filePath) => this.collectError(e, filePath));\n+          this._summaryResolver, ssr, [], [], (e, filePath) => this.collectError(e, filePath));\n+      StaticAndDynamicReflectionCapabilities.install(result);\n     }\n     return result;\n   }\n@@ -749,8 +752,10 @@ function toSymbolTable(symbols: ts.Symbol[]): ts.SymbolTable {\n   return result;\n }\n \n-function toSymbols(symbolTable: ts.SymbolTable, filter?: (symbol: ts.Symbol) => boolean) {\n+function toSymbols(\n+    symbolTable: ts.SymbolTable | undefined, filter?: (symbol: ts.Symbol) => boolean) {\n   const result: ts.Symbol[] = [];\n+  if (!symbolTable) return result;\n   const own = typeof symbolTable.hasOwnProperty === 'function' ?\n       (name: string) => symbolTable.hasOwnProperty(name) :\n       (name: string) => !!symbolTable[name];\n@@ -910,8 +915,9 @@ class SymbolTableWrapper implements SymbolTable {\n   private symbolTable: ts.SymbolTable;\n \n   constructor(\n-      symbols: ts.SymbolTable|ts.Symbol[], private context: TypeContext,\n+      symbols: ts.SymbolTable|ts.Symbol[]|undefined, private context: TypeContext,\n       filter?: (symbol: ts.Symbol) => boolean) {\n+    symbols = symbols || [];\n     if (Array.isArray(symbols)) {\n       this.symbols = filter ? symbols.filter(filter) : symbols;\n       this.symbolTable = toSymbolTable(symbols);\n@@ -1020,6 +1026,9 @@ class PipeSymbol implements Symbol {\n               case 'EventEmitter':\n                 resultType = getTypeParameterOf(parameterType.tsType, parameterType.name);\n                 break;\n+              default:\n+                resultType = getBuiltinTypeFromTs(BuiltinType.Any, this.context);\n+                break;\n             }\n             break;\n           case 'slice':\n@@ -1055,10 +1064,13 @@ class PipeSymbol implements Symbol {\n     return findClassSymbolInContext(type, this.context);\n   }\n \n-  private findTransformMethodType(classSymbol: ts.Symbol): ts.Type {\n-    const transform = classSymbol.members && classSymbol.members['transform'];\n-    if (transform) {\n-      return this.context.checker.getTypeOfSymbolAtLocation(transform, this.context.node);\n+  private findTransformMethodType(classSymbol: ts.Symbol): ts.Type|undefined {\n+    const classType = this.context.checker.getDeclaredTypeOfSymbol(classSymbol);\n+    if (classType) {\n+      const transform = classType.getProperty('transform');\n+      if (transform) {\n+        return this.context.checker.getTypeOfSymbolAtLocation(transform, this.context.node);\n+      }\n     }\n   }\n }\n@@ -1085,7 +1097,9 @@ function findTsConfig(fileName: string): string {\n   while (fs.existsSync(dir)) {\n     const candidate = path.join(dir, 'tsconfig.json');\n     if (fs.existsSync(candidate)) return candidate;\n-    dir = path.dirname(dir);\n+    const parentDir = path.dirname(dir);\n+    if (parentDir === dir) break;\n+    dir = parentDir;\n   }\n }\n "
          },
          {
            "sha": "db4d359d8387db1b0d5730fe954f9a6cc5b032f9",
            "filename": "packages/language-service/test/diagnostics_spec.ts",
            "status": "modified",
            "additions": 58,
            "deletions": 1,
            "changes": 59,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/diagnostics_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/diagnostics_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/test/diagnostics_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -201,6 +201,63 @@ describe('diagnostics', () => {\n       expect(diagnostic).toEqual([]);\n     });\n \n+    it('should report an error for invalid providers', () => {\n+      addCode(\n+          `\n+        @Component({\n+          template: '',\n+          providers: [null]\n+       })\n+       export class MyComponent {}\n+      `,\n+          fileName => {\n+            const diagnostics = ngService.getDiagnostics(fileName);\n+            const expected = diagnostics.find(d => d.message.startsWith('Invalid providers for'));\n+            const notExpected = diagnostics.find(d => d.message.startsWith('Cannot read property'));\n+            expect(expected).toBeDefined();\n+            expect(notExpected).toBeUndefined();\n+          });\n+    });\n+\n+    // Issue #15768\n+    it('should be able to parse a template reference', () => {\n+      addCode(\n+          `\n+        @Component({\n+          selector: 'my-component',\n+          template: \\`\n+            <div *ngIf=\"comps | async; let comps; else loading\">\n+            </div>\n+            <ng-template #loading>Loading comps...</ng-template>            \n+          \\`\n+        })\n+        export class MyComponent {}\n+      `,\n+          fileName => onlyModuleDiagnostics(ngService.getDiagnostics(fileName)));\n+    });\n+\n+    // Issue #15625\n+    it('should not report errors for localization syntax', () => {\n+      addCode(\n+          `\n+          @Component({\n+            selector: 'my-component',\n+            template: \\`\n+            <div>\n+                {fieldCount, plural, =0 {no fields} =1 {1 field} other {{{fieldCount}} fields}}\n+            </div>\n+            \\`\n+          })\n+          export class MyComponent {\n+            fieldCount: number;\n+          }\n+      `,\n+          fileName => {\n+            const diagnostics = ngService.getDiagnostics(fileName);\n+            onlyModuleDiagnostics(diagnostics);\n+          });\n+    });\n+\n     function addCode(code: string, cb: (fileName: string, content?: string) => void) {\n       const fileName = '/app/app.component.ts';\n       const originalContent = mockHost.getFileContent(fileName);\n@@ -220,7 +277,7 @@ describe('diagnostics', () => {\n       if (diagnostics.length > 1) {\n         for (const diagnostic of diagnostics) {\n           if (diagnostic.message.indexOf('MyComponent') >= 0) continue;\n-          console.error(`(${diagnostic.span.start}:${diagnostic.span.end}): ${diagnostic.message}`);\n+          fail(`(${diagnostic.span.start}:${diagnostic.span.end}): ${diagnostic.message}`);\n         }\n         return;\n       }"
          },
          {
            "sha": "737fc130aa90364d2337795d09385327a12a3735",
            "filename": "packages/language-service/test/test_data.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 0,
            "changes": 1,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/test_data.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/test_data.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/test/test_data.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -9,6 +9,7 @@\n import {MockData} from './test_utils';\n \n export const toh = {\n+  'foo.ts': `export * from './app/app.component.ts';`,\n   app: {\n     'app.component.ts': `import { Component } from '@angular/core';\n "
          },
          {
            "sha": "7b4db27e72d6b1db81e182961a43568f54779ff6",
            "filename": "packages/language-service/test/typescript_host_spec.ts",
            "status": "added",
            "additions": 42,
            "deletions": 0,
            "changes": 42,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/typescript_host_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/language-service/test/typescript_host_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/language-service/test/typescript_host_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -0,0 +1,42 @@\n+/**\n+ * @license\n+ * Copyright Google Inc. All Rights Reserved.\n+ *\n+ * Use of this source code is governed by an MIT-style license that can be\n+ * found in the LICENSE file at https://angular.io/license\n+ */\n+\n+import 'reflect-metadata';\n+import * as ts from 'typescript';\n+\n+import {TypeScriptServiceHost} from '../src/typescript_host';\n+\n+import {toh} from './test_data';\n+import {MockTypescriptHost} from './test_utils';\n+\n+\n+describe('completions', () => {\n+  let host: ts.LanguageServiceHost;\n+  let service: ts.LanguageService;\n+  let ngHost: TypeScriptServiceHost;\n+\n+  beforeEach(() => {\n+    host = new MockTypescriptHost(['/app/main.ts'], toh);\n+    service = ts.createLanguageService(host);\n+  });\n+\n+  it('should be able to create a typescript host',\n+     () => { expect(() => new TypeScriptServiceHost(host, service)).not.toThrow(); });\n+\n+  beforeEach(() => { ngHost = new TypeScriptServiceHost(host, service); });\n+\n+  it('should be able to analyze modules',\n+     () => { expect(ngHost.getAnalyzedModules()).toBeDefined(); });\n+\n+  it('should be able to analyze modules in without a tsconfig.json file', () => {\n+    host = new MockTypescriptHost(['foo.ts'], toh);\n+    service = ts.createLanguageService(host);\n+    ngHost = new TypeScriptServiceHost(host, service);\n+    expect(ngHost.getAnalyzedModules()).toBeDefined();\n+  });\n+});"
          },
          {
            "sha": "4450b37d810df7ee8f7f2e6e15181c5da064942d",
            "filename": "packages/router/karma-test-shim.js",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/karma-test-shim.js",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/karma-test-shim.js",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/karma-test-shim.js?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -71,4 +71,4 @@ Promise\n       return Promise.all(\n           allSpecFiles.map(function(moduleName) { return System.import(moduleName); }));\n     })\n-    .then(__karma__.start, (v) => console.error(v));\n+    .then(__karma__.start, function(v) { console.error(v); });"
          },
          {
            "sha": "3a801227ca33779c27a8b509fb408edc85732c3f",
            "filename": "packages/router/src/apply_redirects.ts",
            "status": "modified",
            "additions": 32,
            "deletions": 25,
            "changes": 57,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/apply_redirects.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/apply_redirects.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/apply_redirects.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -54,6 +54,11 @@ function canLoadFails(route: Route): Observable<LoadedRouterConfig> {\n           `Cannot load children because the guard of the route \"path: '${route.path}'\" returned false`)));\n }\n \n+/**\n+ * Returns the `UrlTree` with the redirection applied.\n+ *\n+ * Lazy modules are loaded along the way.\n+ */\n export function applyRedirects(\n     moduleInjector: Injector, configLoader: RouterConfigLoader, urlSerializer: UrlSerializer,\n     urlTree: UrlTree, config: Routes): Observable<UrlTree> {\n@@ -131,6 +136,7 @@ class ApplyRedirects {\n     return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);\n   }\n \n+  // Recursively expand segment groups for all the child outlets\n   private expandChildren(\n       ngModule: NgModuleRef<any>, routes: Route[],\n       segmentGroup: UrlSegmentGroup): Observable<{[name: string]: UrlSegmentGroup}> {\n@@ -182,16 +188,16 @@ class ApplyRedirects {\n       return noMatch(segmentGroup);\n     }\n \n-    if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects)) {\n-      return noMatch(segmentGroup);\n-    }\n-\n     if (route.redirectTo === undefined) {\n       return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);\n     }\n \n-    return this.expandSegmentAgainstRouteUsingRedirect(\n-        ngModule, segmentGroup, routes, route, paths, outlet);\n+    if (allowRedirects && this.allowRedirects) {\n+      return this.expandSegmentAgainstRouteUsingRedirect(\n+          ngModule, segmentGroup, routes, route, paths, outlet);\n+    }\n+\n+    return noMatch(segmentGroup);\n   }\n \n   private expandSegmentAgainstRouteUsingRedirect(\n@@ -294,8 +300,9 @@ class ApplyRedirects {\n     }\n \n     if (route.loadChildren) {\n-      if ((<any>route)._loadedConfig !== void 0) {\n-        return of ((<any>route)._loadedConfig);\n+      // lazy children belong to the loaded module\n+      if (route._loadedConfig !== undefined) {\n+        return of (route._loadedConfig);\n       }\n \n       return mergeMap.call(runCanLoadGuard(ngModule.injector, route), (shouldLoad: boolean) => {\n@@ -417,8 +424,6 @@ function match(segmentGroup: UrlSegmentGroup, route: Route, segments: UrlSegment\n   lastChild: number,\n   positionalParamSegments: {[k: string]: UrlSegment}\n } {\n-  const noMatch =\n-      {matched: false, consumedSegments: <any[]>[], lastChild: 0, positionalParamSegments: {}};\n   if (route.path === '') {\n     if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {\n       return {matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};\n@@ -429,13 +434,18 @@ function match(segmentGroup: UrlSegmentGroup, route: Route, segments: UrlSegment\n \n   const matcher = route.matcher || defaultUrlMatcher;\n   const res = matcher(segments, segmentGroup, route);\n-  if (!res) return noMatch;\n+\n+  if (!res) {\n+    return {\n+      matched: false, consumedSegments: <any[]>[], lastChild: 0, positionalParamSegments: {},\n+    }\n+  }\n \n   return {\n     matched: true,\n     consumedSegments: res.consumed,\n     lastChild: res.consumed.length,\n-    positionalParamSegments: res.posParams\n+    positionalParamSegments: res.posParams,\n   };\n }\n \n@@ -475,7 +485,7 @@ function addEmptySegmentsToChildrenIfNeeded(\n     children: {[name: string]: UrlSegmentGroup}): {[name: string]: UrlSegmentGroup} {\n   const res: {[name: string]: UrlSegmentGroup} = {};\n   for (const r of routes) {\n-    if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {\n+    if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {\n       res[getOutlet(r)] = new UrlSegmentGroup([], {});\n     }\n   }\n@@ -495,28 +505,25 @@ function createChildrenForEmptySegments(\n }\n \n function containsEmptyPathRedirectsWithNamedOutlets(\n-    segmentGroup: UrlSegmentGroup, slicedSegments: UrlSegment[], routes: Route[]): boolean {\n-  return routes\n-             .filter(\n-                 r => emptyPathRedirect(segmentGroup, slicedSegments, r) &&\n-                     getOutlet(r) !== PRIMARY_OUTLET)\n-             .length > 0;\n+    segmentGroup: UrlSegmentGroup, segments: UrlSegment[], routes: Route[]): boolean {\n+  return routes.some(\n+      r => isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET);\n }\n \n function containsEmptyPathRedirects(\n-    segmentGroup: UrlSegmentGroup, slicedSegments: UrlSegment[], routes: Route[]): boolean {\n-  return routes.filter(r => emptyPathRedirect(segmentGroup, slicedSegments, r)).length > 0;\n+    segmentGroup: UrlSegmentGroup, segments: UrlSegment[], routes: Route[]): boolean {\n+  return routes.some(r => isEmptyPathRedirect(segmentGroup, segments, r));\n }\n \n-function emptyPathRedirect(\n-    segmentGroup: UrlSegmentGroup, slicedSegments: UrlSegment[], r: Route): boolean {\n-  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {\n+function isEmptyPathRedirect(\n+    segmentGroup: UrlSegmentGroup, segments: UrlSegment[], r: Route): boolean {\n+  if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {\n     return false;\n   }\n \n   return r.path === '' && r.redirectTo !== undefined;\n }\n \n function getOutlet(route: Route): string {\n-  return route.outlet ? route.outlet : PRIMARY_OUTLET;\n+  return route.outlet || PRIMARY_OUTLET;\n }"
          },
          {
            "sha": "c8ed0a2f0ffd8a9a32620fa6328082275542a857",
            "filename": "packages/router/src/router_preloader.ts",
            "status": "modified",
            "additions": 2,
            "deletions": 2,
            "changes": 4,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/router_preloader.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/router_preloader.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/router_preloader.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -31,7 +31,7 @@ export abstract class PreloadingStrategy {\n }\n \n /**\n- * @whatItDoes Provides a preloading strategy that preloads all modules as quicky as possible.\n+ * @whatItDoes Provides a preloading strategy that preloads all modules as quickly as possible.\n  *\n  * @howToUse\n  *\n@@ -105,7 +105,7 @@ export class RouterPreloader {\n       // we already have the config loaded, just recurse\n       if (route.loadChildren && !route.canLoad && route._loadedConfig) {\n         const childConfig = route._loadedConfig;\n-        res.push(this.processRoutes(ngModule, childConfig.routes));\n+        res.push(this.processRoutes(childConfig.module, childConfig.routes));\n \n         // no config loaded, fetch the config\n       } else if (route.loadChildren && !route.canLoad) {"
          },
          {
            "sha": "d37a321111dec01cbe8546ef1f0eb88526c1c828",
            "filename": "packages/router/src/router_state.ts",
            "status": "modified",
            "additions": 1,
            "deletions": 2,
            "changes": 3,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/router_state.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/router_state.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/router_state.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -38,8 +38,7 @@ import {Tree, TreeNode} from './utils/tree';\n  *\n  * @description\n  * RouterState is a tree of activated routes. Every node in this tree knows about the \"consumed\" URL\n- * segments,\n- * the extracted parameters, and the resolved data.\n+ * segments, the extracted parameters, and the resolved data.\n  *\n  * See {@link ActivatedRoute} for more information.\n  *"
          },
          {
            "sha": "d9897c9f6f57ed50df410fee767c64ea930941ac",
            "filename": "packages/router/src/shared.ts",
            "status": "modified",
            "additions": 24,
            "deletions": 22,
            "changes": 46,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/shared.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/shared.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/shared.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -108,34 +108,36 @@ export function isNavigationCancelingError(error: Error) {\n   return (error as any)[NAVIGATION_CANCELING_ERROR];\n }\n \n+// Matches the route configuration (`route`) against the actual URL (`segments`).\n export function defaultUrlMatcher(\n-    segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult {\n-  const path = route.path;\n-  const parts = path.split('/');\n-  const posParams: {[key: string]: UrlSegment} = {};\n-  const consumed: UrlSegment[] = [];\n+    segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult|null {\n+  const parts = route.path.split('/');\n \n-  let currentIndex = 0;\n+  if (parts.length > segments.length) {\n+    // The actual URL is shorter than the config, no match\n+    return null;\n+  }\n \n-  for (let i = 0; i < parts.length; ++i) {\n-    if (currentIndex >= segments.length) return null;\n-    const current = segments[currentIndex];\n+  if (route.pathMatch === 'full' &&\n+      (segmentGroup.hasChildren() || parts.length < segments.length)) {\n+    // The config is longer than the actual URL but we are looking for a full match, return null\n+    return null;\n+  }\n \n-    const p = parts[i];\n-    const isPosParam = p.startsWith(':');\n+  const posParams: {[key: string]: UrlSegment} = {};\n \n-    if (!isPosParam && p !== current.path) return null;\n-    if (isPosParam) {\n-      posParams[p.substring(1)] = current;\n+  // Check each config part against the actual URL\n+  for (let index = 0; index < parts.length; index++) {\n+    const part = parts[index];\n+    const segment = segments[index];\n+    const isParameter = part.startsWith(':');\n+    if (isParameter) {\n+      posParams[part.substring(1)] = segment;\n+    } else if (part !== segment.path) {\n+      // The actual URL part does not match the config, no match\n+      return null;\n     }\n-    consumed.push(current);\n-    currentIndex++;\n   }\n \n-  if (route.pathMatch === 'full' &&\n-      (segmentGroup.hasChildren() || currentIndex < segments.length)) {\n-    return null;\n-  } else {\n-    return {consumed, posParams};\n-  }\n+  return {consumed: segments.slice(0, parts.length), posParams};\n }"
          },
          {
            "sha": "600f6bbb305bbc99a0f27b9e5278ec51e3bc16a0",
            "filename": "packages/router/src/url_tree.ts",
            "status": "modified",
            "additions": 80,
            "deletions": 98,
            "changes": 178,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/url_tree.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/url_tree.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/url_tree.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -207,21 +207,13 @@ export class UrlSegment {\n   toString(): string { return serializePath(this); }\n }\n \n-export function equalSegments(a: UrlSegment[], b: UrlSegment[]): boolean {\n-  if (a.length !== b.length) return false;\n-  for (let i = 0; i < a.length; ++i) {\n-    if (a[i].path !== b[i].path) return false;\n-    if (!shallowEqual(a[i].parameters, b[i].parameters)) return false;\n-  }\n-  return true;\n+export function equalSegments(as: UrlSegment[], bs: UrlSegment[]): boolean {\n+  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));\n }\n \n-export function equalPath(a: UrlSegment[], b: UrlSegment[]): boolean {\n-  if (a.length !== b.length) return false;\n-  for (let i = 0; i < a.length; ++i) {\n-    if (a[i].path !== b[i].path) return false;\n-  }\n-  return true;\n+export function equalPath(as: UrlSegment[], bs: UrlSegment[]): boolean {\n+  if (as.length !== bs.length) return false;\n+  return as.every((a, i) => a.path === bs[i].path);\n }\n \n export function mapChildrenIntoArray<T>(\n@@ -288,8 +280,8 @@ export class DefaultUrlSerializer implements UrlSerializer {\n   serialize(tree: UrlTree): string {\n     const segment = `/${serializeSegment(tree.root, true)}`;\n     const query = serializeQueryParams(tree.queryParams);\n-    const fragment =\n-        tree.fragment !== null && tree.fragment !== undefined ? `#${encodeURI(tree.fragment)}` : '';\n+    const fragment = typeof tree.fragment === `string` ? `#${encodeURI(tree.fragment)}` : '';\n+\n     return `${segment}${query}${fragment}`;\n   }\n }\n@@ -301,34 +293,35 @@ export function serializePaths(segment: UrlSegmentGroup): string {\n }\n \n function serializeSegment(segment: UrlSegmentGroup, root: boolean): string {\n-  if (segment.hasChildren() && root) {\n+  if (!segment.hasChildren()) {\n+    return serializePaths(segment);\n+  }\n+\n+  if (root) {\n     const primary = segment.children[PRIMARY_OUTLET] ?\n         serializeSegment(segment.children[PRIMARY_OUTLET], false) :\n         '';\n     const children: string[] = [];\n+\n     forEach(segment.children, (v: UrlSegmentGroup, k: string) => {\n       if (k !== PRIMARY_OUTLET) {\n         children.push(`${k}:${serializeSegment(v, false)}`);\n       }\n     });\n-    if (children.length > 0) {\n-      return `${primary}(${children.join('//')})`;\n-    } else {\n-      return `${primary}`;\n-    }\n \n-  } else if (segment.hasChildren() && !root) {\n+    return children.length > 0 ? `${primary}(${children.join('//')})` : primary;\n+\n+  } else {\n     const children = mapChildrenIntoArray(segment, (v: UrlSegmentGroup, k: string) => {\n       if (k === PRIMARY_OUTLET) {\n         return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];\n-      } else {\n-        return [`${k}:${serializeSegment(v, false)}`];\n       }\n+\n+      return [`${k}:${serializeSegment(v, false)}`];\n+\n     });\n-    return `${serializePaths(segment)}/(${children.join('//')})`;\n \n-  } else {\n-    return serializePaths(segment);\n+    return `${serializePaths(segment)}/(${children.join('//')})`;\n   }\n }\n \n@@ -360,142 +353,115 @@ function serializeQueryParams(params: {[key: string]: any}): string {\n \n const SEGMENT_RE = /^[^\\/()?;=&#]+/;\n function matchSegments(str: string): string {\n-  SEGMENT_RE.lastIndex = 0;\n   const match = str.match(SEGMENT_RE);\n   return match ? match[0] : '';\n }\n \n const QUERY_PARAM_RE = /^[^=?&#]+/;\n // Return the name of the query param at the start of the string or an empty string\n function matchQueryParams(str: string): string {\n-  QUERY_PARAM_RE.lastIndex = 0;\n-  const match = str.match(SEGMENT_RE);\n+  const match = str.match(QUERY_PARAM_RE);\n   return match ? match[0] : '';\n }\n \n const QUERY_PARAM_VALUE_RE = /^[^?&#]+/;\n // Return the value of the query param at the start of the string or an empty string\n function matchUrlQueryParamValue(str: string): string {\n-  QUERY_PARAM_VALUE_RE.lastIndex = 0;\n   const match = str.match(QUERY_PARAM_VALUE_RE);\n   return match ? match[0] : '';\n }\n \n class UrlParser {\n   private remaining: string;\n-  constructor(private url: string) { this.remaining = url; }\n-\n-  peekStartsWith(str: string): boolean { return this.remaining.startsWith(str); }\n \n-  capture(str: string): void {\n-    if (!this.remaining.startsWith(str)) {\n-      throw new Error(`Expected \"${str}\".`);\n-    }\n-    this.remaining = this.remaining.substring(str.length);\n-  }\n+  constructor(private url: string) { this.remaining = url; }\n \n   parseRootSegment(): UrlSegmentGroup {\n-    if (this.remaining.startsWith('/')) {\n-      this.capture('/');\n-    }\n+    this.consumeOptional('/');\n \n-    if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {\n+    if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {\n       return new UrlSegmentGroup([], {});\n     }\n \n+    // The root segment group never has segments\n     return new UrlSegmentGroup([], this.parseChildren());\n   }\n \n-  parseChildren(): {[key: string]: UrlSegmentGroup} {\n-    if (this.remaining.length == 0) {\n-      return {};\n+  parseQueryParams(): {[key: string]: any} {\n+    const params: {[key: string]: any} = {};\n+    if (this.consumeOptional('?')) {\n+      do {\n+        this.parseQueryParam(params);\n+      } while (this.consumeOptional('&'));\n     }\n+    return params;\n+  }\n \n-    if (this.peekStartsWith('/')) {\n-      this.capture('/');\n+  parseFragment(): string { return this.consumeOptional('#') ? decodeURI(this.remaining) : null; }\n+\n+  private parseChildren(): {[outlet: string]: UrlSegmentGroup} {\n+    if (this.remaining === '') {\n+      return {};\n     }\n \n-    const paths: any[] = [];\n+    this.consumeOptional('/');\n+\n+    const segments: UrlSegment[] = [];\n     if (!this.peekStartsWith('(')) {\n-      paths.push(this.parseSegments());\n+      segments.push(this.parseSegment());\n     }\n \n     while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {\n       this.capture('/');\n-      paths.push(this.parseSegments());\n+      segments.push(this.parseSegment());\n     }\n \n-    let children: {[key: string]: UrlSegmentGroup} = {};\n+    let children: {[outlet: string]: UrlSegmentGroup} = {};\n     if (this.peekStartsWith('/(')) {\n       this.capture('/');\n       children = this.parseParens(true);\n     }\n \n-    let res: {[key: string]: UrlSegmentGroup} = {};\n+    let res: {[outlet: string]: UrlSegmentGroup} = {};\n     if (this.peekStartsWith('(')) {\n       res = this.parseParens(false);\n     }\n \n-    if (paths.length > 0 || Object.keys(children).length > 0) {\n-      res[PRIMARY_OUTLET] = new UrlSegmentGroup(paths, children);\n+    if (segments.length > 0 || Object.keys(children).length > 0) {\n+      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);\n     }\n \n     return res;\n   }\n \n-  parseSegments(): UrlSegment {\n+  // parse a segment with its matrix parameters\n+  // ie `name;k1=v1;k2`\n+  private parseSegment(): UrlSegment {\n     const path = matchSegments(this.remaining);\n     if (path === '' && this.peekStartsWith(';')) {\n       throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);\n     }\n \n     this.capture(path);\n-    let matrixParams: {[key: string]: any} = {};\n-    if (this.peekStartsWith(';')) {\n-      matrixParams = this.parseMatrixParams();\n-    }\n-    return new UrlSegment(decode(path), matrixParams);\n+    return new UrlSegment(decode(path), this.parseMatrixParams());\n   }\n \n-  parseQueryParams(): {[key: string]: any} {\n+  private parseMatrixParams(): {[key: string]: any} {\n     const params: {[key: string]: any} = {};\n-    if (this.peekStartsWith('?')) {\n-      this.capture('?');\n-      this.parseQueryParam(params);\n-      while (this.remaining.length > 0 && this.peekStartsWith('&')) {\n-        this.capture('&');\n-        this.parseQueryParam(params);\n-      }\n-    }\n-    return params;\n-  }\n-\n-  parseFragment(): string {\n-    if (this.peekStartsWith('#')) {\n-      return decodeURI(this.remaining.substring(1));\n-    }\n-\n-    return null;\n-  }\n-\n-  parseMatrixParams(): {[key: string]: any} {\n-    const params: {[key: string]: any} = {};\n-    while (this.remaining.length > 0 && this.peekStartsWith(';')) {\n-      this.capture(';');\n+    while (this.consumeOptional(';')) {\n       this.parseParam(params);\n     }\n     return params;\n   }\n \n-  parseParam(params: {[key: string]: any}): void {\n+  private parseParam(params: {[key: string]: any}): void {\n     const key = matchSegments(this.remaining);\n     if (!key) {\n       return;\n     }\n     this.capture(key);\n     let value: any = '';\n-    if (this.peekStartsWith('=')) {\n-      this.capture('=');\n+    if (this.consumeOptional('=')) {\n       const valueMatch = matchSegments(this.remaining);\n       if (valueMatch) {\n         value = valueMatch;\n@@ -507,15 +473,14 @@ class UrlParser {\n   }\n \n   // Parse a single query parameter `name[=value]`\n-  parseQueryParam(params: {[key: string]: any}): void {\n+  private parseQueryParam(params: {[key: string]: any}): void {\n     const key = matchQueryParams(this.remaining);\n     if (!key) {\n       return;\n     }\n     this.capture(key);\n     let value: any = '';\n-    if (this.peekStartsWith('=')) {\n-      this.capture('=');\n+    if (this.consumeOptional('=')) {\n       const valueMatch = matchUrlQueryParamValue(this.remaining);\n       if (valueMatch) {\n         value = valueMatch;\n@@ -540,10 +505,12 @@ class UrlParser {\n     }\n   }\n \n-  parseParens(allowPrimary: boolean): {[key: string]: UrlSegmentGroup} {\n+  // parse `(a/b//outlet_name:c/d)`\n+  private parseParens(allowPrimary: boolean): {[outlet: string]: UrlSegmentGroup} {\n     const segments: {[key: string]: UrlSegmentGroup} = {};\n     this.capture('(');\n-    while (!this.peekStartsWith(')') && this.remaining.length > 0) {\n+\n+    while (!this.consumeOptional(')') && this.remaining.length > 0) {\n       const path = matchSegments(this.remaining);\n \n       const next = this.remaining[path.length];\n@@ -566,11 +533,26 @@ class UrlParser {\n       const children = this.parseChildren();\n       segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :\n                                                                   new UrlSegmentGroup([], children);\n-      if (this.peekStartsWith('//')) {\n-        this.capture('//');\n-      }\n+      this.consumeOptional('//');\n     }\n-    this.capture(')');\n+\n     return segments;\n   }\n+\n+  private peekStartsWith(str: string): boolean { return this.remaining.startsWith(str); }\n+\n+  // Consumes the prefix when it is present and returns whether it has been consumed\n+  private consumeOptional(str: string): boolean {\n+    if (this.peekStartsWith(str)) {\n+      this.remaining = this.remaining.substring(str.length);\n+      return true;\n+    }\n+    return false;\n+  }\n+\n+  private capture(str: string): void {\n+    if (!this.consumeOptional(str)) {\n+      throw new Error(`Expected \"${str}\".`);\n+    }\n+  }\n }"
          },
          {
            "sha": "fcc3fb58d0d9e773d464fc738e872d5f5796d468",
            "filename": "packages/router/src/utils/collection.ts",
            "status": "modified",
            "additions": 13,
            "deletions": 25,
            "changes": 38,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/utils/collection.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/src/utils/collection.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/src/utils/collection.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -45,10 +45,6 @@ export function flatten<T>(arr: T[][]): T[] {\n   return Array.prototype.concat.apply([], arr);\n }\n \n-export function first<T>(a: T[]): T {\n-  return a.length > 0 ? a[0] : null;\n-}\n-\n export function last<T>(a: T[]): T {\n   return a.length > 0 ? a[a.length - 1] : null;\n }\n@@ -67,34 +63,26 @@ export function forEach<K, V>(map: {[key: string]: V}, callback: (v: V, k: strin\n \n export function waitForMap<A, B>(\n     obj: {[k: string]: A}, fn: (k: string, a: A) => Observable<B>): Observable<{[k: string]: B}> {\n-  const waitFor: Observable<B>[] = [];\n+  if (Object.keys(obj).length === 0) {\n+    return of ({})\n+  }\n+\n+  const waitHead: Observable<B>[] = [];\n+  const waitTail: Observable<B>[] = [];\n   const res: {[k: string]: B} = {};\n \n   forEach(obj, (a: A, k: string) => {\n+    const mapped = map.call(fn(k, a), (r: B) => res[k] = r);\n     if (k === PRIMARY_OUTLET) {\n-      waitFor.push(map.call(fn(k, a), (_: B) => {\n-        res[k] = _;\n-        return _;\n-      }));\n-    }\n-  });\n-\n-  forEach(obj, (a: A, k: string) => {\n-    if (k !== PRIMARY_OUTLET) {\n-      waitFor.push(map.call(fn(k, a), (_: B) => {\n-        res[k] = _;\n-        return _;\n-      }));\n+      waitHead.push(mapped);\n+    } else {\n+      waitTail.push(mapped);\n     }\n   });\n \n-  if (waitFor.length > 0) {\n-    const concatted$ = concatAll.call(of (...waitFor));\n-    const last$ = l.last.call(concatted$);\n-    return map.call(last$, () => res);\n-  }\n-\n-  return of (res);\n+  const concat$ = concatAll.call(of (...waitHead, ...waitTail));\n+  const last$ = l.last.call(concat$);\n+  return map.call(last$, () => res);\n }\n \n export function andObservables(observables: Observable<Observable<any>>): Observable<boolean> {"
          },
          {
            "sha": "be48638ffe2b93a86c41d721713d4c249b9071ee",
            "filename": "packages/router/test/router_preloader.spec.ts",
            "status": "modified",
            "additions": 97,
            "deletions": 29,
            "changes": 126,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/test/router_preloader.spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/test/router_preloader.spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/test/router_preloader.spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -6,10 +6,11 @@\n  * found in the LICENSE file at https://angular.io/license\n  */\n \n-import {Component, NgModule, NgModuleFactoryLoader} from '@angular/core';\n+import {Compiler, Component, NgModule, NgModuleFactoryLoader, NgModuleRef} from '@angular/core';\n import {TestBed, fakeAsync, inject, tick} from '@angular/core/testing';\n \n-import {RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule} from '../index';\n+import {Route, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule} from '../index';\n+import {LoadedRouterConfig} from '../src/router_config_loader';\n import {PreloadAllModules, PreloadingStrategy, RouterPreloader} from '../src/router_preloader';\n import {RouterTestingModule, SpyNgModuleFactoryLoader} from '../testing';\n \n@@ -18,22 +19,18 @@ describe('RouterPreloader', () => {\n   class LazyLoadedCmp {\n   }\n \n-  describe('should preload configurations', () => {\n+  describe('should not load configurations with canLoad guard', () => {\n     @NgModule({\n       declarations: [LazyLoadedCmp],\n-      imports: [RouterModule.forChild([{path: 'LoadedModule2', component: LazyLoadedCmp}])]\n+      imports: [RouterModule.forChild([{path: 'LoadedModule1', component: LazyLoadedCmp}])]\n     })\n-    class LoadedModule2 {\n-    }\n-\n-    @NgModule(\n-        {imports: [RouterModule.forChild([{path: 'LoadedModule1', loadChildren: 'expected2'}])]})\n-    class LoadedModule1 {\n+    class LoadedModule {\n     }\n \n     beforeEach(() => {\n       TestBed.configureTestingModule({\n-        imports: [RouterTestingModule.withRoutes([{path: 'lazy', loadChildren: 'expected'}])],\n+        imports: [RouterTestingModule.withRoutes(\n+            [{path: 'lazy', loadChildren: 'expected', canLoad: ['someGuard']}])],\n         providers: [{provide: PreloadingStrategy, useExisting: PreloadAllModules}]\n       });\n     });\n@@ -42,7 +39,45 @@ describe('RouterPreloader', () => {\n        fakeAsync(inject(\n            [NgModuleFactoryLoader, RouterPreloader, Router],\n            (loader: SpyNgModuleFactoryLoader, preloader: RouterPreloader, router: Router) => {\n+             loader.stubbedModules = {expected: LoadedModule};\n+\n+             preloader.preload().subscribe(() => {});\n+\n+             tick();\n+\n+             const c = router.config;\n+             expect(!!((<any>c[0])._loadedConfig)).toBe(false);\n+           })));\n+  });\n+\n+  describe('should preload configurations', () => {\n+    beforeEach(() => {\n+      TestBed.configureTestingModule({\n+        imports: [RouterTestingModule.withRoutes([{path: 'lazy', loadChildren: 'expected'}])],\n+        providers: [{provide: PreloadingStrategy, useExisting: PreloadAllModules}]\n+      });\n+    });\n+\n+    it('should work',\n+       fakeAsync(inject(\n+           [NgModuleFactoryLoader, RouterPreloader, Router, NgModuleRef],\n+           (loader: SpyNgModuleFactoryLoader, preloader: RouterPreloader, router: Router,\n+            testModule: NgModuleRef<any>) => {\n              const events: Array<RouteConfigLoadStart|RouteConfigLoadEnd> = [];\n+             @NgModule({\n+               declarations: [LazyLoadedCmp],\n+               imports:\n+                   [RouterModule.forChild([{path: 'LoadedModule2', component: LazyLoadedCmp}])]\n+             })\n+             class LoadedModule2 {\n+             }\n+\n+             @NgModule({\n+               imports:\n+                   [RouterModule.forChild([{path: 'LoadedModule1', loadChildren: 'expected2'}])]\n+             })\n+             class LoadedModule1 {\n+             }\n \n              router.events.subscribe(e => {\n                if (e instanceof RouteConfigLoadEnd || e instanceof RouteConfigLoadStart) {\n@@ -62,11 +97,15 @@ describe('RouterPreloader', () => {\n              const c = router.config;\n              expect(c[0].loadChildren).toEqual('expected');\n \n-             const loaded: any = (<any>c[0])._loadedConfig.routes;\n-             expect(loaded[0].path).toEqual('LoadedModule1');\n+             const loadedConfig: LoadedRouterConfig = (<any>c[0])._loadedConfig;\n+             const module: any = loadedConfig.module;\n+             expect(loadedConfig.routes[0].path).toEqual('LoadedModule1');\n+             expect(module.parent).toBe(testModule);\n \n-             const loaded2: any = (<any>loaded[0])._loadedConfig.routes;\n-             expect(loaded2[0].path).toEqual('LoadedModule2');\n+             const loadedConfig2: LoadedRouterConfig = (<any>loadedConfig.routes[0])._loadedConfig;\n+             const module2: any = loadedConfig2.module;\n+             expect(loadedConfig2.routes[0].path).toEqual('LoadedModule2');\n+             expect(module2.parent).toBe(module);\n \n              expect(events.map(e => e.toString())).toEqual([\n                'RouteConfigLoadStart(path: lazy)',\n@@ -77,34 +116,63 @@ describe('RouterPreloader', () => {\n            })));\n   });\n \n-  describe('should not load configurations with canLoad guard', () => {\n-    @NgModule({\n-      declarations: [LazyLoadedCmp],\n-      imports: [RouterModule.forChild([{path: 'LoadedModule1', component: LazyLoadedCmp}])]\n-    })\n-    class LoadedModule {\n-    }\n-\n+  describe('should support modules that have already been loaded', () => {\n     beforeEach(() => {\n       TestBed.configureTestingModule({\n-        imports: [RouterTestingModule.withRoutes(\n-            [{path: 'lazy', loadChildren: 'expected', canLoad: ['someGuard']}])],\n+        imports: [RouterTestingModule.withRoutes([{path: 'lazy', loadChildren: 'expected'}])],\n         providers: [{provide: PreloadingStrategy, useExisting: PreloadAllModules}]\n       });\n     });\n \n     it('should work',\n        fakeAsync(inject(\n-           [NgModuleFactoryLoader, RouterPreloader, Router],\n-           (loader: SpyNgModuleFactoryLoader, preloader: RouterPreloader, router: Router) => {\n-             loader.stubbedModules = {expected: LoadedModule};\n+           [NgModuleFactoryLoader, RouterPreloader, Router, NgModuleRef, Compiler],\n+           (loader: SpyNgModuleFactoryLoader, preloader: RouterPreloader, router: Router,\n+            testModule: NgModuleRef<any>, compiler: Compiler) => {\n+             @NgModule()\n+             class LoadedModule2 {\n+             }\n+\n+             const module2 = compiler.compileModuleSync(LoadedModule2).create(null);\n+\n+             @NgModule({\n+               imports: [RouterModule.forChild([\n+                 <Route>{\n+                   path: 'LoadedModule2',\n+                   loadChildren: 'no',\n+                   _loadedConfig: {\n+                     routes: [{path: 'LoadedModule3', loadChildren: 'expected3'}],\n+                     module: module2,\n+                   }\n+                 },\n+               ])]\n+             })\n+             class LoadedModule1 {\n+             }\n+\n+             @NgModule({imports: [RouterModule.forChild([])]})\n+             class LoadedModule3 {\n+             }\n+\n+             loader.stubbedModules = {\n+               expected: LoadedModule1,\n+               expected3: LoadedModule3,\n+             };\n \n              preloader.preload().subscribe(() => {});\n \n              tick();\n \n              const c = router.config;\n-             expect(!!((<any>c[0])._loadedConfig)).toBe(false);\n+\n+             const loadedConfig: LoadedRouterConfig = (<any>c[0])._loadedConfig;\n+             const module: any = loadedConfig.module;\n+             expect(module.parent).toBe(testModule);\n+\n+             const loadedConfig2: LoadedRouterConfig = (<any>loadedConfig.routes[0])._loadedConfig;\n+             const loadedConfig3: LoadedRouterConfig = (<any>loadedConfig2.routes[0])._loadedConfig;\n+             const module3: any = loadedConfig3.module;\n+             expect(module3.parent).toBe(module2);\n            })));\n   });\n "
          },
          {
            "sha": "1759e8814a8e0d0863a7462c273113d1bbda1b94",
            "filename": "packages/router/test/url_tree.spec.ts",
            "status": "modified",
            "additions": 14,
            "deletions": 0,
            "changes": 14,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/test/url_tree.spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/packages/router/test/url_tree.spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/packages/router/test/url_tree.spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -11,6 +11,20 @@ import {DefaultUrlSerializer, containsTree} from '../src/url_tree';\n describe('UrlTree', () => {\n   const serializer = new DefaultUrlSerializer();\n \n+  describe('DefaultUrlSerializer', () => {\n+    let serializer: DefaultUrlSerializer;\n+\n+    beforeEach(() => { serializer = new DefaultUrlSerializer(); });\n+\n+    it('should parse query parameters', () => {\n+      const tree = serializer.parse('/path/to?k=v&k/(a;b)=c');\n+      expect(tree.queryParams).toEqual({\n+        'k': 'v',\n+        'k/(a;b)': 'c',\n+      });\n+    });\n+  });\n+\n   describe('containsTree', () => {\n     describe('exact = true', () => {\n       it('should return true when two tree are the same', () => {"
          },
          {
            "sha": "408077184850f0f43f323544ae8f186aa653cdeb",
            "filename": "tools/@angular/tsc-wrapped/package.json",
            "status": "modified",
            "additions": 1,
            "deletions": 1,
            "changes": 2,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/package.json",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/package.json",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/tools/@angular/tsc-wrapped/package.json?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -1,6 +1,6 @@\n {\n   \"name\": \"@angular/tsc-wrapped\",\n-  \"version\": \"4.0.1\",\n+  \"version\": \"4.0.2\",\n   \"description\": \"Wraps the tsc CLI, allowing extensions.\",\n   \"homepage\": \"https://github.com/angular/angular/tree/master/tools/tsc-wrapped\",\n   \"bugs\": \"https://github.com/angular/angular/issues\","
          },
          {
            "sha": "95f0bee0fa61b8b9ee056705536b56162504e343",
            "filename": "tools/@angular/tsc-wrapped/src/bundler.ts",
            "status": "modified",
            "additions": 5,
            "deletions": 3,
            "changes": 8,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/src/bundler.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/src/bundler.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/tools/@angular/tsc-wrapped/src/bundler.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -522,12 +522,14 @@ export class CompilerHostAdapter implements MetadataBundlerHost {\n \n function resolveModule(importName: string, from: string): string {\n   if (importName.startsWith('.') && from) {\n-    const normalPath = path.normalize(path.join(path.dirname(from), importName));\n+    let normalPath = path.normalize(path.join(path.dirname(from), importName));\n     if (!normalPath.startsWith('.') && from.startsWith('.')) {\n       // path.normalize() preserves leading '../' but not './'. This adds it back.\n-      return `.${path.sep}${normalPath}`;\n+      normalPath = `.${path.sep}${normalPath}`;\n     }\n-    return normalPath;\n+    // Replace windows path delimiters with forward-slashes. Otherwise the paths are not\n+    // TypeScript compatible when building the bundle.\n+    return normalPath.replace(/\\\\/g, '/');\n   }\n   return importName;\n }"
          },
          {
            "sha": "90569628f4dfc9923f70e7ed68da4e828156dfe7",
            "filename": "tools/@angular/tsc-wrapped/test/bundler_spec.ts",
            "status": "modified",
            "additions": 13,
            "deletions": 1,
            "changes": 14,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/test/bundler_spec.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/test/bundler_spec.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/tools/@angular/tsc-wrapped/test/bundler_spec.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -6,7 +6,6 @@\n  * found in the LICENSE file at https://angular.io/license\n  */\n \n-import * as fs from 'fs';\n import * as path from 'path';\n import * as ts from 'typescript';\n \n@@ -84,6 +83,19 @@ describe('metadata bundler', () => {\n     ]);\n   });\n \n+  it('should not output windows paths in metadata', () => {\n+    const host = new MockStringBundlerHost('/', {\n+      'index.ts': `\n+        export * from './exports/test';\n+      `,\n+      'exports': {'test.ts': `export class TestExport {}`}\n+    });\n+    const bundler = new MetadataBundler('/index', undefined, host);\n+    const result = bundler.getMetadataBundle();\n+\n+    expect(result.metadata.origins).toEqual({'TestExport': './exports/test'});\n+  });\n+\n   it('should convert re-exported to the export', () => {\n     const host = new MockStringBundlerHost('/', {\n       'index.ts': `"
          },
          {
            "sha": "c270cc0f8c06d47770ad5c993bdb65c596ac6183",
            "filename": "tools/@angular/tsc-wrapped/test/typescript.mocks.ts",
            "status": "modified",
            "additions": 3,
            "deletions": 1,
            "changes": 4,
            "blob_url": "https://github.com/angular/angular/blob/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/test/typescript.mocks.ts",
            "raw_url": "https://github.com/angular/angular/raw/14a2d1a6f7528c672c15244399ee7188cd2b10d3/tools/@angular/tsc-wrapped/test/typescript.mocks.ts",
            "contents_url": "https://api.github.com/repos/angular/angular/contents/tools/@angular/tsc-wrapped/test/typescript.mocks.ts?ref=14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "patch": "@@ -54,7 +54,9 @@ export class Host implements ts.LanguageServiceHost {\n }\n \n export function open(directory: Directory, fileName: string): Directory|string|undefined {\n-  const names = fileName.split('/');\n+  // Path might be normalized by the current node environment. But it could also happen that this\n+  // path directly comes from the compiler in POSIX format. Support both separators for development.\n+  const names = fileName.split(/[\\\\/]/);\n   let current: Directory|string = directory;\n   if (names.length && names[0] === '') names.shift();\n   for (const name of names) {"
          }
        ]
      };
    }

    function _getTagsMockData() {
      return [
        {
          "name": "4.1.0-beta.0",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.1.0-beta.0",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.1.0-beta.0",
          "commit": {
            "sha": "67719f218560d94ff1accaeae67b857c6f89ec5a",
            "url": "https://api.github.com/repos/angular/angular/commits/67719f218560d94ff1accaeae67b857c6f89ec5a"
          }
        },
        {
          "name": "4.0.2",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.2",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.2",
          "commit": {
            "sha": "14a2d1a6f7528c672c15244399ee7188cd2b10d3",
            "url": "https://api.github.com/repos/angular/angular/commits/14a2d1a6f7528c672c15244399ee7188cd2b10d3"
          }
        },
        {
          "name": "4.0.1",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.1",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.1",
          "commit": {
            "sha": "6b79ab5abec8b5a4b43d563ce65f032990b3e3bc",
            "url": "https://api.github.com/repos/angular/angular/commits/6b79ab5abec8b5a4b43d563ce65f032990b3e3bc"
          }
        },
        {
          "name": "4.0.0",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0",
          "commit": {
            "sha": "7a715b2403867aa3adfab1c87acd22af4fd8697b",
            "url": "https://api.github.com/repos/angular/angular/commits/7a715b2403867aa3adfab1c87acd22af4fd8697b"
          }
        },
        {
          "name": "4.0.0-rc.6",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.6",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.6",
          "commit": {
            "sha": "ee03418b10dced73acb931d1bc499ee2d869df63",
            "url": "https://api.github.com/repos/angular/angular/commits/ee03418b10dced73acb931d1bc499ee2d869df63"
          }
        },
        {
          "name": "4.0.0-rc.5",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.5",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.5",
          "commit": {
            "sha": "2d78c8cc05514e278a7e8bbda681ba076a1958cb",
            "url": "https://api.github.com/repos/angular/angular/commits/2d78c8cc05514e278a7e8bbda681ba076a1958cb"
          }
        },
        {
          "name": "4.0.0-rc.4",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.4",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.4",
          "commit": {
            "sha": "b7212f5afeb229f1036a68b8e10e7634f5ab694c",
            "url": "https://api.github.com/repos/angular/angular/commits/b7212f5afeb229f1036a68b8e10e7634f5ab694c"
          }
        },
        {
          "name": "4.0.0-rc.3",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.3",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.3",
          "commit": {
            "sha": "d17d4a3b549a7278f027a7774bbc3af57912fa14",
            "url": "https://api.github.com/repos/angular/angular/commits/d17d4a3b549a7278f027a7774bbc3af57912fa14"
          }
        },
        {
          "name": "4.0.0-rc.2",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.2",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.2",
          "commit": {
            "sha": "180b705227284c80b06c7e0ed8f8dc1ee57bf524",
            "url": "https://api.github.com/repos/angular/angular/commits/180b705227284c80b06c7e0ed8f8dc1ee57bf524"
          }
        },
        {
          "name": "4.0.0-rc.1",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-rc.1",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-rc.1",
          "commit": {
            "sha": "da79ad3cecee73f98d7a33ea350841cdd96d464b",
            "url": "https://api.github.com/repos/angular/angular/commits/da79ad3cecee73f98d7a33ea350841cdd96d464b"
          }
        },
        {
          "name": "4.0.0-beta.8",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.8",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.8",
          "commit": {
            "sha": "1bdf7061b8d3758842cf10bb7181a2fbde2f1d68",
            "url": "https://api.github.com/repos/angular/angular/commits/1bdf7061b8d3758842cf10bb7181a2fbde2f1d68"
          }
        },
        {
          "name": "4.0.0-beta.7",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.7",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.7",
          "commit": {
            "sha": "09b4bd0dfbfda800796f7dac0b0206e49243b23c",
            "url": "https://api.github.com/repos/angular/angular/commits/09b4bd0dfbfda800796f7dac0b0206e49243b23c"
          }
        },
        {
          "name": "4.0.0-beta.6",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.6",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.6",
          "commit": {
            "sha": "559cf9d19284f697c8cbacfc3affa0d140bfc562",
            "url": "https://api.github.com/repos/angular/angular/commits/559cf9d19284f697c8cbacfc3affa0d140bfc562"
          }
        },
        {
          "name": "4.0.0-beta.5",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.5",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.5",
          "commit": {
            "sha": "c4e7c083e2a5dca2467e4b2ccaabd5df4f531fa4",
            "url": "https://api.github.com/repos/angular/angular/commits/c4e7c083e2a5dca2467e4b2ccaabd5df4f531fa4"
          }
        },
        {
          "name": "4.0.0-beta.4",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.4",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.4",
          "commit": {
            "sha": "992647dc433b9be2431c24afccb336c2d81de9d2",
            "url": "https://api.github.com/repos/angular/angular/commits/992647dc433b9be2431c24afccb336c2d81de9d2"
          }
        },
        {
          "name": "4.0.0-beta.3",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.3",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.3",
          "commit": {
            "sha": "2c294d5dff9f026fbb3f463bbfb7c871f26fe86f",
            "url": "https://api.github.com/repos/angular/angular/commits/2c294d5dff9f026fbb3f463bbfb7c871f26fe86f"
          }
        },
        {
          "name": "4.0.0-beta.2",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.2",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.2",
          "commit": {
            "sha": "ccb65893bf548fed62042f9ff9988ef133c3fd9a",
            "url": "https://api.github.com/repos/angular/angular/commits/ccb65893bf548fed62042f9ff9988ef133c3fd9a"
          }
        },
        {
          "name": "4.0.0-beta.1",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.1",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.1",
          "commit": {
            "sha": "f114e402121d6dc486c6e4cba01179904ab89d84",
            "url": "https://api.github.com/repos/angular/angular/commits/f114e402121d6dc486c6e4cba01179904ab89d84"
          }
        },
        {
          "name": "4.0.0-beta.0",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/4.0.0-beta.0",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/4.0.0-beta.0",
          "commit": {
            "sha": "fa9e21e83ca1fce0ce9b3efdb22c095f6e20604e",
            "url": "https://api.github.com/repos/angular/angular/commits/fa9e21e83ca1fce0ce9b3efdb22c095f6e20604e"
          }
        },
        {
          "name": "2.4.10",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.10",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.10",
          "commit": {
            "sha": "6b57928d35730c3833e62581960a474b644770cd",
            "url": "https://api.github.com/repos/angular/angular/commits/6b57928d35730c3833e62581960a474b644770cd"
          }
        },
        {
          "name": "2.4.9",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.9",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.9",
          "commit": {
            "sha": "80fe41a88ecc90ab8b08318c6bee0238b2f5f46d",
            "url": "https://api.github.com/repos/angular/angular/commits/80fe41a88ecc90ab8b08318c6bee0238b2f5f46d"
          }
        },
        {
          "name": "2.4.8",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.8",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.8",
          "commit": {
            "sha": "4f93ac8762667e2787e12c3b4a07d1fec50c5378",
            "url": "https://api.github.com/repos/angular/angular/commits/4f93ac8762667e2787e12c3b4a07d1fec50c5378"
          }
        },
        {
          "name": "2.4.7",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.7",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.7",
          "commit": {
            "sha": "e90661aaee5ff6580a52711e1b75795b75cc9700",
            "url": "https://api.github.com/repos/angular/angular/commits/e90661aaee5ff6580a52711e1b75795b75cc9700"
          }
        },
        {
          "name": "2.4.6",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.6",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.6",
          "commit": {
            "sha": "343ee8a3a23dfcd171b018b8dfe85d571afccd6b",
            "url": "https://api.github.com/repos/angular/angular/commits/343ee8a3a23dfcd171b018b8dfe85d571afccd6b"
          }
        },
        {
          "name": "2.4.5",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.5",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.5",
          "commit": {
            "sha": "7ed39ebaafa077cba61c980570092e345f7ba43a",
            "url": "https://api.github.com/repos/angular/angular/commits/7ed39ebaafa077cba61c980570092e345f7ba43a"
          }
        },
        {
          "name": "2.4.4",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.4",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.4",
          "commit": {
            "sha": "84542d8ae7b600602ffb9bb84c4f6cef787f4e2d",
            "url": "https://api.github.com/repos/angular/angular/commits/84542d8ae7b600602ffb9bb84c4f6cef787f4e2d"
          }
        },
        {
          "name": "2.4.3",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.3",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.3",
          "commit": {
            "sha": "a7d28044c5681417771cc23fcb0009c732c07580",
            "url": "https://api.github.com/repos/angular/angular/commits/a7d28044c5681417771cc23fcb0009c732c07580"
          }
        },
        {
          "name": "2.4.2",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.2",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.2",
          "commit": {
            "sha": "03b35d2e8f1e1bcd58c6795e275a362690211796",
            "url": "https://api.github.com/repos/angular/angular/commits/03b35d2e8f1e1bcd58c6795e275a362690211796"
          }
        },
        {
          "name": "2.4.1",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.1",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.1",
          "commit": {
            "sha": "28a92b2bcd182eab71914b687f9a201d55e0b7ed",
            "url": "https://api.github.com/repos/angular/angular/commits/28a92b2bcd182eab71914b687f9a201d55e0b7ed"
          }
        },
        {
          "name": "2.4.0",
          "zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.4.0",
          "tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.4.0",
          "commit": {
            "sha": "6efdf84d3e66a9a6ea0c5ccd0d67304fc3022d1a",
            "url": "https://api.github.com/repos/angular/angular/commits/6efdf84d3e66a9a6ea0c5ccd0d67304fc3022d1a"
          }
        }
      ];
    }
  }
})();
