(function() {
  'use strict';

  var app = angular.module('redditApp');

  app.controller('postCtrl', function($rootScope, $scope) {
    $rootScope.posts = [{
      title: 'God created Hyena',
      author: 'God',
      imageURL: 'https://thechive.files.wordpress.com/2016/07/tweets-god-creating-animals-16.jpg?quality=85&strip=info&w=600',
      description: 'No explanation for why Hyena is Hyena',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God creating Jellyfish',
      author: 'Devil',
      imageURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/5/10/campaign_images/buzzfeed-prod-fastlane01/24-hilarious-tweets-about-god-creating-animals-2-17348-1467730728-1_dblbig.jpg',
      description: 'Think about it.. all fact.',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God punishing people with mosquitoes',
      author: 'Ryan',
      imageURL: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/how-animals-were-created-god-funny-animal-tweets-48-577b91f9cb332__700.jpg',
      description: 'Fucking mosquitoes, no.',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God\'s twisted kitten',
      author: 'Sam',
      imageURL: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/how-animals-were-created-god-funny-animal-tweets-28-577b80c24f6a8__700.jpg',
      description: 'So cute and deadly.',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God creating the Panda Bear Cow',
      author: 'Cody',
      imageURL: 'http://www.collegehumor.com/images/download.jpg',
      description: 'We\'ve all thought it.',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God creating the Panda Bear Cow',
      author: 'Cody',
      imageURL: 'http://www.collegehumor.com/images/download.jpg',
      description: 'We\'ve all thought it.',
      upvotes: 0,
      comments: [],
      commenting: false,
      standing: 'neutral'
    }];
    this.posting = false;
    this.newPost = {};

    this.Posting = () => {
      if (this.posting === true) {
        this.posting = false;
      } else {
        this.posting = true;
      }
    };

    this.addPost = () => {
      $rootScope.posts.push(this.newPost);
      this.posting = false;
      this.newPost = {};
      $scope.postForm.$setPristine();
    };

    this.filterText = '';

  });

  app.controller('contentCtrl', function($rootScope) {
    this.sort = 'title';

    this.newComment = {};

    $rootScope.setSort = (sortBy) => {
      this.sort = sortBy;
    };

    this.upvote = (action, index) => {
      if (action === 'add') {
        index.upvotes++;
      } else {
        index.upvotes--;
      }

      if (index.upvotes > 0) {
        index.standing = 'positive';
      } else if (index.upvotes === 0) {
        index.standing = 'neutral';
      } else {
        index.standing = 'negative';
      }
      console.log(index.standing);
    };

    this.Commenting = (index) => {
      if (index.commenting) {
        index.commenting = false;
      } else {
        index.commenting = true;
      }
    };

    this.addComment = (index) => {
      index.comments.push(this.newComment);
      this.newComment = {};
    };

  });

})();
