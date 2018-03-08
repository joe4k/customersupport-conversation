# Simple Conversation Application for project DED

This Node.js app demonstrates the Conversation service in a simple chat interface showing conversation responses for project DED.

![Demo](readme_images/demo.gif)

You can view a [demo][demo_url] of this app.

## Running the application

## Before you begin

1. On your terminal, create a workdir, $WORKDIR (for example /tmp/conv)

2. cd $WORKDIR

3. git clone git@github.ibm.com:project-ded/ded-conversation-one.git

4. cp .env.example .env

5. edit .env to provide the required credentials for Watson Conversation Service and the workspaces for DED

==> You will get these credentials by following steps 6-8

6. Log in to IBM Cloud (pka. Bluemix) by pointing your browser to https://bluemix.net

7. Create a Watson Conversation service and launch the tooling.

Capture the Conversation username and password as these are required in the .env file.

8. Import Workspace, select the file $WORKDIR/ded-conversation-one/training/workspace-ded-EN-OM_jkv2.json	

Once imported, get the workspace id ==> that will be the WORKSPACE_ID in your .env file

10. To run locally:

  * cd $WORKDIR/ded-conversation-one
  * npm install
  * npm start
  * point your browser to https://localhost:3000 and interact with the conversation for DED

11. To run on Bluemix

  * cd $WORKDIR/ded-conversation-one
  * edit the manifest.yml file to change the application name
  * cf login (provide Bluemix username and password and select the organization and space)
  * cf push
  * point your browser to https://$your_app_name.mybluemix.net
where your_app_name is what you specified in manifest.yml

## License

This sample code is licensed under Apache 2.0.
Full license text is available in [LICENSE](LICENSE).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

Find more open source projects on the
[IBM Github Page](http://ibm.github.io/).


[cf_docs]: (https://www.ibm.com/watson/developercloud/doc/common/getting-started-cf.html)
[cloud_foundry]: https://github.com/cloudfoundry/cli#downloads
[demo_url]: http://conversation-simple.mybluemix.net/
[doc_intents]: (http://www.ibm.com/watson/developercloud/doc/conversation/intent_ovw.shtml)
[docs]: http://www.ibm.com/watson/developercloud/doc/conversation/overview.shtml
[docs_landing]: (http://www.ibm.com/watson/developercloud/doc/conversation/index.shtml)
[node_link]: (http://nodejs.org/)
[npm_link]: (https://www.npmjs.com/)
[sign_up]: bluemix.net/registration
