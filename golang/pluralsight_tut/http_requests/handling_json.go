package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handleIndex)
	http.ListenAndServe(":3000", nil)
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	dec := json.NewDecoder(r.Body) // decodes the Body, which is a readstream
	var greet struct {
		Name string `json:"name"`
		Age  uint8  `json:"age"`
	}
	err := dec.Decode(&greet) // copies posted json to greet
	fmt.Println(greet)

	if err != nil {
		log.Println(err)
		enc := json.NewEncoder(w)
		enc.Encode(struct {
			Message string `json:message""`
		}{"Err"})
		return
	}

	enc := json.NewEncoder(w) // creates an encoder on the writestream and writes the json
	enc.Encode(struct {
		Message string `json:"message"`
	}{"Done"})

}
