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
      time: new Date(),
      comments: [{
        author: 'MadRyan',
        text: 'This shit cray!',
        time: new Date()
      },
      {
        author: 'MadSam',
        text: 'Rude!',
        time: new Date()
      }],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God creating Jellyfish',
      author: 'Devil',
      imageURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/5/10/campaign_images/buzzfeed-prod-fastlane01/24-hilarious-tweets-about-god-creating-animals-2-17348-1467730728-1_dblbig.jpg',
      description: 'Think about it.. all fact.',
      upvotes: 0,
      time: new Date(),
      comments: [{
        author: 'Sam-Antha',
        text: 'See you never!',
        time: new Date()
      }],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God punishing people with mosquitoes',
      author: 'Ryan',
      imageURL: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/how-animals-were-created-god-funny-animal-tweets-48-577b91f9cb332__700.jpg',
      description: 'Fucking mosquitoes, no.',
      upvotes: 0,
      time: new Date(),
      comments: [],
      commenting: false,
      standing: 'neutral'
    },
    {
      title: 'God\'s twisted kitten',
      author: 'Sam',
      imageURL: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/how-animals-were-created-god-funny-animal-tweets-28-577b80c24f6a8__700.jpg',
      description: 'So cute and deadly.',
      upvotes: -1,
      time: new Date(),
      comments: [],
      commenting: false,
      standing: 'negative'
    },
    {
      title: 'God creating the Panda Bear Cow',
      author: 'Cody',
      imageURL: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/how-animals-were-created-god-funny-animal-tweets-17-577b7b427401c__700.jpg',
      description: 'We\'ve all thought it.',
      upvotes: 1,
      time: new Date(),
      comments: [],
      commenting: false,
      standing: 'positive'
    },
    {
      title: 'God creating ze bee',
      author: 'Cody',
      imageURL: 'http://theawesomedaily.com/wp-content/uploads/2016/07/foogJqy.jpg',
      description: 'Yum, bee puke!',
      upvotes: 3,
      time: new Date(),
      comments: [{
        author: 'Sam I Am',
        text: 'It\'s just a lil bug!',
        time: new Date()
      },
      {
        author: 'SSJ',
        text: 'It\'s not puke, ya big dummy!',
        time: new Date()
      }],
      commenting: false,
      standing: 'positive'
    }];
    this.posting = false;
    this.newPost = {time: new Date(), comments: []};

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
      this.newPost = {time: new Date()};
      $scope.postForm.$setPristine();
    };

    this.filterText = '';

  });

  app.controller('contentCtrl', function($rootScope) {
    this.sort = 'title';

    this.newComment = {time: new Date()};

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
      this.newComment = {time: new Date()};
    };

  });

})();
