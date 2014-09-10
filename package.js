Package.describe({
  summary: " A fork of Mesosphere form-data validation and transformation package for Meteor",
  version: "0.0.1",
  git: "https://github.com/eduardobier/mesosphere.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('eduardobier:mesosphere.js');
  api.use(['templating','jquery', 'underscore', "mrt:underscore-string-latest@2.3.3"], ['client', 'server']);
    api.add_files(['js/pre.js','js/mesosphere.js','js/post.js'], ['client', 'server']);
    api.add_files('css/mesosphere.css', 'client');
    api.export('Mesosphere');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('eduardobier:mesosphere');
  api.addFiles('eduardobier:mesosphere-tests.js');
});
