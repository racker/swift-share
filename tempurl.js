
/* Constructs a an OpenStack Swift temporary URL 
    param method: GET or PUT, other methods may or may not be supported/tested
    param expires: A UNIX timestamp of when the URL should expire
    param path: The path to use
    param key: The key that is set for this account

    Note: requires crypto-js
*/
function constructTempUrl(method, expires, path, key) {
  hmacmsg = 'method'+'\n'+expires+'\n'+path;
  sig = Crypto.HMAC(Crypto.SHA1, hmacmsg, key);

  return path+"?temp_url_sig="+sig+"&temp_url_expires="+expires;
}
