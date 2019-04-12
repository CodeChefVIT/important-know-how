package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello world")
}

func apicallHandler(w http.ResponseWriter, r *http.Request) {
	// API call
	resp, _ := http.Get("http://localhost:8000")
	bytes, _ := ioutil.ReadAll(resp.Body)
	stringBody := string(bytes)
	resp.Body.Close()
	fmt.Fprintf(w, stringBody)
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/apicall", apicallHandler)
	fmt.Println("Listening...")
	http.ListenAndServe(":8000", nil)

}
