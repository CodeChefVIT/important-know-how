package main

import (
	"bufio"
	"log"
	"net/http"
	"os"
)

func myHandler(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL.Path)
	path := r.URL.Path[1:]
	log.Println(path)

	//stream, err := ioutil.ReadFile(string(path))
	file, err := os.Open(path)

	if err != nil {
		w.WriteHeader(404)
		w.Write([]byte("404 Not found " + http.StatusText(404)))
	} else {
		bufferReader := bufio.NewReader(file)
		bufferReader.WriteTo(w)
		//w.Header.Add("Content Type","application/json")
		//w.Write(stream)
	}
}

func main() {
	http.HandleFunc("/", myHandler)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
