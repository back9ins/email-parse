# email-parse

email-parse is a simple Express app that can accept a string of e-mail and will return only the reply. This is useful for receiving inbound e-mails and only needing the reply (not the whole chain).

### Installation

Clone the repository:

    git clone git@github.com:reiderrider/email-parse.git

Run `npm install` to install the required dependencies:

    sudo npm install

### Usage

An example POST request to `/parse` like the below will return the desired response (but have no effect given the text):

    POST /parse HTTP/1.1
    Host: {host of API}
    Content-Type: application/json

    {
      "reply": "my%20urlencoded%20text"
    }

And a response like so will be returned:

    Connection: keep-alive
    X-Powered-By: Express

    {
      "parsed": "my%20urlencoded%20text"
    }

POSTing to it with an actual e-mail chain will return only the reply, thanks to the mailstrip package.