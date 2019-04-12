package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// check toi see if the response writer can leverage the Pusher interface
		if pusher, ok := w.(http.Pusher); ok {
			pusher.Push("./styles.css", &http.PushOptions{
				Header: http.Header{"Content-Type": []string{"text/css"}},
			})
		}
		w.Write([]byte("Hello world"))
	})
	http.ListenAndServeTLS(":3000", "./cert.pem", "./key.pem", nil)
}

/**

@HTTP/2

1. Supports request multiplexing
2. Secure connection
3. Header compression
4. Server push


Rather than sending request and response, HTTP/2 uses streams for communication
In each stream, the data is sent as frames
For example, there are seperate frames for headers and the data so that the server
knows that its receiving headers so header comrpession algorithms can be applied for optimization

TLS > TCP connection > streams > frames > data


@Server_push

The client sends additional requests to the server to fetch data that we know the client will need, example
while we send an html page the browser has to make separate requests for /css/style.css etc

In server push, when a request is made, the server recognizes the files that the client will need and
preemptes that to the client, it then fulfills the request. When the client receives the page, it looks
at all the resources the server has pushed and fulfills all of the dependencies to render that document
This saves the client from sending an additional request to the server

While using server push make sure that the client supports it or build it in such a way that even if the
client does not support it, requests can be handled in the normal way
Make sure to do that in middleware also
**/
