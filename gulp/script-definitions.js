// This is where any explicit script odering should
// be declared.
module.exports = {
  app: [
    './src/app.js',
    './src/**/!(init.js).js',
    './src/init.js'
  ],

  // Add Vendor things to be added into our build system
  vendor: [
    './bower_components/jquery/dist/jquery.min.js'
  ],
};
