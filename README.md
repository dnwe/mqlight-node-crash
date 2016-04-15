# mqlight-node-crash
Code required to recreate a node crash using mqlight

## Steps to reproduce
1. npm install
2. Create a large file for testing - On windows I ran this command (in fixtures directory) `fsutil file createnew 5MB.dat 5120000`
2. In one console window run `node app.js`
3. In another window run `upload.sh`
4. Wait

The crash should occur with a minute or 2.

