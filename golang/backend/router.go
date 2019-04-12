package main

import (
	"net/http"
)

func main() {
	myMux := http.NewServeMux()
	myMux.HandleFunc("/", handler)

	// ServeMux is a multiplexer/ router
	http.ListenAndServe(":3000", myMux)
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world"))
}
