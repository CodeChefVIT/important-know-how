package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	})

	// Listen and serve TLS adds a Transmission Layer Security to the application
	// So that only our server (and no server in between) will be able to decipher the data
	http.ListenAndServeTLS(":3000", "./cert.pem", "./key.pem", nil)
}

// Generate the HTTPS certificate by using a go package
// go run ~/go/src/crypto/tls/generate_cert.go -host localhost
// add the cert and key in the serve tls function
// go is automatically going to upgrade the protocol to HTTP 2 and add a TLS to it

/*
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem
*/
