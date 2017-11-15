// Generated by CoffeeScript 2.0.2
(function() {
  //!/usr/bin/env coffee
  var LinodeID, client;

  client = new (require('../src/linode-api')).LinodeClient(process.env['LINODE_API_KEY']);

  LinodeID = process.env['LINODE_ID'];

  client.call('linode.ip.addprivate', {LinodeID}, function(err, res) {
    if (err != null) {
      throw err;
    }
    return client.call('linode.ip.list', {LinodeID}, function(err, res) {
      var private_ip, x;
      if (err != null) {
        throw err;
      }
      private_ip = ((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = res.length; i < len; i++) {
          x = res[i];
          if (x.ISPUBLIC === 0) {
            results.push(x.IPADDRESS);
          }
        }
        return results;
      })()).pop();
      return console.log(`PRIVATE_IP=${private_ip}`);
    });
  });

}).call(this);
