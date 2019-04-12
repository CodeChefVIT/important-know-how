package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handleIndex)
	http.ListenAndServe(":3000", nil)
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		err := r.ParseForm() // ParseMultipartForm to deal with multipart data, it calls ParseForm also
		if err != nil {
			fmt.Println(err)
		}
		f := r.Form            // PostForm can be used to parse only body, Form gets both body and URL parameter data
		fmt.Println(f["name"]) // MultipartReader creates a stream of the input vals
		fmt.Println(f.Get("name"))
		w.Write([]byte("Heya"))
	}

}
